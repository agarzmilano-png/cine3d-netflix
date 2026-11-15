#!/usr/bin/env node
'use strict';
/**
 * Cine3D — Devralınmış (legacy) fragmanları oEmbed ile yeniden doğrular.
 *
 * `repair-trailers.js` yalnızca fragmanı OLMAYAN kayıtları arar; bu araç ise
 * `yt` kimliği taşıyıp kaynağı doğrulanmamış (`trailerVerification.checkedAt`
 * yok) kayıtları denetler:
 *   - başlık + yıl + kanal kuralları geçerse → tam oEmbed kaydı yazılır
 *   - video erişilemiyor / uyuşmuyorsa → yt kaldırılır, ret gerekçesi yazılır
 *   - ağ/rate-limit hatası → kayıt olduğu gibi bırakılır (sonraki tura kalır)
 *
 * Kullanım:
 *   node scripts/verify-trailers.js                 # tüm legacy kayıtlar
 *   node scripts/verify-trailers.js --limit=30 --dry-run
 *   node scripts/verify-trailers.js --limit=50
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { getText, trailerMatches, normalize } = require('./catalog-metadata');
const { writeHealth } = require('./catalog-health');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'data', 'catalog.json');
const CACHE = path.join(__dirname, '.trailer-verify-cache.json');
const TTL_MS = 7 * 24 * 60 * 60 * 1000;
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');

const argv = process.argv.slice(2);
const dryRun = argv.includes('--dry-run');
const limitArg = argv.find((arg) => arg.startsWith('--limit='));
const limit = limitArg ? Math.max(1, Number(limitArg.split('=')[1]) || 1) : Infinity;

async function oembed(videoId, timeoutMs = 12000) {
  const url = `https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + videoId)}&format=json`;
  const response = await getText(url, 0, timeoutMs);
  if (response.status === 200) {
    try { return { status: 200, meta: JSON.parse(response.body) }; } catch (e) { return { status: 0 }; }
  }
  return { status: response.status };
}

// Mevcut bir kimliği değerlendirir. Yeni aday seçiminden farklı olarak kanal
// beyaz listesi zorunlu değil: video canlı ve fragman ise zayıf eşleşme olarak
// korunur; yalnızca ölü/erişilemeyen veya açıkça başka yapıma ait videolar düşürülür.
function classifyOembed(status, meta, item) {
  if (status === 200 && meta) {
    if (trailerMatches(meta, item)) return { verdict: 'verified', match: 'strong', title: meta.title, author: meta.author_name };
    const title = String(meta.title || '');
    const trailerish = /(trailer|teaser|fragman|tanitim)/.test(normalize(title));
    const years = title.match(/\b(?:19|20)\d{2}\b/g) || [];
    const yearConflict = years.length > 0 && !years.includes(String(item.y));
    if (trailerish && !yearConflict) return { verdict: 'verified', match: 'weak', title, author: meta.author_name };
    return { verdict: 'rejected', reason: yearConflict ? 'video başka yıla ait' : 'video fragman değil' };
  }
  if ([400, 401, 403, 404, 410].includes(status)) return { verdict: 'rejected', reason: `video erişilemiyor (${status})` };
  return { verdict: 'skipped', reason: `oEmbed yanıtı ${status || 'yok'}` };
}

async function verifyTrailers() {
  const original = fs.readFileSync(FILE, 'utf8');
  const catalog = JSON.parse(original);
  const legacy = catalog.items.filter((item) => item.yt && !item.trailerVerification?.checkedAt);
  const target = legacy.slice(0, Number.isFinite(limit) ? limit : legacy.length);
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch (e) { /* ilk tur */ }

  let cursor = 0;
  let verified = 0;
  let weak = 0;
  let rejected = 0;
  let skipped = 0;
  let done = 0;

  console.log(`${legacy.length} devralınmış fragman var; bu turda ${target.length} kayıt denetlenecek${dryRun ? ' (dry-run)' : ''}`);

  async function worker() {
    while (cursor < target.length) {
      const item = target[cursor++];
      let cached = cache[item.yt];
      // Atlanan (ağ/rate-limit) sonuçlar önbellekte tutulur ama sonraki turda
      // yeniden denenir; yalnızca kesinleşmiş kararlar TTL içinde tekrar kullanılır.
      let outcome = cached && cached.outcome.verdict !== 'skipped' && Date.now() - Date.parse(cached.at) < TTL_MS ? cached.outcome : null;
      if (!outcome) {
        const response = await oembed(item.yt);
        outcome = classifyOembed(response.status, response.meta, item);
        cache[item.yt] = { at: new Date().toISOString(), outcome };
        fs.writeFileSync(CACHE, JSON.stringify(cache));
      }
      if (outcome.verdict === 'verified') {
        item.trailerVerification = {
          source: 'YouTube oEmbed',
          match: outcome.match,
          title: outcome.title,
          author: outcome.author,
          checkedAt: new Date().toISOString()
        };
        if (outcome.match === 'weak') weak++;
        else verified++;
      } else if (outcome.verdict === 'rejected') {
        item.trailerVerification = { source: 'oEmbed doğrulanamadı', reason: outcome.reason, checkedAt: new Date().toISOString() };
        delete item.yt;
        rejected++;
      } else {
        skipped++;
      }
      done++;
      if (done % 25 === 0) console.log(`${done}/${target.length} · güçlü ${verified}, zayıf ${weak}, reddedilen ${rejected}, atlanan ${skipped}`);
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));

  const remaining = catalog.items.filter((item) => item.yt && !item.trailerVerification?.checkedAt).length;
  if (!dryRun) {
    if (hash(fs.readFileSync(FILE, 'utf8')) !== hash(original)) {
      throw new Error('Katalog tarama sırasında değişti; yazma iptal edildi.');
    }
    const temp = FILE + '.tmp';
    fs.writeFileSync(temp, JSON.stringify(catalog));
    fs.renameSync(temp, FILE);
    const health = writeHealth(catalog);
    console.log('catalog-health:', JSON.stringify(health.index));
  }
  console.log(JSON.stringify({ total: legacy.length, processed: done, verified, weak, rejected, skipped, remaining }, null, 2));
  return { total: legacy.length, processed: done, verified, weak, rejected, skipped, remaining };
}

if (require.main === module) verifyTrailers().catch((error) => { console.error(error.message); process.exitCode = 1; });
module.exports = { verifyTrailers, classifyOembed };
