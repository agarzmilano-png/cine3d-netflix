/**
 * CINE3D - Çevrimiçi Film & Dizi Veri Çekme Servisi (Online Movie Service)
 * OMDb API, Vikipedi Türkçe Özeti ve YouTube Fragman Entegrasyonu
 */

class CinemaApiService {
  constructor() {
    this.cache = new Map();
    this.wikiCache = new Map();
    this.isFetching = false;
    // Sunucu tarafı /api uç noktaları var mı? (GitHub Pages gibi statik barındırmada yok)
    this.apiAvailable = null;
    // OMDb doğrudan (tarayıcıdan) kullanılabilir mi? Kota/anahtar hatasında 1 saat kapanır.
    this.omdbBlockedUntil = 0;
    this.quotaToastShown = false;

    // İsteğe bağlı: ?omdbkey=XXXX adresiyle kendi anahtarını kalıcı ekle
    try {
      const urlKey = new URLSearchParams(window.location.search).get('omdbkey');
      if (urlKey && urlKey.trim()) {
        localStorage.setItem('cine3d_omdb_keys', urlKey.trim());
        console.info('[Cine3D] OMDb anahtarı kaydedildi.');
      }
    } catch (e) { /* yoksay */ }
  }

  /**
   * OMDb anahtarları: localStorage > config > yerleşik demo anahtar.
   * Kişisel ücretsiz anahtar eklemek için konsolda:
   *   localStorage.setItem('cine3d_omdb_keys', 'anahtar1,anahtar2')
   */
  getOmdbKeys() {
    try {
      const stored = localStorage.getItem('cine3d_omdb_keys');
      if (stored && stored.trim()) return stored.split(',').map((s) => s.trim()).filter(Boolean);
    } catch (e) { /* localStorage kapalı */ }
    const cfg = window.CINE3D_CONFIG || {};
    if (Array.isArray(cfg.omdbKeys) && cfg.omdbKeys.length) return cfg.omdbKeys;
    return ['trilogy'];
  }

  /**
   * OMDb'yi tarayıcıdan doğrudan çağırır (CORS açık olduğu için sunucu gerekmez).
   * Anahtar rotasyonu yapar; tüm anahtarlar kota/geçersizse 1 saat devre dışı bırakır.
   */
  async omdbDirect(queryString) {
    if (Date.now() < this.omdbBlockedUntil) return null;
    const keys = this.getOmdbKeys();
    let sawQuotaError = false;

    for (const key of keys) {
      try {
        const res = await fetch(`https://www.omdbapi.com/?${queryString}&apikey=${encodeURIComponent(key)}`, { cache: 'no-store' });
        if (!res.ok) { sawQuotaError = true; continue; }
        const json = await res.json();
        if (json && json.Response === 'True') return json;
        const err = String((json && json.Error) || '');
        if (/invalid api key|request limit|too many|limit reached/i.test(err)) { sawQuotaError = true; continue; }
        return null; // gerçekten bulunamadı
      } catch (e) {
        sawQuotaError = true;
      }
    }

    if (sawQuotaError) {
      this.omdbBlockedUntil = Date.now() + 60 * 60 * 1000;
      console.warn('[Cine3D] OMDb kotası/anahtarı kullanılamıyor; 1 saat boyunca yerel indeks kullanılacak.');
    }
    return null;
  }

