#!/usr/bin/env node
/**
 * Cine3D - Özellik testleri (bağımlılıksız, CDP)
 *
 * R013-R029 arasında eklenen özellikleri uçtan uca doğrular:
 * günlük görevler/seri, haftalık hedefler+sıralama, "Bugün Ne İzlesem?",
 * benzer filmler, yorum duvarı (yanıt/tepki), duo + ortak liste, tahmin ligi,
 * gece/hafta planı + ICS, rulet, CSV/karne/Wrapped, yoğunluk, geri al,
 * klavye kısayolları + odak tuzağı + inert, çocuk profili/PIN ve mobil taşma.
 *
 * Kullanım:
 *   node tests/features.js
 *   CHROME_PATH="/usr/bin/google-chrome" node tests/features.js
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

const ROOT = path.join(__dirname, '..');
const PORT = Number(process.env.FEATURES_PORT || 8124);
const DEBUG_PORT = Number(process.env.FEATURES_CDP_PORT || 9412);
const BASE = `http://127.0.0.1:${PORT}/`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.ico': 'image/x-icon'
};

function startServer() {
  const server = http.createServer((req, res) => {
    let pathname;
    try { pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname); }
    catch (e) { res.writeHead(400); return res.end('bad url'); }
    if (pathname === '/') pathname = '/index.html';
    const file = path.join(ROOT, pathname);
    if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
    fs.stat(file, (err, st) => {
      if (err || !st.isFile()) { res.writeHead(404); return res.end('not found'); }
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(file).pipe(res);
    });
  });
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ].filter(Boolean);
  for (const c of candidates) {
    try { if (fs.existsSync(c)) return c; } catch (e) { /* yoksay */ }
  }
  return null;
}

function getJson(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { resolve(null); } });
    }).on('error', () => resolve(null));
  });
}

