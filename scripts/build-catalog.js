#!/usr/bin/env node
/**
 * Cine3D Katalog İndeksi Üretici
 *
 * JustWatch'un herkese açık GraphQL API'sinden Türkiye verisini çeker ve sitenin
 * istemci tarafında kullanacağı kompakt JSON indeksini üretir.
 *
 * Neden: JustWatch tarayıcıdan CORS nedeniyle çağrılamıyor. Bu betik sunucu tarafında
 * (GitHub Actions) çalışıp veriyi statik dosyaya yazar; site "canlı arama" deneyimini
 * hesap/sunucu/anahtar olmadan sunar.
 *
 * İki kaynak birleştirilir:
 *   1) TR popüler listesi (sayfalı)
 *   2) Bilinen yapım tohumları (başlık araması) — popüler listede olmayan klasikler
 *
 * Kullanım:
 *   node scripts/build-catalog.js            # 600 popüler + tohumlar
 *   node scripts/build-catalog.js 900        # daha büyük popüler liste
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const TARGET = Number(process.argv[2] || 600);
const OUT = path.join(__dirname, '..', 'data', 'catalog.json');
const PAGE = 50;
const TIMEOUT = 20000;

// Popüler listede yer almayan ama sık aranan yapımlar
const SEEDS = [
  // Klasik / IMDb zirvesi
  'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Fight Club',
  'Forrest Gump', 'Inception', 'The Matrix', 'Goodfellas', 'Schindler\'s List', 'The Silence of the Lambs',
  'Se7en', 'The Usual Suspects', 'Léon: The Professional', 'Saving Private Ryan', 'Interstellar',
  'The Green Mile', 'Gladiator', 'The Prestige', 'The Departed', 'Whiplash', 'Parasite',
  'Spirited Away', 'Your Name', 'Grave of the Fireflies', 'Akira', 'Perfect Blue',
  'Blade Runner 2049', 'Dune', 'Dune: Part Two', 'Oppenheimer', 'The Batman', 'Joker',
  'Mad Max: Fury Road', 'John Wick', 'John Wick: Chapter 4', 'Top Gun: Maverick',
  'The Lord of the Rings: The Fellowship of the Ring', 'The Lord of the Rings: The Return of the King',
  'Harry Potter and the Sorcerer\'s Stone', 'Star Wars', 'The Empire Strikes Back',
  'Alien', 'Aliens', 'The Thing', 'The Shining', '2001: A Space Odyssey', 'A Clockwork Orange',
  'Taxi Driver', 'Apocalypse Now', 'Casablanca', 'Rear Window', 'Vertigo', 'Psycho',
  '12 Angry Men', 'One Flew Over the Cuckoo\'s Nest', 'American Beauty', 'American History X',
  'The Truman Show', 'Eternal Sunshine of the Spotless Mind', 'Requiem for a Dream',
  'No Country for Old Men', 'There Will Be Blood', 'The Big Lebowski', 'Memento',
  'Shutter Island', 'Gone Girl', 'Zodiac', 'Prisoners', 'Nightcrawler', 'Drive',
  'La La Land', 'Whiplash', 'The Grand Budapest Hotel', 'Amélie', 'Life Is Beautiful',
  'Cinema Paradiso', 'The Intouchables', 'City of God', 'Amores Perros', 'Roma',
  'Everything Everywhere All at Once', 'Arrival', 'Ex Machina', 'Her', 'Moon',
  'Children of Men', 'The Martian', 'Gravity', 'Edge of Tomorrow', 'District 9',
  'The Wolf of Wall Street', 'The Social Network', 'Moneyball', 'Catch Me If You Can',
  'The Terminal', 'Cast Away', 'Philadelphia', 'The Pursuit of Happyness',
  // Diziler
  'Breaking Bad', 'Better Call Saul', 'The Sopranos', 'The Wire', 'Chernobyl',
  'Game of Thrones', 'House of the Dragon', 'Succession', 'The Bear', 'Severance',
  'Shogun', 'The Last of Us', 'Stranger Things', 'Dark', 'Money Heist', 'Squid Game',
  'Peaky Blinders', 'Sherlock', 'Mindhunter', 'True Detective', 'Fargo', 'Westworld',
  'The Mandalorian', 'Andor', 'Loki', 'WandaVision', 'The Boys', 'Invincible',
  'Arcane', 'Cyberpunk: Edgerunners', 'Attack on Titan', 'Death Note', 'One Piece',
  'Narcos', 'Ozark', 'Better Call Saul', 'Boardwalk Empire', 'Mad Men', 'The Crown',
  'Downton Abbey', 'Fleabag', 'Ted Lasso', 'The Office', 'Brooklyn Nine-Nine',
  'Friends', 'How I Met Your Mother', 'Modern Family', 'The Big Bang Theory',
  'Rick and Morty', 'BoJack Horseman', 'Black Mirror', 'Love, Death & Robots',
  'The Queen\'s Gambit', 'The Witcher', 'Vikings', 'The Last Kingdom', 'Outlander',
  'The Handmaid\'s Tale', 'Yellowstone', 'The White Lotus', 'Big Little Lies',
  'Euphoria', '13 Reasons Why', 'Sex Education', 'Skins', 'Normal People',
  'Silo', 'Fallout', 'The Penguin', 'The Night Agent', 'Reacher', 'Jack Ryan',
  'Wednesday', 'The Umbrella Academy', 'Doom Patrol', 'Watchmen', 'The Sandman',
  // Türkiye
  'Bir Zamanlar Çukurova', 'Kurtlar Vadisi', 'Ezel', 'Muhteşem Yüzyıl', 'Diriliş Ertuğrul',
  'Çukur', 'Hercai', 'Kara Para Aşk', 'Aşk-ı Memnu', 'Behzat Ç.', 'Leyla ile Mecnun',
  'Ayla: The Daughter of War', 'Babam ve Oğlum', 'G.O.R.A.', 'A.R.O.G', 'Vizontele',
  'Organize İşler', 'Kabadayı', 'Uzak', 'Kış Uykusu', 'Bir Zamanlar Anadolu\'da',
  'Nefes: Vatan Sağolsun', 'Fetih 1453', 'Dağ II', 'Müslüm', 'Sıfır Bir'
];

const CONTENT_FIELDS = `
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
        contentEn: content(country: $country, language: en) { title }
        offers(country: $country, platform: WEB) {
          monetizationType
          package { clearName technicalName }
        }`;

const POPULAR_QUERY = `
query Popular($country: Country!, $language: Language!, $first: Int!, $after: String) {
  popularTitles(country: $country, first: $first, after: $after) {
    pageInfo { hasNextPage endCursor }
    edges { node { ${CONTENT_FIELDS} } }
  }
}`;

const SEARCH_QUERY = `
query Search($country: Country!, $language: Language!, $first: Int!, $filter: TitleFilter) {
  popularTitles(country: $country, first: $first, filter: $filter) {
    edges { node { ${CONTENT_FIELDS} } }
  }
}`;

function graphql(query, operationName, variables) {
  return new Promise((resolve) => {
    const body = JSON.stringify({ operationName, variables, query });
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

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function toItem(node) {
  const c = node.content || {};
  const imdb = c.scoring && c.scoring.imdbScore;
  if (!c.title || !c.posterUrl || !imdb) return null;

  const poster = /^https:\/\//.test(c.posterUrl)
    ? c.posterUrl
    : 'https://images.justwatch.com' + String(c.posterUrl).replace('{profile}', 's332').replace('{format}', 'jpg');

  const offers = (node.offers || [])
    .filter((o) => o.monetizationType === 'FLATRATE' || o.monetizationType === 'FREE')
    .map((o) => mapPlatform(o.package && o.package.technicalName, o.package && o.package.clearName))
    .filter(Boolean);

  const baseSlug = slugify(c.originalTitle) || slugify(c.title) || 'yapim';
  const id = `${baseSlug}-${c.originalReleaseYear || ''}`.replace(/-+$/, '');
  if (!id) return null;

  return {
    id,
    t: c.title,
    o: c.originalTitle || c.title,
    y: c.originalReleaseYear || 0,
    imdb: Math.round(imdb * 10) / 10,
    votes: (c.scoring && c.scoring.imdbVotes) || 0,
    poster,
    plot: (c.shortDescription || '').slice(0, 420),
    genres: (c.genres || []).map((g) => g.shortName).filter(Boolean).slice(0, 4),
    runtime: c.runtime || 0,
    e: (node.contentEn && node.contentEn.title && node.contentEn.title !== c.title) ? node.contentEn.title : undefined,
    type: node.objectType === 'SHOW' ? 'series' : 'movie',
    platforms: [...new Set(offers)]
  };
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

function normTitle(text) {
  return String(text || '')
    .replace(/[ıİ]/g, 'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('tr')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

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
    if (known) { it.yt = known; reused++; continue; }
    const curatedId = curated.get(normTitle(it.o)) || curated.get(normTitle(it.t));
    if (curatedId) { it.yt = curatedId; fromCurated++; continue; }
    missing.push(it);
  }

  if (fromCurated) console.log(`\n✓ Fragman: ${fromCurated} yapım doğrulanmış katalogdan eşleşti`);
  if (missing.length === 0) {
    console.log(`✓ Fragmanlar: ${reused} kayıt önceki indeksten korundu`);
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

(async () => {
  const out = new Map();
  let after = null;
  let pageCount = 0;

  // 1) TR popüler listesi
  while (out.size < TARGET) {
    const res = await graphql(POPULAR_QUERY, 'Popular', {
      country: 'TR', language: 'tr', first: PAGE, after
    });
    const block = res && res.data && res.data.popularTitles;
    if (!block || !Array.isArray(block.edges) || block.edges.length === 0) break;

    for (const edge of block.edges) {
      const item = toItem(edge.node);
      if (item && !out.has(item.id)) out.set(item.id, item);
    }

    pageCount++;
    if (!block.pageInfo || !block.pageInfo.hasNextPage) break;
    after = block.pageInfo.endCursor;
    if (pageCount > 40) break;
    process.stdout.write(`\r  popüler sayfa ${pageCount}, ${out.size} yapım`);
    await new Promise((r) => setTimeout(r, 350));
  }
  console.log(`\n✓ Popüler listesi: ${out.size} yapım`);

  // 2) Tohum başlıklar (popüler listede olmayan klasikler)
  const seedUnique = [...new Set(SEEDS)];
  const seedHits = [];
  for (const title of seedUnique) {
    const key = normTitle(title);
    const already = [...out.values()].some((i) => normTitle(i.o) === key || normTitle(i.t) === key);
    if (already) continue;
    seedHits.push(title);
  }

  console.log(`  tohum aranıyor: ${seedHits.length} başlık`);
  let si = 0;
  let added = 0;
  async function seedWorker() {
    while (si < seedHits.length) {
      const title = seedHits[si++];
      const res = await graphql(SEARCH_QUERY, 'Search', {
        country: 'TR', language: 'tr', first: 3, filter: { searchQuery: title }
      });
      const edges = (res && res.data && res.data.popularTitles && res.data.popularTitles.edges) || [];
      // JustWatch TR yerelleştirilmiş adlar döndürüyor ("Parasite" -> "Parazit"),
      // bu yüzden birebir eşleşme yerine aramanın en iyi sonucunu alıyoruz.
      for (const edge of edges) {
        const item = toItem(edge.node);
        if (!item || item.imdb < 5) continue;
        if (!out.has(item.id)) { out.set(item.id, item); added++; }
        break;
      }
      await new Promise((r) => setTimeout(r, 300));
    }
  }
  await Promise.all(Array.from({ length: 4 }, seedWorker));
  console.log(`✓ Tohumlardan eklenen: ${added}`);

  // 3) Fragmanlar
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
  console.log(`✓ ${list.length} yapım -> data/catalog.json (${kb} KB)`);
})();