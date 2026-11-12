#!/usr/bin/env node
/**
 * Cine3D — Veri bütünlüğü doğrulaması (bağımlılıksız)
 *
 * `js/movies-data.js`, `data/catalog.json` ve `sitemap.xml` dosyalarını denetler.
 * Amaç: yayına bozuk veri (eksik alan, çökmüş URL biçimi, tekrar eden kimlik,
 * düşük çözünürlüklü backdrop) çıkmasını engellemek. CI'da her push'ta çalışır.
 *
 * Kullanım: node scripts/verify-data.js
 * Çıkış kodu: 0 = temiz, 1 = hata var.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const problems = [];
const warnings = [];

function fail(msg) { problems.push(msg); }
function warn(msg) { warnings.push(msg); }

// ---------------------------------------------------------------- movies
function loadMovies() {
  const file = path.join(ROOT, 'js', 'movies-data.js');
  const src = fs.readFileSync(file, 'utf8');
  const fn = new Function(src + '\nreturn MOVIES_DATA;');
  return fn();
}

const movies = loadMovies();
const ids = new Set();
const imdbs = new Map();
const trailers = new Map();

const REQUIRED = ['id', 'title', 'year', 'imdbRating', 'duration', 'ageRating', 'genres', 'director', 'summary', 'posterUrl', 'backdropUrl'];

movies.forEach((m, i) => {
  const where = `movies[${i}] (${m && m.id ? m.id : 'id yok'})`;

  REQUIRED.forEach((k) => {
    if (m[k] === undefined || m[k] === null || m[k] === '') fail(`${where}: zorunlu alan eksik → ${k}`);
  });

  if (!m.id) return;
  if (ids.has(m.id)) fail(`${where}: tekrar eden id`);
  ids.add(m.id);

  if (m.imdbID) {
    if (!/^tt\d{6,9}$/.test(m.imdbID)) fail(`${where}: geçersiz imdbID → ${m.imdbID}`);
    if (imdbs.has(m.imdbID)) fail(`${where}: tekrar eden imdbID (${m.imdbID}) → ${imdbs.get(m.imdbID)}`);
    else imdbs.set(m.imdbID, m.id);
  } else {
    warn(`${where}: imdbID yok`);
  }

  if (m.trailerYoutubeId) {
    if (!/^[A-Za-z0-9_-]{11}$/.test(m.trailerYoutubeId)) fail(`${where}: geçersiz YouTube kimliği → ${m.trailerYoutubeId}`);
    if (trailers.has(m.trailerYoutubeId)) fail(`${where}: tekrar eden fragman (${m.trailerYoutubeId}) → ${trailers.get(m.trailerYoutubeId)}`);
    else trailers.set(m.trailerYoutubeId, m.id);
  } else {
    fail(`${where}: trailerYoutubeId yok`);
  }

  const rating = Number(m.imdbRating);
  if (!Number.isFinite(rating) || rating < 0 || rating > 10) fail(`${where}: IMDb puanı aralık dışı → ${m.imdbRating}`);
  const year = Number(m.year);
  if (!Number.isFinite(year) || year < 1900 || year > 2100) fail(`${where}: yıl aralık dışı → ${m.year}`);

  if (!Array.isArray(m.genres) || m.genres.length === 0) fail(`${where}: genres boş`);
  if (!Array.isArray(m.seriesGenres) && m.genres && m.genres.length > 4) warn(`${where}: 4'ten fazla tür`);

  ['posterUrl', 'backdropUrl'].forEach((k) => {
    const u = String(m[k] || '');
    if (!/^https:\/\//.test(u)) fail(`${where}: ${k} https değil`);
  });

  // R027: backdrop en az 1280px olmalı (hero 3.8x büyütülmesin)
  const bd = String(m.backdropUrl || '');
  if (bd.includes('m.media-amazon.com') && !/(UX1280|SX1280|UX1500|SX1500|UX2000)/.test(bd)) {
    fail(`${where}: backdrop düşük çözünürlüklü (1280px beklenir)`);
  }

  if (m.platforms === undefined) warn(`${where}: platforms anahtarı yok`);
  else if (!Array.isArray(m.platforms)) fail(`${where}: platforms dizi değil`);
  else if (m.platforms.length === 0) warn(`${where}: platforms boş`);
  if (m.isSeries !== undefined && typeof m.isSeries !== 'boolean') fail(`${where}: isSeries boolean değil`);
  if (m.ageRating && !/^\d{1,2}\+?$|Genel/.test(String(m.ageRating))) warn(`${where}: ageRating biçimi beklenmedik → ${m.ageRating}`);
});

if (movies.length < 100) fail(`film sayısı beklenenden az: ${movies.length} (>=100 beklenir)`);

// ---------------------------------------------------------------- catalog
let catalog = null;
try {
  catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalog.json'), 'utf8'));
  const items = Array.isArray(catalog) ? catalog : catalog.items;
  if (!Array.isArray(items) || items.length < 100) fail(`catalog.json: yetersiz kayıt (${items ? items.length : 0})`);
  const lowRes = (items || []).filter(it => it.poster && /\/s(150|200|240|300|332)\//.test(it.poster));
  if (lowRes.length) warn(`catalog.json: ${lowRes.length} poster düşük çözünürlüklü (s592 beklenir)`);
} catch (e) {
  fail(`catalog.json okunamadı/geçersiz JSON: ${e.message}`);
}

// ---------------------------------------------------------------- sitemap
try {
  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  const locs = (sitemap.match(/<loc>/g) || []).length;
  if (locs < 110) fail(`sitemap.xml: URL sayısı düşük (${locs})`);
  const byId = new Map(movies.map(m => [m.id, m]));
  const missing = [...ids].filter((id) => {
    const m = byId.get(id);
    return !(sitemap.includes('movie=' + id) || (m && m.imdbID && sitemap.includes('imdb=' + m.imdbID)));
  });
  if (missing.length) warn(`sitemap.xml: ${missing.length} film bağlantısı eksik (ör. ${missing.slice(0, 3).join(', ')})`);
} catch (e) {
  fail(`sitemap.xml okunamadı: ${e.message}`);
}

// ---------------------------------------------------------------- sürüm
try {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
  const htmlVersions = [...new Set((html.match(/\?v=([\d.]+)/g) || []).map(s => s.slice(3)))];
  const swVersion = (sw.match(/CACHE_VERSION = '([^']+)'/) || [])[1] || null;
  if (htmlVersions.length !== 1 || !swVersion || htmlVersions[0] !== swVersion) {
    fail(`sürüm etiketleri tutarsız: index=${htmlVersions.join(',') || 'yok'} / sw=${swVersion || 'yok'}`);
  }
} catch (e) {
  fail(`sürüm kontrolü yapılamadı: ${e.message}`);
}

// ---------------------------------------------------------------- rapor
console.log(`Cine3D veri doğrulaması`);
console.log(`  film: ${movies.length} · benzersiz id: ${ids.size} · imdbID: ${imdbs.size} · fragman: ${trailers.size}`);
console.log(`  catalog: ${catalog ? ((Array.isArray(catalog) ? catalog : catalog.items) || []).length : 0} kayıt`);

if (warnings.length) {
  console.log(`\nUYARI (${warnings.length}):`);
  warnings.slice(0, 30).forEach(w => console.log('  - ' + w));
  if (warnings.length > 30) console.log(`  ... +${warnings.length - 30} uyarı`);
}

if (problems.length) {
  console.log(`\nHATA (${problems.length}):`);
  problems.forEach(p => console.log('  ✗ ' + p));
  process.exit(1);
}

console.log('\n✓ Veri bütünlüğü temiz.');
