#!/usr/bin/env node
/** Doğrulanamayan OST YouTube bağlantılarını kaldırır (arayüz arama bağlantısı gösterir). */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OST_FILE = path.join(ROOT, 'js', 'movie-soundtracks.js');
const DROP = process.argv.slice(2);

const ost = require(OST_FILE);
const src = fs.readFileSync(path.join(ROOT, 'js', 'movies-data.js'), 'utf8');
const movies = eval(src.match(/const MOVIES_DATA = (\[[\s\S]*?\n\];)/)[1].replace(/;$/, ''));
const ids = Object.keys(ost).filter((k) => movies.some((m) => m.id === k));

for (const id of DROP) {
  if (ost[id]) ost[id].youtubeId = null;
}

const header = fs.readFileSync(OST_FILE, 'utf8').slice(0, fs.readFileSync(OST_FILE, 'utf8').indexOf('const MOVIE_SOUNDTRACKS = {'));
const body = ids.map((id) => {
  const e = ost[id];
  return `  ${JSON.stringify(id)}: {\n    "track": ${JSON.stringify(e.track)},\n    "composer": ${JSON.stringify(e.composer)},\n    "youtubeId": ${JSON.stringify(e.youtubeId)},\n    "description": ${JSON.stringify(e.description || '')}\n  }`;
}).join(',\n');
const footer = `\n};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = MOVIE_SOUNDTRACKS;\n  module.exports.MOVIE_SOUNDTRACKS = MOVIE_SOUNDTRACKS;\n}\n`;

fs.writeFileSync(OST_FILE, header + 'const MOVIE_SOUNDTRACKS = {\n' + body + footer);
console.log(`Kaldırılan: ${DROP.join(', ')}`);
console.log(`Toplam kayıt: ${ids.length} | bağlantısız: ${ids.filter((i) => !ost[i].youtubeId).length}`);