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

  // Tüm aksanları sadeleştirir: "Shōgun" -> "shogun", "Amélie" -> "amelie",
  // "Şogun" -> "sogun" gibi yazım farkları aramayı bozmasın.
  function normalize(text) {
    return String(text || '')
      .replace(/[ıİ]/g, 'i')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('tr')
      .replace(/[^a-z0-9 ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  const CatalogIndex = {
    items: null,
    loading: null,
    loadedAt: 0,
    generatedAt: null,

    async ensureLoaded() {
      if (this.items) return this.items;
      if (this.loading) return this.loading;
      this.loading = fetch(INDEX_URL, { cache: 'no-cache' })
        .then((res) => {
          if (!res.ok) throw new Error(`indeks yüklenemedi (${res.status})`);
          return res.json();
        })
        .then((data) => {
          if (data.country !== 'TR' || !Array.isArray(data.items)) throw new Error('Geçersiz Türkiye indeksi');
          this.items = Array.isArray(data.items) ? data.items : [];
          this.generatedAt = Number.isFinite(Date.parse(data.generatedAt)) ? data.generatedAt : null;
          this.loadedAt = Date.now();
          console.info(`[Cine3D] Katalog indeksi hazır: ${this.items.length} yapım`);
          return this.items;
        })
        .catch((err) => {
          console.warn('[Cine3D] Katalog indeksi yüklenemedi:', err.message);
          // Geçici ağ hatasını kalıcı boş indeks olarak saklama; tekrar denenebilir.
          return [];
        })
        .finally(() => { this.loading = null; });
      return this.loading;
    },

    /** Aynı başlıklı yeniden çevrimleri karıştırmamak için yıl + format da eşleşir. */
    findMovie(movie) {
      if (!this.items || !movie) return null;
      if (movie.imdbID) {
        const identified = this.items.filter(item => item.imdbID === movie.imdbID && (item.type === 'series') === !!movie.isSeries);
        if (identified.length) return identified.length === 1 ? identified[0] : null;
      }
      const names = [movie.originalTitle, movie.title].map(normalize).filter(Boolean);
      const year = parseInt(movie.year, 10);
      if (!names.length || !year) return null;
      const matches = this.items.filter(item => item.y === year &&
        !(item.imdbID && movie.imdbID && item.imdbID !== movie.imdbID) &&
        (item.type === 'series') === !!movie.isSeries &&
        [item.o, item.t, item.e].some(name => name && names.includes(normalize(name))));
      return matches.length === 1 ? matches[0] : null;
    },

    applyProviders(movie, item = this.findMovie(movie)) {
      if (!item) return false;
      const checkedAt = item.providerCheckedAt || this.generatedAt;
      // Daha yeni canlı sorgu, haftalık indeks tarafından ezilmez.
      if (Date.parse(movie.streamingInfo?.checkedAt) > Date.parse(checkedAt)) return false;
      movie.platforms = [...new Set(item.platforms || [])];
      movie.providerCheckedAt = checkedAt;
      movie.streamingInfo = {
        hasTrProvider: movie.platforms.length > 0,
        providers: movie.platforms.map(id => ({ id, url: (item.providers || []).find(p => p.id === id)?.url || null })),
        globalProviders: [],
        checkedAt,
        source: 'JustWatch Türkiye indeksi',
        verified: Number.isFinite(Date.parse(checkedAt))
      };
      return true;
    },

    /** İndeks kaydını uygulamanın film nesnesine çevirir. */
    toMovie(item) {
      const isSeries = item.type === 'series';
      const genres = (item.genres || []).map((g) => GENRE_MAP[g] || g).filter(Boolean);
      const movie = {
        id: `idx_${item.id}`,
        imdbID: item.imdbID || null,
        title: item.t,
        originalTitle: item.o,
        searchText: `${item.t} ${item.o} ${item.e || ''}`.toLocaleLowerCase('tr'),
        year: item.y,
        imdbRating: item.imdb,
        imdbVotes: formatVotes(item.votes),
        duration: formatDuration(item.runtime, isSeries),
        ageRating: item.ageRating || 'Yaş bilgisi bilinmiyor',
        ageRatingCountry: item.ageRatingCountry || null,
        ageRatingSource: item.ageRatingSource || null,
        genres: genres.length ? genres : ['Sinema'],
        director: 'Belirtilmemiş',
        cast: ['Oyuncular listelenmedi'],
        tagline: `${isSeries ? 'Popüler Dizi' : 'Popüler Film'} • IMDb ${item.imdb}`,
        awards: isSeries ? 'Popüler Dizi' : 'Popüler Film',
        summary: item.plot || 'Bu yapım için henüz ayrıntılı konu özeti girilmemiş.',
        posterUrl: item.poster,
        backdropUrl: item.poster,
        trailerYoutubeId: item.yt || null,
        trailerVerification: item.trailerVerification || null,
        platforms: item.platforms || [],
        isFeatured: false,
        isOnlineFetched: true,
        isIndexEntry: true,
        indexSlug: item.id,
        mediaType: isSeries ? 'series' : 'movie',
        isSeries
      };
      this.applyProviders(movie, item);
      return movie;
    },

    /** Başlık/özgün ad üzerinde ağırlıklı arama. */
    search(query, limit = 8) {
      if (!this.items) return [];
      const q = normalize(query);
      if (q.length < 2) return [];

      const scored = [];
      for (const item of this.items) {
        // Yerelleştirilmiş ad (t), özgün ad (o) ve İngilizce ad (e) birlikte aranır:
        // "Parasite" -> "Parazit", "Shōgun" -> "shogun", "Tutsak" -> "prisoners".
        const names = [normalize(item.t), normalize(item.o), normalize(item.e || '')].filter(Boolean);
        let score = 0;
        if (names.some((n) => n === q)) score = 100;
        else if (names.some((n) => n.startsWith(q))) score = 80;
        else if (names.some((n) => n.includes(q))) score = 60;
        else if (q.split(' ').every((w) => names.some((n) => n.includes(w)))) score = 40;
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
