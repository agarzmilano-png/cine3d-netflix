/**
 * Cine3D Netflix Service Worker (PWA v3.1)
 *
 * - Alt dizinde barındırmayı destekler (ör. GitHub Pages: /cine3d-netflix/).
 *   Tüm önbellek yolları service worker'ın kendi konumuna göre çözümlenir.
 * - Gezinmelerde network-first: güncelleme sonrası eski arayüz görünmez.
 * - `ignoreSearch`: asset'ler `?v=3.1` sorgusuyla istendiği için eşleşme sorunu yok.
 * - Önbellekte karşılık bulunamayan isteklerde `respondWith(undefined)` hatası giderildi.
 */
const CACHE_VERSION = '8.3';
const CACHE_NAME = `cine3d-cache-v${CACHE_VERSION}`;

// Service worker'ın bulunduğu dizin (site kökü veya alt dizin)
const BASE = new URL('./', self.location.href);
const OFFLINE_URL = new URL('index.html', BASE).href;

const PRECACHE_PATHS = [
  '',
  'index.html',
  'manifest.json',
  'css/style.css',
  'css/modal.css',
  'css/vs-duel.css',
  'css/features.css',
  'js/vendor/three.min.js',
  'js/movies-data.js',
  'js/movie-soundtracks.js',
  'js/config.js',
  'js/catalog-index.js',
  'js/api-service.js',
  'js/audio.js',
  'js/three-scene.js',
  'js/coverflow3d.js',
  'js/story-adventure.js',
  'js/app.js',
  'js/features.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Zorunlu olmayan tek bir dosya 404 dönerse tüm kurulum düşmesin.
      return Promise.allSettled(
        PRECACHE_PATHS.map((p) => {
          const url = new URL(p, BASE).href;
          return cache.add(new Request(url, { cache: 'reload' })).catch((err) => {
            console.warn('[SW] Precache atlandı:', url, err.message);
          });
        })
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : undefined))
      )
    ).then(() => self.clients.claim())
  );
});

// Önbelleğe alınmaması gereken istekler (API, ses/video akışı, harici medya)
function isBypassed(req, url) {
  return (
    url.pathname.includes('/api/') ||
    url.pathname.includes('/audio/') ||
    /\.(mp3|wav|ogg|m4a|mp4|webm)$/i.test(url.pathname) ||
    url.hostname.includes('youtube.com') ||
    url.hostname.includes('youtube-nocookie.com') ||
    url.hostname.includes('googlevideo.com') ||
    req.headers.has('range')
  );
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.status === 200) {
      cache.put(request, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (err) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    const offline = await cache.match(OFFLINE_URL, { ignoreSearch: true });
    if (offline) return offline;
    return new Response('Çevrimdışısınız ve bu sayfa önbellekte yok.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

// Aynı kökenli varlıklar için network-first + önbellek yedeği.
// (Eskiden stale-while-revalidate idi; güncelleme sonrası kullanıcılar bir süre
//  eski JS ile kalıyordu → "OST çalışmıyor" gibi görünen hatalar.)
async function networkFirstAsset(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.status === 200) {
      cache.put(request, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (err) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    return new Response('Kaynak yüklenemedi.', {
      status: 504,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

// R026: Görsel (poster) önbelleği — ağ yoksa son görülen afişler açılsın.
const IMAGE_CACHE = 'cine3d-img-v1';
const IMAGE_MAX = 140;

async function trimImageCache(cache) {
  try {
    const keys = await cache.keys();
    if (keys.length > IMAGE_MAX) {
      for (let i = 0; i < keys.length - IMAGE_MAX; i++) await cache.delete(keys[i]);
    }
  } catch (err) { /* yoksay */ }
}

async function imageCacheFirst(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const fresh = await fetch(request);
    if (fresh && (fresh.status === 200 || fresh.type === 'opaque')) {
      cache.put(request, fresh.clone()).catch(() => {});
      trimImageCache(cache);
    }
    return fresh;
  } catch (err) {
    return cached || Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin && url.protocol !== 'https:') return;
  if (isBypassed(req, url)) return;

  // Görseller: önce önbellek (posterler), yoksa ağdan çek ve önbelleğe al.
  if (req.destination === 'image' || /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(url.pathname)) {
    event.respondWith(imageCacheFirst(req));
    return;
  }

  // Sayfa gezinmeleri: her zaman önce ağ (taze index.html), sonra önbellek.
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req));
    return;
  }

  event.respondWith(networkFirstAsset(req));
});

// Yeni sürüm hazır olduğunda açık sekmeleri bilgilendir (arayüz isterse kullanır).
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});