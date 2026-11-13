const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Bağımlılıksız .env yükleyici: OMDb anahtarları artık kaynak kodda tutulmuyor.
// .env dosyası veya ortam değişkeni yoksa yalnızca OMDb'nin herkese açık demo anahtarı kullanılır.
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      if (!line.trim() || line.trim().startsWith('#')) continue;
      const m = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/.exec(line);
      if (!m) continue;
      if (process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
} catch (e) {
  console.warn('.env okunamadı:', e.message);
}

const PORT = Number(process.env.PORT || 3300);
// Tünel (cloudflared) yalnızca localhost'a bağlanır; LAN'a açmak için HOST=0.0.0.0 verin.
const HOST = process.env.HOST || '127.0.0.1';

// Giden API çağrıları için paylaşılan bağlantı havuzu:
// her istek yeni TCP+TLS el sıkışması açmak yerine mevcut bağlantıyı yeniden kullanır
const outboundAgent = new https.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 16
});

// --- ZAMAN AŞIMI KORUMASI ---
// Timeout'suz bir upstream (OMDb/YouTube/iTunes/Deezer/JustWatch) isteği sonsuza
// kadar asılı bırakıp Cloudflare 524'e ve soket havuzunun kilitlenmesine yol açıyordu.
const OUTBOUND_TIMEOUT_MS = Number(process.env.OUTBOUND_TIMEOUT_MS || 8000);
const STREAM_TIMEOUT_MS = Number(process.env.STREAM_TIMEOUT_MS || 20000);

function httpGet(url, options = {}, onResponse) {
  const { timeoutMs = OUTBOUND_TIMEOUT_MS, ...rest } = options;
  const req = https.get(url, { agent: outboundAgent, ...rest }, (res) => {
    res.setTimeout(timeoutMs, () => res.destroy(new Error('Yanıt zaman aşımı')));
    onResponse(res);
  });
  req.setTimeout(timeoutMs, () => req.destroy(new Error('Bağlantı zaman aşımı')));
  // Çağıran taraf kendi 'error' dinleyicisini ekliyor; buradaki boş dinleyici
  // çift tetiklenen hatalarda süreç çökmesini engeller.
  req.on('error', () => {});
  return req;
}

function httpsRequest(url, options = {}, onResponse) {
  const { timeoutMs = OUTBOUND_TIMEOUT_MS, agent = outboundAgent, ...rest } = options;
  const req = https.request(url, { agent, ...rest }, (res) => {
    res.setTimeout(timeoutMs, () => res.destroy(new Error('Yanıt zaman aşımı')));
    onResponse(res);
  });
  req.setTimeout(timeoutMs, () => req.destroy(new Error('Bağlantı zaman aşımı')));
  req.on('error', () => {});
  return req;
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.ico': 'image/x-icon'
};

// --- STATİK DOSYA BEYAZ LİSTESİ ---
// Önceden proje kökündeki her şey servis ediliyordu: cloudflared.exe (55MB),
// server.js (kaynak kod), package.json, test dosyaları, .gitignore...
const PUBLIC_EXT = new Set([
  '.html', '.css', '.js', '.json', '.webmanifest',
  '.png', '.jpg', '.jpeg', '.svg', '.ico',
  '.mp3', '.m4a', '.wav', '.ogg'
]);
const BLOCKED_FILES = new Set([
  'server.js', 'server.js.bak', 'test_audio_debug.js',
  'package.json', 'package-lock.json', 'render.yaml'
]);
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN'
};

function isPublicAsset(relPath, ext) {
  if (!PUBLIC_EXT.has(ext)) return false;
  if (relPath.split('/').some(seg => seg.startsWith('.'))) return false;
  return !BLOCKED_FILES.has(relPath.toLowerCase());
}

function sendText(res, status, message, extraHeaders = {}) {
  const body = Buffer.from(message, 'utf8');
  res.writeHead(status, {
    ...SECURITY_HEADERS,
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': body.length,
    ...extraHeaders
  });
  return res.end(body);
}

function pipeFile(res, filePath, options, status, headers) {
  const stream = fs.createReadStream(filePath, options);
  // Dosya okuma sırasında oluşan hata yakalanmazsa 'error' olayı süreci çökertiyordu.
  stream.on('error', () => {
    if (!res.headersSent) {
      sendText(res, 500, 'Dosya okuma hatası.');
    } else {
      res.destroy();
    }
  });
  res.writeHead(status, headers);
  stream.pipe(res);
  // İstemci bağlantıyı keserse dosya tanıtıcısı sızmasın
  res.on('close', () => stream.destroy());
}

