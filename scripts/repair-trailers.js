#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { findTrailer } = require('./catalog-metadata');
const { writeHealth } = require('./catalog-health');
const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'data/catalog.json');
const CACHE = path.join(__dirname, '.trailer-cache.json');
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const arg = name => {
  const hit = process.argv.find(value => value.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : null;
};
const LIMIT = Number(arg('limit')) > 0 ? Number(arg('limit')) : Infinity;
const DELAY = Number(arg('delay')) >= 0 ? Number(arg('delay')) : 450;
const POSITIVE_TTL = 30 * 86400000;
// Olumsuz sonuç kısa süre tutulur: YouTube kısıtlaması geçince kayıt yeniden denenebilsin.
const NEGATIVE_TTL = 3600000;

function trailerVerification(trailer) {
  return { source: 'YouTube oEmbed', match: 'strong', title: trailer.title, author: trailer.author, checkedAt: trailer.checkedAt || new Date().toISOString() };
}

async function repairTrailers() {
  const original = fs.readFileSync(FILE, 'utf8');
  const catalog = JSON.parse(original);
  const allMissing = catalog.items.filter(item => !item.yt);
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch (e) { /* ilk tarama */ }
  const keyOf = item => `${item.imdbID || item.id}|${item.y}|${item.type}`;
  const stampOf = item => { const cached = cache[keyOf(item)]; return cached ? Date.parse(cached.at) : 0; };
  // Hiç denenmemiş kayıtlar önce gelir; böylece --limit'li turlar ilerler.
  const missing = allMissing.slice().sort((a, b) => stampOf(a) - stampOf(b)).slice(0, LIMIT);
  let cursor = 0;
  let completed = 0;
  let found = 0;
  console.log(`${missing.length}/${allMissing.length} eksik fragman için başlık, yıl, kanal ve oEmbed doğrulaması (gecikme ${DELAY}ms)`);
  async function worker() {
    while (cursor < missing.length) {
      const item = missing[cursor++];
      const key = keyOf(item);
      const cached = cache[key];
      const ttl = cached && cached.result ? POSITIVE_TTL : NEGATIVE_TTL;
      const trailer = cached && Date.now() - Date.parse(cached.at) < ttl
        ? cached.result : await findTrailer(item);
      cache[key] = { at: new Date().toISOString(), result: trailer };
      if (trailer) {
        item.yt = trailer.id;
        item.trailerVerification = trailerVerification(trailer);
        found++;
      }
      completed++;
      if (completed % 25 === 0) {
        fs.writeFileSync(CACHE, JSON.stringify(cache));
        console.log(`${completed}/${missing.length} denetlendi · ${found} doğrulanmış fragman bulundu`);
      }
      await new Promise(resolve => setTimeout(resolve, DELAY));
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  fs.writeFileSync(CACHE, JSON.stringify(cache));
  if (hash(fs.readFileSync(FILE, 'utf8')) !== hash(original)) throw new Error('Katalog tarama sırasında değişti; kullanıcı değişiklikleri korunarak işlem durduruldu.');
  // Arama tarihi, yayıncı kontrol tarihini değiştirmez.
  catalog.trailersCheckedAt = new Date().toISOString();
  const temp = FILE + '.tmp';
  fs.writeFileSync(temp, JSON.stringify(catalog));
  fs.renameSync(temp, FILE);
  const health = writeHealth(catalog);
  console.log(JSON.stringify({ added: found, remaining: health.index.missingTrailer, index: health.index.total }));
}
if (require.main === module) repairTrailers().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { repairTrailers, trailerVerification };
