#!/usr/bin/env node
/** Denetimde bulunan hatalar için ağsız, bağımlılıksız regresyon testleri. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const metadata = require('../scripts/catalog-metadata');
const { toItem } = require('../scripts/build-catalog');
const { selectIdentity, selectImdbIdentity } = require('../scripts/audit-identities');
const { catalogHealth } = require('../scripts/catalog-health');
const ROOT = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const context = vm.createContext({
  URL, URLSearchParams, console,
  document: { addEventListener() {} },
  localStorage: { getItem() { return null; } },
  window: { location: { search: '' } }
});
for (const file of ['js/movies-data.js', 'js/catalog-index.js', 'js/api-service.js', 'js/app.js']) {
  vm.runInContext(read(file), context, { filename: file });
}
vm.runInContext('this.App = Cine3DApp; this.streaming = getMovieStreamingInfo;', context);
const app = Object.create(context.App.prototype);
app.getActiveAgeLimit = () => 13;
let passed = 0;
function test(name, fn) { fn(); passed++; console.log('PASS  ' + name); }

test('yetişkin ve bilinmeyen sınıflar çocuk profilinde engellenir', () => {
  for (const rating of ['TV-MA', 'R', 'NC-17', '18+', 'N/A', 'NR', 'UNRATED', '', null, 'belirsiz', '99+']) {
    assert.equal(app.isAgeAllowed({ ageRating: rating }), false, String(rating));
  }
  for (const rating of ['Genel', 'G', 'U', '12A', 'TV-Y', 'TV-Y7', 'PG', 'PG-13', '13+', '7+']) {
    assert.equal(app.isAgeAllowed({ ageRating: rating }), true, rating);
  }
  assert.equal(app.parseAgeRating('TV-MA'), 18);
  assert.equal(app.parseAgeRating('R'), 18);
  assert.equal(app.parseAgeRating('N/A'), null);
});
test('yetişkin profilinde bilinmeyen yaş da görüntülenebilir', () => {
  app.getActiveAgeLimit = () => 0;
  assert.equal(app.isAgeAllowed({ ageRating: 'N/A' }), true);
  app.getActiveAgeLimit = () => 13;
});
const index = context.window.cine3dCatalog;
test('indeks ve OMDb eksik yaşa uydurma sınıflandırma atamaz', () => {
  assert.equal(app.isAgeAllowed(index.toMovie({ id: 'unknown', t: 'Test' })), false);
  const m = context.window.cinemaApiService.normalizeMovieData({ imdbID: 'tt1234567', Title: 'Test', Rated: 'N/A' });
  assert.equal(app.isAgeAllowed(m), false);
  assert.equal(index.toMovie({ id: 'known', t: 'Test', ageRating: '18+' }).ageRating, '18+');
});
index.generatedAt = '2026-11-13T00:00:00.000Z';
index.items = [{ id: 'dune', t: 'Dune', o: 'Dune', y: 2021, type: 'movie', platforms: ['netflix'], providers: [{ id: 'netflix', url: 'https://www.netflix.com/title/123' }] }];
test('yayıncı eşleştirmesi yeniden çevrimleri ve dizileri karıştırmaz', () => {
  assert.ok(index.findMovie({ title: 'Dune', year: 2021, isSeries: false }));
  assert.equal(index.findMovie({ title: 'Dune', year: 1984, isSeries: false }), null);
  assert.equal(index.findMovie({ title: 'Dune', year: 2021, isSeries: true }), null);
  index.items.push({ ...index.items[0] });
  assert.equal(index.findMovie({ title: 'Dune', year: 2021 }), null);
  index.items.pop();
});
test('IMDb eşleşmesi yerelleştirilmiş ad/yıl farkını güvenle çözer; çelişen kimlik reddedilir', () => {
  index.items[0].imdbID = 'tt1160419';
  assert.ok(index.findMovie({ title: 'Dune farklı çeviri', year: 2022, imdbID: 'tt1160419' }));
  assert.equal(index.findMovie({ title: 'Dune', year: 2021, imdbID: 'tt0087182' }), null);
  delete index.items[0].imdbID;
});
test('doğrulanmış indeks tarihi ve doğrudan yapım bağlantısı aktarılır', () => {
  const m = { title: 'Dune', year: 2021 };
  assert.equal(index.applyProviders(m), true);
  const info = context.streaming(m);
  assert.equal(info.verified, true);
  assert.equal(info.checkedAt, index.generatedAt);
  assert.equal(info.providers[0].url, 'https://www.netflix.com/title/123');
  assert.equal(info.providers[0].actionLabel, 'Yapımı aç');
});
test('daha yeni canlı yayıncı verisi eski indeks tarafından ezilmez', () => {
  const m = { title: 'Dune', year: 2021, streamingInfo: { checkedAt: '2026-11-14T00:00:00Z', providers: [{ id: 'prime' }] } };
  assert.equal(index.applyProviders(m), false);
  assert.equal(m.streamingInfo.providers[0].id, 'prime');
});
test('bilgi eksikliği ile doğrulanmış boş yayıncı listesi ayrılır', () => {
  assert.equal(context.streaming({ platforms: [] }).statusText, 'Yayıncı bilgisi doğrulanmadı');
  const info = context.streaming({ streamingInfo: { providers: [], verified: true, checkedAt: index.generatedAt } });
  assert.equal(info.statusText, 'TR yayıncısı bulunamadı');
  assert.equal(info.verified, true);
});
test('ana sayfa/arama bağlantısı izle diye sunulmaz ve tehlikeli URL engellenir', () => {
  for (const url of ['https://tvplus.com.tr/', 'https://www.netflix.com/search?q=Test', 'javascript:alert(1)']) {
    const info = context.streaming({ title: 'Test', streamingInfo: { providers: [{ id: 'tvplus', url }] } });
    assert.equal(info.providers[0].actionLabel, 'Yayını ara');
    assert.match(info.providers[0].url, /^https:\/\//);
    assert.notEqual(info.providers[0].url, 'https://tvplus.com.tr/');
  }
});
test('ilk ziyaret önbelleği tüm yerel HTML bağımlılıklarını içerir', () => {
  const sw = read('sw.js');
  const precache = new Function('return ' + sw.match(/const PRECACHE_PATHS = (\[[\s\S]*?\]);/)[1])();
  const html = read('index.html');
  const assets = [...html.matchAll(/(?:src|href)="((?:js|css)\/[^"?]+)(?:\?[^" ]*)?"/g)].map(m => m[1]);
  for (const asset of [...assets, 'data/catalog.json', 'js/vendor/three.min.js']) {
    assert.ok(precache.includes(asset), asset + ' önbellekte yok');
    assert.ok(fs.existsSync(path.join(ROOT, asset)), asset + ' diskte yok');
  }
});
test('katalogdaki gerçek yaşlar ve doğrudan bağlantılar şemaya uygun', () => {
  const catalog = JSON.parse(read('data/catalog.json'));
  assert.equal(catalog.country, 'TR');
  assert.ok(Number.isFinite(Date.parse(catalog.generatedAt)));
  assert.ok(catalog.items.some(item => item.ageRating));
  assert.ok(catalog.items.some(item => item.providers?.some(p => /^https:\/\//.test(p.url || ''))));
  for (const item of catalog.items) {
    assert.ok(item.ageRating === null || typeof item.ageRating === 'string');
    assert.ok(Array.isArray(item.providers));
    assert.equal(/\/s(150|200|240|300|332)\//.test(item.poster), false, item.id);
    if (item.ageRating) assert.ok(item.ageRatingCountry && item.ageRatingSource, item.id);
  }
});
test('üretici bağıl/mutlak afişi en az 592px yapar, daha yüksek çözünürlüğü düşürmez', () => {
  assert.match(metadata.posterUrl('/poster/123/{profile}/test.{format}'), /\/s592\/test\.jpg$/);
  assert.match(metadata.posterUrl('https://images.justwatch.com/poster/123/s332/test.jpg'), /\/s592\//);
  assert.match(metadata.posterUrl('https://images.justwatch.com/poster/123/s1440/test.jpg'), /\/s1440\//);
  assert.equal(metadata.posterUrl('http://images.justwatch.com/poster/123/s332/test.jpg'), null);
  const item = toItem({ id: 'tmTest', objectType: 'MOVIE', content: { title: 'Test', posterUrl: '/poster/1/{profile}/test.{format}', scoring: { imdbScore: 8 }, originalReleaseYear: 2020 }, offers: [] });
  assert.match(item.poster, /\/s592\//);
});
test('yabancı yaş sınıfı kaynağı etiketlenir; NR güvenli genel izleyiciye dönüştürülmez', () => {
  assert.deepEqual(metadata.certification({ content: { ageCertification: '' }, contentUs: { ageCertification: 'TV-MA' } }), { ageRating: 'TV-MA', ageRatingCountry: 'US', ageRatingSource: 'JustWatch' });
  assert.equal(metadata.certification({ content: { ageCertification: '' }, contentUs: { ageCertification: 'NR' } }).ageRating, null);
  assert.equal(metadata.certification({ content: { ageCertification: '13+' }, contentUs: { ageCertification: 'R' } }).ageRatingCountry, 'TR');
});
test('fragman doğrulaması yanlış yıl, fan yapımı, ilgisiz film ve kanalı reddeder', () => {
  const item = { o: 'Dune', t: 'Dune', y: 2021 };
  assert.equal(metadata.trailerMatches({ title: 'Dune Official Trailer (2021)', author_name: 'Warner Bros. Pictures' }, item), true);
  for (const meta of [{ title: 'Dune Official Trailer (1984)', author_name: 'Warner Bros. Pictures' },
    { title: 'Dune Fan Made Trailer (2021)', author_name: 'Warner Bros. Pictures' },
    { title: 'Other Movie Trailer (2021)', author_name: 'Warner Bros. Pictures' },
    { title: 'Dune Official Trailer (2021)', author_name: 'Unknown channel' }]) assert.equal(metadata.trailerMatches(meta, item), false);
});
test('IMDb denetimi kısa film/making-of sonucunu asıl film yerine seçmez', () => {
  const movie = { originalTitle: 'WALL-E', title: 'VOL-İ', year: 2008, imdbID: 'tt0910970' };
  const vendor = { o: 'WALL-E', t: 'VOL-İ', y: 2008, imdbID: 'tt14055868' };
  const result = selectImdbIdentity([{ id: 'tt14055868', l: 'WALL-E: Treasures and Trinkets', y: 2008, qid: 'video' }, { id: 'tt0910970', l: 'WALL·E', y: 2008, qid: 'movie' }], movie, vendor);
  assert.equal(result.id, 'tt0910970');
  assert.equal(selectIdentity([{ ...vendor, type: 'series' }], movie), null);
});
test('kısa film künyesi asıl filme karışmaz', () => {
  const movies = new Function(read('js/movies-data.js') + '\nreturn MOVIES_DATA;')();
  const taken = movies.find(movie => movie.id === 'taken');
  assert.ok(taken, 'taken kaydı var');
  assert.equal(taken.imdbID, 'tt0936501');
  assert.equal(taken.year, 2008);
  assert.ok(!taken.genres.includes('Short'), 'kısa film türü sızmamalı');
  assert.equal(taken.duration, '1s 34dk');
  assert.equal(taken.director, 'Pierre Morel');
  assert.ok(taken.cast.includes('Liam Neeson'));
  assert.ok(taken.imdbRating >= 7 && taken.imdbRating <= 8.5);
  const indexItem = JSON.parse(read('data/catalog.json')).items.find(item => item.imdbID === taken.imdbID);
  assert.ok(indexItem, 'asıl film indekste bulunmalı');
  assert.equal(indexItem.type, 'movie');
  assert.ok(Math.abs(indexItem.runtime - 94) <= 5, 'indeks süresi asıl filmle uyumlu');
});
test('veri raporu ham boş platform ile çözülemeyen yayıncıyı ayırır ve günceldir', () => {
  const catalog = JSON.parse(read('data/catalog.json'));
  const movies = new Function(read('js/movies-data.js') + '\nreturn MOVIES_DATA;')();
  const report = catalogHealth(movies, catalog);
  assert.ok(report.mainCatalog.rawEmptyPlatforms > 0);
  assert.equal(report.mainCatalog.matchedProviders, movies.length);
  assert.equal(report.mainCatalog.unresolved.length, 0);
  assert.equal(report.index.lowResolutionPosters, 0);
  assert.deepEqual(JSON.parse(read('data/catalog-health.json')), report);
  assert.equal(movies.find(movie => movie.id === 'wall-e').imdbID, 'tt0910970');
  assert.equal(movies.find(movie => movie.id === 'seven').imdbID, 'tt0114369');
});
test('statik beyaz liste kaynak/test dosyalarını servis etmez, SEO dosyalarını eder', () => {
  const { isPublicAsset } = require('../server');
  assert.equal(isPublicAsset('index.html', '.html'), true);
  assert.equal(isPublicAsset('robots.txt', '.txt'), true);
  assert.equal(isPublicAsset('sitemap.xml', '.xml'), true);
  assert.equal(isPublicAsset('js/app.js', '.js'), true);
  assert.equal(isPublicAsset('js/vendor/three.min.js', '.js'), true);
  assert.equal(isPublicAsset('data/catalog.json', '.json'), true);
  assert.equal(isPublicAsset('audio/ost/inception.mp3', '.mp3'), true);
  assert.equal(isPublicAsset('tests/features.js', '.js'), false);
  assert.equal(isPublicAsset('scripts/build-catalog.js', '.js'), false);
  assert.equal(isPublicAsset('server.js', '.js'), false);
  assert.equal(isPublicAsset('.env', ''), false);
  assert.equal(isPublicAsset('data/notes.txt', '.txt'), false);
  assert.equal(isPublicAsset('data/.cache.json', '.json'), false);
  assert.equal(isPublicAsset('zcode-kopru/RAPOR/R001.md', '.md'), false);
});
test('API yalnız izinli origin ve hız sınırı ile açılır', () => {
  const { originAllowed, rateLimited, isRateLimitedPath } = require('../server');
  assert.equal(originAllowed({ headers: {} }), true);
  assert.equal(originAllowed({ headers: { origin: 'https://evil.example' } }), false);
  assert.equal(originAllowed({ headers: { origin: 'https://agarzmilano-png.github.io' } }), true);
  assert.equal(originAllowed({ headers: { origin: 'http://localhost:3300' } }), true);
  assert.equal(originAllowed({ headers: { origin: 'http://127.0.0.1:8123' } }), true);
  // Akış ucu Range istekleriyle çalışır; JSON API kotasına dahil edilmez.
  assert.equal(isRateLimitedPath('/api/search'), true);
  assert.equal(isRateLimitedPath('/api/details'), true);
  assert.equal(isRateLimitedPath('/api/trailer'), true);
  assert.equal(isRateLimitedPath('/api/stream-ost'), false);
  assert.equal(isRateLimitedPath('/api/health'), false);
  assert.equal(isRateLimitedPath('/js/app.js'), false);
  const socket = { remoteAddress: '10.0.0.99' };
  for (let i = 0; i < 60; i++) assert.equal(rateLimited({ socket }), false);
  assert.equal(rateLimited({ socket }), true);
});
test('afiş üretici tüm Amazon varyantlarını 592px\'e yükseltir', () => {
  const instance = Object.create(context.App.prototype);
  const base = 'https://m.media-amazon.com/images/M/X@._V1_QL75_UX380_CR0,0,380,562_.jpg';
  assert.match(instance.posterSrcset(base), /_UX592_CR0,0,592,876_\.jpg 592w$/);
  const crop = 'https://m.media-amazon.com/images/M/X@._V1_QL75_UX380_CR0,4,380,562_.jpg';
  assert.match(instance.posterSrcset(crop), /_UX592_CR0,6,592,876_\.jpg 592w$/);
  const heightBased = 'https://m.media-amazon.com/images/M/X@._V1_QL75_UY562_CR1,0,380,562_.jpg';
  assert.match(instance.posterSrcset(heightBased), /_UY876_CR2,0,592,876_\.jpg 592w$/);
  const small = 'https://m.media-amazon.com/images/M/X@._V1_SX300.jpg';
  assert.match(instance.posterSrcset(small), /_SX592\.jpg 592w$/);
  const alreadyLarge = 'https://m.media-amazon.com/images/M/X@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg';
  assert.equal(instance.posterSrcset(alreadyLarge), '');
  assert.equal(instance.posterSrcset('https://example.com/poster.jpg'), '');
  assert.equal(instance.posterSrcset(''), '');
});
test('tüm alt çözünürlüklü katalog afişleri 2x kaynak üretebiliyor', () => {
  const instance = Object.create(context.App.prototype);
  const movies = vm.runInContext('MOVIES_DATA', context);
  const widthOf = (url) => {
    const ux = String(url).match(/_UX(\d+)_/);
    if (ux) return Number(ux[1]);
    const sx = String(url).match(/_SX(\d+)(?=[._])/);
    if (sx) return Number(sx[1]);
    return /_UY\d+_/.test(String(url)) ? 380 : null;
  };
  const missing = movies.filter(movie => {
    const width = widthOf(movie.posterUrl);
    return width && width < 592 && !instance.posterSrcset(movie.posterUrl);
  });
  assert.equal(missing.length, 0, 'yükseltilemeyen afiş: ' + missing.map(movie => movie.id).join(', '));
});
test('süre uyuşmazlığı denetimi kısa film karışmasını yakalar', () => {
  const { durationMinutes } = require('../scripts/audit-identities');
  assert.equal(durationMinutes('1s 34dk'), 94);
  assert.equal(durationMinutes('2s 10dk'), 130);
  assert.equal(durationMinutes('0s 5dk'), 5);
  assert.equal(durationMinutes('3 Sezon'), null);
  assert.equal(durationMinutes(''), null);
});
test('künyede boş (N/A) değerler gizleniyor', () => {
  const metaValue = vm.runInContext('metaValue', context);
  for (const value of ['N/A', 'n/a', 'Belirtilmemiş', 'bilinmiyor', '', null, undefined, '-']) {
    assert.equal(metaValue(value), '');
  }
  assert.equal(metaValue('Pierre Morel'), 'Pierre Morel');
  assert.equal(metaValue('Mark Gatiss, Steven Moffat'), 'Mark Gatiss, Steven Moffat');
});
test('devralınmış fragman sınıflandırması canlı/ölü/yanlış ayrımı yapar', () => {
  const { classifyOembed } = require('../scripts/verify-trailers');
  const item = { o: 'Dune', t: 'Dune', y: 2021, type: 'movie' };
  assert.equal(classifyOembed(200, { title: 'Dune Official Trailer (2021)', author_name: 'Warner Bros. Pictures' }, item).match, 'strong');
  assert.equal(classifyOembed(200, { title: 'Dune Fragman', author_name: 'Bilinmeyen Kanal' }, item).match, 'weak');
  assert.equal(classifyOembed(400, null, item).verdict, 'rejected');
  assert.equal(classifyOembed(404, null, item).verdict, 'rejected');
  assert.equal(classifyOembed(200, { title: 'Dune Official Trailer (1984)', author_name: 'Warner Bros. Pictures' }, item).verdict, 'rejected');
  assert.equal(classifyOembed(200, { title: 'Dune full movie', author_name: 'Warner Bros. Pictures' }, item).verdict, 'rejected');
  assert.equal(classifyOembed(0, null, item).verdict, 'skipped');
  assert.equal(classifyOembed(503, null, item).verdict, 'skipped');
});
test('yaş sınıfı sıralaması gevşetmeyi engeller', () => {
  const { ageRank } = require('../scripts/catalog-metadata');
  assert.equal(ageRank('R'), 18);
  assert.equal(ageRank('TV-MA'), 18);
  assert.equal(ageRank('15'), 15);
  assert.equal(ageRank('PG-13'), 13);
  assert.equal(ageRank('12A'), 13);
  assert.equal(ageRank('PG'), 7);
  assert.equal(ageRank('G'), 0);
  assert.equal(ageRank('N/A'), null);
  assert.equal(ageRank(''), null);
  assert.ok(ageRank('R') > ageRank('15'));
  assert.ok(ageRank('15') > ageRank('PG-13'));
});

test('OMDb kimlik doğrulaması yerelleştirilmiş başlıkta yıl+tür ister', () => {
  const { omdbIdentityMatches } = require('../scripts/audit-identities');
  const parasite = { title: 'Parazit', originalTitle: '기생충', year: 2019, duration: '2s 12dk', imdbID: 'tt6751668' };
  assert.equal(omdbIdentityMatches({ Title: 'Parasite', Year: '2019', Type: 'movie', imdbID: 'tt6751668' }, parasite), true);
  assert.equal(omdbIdentityMatches({ Title: 'Parasite', Year: '2017', Type: 'movie', imdbID: 'tt6751668' }, parasite), false);
  assert.equal(omdbIdentityMatches({ Title: 'Parasite', Year: '2019', Type: 'series', imdbID: 'tt6751668' }, parasite), false);
  const series = { title: 'Sherlock', originalTitle: 'Sherlock', year: 2010, duration: '4 Sezon', imdbID: 'tt1475582' };
  assert.equal(omdbIdentityMatches({ Title: 'Sherlock', Year: '2010–2017', Type: 'series', imdbID: 'tt1475582' }, series), true);
});
console.log(`
${passed}/${passed} regresyon testi geçti`);