// Önbellekler (Cache) — TTL'li ve boyut sınırlı; uzun soluklu çalışmada RAM şişmesini önler
class TTLCache {
  constructor(ttlMs, maxEntries = 800) {
    this.ttlMs = ttlMs;
    this.maxEntries = maxEntries;
    this.map = new Map();
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  get(key) {
    const entry = this.map.get(key);
    if (!entry) return undefined;
    if (Date.now() - entry.t > this.ttlMs) {
      this.map.delete(key);
      return undefined;
    }
    return entry.v;
  }

  set(key, value) {
    if (this.map.size >= this.maxEntries) {
      // Önce süresi geçenleri temizle; hâlâ doluysa en eskiyi at (basit LRU)
      const now = Date.now();
      for (const [k, e] of this.map) {
        if (now - e.t > this.ttlMs) this.map.delete(k);
        if (this.map.size < this.maxEntries) break;
      }
      while (this.map.size >= this.maxEntries) {
        this.map.delete(this.map.keys().next().value);
      }
    }
    this.map.set(key, { v: value, t: Date.now() });
  }
}

const HOUR_MS = 60 * 60 * 1000;
const trailerCache = new TTLCache(6 * HOUR_MS);
const providersCache = new TTLCache(6 * HOUR_MS);
const posterCache = new TTLCache(24 * HOUR_MS);
const ostCache = new TTLCache(1 * HOUR_MS);
const searchCache = new TTLCache(1 * HOUR_MS);
const detailsCache = new TTLCache(24 * HOUR_MS);

// Statik metin dosyaları için gzip arabelleği (dosya değişmedikçe yeniden sıkıştırma yok)
const GZIP_TYPES = new Set(['.html', '.css', '.js', '.json', '.svg', '.mjs', '.txt']);
const gzipCache = new Map();

// Yerel Orijinal OST Veritabanı
let MOVIE_SOUNDTRACKS = {};
try {
  const importedOst = require('./js/movie-soundtracks.js');
  MOVIE_SOUNDTRACKS = importedOst.MOVIE_SOUNDTRACKS || importedOst || {};
} catch (e) {
  console.warn('movie-soundtracks.js yüklenemedi:', e.message);
}

// --- DOĞRUDAN SES AKIŞI ÇÖZÜCÜ (Apple Music / iTunes API - Sıfır Hata 153 Riski) ---
function fetchItunesAudioPreview(title, originalTitle = '', composer = '') {
  return new Promise((resolve) => {
    const queries = [];
    if (originalTitle && composer) queries.push(`${originalTitle} ${composer}`);
    if (title && composer) queries.push(`${title} ${composer}`);
    if (originalTitle) queries.push(`${originalTitle} soundtrack`);
    if (title) queries.push(`${title} soundtrack`);

    const tryNext = (idx) => {
      if (idx >= queries.length) return resolve(null);
      const q = queries[idx];
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&media=music&entity=song&limit=1`;
      httpGet(itunesUrl, { agent: outboundAgent }, (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => {
          try {
            const j = JSON.parse(data);
            if (j.results && j.results.length > 0 && j.results[0].previewUrl) {
              return resolve({
                audioUrl: j.results[0].previewUrl,
                trackName: j.results[0].trackName,
                artistName: j.results[0].artistName,
                artworkUrl: j.results[0].artworkUrl100
              });
            }
          } catch (e) {}
          tryNext(idx + 1);
        });
      }).on('error', () => tryNext(idx + 1));
    };

    tryNext(0);
  });
}

// --- OMDb PROXY (API anahtarları tarayıcıya gönderilmez) ---
// DÜZELTME: Anahtarlar kaynak koda gömülüydü ve statik servis + ACAO:* nedeniyle
// sızabiliyordu. Artık yalnızca .env / ortam değişkeni üzerinden okunur.
const OMDB_KEYS = (process.env.OMDB_API_KEYS || 'trilogy')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

if (!process.env.OMDB_API_KEYS) {
  console.warn('[OMDb] OMDB_API_KEYS tanımlı değil; demo anahtarı (trilogy) kullanılıyor — günlük kota çok düşük.');
}

function omdbRequest(queryString) {
  return new Promise((resolve) => {
    const tryKey = (idx) => {
      if (idx >= OMDB_KEYS.length) return resolve(null);
      const omdbUrl = `https://www.omdbapi.com/?${queryString}&apikey=${encodeURIComponent(OMDB_KEYS[idx])}`;
      httpGet(omdbUrl, { agent: outboundAgent }, (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => {
          try {
            const j = JSON.parse(data);
            if (j && j.Response === 'True') return resolve(j);
          } catch (e) {}
          tryKey(idx + 1);
        });
      }).on('error', () => tryKey(idx + 1));
    };
    tryKey(0);
  });
}

