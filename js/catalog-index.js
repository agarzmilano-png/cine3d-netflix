/**
 * CINE3D - Katalog İndeksi (sunucusuz "canlı arama")
 *
 * data/catalog.json, GitHub Actions tarafından haftalık olarak JustWatch'un herkese
 * açık API'sinden üretilir. Böylece site; OMDb anahtarı, sunucu veya CORS derdi
 * olmadan 450+ güncel yapım üzerinde arama yapabilir, yayıncı bilgilerini gösterebilir.
 *
 * /api uç noktaları varsa (kendi Node sunucusu) bu modül devre dışı kalır.
 */
(function () {
  'use strict';

  const INDEX_URL = 'data/catalog.json';

  // JustWatch tür kısa kodları -> Türkçe sinema türleri
  const GENRE_MAP = {
    act: 'Aksiyon', ani: 'Animasyon', cmy: 'Komedi', crm: 'Suç', doc: 'Belgesel',
    drm: 'Dram', eur: 'Avrupa', fml: 'Aile', fnt: 'Fantastik', hrr: 'Korku',
    hst: 'Tarih', msc: 'Müzik', rly: 'Gerçeklik', rma: 'Romantik', scf: 'Bilim Kurgu',
    spt: 'Spor', trl: 'Gerilim', war: 'Savaş', wsn: 'Vahşi Batı'
  };

  function formatVotes(v) {
    const n = Number(v) || 0;
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${Math.round(n / 1000)}K`;
    return String(n);
  }

  function formatDuration(minutes, isSeries) {
    const m = Number(minutes) || 0;
    if (!m) return isSeries ? 'Dizi' : '2s';
    if (isSeries) return `${m} dk / bölüm`;
    const h = Math.floor(m / 60);
    const rest = m % 60;
    return h > 0 ? `${h}s ${rest}dk` : `${rest}dk`;
  }

  function normalize(text) {
    return String(text || '')
      .toLocaleLowerCase('tr')
      .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g')
      .replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[^a-z0-9 ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  const CatalogIndex = {
    items: null,
    loading: null,
    loadedAt: 0,

    async ensureLoaded() {
      if (this.items) return this.items;
      if (this.loading) return this.loading;
      this.loading = fetch(INDEX_URL, { cache: 'force-cache' })
        .then((res) => {
          if (!res.ok) throw new Error(`indeks yüklenemedi (${res.status})`);
          return res.json();
        })
        .then((data) => {
          this.items = Array.isArray(data.items) ? data.items : [];
          this.loadedAt = Date.now();
          console.info(`[Cine3D] Katalog indeksi hazır: ${this.items.length} yapım`);
          return this.items;
        })
        .catch((err) => {
          console.warn('[Cine3D] Katalog indeksi yüklenemedi:', err.message);
          this.items = [];
          return this.items;
        })
        .finally(() => { this.loading = null; });
      return this.loading;
    },

    /** İndeks kaydını uygulamanın film nesnesine çevirir. */
    toMovie(item) {
      const isSeries = item.type === 'series';
      const genres = (item.genres || []).map((g) => GENRE_MAP[g] || g).filter(Boolean);
      return {
        id: `idx_${item.id}`,
        imdbID: null,
        title: item.t,
        originalTitle: item.o,
        searchText: `${item.t} ${item.o}`.toLocaleLowerCase('tr'),
        year: item.y,
        imdbRating: item.imdb,
        imdbVotes: formatVotes(item.votes),
        duration: formatDuration(item.runtime, isSeries),
        ageRating: isSeries ? '16+' : '13+',
        genres: genres.length ? genres : ['Sinema'],
        director: 'Belirtilmemiş',
        cast: ['Oyuncular listelenmedi'],
        tagline: `${isSeries ? 'Popüler Dizi' : 'Popüler Film'} • IMDb ${item.imdb}`,
        awards: isSeries ? 'Popüler Dizi' : 'Popüler Film',
        summary: item.plot || 'Bu yapım için henüz ayrıntılı konu özeti girilmemiş.',
        posterUrl: item.poster,
        backdropUrl: item.poster,
        trailerYoutubeId: null,
        platforms: item.platforms || [],
        isFeatured: false,
        isOnlineFetched: true,
        isIndexEntry: true,
        mediaType: isSeries ? 'series' : 'movie',
        isSeries
      };
    },

    /** Başlık/özgün ad üzerinde ağırlıklı arama. */
    search(query, limit = 8) {
      if (!this.items) return [];
      const q = normalize(query);
      if (q.length < 2) return [];

      const scored = [];
      for (const item of this.items) {
        const title = normalize(item.t);
        const original = normalize(item.o);
        let score = 0;
        if (title === q || original === q) score = 100;
        else if (title.startsWith(q) || original.startsWith(q)) score = 80;
        else if (title.includes(q) || original.includes(q)) score = 60;
        else if (q.split(' ').every((w) => title.includes(w) || original.includes(w))) score = 40;
        if (!score) continue;
        score += Math.min(15, (Number(item.imdb) || 0)); // eşitlikte yüksek puan öne
        scored.push({ item, score });
      }

      return scored
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((s) => this.toMovie(s.item));
    },

    /** "Katalogdan yeni yapım ekle" için rastgele/etiketli paket. */
    batch(kind = 'trending', limit = 8) {
      if (!this.items) return [];
      let pool = this.items.slice();

      const genreByKind = {
        scifi: 'scf', action: 'act', masterpieces: 'drm', series: null
      };
      if (kind === 'series') {
        pool = pool.filter((i) => i.type === 'series');
      } else if (genreByKind[kind]) {
        pool = pool.filter((i) => (i.genres || []).includes(genreByKind[kind]));
      }
      if (pool.length < limit) pool = this.items.slice();

      // Deterministik "günlük" başlangıç + her tıklamada ilerleyen pencere:
      // aynı gün art arda tıklamalar hep yeni yapımlar ekler.
      const day = Math.floor(Date.now() / 86400000);
      this._batchCount = (this._batchCount || 0) + 1;
      const maxStart = Math.max(1, pool.length - limit);
      const start = (day * 7 + this._batchCount * limit) % maxStart;
      return pool.slice(start, start + limit).map((i) => this.toMovie(i));
    }
  };

  window.cine3dCatalog = CatalogIndex;
})();