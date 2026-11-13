#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const { graphql, SEARCH_QUERY, toItem } = require('./build-catalog');
const { normalize, getText } = require('./catalog-metadata');
const { writeHealth } = require('./catalog-health');
const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'js/movies-data.js');
const CACHE = path.join(__dirname, '.identity-matches.json');

function selectImdbIdentity(results, movie, item) {
  const pool = (results || []).filter(entry => /^tt\d+$/.test(entry.id || '') &&
    (movie.isSeries ? ['tvSeries', 'tvMiniSeries'].includes(entry.qid) : ['movie', 'tvMovie'].includes(entry.qid)) &&
    Math.abs(Number(entry.y) - Number(movie.year)) <= 1);
  const names = [movie.originalTitle, movie.title, item.o, item.t, item.e].map(normalize).filter(Boolean);
  const exact = pool.filter(entry => names.includes(normalize(entry.l)));
  if (exact.length === 1) return exact[0];
  const identified = pool.filter(entry => entry.id === item.imdbID || entry.id === movie.imdbID);
  return identified.length === 1 ? identified[0] : null;
}

function selectIdentity(items, movie) {
  const pool = items.filter(item => item.imdbID && (item.type === 'series') === !!movie.isSeries && Math.abs(item.y - Number(movie.year)) <= 1);
  const exact = pool.filter(item => [item.o, item.t, item.e].some(name => name && [movie.originalTitle, movie.title].some(title => title && normalize(title) === normalize(name))));
  const hits = exact.length ? exact : pool.filter(item => item.imdbID === movie.imdbID);
  const unique = [...new Map(hits.map(item => [item.imdbID, item])).values()];
  return unique.length === 1 ? unique[0] : null;
}

async function auditIdentities() {
  if (process.argv.includes('--apply-index')) {
    const matches = JSON.parse(fs.readFileSync(CACHE, 'utf8'));
    const file = path.join(ROOT, 'data/catalog.json');
    const catalog = JSON.parse(fs.readFileSync(file, 'utf8'));
    const movies = new Function(fs.readFileSync(SOURCE, 'utf8') + '\nreturn MOVIES_DATA;')();
    for (const { movieId, item, checkedAt } of matches) {
      const movie = movies.find(m => m.id === movieId);
      if (!movie || movie.imdbID !== item.imdbID) continue;
      const existing = catalog.items.find(entry => entry.imdbID === item.imdbID || (item.jwId && entry.jwId === item.jwId));
      if (existing) Object.assign(existing, item, { id: existing.id, providerCheckedAt: checkedAt });
      else catalog.items.push({ ...item, providerCheckedAt: checkedAt, yt: movie.trailerYoutubeId || null });
    }
    catalog.count = catalog.items.length;
    fs.writeFileSync(file + '.tmp', JSON.stringify(catalog));
    fs.renameSync(file + '.tmp', file);
    console.log(JSON.stringify(writeHealth(catalog), null, 2));
    return;
  }

  const original = fs.readFileSync(SOURCE, 'utf8');
  const movies = new Function(original + '\nreturn MOVIES_DATA;')();
  const matches = [];
  const changes = [];
  const unresolved = [];
  let overrides = {};
  try { overrides = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/identity-overrides.json'), 'utf8')); } catch (e) { /* ilk denetim */ }
  let cursor = 0;
  let done = 0;
  async function worker() {
    while (cursor < movies.length) {
      const movie = movies[cursor++];
      let item = null;
      for (const title of [...new Set([movie.originalTitle, movie.title].filter(Boolean))]) {
        const result = await graphql(SEARCH_QUERY, 'Search', { country: 'TR', language: 'tr', first: 20,
          filter: { searchQuery: title, objectTypes: [movie.isSeries ? 'SHOW' : 'MOVIE'] } });
        const entries = (result?.data?.popularTitles?.edges || []).map(edge => toItem(edge.node)).filter(Boolean);
        item = selectIdentity(entries, movie);
        if (item) break;
      }
      let confirmed = null;
      if (item) {
        const response = await getText('https://v3.sg.media-imdb.com/suggestion/x/' + encodeURIComponent(movie.originalTitle.toLowerCase()) + '.json');
        if (response.status === 200) {
          try { confirmed = selectImdbIdentity(JSON.parse(response.body).d, movie, item); } catch (e) { /* doğrulama yok */ }
        }
      }
      if (!item || !confirmed) unresolved.push({ id: movie.id, title: movie.title });
      else {
        const checkedAt = new Date().toISOString();
        const vendorImdbID = item.imdbID;
        item.imdbID = confirmed.id;
        item.y = confirmed.y;
        overrides[item.jwId] = { imdbID: confirmed.id, year: confirmed.y, title: confirmed.l,
          type: movie.isSeries ? 'series' : 'movie', source: 'IMDb suggestion + JustWatch title/year', checkedAt,
          ...(vendorImdbID !== confirmed.id ? { vendorImdbID } : {}) };
        matches.push({ movieId: movie.id, item, checkedAt });
        if (movie.imdbID !== item.imdbID || movie.year !== item.y) changes.push({ id: movie.id, title: movie.title,
          previousImdbID: movie.imdbID, imdbID: item.imdbID, previousYear: movie.year, year: item.y, source: item.jwId });
        movie.imdbID = item.imdbID;
        movie.year = item.y;
        movie.platforms = item.platforms;
        if (item.ageRating) {
          movie.ageRating = item.ageRating;
          movie.ageRatingCountry = item.ageRatingCountry;
          movie.ageRatingSource = item.ageRatingSource;
        }
      }
      done++;
      if (done % 25 === 0) console.log(`${done}/${movies.length} kimlik denetlendi · ${changes.length} düzeltme`);
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  const ids = movies.map(movie => movie.imdbID);
  if (new Set(ids).size !== ids.length) throw new Error('Doğrulanan kimlikler çakışıyor; kaynak dosya değiştirilmedi.');
  if (fs.readFileSync(SOURCE, 'utf8') !== original) throw new Error('Kaynak tarama sırasında değişti; değişiklikler korunarak işlem durduruldu.');
  const updated = original.replace(/const MOVIES_DATA = \[[\s\S]*?\n\];/, 'const MOVIES_DATA = ' + JSON.stringify(movies, null, 1) + ';');
  fs.writeFileSync(SOURCE, updated);
  fs.writeFileSync(CACHE, JSON.stringify(matches));
  fs.writeFileSync(path.join(ROOT, 'data/identity-overrides.json'), JSON.stringify(overrides, null, 2) + '\n');
  fs.writeFileSync(path.join(ROOT, 'data/identity-audit.json'), JSON.stringify({ checkedAt: new Date().toISOString(), verified: matches.length, total: movies.length, changes, unresolved }, null, 2) + '\n');
  console.log(JSON.stringify({ verified: matches.length, corrected: changes.length, unresolved }, null, 2));
}
if (require.main === module) auditIdentities().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { selectIdentity, selectImdbIdentity };