// --- ORİJİNAL DİZİ & FİLM MÜZİĞİ (OST) ÇÖZÜCÜ (/api/ost) ---
async function resolveYoutubeOst(title, originalTitle = '', year = '', composer = '', id = '') {
  const cacheKey = `${id}_${title}_${originalTitle}_${composer}_${year}`.toLowerCase().trim();
  if (ostCache.has(cacheKey)) {
    return ostCache.get(cacheKey);
  }

  // 1. Doğrulanmış curated OST bilgisi
  let curated = null;
  if (id && MOVIE_SOUNDTRACKS[id]) {
    curated = MOVIE_SOUNDTRACKS[id];
  } else {
    const cleanT = (title || '').toLowerCase().trim();
    const cleanOrig = (originalTitle || '').toLowerCase().trim();
    for (const key in MOVIE_SOUNDTRACKS) {
      if (key === cleanT || key === cleanOrig) {
        curated = MOVIE_SOUNDTRACKS[key];
        break;
      }
    }
  }

  if (curated) {
    const localAudioPath = `/audio/ost/${id}.mp3`;
    const result = {
      trackTitle: curated.track,
      composer: curated.composer,
      audioUrl: localAudioPath,
      videoId: curated.youtubeId,
      description: curated.description,
      source: 'curated'
    };
    ostCache.set(cacheKey, result);
    return result;
  }

  // iTunes/Apple Music canlı ses önizlemesini çöz
  // DÜZELTME: Bu çağrı YouTube aramasından ÖNCE tek başına bekleniyordu (4 arama ×
  // timeout = 32 sn'ye kadar gecikme). Artık iki kaynak paralel çalışıyor.
  const directAudioPromise = fetchItunesAudioPreview(title, originalTitle, composer);

  // 3. YouTube Canlı Arama ile orijinal OST bul
  const searchTarget = originalTitle || title;
  const searchQuery = `${searchTarget} ${composer ? composer : ''} soundtrack main theme official audio ost`.trim();
  const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;

  const opt = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9,tr;q=0.8',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
  };

  const ytRes = await new Promise((resResolve) => {
    httpGet(ytUrl, { ...opt, agent: outboundAgent }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const idMatch = data.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
        const titleMatch = data.match(/"title":\{"runs":\[\{"text":"(.*?)"\}\]/);

        if (idMatch && idMatch[1]) {
          return resResolve({
            trackTitle: titleMatch ? titleMatch[1] : `${searchTarget} Soundtrack`,
            composer: composer || 'Original Soundtrack',
            videoId: idMatch[1],
            audioUrl: null,
            description: `${searchTarget} resmi sinematik tema müziği.`,
            source: 'youtube-live'
          });
        }
        resResolve(null);
      });
    }).on('error', () => resResolve(null));
  });

  const directAudio = await directAudioPromise;
  if (ytRes && directAudio && directAudio.audioUrl) {
    // YouTube kimliği varsa embed için onu, ses için iTunes önizlemesini birlikte sun.
    ytRes.audioUrl = directAudio.audioUrl;
  }

  if (ytRes) {
    ostCache.set(cacheKey, ytRes);
    return ytRes;
  }

  if (directAudio) {
    const resObj = {
      trackTitle: directAudio.trackName,
      composer: directAudio.artistName,
      audioUrl: directAudio.audioUrl,
      videoId: null,
      description: `${title} resmi film müziği.`,
      source: 'itunes-direct'
    };
    ostCache.set(cacheKey, resObj);
    return resObj;
  }

  return null;
}

