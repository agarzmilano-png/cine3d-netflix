#!/usr/bin/env node
/**
 * OST doğrulayıcı / düzeltici.
 *
 * Her yapım için:
 *   1) Mevcut YouTube kimliği oEmbed ile kontrol edilir (video başlığı çekilir).
 *   2) Başlık, filmin adı ve parça adıyla eşleşmiyorsa YouTube'da yeniden aranır,
 *      adaylar oEmbed ile doğrulanır ve en iyi eşleşme yazılır.
 *
 * Çıktı: js/movie-soundtracks.js (yalnızca youtubeId'ler düzeltilir)
 *        + konsolda değişiklik raporu.
 *
 * Kullanım: node scripts/fix-ost.js [--force]
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const OST_FILE = path.join(ROOT, 'js', 'movie-soundtracks.js');
const CACHE_FILE = path.join(ROOT, 'scripts', '.ost-cache.json');
const FORCE = process.argv.includes('--force');

const STOP = new Set(['the', 'and', 'from', 'original', 'soundtrack', 'motion', 'picture', 'theme',
  'main', 'title', 'version', 'official', 'music', 'score', 'ost', 'part', 'vol', 'remastered',
  'extended', 'edit', 'mix', 'feat', 'ft', 'with', 'for', 'of', 'a', 'to', 'in', 'on', 'my', 'is',
  'be', 'that', 'this', 'vs', 'live', 'audio', 'video', 'hd', 'hq', 'full', 'song', 'track']);

function fold(s) {
  return String(s || '')
    .replace(/[ıİ]/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function tokens(text) {
  return fold(text).split(' ').filter((w) => w.length >= 3 && !STOP.has(w) && !/^\d+$/.test(w));
}

function get(url, timeout = 15000) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8'
      }
    }, (res) => {
      let body = '';
      res.on('data', (c) => { if (body.length < 3_000_000) body += c; });
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.setTimeout(timeout, () => req.destroy(new Error('timeout')));
    req.on('error', () => resolve({ status: 0, body: '' }));
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function oembed(videoId) {
  const r = await get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`, 12000);
  if (r.status !== 200) return null;
  try {
    const j = JSON.parse(r.body);
    return { title: j.title || '', author: j.author_name || '' };
  } catch (e) {
    return null;
  }
}

async function searchIds(query, limit = 5) {
  const r = await get(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&hl=tr`);
  if (r.status !== 200) return [];
  const found = [];
  const re = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
  let m;
  while ((m = re.exec(r.body)) && found.length < limit) {
    if (!found.includes(m[1])) found.push(m[1]);
  }
  return found;
}

// Fragman, sahne, shorts, cover, tepki, remix, saatlik versiyon vb. OST sayılmaz
const BAD = /shorts|#short|fragman|trailer|teaser|\bscene\b|\bclip\b|reaction|\bcover\b|mashup|tiktok|\bedit\b|behind the scenes|interview|making of|\d+x\d+|full movie|movie clip|piano version|1 hour|hour version|tribute|vinyl rip|\b8d\b|slowed|reverb|nightcore|karaoke|instrumental version|remix|live at|concert/i;

// Resmi müzik kanalı işaretleri (YouTube "Topic" kanalları plak şirketi tarafından üretilir)
function isOfficialChannel(author) {
  const a = String(author || '');
  return /-\s*Topic$/i.test(a.trim()) || /VEVO/i.test(a) || /Records|Soundtrack|Music/i.test(a);
}

function hits(meta, movieTokens, trackTokens) {
  const titleHay = fold(meta.title);
  const hay = fold(`${meta.title} ${meta.author}`);
  let movieHits = 0;
  let trackHits = 0;
  for (const t of movieTokens) if (hay.includes(t)) movieHits++;
  for (const t of trackTokens) if (titleHay.includes(t)) trackHits++;
  const bad = BAD.test(meta.title) || BAD.test(meta.author);
  return { movieHits, trackHits, bad };
}

// Mevcut bağlantı: film veya parça adıyla en az bir eşleşme varsa korunur
// (resmî kanal şartı yok — Star Wars, Friends gibi doğru ama "Topic" olmayanlar kalsın).
function currentOk(h) {
  return !h.bad && (h.movieHits >= 1 || h.trackHits >= 1);
}

// Yeni aday: yalnızca resmî müzik kanalı ve içerik eşleşmesi birlikte olmalı
function candidateOk(meta, movieTokens, trackTokens) {
  const h = hits(meta, movieTokens, trackTokens);
  if (h.bad || !isOfficialChannel(meta.author)) return false;
  return h.movieHits >= 1 || h.trackHits >= 1;
}

(async () => {
  const ost = require(OST_FILE);
  const src = fs.readFileSync(path.join(ROOT, 'js', 'movies-data.js'), 'utf8');
  const block = src.match(/const MOVIES_DATA = (\[[\s\S]*?\n\];)/);
  const movies = eval(block[1].replace(/;$/, ''));
  const byId = new Map(movies.map((m) => [m.id, m]));

  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); } catch (e) { cache = {}; }

  // Yalnızca gerçek katalog kimlikleri (module.exports'un eklediği özellik hariç)
  const ids = Object.keys(ost).filter((id) => byId.has(id));
  const changes = [];
  const unresolved = [];
  let index = 0;

  for (const id of ids) {
    index++;
    const entry = ost[id];
    const movie = byId.get(id) || {};
    const movieTitle = movie.originalTitle || movie.title || id;
    const movieTokens = tokens(movieTitle);
    const trackTokens = tokens(entry.track);

    process.stdout.write(`\r  ${index}/${ids.length}  ${id.padEnd(22)}`);

    const cached = cache[id];
    if (cached && cached.v === 4 && !FORCE && cached.checkedAt > Date.now() - 30 * 24 * 3600 * 1000) {
      if (cached.youtubeId && cached.youtubeId !== entry.youtubeId) {
        changes.push({ id, from: entry.youtubeId, to: cached.youtubeId, why: cached.title || '' });
        entry.youtubeId = cached.youtubeId;
      }
      continue;
    }

    // 1) Mevcut kimlik doğru mu?
    const current = await oembed(entry.youtubeId);
    const currentHits = current ? hits(current, movieTokens, trackTokens) : { movieHits: 0, trackHits: 0, bad: true };
    if (current && currentOk(currentHits)) {
      cache[id] = { v: 4, youtubeId: entry.youtubeId, title: current.title, checkedAt: Date.now() };
      await sleep(300);
      continue;
    }

    // 2) Yeniden ara (resmî kanal bulunana kadar)
    const query = `${movieTitle} ${entry.track}`.replace(/\s*\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
    const candidates = await searchIds(query, 6);

    // Mevcut video bu kesin sorgunun ilk sonuçlarındansa doğru kabul et:
    // "Main Title", "Jenerik" gibi genel parça adlarında metin eşleşmesi yetmiyor.
    if (current && !currentHits.bad && candidates.slice(0, 3).includes(entry.youtubeId)) {
      cache[id] = { v: 4, youtubeId: entry.youtubeId, title: current.title, checkedAt: Date.now() };
      await sleep(400);
      continue;
    }

    let best = null;

    for (const vid of candidates) {
      if (vid === entry.youtubeId) continue;
      const meta = await oembed(vid);
      await sleep(250);
      if (!meta) continue;
      if (candidateOk(meta, movieTokens, trackTokens)) { best = { vid, meta }; break; }
    }

    if (best) {
      changes.push({ id, from: entry.youtubeId, to: best.vid, why: best.meta.title });
      entry.youtubeId = best.vid;
      cache[id] = { v: 4, youtubeId: best.vid, title: best.meta.title, checkedAt: Date.now() };
    } else {
      // 3) Doğrulanmış video bulunamadı: yanlış link vermektense bağlantıyı kaldır
      //    (arayüz otomatik olarak YouTube arama bağlantısı gösterir).
      unresolved.push({ id, current: current ? current.title : '(video yok)', track: entry.track });
      if (entry.youtubeId) changes.push({ id, from: entry.youtubeId, to: '(kaldırıldı)', why: 'doğrulanmış kaynak yok' });
      entry.youtubeId = null;
      cache[id] = { v: 4, youtubeId: null, title: current ? current.title : '', checkedAt: Date.now() };
    }

    await sleep(1800);
    if (index % 10 === 0) fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 1));
  }

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 1));

  // movie-soundtracks.js dosyasını yeniden yaz (aynı biçim)
  const header = `/**\n * CINE3D NETFLIX - Doğrulanmış Orijinal Dizi & Film Müzikleri Veritabanı (OST)\n * ${ids.length} Yapımın Tamamı İçin Gerçek Besteci, Eser Adı ve Doğrulanmış YouTube Parça Kimlikleri\n *\n * NOT: youtubeId değerleri scripts/fix-ost.js ile oEmbed üzerinden doğrulanmıştır.\n */\n\nconst MOVIE_SOUNDTRACKS = {\n`;
  const body = ids.map((id) => {
    const e = ost[id];
    return `  ${JSON.stringify(id)}: {\n    "track": ${JSON.stringify(e.track)},\n    "composer": ${JSON.stringify(e.composer)},\n    "youtubeId": ${JSON.stringify(e.youtubeId)},\n    "description": ${JSON.stringify(e.description || '')}\n  }`;
  }).join(',\n');
  const footer = `\n};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = MOVIE_SOUNDTRACKS;\n  module.exports.MOVIE_SOUNDTRACKS = MOVIE_SOUNDTRACKS;\n}\n`;

  fs.writeFileSync(OST_FILE, header + body + footer);

  console.log('\n\n=== DÜZELTİLENLER ===');
  for (const c of changes) {
    console.log(`${c.id.padEnd(24)} ${c.from} -> ${c.to}\n  ${c.why}`);
  }
  console.log(`\nToplam düzeltme: ${changes.length}`);
  if (unresolved.length) {
    console.log('\n=== DOĞRULANAMAYAN (mevcut kaldı) ===');
    for (const u of unresolved) console.log(`${u.id.padEnd(24)} ${u.track}  |  ${u.current}`);
  }
})();