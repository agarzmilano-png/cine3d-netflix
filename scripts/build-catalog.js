#!/usr/bin/env node
/**
 * Cine3D Katalog İndeksi Üretici
 *
 * JustWatch'un herkese açık GraphQL API'sinden Türkiye'deki popüler yapımları çeker,
 * site istemcisinin doğrudan kullanabileceği kompakt bir JSON indeksi üretir.
 *
 * Neden: JustWatch tarayıcıdan CORS nedeniyle çağrılamıyor. Bu betik sunucu tarafında
 * (GitHub Actions) çalışıp veriyi statik dosyaya yazar; böylece site "canlı arama"
 * deneyimini hesap/sunucu/anahtar olmadan sunar.
 *
 * Kullanım:
 *   node scripts/build-catalog.js            # ~450 yapım
 *   node scripts/build-catalog.js 900        # daha büyük indeks
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const TARGET = Number(process.argv[2] || 450);
const OUT = path.join(__dirname, '..', 'data', 'catalog.json');
const PAGE = 50;
const TIMEOUT = 20000;

const QUERY = `
query Popular($country: Country!, $language: Language!, $first: Int!, $after: String) {
  popularTitles(country: $country, first: $first, after: $after) {
    pageInfo { hasNextPage endCursor }
    edges {
      node {
        objectType
        content(country: $country, language: $language) {
          title
          originalTitle
          originalReleaseYear
          shortDescription
          posterUrl
          runtime
          genres { shortName }
          scoring { imdbScore imdbVotes }
        }
        offers(country: $country, platform: WEB) {
          monetizationType
          package { clearName technicalName }
        }
      }
    }
  }
}`;

function graphql(variables) {
  return new Promise((resolve) => {
    const body = JSON.stringify({ operationName: 'Popular', variables, query: QUERY });
    const req = https.request('https://apis.justwatch.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Cine3D-CatalogBot/1.0 (+https://github.com/agarzmilano-png/cine3d-netflix)'
      }
    }, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch (e) { resolve(null); }
      });
    });
    req.setTimeout(TIMEOUT, () => req.destroy(new Error('timeout')));
    req.on('error', () => resolve(null));
    req.write(body);
    req.end();
  });
}

function mapPlatform(tech, name) {
  const t = (tech || '').toLowerCase();
  const n = (name || '').toLowerCase();
  if (t.includes('netflix') || n.includes('netflix')) return 'netflix';
  if (t === 'hbm' || t.includes('max') || n.includes('max') || n.includes('hbo')) return 'hbo';
  if (t.includes('disney') || n.includes('disney')) return 'disney';
  if (t.includes('amazon') || t.includes('prime') || n.includes('prime') || n.includes('amazon')) return 'prime';
  if (t.includes('apple') || n.includes('apple')) return 'apple';
  if (n.includes('blutv')) return 'blutv';
  if (t.includes('turkcell') || n.includes('turkcell') || n.includes('tv+')) return 'tvplus';
  if (t.includes('tod') || n.includes('tod') || n.includes('bein')) return 'tod';
  if (n.includes('exxen')) return 'exxen';
  if (n.includes('gain')) return 'gain';
  if (n.includes('mubi')) return 'mubi';
  return null;
}

function fetchTrailerId(title, year) {
  return new Promise((resolve) => {
    const query = encodeURIComponent(`${title} ${year || ''} official trailer fragman`);
    const req = https.get(`https://www.youtube.com/results?search_query=${query}&hl=tr`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
        'Accept': 'text/html'
      }
    }, (res) => {
      let body = '';
      res.on('data', (c) => { if (body.length < 2_500_000) body += c; });
      res.on('end', () => {
        const m = body.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
        resolve(m ? m[1] : null);
      });
    });
    req.setTimeout(15000, () => req.destroy(new Error('timeout')));
    req.on('error', () => resolve(null));
  });
}

/** Dizeleri karşılaştırmak için sadeleştirir (Türkçe karakter/tırnak farkları). */
function normTitle(text) {
  return String(text || '')
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/** Elle doğrulanmış 109 yapımın fragman kimliklerini indekse taşır (ücretsiz, anında). */
function curatedTrailerMap() {
  const map = new Map();
  try {
    const src = fs.readFileSync(path.join(__dirname, '..', 'js', 'movies-data.js'), 'utf8');
    const block = src.match(/const MOVIES_DATA = (\[[\s\S]*?\n\];)/);
    if (!block) return map;
    const data = eval(block[1].replace(/;$/, '')); // yerel, güvenilir dosya
    for (const m of data) {
      if (!m.trailerYoutubeId) continue;
      if (m.originalTitle) map.set(normTitle(m.originalTitle), m.trailerYoutubeId);
      if (m.title) map.set(normTitle(m.title), m.trailerYoutubeId);
    }
  } catch (e) {
    console.warn('movies-data.js okunamadı:', e.message);
  }
  return map;
}

/** Mevcut indeksten fragman kimliklerini koru, eksikleri sınırlı eşzamanlılıkla çek. */
async function attachTrailers(items) {
  const previous = new Map();
  try {
    const old = JSON.parse(fs.readFileSync(OUT, 'utf8'));
    for (const it of old.items || []) if (it.yt) previous.set(it.id, it.yt);
  } catch (e) { /* ilk çalıştırma */ }

  const curated = curatedTrailerMap();
  let reused = 0;
  let fromCurated = 0;
  const missing = [];

  for (const it of items) {
    const known = previous.get(it.id);
    if (known) {
      it.yt = known;
      reused++;
      continue;
    }
    const curatedId = curated.get(normTitle(it.o)) || curated.get(normTitle(it.t));
    if (curatedId) {
      it.yt = curatedId;
      fromCurated++;
      continue;
    }
    missing.push(it);
  }

  if (fromCurated) console.log(`\n✓ Fragman: ${fromCurated} yapım doğrulanmış katalogdan eşleşti`);

  if (missing.length === 0) {
    console.log(`\n✓ Fragmanlar: ${reused} kayıt önceki indeksten korundu`);
    return;
  }

  console.log(`  fragman aranıyor: ${missing.length} yapım (${reused} devralınan)`);
  const CONCURRENCY = 3;
  let index = 0;
  let done = 0;

  async function worker() {
    while (index < missing.length) {
      const item = missing[index++];
      item.yt = await fetchTrailerId(item.o || item.t, item.y);
      done++;
      if (done % 25 === 0) process.stdout.write(`\r  ${done}/${missing.length}`);
      await new Promise((r) => setTimeout(r, 350));
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  const found = missing.filter((i) => i.yt).length;
  console.log(`\n✓ Fragman: ${found}/${missing.length} bulundu, ${reused} devralındı`);
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

(async () => {
  const out = new Map();
  let after = null;
  let pageCount = 0;

  while (out.size < TARGET) {
    const res = await graphql({
      country: 'TR',
      language: 'tr',
      first: PAGE,
      after,
    });
    const block = res && res.data && res.data.popularTitles;
    if (!block || !Array.isArray(block.edges) || block.edges.length === 0) break;

    for (const edge of block.edges) {
      const node = edge.node;
      const c = node.content || {};
      const imdb = c.scoring && c.scoring.imdbScore;
      if (!c.title || !c.posterUrl || !imdb) continue;
      const posterUrl = /^https:\/\//.test(c.posterUrl)
        ? c.posterUrl
        : 'https://images.justwatch.com' + String(c.posterUrl).replace('{profile}', 's332').replace('{format}', 'jpg');

      const offers = (node.offers || [])
        .filter((o) => o.monetizationType === 'FLATRATE' || o.monetizationType === 'FREE')
        .map((o) => mapPlatform(o.package && o.package.technicalName, o.package && o.package.clearName))
        .filter(Boolean);

      const id = `${slugify(c.originalTitle || c.title)}-${c.originalReleaseYear || ''}`.replace(/-+$/, '');
      if (!id || out.has(id)) continue;

      out.set(id, {
        id,
        t: c.title,
        o: c.originalTitle || c.title,
        y: c.originalReleaseYear || 0,
        imdb: Math.round(imdb * 10) / 10,
        votes: c.scoring && c.scoring.imdbVotes ? c.scoring.imdbVotes : 0,
        poster: posterUrl,
        plot: (c.shortDescription || '').slice(0, 420),
        genres: (c.genres || []).map((g) => g.shortName).filter(Boolean).slice(0, 4),
        runtime: c.runtime || 0,
        type: node.objectType === 'SHOW' ? 'series' : 'movie',
        platforms: [...new Set(offers)]
      });
    }

    pageCount++;
    if (!block.pageInfo || !block.pageInfo.hasNextPage) break;
    after = block.pageInfo.endCursor;
    if (pageCount > 30) break;
    process.stdout.write(`\r  sayfa ${pageCount}, ${out.size} yapım`);
    await new Promise((r) => setTimeout(r, 400));
  }

  const list = [...out.values()];
  await attachTrailers(list);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({
    generatedAt: new Date().toISOString(),
    country: 'TR',
    count: list.length,
    items: list
  }));

  const kb = Math.round(fs.statSync(OUT).size / 1024);
  console.log(`\n✓ ${list.length} yapım -> data/catalog.json (${kb} KB)`);
})();