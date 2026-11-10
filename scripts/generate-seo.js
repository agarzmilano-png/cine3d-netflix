#!/usr/bin/env node
/**
 * CINE3D - SEO üreteci
 *
 * js/movies-data.js içindeki katalogdan sitemap.xml üretir.
 * Her yapım için uygulamanın desteklediği derin bağlantı kullanılır:
 *   - Yapımda IMDb kimliği varsa: ?imdb=ttXXXXXXX
 *   - Yoksa: ?movie=<id>  (katalog verisinde IMDb kimliği tutulmuyor)
 *
 * Kullanım: node scripts/generate-seo.js
 * Çıktı: <repo kökü>/sitemap.xml
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://agarzmilano-png.github.io/cine3d-netflix/';
const OUT = path.join(ROOT, 'sitemap.xml');
const TODAY = new Date().toISOString().slice(0, 10);

function loadMovies() {
  const src = fs.readFileSync(path.join(ROOT, 'js', 'movies-data.js'), 'utf8');
  const block = src.match(/const MOVIES_DATA = (\[[\s\S]*?\n\];)/);
  if (!block) throw new Error('movies-data.js içinde MOVIES_DATA bulunamadı');
  return eval(block[1].replace(/;$/, ''));
}

function xmlEscape(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const movies = loadMovies();

const urls = [
  { loc: BASE, priority: '1.0', changefreq: 'daily' }
];

for (const m of movies) {
  if (!m || !m.id) continue;
  const loc = /^tt\d+$/.test(String(m.imdbID || ''))
    ? `${BASE}?imdb=${encodeURIComponent(m.imdbID)}`
    : `${BASE}?movie=${encodeURIComponent(m.id)}`;
  urls.push({ loc, priority: '0.8', changefreq: 'weekly' });
}

const body = urls.map(u =>
  `  <url>\n` +
  `    <loc>${xmlEscape(u.loc)}</loc>\n` +
  `    <lastmod>${TODAY}</lastmod>\n` +
  `    <changefreq>${u.changefreq}</changefreq>\n` +
  `    <priority>${u.priority}</priority>\n` +
  `  </url>`
).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
body + `\n</urlset>\n`;

fs.writeFileSync(OUT, xml, 'utf8');
console.log(`sitemap.xml yazıldı: ${urls.length} URL (1 ana sayfa + ${movies.length} yapım)`);