// --- AFİŞ VE GÖRSEL DOĞRULAYICI / ÇÖZÜCÜ (/api/poster) ---
function queryWikipediaPoster(title, lang = 'en') {
  return new Promise((resolve) => {
    const cleanTitle = title.replace(/\(.*?\)/g, '').trim();
    const wikiUrl = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTitle)}`;
    const opt = {
      headers: {
        'User-Agent': 'Cine3D/2.0 (cine3d@example.com)',
        'Accept': 'application/json'
      }
    };
    httpGet(wikiUrl, { ...opt, agent: outboundAgent }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const img = (json.thumbnail && json.thumbnail.source) || (json.originalimage && json.originalimage.source);
          if (img && img.startsWith('http')) {
            return resolve(img);
          }
        } catch (e) {}
        resolve(null);
      });
    }).on('error', () => resolve(null));
  });
}

async function queryOmdbPoster(title, year = '') {
  const cleanTitle = title.replace(/\(.*?\)/g, '').trim();
  let query = `t=${encodeURIComponent(cleanTitle)}`;
  if (year && !isNaN(parseInt(year, 10))) {
    query += `&y=${parseInt(year, 10)}`;
  }
  // DÜZELTME: Burada sabit `trilogy` demo anahtarı kullanılıyordu; env ile verilen
  // OMDB_API_KEYS listesi (anahtar rotasyonu) poster çözümünde yok sayılıyordu.
  const json = await omdbRequest(query);
  if (json && json.Poster && json.Poster !== 'N/A' && json.Poster.startsWith('http')) {
    return json.Poster;
  }
  return null;
}

async function resolvePoster(title, year = '', imdbId = '') {
  const cacheKey = `${title}_${year}_${imdbId}`.toLowerCase().trim();
  if (posterCache.has(cacheKey)) {
    return posterCache.get(cacheKey);
  }

  // 1. imdbId varsa OMDb'den tam i ile sor
  if (imdbId && imdbId.startsWith('tt')) {
    // DÜZELTME: Sabit `trilogy` anahtarı yerine OMDB_KEYS rotasyonu kullanılır.
    const byId = await omdbRequest(`i=${encodeURIComponent(imdbId)}`);
    const omdbById = (byId && byId.Poster && byId.Poster !== 'N/A' && byId.Poster.startsWith('http')) ? byId.Poster : null;
    if (omdbById) {
      posterCache.set(cacheKey, omdbById);
      return omdbById;
    }
  }

  // 2. Başlık ve yıla göre OMDb
  if (title) {
    let p = await queryOmdbPoster(title, year);
    if (!p && year) {
      p = await queryOmdbPoster(title, '');
    }
    if (p) {
      posterCache.set(cacheKey, p);
      return p;
    }

    // 3. İngilizce Vikipedi
    p = await queryWikipediaPoster(title, 'en');
    if (p) {
      posterCache.set(cacheKey, p);
      return p;
    }

    // 4. Türkçe Vikipedi
    p = await queryWikipediaPoster(title, 'tr');
    if (p) {
      posterCache.set(cacheKey, p);
      return p;
    }
  }

  return null;
}

// --- YOUTUBE FRAGMAN ÇÖZÜCÜ ---
function resolveYoutubeVideoId(title, year = '') {
  return new Promise((resolve) => {
    try {
      const cacheKey = `${title}_${year}`.toLowerCase().trim();
      if (trailerCache.has(cacheKey)) {
        return resolve(trailerCache.get(cacheKey));
      }

      const searchQuery = `${title} ${year} official trailer fragman`.trim();
      const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;

      const opt = {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      };

      const req = httpGet(ytUrl, { ...opt, agent: outboundAgent }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const jsonMatch = data.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
          if (jsonMatch && jsonMatch[1]) {
            trailerCache.set(cacheKey, jsonMatch[1]);
            return resolve(jsonMatch[1]);
          }

          const linkMatch = data.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/);
          if (linkMatch && linkMatch[1]) {
            trailerCache.set(cacheKey, linkMatch[1]);
            return resolve(linkMatch[1]);
          }

          resolve(null);
        });
      });
      req.on('error', (err) => {
        console.warn('YouTube arama hatası:', err.message);
        resolve(null);
      });
    } catch (err) {
      // ÖZ3: senkron fırlama tüm sunucuyu çökertmesin
      console.warn('YouTube çözücü istisnası:', err && err.message);
      resolve(null);
    }
  });
}

// --- JUSTWATCH CANLI YAYIN PLATFORMU ÇÖZÜCÜ ---
const JW_GRAPHQL_QUERY = `
query GetSuggestedTitles($country: Country!, $language: Language!, $first: Int!, $filter: TitleFilter) {
  popularTitles(country: $country, first: $first, filter: $filter) {
    edges {
      node {
        id
        objectId
        objectType
        content(country: $country, language: $language) {
          title
          originalReleaseYear
        }
        offers(country: $country, platform: WEB) {
          monetizationType
          package {
            packageId
            clearName
            technicalName
          }
          standardWebURL
        }
      }
    }
  }
}
`;

function queryJustWatchGraphQL(searchQuery, country = 'TR', language = 'tr') {
  return new Promise((resolve) => {
    const data = JSON.stringify({
      operationName: 'GetSuggestedTitles',
      variables: {
        country,
        language,
        first: 4,
        filter: { searchQuery }
      },
      query: JW_GRAPHQL_QUERY
    });

    const req = httpsRequest('https://apis.justwatch.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          const edges = json.data?.popularTitles?.edges || [];
          resolve(edges);
        } catch (e) {
          resolve([]);
        }
      });
    });

    req.on('error', () => resolve([]));
    req.write(data);
    req.end();
  });
}

function normalizePlatform(p, targetTitle) {
  const name = p.name || '';
  const tech = (p.tech || '').toLowerCase();
  const lowerName = name.toLowerCase();

  let id = 'other';
  let badgeClass = 'plat-other';
  let brandColor = '#475569';
  let cleanName = name;
  let fallbackUrl = `https://www.google.com/search?q=${encodeURIComponent(name + ' ' + targetTitle + ' izle')}`;

  if (tech.includes('netflix') || lowerName.includes('netflix')) {
    id = 'netflix';
    cleanName = 'Netflix';
    badgeClass = 'plat-netflix';
    brandColor = '#E50914';
    fallbackUrl = `https://www.netflix.com/search?q=${encodeURIComponent(targetTitle)}`;
  } else if (tech.includes('max') || lowerName.includes('hbo max') || lowerName === 'hbo' || lowerName === 'max' || lowerName.includes('hbo-max')) {
    id = 'hbo';
    cleanName = 'HBO Max';
    badgeClass = 'plat-hbo';
    brandColor = '#7928ca';
    fallbackUrl = `https://play.max.com/search?q=${encodeURIComponent(targetTitle)}`;
  } else if (tech.includes('disney') || lowerName.includes('disney')) {
    id = 'disney';
    cleanName = 'Disney+';
    badgeClass = 'plat-disney';
    brandColor = '#113CCF';
    fallbackUrl = `https://www.disneyplus.com/search?q=${encodeURIComponent(targetTitle)}`;
  } else if (tech.includes('amazon') || tech.includes('prime') || lowerName.includes('prime') || lowerName.includes('amazon video')) {
    id = 'prime';
    cleanName = 'Prime Video';
    badgeClass = 'plat-prime';
    brandColor = '#00A8E1';
    fallbackUrl = `https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${encodeURIComponent(targetTitle)}`;
  } else if (tech.includes('apple') || lowerName.includes('apple')) {
    id = 'apple';
    cleanName = 'Apple TV+';
    badgeClass = 'plat-apple';
    brandColor = '#1e1e24';
    fallbackUrl = `https://tv.apple.com/search?term=${encodeURIComponent(targetTitle)}`;
  } else if (lowerName.includes('blutv')) {
    id = 'blutv';
    cleanName = 'BluTV';
    badgeClass = 'plat-blutv';
    brandColor = '#00a8ff';
    fallbackUrl = `https://www.blutv.com/arama?q=${encodeURIComponent(targetTitle)}`;
  } else if (lowerName.includes('tv+') || lowerName.includes('turkcell')) {
    id = 'tvplus';
    cleanName = 'Turkcell TV+';
    badgeClass = 'plat-tvplus';
    brandColor = '#ffb703';
    fallbackUrl = `https://tvplus.com.tr/arama?q=${encodeURIComponent(targetTitle)}`;
  } else if (lowerName === 'tod' || lowerName.startsWith('tod ') || lowerName.includes('todtv') || lowerName.includes('bein')) {
    id = 'tod';
    cleanName = 'TOD / beIN';
    badgeClass = 'plat-tod';
    brandColor = '#6d28d9';
    fallbackUrl = `https://www.todtv.com.tr/arama?q=${encodeURIComponent(targetTitle)}`;
  } else if (lowerName.includes('exxen')) {
    id = 'exxen';
    cleanName = 'Exxen';
    badgeClass = 'plat-exxen';
    brandColor = '#f59e0b';
    fallbackUrl = `https://www.exxen.com/tr`;
  } else if (lowerName.includes('gain')) {
    id = 'gain';
    cleanName = 'GAİN';
    badgeClass = 'plat-gain';
    brandColor = '#ec4899';
    fallbackUrl = `https://www.gain.tv/`;
  } else if (lowerName.includes('mubi')) {
    id = 'mubi';
    cleanName = 'MUBI';
    badgeClass = 'plat-mubi';
    brandColor = '#2563eb';
    fallbackUrl = `https://mubi.com/tr/search/films?query=${encodeURIComponent(targetTitle)}`;
  }

  return {
    id,
    name: cleanName,
    badgeClass,
    brandColor,
    url: p.url || fallbackUrl
  };
}

