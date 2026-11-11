/**
 * CINE3D - Faz 5 Özellik Motoru (v2)
 * 1) Hover'da Sessiz Fragman Önizlemesi (Netflix davranışı)
 * 2) Şampiyonluk Turnuvası v2 — lobi (4/8/16, havuzlar), oyuncu istatistikleri,
 *    favori yüzdesi, AI kararı, yol haritası, Şampiyonlar Müzesi
 * 3) IMDb Puan Tahmin Oyunu v2 — zorluk seviyeleri, geri sayım, jokerler,
 *    seri/kombo bonusu, ödül bilgisi, animasyonlu bitiş, zorluk bazlı rekorlar
 * 4) Cine3D Öneri Motoru (izlediklerin + puanların → "Seni Tanıyoruz" şeridi)
 *
 * Bağımsız IIFE: app.js'e dokunmadan, mevcut global API'lerle (window.app,
 * cinemaAudio, getFallbackPoster) entegre çalışır.
 */
(function () {
  'use strict';

  const F = {
    app: null,
    inited: false
  };

  // --- Ortak yardımcılar -------------------------------------------------
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function parseVotesSafe(v) {
    if (typeof v === 'number') return v;
    const s = String(v == null ? '' : v).trim().toUpperCase();
    const m = s.match(/([\d.]+)\s*(K|M)?/);
    if (!m) return 100000;
    let n = parseFloat(m[1]);
    if (m[2] === 'M') n *= 1e6;
    else if (m[2] === 'K') n *= 1e3;
    else n = parseFloat(s.replace(/\./g, '')) || n;
    return n || 100000;
  }

  // Cine3D "Zafer Tahtı" formülü (app.js VS düellosuyla aynı):
  // IMDb * 10 + log10(oy) * 4 + Oscar vurgusu
  function victoryScore(movie) {
    const votes = parseVotesSafe(movie.imdbVotes);
    const oscar = String(movie.awards || '').toLowerCase().includes('oscar') ? 6 : 2;
    return (movie.imdbRating * 10) + (Math.log10(Math.max(votes, 10)) * 4) + oscar;
  }

  function hasAwards(movie) {
    const a = String(movie.awards || '').trim();
    return a && a !== 'N/A' && a !== 'Popüler Yapım' && a !== 'Popüler Dizi';
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getMovieById(id) {
    return (F.app.movies || []).find(m => m.id === id) || null;
  }

  function playSound(name) {
    if (window.cinemaAudio && typeof window.cinemaAudio[name] === 'function') {
      window.cinemaAudio[name]();
    }
  }

  function posterFallback(title) {
    return String(title || '').replace(/'/g, "\\'");
  }

  // =========================================================================
  // 1) HOVER'DA SESSİZ FRAGMAN ÖNİZLEMESİ
  // =========================================================================
  const TrailerPreview = {
    enabled: window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    HOVER_DELAY_MS: 1200,
    current: null, // { card, poster, timer, iframe, chip }
    trailerCache: new Map(),

    resolveTrailerId(movie) {
      if (movie.trailerYoutubeId) return Promise.resolve(movie.trailerYoutubeId);
      const key = movie.id;
      if (this.trailerCache.has(key)) return Promise.resolve(this.trailerCache.get(key));

      if (window.app && window.app.staticMode) return Promise.resolve(null);
      return fetch(`api/trailer?title=${encodeURIComponent(movie.title)}&year=${encodeURIComponent(movie.year || '')}`)
        .then(res => (res.ok ? res.json() : null))
        .then(data => {
          if (data && data.success && data.videoId) {
            this.trailerCache.set(key, data.videoId);
            return data.videoId;
          }
          return null;
        })
        .catch(() => null);
    },

    onOver(e) {
      if (!TrailerPreview.enabled) return;
      const card = e.target.closest('.movie-card');
      if (!card || !card.isConnected) return;
      if (TrailerPreview.current && TrailerPreview.current.card === card) return;

      // Aynı anda yalnızca bir önizleme: öncekini iptal et
      TrailerPreview.clear();

      const movie = getMovieById(card.dataset.movieId);
      if (!movie) return;
      const poster = card.querySelector('.card-poster');
      if (!poster) return;

      // Son fare konumunu sakla — timer sonunda hâlâ kartın üstünde müyüz kontrolü için
      card.dataset.previewX = String(e.clientX || 0);
      card.dataset.previewY = String(e.clientY || 0);

      const timer = setTimeout(async () => {
        // Bekleme sırasında kart yeniden render edilmiş olabilir
        if (!card.isConnected) return;
        const videoId = await TrailerPreview.resolveTrailerId(movie);
        if (!videoId || !card.isConnected) return;
        // Fare kartın üstünde değilse başlatma (mouseout + scroll zaten temizler)
        const px = parseFloat(card.dataset.previewX);
        const py = parseFloat(card.dataset.previewY);
        if (!isNaN(px) && !isNaN(py)) {
          const el = document.elementFromPoint(px, py);
          if (el && !card.contains(el)) return;
        }

        TrailerPreview.clear(true);

        const iframe = document.createElement('iframe');
        iframe.className = 'trailer-preview-iframe';
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${videoId}&iv_load_policy=3`;
        iframe.allow = 'autoplay; encrypted-media';
        iframe.tabIndex = -1;
        iframe.setAttribute('aria-hidden', 'true');
        // R010: önizleme görsel olarak oynasın ama tıklamaları YUTMASIN.
        // iframe hiçbir zaman pointer hedefi olmaz → karta/butonlara tıklama geçer.
        iframe.style.pointerEvents = 'none';
        // Önizleme poster katmanında kalır; kart rozetleri (z-index 5),
        // glare (3) ve hover-play (7) her zaman üstte kalır.
        iframe.style.zIndex = '1';
        poster.appendChild(iframe);

        const chip = document.createElement('span');
        chip.className = 'card-preview-chip';
        chip.innerHTML = '<span class="preview-dot"></span> ÖNİZLEME';
        // R010: chip de (sağ üstte, IMDb/favori rozetlerinin üzerinde) tıklamayı geçirir
        chip.style.pointerEvents = 'none';
        poster.appendChild(chip);

        requestAnimationFrame(() => iframe.classList.add('is-playing'));

        TrailerPreview.current = { card, poster, iframe, chip, timer: null };
      }, TrailerPreview.HOVER_DELAY_MS);

      TrailerPreview.current = { card, poster, timer };
    },

    onOut(e) {
      if (!TrailerPreview.enabled) return;
      const card = e.target.closest && e.target.closest('.movie-card');
      if (!card) return;
      // Karttan tamamen çıkıldıysa iptal et
      if (!card.contains(e.relatedTarget)) {
        TrailerPreview.clear();
      }
    },

    clear(keepCardCheck) {
      const cur = TrailerPreview.current;
      if (!cur) return;
      TrailerPreview.current = null;
      if (cur.timer) clearTimeout(cur.timer);
      if (cur.iframe) {
        try { cur.iframe.remove(); } catch (err) {}
      }
      if (cur.chip) {
        try { cur.chip.remove(); } catch (err) {}
      }
    },

    bindGlobal() {
      document.addEventListener('mouseover', TrailerPreview.onOver);
      document.addEventListener('mouseout', TrailerPreview.onOut);
      // Sayfa kaydırılınca ekran dışı iframe'leri temizle
      window.addEventListener('scroll', () => TrailerPreview.clear(), { passive: true });
      // R010: karta tıklanıp modal açılırken önizleme iframe'i anında kaldırılsın.
      // Capture fazı: kartın kendi click handler'ı (T3 → openModal) çalışmadan önce temizlenir.
      document.addEventListener('click', () => TrailerPreview.clear(), true);
    }
  };

  // =========================================================================
  // 4) CINE3D ÖNERİ MOTORU
  // =========================================================================
  const Reco = {
    computeDNA() {
      const app = F.app;
      const watched = app.watchedList || [];
      if (watched.length < 3) return null;

      const genreSum = {};
      const genreCount = {};
      const directors = {};
      let totalRating = 0;
      let ratedCount = 0;

      watched.forEach(w => {
        const m = getMovieById(w.id);
        if (!m) return;

        // R005/1: Puan verilmemiş izleme afiniteyi etkilemez. Önceden nötr 7.5
        // varsayılıyordu; bu da puansız izlemelerin zevk DNA'sını şişirmesine yol açıyordu.
        const rating = (typeof w.userRating === 'number' && w.userRating > 0) ? w.userRating : null;

        if (rating != null) {
          totalRating += rating;
          ratedCount++;
          (m.genres || []).forEach(g => {
            genreSum[g] = (genreSum[g] || 0) + rating;
            genreCount[g] = (genreCount[g] || 0) + 1;
          });
        }

        // Yönetmen geçmişi izleme kaydından gelir (puan şartı yok)
        if (m.director) directors[m.director] = (directors[m.director] || 0) + 1;
      });

      const affinity = {};
      for (const g in genreSum) affinity[g] = genreSum[g] / genreCount[g];

      return {
        affinity,
        directors,
        // Puanlı izleme yoksa null: okuyan taraf "—" gösterir, 0/NaN üretilmez
        avgRating: ratedCount > 0 ? totalRating / ratedCount : null,
        ratedCount,
        count: watched.length
      };
    },

    score(movie, dna) {
      const gs = movie.genres || [];
      let genreScore = 0;
      gs.forEach(g => {
        if (dna.affinity[g] != null) genreScore += dna.affinity[g];
      });
      genreScore = gs.length ? genreScore / gs.length : 5; // 1-10 arası
      const dirBonus = dna.directors[movie.director] ? 0.6 : 0;
      const imdbBonus = (movie.imdbRating - 8) * 0.8; // 8.0→0, 9.0→+0.8
      return genreScore + dirBonus + imdbBonus;
    },

    // "Neden önerildi?" gerekçesi: score() içindeki katkıları ayrıştırır,
    // en yüksek 3 etkeni kısa metne çevirir. Veri yoksa yüzde uydurmaz,
    // yalnızca katalogdaki gerçek alanları (tür/IMDb) bildirir.
    explain(movie, dna) {
      const gs = movie.genres || [];
      const perGenre = gs.length || 1;
      const parts = [];

      // R005/2: "Sevdiğin tür" diyebilmek için en az 6/10 ortalama puan gerekir.
      // 6 altındaki türler gerekçe metnine hiç girmez (yoksa 2/10'luk ilgi bile
      // "Sevdiğin tür" olarak sunulup yanıltıcı oluyordu).
      const MIN_GENRE_AFFINITY = 6;

      // 1) Tür ilgisi: genreScore'un bu filme düşen payı
      gs.forEach(g => {
        const aff = dna && dna.affinity ? dna.affinity[g] : null;
        if (aff != null && aff >= MIN_GENRE_AFFINITY) {
          parts.push({
            w: aff / perGenre,
            text: aff >= 8 ? `Çok sevdiğin tür: ${g}` : `Sevdiğin tür: ${g}`
          });
        }
      });

      // 2) Yönetmen geçmişi (score'daki dirBonus = 0.6)
      if (dna && dna.directors && dna.directors[movie.director]) {
        parts.push({
          w: 0.6,
          text: `Geçmişin: ${movie.director} (${dna.directors[movie.director]} yapım)`
        });
      }

      // 3) IMDb katkısı (yalnızca 8.0 üzeri pozitif katkı üretir)
      const imdbRating = Number(movie.imdbRating) || 0;
      if (imdbRating > 8) {
        parts.push({
          w: (imdbRating - 8) * 0.8,
          text: `IMDb'si yüksek: ${imdbRating.toFixed(1)}`
        });
      }

      parts.sort((a, b) => b.w - a.w);
      const picked = parts.slice(0, 3).map(p => p.text);

      // Kullanıcı verisi henüz açıklama üretemiyorsa: doğrulanabilir katalog bilgisi
      if (!picked.length) {
        const genre = gs[0] || 'Sinema';
        picked.push(imdbRating >= 7
          ? `Katalog seçkisi: ${genre} · IMDb ${imdbRating.toFixed(1)}`
          : `Kataloğun popüler yapımı: ${genre}`);
      }

      const short = picked.join(' · ');
      const rest = parts.length - picked.length;
      return {
        short,
        long: rest > 0 ? `${short} · +${rest} etken daha` : short
      };
    },

    refresh() {
      const app = F.app;
      const section = document.getElementById('recommendations-section');
      if (!section || !app || !Array.isArray(app.movies)) return;

      const dna = Reco.computeDNA();
      if (!dna) {
        section.classList.add('hidden');
        return;
      }
      section.classList.remove('hidden');

      const watchedIds = new Set((app.watchedList || []).map(w => w.id));
      const watchlistIds = new Set((app.watchlist || []).map(m => m.id));

      const scored = (app.movies || [])
        .filter(m => !watchedIds.has(m.id))
        .map(m => ({ m, s: Reco.score(m, dna) + (watchlistIds.has(m.id) ? -1.5 : 0) }))
        .sort((a, b) => b.s - a.s)
        .slice(0, 12);

      const topGenre = Object.entries(dna.affinity).sort((a, b) => b[1] - a[1])[0];
      const titleEl = document.getElementById('rec-title-text');
      if (titleEl && topGenre) {
        titleEl.textContent = `Zevk DNA'n: ${topGenre[0]} — Sana Özel ${scored.length} Yapım`;
      }

      const scroller = document.getElementById('rec-scroller');
      if (!scroller) return;
      // R005/4: Sabit ölçek (göreli normalize değil) — skor 0 → %40, 12+ → %99.
      // Aynı film her listede aynı yüzdeyi alır; skor arttıkça yüzde kesin artar.
      const toPct = (val) => Math.max(40, Math.min(99, Math.round(40 + val * 5)));

      scroller.innerHTML = scored.map(({ m, s }) => {
        const matchPct = toPct(s);
        const safeTitle = posterFallback(m.title);
        const why = Reco.explain(m, dna);
        return `
          <div class="movie-card rec-card" data-movie-id="${m.id}" data-rec-id="${m.id}" role="button" tabindex="0" aria-label="${esc(m.title)} — detayları aç">
            <div class="card-inner">
              <div class="card-poster">
                <img src="${m.posterUrl}" alt="${esc(m.title)}" loading="lazy"
                     onerror="this.onerror=null; this.src=getFallbackPoster('${safeTitle}', '${(m.genres && m.genres[0]) || 'Sinema'}', '${m.imdbRating || 8.0}');" />
                <div class="card-glare"></div>
                <div class="rec-match-badge">🎯 %${matchPct} Eşleşme</div>
              </div>
              <div class="rec-card-info">
                <h4 class="rec-card-title">${m.title}</h4>
                <span class="rec-why-row">
                  <span class="rec-match">%${matchPct} uyum</span>
                  <span class="rec-card-meta">★ ${m.imdbRating} • ${m.year}</span>
                </span>
                <p class="rec-reason" title="Neden önerildi? ${esc(why.long)}">✨ ${esc(why.short)}</p>
              </div>
            </div>
          </div>`;
      }).join('');
    },

    bindGlobal() {
      // Kart tıklaması → detay modalı (tek seferlik, konteyner kalıcı)
      const section = document.getElementById('recommendations-section');
      if (section) {
        section.addEventListener('click', (e) => {
          const card = e.target.closest('.rec-card');
          if (!card) return;
          const m = getMovieById(card.dataset.recId);
          if (m && F.app) F.app.openModal(m);
        });

        // Klavye: Enter/Space öneri kartını açar
        section.addEventListener('keydown', (e) => {
          if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
          const card = e.target.closest('.rec-card');
          if (!card) return;
          e.preventDefault();
          const m = getMovieById(card.dataset.recId);
          if (m && F.app) F.app.openModal(m);
        });
      }

      // localStorage değişim köprüsü: uygulama izlediklerim/listem'i kaydettiğinde haberdar ol
      const origSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function (key, value) {
        origSetItem.call(this, key, value);
        if (key === 'cine3d_watched' || key === 'cine3d_watchlist') {
          document.dispatchEvent(new CustomEvent('cine3d-user-data-changed'));
        }
      };

      document.addEventListener('cine3d-user-data-changed', () => {
        setTimeout(() => Reco.refresh(), 60);
      });

      // Sekmeye dönüldüğünde de tazele
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) Reco.refresh();
      });
    }
  };

  // =========================================================================
  // 2) ŞAMPİYONLUK TURNUVASI v2
  // =========================================================================
  const Tournament = {
    state: null,
    size: 8,
    pool: 'synth',
    POOLS: [
      { id: 'synth', label: '🧬 Önerilerim + Rastgele' },
      { id: 'movies', label: '🎬 Sadece Filmler' },
      { id: 'series', label: '📺 Sadece Diziler' },
      { id: 'all', label: '🌍 Tümü (Rastgele)' }
    ],
    SIZES: [4, 8, 16],

    champions() {
      try { return JSON.parse(localStorage.getItem('cine3d_champions')) || []; }
      catch (e) { return []; }
    },

    addChampion(movie, size) {
      const list = this.champions();
      list.unshift({
        name: movie.title,
        poster: movie.posterUrl,
        date: new Date().toLocaleDateString('tr-TR'),
        size
      });
      try { localStorage.setItem('cine3d_champions', JSON.stringify(list.slice(0, 5))); } catch (e) {}
    },

    roundName(idx, totalRounds) {
      const names = {
        1: ['BÜYÜK FİNAL'],
        2: ['YARI FİNAL', 'BÜYÜK FİNAL'],
        3: ['ÇEYREK FİNAL', 'YARI FİNAL', 'BÜYÜK FİNAL'],
        4: ['SON 16 TURU', 'ÇEYREK FİNAL', 'YARI FİNAL', 'BÜYÜK FİNAL']
      };
      const row = names[totalRounds] || names[3];
      return row[idx] || 'TURNUVA';
    },

    open() {
      const modal = document.getElementById('tournament-modal');
      if (!modal) return;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      playSound('playWhoosh');
      Tournament.renderLobby();
    },

    close() {
      const modal = document.getElementById('tournament-modal');
      if (!modal) return;
      modal.classList.remove('open');
      document.body.style.overflow = '';
    },

    renderLobby() {
      const body = document.getElementById('tournament-body');
      if (!body) return;

      const champs = Tournament.champions();
      const museumHtml = champs.length
        ? champs.map(c => `
            <span class="museum-chip" title="${esc(c.date)} • ${c.size} filmlik turnuva">
              <img src="${c.poster}" alt="${esc(c.name)}" onerror="this.style.display='none';" />
              <span class="museum-name">${esc(c.name)}</span>
            </span>`).join('')
        : '<span class="museum-empty">Henüz kupa yok — ilk şampiyonu sen taçlandır!</span>';

      body.innerHTML = `
        <span class="tournament-header-tag">🏆 CINE3D ŞAMPİYONLUK TURNUVASI</span>
        <h2 class="tournament-title">Turnuva Kurulumu</h2>
        <p class="tournament-sub">
          Havuzunu ve katılımcı sayısını seç; tek eleme bracket'inde her maçı senin kararın belirler.
          👑 FAVORİ rozeti, Cine3D Zafer Tahtı formülünün (IMDb × oy × ödül) tahminidir.
        </p>

        <div class="tournament-lobby-controls">
          <div class="tl-group">
            <span class="tl-label">KATILIMCI SAYISI</span>
            <div class="tl-pills">
              ${Tournament.SIZES.map(n => `
                <button class="tl-pill ${n === Tournament.size ? 'active' : ''}" data-tsize="${n}">
                  ${n} Film ${n === 16 ? '(Maraton)' : n === 4 ? '(Hızlı)' : '(Klasik)'}
                </button>`).join('')}
            </div>
          </div>
          <div class="tl-group">
            <span class="tl-label">HAVUZ KAYNAĞI</span>
            <div class="tl-pills">
              ${Tournament.POOLS.map(p => `
                <button class="tl-pill ${p.id === Tournament.pool ? 'active' : ''}" data-tpool="${p.id}">
                  ${p.label}
                </button>`).join('')}
            </div>
          </div>
        </div>

        <div class="tl-museum">
          <span class="tl-label">🏆 ŞAMPİYONLAR MÜZESİ</span>
          <div class="museum-row">${museumHtml}</div>
        </div>

        <div class="tournament-champion-actions" style="margin-top: 22px;">
          <button class="btn-tournament-primary" id="btn-tournament-start">⚔️ Turnuvayı Başlat</button>
        </div>
      `;

      body.querySelectorAll('.tl-pill[data-tsize]').forEach(btn => {
        btn.addEventListener('click', () => {
          Tournament.size = parseInt(btn.dataset.tsize, 10) || 8;
          Tournament.renderLobby();
          playSound('playHover');
        });
      });
      body.querySelectorAll('.tl-pill[data-tpool]').forEach(btn => {
        btn.addEventListener('click', () => {
          Tournament.pool = btn.dataset.tpool;
          Tournament.renderLobby();
          playSound('playHover');
        });
      });
      document.getElementById('btn-tournament-start')?.addEventListener('click', () => Tournament.start());
    },

    buildPool() {
      const app = F.app;
      let base = (app.movies || []).filter(m => m.imdbRating && m.posterUrl);

      // Kalite eşiği: önce 8.0+ havuzu; yetmezse genişlet
      const strong = base.filter(m => m.imdbRating >= 8.0);
      if (strong.length >= this.size) base = strong;

      if (this.pool === 'movies') {
        const only = base.filter(m => !m.isSeries);
        if (only.length >= Math.min(this.size, 4)) base = only;
      } else if (this.pool === 'series') {
        const only = base.filter(m => m.isSeries);
        if (only.length >= Math.min(this.size, 4)) base = only;
      }

      const fighters = [];
      if (this.pool === 'synth') {
        // Sentez: öneri motorunun ilk sonuçları turnuvaya doğrudan katılır
        const quota = Math.min(4, Math.floor(this.size / 2));
        Array.from(document.querySelectorAll('#rec-scroller .rec-card'))
          .map(c => getMovieById(c.dataset.recId))
          .filter(Boolean)
          .forEach(m => {
            if (fighters.length < quota && !fighters.includes(m)) fighters.push(m);
          });
      }

      shuffle(base.slice()).forEach(m => {
        if (fighters.length < this.size && !fighters.includes(m)) fighters.push(m);
      });

      // Hâlâ eksikse tüm katalogdan tamamla
      if (fighters.length < this.size) {
        shuffle((app.movies || []).slice()).forEach(m => {
          if (fighters.length < this.size && !fighters.includes(m)) fighters.push(m);
        });
      }

      return fighters.slice(0, this.size);
    },

    start() {
      const fighters = Tournament.buildPool();
      if (fighters.length < 2) return;
      Tournament.totalRounds = Math.round(Math.log2(fighters.length));
      Tournament.state = {
        round: 0,
        queue: fighters,
        winners: [],
        history: [],
        size: fighters.length
      };
      playSound('playTaDum');
      Tournament.renderMatch();
    },

    renderMatch() {
      const s = Tournament.state;
      const body = document.getElementById('tournament-body');
      if (!body || !s) return;

      // Tek galip kaldıysa şampiyonluk açılışı
      if (s.queue.length === 1) {
        Tournament.renderChampion(s.queue[0]);
        return;
      }

      const matchIdx = s.winners.length;
      const m1 = s.queue[matchIdx * 2];
      const m2 = s.queue[matchIdx * 2 + 1];
      if (!m1 || !m2) {
        Tournament.advanceRound();
        return;
      }

      const score1 = victoryScore(m1);
      const score2 = victoryScore(m2);
      const p1 = Math.round((score1 / (score1 + score2)) * 100);
      const favIsFirst = score1 >= score2;
      const favPct = Math.max(favIsFirst ? p1 : 100 - p1, 51);

      const totalMatches = Math.ceil(s.queue.length / 2);
      const stripHtml = s.queue.map((m, i) => {
        const eliminated = i < matchIdx * 2;
        return `<span class="tournament-strip-chip ${eliminated ? 'eliminated' : ''}">${esc(m.title)}</span>`;
      }).join('');

      const roadmapHtml = s.history.length
        ? `<div class="tournament-roadmap">
             <span class="tr-label">YOL HARİTASI:</span>
             ${s.history.map(h => `<span class="tr-chip" title="${esc(h.rn)}: ${esc(h.l)} elendi">✓ ${esc(h.w)}</span>`).join('')}
           </div>`
        : '';

      const fighterHtml = (m, fav) => {
        const safe = posterFallback(m.title);
        const stats = [
          `<span class="tf-stat">🗳️ ${esc(m.imdbVotes || '-')} oy</span>`,
          `<span class="tf-stat">⏱ ${esc(m.duration || '-')}</span>`
        ];
        if (hasAwards(m)) stats.push(`<span class="tf-stat tf-award">🏆 ${esc(String(m.awards).slice(0, 30))}</span>`);
        return `
          <div class="tournament-fighter" data-fighter-id="${m.id}">
            <img class="tournament-fighter-poster" src="${m.posterUrl}" alt="${m.title}"
                 onerror="this.onerror=null; this.src=getFallbackPoster('${safe}', '${(m.genres && m.genres[0]) || 'Sinema'}', '${m.imdbRating || 8.0}');" />
            <span class="tournament-fighter-imdb">★ ${m.imdbRating}</span>
            ${fav ? `<span class="tournament-fav-badge">👑 FAVORİ %${favPct}</span>` : ''}
            <div class="tournament-fighter-overlay">
              <h3 class="tournament-fighter-title">${m.title}</h3>
              <span class="tournament-fighter-meta">${m.year} • ${m.isSeries ? 'Dizi' : 'Film'}</span>
              <div class="tf-stats-row">${stats.join('')}</div>
            </div>
            <span class="tournament-pick-hint">SEÇ VE İLERLE</span>
          </div>`;
      };

      body.innerHTML = `
        <span class="tournament-header-tag">🏆 CINE3D ŞAMPİYONLUK TURNUVASI • ${s.size} FİLM</span>
        <h2 class="tournament-title">${Tournament.roundName(s.round, Tournament.totalRounds)}</h2>
        <p class="tournament-sub">Kazandığını düşündüğün yapımın üzerine tıkla — ya da formüle güveniyorsan Cine3D'nin kararını onayla.</p>

        <div class="tournament-round-banner">
          <span class="tournament-round-name">${esc(m1.title)} vs ${esc(m2.title)}</span>
          <span class="tournament-round-progress">MAÇ ${matchIdx + 1}/${totalMatches}</span>
        </div>

        ${roadmapHtml}
        <div class="tournament-fighter-strip">${stripHtml}</div>

        <div class="tournament-fighters">
          ${fighterHtml(m1, favIsFirst)}
          <div class="tournament-vs-emblem">
            <span class="tournament-vs-glyph">VS</span>
            <span class="tournament-vs-label">KAPIŞMA</span>
          </div>
          ${fighterHtml(m2, !favIsFirst)}
        </div>

        <div class="tournament-ai-row">
          <button class="btn-tournament-ai" id="btn-tournament-ai">🤖 Cine3D Karar Ver (formül favorisini seçer)</button>
        </div>
      `;

      body.querySelectorAll('.tournament-fighter').forEach(el => {
        el.addEventListener('click', () => {
          const winnerId = el.dataset.fighterId;
          const winner = winnerId === m1.id ? m1 : m2;
          const loser = winnerId === m1.id ? m2 : m1;
          Tournament.pick(winner, loser, el);
        });
      });
      document.getElementById('btn-tournament-ai')?.addEventListener('click', () => Tournament.decideByAI());
    },

    decideByAI() {
      const s = Tournament.state;
      if (!s || s.picking) return;
      const matchIdx = s.winners.length;
      const m1 = s.queue[matchIdx * 2];
      const m2 = s.queue[matchIdx * 2 + 1];
      if (!m1 || !m2) return;
      const winner = victoryScore(m1) >= victoryScore(m2) ? m1 : m2;
      const loser = winner.id === m1.id ? m2 : m1;
      const el = Array.from(document.querySelectorAll('#tournament-body .tournament-fighter'))
        .find(f => f.dataset.fighterId === winner.id) || null;
      Tournament.pick(winner, loser, el, true);
    },

    pick(winner, loser, pickedEl, isAiPick) {
      const s = Tournament.state;
      if (!s || s.picking) return;
      s.picking = true;

      playSound(isAiPick ? 'playTaDum' : 'playWhoosh');
      if (pickedEl) {
        pickedEl.classList.add('is-picked');
        const body = document.getElementById('tournament-body');
        const other = Array.from(body.querySelectorAll('.tournament-fighter'))
          .find(el => el.dataset.fighterId !== winner.id);
        if (other) other.classList.add('is-eliminated');
      }

      setTimeout(() => {
        s.winners.push(winner);
        s.history.push({
          rn: Tournament.roundName(s.round, Tournament.totalRounds),
          w: winner.title,
          l: loser.title,
          wid: winner.id
        });
        s.picking = false;
        const totalMatches = Math.ceil(s.queue.length / 2);
        if (s.winners.length >= totalMatches) {
          Tournament.advanceRound();
        } else {
          Tournament.renderMatch();
        }
      }, 750);
    },

    advanceRound() {
      const s = Tournament.state;
      s.queue = s.winners.slice();
      s.winners = [];
      s.round = Math.min(s.round + 1, Tournament.totalRounds - 1);
      Tournament.renderMatch();
    },

    renderChampion(champion) {
      const body = document.getElementById('tournament-body');
      if (!body) return;
      playSound('playTaDum');

      Tournament.addChampion(champion, Tournament.state ? Tournament.state.size : Tournament.size);
      const champs = Tournament.champions();

      // Şampiyonun devirdiği rakipler (maç geçmişinden)
      const beaten = (Tournament.state && Tournament.state.history || [])
        .filter(h => h.wid === champion.id)
        .map(h => ({ name: h.l, round: h.rn.split(' ')[0] }));
      const pathHtml = beaten.length
        ? `<div class="champion-path">
             <span class="tr-label">KAZANDIĞI KAPIŞMALAR:</span>
             ${beaten.map(b => `<span class="tr-chip" title="${esc(b.round)}">⚔️ ${esc(b.name)}</span>`).join('')}
           </div>`
        : '';

      const safeTitle = posterFallback(champion.title);
      body.innerHTML = `
        <div class="tournament-champion">
          <div class="tournament-champion-crown">👑</div>
          <div class="tournament-champion-label">CINE3D ŞAMPİYONU • ${Tournament.state ? Tournament.state.size : ''} FİLMLİK TURNUVA</div>
          ${pathHtml}
          <img class="tournament-champion-poster" src="${champion.posterUrl}" alt="${champion.title}"
               onerror="this.onerror=null; this.src=getFallbackPoster('${safeTitle}', '${(champion.genres && champion.genres[0]) || 'Sinema'}', '${champion.imdbRating || 8.0}');" />
          <h2 class="tournament-champion-name">${champion.title}</h2>
          <p class="tournament-champion-meta">
            ${champion.year} • ★ ${champion.imdbRating} IMDb • ${champion.duration || ''} • ${champion.director || ''}
          </p>
          <p class="tournament-champion-meta">${(champion.genres || []).join(' • ')}</p>
          <div class="tl-museum" style="margin-top: 18px;">
            <span class="tl-label">🏆 ŞAMPİYONLAR MÜZESİ</span>
            <div class="museum-row">
              ${champs.map(c => `
                <span class="museum-chip" title="${esc(c.date)} • ${c.size} filmlik turnuva">
                  <img src="${c.poster}" alt="${esc(c.name)}" onerror="this.style.display='none';" />
                  <span class="museum-name">${esc(c.name)}</span>
                </span>`).join('')}
            </div>
          </div>
          <div class="tournament-champion-actions">
            <button class="btn-tournament-primary" id="btn-champion-watchlist">📌 Şampiyonu Listeme Ekle</button>
            <button class="btn-tournament-secondary" id="btn-champion-open">🎬 Konusunu Aç</button>
            <button class="btn-tournament-secondary" id="btn-champion-new">🎲 Yeni Turnuva Kur</button>
          </div>
        </div>
      `;

      document.getElementById('btn-champion-watchlist')?.addEventListener('click', () => {
        if (F.app) F.app.toggleWatchlist(champion);
      });
      document.getElementById('btn-champion-open')?.addEventListener('click', () => {
        Tournament.close();
        if (F.app) F.app.openModal(champion);
      });
      document.getElementById('btn-champion-new')?.addEventListener('click', () => Tournament.renderLobby());
    },

    bindGlobal() {
      document.getElementById('open-tournament-btn')?.addEventListener('click', () => Tournament.open());
      document.getElementById('open-tournament-nav')?.addEventListener('click', () => Tournament.open());
      document.getElementById('tournament-close')?.addEventListener('click', () => Tournament.close());
      document.getElementById('tournament-backdrop')?.addEventListener('click', () => Tournament.close());
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('tournament-modal')?.classList.contains('open')) {
          Tournament.close();
        }
      });
    }
  };

  // =========================================================================
  // 3) IMDB PUAN TAHMİN OYUNU v2
  // =========================================================================
  const GuessGame = {
    TOTAL_ROUNDS: 5,
    DIFFS: {
      easy: { label: '😊 Kolay', mult: 1, seconds: 20, bestKey: 'cine3d_guess_best_easy' },
      medium: { label: '😐 Orta', mult: 1.5, seconds: 15, bestKey: 'cine3d_guess_best_medium' },
      hard: { label: '🔥 Zor', mult: 2, seconds: 12, bestKey: 'cine3d_guess_best_hard' }
    },
    inited: false,
    diff: 'medium',
    rounds: [],
    roundIdx: 0,
    totalScore: 0,
    answered: false,
    streak: 0,
    // R007/6: kalıcı lig istatistikleri
    STATS_KEY: 'cine3d_prediction_stats',
    STATS_BADGES: [5, 10, 15],
    stats: { totalCorrect: 0, bestStreak: 0, gamesPlayed: 0 },

    loadStats() {
      try {
        const raw = JSON.parse(localStorage.getItem(this.STATS_KEY) || '{}');
        return {
          totalCorrect: Math.max(0, parseInt(raw.totalCorrect, 10) || 0),
          bestStreak: Math.max(0, parseInt(raw.bestStreak, 10) || 0),
          gamesPlayed: Math.max(0, parseInt(raw.gamesPlayed, 10) || 0)
        };
      } catch (err) {
        return { totalCorrect: 0, bestStreak: 0, gamesPlayed: 0 };
      }
    },

    saveStats() {
      try { localStorage.setItem(this.STATS_KEY, JSON.stringify(this.stats)); } catch (err) { /* yoksay */ }
      // R015/4: lig panelini tazele
      if (this.renderGuessFamilyPanel) this.renderGuessFamilyPanel();
    },

    // --- R015/4: PROFİLLER ARASI TAHMİN LİGİ ---
    renderGuessFamilyPanel() {
      const section = document.getElementById('guess-game-section');
      if (!section) return;
      let profiles = [];
      try { profiles = (window.Cine3DStorage && window.Cine3DStorage.profiles) ? window.Cine3DStorage.profiles() : []; } catch (err) { profiles = []; }
      if (!profiles.length) return;
      const rows = profiles.map(p => {
        let st = { totalCorrect: 0, bestStreak: 0, gamesPlayed: 0 };
        try {
          // R016: raw köprüsü yoksa çökme yok
          const rawGet = window.Cine3DStorage && window.Cine3DStorage.raw && window.Cine3DStorage.raw.get;
          if (typeof rawGet === 'function') {
            const raw = rawGet('cine3d_p_' + p.pid + '_prediction_stats');
            st = { ...st, ...JSON.parse(raw || '{}') };
          }
        } catch (err) { /* varsayilan */ }
        const num = (x) => Math.max(0, parseInt(x, 10) || 0);
        // R016: profil adı/emoji kullanıcı girdisi → kaçışlanır (bozuk HTML/XSS yok)
        return `<div class="gfp-row"><span class="gfp-name">${esc(p.emoji)} ${esc(p.name)}</span><span class="gfp-stats">🏆 En iyi seri: <strong>${num(st.bestStreak)}</strong> · ✅ Doğru: <strong>${num(st.totalCorrect)}</strong> · 🎮 Oyun: <strong>${num(st.gamesPlayed)}</strong></span></div>`;
      }).join('');
      const html = `<div class="guess-family-panel" id="guess-family-panel"><div class="gfp-head">👥 Tahmin Ligi — Profiller Arası</div>${rows}</div>`;
      const existing = document.getElementById('guess-family-panel');
      if (existing) existing.outerHTML = html;
      else {
        // Oyun kartının içine ekle (bölüm genişliği/hizası korunur)
        const host = section.querySelector('.guess-container') || section;
        host.insertAdjacentHTML('afterbegin', html);
      }
    },

    /** Kazanılan seri rozetleri (5/10/15). */
    earnedBadges() {
      const best = Math.max(this.stats.bestStreak || 0, this.streak || 0);
      return this.STATS_BADGES.filter(limit => best >= limit);
    },
    hintsLeft: 2,
    hintedThisRound: false,
    timerId: null,
    timerRemaining: 0,

    bestScore() {
      try { return parseInt(localStorage.getItem(this.DIFFS[this.diff].bestKey), 10) || 0; }
      catch (e) { return 0; }
    },

    init() {
      if (GuessGame.inited) return;
      GuessGame.inited = true;
      GuessGame.stats = GuessGame.loadStats();
      // R015/4: profiller arası lig paneli
      if (GuessGame.renderGuessFamilyPanel) GuessGame.renderGuessFamilyPanel();

      const slider = document.getElementById('guess-range-slider');
      if (slider) {
        slider.addEventListener('input', () => {
          const valEl = document.getElementById('guess-range-value');
          if (valEl) valEl.textContent = parseFloat(slider.value).toFixed(1);
        });
      }
      document.getElementById('btn-guess-submit')?.addEventListener('click', () => GuessGame.submit());
      document.getElementById('btn-guess-new-game')?.addEventListener('click', () => GuessGame.newGame());
      document.getElementById('btn-guess-hint-band')?.addEventListener('click', () => GuessGame.useHint('band'));
      document.getElementById('btn-guess-hint-director')?.addEventListener('click', () => GuessGame.useHint('director'));

      document.querySelectorAll('.guess-diff-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          GuessGame.diff = btn.dataset.diff || 'medium';
          GuessGame.syncPills();
          GuessGame.newGame();
          playSound('playWhoosh');
        });
      });

      GuessGame.syncPills();
      GuessGame.newGame();
    },

    syncPills() {
      document.querySelectorAll('.guess-diff-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.diff === GuessGame.diff);
        const bestSpan = b.querySelector('.gdp-best');
        if (bestSpan) {
          const cfg = GuessGame.DIFFS[b.dataset.diff];
          let v = 0;
          try { v = parseInt(localStorage.getItem(cfg.bestKey), 10) || 0; } catch (e) {}
          bestSpan.textContent = v > 0 ? `rekor ${v}` : 'rekor —';
        }
      });
      const bestEl = document.getElementById('guess-best-score');
      if (bestEl) bestEl.textContent = GuessGame.bestScore();
    },

    pickPool() {
      const app = F.app;
      let pool = (app.movies || []).filter(m => m.imdbRating && m.posterUrl);
      if (this.diff === 'easy') {
        const rich = pool.filter(m => parseVotesSafe(m.imdbVotes) >= 800000 || m.imdbRating >= 8.7);
        if (rich.length >= this.TOTAL_ROUNDS) pool = rich;
      } else if (this.diff === 'hard') {
        const rare = pool.filter(m => parseVotesSafe(m.imdbVotes) < 500000);
        if (rare.length >= this.TOTAL_ROUNDS) pool = rare;
      }
      return shuffle(pool.slice()).slice(0, this.TOTAL_ROUNDS);
    },

    newGame() {
      GuessGame.stopTimer();
      GuessGame.rounds = GuessGame.pickPool();
      GuessGame.roundIdx = 0;
      GuessGame.totalScore = 0;
      GuessGame.streak = 0;
      GuessGame.hintsLeft = 2;
      document.getElementById('btn-guess-new-game')?.classList.add('hidden');
      document.getElementById('btn-guess-submit')?.classList.remove('hidden');
      GuessGame.syncPills();
      GuessGame.renderRound();
    },

    renderRound() {
      const movie = GuessGame.rounds[GuessGame.roundIdx];
      if (!movie) { GuessGame.finish(); return; }

      GuessGame.answered = false;
      GuessGame.hintedThisRound = false;

      const roundEl = document.getElementById('guess-round-indicator');
      if (roundEl) roundEl.textContent = `${GuessGame.roundIdx + 1}/${GuessGame.TOTAL_ROUNDS}`;
      const scoreEl = document.getElementById('guess-total-score');
      if (scoreEl) scoreEl.textContent = GuessGame.totalScore;

      const posterWrap = document.getElementById('guess-poster-wrap');
      const safeTitle = posterFallback(movie.title);
      if (posterWrap) {
        posterWrap.innerHTML = `
          <img src="${movie.posterUrl}" alt="${movie.title}"
               onerror="this.onerror=null; this.src=getFallbackPoster('${safeTitle}', '${(movie.genres && movie.genres[0]) || 'Sinema'}', '8.0');" />
          <span class="guess-mystery-tag">🎭 PUANI GİZLİ</span>`;
      }

      const meta = document.getElementById('guess-movie-meta');
      if (meta) {
        meta.innerHTML = `
          <h4>${movie.title}</h4>
          <div class="gmm-sub">${movie.year} • ${movie.duration || ''} • ${movie.isSeries ? 'Dizi' : 'Sinema Filmi'}</div>
          <div class="guess-genre-tags">
            ${(movie.genres || []).slice(0, 4).map(g => `<span>${g}</span>`).join('')}
          </div>`;
      }

      const slider = document.getElementById('guess-range-slider');
      if (slider) slider.value = '7.5';
      const valEl = document.getElementById('guess-range-value');
      if (valEl) valEl.textContent = '7.5';

      const resultBox = document.getElementById('guess-result-box');
      if (resultBox) resultBox.classList.add('hidden');

      const submitBtn = document.getElementById('btn-guess-submit');
      if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove('hidden'); }

      // Joker durumunu tazele
      const hintChip = document.getElementById('guess-hint-chip');
      if (hintChip) hintChip.classList.add('hidden');
      const hintsLeftEl = document.getElementById('guess-hints-left');
      if (hintsLeftEl) hintsLeftEl.textContent = GuessGame.hintsLeft;
      document.querySelectorAll('.btn-guess-joker').forEach(b => {
        b.disabled = GuessGame.hintsLeft <= 0;
        b.classList.remove('used');
      });

      GuessGame.startTimer();
    },

    // --- Geri sayım (keşif sekmesi gizliyken donar) ---
    // setInterval kullanılır: rAF bazı gömülü görünümlerde tamamen askıya alınabiliyor
    startTimer() {
      GuessGame.stopTimer();
      const cfg = GuessGame.DIFFS[GuessGame.diff];
      GuessGame.timerRemaining = cfg.seconds * 1000;
      let last = Date.now();

      const tick = () => {
        const now = Date.now();
        const dt = now - last;
        last = now;

        const section = document.getElementById('guess-game-section');
        if (section && section.classList.contains('hidden')) return; // sekme gizliyken süre donar

        GuessGame.timerRemaining -= dt;
        const ratio = Math.max(0, GuessGame.timerRemaining / (cfg.seconds * 1000));
        const bar = document.getElementById('guess-timer-fill');
        const label = document.getElementById('guess-timer-sec');
        if (bar) {
          bar.style.width = (ratio * 100) + '%';
          bar.classList.toggle('danger', ratio < 0.28);
        }
        if (label) label.textContent = Math.ceil(GuessGame.timerRemaining / 1000) + ' sn';

        if (GuessGame.timerRemaining <= 0) {
          GuessGame.stopTimer();
          GuessGame.onTimeout();
        }
      };
      GuessGame.timerId = setInterval(tick, 100);
    },

    stopTimer() {
      if (GuessGame.timerId) {
        clearInterval(GuessGame.timerId);
        GuessGame.timerId = null;
      }
    },

    onTimeout() {
      if (GuessGame.answered) return;
      GuessGame.answered = true;
      GuessGame.stopTimer();
      GuessGame.streak = 0;

      const movie = GuessGame.rounds[GuessGame.roundIdx];
      const submitBtn = document.getElementById('btn-guess-submit');
      if (submitBtn) submitBtn.disabled = true;
      document.querySelectorAll('.btn-guess-joker').forEach(b => { b.disabled = true; });

      const resultBox = document.getElementById('guess-result-box');
      if (resultBox) {
        resultBox.classList.remove('hidden');
        resultBox.innerHTML = `
          <div class="guess-result-row">
            <span class="guess-result-actual">⏰ Süre Doldu! Gerçek Puan: ${movie ? movie.imdbRating : '-'}</span>
            <span class="guess-result-points guess-zero">+0 PUAN</span>
          </div>
          <div class="guess-result-note">🔥 Seri kırıldı — jokerlerini ve zamanını sonraki turlarda akıllıca kullan!</div>`;
      }
      playSound('playHover');

      setTimeout(() => {
        GuessGame.roundIdx++;
        if (GuessGame.roundIdx >= GuessGame.TOTAL_ROUNDS) {
          GuessGame.finish();
        } else {
          GuessGame.renderRound();
        }
      }, 2400);
    },

    useHint(kind) {
      if (GuessGame.answered || GuessGame.hintsLeft <= 0) return;
      const movie = GuessGame.rounds[GuessGame.roundIdx];
      if (!movie) return;

      GuessGame.hintsLeft--;
      GuessGame.hintedThisRound = true;

      const chip = document.getElementById('guess-hint-chip');
      if (chip) {
        chip.classList.remove('hidden');
        if (kind === 'band') {
          const lo = Math.max(6, movie.imdbRating - 0.35).toFixed(1);
          const hi = Math.min(9.5, movie.imdbRating + 0.35).toFixed(1);
          chip.textContent = `🎯 Aralık İpucu: Puan ${lo} – ${hi} arasında (bu turun puanı yarıya düşer)`;
        } else {
          const awards = hasAwards(movie) ? ` • 🏆 ${String(movie.awards).slice(0, 40)}` : '';
          chip.textContent = `🎬 Yönetmen İpucu: ${movie.director || 'Bilinmiyor'}${awards} (bu turun puanı yarıya düşer)`;
        }
      }

      const hintsLeftEl = document.getElementById('guess-hints-left');
      if (hintsLeftEl) hintsLeftEl.textContent = GuessGame.hintsLeft;
      document.querySelectorAll('.btn-guess-joker').forEach(b => {
        b.disabled = GuessGame.hintsLeft <= 0;
      });
      playSound('playHover');
    },

    submit() {
      if (GuessGame.answered) return;
      const movie = GuessGame.rounds[GuessGame.roundIdx];
      if (!movie) return;
      GuessGame.answered = true;
      GuessGame.stopTimer();

      const slider = document.getElementById('guess-range-slider');
      const guess = parseFloat(slider ? slider.value : 7.5);
      const actual = movie.imdbRating;
      const diff = Math.abs(guess - actual);
      const cfg = GuessGame.DIFFS[GuessGame.diff];

      const base = diff <= 0.1 ? 100 : diff <= 0.3 ? 70 : diff <= 0.6 ? 40 : 15;
      let pts = Math.round((base * cfg.mult * (GuessGame.hintedThisRound ? 0.5 : 1)) / 5) * 5;

      // Seri / kombo bonusu: üst üste isabet (fark ≤ 0.3)
      let bonus = 0;
      let streakNote = '';
      if (diff <= 0.3) {
        GuessGame.streak++;
        bonus = Math.min((GuessGame.streak - 1) * 15, 45);
        if (bonus > 0) streakNote = `🔥 ${GuessGame.streak}x SERİ! +${bonus} kombo bonusu`;
      } else {
        GuessGame.streak = 0;
        streakNote = GuessGame.streak === 0 && diff > 0.6 ? '💥 Seri sıfırlandı' : '';
      }

      // R007/6: lig istatistikleri (isabet = fark <= 0.3)
      if (diff <= 0.3) {
        GuessGame.stats.totalCorrect = (GuessGame.stats.totalCorrect || 0) + 1;
      }
      GuessGame.stats.bestStreak = Math.max(GuessGame.stats.bestStreak || 0, GuessGame.streak || 0);
      GuessGame.saveStats();

      GuessGame.totalScore += pts + bonus;
      const scoreEl = document.getElementById('guess-total-score');
      if (scoreEl) scoreEl.textContent = GuessGame.totalScore;

      // Rekor güncelle
      const best = GuessGame.bestScore();
      if (GuessGame.totalScore > best) {
        try { localStorage.setItem(cfg.bestKey, String(GuessGame.totalScore)); } catch (e) {}
        GuessGame.syncPills();
      }

      let note;
      if (diff <= 0.1) { note = '😐 Neredeyse kusursuz! Sen bir IMDb veritabanısısın.'; playSound('playTaDum'); }
      else if (diff <= 0.3) { note = '🔥 Çok yakın! Gerçek bir sinefil sezgisi.'; playSound('playWhoosh'); }
      else if (diff <= 0.6) { note = '👍 Fena değil — çoğu insan bundan daha uzak tahmin ediyor.'; playSound('playHover'); }
      else { note = '🤔 Peki ya poster bu kadar iddialıysa? Sıradaki turda dene!'; playSound('playHover'); }

      const awardsNote = hasAwards(movie) ? `<br><span class="guess-trivia">🏆 ${esc(String(movie.awards))}</span>` : '';
      const hintMark = GuessGame.hintedThisRound ? '<span class="guess-hint-mark">🃏 joker kullanıldı (yarı puan)</span>' : '';

      const resultBox = document.getElementById('guess-result-box');
      if (resultBox) {
        resultBox.classList.remove('hidden');
        resultBox.innerHTML = `
          <div class="guess-result-row">
            <span class="guess-result-actual">★ Gerçek Puan: ${Number(actual).toFixed(1)}</span>
            <span class="guess-result-points">+${pts} PUAN${bonus > 0 ? ` <span class="guess-bonus">+${bonus}🔥</span>` : ''} (fark: ${diff.toFixed(1)})</span>
          </div>
          <div class="guess-result-note">${note}${streakNote ? `<br><span class="guess-streak">${streakNote}</span>` : ''}${hintMark}${awardsNote}</div>`;
      }

      const submitBtn = document.getElementById('btn-guess-submit');
      if (submitBtn) submitBtn.disabled = true;
      document.querySelectorAll('.btn-guess-joker').forEach(b => { b.disabled = true; });

      setTimeout(() => {
        GuessGame.roundIdx++;
        if (GuessGame.roundIdx >= GuessGame.TOTAL_ROUNDS) {
          GuessGame.finish();
        } else {
          GuessGame.renderRound();
        }
      }, 2600);
    },

    animateCount(el, to) {
      if (!el) return;
      const dur = 900;
      const t0 = Date.now();
      const iv = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / dur);
        const eased = 0.2 + 0.8 * p * p;
        el.textContent = Math.round(to * eased);
        if (p >= 1) {
          el.textContent = to;
          clearInterval(iv);
        }
      }, 40);
    },

    finish() {
      GuessGame.stopTimer();
      // R007/6: oynanan oyun + en iyi seri kaydı
      GuessGame.stats = GuessGame.loadStats();
      GuessGame.stats.gamesPlayed = (GuessGame.stats.gamesPlayed || 0) + 1;
      GuessGame.stats.bestStreak = Math.max(GuessGame.stats.bestStreak || 0, GuessGame.streak || 0);
      GuessGame.saveStats();

      const cfg = GuessGame.DIFFS[GuessGame.diff];
      const posterWrap = document.getElementById('guess-poster-wrap');
      const meta = document.getElementById('guess-movie-meta');

      const maxPossible = GuessGame.TOTAL_ROUNDS * (100 * cfg.mult + 45);
      const ratio = GuessGame.totalScore / maxPossible;
      const medal = ratio >= 0.65 ? '🏅 Sinefil Madalyası' : ratio >= 0.45 ? '🎬 Güçlü Sezgi' : '🍿 Antrenman Şart';

      if (posterWrap) {
        posterWrap.innerHTML = `
          <div style="display:flex; align-items:center; justify-content:center; aspect-ratio:2/3; background:linear-gradient(160deg,#13131a,#0b0b10); text-align:center; padding:14px;">
            <div>
              <div style="font-size:2.6rem;">🏆</div>
              <div style="font-size:2rem; font-weight:900; color:#f5c518; margin-top:6px;" id="guess-final-count">0</div>
              <div style="font-size:0.66rem; letter-spacing:0.2em; color:#94a3b8;">TOPLAM PUAN • ${cfg.label.toUpperCase()}</div>
            </div>
          </div>`;
        GuessGame.animateCount(document.getElementById('guess-final-count'), GuessGame.totalScore);
      }
      if (meta) {
        const best = GuessGame.bestScore();
        meta.innerHTML = `
          <h4>Oyun Bitti! ${medal}</h4>
          <div class="gmm-sub">
            5 turda <strong style="color:#f5c518;">${GuessGame.totalScore}</strong> puan (${cfg.label} modu).
            Kişisel rekorun: <strong style="color:#f5c518;">${best}</strong>
            <br><span style="color:#64748b;">Maks. olası: ${maxPossible} — zorluğu artırıp rekoru katlayabilirsin!</span>
          </div>
          <div class="guess-genre-tags">
            <span>🔥 Son serin: ${GuessGame.streak}x</span>
            <span>🏆 En iyi seri: ${GuessGame.stats.bestStreak || 0}x</span>
            <span>✅ Toplam doğru: ${GuessGame.stats.totalCorrect || 0}</span>
            <span>🃏 Kalan joker: ${GuessGame.hintsLeft}</span>
          </div>
          ${(() => {
            const badges = GuessGame.earnedBadges();
            const labels = { 5: '🥉 5 SERİ', 10: '🥈 10 SERİ', 15: '🥇 15 SERİ' };
            return `<div class="guess-league-badges">
              <span class="glb-title">Cine3D Tahmin Ligi</span>
              ${GuessGame.STATS_BADGES.map(limit => `<span class="glb-badge ${badges.includes(limit) ? 'earned' : ''}">${labels[limit]}</span>`).join('')}
              <span class="glb-games">${GuessGame.stats.gamesPlayed || 0} oyun</span>
            </div>`;
          })()}`;
      }
      const submitBtn = document.getElementById('btn-guess-submit');
      if (submitBtn) submitBtn.classList.add('hidden');
      document.getElementById('btn-guess-new-game')?.classList.remove('hidden');
      playSound('playTaDum');
    }
  };

  // =========================================================================
  // 5) BİRLİKTE NE İZLEYELİM? (ÇİFT / ARKADAŞ UZLAŞMA MOTORU - FAZ 6)
  // =========================================================================
  const DuoMatcher = {
    inited: false,
    p1: { name: '1. Seyirci', genres: ['Bilim Kurgu', 'Gerilim'], duration: 'any', rating: 7.5, pid: null },
    p2: { name: '2. Seyirci', genres: ['Dram', 'Gizem'], duration: 'any', rating: 7.5, pid: null },
    candidates: [],
    currentIndex: 0,

    genresList: [
      'Bilim Kurgu', 'Aksiyon', 'Dram', 'Gerilim', 'Suç', 'Macera',
      'Gizem', 'Komedi', 'Animasyon', 'Fantastik', 'Biyografi', 'Korku'
    ],

    /** Katalogdaki gerçek türleri sıklığa göre çıkarır (Romantik, Tarih, Aile... dahil). */
    buildGenreList() {
      const movies = (window.app && Array.isArray(window.app.movies)) ? window.app.movies : [];
      const counts = {};
      for (const m of movies) {
        for (const g of (m.genres || [])) counts[g] = (counts[g] || 0) + 1;
      }
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([g]) => g);
      if (sorted.length >= 6) this.genresList = sorted.slice(0, 18);

      // Seçili türler yeni listede yoksa korunmalı: listeye geri ekle
      for (const g of [...this.p1.genres, ...this.p2.genres]) {
        if (!this.genresList.includes(g)) this.genresList.push(g);
      }
    },

    // --- R014/1: PROFİLLER ARASI DUO ---
    DUO_PROFILES_KEY: 'cine3d_duo_profiles',

    getProfileOptions() {
      try {
        return (window.Cine3DStorage && window.Cine3DStorage.profiles) ? window.Cine3DStorage.profiles() : [];
      } catch (err) { return []; }
    },

    getProfileName(pid) {
      const p = this.getProfileOptions().find(x => x.pid === pid);
      return p ? p.name : 'Anonim';
    },

    /** Profilin izleme geçmişini (raw, adapter bypass) film objelerine çözer. */
    getProfileWatchedMovies(pid) {
      const app = window.app;
      if (!app || !Array.isArray(app.movies) || !pid) return [];
      // R016: raw köprüsü yoksa sessizce boş dön (eski tarayıcı/örnek sayfa)
      const rawGet = window.Cine3DStorage && window.Cine3DStorage.raw && window.Cine3DStorage.raw.get;
      if (typeof rawGet !== 'function') return [];
      let watched = [];
      try {
        watched = JSON.parse((rawGet('cine3d_p_' + pid + '_watched')) || '[]');
      } catch (err) { watched = []; }
      return (Array.isArray(watched) ? watched : [])
        .map(w => (typeof w === 'string') ? { id: w } : w)
        .map(w => { const m = app.movies.find(x => x.id === w.id); return m ? { ...m, userRating: w.userRating } : null; })
        .filter(Boolean);
    },

    /**
     * R016: Profilin izleme geçmişinden tür/puan/süre tercihini hesaplar (yan etkisiz).
     * Hem manuel seçimde hem de sayfa yenilendikten sonra geri yüklemede kullanılır.
     */
    computeProfileTaste(pid) {
      const movies = this.getProfileWatchedMovies(pid);
      if (!movies.length) return null;
      const counts = {};
      movies.forEach(m => (m.genres || []).forEach(g => { counts[g] = (counts[g] || 0) + 1; }));
      const topGenres = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([g]) => g);
      const rated = movies.filter(m => Number.isFinite(Number(m.userRating)) && Number(m.userRating) > 0);
      const avg = rated.length ? rated.reduce((s, m) => s + Number(m.userRating), 0) / rated.length : 7.5;
      const rating = avg >= 8.25 ? 8.5 : (avg >= 7.75 ? 8.0 : 7.5);
      const app = window.app;
      const mins = movies.map(m => (app && typeof app.parseDurationMinutes === 'function') ? app.parseDurationMinutes(m.duration) : 120).filter(x => x > 0);
      const avgMin = mins.length ? mins.reduce((s, x) => s + x, 0) / mins.length : 120;
      const duration = avgMin < 100 ? 'quick' : (avgMin >= 140 ? 'epic' : 'standard');
      return { genres: topGenres, rating, duration, name: this.getProfileName(pid), count: movies.length };
    },

    /** Seçilen profilin zevkini oyuncu kartına uygular: türler, isim, puan beklentisi, süre. */
    applyProfileTaste(playerIdx, pid) {
      const target = playerIdx === 1 ? this.p1 : this.p2;
      const defaultName = playerIdx === 1 ? '1. Seyirci' : '2. Seyirci';
      if (!pid) {
        // R016: manuel seçime dönüldüğünde otomatik doldurulan isim de sıfırlanır
        const wasAuto = !!target.pid;
        target.pid = null;
        if (wasAuto) target.name = defaultName;
        this.persistDuoProfiles();
        this.render();
        this.bindEvents();
        return;
      }
      const taste = this.computeProfileTaste(pid);
      if (!taste) {
        if (window.app && window.app.showToast) window.app.showToast('Bu profilde yeterli izleme geçmişi yok.', 'info');
        // R016: başarısız seçimde <select> eski (kayıtlı) duruma geri döner
        this.render();
        this.bindEvents();
        return;
      }
      target.genres = taste.genres;
      target.name = taste.name;
      target.pid = pid;
      target.rating = taste.rating;
      target.duration = taste.duration;
      this.persistDuoProfiles();
      this.render();
      this.bindEvents();
      if (window.app && window.app.showToast) window.app.showToast('🎯 ' + target.name + ' profili uygulandı (' + taste.count + ' izleme).', 'success');
    },

    persistDuoProfiles() {
      try { localStorage.setItem(this.DUO_PROFILES_KEY, JSON.stringify({ p1: this.p1.pid || null, p2: this.p2.pid || null })); } catch (err) { /* yoksay */ }
    },

    restoreDuoProfiles() {
      try {
        const saved = JSON.parse(localStorage.getItem(this.DUO_PROFILES_KEY) || '{}');
        const valid = new Set(this.getProfileOptions().map(p => p.pid));
        // R016: sadece pid+isim değil, profilin TÜM zevki (tür/puan/süre) geri yüklenir.
        // Önceden yenilemeden sonra isim kalıyor ama türler varsayılana dönüyordu.
        [['p1', this.p1], ['p2', this.p2]].forEach(([key, target]) => {
          const pid = saved[key];
          target.pid = null;
          if (!pid || !valid.has(pid)) return;
          const taste = this.computeProfileTaste(pid);
          if (!taste) return; // profilde izleme geçmişi kalmamış → manuel mod
          target.pid = pid;
          target.name = taste.name;
          target.genres = taste.genres;
          target.rating = taste.rating;
          target.duration = taste.duration;
        });
        // Geçersiz/silinmiş profil kimlikleri depodan temizlenir
        const clean = { p1: this.p1.pid || null, p2: this.p2.pid || null };
        if (saved.p1 !== clean.p1 || saved.p2 !== clean.p2) {
          localStorage.setItem(this.DUO_PROFILES_KEY, JSON.stringify(clean));
        }
      } catch (err) { /* yoksay */ }
    },

    /** Seçili iki profilin izleme geçmişi birleşimi (ikisinin de izledikleri). */
    getDualWatchedIds() {
      const ids = new Set();
      [this.p1.pid, this.p2.pid].forEach(pid => {
        if (!pid) return;
        this.getProfileWatchedMovies(pid).forEach(m => ids.add(m.id));
      });
      return ids;
    },

    // --- R009/4: DUO ARŞİVİ ---
    ARCHIVE_KEY: 'cine3d_duo_archive',

    loadArchive() {
      try {
        const raw = JSON.parse(localStorage.getItem(this.ARCHIVE_KEY) || '[]');
        return Array.isArray(raw) ? raw.filter(x => x && x.movieId) : [];
      } catch (err) { return []; }
    },

    saveArchive(list) {
      try { localStorage.setItem(this.ARCHIVE_KEY, JSON.stringify(list.slice(0, 30))); } catch (err) { /* yoksay */ }
    },

    addToArchive(entry) {
      const list = this.loadArchive();
      if (list.some(x => x.movieId === entry.movieId && x.p1 === entry.p1 && x.p2 === entry.p2)) {
        return false;
      }
      list.unshift(entry);
      this.saveArchive(list);
      this.renderArchive();
      return true;
    },

    removeFromArchive(id) {
      this.saveArchive(this.loadArchive().filter(x => x.id !== id));
      this.renderArchive();
    },

    renderArchive() {
      const box = document.getElementById('duo-archive');
      if (!box) return;
      const list = this.loadArchive();
      if (!list.length) { box.innerHTML = ''; return; }

      box.innerHTML = `
        <div class="duo-archive-head">💾 Duo Arşivi <span>(${list.length})</span></div>
        <div class="duo-archive-list">
          ${list.map(x => {
            const mv = (window.app && window.app.movies.find(m => m.id === x.movieId)) || { title: x.movieTitle || x.movieId, posterUrl: '' };
            return `<div class="duo-archive-item">
              <img src="${esc(mv.posterUrl || '')}" alt="${esc(mv.title)}" loading="lazy" />
              <div class="dai-info">
                <div class="dai-title">${esc(mv.title)}</div>
                <div class="dai-meta">%<strong>${Number(x.pct) || 0}</strong> uyum · ${esc(x.p1)} + ${esc(x.p2)}</div>
              </div>
              <button type="button" class="dai-del" data-archive-id="${esc(x.id)}" title="Arşivden sil" aria-label="${esc(mv.title)} kaydını arşivden sil">🗑</button>
            </div>`;
          }).join('')}
        </div>`;

      box.querySelectorAll('.dai-del').forEach(btn => {
        btn.addEventListener('click', () => this.removeFromArchive(btn.dataset.archiveId));
      });
    },

    init() {
      if (this.inited) return;
      this.inited = true;
      this.buildGenreList();
      // R014/1: kayıtlı duo profil tercihlerini geri yükle
      this.restoreDuoProfiles();
      this.renderArchive();
      this.render();
      this.bindEvents();
    },

    render() {
      const sec = document.getElementById('duo-match-section');
      if (!sec) return;

      sec.innerHTML = `
        <div class="duo-container">
          <div class="duo-header-row">
            <div class="duo-title-wrap">
              <div class="duo-pill-badge">
                <span class="duo-badge-dot"></span>
                <span>İKİ KİŞİLİK SİNEMA UZLAŞMA MOTORU</span>
              </div>
              <h3 class="duo-main-title">Birlikte Ne İzleyelim?</h3>
              <p class="duo-subtitle-text">
                İki farklı zevk, tek bir başyapıtta buluşuyor! İki seyirci de tercihlerini seçsin, Cine3D kataloğu tarayıp ortak kesişim filmini bulsun.
              </p>
            </div>
            <div class="duo-quick-presets">
              <button class="duo-preset-btn" data-preset="couple">💑 Çift Gecesi</button>
              <button class="duo-preset-btn" data-preset="friends">🍿 İki Kanka</button>
              <button class="duo-preset-btn" data-preset="family">👨‍👩‍👦 Aile Modu</button>
            </div>
          </div>

          <div class="duo-cockpit-grid" id="duo-cockpit-grid">
            <!-- Seyirci 1 Kartı -->
            <div class="duo-player-card player-1" id="duo-card-p1">
              <div class="dpc-header">
                <span class="dpc-avatar">👤</span>
                <div class="dpc-name-box">
                  <input type="text" class="dpc-name-input" id="duo-p1-name" value="${esc(this.p1.name)}" maxlength="20" placeholder="1. Seyirci" />
                  <span class="dpc-sub">İlk Tercih Sahibi</span>
                </div>
              </div>

              <div class="dpc-section">
                <label class="dpc-label">Profilden Zevk Al (otomatik doldur):</label>
                <select class="dpc-profile-select" data-player="1">
                  <option value="">✍️ Manuel Seçim</option>
                  ${(this.getProfileOptions()).map(p => `<option value="${esc(p.pid)}" ${this.p1.pid === p.pid ? 'selected' : ''}>${esc(p.emoji)} ${esc(p.name)}</option>`).join('')}
                </select>
              </div>
              
              <div class="dpc-section">
                <label class="dpc-label">Seveceği Türler (En fazla 3 adet):</label>
                <div class="dpc-genre-chips" id="duo-p1-genres">
                  ${this.genresList.map(g => `
                    <button type="button" class="dpc-genre-chip ${this.p1.genres.includes(g) ? 'active' : ''}" data-player="1" data-genre="${esc(g)}">${esc(g)}</button>
                  `).join('')}
                </div>
              </div>

              <div class="dpc-section">
                <label class="dpc-label">Süre & Ritim Tercihi:</label>
                <div class="dpc-pill-group" id="duo-p1-duration">
                  <button type="button" class="dpc-pill ${this.p1.duration === 'any' ? 'active' : ''}" data-player="1" data-val="any">⏱️ Fark Etmez</button>
                  <button type="button" class="dpc-pill ${this.p1.duration === 'quick' ? 'active' : ''}" data-player="1" data-val="quick">⚡ &lt; 100 dk</button>
                  <button type="button" class="dpc-pill ${this.p1.duration === 'standard' ? 'active' : ''}" data-player="1" data-val="standard">🎬 100-140 dk</button>
                  <button type="button" class="dpc-pill ${this.p1.duration === 'epic' ? 'active' : ''}" data-player="1" data-val="epic">🍿 140+ dk</button>
                </div>
              </div>

              <div class="dpc-section">
                <label class="dpc-label">Puan Beklentisi:</label>
                <div class="dpc-pill-group" id="duo-p1-rating">
                  <button type="button" class="dpc-pill ${this.p1.rating === 7.5 ? 'active' : ''}" data-player="1" data-val="7.5">⭐ 7.5+ İyi</button>
                  <button type="button" class="dpc-pill ${this.p1.rating === 8.0 ? 'active' : ''}" data-player="1" data-val="8.0">🔥 8.0+ Harika</button>
                  <button type="button" class="dpc-pill ${this.p1.rating === 8.5 ? 'active' : ''}" data-player="1" data-val="8.5">👑 8.5+ Başyapıt</button>
                </div>
              </div>
            </div>

            <!-- Ortadaki Ayracı -->
            <div class="duo-cockpit-divider">
              <div class="dcd-heart-glow">💖</div>
              <div class="dcd-line"></div>
            </div>

            <!-- Seyirci 2 Kartı -->
            <div class="duo-player-card player-2" id="duo-card-p2">
              <div class="dpc-header">
                <span class="dpc-avatar">👥</span>
                <div class="dpc-name-box">
                  <input type="text" class="dpc-name-input" id="duo-p2-name" value="${esc(this.p2.name)}" maxlength="20" placeholder="2. Seyirci" />
                  <span class="dpc-sub">İkinci Tercih Sahibi</span>
                </div>
              </div>

              <div class="dpc-section">
                <label class="dpc-label">Profilden Zevk Al (otomatik doldur):</label>
                <select class="dpc-profile-select" data-player="2">
                  <option value="">✍️ Manuel Seçim</option>
                  ${(this.getProfileOptions()).map(p => `<option value="${esc(p.pid)}" ${this.p2.pid === p.pid ? 'selected' : ''}>${esc(p.emoji)} ${esc(p.name)}</option>`).join('')}
                </select>
              </div>
              
              <div class="dpc-section">
                <label class="dpc-label">Seveceği Türler (En fazla 3 adet):</label>
                <div class="dpc-genre-chips" id="duo-p2-genres">
                  ${this.genresList.map(g => `
                    <button type="button" class="dpc-genre-chip ${this.p2.genres.includes(g) ? 'active' : ''}" data-player="2" data-genre="${esc(g)}">${esc(g)}</button>
                  `).join('')}
                </div>
              </div>

              <div class="dpc-section">
                <label class="dpc-label">Süre & Ritim Tercihi:</label>
                <div class="dpc-pill-group" id="duo-p2-duration">
                  <button type="button" class="dpc-pill ${this.p2.duration === 'any' ? 'active' : ''}" data-player="2" data-val="any">⏱️ Fark Etmez</button>
                  <button type="button" class="dpc-pill ${this.p2.duration === 'quick' ? 'active' : ''}" data-player="2" data-val="quick">⚡ &lt; 100 dk</button>
                  <button type="button" class="dpc-pill ${this.p2.duration === 'standard' ? 'active' : ''}" data-player="2" data-val="standard">🎬 100-140 dk</button>
                  <button type="button" class="dpc-pill ${this.p2.duration === 'epic' ? 'active' : ''}" data-player="2" data-val="epic">🍿 140+ dk</button>
                </div>
              </div>

              <div class="dpc-section">
                <label class="dpc-label">Puan Beklentisi:</label>
                <div class="dpc-pill-group" id="duo-p2-rating">
                  <button type="button" class="dpc-pill ${this.p2.rating === 7.5 ? 'active' : ''}" data-player="2" data-val="7.5">⭐ 7.5+ İyi</button>
                  <button type="button" class="dpc-pill ${this.p2.rating === 8.0 ? 'active' : ''}" data-player="2" data-val="8.0">🔥 8.0+ Harika</button>
                  <button type="button" class="dpc-pill ${this.p2.rating === 8.5 ? 'active' : ''}" data-player="2" data-val="8.5">👑 8.5+ Başyapıt</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Eşleştir Butonu -->
          <div class="duo-actions-row">
            <button class="btn-duo-match" id="btn-duo-match">
              <span class="bdm-icon">🔮</span>
              <span>Ortak Filmi Bul ve Eşleştir</span>
              <span class="bdm-sparkle">✦</span>
            </button>
          </div>

          <!-- Eşleşme Sonuç Kartı -->
          <div class="duo-result-card hidden" id="duo-result-card"></div>

          <!-- R009/4: Duo arşivi -->
          <div class="duo-archive" id="duo-archive"></div>
        </div>
      `;
    },

    bindEvents() {
      const sec = document.getElementById('duo-match-section');
      if (!sec) return;

      sec.querySelector('#duo-p1-name')?.addEventListener('input', (e) => {
        this.p1.name = e.target.value.trim() || '1. Seyirci';
      });
      sec.querySelector('#duo-p2-name')?.addEventListener('input', (e) => {
        this.p2.name = e.target.value.trim() || '2. Seyirci';
      });

      // R014/1: profil seçici — profilden zevk otomatik doldurma
      sec.querySelectorAll('.dpc-profile-select').forEach(sel => {
        sel.addEventListener('change', () => {
          this.applyProfileTaste(parseInt(sel.dataset.player, 10), sel.value || null);
          playSound('playWhoosh');
        });
      });

      sec.querySelectorAll('.dpc-genre-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const player = chip.dataset.player;
          const genre = chip.dataset.genre;
          const target = player === '1' ? this.p1 : this.p2;
          const idx = target.genres.indexOf(genre);

          if (idx >= 0) {
            target.genres.splice(idx, 1);
            chip.classList.remove('active');
          } else {
            if (target.genres.length >= 3) {
              const removed = target.genres.shift();
              sec.querySelector(`.dpc-genre-chip[data-player="${player}"][data-genre="${removed}"]`)?.classList.remove('active');
            }
            target.genres.push(genre);
            chip.classList.add('active');
          }
          playSound('playHover');
        });
      });

      sec.querySelectorAll('.dpc-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const player = pill.dataset.player;
          const target = player === '1' ? this.p1 : this.p2;
          const parent = pill.parentElement;
          parent.querySelectorAll('.dpc-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');

          if (parent.id.includes('duration')) {
            target.duration = pill.dataset.val;
          } else if (parent.id.includes('rating')) {
            target.rating = parseFloat(pill.dataset.val) || 7.5;
          }
          playSound('playHover');
        });
      });

      sec.querySelectorAll('.duo-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const preset = btn.dataset.preset;
          if (preset === 'couple') {
            this.p1.genres = ['Romantik', 'Dram', 'Komedi'];
            this.p2.genres = ['Gizem', 'Gerilim', 'Dram'];
          } else if (preset === 'friends') {
            this.p1.genres = ['Bilim Kurgu', 'Aksiyon'];
            this.p2.genres = ['Komedi', 'Macera'];
          } else if (preset === 'family') {
            this.p1.genres = ['Animasyon', 'Macera'];
            this.p2.genres = ['Komedi', 'Fantastik'];
          }
          this.render();
          this.bindEvents();
          playSound('playWhoosh');
        });
      });

      sec.querySelector('#btn-duo-match')?.addEventListener('click', () => {
        this.runMatch();
      });
    },

    runMatch() {
      const allMovies = (window.app && Array.isArray(window.app.movies)) ? window.app.movies : [];
      if (!allMovies.length) return;

      // R014/1: iki profil de seçiliyse ikisinin de İZLEDİKLERİ dışlanır
      const dualSeen = (this.p1.pid && this.p2.pid) ? this.getDualWatchedIds() : null;
      const pool = dualSeen ? allMovies.filter(m => !dualSeen.has(m.id)) : allMovies;

      const g1 = this.p1.genres;
      const g2 = this.p2.genres;
      const minRating = Math.min(this.p1.rating, this.p2.rating);

      const scored = pool.map(m => {
        let score = 0;
        const genres = Array.isArray(m.genres) ? m.genres : [];
        const shared = genres.filter(g => g1.includes(g) && g2.includes(g));
        const p1Hit = genres.filter(g => g1.includes(g));
        const p2Hit = genres.filter(g => g2.includes(g));

        score += shared.length * 45;

        if (p1Hit.length > 0 && p2Hit.length > 0) {
          score += 35;
        } else if (p1Hit.length > 0 || p2Hit.length > 0) {
          score += 15;
        } else {
          score -= 20;
        }

        score += ((m.imdbRating || 8.0) - 7.0) * 12;

        if (this.p1.duration !== 'any' || this.p2.duration !== 'any') {
          const mins = (window.app && typeof window.app.parseDurationMinutes === 'function') 
            ? window.app.parseDurationMinutes(m.duration) : 120;
          if (this.p1.duration === 'quick' && mins < 100) score += 10;
          if (this.p2.duration === 'quick' && mins < 100) score += 10;
          if (this.p1.duration === 'epic' && mins >= 140) score += 10;
          if (this.p2.duration === 'epic' && mins >= 140) score += 10;
        }

        if ((m.imdbRating || 8.0) < minRating) {
          score -= 25;
        }

        // Skoru 40-99 aralığına yay (paylaşılan tür yoksa düşük, tam uyumda yüksek)
        const matchPct = Math.min(99, Math.max(40, Math.round(52 + score / 4.2)));

        return {
          movie: m,
          score,
          matchPct,
          sharedGenres: shared,
          p1Genres: p1Hit,
          p2Genres: p2Hit
        };
      });

      scored.sort((a, b) => b.score - a.score);
      this.candidates = scored.slice(0, 6);
      this.currentIndex = 0;

      playSound('playTaDum');
      this.renderResult();
    },

    renderResult() {
      const box = document.getElementById('duo-result-card');
      if (!box || !this.candidates.length) return;

      const item = this.candidates[this.currentIndex];
      const m = item.movie;
      const p1Name = esc(this.p1.name);
      const p2Name = esc(this.p2.name);
      // R014/1: iki profil seçiliyse ortak seçim rozeti
      const dualNote = (this.p1.pid && this.p2.pid)
        ? `🤝 ${p1Name} + ${p2Name} için ortak seçim — ikisinin de izlemedikleri arasından`
        : 'İki taraf için de mükemmel uzlaşma filmi';

      const p1Reason = item.p1Genres.length > 0 
        ? `${p1Name}'ın istediği ${item.p1Genres.join(', ')} unsurlarını barındırıyor.` 
        : `${p1Name}'a yeni bir sinematik tat sunacak.`;
      const p2Reason = item.p2Genres.length > 0 
        ? `${p2Name}'ın sevdiği ${item.p2Genres.join(', ')} tonlarına mükemmel uyuyor.` 
        : `${p2Name}'ın yüksek sinema zevkine hitap eden bir kurguya sahip.`;

      const safeTitle = esc(m.title);
      const safeGenre = esc((m.genres && m.genres[0]) || 'Sinema');

      box.classList.remove('hidden');
      box.innerHTML = `
        <div class="drc-badge-row">
          <div class="drc-score-pill">
            <span>✨</span>
            <span>%${item.matchPct} Zevk Uyumu Bulundu!</span>
          </div>
          <span class="drc-verdict-title">${dualNote}</span>
        </div>

        <div class="drc-reasons-grid">
          <div class="drc-reason-box p1-reason">
            <span class="drb-who">💙 ${p1Name} Neden Sevecek?</span>
            <p class="drb-text">${p1Reason}</p>
          </div>
          <div class="drc-reason-box p2-reason">
            <span class="drb-who">💖 ${p2Name} Neden Sevecek?</span>
            <p class="drb-text">${p2Reason}</p>
          </div>
        </div>

        <div class="drc-movie-showcase">
          <div class="drc-poster-wrap">
            <img class="drc-poster-img" src="${esc(m.posterUrl)}" alt="${safeTitle}" data-title="${safeTitle}" data-genre="${safeGenre}" data-rating="${esc(m.imdbRating)}" onerror="this.onerror=null; this.src=getFallbackPoster(this.dataset.title, this.dataset.genre, this.dataset.rating);" />
          </div>
          <div class="drc-movie-info">
            <h4 class="drc-movie-title">${esc(m.title)}</h4>
            <div class="drc-movie-meta-chips">
              <span class="drc-meta-chip imdb">⭐ ${m.imdbRating}</span>
              <span class="drc-meta-chip">${m.year}</span>
              <span class="drc-meta-chip">${m.duration || 'Standart'}</span>
              ${(Array.isArray(m.genres) ? m.genres : []).map(g => `<span class="drc-meta-chip">${esc(g)}</span>`).join('')}
            </div>
            <p class="drc-summary">${esc(m.summary || m.tagline || 'Muhteşem bir yapım.')}</p>
            ${item.sharedGenres.length ? `<div class="drc-shared-row"><span class="drc-shared-label">🤝 Ortak türler:</span>${item.sharedGenres.map(g => `<span class="drc-shared-chip">${esc(g)}</span>`).join('')}</div>` : ''}
            <div class="drc-actions">
              <button class="btn-drc-play" id="btn-duo-open-movie">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Fragmanı Başlat & Detaylar</span>
              </button>
              <button class="btn-drc-alt" id="btn-duo-watchlist">
                <span>${(window.app && window.app.isMovieInWatchlist && window.app.isMovieInWatchlist(m.id)) ? '💔 Listemden Çıkar' : '❤ Listeme Ekle'}</span>
              </button>
              ${this.candidates.length > 1 ? `
                <button class="btn-drc-alt" id="btn-duo-next-alt">
                  <span>🎲 Başka Ortak Alternatif (${this.currentIndex + 1}/${this.candidates.length})</span>
                </button>
              ` : ''}
              <button class="btn-drc-alt" id="btn-duo-archive">
                <span>💾 Arşive kaydet</span>
              </button>
              <button class="btn-drc-alt" id="btn-duo-repick">
                <span>🔄 Tercihleri Değiştir</span>
              </button>
            </div>
          </div>
        </div>
      `;

      box.querySelector('#btn-duo-open-movie')?.addEventListener('click', () => {
        if (window.app && typeof window.app.openModal === 'function') {
          window.app.openModal(m, true);
        }
      });

      box.querySelector('#btn-duo-archive')?.addEventListener('click', (e) => {
        const added = this.addToArchive({
          id: 'duo_' + Date.now().toString(36),
          at: Date.now(),
          p1: this.p1.name,
          p2: this.p2.name,
          movieId: m.id,
          movieTitle: m.title,
          pct: item.matchPct
        });
        const btn = e.currentTarget;
        if (btn) btn.querySelector('span').textContent = added ? '✅ Arşivde' : '✅ Zaten arşivde';
        playSound('playWhoosh');
      });

      box.querySelector('#btn-duo-watchlist')?.addEventListener('click', (e) => {
        if (window.app && typeof window.app.toggleWatchlist === 'function') {
          window.app.toggleWatchlist(m);
          const btn = e.currentTarget;
          if (btn) {
            const inList = window.app.isMovieInWatchlist(m.id);
            btn.querySelector('span').textContent = inList ? '💔 Listemden Çıkar' : '❤ Listeme Ekle';
          }
        }
      });

      box.querySelector('#btn-duo-next-alt')?.addEventListener('click', () => {
        this.currentIndex = (this.currentIndex + 1) % this.candidates.length;
        playSound('playWhoosh');
        this.renderResult();
      });

      box.querySelector('#btn-duo-repick')?.addEventListener('click', () => {
        box.classList.add('hidden');
        document.getElementById('duo-cockpit-grid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // =========================================================================
  // BAŞLATMA
  // =========================================================================
  function init(app) {
    if (F.inited) return;
    F.inited = true;
    F.app = app;

    TrailerPreview.bindGlobal();
    Reco.bindGlobal();
    Reco.refresh();
    Tournament.bindGlobal();

    // Tahmin oyunu ve Birlikte Ne İzleyelim sekmeleri ilk açıldığında kurulur
    document.querySelector('.discovery-tab-btn[data-tab-panel="guess-game-section"]')
      ?.addEventListener('click', () => { GuessGame.init(); if (GuessGame.renderGuessFamilyPanel) GuessGame.renderGuessFamilyPanel(); });
    document.querySelector('.discovery-tab-btn[data-tab-panel="duo-match-section"]')
      ?.addEventListener('click', () => DuoMatcher.init());
  }

  function waitForApp(attempt) {
    if (window.app && Array.isArray(window.app.movies) && window.app.movies.length > 0) {
      init(window.app);
      return;
    }
    if (attempt > 100) return; // ~10 sn sonra vazgeç
    setTimeout(() => waitForApp((attempt || 0) + 1), 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => waitForApp(0));
  } else {
    waitForApp(0);
  }

  // Dışarıdan erişim köprüsü (konsol / diğer modüller için)
  window.cine3dFeatures = {
    refreshRecommendations: () => Reco.refresh(),
    reco: Reco, // modal DNA benzerliği için
    tournament: Tournament,
    guessGame: GuessGame,
    duoMatcher: DuoMatcher,
    _dbg: {
      isInited: () => F.inited,
      hasApp: () => !!(F.app && Array.isArray(F.app.movies) && F.app.movies.length),
      preview: TrailerPreview,
      seedMovieById: getMovieById
    }
  };
})();
