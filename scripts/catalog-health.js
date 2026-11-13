'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

function loadMovies() {
  return new Function(fs.readFileSync(path.join(ROOT, 'js/movies-data.js'), 'utf8') + '\nreturn MOVIES_DATA;')();
}

function catalogHealth(movies, catalog) {
  const window = {};
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'js/catalog-index.js'), 'utf8'), { window });
  const index = window.cine3dCatalog;
  index.items = catalog.items || [];
  index.generatedAt = catalog.generatedAt;
  const matched = movies.map(movie => ({ movie, item: index.findMovie(movie) }));
  const unresolved = matched.filter(pair => !pair.item);
  return {
    generatedAt: catalog.generatedAt,
    mainCatalog: {
      total: movies.length,
      rawEmptyPlatforms: movies.filter(m => Array.isArray(m.platforms) && !m.platforms.length).length,
      matchedProviders: matched.length - unresolved.length,
      withProviders: matched.filter(pair => pair.item && pair.item.platforms.length).length,
      confirmedNoSubscription: matched.filter(pair => pair.item && !pair.item.platforms.length).length,
      unresolved: unresolved.map(({ movie }) => ({ id: movie.id, title: movie.title, imdbID: movie.imdbID || null }))
    },
    index: {
      total: index.items.length,
      lowResolutionPosters: index.items.filter(item => /\/s(150|200|240|300|332)\//.test(item.poster || '')).length,
      missingAge: index.items.filter(item => !item.ageRating).length,
      nonTurkishAge: index.items.filter(item => item.ageRatingCountry && item.ageRatingCountry !== 'TR').length,
      missingTrailer: index.items.filter(item => !item.yt).length,
      verifiedTrailers: index.items.filter(item => item.yt && item.trailerVerification?.checkedAt).length
    }
  };
}

function writeHealth(catalog) {
  const health = catalogHealth(loadMovies(), catalog);
  fs.writeFileSync(path.join(ROOT, 'data/catalog-health.json'), JSON.stringify(health, null, 2) + '\n');
  return health;
}

if (require.main === module) {
  const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
  console.log(JSON.stringify(writeHealth(catalog), null, 2));
}
module.exports = { loadMovies, catalogHealth, writeHealth };
