'use strict';
const https = require('https');

function normalize(text) {
  return String(text || '').replace(/[ıİ]/g, 'i').normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function posterUrl(value) {
  const raw = String(value || '').replace('{profile}', 's592').replace('{format}', 'jpg');
  const url = new URL(raw, 'https://images.justwatch.com');
  if (url.protocol !== 'https:') return null;
  if (url.hostname === 'images.justwatch.com') {
    url.pathname = url.pathname.replace(/\/s(\d+)\//, (profile, size) => Number(size) < 592 ? '/s592/' : profile);
  }
  return url.href;
}

function knownRating(value) {
  const rating = String(value || '').trim().toUpperCase();
  return /^(?:\d{1,2}\+?|12A|GENEL|G|U|PG|PG-13|R|NC-17|TV-Y|TV-Y7|TV-Y7-FV|TV-G|TV-PG|TV-14|TV-MA)$/.test(rating) &&
    (!/^\d/.test(rating) || parseInt(rating, 10) <= 18);
}

function certification(node) {
  for (const [key, country] of [['content', 'TR'], ['contentUs', 'US'], ['contentGb', 'GB'], ['contentDe', 'DE']]) {
    const value = node[key]?.ageCertification;
    if (knownRating(value)) return { ageRating: String(value).trim(), ageRatingCountry: country, ageRatingSource: 'JustWatch' };
  }
  return { ageRating: null, ageRatingCountry: null, ageRatingSource: null };
}

function sameIdentity(item, movie) {
  if (item.imdbID && movie.imdbID) return item.imdbID === movie.imdbID;
  return item.y === Number(movie.year) && (item.type === 'series') === !!movie.isSeries &&
    [item.t, item.o, item.e].some(t => t && [movie.title, movie.originalTitle].some(name => name && normalize(name) === normalize(t)));
}

function getText(url, redirects = 0, timeoutMs = 12000) {
  return new Promise(resolve => {
    const started = Date.now();
    let settled = false;
    const finish = value => { if (!settled) { settled = true; clearTimeout(timer); resolve(value); } };
    const timer = setTimeout(() => { req.destroy(); finish({ status: 0, body: '' }); }, timeoutMs);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/130.0.0.0 Safari/537.36', 'Accept-Language': 'en-US,en;q=0.8,tr;q=0.7' } }, res => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 3) {
        res.resume();
        const next = new URL(res.headers.location, url);
        if (next.protocol === 'https:' && /(^|\.)youtube\.com$/.test(next.hostname)) return finish(getText(next.href, redirects + 1, Math.max(1, timeoutMs - (Date.now() - started))));
        return finish({ status: 0, body: '' });
      }
      let body = '';
      res.on('data', chunk => { if (body.length < 4_000_000) body += chunk; });
      res.on('end', () => finish({ status: res.statusCode, body }));
      res.on('error', () => finish({ status: 0, body: '' }));
    });
    req.on('error', () => finish({ status: 0, body: '' }));
  });
}

async function videoMetadata(id, timeoutMs = 12000) {
  if (!/^[\w-]{11}$/.test(id || '')) return null;
  const response = await getText(`https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + id)}&format=json`, 0, timeoutMs);
  if (response.status !== 200) return null;
  try { return JSON.parse(response.body); } catch (e) { return null; }
}

function trailerMatches(meta, item) {
  if (!meta) return false;
  const title = normalize(meta.title);
  if (!/\b(trailer|teaser|fragman|tanitim)\b/.test(title)) return false;
  if (/\b(concept|fan made|fanmade|reaction|review|inceleme|full movie|recap|parody)\b/.test(title)) return false;
  const names = [item.o, item.t, item.e].map(normalize).filter(Boolean);
  const hit = names.find(name => (' ' + title + ' ').includes(' ' + name + ' '));
  if (!hit) return false;
  // Kısa/genel başlıklar ve yeniden çevrimler için yıl da görünür olmalı.
  const years = title.match(/\b(?:19|20)\d{2}\b/g) || [];
  if (years.length && !years.includes(String(item.y))) return false;
  if (hit.length < 5 && !years.includes(String(item.y))) return false;
  return /netflix|prime video|amazon|disney|hbo|max|warner|universal|paramount|sony|20th century|searchlight|a24|lionsgate|apple tv|rott(en)? tomatoes|movieclips|kinocheck|bkm|bir film|tme films|uip|trt|kanal d|show tv|\batv\b|now t[uü]rkiye|cjenm|cj enm|neon|focus features|mubi|peacock|hulu|fx networks|amc|bbc|itv|starz|showtime|crunchyroll|aniplex|toho|toei|bandai|adult swim|gain|blutv|tabii|exxen|discovery|national geographic|film4|studio canal|studiocanal/i.test(meta.author_name || '');
}

function searchVideoIds(body) {
  const ids = [];
  const re = /"videoId":"([A-Za-z0-9_-]{11})"/g;
  let match;
  while ((match = re.exec(body)) && ids.length < 5) if (!ids.includes(match[1])) ids.push(match[1]);
  return ids;
}

async function findTrailer(item, { timeoutMs = 20000 } = {}) {
  const deadline = Date.now() + timeoutMs;
  const names = [...new Set([item.o, item.t].filter(Boolean))];
  for (const name of names.slice(0, 2)) {
    if (Date.now() >= deadline) return null;
    const response = await getText('https://www.youtube.com/results?search_query=' + encodeURIComponent(`${name} ${item.y || ''} official trailer`) + '&hl=en', 0, Math.min(12000, deadline - Date.now()));
    if (response.status !== 200) continue;
    for (const id of searchVideoIds(response.body)) {
      if (Date.now() >= deadline) return null;
      const meta = await videoMetadata(id, Math.min(12000, deadline - Date.now()));
      if (trailerMatches(meta, item)) return { id, title: meta.title, author: meta.author_name, checkedAt: new Date().toISOString() };
    }
  }
  return null;
}

module.exports = { normalize, posterUrl, knownRating, certification, sameIdentity, getText, videoMetadata, trailerMatches, searchVideoIds, findTrailer };