async function resolveStreamingProviders(title, year = '', originalTitle = '') {
  const cacheKey = `${title}_${originalTitle}_${year}`.toLowerCase().trim();
  if (providersCache.has(cacheKey)) {
    return providersCache.get(cacheKey);
  }

  const queriesToTry = [];
  if (originalTitle && originalTitle.trim()) queriesToTry.push(originalTitle.trim());
  if (title && title.trim() && !queriesToTry.includes(title.trim())) queriesToTry.push(title.trim());

  let trOffers = [];
  for (const q of queriesToTry) {
    const edges = await queryJustWatchGraphQL(q, 'TR', 'tr');
    if (edges && edges.length > 0) {
      let bestNode = edges[0].node;
      for (const e of edges) {
        const c = e.node.content;
        if (year && c.originalReleaseYear && Math.abs(parseInt(c.originalReleaseYear, 10) - parseInt(year, 10)) <= 1) {
          bestNode = e.node;
          break;
        }
      }
      const subs = (bestNode.offers || []).filter(o => o.monetizationType === 'FLATRATE' || o.monetizationType === 'FREE');
      if (subs.length > 0) {
        trOffers = subs.map(o => ({
          name: o.package.clearName,
          tech: o.package.technicalName,
          url: o.standardWebURL
        }));
        break;
      }
    }
  }

  // TR Yayıncıları varsa
  const uniqueTrMap = new Map();
  trOffers.forEach(o => {
    const norm = normalizePlatform(o, title);
    if (!uniqueTrMap.has(norm.id)) {
      uniqueTrMap.set(norm.id, { ...norm, isTr: true });
    }
  });
  const trProviders = Array.from(uniqueTrMap.values());

  if (trProviders.length > 0) {
    const result = {
      hasTrProvider: true,
      statusText: "Türkiye'de Yayında",
      providers: trProviders,
      globalProviders: []
    };
    providersCache.set(cacheKey, result);
    return result;
  }

  // TR yayıncısı bulunamadı -> Küresel/Orijinal Yayıncıyı Ara (örn. Apple TV+ için Silo)
  let usOffers = [];
  for (const q of queriesToTry) {
    const edges = await queryJustWatchGraphQL(q, 'US', 'en');
    if (edges && edges.length > 0) {
      let bestNode = edges[0].node;
      for (const e of edges) {
        const c = e.node.content;
        if (year && c.originalReleaseYear && Math.abs(parseInt(c.originalReleaseYear, 10) - parseInt(year, 10)) <= 1) {
          bestNode = e.node;
          break;
        }
      }
      const subs = (bestNode.offers || []).filter(o => o.monetizationType === 'FLATRATE' || o.monetizationType === 'FREE');
      if (subs.length > 0) {
        usOffers = subs.map(o => ({
          name: o.package.clearName,
          tech: o.package.technicalName,
          url: o.standardWebURL
        }));
        break;
      }
    }
  }

  const uniqueUsMap = new Map();
  usOffers.forEach(o => {
    const norm = normalizePlatform(o, title);
    if (!uniqueUsMap.has(norm.id)) {
      uniqueUsMap.set(norm.id, { ...norm, isGlobal: true });
    }
  });
  const globalProviders = Array.from(uniqueUsMap.values());

  const result = {
    hasTrProvider: false,
    statusText: "TR yayıncısı bulunamadı",
    providers: [],
    globalProviders: globalProviders
  };

  providersCache.set(cacheKey, result);
  return result;
}