  /** Haftalık indeksten başlık eşleşmesiyle TR yayıncı listesi çıkarır. */
  findPlatformsFromIndex(title, year) {
    const idx = window.cine3dCatalog;
    if (!idx || !Array.isArray(idx.items)) return [];
    const norm = (s) => String(s || '')
      .replace(/[ıİ]/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    const t = norm(title);
    if (!t) return [];
    const y = parseInt(year, 10) || 0;
    const hit = idx.items.find((i) =>
      (norm(i.o) === t || norm(i.e) === t || norm(i.t) === t) &&
      (!y || !i.y || Math.abs(i.y - y) <= 1)
    );
    return hit && Array.isArray(hit.platforms) ? hit.platforms : [];
  }

  /**
   * Statik barındırma tespiti: /api/health yoksa canlı arama/detay/fragman
   * gibi sunucu gerektiren özellikler sessizce devre dışı bırakılır. Katalog,
   * afişler, fragmanlar (gömülü ID'ler), OST sesleri ve tüm oyunlar çalışmaya devam eder.
   */
  async isApiAvailable() {
    if (this.apiAvailable !== null) return this.apiAvailable;

    // Statik barındırmada (GitHub Pages) /api yok; gereksiz 404 isteği atmayalım.
    const host = window.location.hostname;
    const cfg = window.CINE3D_CONFIG || {};
    if (cfg.staticHosting === true || host.endsWith('.github.io') || host.endsWith('.pages.dev')) {
      this.apiAvailable = false;
      return false;
    }

    try {
      const res = await fetch('api/health', { cache: 'no-store' });
      const type = res.headers.get('content-type') || '';
      if (res.ok && type.includes('application/json')) {
        const data = await res.json();
        this.apiAvailable = !!(data && data.ok);
      } else {
        this.apiAvailable = false;
      }
    } catch (e) {
      this.apiAvailable = false;
    }
    if (!this.apiAvailable) {
      console.info('[Cine3D] Statik mod: /api uç noktaları bulunamadı, sunucu gerektiren canlı özellikler kapalı.');
    }
    return this.apiAvailable;
  }

  // İngilizce türleri Türkçeye çeviren sözlük
  static GENRE_TRANSLATIONS = {
    'action': 'Aksiyon',
    'sci-fi': 'Bilim Kurgu',
    'drama': 'Dram',
    'crime': 'Suç',
    'adventure': 'Macera',
    'thriller': 'Gerilim',
    'horror': 'Korku',
    'comedy': 'Komedi',
    'animation': 'Animasyon',
    'mystery': 'Gizem',
    'biography': 'Biyografi',
    'history': 'Tarih',
    'fantasy': 'Fantastik',
    'romance': 'Romantik',
    'family': 'Aile',
    'documentary': 'Belgesel',
    'war': 'Savaş',
    'western': 'Vahşi Batı',
    'music': 'Müzik',
    'musical': 'Müzikal',
    'sport': 'Spor'
  };

  translateGenres(genreStr) {
    if (!genreStr || genreStr === 'N/A') return ['Sinema'];
    return genreStr
      .split(',')
      .map(g => g.trim())
      .map(g => CinemaApiService.GENRE_TRANSLATIONS[g.toLowerCase()] || g)
      .filter(Boolean);
  }

  // Türkçe Vikipedi Özetini Çek (Doğal Türkçe Konu Anlatımı için)
  async fetchTurkishSummary(title) {
    if (!title) return null;
    const cleanTitle = title.trim();
    if (this.wikiCache.has(cleanTitle)) return this.wikiCache.get(cleanTitle);

    // DÜZELTME: REST /summary uç noktası olmayan başlıklarda 404 döndürüyordu
    // (konsolda 404 yağmuru). MediaWiki action=query API'si her zaman 200 döner
    // ve sayfa yoksa "missing" alanı verir.
    const queries = [cleanTitle, cleanTitle + ' (film)', cleanTitle + ' (dizi)'];

    for (const q of queries) {
      try {
        const url = 'https://tr.wikipedia.org/w/api.php?action=query&format=json&origin=*' +
          '&redirects=1&prop=extracts&explaintext=1&exintro=1&titles=' + encodeURIComponent(q);
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        const pages = (data && data.query && data.query.pages) || {};
        for (const key of Object.keys(pages)) {
          const page = pages[key];
          if (page && !page.missing && page.extract && page.extract.trim().length > 50) {
            const text = page.extract.trim();
            this.wikiCache.set(cleanTitle, text);
            return text;
          }
        }
      } catch (err) {
        // sessizce sonraki sorguya geç
      }
    }

    this.wikiCache.set(cleanTitle, null);
    return null;
  }

  // OMDb Arama: sunucu varsa proxy, yoksa tarayıcıdan doğrudan (CORS açık)
  async searchOmdb(query) {
    if (!query || query.trim().length < 2) return [];
    const cacheKey = `search_${query.toLowerCase().trim()}`;
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    const q = query.trim();

    if (await this.isApiAvailable()) {
      try {
        const res = await fetch(`api/search?q=${encodeURIComponent(q)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.success && Array.isArray(data.results)) {
            this.cache.set(cacheKey, data.results);
            return data.results;
          }
        }
      } catch (e) {
        console.warn('OMDb proxy arama hatası:', e);
      }
      return [];
    }

    // Sorgu sonunda yıl varsa başlığı ayır: OMDb'nin `y` parametresi sonuçları
    // gevşettiği için yılı kendimiz filtreliyoruz.
    // ("2001: A Space Odyssey" gibi başlıklarda yıl sonda olmadığı için dokunulmaz.)
    const yearAtEnd = /^(.*\S)\s+((?:19|20)\d{2})$/.exec(q);
    const wantedYear = yearAtEnd ? yearAtEnd[2] : '';
    const titleQuery = yearAtEnd ? yearAtEnd[1].trim() : q;

    const fold = (s) => String(s || '')
      .replace(/[ıİ]/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

    const json = await this.omdbDirect(`s=${encodeURIComponent(titleQuery)}`);
    let candidates = (json && Array.isArray(json.Search)) ? json.Search.slice() : [];

    // Yıl istenmiş ama sonuçlarda hiç o yıl yoksa OMDb'nin y filtresiyle tekrar dene
    if (wantedYear && candidates.length && !candidates.some((it) => String(it.Year || '').includes(wantedYear))) {
      const jsonY = await this.omdbDirect(`s=${encodeURIComponent(titleQuery)}&y=${wantedYear}`);
      const withYear = (jsonY && Array.isArray(jsonY.Search)) ? jsonY.Search : [];
      if (withYear.length) candidates = withYear.concat(candidates);
    }

    if (candidates.length) {
      // Alaka sıralaması: birebir başlık > başlık başlangıcı > içeren
      const qf = fold(titleQuery);
      const scored = candidates.map((it, i) => {
        const t = fold(it.Title);
        const yearOk = !!(wantedYear && String(it.Year || '').includes(wantedYear));
        let score = 0;
        if (t === qf) score = 100;
        else if (t.startsWith(qf)) score = 70;
        else if (t.includes(qf)) score = 40;
        else if (qf.split(' ').filter(Boolean).every((w) => t.includes(w))) score = 20;
        if (yearOk) score += 30; // istenen yıl varsa öne al
        return { it, score, i, yearOk };
      });

      // Yıl verilmişse ve tam eşleşen varsa, yılı tutmayanları at
      const hasYearMatch = scored.some((x) => x.yearOk);
      const sorted = scored
        .filter((x) => !wantedYear || !hasYearMatch || x.yearOk)
        .sort((a, b) => b.score - a.score || a.i - b.i)
        .map((x) => x.it);

      this.cache.set(cacheKey, sorted);
      return sorted;
    }
    return [];
  }

  // Tekil Film / Dizi Detayı: sunucu varsa proxy, yoksa OMDb'den doğrudan
  async fetchMovieFullDetails(imdbId, initialTitle = '') {
    if (!imdbId) return null;
    if (this.cache.has(imdbId)) return this.cache.get(imdbId);

    let item = null;

    if (await this.isApiAvailable()) {
      try {
        const res = await fetch(`api/details?imdbId=${encodeURIComponent(imdbId)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.success && data.item) item = data.item;
        }
      } catch (e) {
        console.warn(`OMDb proxy detay hatası (${imdbId}):`, e);
      }
    } else {
      item = await this.omdbDirect(`i=${encodeURIComponent(imdbId)}&plot=full`);
    }

    if (!item) return null;

    try {
      // Türkçe özet (tr.wikipedia CORS açık)
      const trPlot = await this.fetchTurkishSummary(item.Title || initialTitle);

      // Afiş yoksa Vikipedi'den tamamla
      let verifiedPoster = (item.Poster && item.Poster !== 'N/A' && item.Poster.startsWith('http')) ? item.Poster : null;
      if (!verifiedPoster) {
        verifiedPoster = await this.resolvePosterOnline(item.Title || initialTitle, item.Year, imdbId);
      }

      const parsed = this.normalizeMovieData(item, trPlot, verifiedPoster);

      // TR yayıncıları: haftalık güncellenen indeksten (JustWatch tarayıcıdan engelli)
      const index = window.cine3dCatalog;
      if (!index?.applyProviders(parsed)) {
        const streamInfo = await this.resolveStreamingProviders(item.Title || initialTitle, item.Year, item.Title);
        if (streamInfo && streamInfo.verified) {
          parsed.streamingInfo = streamInfo;
        }
      }

      this.cache.set(imdbId, parsed);
      return parsed;
    } catch (e) {
      console.warn(`Film detayı işlenemedi (${imdbId}):`, e);
      return null;
    }
  }

  // Canlı Yayın Platformu Çözücü (/api/providers)
  async resolveStreamingProviders(title, year = '', originalTitle = '') {
    if (!title) return null;
    const cacheKey = `providers_${title}_${originalTitle}_${year}`.toLowerCase().trim();
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    const staticFallback = {
      hasTrProvider: false,
      statusText: 'Yayıncı bilgisi doğrulanmadı',
      providers: [],
      globalProviders: []
    };

    if (!(await this.isApiAvailable())) return staticFallback;

    try {
      const apiUrl = `api/providers?title=${encodeURIComponent(title)}&year=${encodeURIComponent(year || '')}&originalTitle=${encodeURIComponent(originalTitle || '')}`;
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data.success) {
          this.cache.set(cacheKey, data);
          return data;
        }
      }
    } catch (e) {
      console.warn("Providers API çağrısı:", e);
    }