const results = [];
function check(name, ok, detail = '') {
  results.push({ name, ok: !!ok, detail });
  const d = detail && typeof detail === 'object' ? JSON.stringify(detail) : String(detail || '');
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${d ? '  — ' + d.slice(0, 240) : ''}`);
}

(async () => {
  const server = await startServer();
  let chrome = null;
  let ws = null;
  try {
    const chromePath = findChrome();
    check('Chrome bulundu', !!chromePath, chromePath || 'CHROME_PATH verin');
    if (!chromePath) throw new Error('Chrome yok');

    const profile = path.join(os.tmpdir(), 'cine3d-features-' + Date.now());
    chrome = spawn(chromePath, [
      '--headless=new', `--remote-debugging-port=${DEBUG_PORT}`, `--user-data-dir=${profile}`,
      '--no-first-run', '--no-default-browser-check', '--disable-gpu',
      '--autoplay-policy=no-user-gesture-required', '--window-size=1440,900', 'about:blank'
    ], { stdio: 'ignore' });

    let target = null;
    for (let i = 0; i < 60 && !target; i++) {
      await sleep(400);
      const list = await getJson(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
      target = list && list.find((t) => t.type === 'page');
    }
    check('Chrome CDP bağlantısı', !!target);
    if (!target) throw new Error('CDP yok');

    ws = new WebSocket(target.webSocketDebuggerUrl);
    let msgId = 0;
    const pending = new Map();
    const consoleErrors = [];
    ws.onmessage = (e) => {
      const d = JSON.parse(e.data);
      if (d.method === 'Runtime.exceptionThrown') {
        consoleErrors.push('EXC: ' + ((d.params.exceptionDetails.exception || {}).description || d.params.exceptionDetails.text || '').split('\n')[0]);
      }
      if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') {
        consoleErrors.push('ERR: ' + d.params.args.map((a) => a.value || a.description || '').join(' ').slice(0, 140));
      }
      if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
    };
    const send = (method, params = {}) => new Promise((resolve) => {
      const id = ++msgId;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
    const ev = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: `(async () => { ${expr} })()`, awaitPromise: true, returnByValue: true, userGesture: true });
      if (r.result && r.result.exceptionDetails) return { __error: (r.result.exceptionDetails.exception || {}).description || r.result.exceptionDetails.text };
      return r.result && r.result.result ? r.result.result.value : undefined;
    };
    const nav = async (wait = 9000) => { await send('Page.navigate', { url: BASE }); await sleep(wait); };

    await new Promise((r) => (ws.onopen = r));
    await send('Runtime.enable');
    await send('Page.enable');
    // CI yavasligini yerelde taklit etmek icin: FEATURES_CPU_THROTTLE=4
    if (process.env.FEATURES_CPU_THROTTLE) {
      await send('Emulation.setCPUThrottlingRate', { rate: Number(process.env.FEATURES_CPU_THROTTLE) });
    }
    await nav();
    // Test boyunca hero otomatik döngüsünü durdur (12 sn'de bir DOM'u yeniliyor)
    await ev(`if (window.app && window.app._heroCycleTimer) clearInterval(window.app._heroCycleTimer); return true;`);

    // 1) Açılış + veri bütünlüğü
    const boot = await ev(`
      const ms = window.app.movies;
      const ids = new Set(ms.map(m => m.id));
      const badBackdrop = ms.filter(m => String(m.backdropUrl || '').includes('m.media-amazon.com') && !/(UX1280|SX1280|UX1500|SX1500)/.test(m.backdropUrl)).length;
      const badImdb = ms.filter(m => m.imdbID && !m.imdbID.startsWith('tt')).length;
      return {
        cards: document.querySelectorAll('#movies-grid .movie-card').length,
        movies: ms.length, unique: ids.size,
        noTrailer: ms.filter(m => !m.trailerYoutubeId).length,
        badImdb, badBackdrop
      };
    `);
    // ÖZ3: katalog 109 → 179 büyütüldü; alt sınır + tekil id + eksiksiz fragman kontrolü
    check('açılış: 36 kart / 150+ yapım, tekil id, eksiksiz fragman', !!boot && boot.cards === 36 && boot.movies >= 150 && boot.unique === boot.movies && boot.noTrailer === 0 && boot.badImdb === 0, boot);
    check('veri: tüm backdrop 1280px', !!boot && boot.badBackdrop === 0, boot && boot.badBackdrop);

    // 2) Arama
    const search = await ev(`
      const inp = document.getElementById('search-input');
      inp.value = 'matrix'; inp.dispatchEvent(new Event('input', { bubbles: true }));
      await new Promise(r => setTimeout(r, 700));
      const cards = document.querySelectorAll('#movies-grid .movie-card').length;
      inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
      await new Promise(r => setTimeout(r, 300));
      const hist = JSON.parse(localStorage.getItem('cine3d_search_history') || '[]');
      inp.value = ''; inp.dispatchEvent(new Event('input', { bubbles: true }));
      await new Promise(r => setTimeout(r, 500));
      return { cards, hist };
    `, 600);
    check('arama: sonuç + geçmiş kaydı', !!search && search.cards >= 1 && (search.hist || []).includes('matrix'), search);

    // 3) Filtre tutarlılığı
    const filter = await ev(`
      window.app.resetFilters();
      await new Promise(r => setTimeout(r, 300));
      const base = document.querySelectorAll('#movies-grid .movie-card').length;
      const baseFiltered = window.app.filteredMovies.length;
      document.getElementById('catalog-load-more').click();
      const afterMore = document.querySelectorAll('#movies-grid .movie-card').length;
      window.app.setGenre('Komedi');
      await new Promise(r => setTimeout(r, 300));
      const cards = document.querySelectorAll('#movies-grid .movie-card').length;
      const filtered = window.app.filteredMovies.length;
      window.app.setGenre('Tümü');
      await new Promise(r => setTimeout(r, 300));
      return { base, baseFiltered, afterMore, cards, filtered, back: document.querySelectorAll('#movies-grid .movie-card').length };
    `, 500);
    check('kademeli katalog: 36 → 72, filtre değişiminde ilk sayfa', !!filter && filter.base === 36 && filter.afterMore === 72 && filter.cards === Math.min(36, filter.filtered) && filter.filtered < filter.baseFiltered && filter.back === 36, filter);

    const catalogUi = await ev(`
      const app = window.app;
      await app.catalogReady;
      const names = [...document.querySelectorAll('[data-catalog-count]')].map(el => Number(el.textContent));
      const topIds = [...document.querySelectorAll('.top10-card')].map(el => el.dataset.movieId);
      const provider = document.getElementById('provider-filter');
      provider.value = 'netflix'; provider.dispatchEvent(new Event('change'));
      const matching = app.filteredMovies.length > 0 && app.filteredMovies.every(m => getMovieStreamingInfo(m).providers.some(p => p.id === 'netflix'));
      const before = app.filteredMovies.map(m => m.id).join(',');
      app.applyTheme('hbo', false);
      const same = before === app.filteredMovies.map(m => m.id).join(',');
      const pressed = document.querySelectorAll('.theme-pill-btn[aria-pressed="true"]').length === 1 && !document.querySelector('.theme-pill-btn[aria-checked]');
      app.resetFilters(); app.applyTheme('netflix', false);
      document.getElementById('top10-explore-btn').click();
      const exactTop = app.filteredMovies.length === 10 && app.filteredMovies.every(m => topIds.includes(m.id));
      app.resetFilters();
      app.switchDiscoveryTab('platform-hubs-section');
      const extras = document.getElementById('discovery-extra-tabs');
      if (!extras.hidden) document.getElementById('discovery-more-toggle').click();
      const collapsed = extras.hidden;
      document.getElementById('discovery-more-toggle').click();
      const expanded = !extras.hidden;
      document.getElementById('discovery-more-toggle').click();
      return { matching, same, pressed, exactTop, collapsed, expanded, count: names.every(n => n === app.ageAllowedMovies().length), topButtons: [...document.querySelectorAll('.top10-card')].every(el => el.tagName === 'BUTTON') };
    `);
    check('katalog: yayıncı filtresi temadan bağımsız + gerçek Top 10 + dinamik sayılar', !!catalogUi && catalogUi.matching && catalogUi.same && catalogUi.pressed && catalogUi.exactTop && catalogUi.count && catalogUi.topButtons, catalogUi);
    check('keşif: diğer araçlar açılıp kapanıyor', !!catalogUi && catalogUi.collapsed && catalogUi.expanded, catalogUi);

    const actionTargets = await ev(`
      const buttons = [...document.querySelectorAll('#movies-grid .movie-card:first-child .card-action-btn')];
      buttons[0].scrollIntoView({ block: 'center', behavior: 'instant' });
      const clear = buttons.length === 3 && buttons.every(btn => {
        const r = btn.getBoundingClientRect();
        return r.width >= 24 && r.height >= 24 && [6, r.width / 2, r.width - 6].every(x => {
          const hit = document.elementFromPoint(r.left + x, r.top + r.height / 2);
          return hit && btn.contains(hit);
        });
      });
      window.scrollTo({ top: 0, behavior: 'instant' });
      return { clear };
    `);
    check('kart: izledim/VS/favori butonları birbirini kapatmıyor', !!actionTargets && actionTargets.clear, actionTargets);

    const metadataFallback = await ev(`
      const app = window.app;
      const index = window.cine3dCatalog;
      const item = index.items.find(entry => !entry.yt);
      const movie = index.toMovie(item);
      const resolve = app.apiService.resolveTrailerVideoId;
      app.apiService.resolveTrailerVideoId = async () => null;
      try {
        app.openModal(movie);
        await app.switchModalToTrailer(movie);
        const box = document.getElementById('modal-media-box');
        const link = box.querySelector('a');
        const honestFallback = !box.querySelector('iframe') && /Doğrulanmış fragman bağlantısı bulunamadı/.test(box.textContent) && /YouTube.da Fragman Ara/.test(link.textContent) && new URL(link.href).pathname === '/results';
        const sourceVisible = !movie.ageRatingCountry || document.querySelector('.modal-age-tag').textContent.includes(movie.ageRatingCountry);
        app.closeModal();
        const report = document.getElementById('catalog-data-health-text').textContent;
        // Arama testi kataloğa bağımsız çevrimiçi sonuçlar da ekler; garanti ana 250 yapım içindir.
        const allProviders = MOVIES_DATA.length === 250 && MOVIES_DATA.every(reference => {
          const current = app.movies.find(m => m.id === reference.id);
          return current && getMovieStreamingInfo(current).verified;
        });
        return { honestFallback, sourceVisible, report: report.includes(String(index.items.length)) && /çocuk profilinde engellenir/.test(report), allProviders };
      } finally { app.apiService.resolveTrailerVideoId = resolve; }
    `);
    check('kaynak verisi: 250 yayıncı eşleşmesi + açık fragman fallback + ülke etiketi + eksik veri bildirimi', !!metadataFallback && metadataFallback.honestFallback && metadataFallback.sourceVisible && metadataFallback.report && metadataFallback.allProviders, metadataFallback);

    // 4) Günlük görevler (+ tahmin kancası ve lig istatistiği)
    const daily = await ev(`
      localStorage.removeItem('cine3d_daily_tasks');
      localStorage.removeItem('cine3d_prediction_stats');
      const m = window.app.movies[5];
      window.app.toggleWatched(m);
      await new Promise(r => setTimeout(r, 300));
      window.app.saveMovieReview(window.app.movies[0].id, { note: 'Özellik testi yorumu', tag: 'Başyapıt 🏆', spoiler: false });
      await new Promise(r => setTimeout(r, 300));
      document.querySelector('.discovery-tab-btn[data-tab-panel="guess-game-section"]').click();
      await new Promise(r => setTimeout(r, 500));
      const G = window.cine3dFeatures.guessGame;
      G.init(); await new Promise(r => setTimeout(r, 300));
      document.getElementById('btn-guess-new-game').click();
      await new Promise(r => setTimeout(r, 400));
      document.querySelector('.guess-diff-pill[data-diff="easy"]')?.click();
      const sl = document.getElementById('guess-range-slider'); sl.value = 8; sl.dispatchEvent(new Event('input', { bubbles: true }));
      document.getElementById('btn-guess-submit').click();
      await new Promise(r => setTimeout(r, 800));
      const st = window.app.getDailyState();
      return { state: st, answers: G.stats.answers, byDiff: G.stats.byDiff, diffChip: !!document.querySelector('.gfp-diff') };
    `, 700);
    check('günlük: izleme + yorum + tahmin → tamamlandı, seri 1', !!daily && daily.state.watched === 1 && daily.state.review === 1 && daily.state.guess === 1 && daily.state.completed === true && daily.state.streak === 1, daily && daily.state);
    check('lig: cevap + zorluk istatistiği kaydediliyor', !!daily && daily.answers >= 1 && daily.byDiff && daily.byDiff.easy && daily.byDiff.easy.answers >= 1, daily && { answers: daily.answers, byDiff: daily.byDiff });

    // 5) Haftalık hedefler + sıralama
    const weekly = await ev(`
      document.querySelector('.discovery-tab-btn[data-tab-panel="family-feed-section"]').click();
      await new Promise(r => setTimeout(r, 700));
      return {
        dailyCard: !!document.querySelector('.daily-card.completed'),
        goals: document.querySelectorAll('.weekly-challenges .wc-row').length,
        doneGoals: document.querySelectorAll('.weekly-challenges .wc-row.done').length,
        ranking: document.querySelectorAll('.family-week-card .fwc-row').length
      };
    `, 600);
    check('aile akışı: günlük kart + 3 hedef + haftalık sıralama', !!weekly && weekly.dailyCard && weekly.goals === 3 && weekly.ranking >= 1, weekly);

    // 6) Modal: benzer filmler + yorum duvarı (yanıt/tepki)
    const modal = await ev(`
      const movie = window.app.movies[0];
      window.app.openModal(movie);
      await new Promise(r => setTimeout(r, 800));
      const similar = document.querySelectorAll('#modal-similar-section .similar-card').length;
      // ikinci profil yorumu enjekte et + tercihleri sıfırla
      localStorage.removeItem('cine3d_review_wall_prefs');
      const S = window.Cine3DStorage;
      let p2 = S.profiles().find(p => p.name === 'Test2');
      const pid2 = p2 ? p2.pid : S.addProfile('Test2', '🧪');
      const shared = JSON.parse(localStorage.getItem('cine3d_reviews_shared') || '{}');
      if (!shared[movie.id]) shared[movie.id] = {};
      shared[movie.id][pid2] = { note: 'İkinci profil yorumu', tag: 'Kafa Açıcı 🧠', spoiler: false, author: 'Test2', updatedAt: new Date().toISOString(), reactions: {}, replies: [] };
      localStorage.setItem('cine3d_reviews_shared', JSON.stringify(shared));
      window.app.renderModalReviewSection(movie, false);
      await new Promise(r => setTimeout(r, 400));
      const reactBtn = document.querySelector('.review-react-btn[data-target="' + pid2 + '"][data-react="👍"]');
      if (reactBtn) { reactBtn.click(); await new Promise(r => setTimeout(r, 500)); }
      const afterReact = JSON.parse(localStorage.getItem('cine3d_reviews_shared') || '{}')[movie.id][pid2].reactions;
      const activePid = window.app.getActivePid();
      // yanıt ekle
      window.app.addReviewReply(movie.id, pid2, 'Yanıt testi');
      await new Promise(r => setTimeout(r, 300));
      const replies = (JSON.parse(localStorage.getItem('cine3d_reviews_shared') || '{}')[movie.id][pid2].replies || []).length;
      window.app.deleteReviewReply(movie.id, pid2, (JSON.parse(localStorage.getItem('cine3d_reviews_shared') || '{}')[movie.id][pid2].replies || [])[0]?.at);
      await new Promise(r => setTimeout(r, 300));
      const repliesAfter = (JSON.parse(localStorage.getItem('cine3d_reviews_shared') || '{}')[movie.id][pid2].replies || []).length;
      window.app.closeModal();
      await new Promise(r => setTimeout(r, 300));
      return { similar, pid2, activePid, afterReact, replies, repliesAfter };
    `, 800);
    check('modal: 4 benzer film', !!modal && modal.similar === 4, modal && modal.similar);
    check('yorum duvarı: tepki + yanıt ekle/sil', !!modal && modal.afterReact && modal.afterReact[modal.activePid] === '👍' && modal.replies === 1 && modal.repliesAfter === 0, modal);

    // 7) Duo: uyum + ortak liste
    const duo = await ev(`
      const S = window.Cine3DStorage;
      const pids = S.profiles().map(p => p.pid).slice(0, 2);
      pids.forEach((pid, i) => {
        S.raw.set('cine3d_p_' + pid + '_watched', JSON.stringify(window.app.movies.slice(i * 3, i * 3 + 4).map(m => ({ id: m.id, userRating: 9, watchedAt: Date.now() }))));
      });
      localStorage.removeItem('cine3d_duo_watchlist');
      document.querySelector('.discovery-tab-btn[data-tab-panel="duo-match-section"]').click();
      await new Promise(r => setTimeout(r, 800));
      window.cine3dFeatures.duoMatcher.init();
      await new Promise(r => setTimeout(r, 300));
      const s1 = document.querySelector('.dpc-profile-select[data-player="1"]');
      s1.value = pids[0]; s1.dispatchEvent(new Event('change', { bubbles: true })); await new Promise(r => setTimeout(r, 600));
      // p1 seçimi bölümü yeniden çizer → p2 düğümünü tazele
      const s2 = document.querySelector('.dpc-profile-select[data-player="2"]');
      s2.value = pids[1]; s2.dispatchEvent(new Event('change', { bubbles: true })); await new Promise(r => setTimeout(r, 700));
      document.getElementById('btn-duo-match').click(); await new Promise(r => setTimeout(r, 800));
      const compat = !!document.querySelector('.drc-compat-card');
      const dna = document.querySelectorAll('.drc-dna-chip').length;
      document.getElementById('btn-duo-shared-list').click(); await new Promise(r => setTimeout(r, 400));
      const stored = JSON.parse(localStorage.getItem('cine3d_duo_watchlist') || '[]').length;
      const items = document.querySelectorAll('#duo-shared-list .duo-shared-item').length;
      document.querySelector('#duo-shared-list .dsi-remove')?.click(); await new Promise(r => setTimeout(r, 300));
      const afterRemove = JSON.parse(localStorage.getItem('cine3d_duo_watchlist') || '[]').length;
      return { compat, dna, stored, items, afterRemove };
    `, 800);
    check('duo: uyum kartı + ortak DNA + ortak liste ekle/kaldır', !!duo && duo.compat && duo.dna >= 1 && duo.stored === 1 && duo.items === 1 && duo.afterRemove === 0, duo);

    // 8) Gece planı
    const night = await ev(`
      document.querySelector('.discovery-tab-btn[data-tab-panel="night-plan-section"]').click();
      await new Promise(r => setTimeout(r, 400));
      localStorage.setItem('cine3d_night_plan', '[]');
      window.app.renderNightPlan();
      const sel = document.getElementById('np-movie-select');
      const ids = [...sel.options].slice(0, 2).map(o => o.value);
      for (const id of ids) { sel.value = id; document.getElementById('np-add-btn').click(); await new Promise(r => setTimeout(r, 300)); }
      const items = document.querySelectorAll('#np-list .np-item').length;
      document.querySelector('#np-list .np-icon-btn[data-act="watched"]')?.click();
      await new Promise(r => setTimeout(r, 500));
      const summary = document.getElementById('np-summary').textContent;
      document.querySelector('#np-list .np-icon-btn[data-act="remove"]')?.click();
      await new Promise(r => setTimeout(r, 300));
      const afterRemove = JSON.parse(localStorage.getItem('cine3d_night_plan') || '[]').length;
      return { items, remaining: /Kalan/.test(summary), afterRemove };
    `, 500);
    check('gece planı: ekleme + izlendi + kalan süre + çıkarma', !!night && night.items === 2 && night.remaining && night.afterRemove === 1, night);

    // 9) Hafta planı + ICS
    const week = await ev(`
      window.app.watchlist = window.app.movies.slice(0, 7);
      window.app.saveWatchlist();
      localStorage.setItem('cine3d_night_plan', '[]');
      localStorage.setItem('cine3d_night_plan_week', '0');
      window.app.renderNightPlan();
      document.getElementById('np-week-fill-btn').click();
      await new Promise(r => setTimeout(r, 700));
      const plan = JSON.parse(localStorage.getItem('cine3d_night_plan') || '[]').length;
      const days = document.querySelectorAll('#np-list .np-idx').length;
      const today = !!document.querySelector('.np-today-card');
      window.__ics = null; window.__icsName = null;
      const oc = URL.createObjectURL;
      URL.createObjectURL = (b) => { window.__ics = b; return oc.call(URL, b); };
      const ok = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function () { window.__icsName = this.download; };
      document.getElementById('np-ics-btn').click();
      await new Promise(r => setTimeout(r, 400));
      URL.createObjectURL = oc; HTMLAnchorElement.prototype.click = ok;
      const res = { plan, days, today, name: window.__icsName, events: 0, alarms: 0 };
      if (window.__ics) {
        const txt = await window.__ics.text();
        res.events = (txt.match(/BEGIN:VEVENT/g) || []).length;
        res.alarms = (txt.match(/BEGIN:VALARM/g) || []).length;
      }
      return res;
    `, 800);
    check('hafta planı: 7 gün + bugünün filmi', !!week && week.plan === 7 && week.days === 7 && week.today, week);
    check('hafta planı: ICS 7 etkinlik + 7 hatırlatıcı', !!week && week.events === 7 && week.alarms === 7, week);

    // 10) Rulet (izleme listem)
    const roulette = await ev(`
      window.app.watchlist = window.app.movies.slice(10, 13);
      window.app.saveWatchlist();
      document.querySelector('.discovery-tab-btn[data-tab-panel="roulette-section"]').click();
      await new Promise(r => setTimeout(r, 400));
      document.querySelector('.roulette-filter-pill[data-rfilter="watchlist"]').click();
      await new Promise(r => setTimeout(r, 700));
      document.getElementById('btn-spin-roulette').click();
      await new Promise(r => setTimeout(r, 6000));
      const reveal = document.getElementById('roulette-reveal-card');
      const title = reveal ? (reveal.querySelector('.reveal-title') || {}).textContent : null;
      const inList = window.app.watchlist.some(w => w.title === title);
      return { seq: (window.app.rouletteSequence || []).length, visible: reveal && !reveal.classList.contains('hidden'), inList };
    `, 700);
    check('rulet: izleme listesinden dönüş', !!roulette && roulette.seq === 64 && roulette.visible && roulette.inList, roulette);

    // 11) Raporlar: CSV + karne PNG + Wrapped
    const reports = await ev(`
      document.getElementById('open-watchlist-btn').click();
      await new Promise(r => setTimeout(r, 500));
      const tabs = [...document.querySelectorAll('.drawer-tab-btn')];
      tabs[tabs.length - 1].click();
      await new Promise(r => setTimeout(r, 700));
      const res = { hasCsv: !!document.getElementById('btn-report-csv'), hasWrapped: !!document.getElementById('btn-wrapped') };
      window.__csv = null;
      const oc = URL.createObjectURL;
      URL.createObjectURL = (b) => { window.__csv = b; return oc.call(URL, b); };
      const ok = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function () {};
      document.getElementById('btn-report-csv').click();
      await new Promise(r => setTimeout(r, 400));
      const card = window.app.exportFamilyReportCard();
      document.getElementById('watchlist-close').click();
      await new Promise(r => setTimeout(r, 300));
      URL.createObjectURL = oc; HTMLAnchorElement.prototype.click = ok;
      if (window.__csv) {
        const txt = await window.__csv.text();
        res.csvLines = txt.split('\\r\\n').length;
      }
      res.canvas = card ? { w: card.width, h: card.height } : null;
      let blank = 0;
      if (card) {
        const d = card.getContext('2d').getImageData(0, 0, card.width, card.height).data;
        for (let i = 0; i < d.length; i += 4000) { if (d[i] || d[i+1] || d[i+2]) blank++; }
      }
      res.nonBlank = blank;
      window.app.openWrapped();
      await new Promise(r => setTimeout(r, 400));
      res.slides = document.querySelectorAll('.wr-dot').length;
      window.app.closeWrapped();
      return res;
    `, 800);
    check('rapor: CSV 110+ satır + karne 1080x1350 + Wrapped 6 slayt', !!reports && reports.hasCsv && reports.hasWrapped && reports.csvLines >= 110 && reports.canvas && reports.canvas.w === 1080 && reports.canvas.h === 1350 && reports.nonBlank > 20 && reports.slides === 6, reports);

    // 12) Yoğunluk + geri al
    const misc = await ev(`
      const dt = document.getElementById('density-toggle');
      dt.click(); await new Promise(r => setTimeout(r, 250));
      const compact = document.body.classList.contains('density-compact');
      const stored = localStorage.getItem('cine3d_density');
      dt.click(); await new Promise(r => setTimeout(r, 200));
      const m = window.app.movies[7];
      window.app.toggleWatched(m);
      await new Promise(r => setTimeout(r, 250));
      const added = window.app.isMovieWatched(m.id);
      document.querySelector('.toast-action')?.click();
      await new Promise(r => setTimeout(r, 300));
      return { compact, stored, added, undone: !window.app.isMovieWatched(m.id) };
    `, 400);
    check('yoğunluk: kompakt mod + kalıcılık', !!misc && misc.compact && misc.stored === 'compact', misc);
    check('geri al: izlendi işlemi geri alınıyor', !!misc && misc.added && misc.undone, misc);

    // 13) Kısayollar + odak tuzağı + inert
    const a11y = await ev(`
      const trigger = document.getElementById('btn-daily-pick-hero');
      trigger.focus(); trigger.click();
      await new Promise(r => setTimeout(r, 500));
      const overlay = document.getElementById('daily-pick-modal');
      const main = document.querySelector('main.main-content');
      const res = { inert: main && main.hasAttribute('inert'), initial: document.activeElement && document.activeElement.className.slice(0, 20) };
      const focusables = [...overlay.querySelectorAll('button:not([disabled])')].filter(el => el.getClientRects().length);
      focusables[focusables.length - 1].focus();
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }));
      await new Promise(r => setTimeout(r, 150));
      res.wrappedForward = document.activeElement === focusables[0];
      focusables[0].focus();
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true }));
      await new Promise(r => setTimeout(r, 150));
      res.wrappedBackward = document.activeElement === focusables[focusables.length - 1];
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await new Promise(r => setTimeout(r, 300));
      res.closed = !document.getElementById('daily-pick-modal');
      res.inertAfter = main && main.hasAttribute('inert');
      res.focusReturned = !!document.activeElement && document.activeElement.id === 'btn-daily-pick-hero';
      // yardım penceresi
      document.dispatchEvent(new KeyboardEvent('keydown', { key: '?', bubbles: true, cancelable: true }));
      await new Promise(r => setTimeout(r, 300));
      res.helpOpen = !!document.getElementById('shortcuts-help');
      res.helpFocus = document.activeElement && document.activeElement.className.slice(0, 12);
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await new Promise(r => setTimeout(r, 250));
      res.helpClosed = !document.getElementById('shortcuts-help');
      return res;
    `, 600);
    check('odak: öneri açıkken inert + Tab tuzağı + kapanınca geri dönüş', !!a11y && a11y.inert && /dp-close/.test(a11y.initial || '') && a11y.wrappedForward && a11y.wrappedBackward && a11y.closed && a11y.inertAfter === false && a11y.focusReturned, a11y);
    check('odak: klavye yardımı odaklı açılıyor', !!a11y && a11y.helpOpen && /sc-close/.test(a11y.helpFocus || '') && a11y.helpClosed, a11y);

    // 14) A11y taraması
    const scan = await ev(`
      const dup = {};
      document.querySelectorAll('[id]').forEach(el => { dup[el.id] = (dup[el.id] || 0) + 1; });
      return {
        duplicates: Object.entries(dup).filter(([k, v]) => v > 1).length,
        unlabeled: [...document.querySelectorAll('button')].filter(b => !b.textContent.trim() && !b.getAttribute('aria-label') && !b.getAttribute('title')).length,
        noAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length,
        h1: document.querySelectorAll('h1').length
      };
    `);
    check('a11y: tekil id, etiketli buton, alt metin, tek h1', !!scan && scan.duplicates === 0 && scan.unlabeled === 0 && scan.noAlt === 0 && scan.h1 === 1, scan);

    // 15) Çocuk profili + yaş kilidi + PIN
    const kidSetup = await ev(`
      const S = window.Cine3DStorage;
      let kid = S.profiles().find(p => p.name === 'Minik');
      const kidPid = kid ? kid.pid : S.addProfile('Minik', '🧸', { maxAge: 13, pinHash: window.app.hashPin('1234') });
      const adult = S.profiles().find(p => p.pid !== kidPid);
      S.setActiveProfile(kidPid);
      return { kidPid, adultPid: adult.pid };
    `);
    await nav();
    const kids = await ev(`
      const allowed = window.app.ageAllowedMovies();
      const cards = [...document.querySelectorAll('#movies-grid .movie-card')].map(c => c.dataset.movieId);
      const maxAge = Math.max(...cards.map(id => window.app.parseAgeRating((window.app.movies.find(m => m.id === id) || {}).ageRating)));
      const adult = window.app.movies.find(m => window.app.parseAgeRating(m.ageRating) > 13);
      if (adult) { window.app.openModal(adult); await new Promise(r => setTimeout(r, 400)); }
      const blocked = !document.getElementById('movie-modal').classList.contains('open');
      const app = window.app;
      const orig = app.askPin;
      app.askPin = async () => '0000'; const wrong = await app.verifyActivePin('T');
      app.askPin = async () => '1234'; const right = await app.verifyActivePin('T');
      app.askPin = orig;
      // Gerçek sınıflandırmaların beklentisi uygulama parser'ından türetilmez.
      const ratingCases = [['TV-MA', false], ['R', false], ['NC-17', false], ['N/A', false], ['', false], ['belirsiz', false], ['Genel', true], ['PG-13', true], ['TV-Y7', true]];
      const ratingsSafe = ratingCases.every(([ageRating, expected]) => app.isAgeAllowed({ ageRating }) === expected);
      const indexedUnknown = window.cine3dCatalog.toMovie({ id: 'unknown-age', t: 'Test', type: 'movie', platforms: [] });
      const indexSafe = !app.isAgeAllowed(indexedUnknown);
      const profilesBefore = window.Cine3DStorage.profiles().length;
      let pinAsked = 0;
      app.askPin = async () => { pinAsked++; return null; };
      document.getElementById('profile-new-name').value = 'PIN atlama testi';
      document.getElementById('profile-add-btn').click();
      await new Promise(r => setTimeout(r, 100));
      app.askPin = orig;
      const creationBlocked = pinAsked === 1 && window.Cine3DStorage.profiles().length === profilesBefore;
      const storySafe = app.isAgeAllowed(app.storyAdventure.resolveDestinyMovie([]));
      app.vsList = [];
      app.selectRandomVSPair(false);
      const duelSafe = app.vsList.every(m => app.isAgeAllowed(m));
      app.vsList = []; app.updateVSDock(false);
      return { limit: window.app.getActiveAgeLimit(), cards: cards.length, maxAge, blocked,
        badge: !document.getElementById('kids-mode-badge').classList.contains('hidden'),
        wrong, right, allowed: allowed.length, ratingsSafe, indexSafe, creationBlocked, storySafe, duelSafe };
    `, 500);
    check('çocuk: yaş filtresi + 18+ engeli + rozet', !!kids && kids.limit === 13 && kids.maxAge <= 13 && kids.blocked && kids.badge && kids.allowed > 0, kids);
    check('çocuk: PIN yanlış/doğru doğrulama', !!kids && kids.wrong === false && kids.right === true, kids);
    check('çocuk: TV-MA/R/bilinmeyen yaş engeli + PIN koruması + güvenli hikaye/düello', !!kids && kids.ratingsSafe && kids.indexSafe && kids.creationBlocked && kids.storySafe && kids.duelSafe, kids);
    await ev(`window.Cine3DStorage.setActiveProfile(window.Cine3DStorage.profiles().find(p => p.name !== 'Minik').pid); return true;`);
    await nav();
    const adult = await ev(`
      const cards = [...document.querySelectorAll('#movies-grid .movie-card')].map(c => c.dataset.movieId);
      const maxAge = Math.max(...cards.map(id => window.app.parseAgeRating((window.app.movies.find(m => m.id === id) || {}).ageRating)));
      return { limit: window.app.getActiveAgeLimit(), maxAge, badgeHidden: document.getElementById('kids-mode-badge').classList.contains('hidden') };
    `, 500);
    check('yetişkin profil: kısıt yok + 18+ katalogda', !!adult && adult.limit === 0 && adult.maxAge >= 16 && adult.badgeHidden, adult);

    // 16) Mobil taşma
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true, screenWidth: 390, screenHeight: 844 });
    await nav();
    const mobile = await ev(`
      await new Promise(r => setTimeout(r, 800));
      const de = document.documentElement;
      const res = { docW: de.clientWidth, scrollW: de.scrollWidth };
      window.app.openWrapped();
      await new Promise(r => setTimeout(r, 400));
      const dlg = document.querySelector('.wr-dialog');
      res.wrappedFits = dlg ? dlg.getBoundingClientRect().right <= de.clientWidth + 2 : null;
      window.app.closeWrapped();
      document.getElementById('btn-daily-pick-hero').click();
      await new Promise(r => setTimeout(r, 500));
      const card = document.querySelector('#dp-grid .dp-card');
      res.pickFits = card ? card.getBoundingClientRect().right <= de.clientWidth + 2 : null;
      res.overflowAfter = de.scrollWidth;
      document.querySelector('.dp-close').click();
      return res;
    `, 600);
    check('mobil: yatay taşma yok, Wrapped/öneri sığıyor', !!mobile && mobile.scrollW <= mobile.docW + 2 && mobile.wrappedFits && mobile.pickFits && mobile.overflowAfter <= mobile.docW + 2, mobile);
    await send('Emulation.clearDeviceMetricsOverride');

    // İlk ziyaretin önbelleği ile gerçek çevrimdışı yeniden açılış (ayrı HTTP cache değil).
    const offlineSetup = await ev(`
      await navigator.serviceWorker.ready;
      const cache = await caches.open('cine3d-cache-v9.4');
      const critical = ['js/storage-adapter.js', 'js/vendor/three.min.js', 'data/catalog.json'];
      const cached = await Promise.all(critical.map(p => cache.match(new URL(p, location.href).href, { ignoreSearch: true })));
      return { cached: cached.every(Boolean), pid: window.Cine3DStorage.activePid() };
    `);
    check('çevrimdışı: tüm temel bağımlılıklar ilk ziyarette önbellekte', !!offlineSetup && offlineSetup.cached, offlineSetup);
    await send('Network.enable');
    await send('Network.setCacheDisabled', { cacheDisabled: true });
    await send('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
    try {
      await nav(2500);
      const offline = await ev(`
        window.cinemaApiService.omdbBlockedUntil = Infinity;
        const found = await window.cinemaApiService.searchAndEnrich('Game of Thrones');
        return { cards: document.querySelectorAll('#movies-grid .movie-card').length, storage: !!window.Cine3DStorage, pid: window.Cine3DStorage.activePid(), found: found.length, staticText: document.querySelector('.online-status-text').textContent };
      `);
      check('çevrimdışı: profil + katalog + indeks araması çalışıyor', !!offline && offline.cards === 36 && offline.storage && offline.pid === offlineSetup.pid && offline.found > 0 && /Çevrimdışı/.test(offline.staticText), offline);
    } finally {
      await send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
      await send('Network.setCacheDisabled', { cacheDisabled: false });
    }

    // 17) Konsol
    const realErrors = consoleErrors.filter((e) => !/[Ff]avicon|api.health/.test(e));
    check('konsol: hata yok', realErrors.length === 0, realErrors.slice(0, 3).join(' | '));

    const failed = results.filter((r) => !r.ok);
    console.log(`\n${results.length - failed.length}/${results.length} test geçti`);
    if (failed.length) {
      console.log('BAŞARISIZ:', failed.map((f) => f.name).join(', '));
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('Özellik testi hatası:', err && err.message);
    process.exitCode = 1;
  } finally {
    try { if (ws) ws.close(); } catch (e) { /* yoksay */ }
    try { if (chrome) chrome.kill(); } catch (e) { /* yoksay */ }
    server.close();
  }
})();
