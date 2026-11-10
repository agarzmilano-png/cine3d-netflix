#!/usr/bin/env node
/** Kalan şüpheli OST kayıtları için ikinci geçiş: parça adına göre arama + doğrulama. */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const OST_FILE = path.join(ROOT, 'js', 'movie-soundtracks.js');
const TARGETS = ['dark-knight', 'fight-club', 'olumlu-dunya', 'olumlu-dunya-2', 'arog', 'coherence'];

const BAD = /shorts|#short|fragman|trailer|teaser|\bscene\b|\bclip\b|reaction|\bcover\b|mashup|tiktok|\bedit\b|piano version|1 hour|hour version|tribute|vinyl rip|\b8d\b|slowed|reverb|nightcore|karaoke|remix|live at|concert/i;
const STOP = new Set(['the', 'and', 'from', 'original', 'soundtrack', 'motion', 'picture', 'theme', 'main', 'title', 'version', 'official', 'music', 'score', 'ost', 'part', 'vol', 'with', 'for', 'of', 'a', 'to', 'in', 'on']);

const fold = (s) => String(s || '').replace(/[ıİ]/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const tokens = (t) => fold(t).split(' ').filter((w) => w.length >= 3 && !STOP.has(w) && !/^\d+$/.test(w));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function get(url, timeout = 15000) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0 Safari/537.36', 'Accept-Language': 'tr-TR,tr;q=0.9' } }, (res) => {
      let body = '';
      res.on('data', (c) => { if (body.length < 3e6) body += c; });
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.setTimeout(timeout, () => req.destroy());
    req.on('error', () => resolve({ status: 0, body: '' }));
  });
}

async function oembed(id) {
  const r = await get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`, 12000);
  if (r.status !== 200) return null;
  try { const j = JSON.parse(r.body); return { title: j.title || '', author: j.author_name || '' }; } catch (e) { return null; }
}

async function searchIds(q, limit = 6) {
  const r = await get(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&hl=tr`);
  if (r.status !== 200) return [];
  const out = [];
  const re = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
  let m;
  while ((m = re.exec(r.body)) && out.length < limit) if (!out.includes(m[1])) out.push(m[1]);
  return out;
}

(async () => {
  const ost = require(OST_FILE);
  const src = fs.readFileSync(path.join(ROOT, 'js', 'movies-data.js'), 'utf8');
  const movies = eval(src.match(/const MOVIES_DATA = (\[[\s\S]*?\n\];)/)[1].replace(/;$/, ''));
  const byId = new Map(movies.map((m) => [m.id, m]));

  const report = [];

  for (const id of TARGETS) {
    const entry = ost[id];
    if (!entry) continue;
    const movie = byId.get(id) || {};
    const movieTokens = tokens(movie.originalTitle || movie.title || '');
    const trackTokens = tokens(entry.track);
    const queries = [
      entry.track.replace(/\s*\([^)]*\)/g, ' ').trim(),
      `${movie.originalTitle || movie.title} ${entry.track}`,
      `${entry.track} ${movie.originalTitle || movie.title}`.trim()
    ].filter(Boolean);

    let best = null;
    for (const q of queries) {
      const ids = await searchIds(q, 6);
      for (const vid of ids) {
        const meta = await oembed(vid);
        await sleep(220);
        if (!meta || BAD.test(meta.title) || BAD.test(meta.author)) continue;
        const hay = fold(`${meta.title} ${meta.author}`);
        const titleHay = fold(meta.title);
        const movieHits = movieTokens.filter((t) => hay.includes(t)).length;
        const trackHits = trackTokens.filter((t) => titleHay.includes(t)).length;
        const official = /-\s*Topic$/i.test(meta.author.trim()) || /VEVO/i.test(meta.author) || /Records|Soundtrack|Music/i.test(meta.author);
        // Geçerli sayılma: en az 2 parça kelimesi veya (film kelimesi + 1 parça kelimesi)
        const ok = trackHits >= 2 || (movieHits >= 1 && trackHits >= 1);
        if (!ok) continue;
        const score = trackHits * 4 + movieHits * 2 + (official ? 3 : 0);
        if (!best || score > best.score) best = { vid, meta, score, official };
        if (official && trackHits >= 2) break;
      }
      if (best && best.official) break;
      await sleep(600);
    }

    if (best) {
      entry.youtubeId = best.vid;
      report.push(`${id.padEnd(16)} -> ${best.vid}  |  ${best.meta.author}  |  ${best.meta.title.slice(0, 60)}`);
    } else {
      entry.youtubeId = null;
      report.push(`${id.padEnd(16)} -> (kaldırıldı) doğrulanmış kaynak yok`);
    }
    await sleep(900);
  }

  const code = fs.readFileSync(OST_FILE, 'utf8');
  const headerEnd = code.indexOf('const MOVIE_SOUNDTRACKS = {');
  const header = code.slice(0, headerEnd);
  const ids = Object.keys(ost).filter((k) => byId.has(k));
  const body = ids.map((id) => {
    const e = ost[id];
    return `  ${JSON.stringify(id)}: {\n    "track": ${JSON.stringify(e.track)},\n    "composer": ${JSON.stringify(e.composer)},\n    "youtubeId": ${JSON.stringify(e.youtubeId)},\n    "description": ${JSON.stringify(e.description || '')}\n  }`;
  }).join(',\n');
  const footer = `\n};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = MOVIE_SOUNDTRACKS;\n  module.exports.MOVIE_SOUNDTRACKS = MOVIE_SOUNDTRACKS;\n}\n`;
  fs.writeFileSync(OST_FILE, header + 'const MOVIE_SOUNDTRACKS = {\n' + body + footer);

  console.log(report.join('\n'));
})();