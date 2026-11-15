#!/usr/bin/env node
/**
 * Cine3D - Smoke test (bağımlılıksız)
 *
 * Repo kökünü statik olarak servis eder, Chrome'u CDP ile açar ve kritik akışları
 * doğrular. Her push'ta CI'da çalışır (bkz. .github/workflows/smoke.yml).
 *
 * Kullanım:
 *   node tests/smoke.js
 *   CHROME_PATH="/path/to/chrome" node tests/smoke.js
 */
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.join(__dirname, '..');
const PORT = Number(process.env.SMOKE_PORT || 8123);
const DEBUG_PORT = Number(process.env.SMOKE_CDP_PORT || 9411);
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

function httpStatus(url, extraHeaders = {}) {
  return new Promise((resolve) => {
    // R016 (ZCode): https afiş URL'leri için protokol desteği + timeout
    const mod = url.startsWith('https:') ? https : http;
    try {
      const req = mod.get(url, { headers: extraHeaders }, (res) => { res.resume(); resolve(res.statusCode); });
      req.on('error', () => resolve(0));
      req.setTimeout(15000, () => { req.destroy(); resolve(0); });
    } catch (e) {
      resolve(0);
    }
  });
}

const results = [];
function check(name, ok, detail = '') {
  results.push({ name, ok: !!ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
}

(async () => {
  const server = await startServer();
  let chrome = null;
  let ws = null;
  try {
    // --- HTTP kontrolleri ---
    check('index 200', (await httpStatus(BASE)) === 200);
    check('manifest 200', (await httpStatus(BASE + 'manifest.json')) === 200);
    check('sw.js 200', (await httpStatus(BASE + 'sw.js')) === 200);
    check('robots.txt 200', (await httpStatus(BASE + 'robots.txt')) === 200);

    const sitemapBody = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
    const sitemapCount = (sitemapBody.match(/<loc>/g) || []).length;
    check('sitemap 110+ URL', sitemapCount >= 110, sitemapCount + ' URL');

    // R016/2 (ZCode): afiş URL sağlık kontrolü — rastgele 5 örneklem (rate-limit dostu)
    let posterSample = [];
    try {
      const md = fs.readFileSync(path.join(ROOT, 'js', 'movies-data.js'), 'utf8');
      const matches = md.match(/https:\/\/m\.media-amazon\.com[^"']+/g) || [];
      const uniq = [...new Set(matches)];
      const stepSize = Math.max(1, Math.floor(uniq.length / 5));
      for (let i = 0; i < uniq.length && posterSample.length < 5; i += stepSize) { posterSample.push(uniq[i]); }
    } catch (e) { /* yoksay */ }
    let brokenPosters = [];
    for (const u of posterSample) {
      const st = await httpStatus(u);
      if (st !== 200) brokenPosters.push(st + ' ' + u.slice(-50));
      await sleep(120);
    }
    check('afiş URL sağlığı (5 örneklem)', brokenPosters.length === 0, brokenPosters.slice(0, 3).join(' | ') || posterSample.length + ' URL kontrol edildi');

    // R015/9 (ZCode): sürüm tutarlılığı — index.html ?v= etiketleri == sw.js CACHE_VERSION
    // (R006b/R013'de sürüm artırımı unutulup canlıda eski dosya servis edilmişti)
    const indexBody = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    const swBody = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
    const htmlVersions = [...new Set((indexBody.match(/\?v=([\d.]+)/g) || []).map((s) => s.slice(3)))];
    const swVersion = ((swBody.match(/CACHE_VERSION = '([^']+)'/) || [])[1]) || null;
    check(
      'sürüm etiketleri tutarlı',
      htmlVersions.length === 1 && swVersion !== null && htmlVersions[0] === swVersion,
      'index: ' + (htmlVersions.join(', ') || 'yok') + ' / sw: ' + (swVersion || 'yok')
    );

    // 9.5: gerçek sunucu (server.js) beyaz listesi ve API origin kapısı
    const APP_PORT = Number(process.env.SMOKE_APP_PORT || 8125);
    const APP_BASE = `http://127.0.0.1:${APP_PORT}/`;
    let appServer = null;
    try {
      appServer = spawn(process.execPath, [path.join(ROOT, 'server.js')], {
        env: { ...process.env, PORT: String(APP_PORT), HOST: '127.0.0.1', API_RATE_LIMIT: '3', STREAM_RATE_LIMIT: '5' },
        stdio: 'ignore'
      });
      let appReady = false;
      for (let i = 0; i < 50 && !appReady; i++) {
        await sleep(150);
        appReady = (await httpStatus(APP_BASE + 'api/health')) === 200;
      }
      check('server.js ayakta', appReady);
      if (appReady) {
        const robots = await httpStatus(APP_BASE + 'robots.txt');
        const sitemap = await httpStatus(APP_BASE + 'sitemap.xml');
        check('server.js SEO dosyaları 200', robots === 200 && sitemap === 200, `robots ${robots} / sitemap ${sitemap}`);
        const t = await httpStatus(APP_BASE + 'tests/features.js');
        const s = await httpStatus(APP_BASE + 'scripts/audit-identities.js');
        check('server.js test/araç dosyalarını servis etmez', t === 404 && s === 404, `tests ${t} / scripts ${s}`);
        const blocked = await httpStatus(APP_BASE + 'api/search?q=matrix', { Origin: 'https://evil.example' });
        const allowed = await httpStatus(APP_BASE + 'api/search?q=matrix', { Origin: 'https://agarzmilano-png.github.io' });
        check('server.js API origin kapısı', blocked === 403 && allowed === 200, `evil ${blocked} / izinli ${allowed}`);
        // 9.5/1: JSON API sınırı (3) dolar, medya akışı sınırdan muaf kalır.
        await httpStatus(APP_BASE + 'api/search?q=matrix');
        await httpStatus(APP_BASE + 'api/search?q=matrix');
        const limited = await httpStatus(APP_BASE + 'api/search?q=matrix');
        const audio = [];
        for (let i = 0; i < 5; i++) audio.push(await httpStatus(APP_BASE + 'api/stream-ost?id=inception'));
        const audioLimited = await httpStatus(APP_BASE + 'api/stream-ost?id=inception');
        check('server.js JSON API sınırı + ayrı akış kotası', limited === 429 && audio.every(code => code === 200) && audioLimited === 429, `api ${limited} / akış ${audio.join(',')} / 6. ${audioLimited}`);
      }
    } finally {
      try { if (appServer) appServer.kill(); } catch (e) { /* yoksay */ }
    }

    // --- Chrome ---
    const chromePath = findChrome();
    check('Chrome bulundu', !!chromePath, chromePath || 'CHROME_PATH verin');
    if (!chromePath) throw new Error('Chrome yok');

    const profile = path.join(require('os').tmpdir(), 'cine3d-smoke-' + Date.now());
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
        consoleErrors.push('ERR: ' + d.params.args.map((a) => a.value || a.description || '').join(' ').slice(0, 120));
      }
      if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
    };
    const send = (method, params = {}) => new Promise((resolve) => {
      const id = ++msgId;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = async (expr) => {
      const r = await send('Runtime.evaluate', { expression: `(async () => { ${expr} })()`, awaitPromise: true, returnByValue: true });
      if (r.result && r.result.exceptionDetails) return { __error: (r.result.exceptionDetails.exception || {}).description };
      return r.result && r.result.result ? r.result.result.value : undefined;
    };

    await new Promise((r) => (ws.onopen = r));
    await send('Runtime.enable');
    await send('Page.enable');
    await send('Page.navigate', { url: BASE });
    await sleep(9000);

    const page = await evaluate(`
      return {
        title: document.title,
        cards: document.querySelectorAll('#movies-grid .movie-card').length,
        app: !!window.app
      };
    `);
    check('sayfa açıldı', page && page.cards > 0 && page.app === true, page && page.title && page.title.slice(0, 40));
    check('ilk sayfa: 36 kart', page && page.cards === 36, page && page.cards + ' kart');

    // Arama geçmişi (Enter)
    const search = await evaluate(`
      const inp = document.getElementById('search-input');
      inp.focus(); inp.value = 'matrix';
      inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
      await new Promise(r => setTimeout(r, 600));
      let hist = [];
      try { hist = JSON.parse(localStorage.getItem('cine3d_search_history') || '[]'); } catch (e) {}
      return { hist };
    `);
    check('arama geçmişi kaydı', search && Array.isArray(search.hist) && search.hist.includes('matrix'), search && JSON.stringify(search.hist));

    // DNA rozeti (3 izleme sonrası modal)
    const dna = await evaluate(`
      window.app.movies.slice(0, 3).forEach(m => { if (!window.app.isMovieWatched(m.id)) window.app.toggleWatched(m); });
      window.app.openModal(window.app.movies[0]);
      await new Promise(r => setTimeout(r, 700));
      const badge = document.getElementById('modal-dna-badge');
      const text = badge ? badge.textContent : null;
      window.app.closeModal();
      return { text };
    `);
    check('DNA rozeti görünür', !!(dna && dna.text && dna.text.indexOf('%') > 0 && dna.text.indexOf('DNA') > 0), dna && dna.text);

    // İzleme listesi + filtre kontrolleri
    const wl = await evaluate(`
      window.app.movies.slice(0, 3).forEach(m => { if (!window.app.isMovieInWatchlist(m.id)) window.app.toggleWatchlist(m); });
      window.app.openWatchlistDrawer();
      await new Promise(r => setTimeout(r, 600));
      const items = document.querySelectorAll('.watchlist-item-card').length;
      const hasSort = !!document.getElementById('wl-sort');
      const hasFilter = !!document.getElementById('wl-genre-filter');
      const undefinedText = /undefined/.test(document.getElementById('watchlist-drawer').innerText);
      window.app.closeWatchlistDrawer();
      return { items, hasSort, hasFilter, undefinedText };
    `);
    check('izleme listesi render', !!(wl && wl.items >= 1 && wl.hasSort && wl.hasFilter && !wl.undefinedText), wl && JSON.stringify(wl));

    // Sinema Gecesi planlayıcı
    const night = await evaluate(`
      document.querySelector('.discovery-tab-btn[data-tab-panel="night-plan-section"]').click();
      await new Promise(r => setTimeout(r, 600));
      const sel = document.getElementById('np-movie-select');
      sel.value = window.app.movies[0].id;
      document.getElementById('np-add-btn').click();
      await new Promise(r => setTimeout(r, 400));
      const plan = JSON.parse(localStorage.getItem('cine3d_night_plan') || '[]');
      const summary = (document.getElementById('np-summary') || {}).textContent || '';
      return { plan, summary: summary.replace(/\\s+/g, ' ').trim() };
    `);
    check('gece planı', !!(night && night.plan.length === 1 && /Bu gece/.test(night.summary || '')), night && night.summary);

    // Coverflow açılış
    const cf = await evaluate(`
      document.getElementById('view-toggle-coverflow').click();
      await new Promise(r => setTimeout(r, 800));
      const cards = document.querySelectorAll('.coverflow-card').length;
      document.getElementById('view-toggle-grid').click();
      return { cards };
    `);
    check('coverflow kartları', !!(cf && cf.cards > 0), cf && cf.cards + ' kart');

    // 9.5: mobil hero noktaları viewport içinde kalmalı (390px'te sol kenar -76px idi)
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
    await sleep(900);
    const dots = await evaluate(`
      const el = document.querySelector('.hero-nav-dots');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width), vw: document.documentElement.clientWidth, scrollW: document.documentElement.scrollWidth };
    `);
    check('mobil: hero noktaları ekran içinde', !!dots && dots.left >= 0 && dots.right <= dots.vw + 1 && dots.scrollW <= dots.vw + 1, dots && JSON.stringify(dots));
    await send('Emulation.clearDeviceMetricsOverride');

    // Konsol hataları
    const realErrors = consoleErrors.filter((e) => !/[Ff]avicon|api.health/.test(e));
    check('konsol hatası yok', realErrors.length === 0, realErrors.slice(0, 3).join(' | '));

    const failed = results.filter((r) => !r.ok);
    console.log(`\n${results.length - failed.length}/${results.length} test geçti`);
    if (failed.length) {
      console.log('BAŞARISIZ:', failed.map((f) => f.name).join(', '));
      process.exitCode = 1;
    }
  } catch (err) {
    console.error('Smoke test hatası:', err && err.message);
    process.exitCode = 1;
  } finally {
    try { if (ws) ws.close(); } catch (e) { /* yoksay */ }
    try { if (chrome) chrome.kill(); } catch (e) { /* yoksay */ }
    server.close();
  }
})();
