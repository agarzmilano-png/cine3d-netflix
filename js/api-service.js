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
  }

  /**
   * Statik barındırma tespiti: /api/health yoksa canlı arama/detay/fragman
   * gibi sunucu gerektiren özellikler sessizce devre dışı bırakılır. Katalog,
   * afişler, fragmanlar (gömülü ID'ler), OST sesleri ve tüm oyunlar çalışmaya devam eder.
   */
  async isApiAvailable() {
    if (this.apiAvailable !== null) return this.apiAvailable;
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
    if (this.wikiCache.has(cleanTitle)) {
      return this.wikiCache.get(cleanTitle);
    }

    const queries = [
      cleanTitle,
      `${cleanTitle} (film)`,
      `${cleanTitle} (dizi)`
    ];

    for (const q of queries) {
      try {
        const url = `https://tr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`;
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          const data = await res.json();
          if (data && data.extract && data.extract.length > 50 && data.type !== 'disambiguation') {
            this.wikiCache.set(cleanTitle, data.extract);
            return data.extract;
          }
        }
      } catch (err) {
        // Sessizce sonraki aramaya geç
      }
    }

    this.wikiCache.set(cleanTitle, null);
    return null;
  }

  // OMDb Arama İsteği (API anahtarları sunucu proxy'si üzerinden tutulur)
  async searchOmdb(query) {
    if (!query || query.trim().length < 2) return [];
    if (!(await this.isApiAvailable())) return [];
    const cacheKey = `search_${query.toLowerCase().trim()}`;
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    try {
      const res = await fetch(`api/search?q=${encodeURIComponent(query.trim())}`);
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

  // Tekil Film / Dizi Detayı Çek (IMDb puanı, tam konu, yönetmen, oyuncular)
  async fetchMovieFullDetails(imdbId, initialTitle = '') {
    if (!imdbId) return null;
    if (!(await this.isApiAvailable())) return null;
    if (this.cache.has(imdbId)) return this.cache.get(imdbId);

    try {
      const res = await fetch(`api/details?imdbId=${encodeURIComponent(imdbId)}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && data.item) {
          const item = data.item;

          // Türkçe özet araması yap
          const trPlot = await this.fetchTurkishSummary(item.Title || initialTitle);

          // Afiş doğrulama ve yedekleme (OMDb afişi eksikse veya N/A ise Wikipedia ve sunucu API'sinden çek)
          let verifiedPoster = (item.Poster && item.Poster !== 'N/A' && item.Poster.startsWith('http')) ? item.Poster : null;
          if (!verifiedPoster) {
            verifiedPoster = await this.resolvePosterOnline(item.Title || initialTitle, item.Year, imdbId);
          }

          const parsed = this.normalizeMovieData(item, trPlot, verifiedPoster);

          // Gerçek yayın platformlarını JustWatch üzerinden çek (ezberleme yok; ham başlıkla sorgulanır)
          const streamInfo = await this.resolveStreamingProviders(item.Title || initialTitle, item.Year, item.Title);
          if (streamInfo) {
            parsed.streamingInfo = streamInfo;
          }

          this.cache.set(imdbId, parsed);
          return parsed;
        }
      }
    } catch (e) {
      console.warn(`OMDb detay hatası (${imdbId}):`, e);
    }
    return null;
  }

  // Canlı Yayın Platformu Çözücü (/api/providers)
  async resolveStreamingProviders(title, year = '', originalTitle = '') {
    if (!title) return null;
    const cacheKey = `providers_${title}_${originalTitle}_${year}`.toLowerCase().trim();
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    const staticFallback = {
      hasTrProvider: false,
      statusText: 'TR yayıncısı bulunamadı',
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
      statusText: 'TR yayıncısı bulunamadı',
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

    // 2. Doğrudan Vikipedi Summary API'si üzerinden kontrol et (en ve tr)
    const cleanTitle = (title || '').replace(/\(.*?\)/g, '').trim();
    const wikiQueries = [cleanTitle, `${cleanTitle} (film)`, `${cleanTitle} (TV series)`];

    for (const lang of ['en', 'tr']) {
      for (const q of wikiQueries) {
        try {
          const wikiUrl = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`;
          const res = await fetch(wikiUrl);
          if (res.ok) {
            const data = await res.json();
            const img = (data.originalimage && data.originalimage.source) || (data.thumbnail && data.thumbnail.source);
            if (img && img.startsWith('http')) {
              this.cache.set(cacheKey, img);
              return img;
            }
          }
        } catch (err) {}
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
      ageRating: esc(omdb.Rated && omdb.Rated !== 'N/A' ? omdb.Rated : (isSeries ? '16+' : 'Genel')),
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
      // Sunucu yoksa (statik yayın): gömülü katalog indeksinde ara.
      // İndeks GitHub Actions tarafından haftalık olarak JustWatch verisiyle yenilenir.
      if (!(await this.isApiAvailable())) {
        this.isFetching = false;
        const index = window.cine3dCatalog;
        if (!index) return [];
        await index.ensureLoaded();
        return index.search(query, maxResults);
      }

      const searchItems = await this.searchOmdb(query);
      if (!searchItems || searchItems.length === 0) {
        this.isFetching = false;
        return [];
      }

      const topItems = searchItems.slice(0, maxResults);
      const detailPromises = topItems.map(item => this.fetchMovieFullDetails(item.imdbID, item.Title));
      const results = await Promise.all(detailPromises);
      this.isFetching = false;
      return results.filter(Boolean);
    } catch (err) {
      console.error('Online arama hatası:', err);
      this.isFetching = false;
      return [];
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