// --- HTTP SUNUCUSU ---
const server = http.createServer(async (req, res) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  // WHATWG URL — url.parse kullanımdan kaldırıldı (Node DEP0169); arayüz aynı tutulur
  const reqUrl = new URL(req.url, 'http://localhost');
  const parsedUrl = { query: Object.fromEntries(reqUrl.searchParams) };
  let reqPath = reqUrl.pathname;

  // CORS ön kontrolü (tek bir yerde yanıtlanır)
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    });
    return res.end();
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return sendText(res, 405, 'Yalnızca GET ve HEAD destekleniyor.', { 'Allow': 'GET, HEAD, OPTIONS' });
  }

  // --- API: Sağlık kontrolü (istemci statik/sunuculu modu buradan anlar) ---
  if (reqPath === '/api/health') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*'
    });
    return res.end(JSON.stringify({
      ok: true,
      version: require('./package.json').version,
      time: new Date().toISOString(),
      omdbKeys: OMDB_KEYS.length
    }));
  }

  // --- API: OMDb Arama Proxy (API anahtarları sunucu tarafında tutulur) ---
  if (reqPath === '/api/search') {
    const q = (parsedUrl.query.q || '').trim();
    if (!q || q.length < 2) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'En az 2 karakterlik bir sorgu (q) gereklidir.' }));
    }

    try {
      const cacheKey = `search_${q.toLowerCase()}`;
      let results = searchCache.has(cacheKey) ? searchCache.get(cacheKey) : null;
      if (results === null) {
        const omdb = await omdbRequest(`s=${encodeURIComponent(q)}`);
        const list = (omdb && Array.isArray(omdb.Search)) ? omdb.Search : [];
        // DÜZELTME: Boş sonuç artık cache'lenmiyor. OMDb kotası/429 gibi geçici bir
        // hatadan sonra sorgu 1 saat boyunca "sonuç yok" olarak kilitleniyordu.
        if (list.length > 0) searchCache.set(cacheKey, list);
        results = list;
      }
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: results.length > 0, results }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, error: err.message }));
    }
  }

  // --- API: OMDb Detay Proxy (IMDb ID ile tam kayıt) ---
  if (reqPath === '/api/details') {
    const imdbId = (parsedUrl.query.imdbId || '').trim();
    if (!/^tt\d+$/.test(imdbId)) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'Geçerli bir imdbId (tt...) gereklidir.' }));
    }

    try {
      const cacheKey = `details_${imdbId}`;
      let item = detailsCache.has(cacheKey) ? detailsCache.get(cacheKey) : null;
      if (item == null) {
        item = await omdbRequest(`i=${encodeURIComponent(imdbId)}&plot=full`);
        // DÜZELTME: Başarısız kayıt `[]` olarak cache'leniyordu; `has()` boş diziyi de
        // "var" saydığı için sonraki istekler `success:true, item:[]` dönüp arayüzde
        // "Bilinmeyen Film (2024)" sahte kartı üretiyordu.
        if (item) detailsCache.set(cacheKey, item);
      }
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: !!item, item: item || null }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, error: err.message }));
    }
  }

  // --- API: Gerçek Yayın Platformları (JustWatch Canlı Verisi) ---
  if (reqPath === '/api/providers') {
    const title = parsedUrl.query.title || '';
    const year = parsedUrl.query.year || '';
    const originalTitle = parsedUrl.query.originalTitle || '';

    if (!title) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'Başlık (title) parametresi gerekli.' }));
    }

    try {
      const data = await resolveStreamingProviders(title, year, originalTitle);
      res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      return res.end(JSON.stringify({ success: true, ...data }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, error: err.message, statusText: "TR yayıncısı bulunamadı", hasTrProvider: false, providers: [] }));
    }
  }

  // --- API: Çevrimiçi Fragman Video ID Çözücü ---
  if (reqPath === '/api/trailer') {
    const title = parsedUrl.query.title || '';
    const year = parsedUrl.query.year || '';

    if (!title) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'Başlık (title) parametresi gerekli.' }));
    }

    try {
      const videoId = await resolveYoutubeVideoId(title, year);
      res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      return res.end(JSON.stringify({
        success: !!videoId,
        videoId: videoId,
        watchUrl: videoId ? `https://www.youtube.com/watch?v=${videoId}` : `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' ' + year + ' trailer')}`,
        embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null
      }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, error: e.message }));
    }
  }

  // --- API: Film / Dizi Doğrulanmış Afiş Çözücü ---
  if (reqPath === '/api/poster') {
    const title = parsedUrl.query.title || '';
    const year = parsedUrl.query.year || '';
    const imdbId = parsedUrl.query.imdbId || '';

    if (!title && !imdbId) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'title veya imdbId parametresi gerekli.' }));
    }

    try {
      const posterUrl = await resolvePoster(title, year, imdbId);
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      return res.end(JSON.stringify({
        success: !!posterUrl,
        posterUrl: posterUrl,
        title,
        year,
        imdbId
      }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, error: err.message }));
    }
  }

  // --- API: Orijinal Dizi & Film Müziği Çözücü (/api/ost) ---
  if (reqPath === '/api/ost') {
    const title = parsedUrl.query.title || '';
    const originalTitle = parsedUrl.query.originalTitle || '';
    const year = parsedUrl.query.year || '';
    const composer = parsedUrl.query.composer || '';
    const id = parsedUrl.query.id || '';

    if (!title && !originalTitle && !id) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'Film başlığı veya id gereklidir.' }));
    }

    try {
      const ost = await resolveYoutubeOst(title, originalTitle, year, composer, id);
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      return res.end(JSON.stringify({
        success: !!(ost && (ost.videoId || ost.audioUrl)),
        trackTitle: ost ? ost.trackTitle : 'Original Soundtrack',
        composer: ost ? ost.composer : 'Various Artists',
        audioUrl: ost ? ost.audioUrl : null,
        videoId: ost ? ost.videoId : null,
        description: ost ? ost.description : '',
        embedUrl: ost && ost.videoId ? `https://www.youtube.com/embed/${ost.videoId}?autoplay=1&rel=0` : null,
        watchUrl: ost && ost.videoId ? `https://www.youtube.com/watch?v=${ost.videoId}` : null,
        source: ost ? ost.source : null
      }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, error: err.message }));
    }
  }

  // --- API: Canlı İnternet Ses Akışı (/api/stream-ost - Sıfır Disk Kaydı, Canlı Stream) ---
  if (reqPath === '/api/stream-ost') {
    const rawId = (parsedUrl.query.id || '').toLowerCase().trim();
    // Yol gezintisi koruması: id yalnızca güvenli dosya adı karakterleri içerebilir
    const id = /^[a-z0-9_-]+$/.test(rawId) ? rawId : '';
    const title = parsedUrl.query.title || '';
    const originalTitle = parsedUrl.query.originalTitle || '';
    const composer = parsedUrl.query.composer || '';

    if (!id && !title.trim() && !originalTitle.trim()) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'id, title veya originalTitle parametrelerinden biri gereklidir.' }));
    }

    // 1. Eğer yerel audio/ost/ içinde zaten varsa oradan hızlıca ver (HTTP Range 206 destekli)
    if (id) {
      const localPath = path.join(__dirname, 'audio', 'ost', `${id}.mp3`);
      if (fs.existsSync(localPath)) {
        const stats = fs.statSync(localPath);
        const range = req.headers.range;
        if (range) {
          const parts = range.replace(/bytes=/, '').split('-');
          const start = parseInt(parts[0], 10);
          const endRaw = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
          // Bozuk Range başlığına karşı tam dosyaya düş
          if (!Number.isFinite(start) || !Number.isFinite(endRaw) || start < 0 || endRaw < start || start >= stats.size) {
            res.writeHead(200, {
              'Content-Length': stats.size,
              'Accept-Ranges': 'bytes',
              'Content-Type': 'audio/mpeg',
              'Access-Control-Allow-Origin': '*'
            });
            return fs.createReadStream(localPath).pipe(res);
          }
          const end = Math.min(endRaw, stats.size - 1);
          const chunksize = (end - start) + 1;
          const stream = fs.createReadStream(localPath, { start, end });
          res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${stats.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'audio/mpeg',
            'Access-Control-Allow-Origin': '*'
          });
          return stream.pipe(res);
        } else {
          res.writeHead(200, {
            'Content-Length': stats.size,
            'Accept-Ranges': 'bytes',
            'Content-Type': 'audio/mpeg',
            'Access-Control-Allow-Origin': '*'
          });
          return fs.createReadStream(localPath).pipe(res);
        }
      }
    }

    // 2. İnternetten yeni çekilen yapımlar için Deezer API'den anında canlı MP3 akışını bul ve bellekte doğrudan ilet
    const searchTarget = originalTitle || title;
    const queries = [
      `${searchTarget} ${composer} soundtrack`,
      `${searchTarget} soundtrack`,
      `${composer} ${searchTarget}`,
      `${searchTarget} main theme`
    ];

    const tryFindStream = async () => {
      for (const q of queries) {
        try {
          const previewUrl = await new Promise((resolve) => {
            const dUrl = 'https://api.deezer.com/search?q=' + encodeURIComponent(q) + '&limit=3';
            httpGet(dUrl, { headers: { 'User-Agent': 'Mozilla/5.0' }, agent: outboundAgent }, (dRes) => {
              let body = '';
              dRes.on('data', chunk => body += chunk);
              dRes.on('end', () => {
                try {
                  const j = JSON.parse(body);
                  if (j.data && j.data.length > 0) {
                    const match = j.data.find(x => x.preview && x.preview.startsWith('http'));
                    if (match) return resolve(match.preview);
                  }
                  resolve(null);
                } catch (e) { resolve(null); }
              });
            }).on('error', () => resolve(null));
          });

          if (previewUrl) {
            // Canlı akışı doğrudan istemciye yönlendir (Diske hiçbir dosya kaydetmeden!)
            return httpGet(previewUrl, { agent: outboundAgent, timeoutMs: STREAM_TIMEOUT_MS }, (streamRes) => {
              const upstreamOk = streamRes.statusCode >= 200 && streamRes.statusCode < 300;
              // DÜZELTME: Upstream durum kodu hiç kontrol edilmiyordu; Deezer 403/404
              // gövdesi "audio/mpeg" olarak pipe edilip tarayıcıda çözülemeyen ses
              // kaynağına dönüşüyordu.
              if (!upstreamOk || res.headersSent) {
                streamRes.resume();
                if (!res.headersSent) {
                  res.writeHead(502, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                  res.end(JSON.stringify({ success: false, message: 'Ses kaynağı yanıt vermedi.' }));
                }
                return;
              }

              const streamHeaders = {
                'Content-Type': streamRes.headers['content-type'] || 'audio/mpeg',
                'Cache-Control': 'public, max-age=1800',
                'Access-Control-Allow-Origin': '*'
              };
              if (streamRes.headers['content-length']) {
                streamHeaders['Content-Length'] = streamRes.headers['content-length'];
              }
              res.writeHead(200, streamHeaders);
              streamRes.pipe(res);
              // İstemci sekmeyi kapatırsa upstream bağlantısı sızmasın
              res.on('close', () => streamRes.destroy());
            }).on('error', () => {
              if (!res.headersSent) {
                res.writeHead(502, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                res.end(JSON.stringify({ success: false, message: 'Akış hatası.' }));
              } else {
                res.end();
              }
            });
          }
        } catch (e) {}
      }

      // Eğer bulunamazsa 404 dön
      res.writeHead(404, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      return res.end(JSON.stringify({ success: false, message: 'Bu yapım için canlı ses akışı bulunamadı.' }));
    };

    return tryFindStream();
  }

  // --- STATİK DOSYALAR (Ses Dosyaları, Görsel, JS, CSS) ---
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let decodedPath = reqPath;
  try {
    decodedPath = decodeURIComponent(reqPath);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Geçersiz istek yolu.');
  }

  // Yol gezintisi (path traversal) koruması: çözümlenen yol sunucu kökünden çıkamaz
  const serverRoot = path.resolve(__dirname);
  const filePath = path.join(serverRoot, decodedPath);

  if (filePath !== serverRoot && !filePath.startsWith(serverRoot + path.sep)) {
    return sendText(res, 404, 'Sayfa veya dosya bulunamadı.');
  }

  // Tarayıcı favicon'u her açılışta ister; 404 gürültüsü yerine sessiz 204 dön.
  if (decodedPath === '/favicon.ico') {
    res.writeHead(204, { 'Cache-Control': 'public, max-age=86400', ...SECURITY_HEADERS });
    return res.end();
  }

  // Yalnızca beyaz listedeki statik dosyalar servis edilir (kaynak kod ve
  // cloudflared.exe gibi ikili dosyalar tünel üzerinden indirilemez).
  const ext = path.extname(filePath).toLowerCase();
  const relPath = path.relative(serverRoot, filePath).split(path.sep).join('/');
  if (!isPublicAsset(relPath, ext)) {
    return sendText(res, 404, 'Sayfa veya dosya bulunamadı.');
  }

  const fileHeaders = {
    ...SECURITY_HEADERS,
    'Vary': 'Accept-Encoding'
  };

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      return sendText(res, 404, 'Sayfa veya dosya bulunamadı.');
    }

    const contentType = MIME[ext] || 'application/octet-stream';

    // ETag: dosya değişmediyse tarayıcıya gövde gönderilmez (304) — reload'lar çok hızlanır
    const etag = `W/"${stats.size}-${Math.floor(stats.mtimeMs)}"`;
    if (req.headers['if-none-match'] === etag) {
      res.writeHead(304, { ...fileHeaders, ETag: etag });
      return res.end();
    }

    // Ses ve Video için Range Streaming Desteği (Anında Oynatma ve Sıfır Gecikme)
    if (ext === '.mp3' || ext === '.m4a' || ext === '.wav') {
      const audioHeaders = {
        ...fileHeaders,
        'Cache-Control': 'public, max-age=3600',
        ETag: etag
      };
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const endRaw = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
        // Bozuk Range başlığı (NaN / ters aralık) akışta senkron çökertir — tam dosyaya düş
        if (!Number.isFinite(start) || !Number.isFinite(endRaw) || start < 0 || endRaw < start || start >= stats.size) {
          return pipeFile(res, filePath, {}, 200, {
            ...audioHeaders,
            'Content-Length': stats.size,
            'Accept-Ranges': 'bytes',
            'Content-Type': contentType
          });
        }
        const end = Math.min(endRaw, stats.size - 1);
        const chunksize = (end - start) + 1;
        return pipeFile(res, filePath, { start, end }, 206, {
          ...audioHeaders,
          'Content-Range': `bytes ${start}-${end}/${stats.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType
        });
      }
      return pipeFile(res, filePath, {}, 200, {
        ...audioHeaders,
        'Content-Length': stats.size,
        'Accept-Ranges': 'bytes',
        'Content-Type': contentType
      });
    }

    // Diğer statik dosyalar: gzip + ETag ile servis edilir
    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Dosya okuma hatası.');
      }

      // R027: ?v=... sorgulu varlıklar sürümlüdür → uzun süreli immutable cache.
      // Sürüm her yayında değiştiği için bayat dosya riski yok; HTML ise no-cache.
      const isVersionedAsset = /[?&]v=[\w.]+/.test(req.url || '');
      const headers = {
        ...fileHeaders,
        'Content-Type': contentType,
        'Cache-Control': isVersionedAsset ? 'public, max-age=31536000, immutable' : 'no-cache',
        ETag: etag
      };

      const canGzip = GZIP_TYPES.has(ext) && /\bgzip\b/.test(String(req.headers['accept-encoding'] || ''));
      if (canGzip) {
        const gzipKey = `${filePath}|${stats.mtimeMs}|${stats.size}`;
        const sendGzip = (gz) => {
          headers['Content-Encoding'] = 'gzip';
          headers['Content-Length'] = gz.length;
          res.writeHead(200, headers);
          return res.end(gz);
        };

        const cachedGz = gzipCache.get(gzipKey);
        if (cachedGz) return sendGzip(cachedGz);

        // DÜZELTME: gzipSync büyük dosyalarda (app.js 236KB, style.css 128KB) event
        // loop'u bloke edip tünelde eşzamanlı istekleri geciktiriyordu.
        return zlib.gzip(content, { level: 6 }, (gzErr, gz) => {
          if (gzErr) {
            headers['Content-Length'] = content.length;
            res.writeHead(200, headers);
            return res.end(content);
          }
          if (gzipCache.size > 200) gzipCache.clear();
          gzipCache.set(gzipKey, gz);
          return sendGzip(gz);
        });
      }

      headers['Content-Length'] = content.length;
      res.writeHead(200, headers);
      return res.end(content);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Cine3D Netflix server running at http://${HOST}:${PORT}`);
  if (HOST === '127.0.0.1') {
    console.log('İpucu: LAN cihazlarından erişmek için HOST=0.0.0.0 ile başlatın.');
  }
});

// Beklenmeyen hatalar süreci sessizce öldürüp tüneli düşürüyordu; loglayıp devam et.
process.on('unhandledRejection', (err) => {
  console.error('[UNHANDLED REJECTION]', err && err.message ? err.message : err);
});
process.on('uncaughtException', (err) => {
  console.error('[UNCAUGHT EXCEPTION]', err && err.stack ? err.stack : err);
});

server.on('clientError', (err, socket) => {
  if (socket.writable) socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
