#!/usr/bin/env node
/**
 * CINE3D - Katalog IMDb kimliği zenginleştirici
 *
 * js/movies-data.js içindeki yapımlar için OMDb'den gerçek IMDb kimliğini
 * (ttXXXXXXX) bulur ve dosyaya yazar. Böylece:
 *   - sitemap.xml `?imdb=` derin bağlantılarını kullanabilir
 *   - modalda Movie JSON-LD'si tüm katalog için üretilebilir
 *   - harici platform linkleri daha isabetli olur
 *
 * Kullanım:
 *   set OMDB_API_KEYS=anahtar1,anahtar2  (Windows)
 *   node scripts/enrich-imdb.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const FILE = path.join(__dirname, '..', 'js', 'movies-data.js');
const KEYS = (process.env.OMDB_API_KEYS || 'trilogy').split(',').map(s => s.trim()).filter(Boolean);
const TIMEOUT = 12000;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function getJson(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Cine3D-CatalogBot/1.0' } }, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { resolve(null); } });
    });
    req.setTimeout(TIMEOUT, () => req.destroy(new Error('timeout')));
    req.on('error', () => resolve(null));
  });
}

function loadMovies() {
  const src = fs.readFileSync(FILE, 'utf8');
  const block = src.match(/const MOVIES_DATA = (\[[\s\S]*?\n\];)/);
  if (!block) throw new Error('MOVIES_DATA bulunamadı');
  return eval(block[1].replace(/;$/, ''));
}

const norm = (s) => String(s || '').toLowerCase()
  .replace(/[ıİ]/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, ' ').trim();

async function omdbLookup(title, year) {
  for (const key of KEYS) {
    const q = `t=${encodeURIComponent(title)}${year ? '&y=' + year : ''}&apikey=${encodeURIComponent(key)}`;
    const j = await getJson('https://www.omdbapi.com/?' + q);
    if (j && j.Response === 'True' && /^tt\d+$/.test(String(j.imdbID || ''))) return j;
    if (j && /invalid api key|request limit/i.test(String(j.Error || ''))) continue;
    return null; // gerçekten bulunamadı
  }
  return null;
}

(async () => {
  const movies = loadMovies();
  const missing = movies.filter(m => !/^tt\d+$/.test(String(m.imdbID || '')));
  console.log(`Katalog: ${movies.length} | IMDb kimliği eksik: ${missing.length}`);

  const found = new Map();
  let i = 0;
  for (const m of missing) {
    i++;
    const candidates = [m.originalTitle, m.title].filter(Boolean);
    let hit = null;
    for (const title of candidates) {
      hit = await omdbLookup(title, m.year);
      if (hit) break;
      await sleep(120);
    }
    if (hit) {
      // Başlık benzerliği kontrolü (yanlış eşleşmeyi engelle)
      const a = norm(hit.Title);
      const ok = candidates.some(t => { const b = norm(t); return a.includes(b) || b.includes(a); });
      if (ok) found.set(m.id, hit.imdbID);
    }
    if (i % 10 === 0) process.stdout.write(`\r  ${i}/${missing.length} sorgulandı, ${found.size} eşleşti`);
    await sleep(110);
  }

  console.log(`\nEşleşen: ${found.size}/${missing.length}`);

  if (found.size > 0) {
    let src = fs.readFileSync(FILE, 'utf8');
    let written = 0;
    for (const [id, imdbID] of found) {
      const anchor = `    "id": "${id}",`;
      if (!src.includes(anchor)) continue;
      if (src.includes(anchor + '\n    "imdbID"')) continue;
      src = src.replace(anchor, `${anchor}\n    "imdbID": "${imdbID}",`);
      written++;
    }
    fs.writeFileSync(FILE, src);
    console.log(`movies-data.js güncellendi: ${written} kayıt`);
  }
})();