    return {
      hasTrProvider: false,
      statusText: 'Yayıncı bilgisi doğrulanmadı',
      providers: [],
      globalProviders: []
    };
  }

  // Çevrimiçi Afiş Doğrulayıcı & Çok Katmanlı Afiş Çözücü
  async resolvePosterOnline(title, year = '', imdbId = '') {
    if (!title && !imdbId) return null;
    const cacheKey = `poster_${title}_${year}_${imdbId}`.toLowerCase().trim();
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    // 1. Sunucu /api/poster uç noktasına sor (statik modda atlanır)
    const apiUp = await this.isApiAvailable();
    if (apiUp) {
      try {
        const apiUrl = `api/poster?title=${encodeURIComponent(title)}&year=${encodeURIComponent(year || '')}&imdbId=${encodeURIComponent(imdbId || '')}`;
        const res = await fetch(apiUrl);
        if (res.ok) {
          const data = await res.json();
          if (data && data.success && data.posterUrl) {
            this.cache.set(cacheKey, data.posterUrl);
            return data.posterUrl;
          }
        }
      } catch (e) {
        // sunucu kapalıysa veya hata verirse Wikipedia fallback'ine geç
      }
    }

    // 2. Sunucu yoksa: OMDb'yi doğrudan dene (CORS açık)
    if (!apiUp && (title || imdbId)) {
      const q = imdbId ? `i=${encodeURIComponent(imdbId)}`
                       : `t=${encodeURIComponent(title)}${year ? `&y=${encodeURIComponent(year)}` : ''}`;
      const j = await this.omdbDirect(q);
      if (j && j.Poster && j.Poster !== 'N/A' && j.Poster.startsWith('http')) {
        this.cache.set(cacheKey, j.Poster);
        return j.Poster;
      }
    }

    // 3. Vikipedi afişi (MediaWiki API — 404 üretmez)
    const cleanTitle = (title || '').replace(/\(.*?\)/g, '').trim();
    const wikiQueries = [cleanTitle, cleanTitle + ' (film)', cleanTitle + ' (TV series)'];

    for (const lang of ['en', 'tr']) {
      for (const q of wikiQueries) {
        try {
          const wikiUrl = 'https://' + lang + '.wikipedia.org/w/api.php?action=query&format=json&origin=*' +
            '&redirects=1&prop=pageimages&piprop=original|thumbnail&pithumbsize=500&titles=' + encodeURIComponent(q);
          const res = await fetch(wikiUrl);
          if (!res.ok) continue;
          const data = await res.json();
          const pages = (data && data.query && data.query.pages) || {};
          for (const key of Object.keys(pages)) {
            const page = pages[key];
            if (!page || page.missing) continue;
            const img = (page.original && page.original.source) || (page.thumbnail && page.thumbnail.source);
            if (img && img.startsWith('http')) {
              this.cache.set(cacheKey, img);
              return img;
            }
          }
        } catch (err) { /* sonraki */ }
      }
    }

    return null;
  }

  // Metinleri HTML güvenli hale getir (XSS önleme — veri kaynağında tek merkezde temizlenir,
  // böylece tüm innerHTML render noktaları korunur; canvas/textContent kullanımında decode edilir)
  static escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // OMDb formatını Cine3D Netflix formatına dönüştürür
  normalizeMovieData(omdb, trPlot = null, verifiedPoster = null) {
    const esc = CinemaApiService.escapeHtml;
    const rawRating = parseFloat(omdb.imdbRating);
    const imdbRating = isNaN(rawRating) ? 7.5 : rawRating;
    const genres = this.translateGenres(omdb.Genre);
    const isSeries = (omdb.Type === 'series');

    // Süre / Sezon Formatı
    let durationText = omdb.Runtime;
    if (durationText && durationText !== 'N/A') {
      const minutes = parseInt(durationText, 10);
      if (!isNaN(minutes)) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        durationText = hours > 0 ? `${hours}s ${mins}dk` : `${mins}dk`;
      }
    } else {
      durationText = isSeries ? 'Dizi' : '2s';
    }

    // Afiş Kontrolü & Güvenli Doğrulama
    const candidatePoster = verifiedPoster || (omdb.Poster && omdb.Poster !== 'N/A' && omdb.Poster.startsWith('http') ? omdb.Poster : null);
    const posterUrl = candidatePoster
      ? candidatePoster
      : getFallbackPoster(omdb.Title, genres[0], imdbRating);

    // Konu Metni: Varsa Türkçe Vikipedi özeti, yoksa OMDb konusu
    let summary = trPlot || (omdb.Plot && omdb.Plot !== 'N/A' ? omdb.Plot : 'Film hakkında henüz ayrıntılı konu özeti girilmemiş.');
    if (!trPlot && omdb.Plot && omdb.Plot !== 'N/A') {
      summary = `${summary} (Orijinal sinopsis)`;
    }

    return {
      id: (omdb.imdbID && /^tt\d+$/.test(omdb.imdbID)) ? omdb.imdbID : `online_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      imdbID: omdb.imdbID,
      title: esc(omdb.Title || 'Bilinmeyen Film'),
      originalTitle: esc(omdb.Title || 'Bilinmeyen'),
      // Ham arama metni: görüntü alanları escape'li olduğundan arama bunun üzerinden yapılır
      searchText: [omdb.Title, omdb.Director, omdb.Actors, omdb.Plot, omdb.Genre]
        .filter(v => v && v !== 'N/A')
        .join(' ')
        .toLowerCase(),
      year: parseInt(omdb.Year, 10) || 2024,
      imdbRating: imdbRating,
      imdbVotes: esc(omdb.imdbVotes && omdb.imdbVotes !== 'N/A' ? omdb.imdbVotes : '150K'),
      duration: durationText,
      ageRating: esc(omdb.Rated && omdb.Rated !== 'N/A' ? omdb.Rated : 'Yaş bilgisi bilinmiyor'),
      genres: genres,
      director: esc(omdb.Director && omdb.Director !== 'N/A' ? omdb.Director : (isSeries ? 'Dizi Yapımı' : 'Belirtilmemiş')),
      cast: omdb.Actors && omdb.Actors !== 'N/A' ? omdb.Actors.split(',').map(a => esc(a.trim())) : ['Oyuncular listelenmedi'],
      tagline: esc(omdb.Awards && omdb.Awards !== 'N/A' ? omdb.Awards : `${isSeries ? 'Popüler Dizi' : 'Popüler Film'} • IMDb ${imdbRating}`),
      awards: esc(omdb.Awards && omdb.Awards !== 'N/A' ? omdb.Awards : 'Popüler Yapım'),
      summary: esc(summary),
      posterUrl: posterUrl,
      backdropUrl: posterUrl,
      // İnternetten çekilen filmler için akıllı YouTube arama fragmanı
      trailerYoutubeId: null, // Dinamik oynatıcı search list modunu kullanır
      isFeatured: false,
      isOnlineFetched: true,
      mediaType: isSeries ? 'series' : 'movie',
      isSeries: isSeries
    };
  }

  // Canlı Arama: Sorguyu internette aratıp zengin detaylarıyla birlikte döndürür
  async searchAndEnrich(query, maxResults = 8) {
    if (this.isFetching) return [];
    this.isFetching = true;

    try {
      const index = window.cine3dCatalog;
      // İndeksi paralel indir: hem yedek arama hem TR yayıncı eşleşmesi için gerekli
      const indexReady = index ? index.ensureLoaded().catch(() => []) : Promise.resolve([]);

      // 1) Sunucu varsa proxy, yoksa OMDb'ye doğrudan (tarayıcıdan, CORS açık)
      const searchItems = await this.searchOmdb(query);
      await indexReady;

      if (!searchItems || searchItems.length === 0) {
        // 2) OMDb sonuç vermedi (kota/bağlantı): gömülü haftalık indeks
        if (Date.now() < this.omdbBlockedUntil && !this.quotaToastShown && window.app?.showToast) {
          this.quotaToastShown = true;
          window.app.showToast('ℹ️ Canlı arama kotası doldu; yerel yapım indeksi kullanılıyor.', 'info');
        }
        if (!index) return [];
        return index.search(query, maxResults);
      }

      const topItems = searchItems.slice(0, maxResults);
      const detailPromises = topItems.map(item => this.fetchMovieFullDetails(item.imdbID, item.Title));
      const results = await Promise.all(detailPromises);
      return results.filter(Boolean);
    } catch (err) {
      console.error('Online arama hatası:', err);
      return [];
    } finally {
      this.isFetching = false;
    }
  }

  // Sürekli film çeken hazır çevrimiçi paketler (Kullanıcı dilediğinde ya da açılışta zenginleştirmek için)
  async fetchCuratedOnlineBatch(category = 'trending') {
    // Sunucu yoksa: gömülü indeksten günlük paket döndür.
    if (!(await this.isApiAvailable())) {
      const index = window.cine3dCatalog;
      if (!index) return [];
      await index.ensureLoaded();
      return index.batch(category, 8);
    }

    const queryMap = {
      trending: ['The Penguin', 'Shogun', 'House of the Dragon', 'Dune: Prophecy', 'Silo', 'Baby Reindeer'],
      masterpieces: ['Goodfellas', 'Casablanca', '12 Angry Men', 'Taxi Driver', 'Apocalypse Now', 'Rear Window'],
      series: ['The Sopranos', 'Better Call Saul', 'The Wire', 'Sherlock', 'Peaky Blinders', 'Mindhunter'],
      scifi: ['Arrival', '2001: A Space Odyssey', 'Ex Machina', 'Children of Men', 'Edge of Tomorrow', 'District 9'],
      action: ['Heat', 'Die Hard', 'Speed', 'The Raid', 'Kill Bill: Vol. 1', 'Baby Driver']
    };

    const queries = queryMap[category] || queryMap.trending;
    const fetchPromises = queries.map(async (title) => {
      const items = await this.searchOmdb(title);
      if (items && items.length > 0) {
        return await this.fetchMovieFullDetails(items[0].imdbID, title);
      }
      return null;
    });

    const results = await Promise.all(fetchPromises);
    return results.filter(Boolean);
  }

  // YouTube Gerçek Video ID Çözücü
  async resolveTrailerVideoId(title, year = '') {
    if (!title) return null;
    if (!(await this.isApiAvailable())) return null;
    const cacheKey = `yt_vid_${title}_${year}`.toLowerCase().trim();
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    try {
      const apiUrl = `api/trailer?title=${encodeURIComponent(title)}&year=${encodeURIComponent(year || '')}`;
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.videoId) {
          this.cache.set(cacheKey, data.videoId);
          return data.videoId;
        }
      }
    } catch (e) {
      console.warn("Trailer API çağrısı:", e);
    }

    return null;
  }
}

window.cinemaApiService = new CinemaApiService();
