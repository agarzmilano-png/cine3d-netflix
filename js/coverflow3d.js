/**
 * CINE3D - 3D Coverflow Sinematik Karusel
 * Kartların 3 boyutlu silindirik perspektifte döndüğü interaktif mod
 */

function escHtmlCover(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

class Coverflow3D {
  constructor(containerId, movies, onSelectMovie) {
    this.container = document.getElementById(containerId);
    this.movies = movies;
    this.onSelectMovie = onSelectMovie;
    this.currentIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.dragOffset = 0;

    this.render();
    this.track = document.getElementById('coverflow-track');
    this.bindEvents();
    this.updateCarousel();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="coverflow-stage">
        <div class="coverflow-track" id="coverflow-track">
          ${this.movies.map((movie, index) => `
            <div class="coverflow-card" data-index="${index}" data-movie-id="${movie.id}" role="button" tabindex="${index === this.currentIndex ? '0' : '-1'}" aria-label="${escHtmlCover(movie.title)} — detayları aç">
              <div class="coverflow-card-inner">
                <img src="${movie.posterUrl}" alt="${escHtmlCover(movie.title)}" loading="lazy" onerror="this.onerror=null; this.src=getFallbackPoster('${(movie.title || '').replace(/'/g, "\\'")}', '${(movie.genres && movie.genres[0]) || 'Sinema'}', '${movie.imdbRating || '8.0'}');" />
                <div class="coverflow-reflection"></div>
                <div class="coverflow-overlay">
                  <div class="coverflow-imdb-badge">
                    <span class="star-icon">★</span>
                    <span class="score">${movie.imdbRating}</span>
                  </div>
                  <h3 class="coverflow-title">${movie.title}</h3>
                  <p class="coverflow-year">${movie.year} • ${movie.duration}</p>
                  <div class="coverflow-genres">
                    ${(Array.isArray(movie.genres) ? movie.genres : []).slice(0, 2).map(g => `<span class="coverflow-genre-tag">${g}</span>`).join('')}
                  </div>
                  <button class="coverflow-detail-btn" data-movie-id="${movie.id}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    Konu & Fragman
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- Kontroller -->
        <button class="coverflow-nav-btn prev" id="coverflow-prev" aria-label="Önceki Film">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="coverflow-nav-btn next" id="coverflow-next" aria-label="Sonraki Film">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <!-- Alt Aktif Film Bilgi Barı -->
        <div class="coverflow-active-info" id="coverflow-active-info"></div>
      </div>
    `;

    this.cards = this.container.querySelectorAll('.coverflow-card');
    this.track = document.getElementById('coverflow-track');
    this.infoContainer = document.getElementById('coverflow-active-info');
  }

  updateCarousel() {
    if (!this.cards || this.cards.length === 0) return;

    const total = this.cards.length;

    this.cards.forEach((card, i) => {
      const diff = i - this.currentIndex;
      const absDiff = Math.abs(diff);

      // Klavye: yalnızca aktif kart Tab sırasına girer
      card.setAttribute('tabindex', i === this.currentIndex ? '0' : '-1');

      // Odak takibi: odak bir coverflow kartındaysa seçimle birlikte taşınır
      const focused = document.activeElement;
      if (focused && focused.classList && focused.classList.contains('coverflow-card')) {
        const activeCard = this.cards[this.currentIndex];
        if (activeCard && activeCard !== focused) {
          try { activeCard.focus({ preventScroll: true }); } catch (e) { activeCard.focus(); }
        }
      }

      card.classList.remove('active', 'prev', 'next', 'hidden');

      if (diff === 0) {
        // Tam ortadaki aktif kart
        card.classList.add('active');
        card.style.transform = `translateX(0px) translateZ(280px) rotateY(0deg) scale(1.15)`;
        card.style.opacity = '1';
        card.style.zIndex = '100';
        card.style.filter = 'drop-shadow(0 20px 40px rgba(229, 9, 20, 0.45))';
      } else if (absDiff <= 4) {
        // Yanlardaki açılı 3D kartlar
        const direction = diff > 0 ? 1 : -1;
        const translateX = direction * (180 + (absDiff - 1) * 110);
        const translateZ = 120 - absDiff * 70;
        const rotateY = direction * -45;
        const opacity = Math.max(0.2, 1 - absDiff * 0.22);
        const scale = 1 - absDiff * 0.08;

        if (diff === -1) card.classList.add('prev');
        if (diff === 1) card.classList.add('next');

        card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.zIndex = `${100 - absDiff * 10}`;
        card.style.filter = 'brightness(0.6) blur(0.5px)';
      } else {
        // Çok uzaktaki kartlar gizlenir
        card.classList.add('hidden');
        card.style.opacity = '0';
        card.style.transform = `translateX(${diff > 0 ? 600 : -600}px) translateZ(-300px) scale(0.5)`;
        card.style.zIndex = '0';
      }
    });

    this.updateActiveInfo();
  }

  updateActiveInfo() {
    if (!this.infoContainer || !this.movies[this.currentIndex]) return;
    const current = this.movies[this.currentIndex];
    const streamInfo = typeof getMovieStreamingInfo === 'function' 
      ? getMovieStreamingInfo(current) 
      : { hasTrProvider: false, statusText: "TR yayıncısı bulunamadı", providers: [], globalProviders: [] };

    this.infoContainer.innerHTML = `
      <div class="active-movie-hud">
        <div class="hud-top">
          <span class="hud-imdb-badge">⭐ IMDb ${current.imdbRating} / 10</span>
          <span class="hud-votes">(${current.imdbVotes} oy)</span>
          <span class="hud-badge-awards">${current.awards || 'Klasik'}</span>
        </div>

        <!-- IMDb Puanı Altında Platform Yönlendirmeleri -->
        <div class="hud-streaming-bar">
          ${streamInfo.hasTrProvider && streamInfo.providers.length > 0 ? `
            <span class="hud-streaming-label">Türkiye Yayıncıları:</span>
            ${streamInfo.providers.map(p => `
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="streaming-logo-pill ${p.badgeClass}" title="${p.name}'da ${current.title} İzle" onclick="event.stopPropagation();">
                ${p.iconSvg}
                <span>${p.name} · ${p.actionLabel}</span>
              </a>
            `).join('')}
          ` : `
            <span class="hud-no-tr-pill" title="Bu yapımın Türkiye'de resmi bir yayıncısı bulunmamaktadır.">
              <span class="no-tr-dot"></span>
              ${streamInfo.statusText}
            </span>
            ${streamInfo.globalProviders && streamInfo.globalProviders.length > 0 ? `
              ${streamInfo.globalProviders.map(p => `
                <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="streaming-logo-pill ${p.badgeClass}" title="${p.name} (Küresel Yayıncı)" onclick="event.stopPropagation();">
                  ${p.iconSvg}
                  <span>${p.name} (Global)</span>
                </a>
              `).join('')}
            ` : ''}
          `}
        </div>

        <h2 class="hud-title">${current.title} <span class="hud-orig">(${current.originalTitle}, ${current.year})</span></h2>
        <p class="hud-tagline">"${current.tagline || 'Sinema Dünyası'}"</p>
        <p class="hud-summary">${(current.summary || '').slice(0, 190)}...</p>
        <div class="hud-actions">
          <button class="btn btn-primary hud-open-btn" data-movie-id="${current.id}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Detaylı İncele & Fragman
          </button>
          <div class="hud-director">Yönetmen: <strong>${current.director}</strong></div>
        </div>
      </div>
    `;

    const openBtn = this.infoContainer.querySelector('.hud-open-btn');
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        if (this.onSelectMovie) this.onSelectMovie(current);
      });
    }
  }

  next() {
    if (this.currentIndex < this.movies.length - 1) {
      this.currentIndex++;
      if (window.cinemaAudio) window.cinemaAudio.playHover();
      this.updateCarousel();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      if (window.cinemaAudio) window.cinemaAudio.playHover();
      this.updateCarousel();
    }
  }

  goTo(index) {
    if (index >= 0 && index < this.movies.length) {
      this.currentIndex = index;
      if (window.cinemaAudio) window.cinemaAudio.playHover();
      this.updateCarousel();
    }
  }

  bindEvents() {
    const nextBtn = document.getElementById('coverflow-next');
    const prevBtn = document.getElementById('coverflow-prev');

    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());

    // Kart tıklamaları
    this.cards.forEach((card, index) => {
      // Klavye: Enter/Space kartın tıklama davranışını tetikler
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          card.click();
        }
      });

      card.addEventListener('click', (e) => {
        // Sürükleme sonrası gelen tıklamayı yoksay
        if (this._suppressClickUntil && Date.now() < this._suppressClickUntil) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        if (index === this.currentIndex) {
          // Ortadaki karta tıklandığında detay aç
          if (this.onSelectMovie) {
            this.onSelectMovie(this.movies[index]);
          }
        } else {
          // Yan karta tıklandığında onu merkeze getir
          this.goTo(index);
        }
      });
    });

    // Klavye yön tuşları — pencere genelinde yalnızca BİR kez bağlanır.
    // (updateData() her filtre değişiminde bindEvents() çağırdığı için dinleyici
    //  birikiyordu; tek ArrowRight 2-3 kart birden atlıyordu.)
    if (!Coverflow3D._keysBound) {
      Coverflow3D._keysBound = true;
      window.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const wrapper = document.getElementById('coverflow-view-section');
        if (!wrapper || wrapper.classList.contains('hidden')) return;
        const inst = (window.app && window.app.coverflowInstance) || null;
        if (!inst) return;
        if (e.key === 'ArrowRight') inst.next();
        else inst.prev();
      });
    }

    // Fare tekerleğiyle geçiş (container kalıcı: yalnızca bir kez bağla)
    if (this.container && !this._containerEventsBound) {
      this.container.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > 25 || Math.abs(e.deltaX) > 25) {
          if (e.deltaY > 0 || e.deltaX > 0) {
            this.next();
          } else {
            this.prev();
          }
        }
      }, { passive: true });
    }

    // (wheel + drag tek bayrakta: ikisi de container'a bağlanır)
    if (this.container && this._containerEventsBound) return;
    if (this.container) this._containerEventsBound = true;

    // --- Sürükle / kaydır (fare + dokunmatik) — parmağı CANLI takip eder ---
    // Mekanik: pointermove sırasında şeridin tamamına translateX(dx) uygulanır
    // (kart transform'larına dokunulmaz). Bırakınca offset sıfırlanır ve mevcut
    // updateCarousel() animasyonu en yakın kartı merkeze getirir.
    if (this.container) {
      let startX = null;
      let startY = null;
      let moved = false;
      const MAX_FOLLOW = 360;   // aşırı sürüklemede şerit ekrandan çıkmasın
      const STEP_PX = 170;      // bırakışta kaç kart ilerleyeceğini belirleyen mesafe

      const setTrackOffset = (dx, animate) => {
        if (!this.track) return;
        if (animate) {
          this.track.style.transition = 'transform 0.2s ease-out';
          this.track.style.transform = 'translateX(0px)';
          clearTimeout(this._trackResetTimer);
          this._trackResetTimer = setTimeout(() => {
            if (this.track) this.track.style.transition = '';
          }, 230);
        } else {
          this.track.style.transition = '';
          this.track.style.transform = dx ? 'translateX(' + dx + 'px)' : '';
        }
      };

      const reset = (animate) => {
        startX = null;
        startY = null;
        this.container.classList.remove('is-dragging');
        setTrackOffset(0, !!animate);
      };

      this.container.addEventListener('pointerdown', (e) => {
        if (e.button != null && e.button !== 0 && e.pointerType === 'mouse') return;
        startX = e.clientX;
        startY = e.clientY;
        moved = false;
        this.container.classList.add('is-dragging');
        try { this.container.setPointerCapture(e.pointerId); } catch (err) { /* sentetik olay */ }
      });

      this.container.addEventListener('pointermove', (e) => {
        if (startX == null) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.abs(dx) > 10 || Math.abs(dy) > 10) moved = true;

        // Dikey kaydırma niyeti varsa yatay takibi bırak (sayfa kaydırma bozulmasın)
        if (Math.abs(dy) > Math.abs(dx) * 1.2) return;
        if (!moved) return;

        const clamped = Math.max(-MAX_FOLLOW, Math.min(MAX_FOLLOW, dx));
        setTrackOffset(clamped, false);
      });

      const finish = (e) => {
        if (startX == null) return;
        const dx = (e.clientX != null) ? e.clientX - startX : 0;
        const dy = (e.clientY != null) ? e.clientY - startY : 0;
        const wasDrag = moved && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy);

        reset(false);
        setTrackOffset(0, true);

        if (!wasDrag) return;

        this._suppressClickUntil = Date.now() + 350;
        // En yakın kartı merkezle: 40px eşik üstünde mesafeye göre 1-3 kart
        const steps = Math.max(1, Math.min(3, Math.round(Math.abs(dx) / STEP_PX)));
        const target = this.currentIndex + (dx < 0 ? steps : -steps);
        this.goTo(target);
      };

      this.container.addEventListener('pointerup', finish);
      this.container.addEventListener('pointercancel', () => reset(true));
      this.container.addEventListener('pointerleave', (e) => { if (e.buttons === 0) reset(true); });
      this.container.addEventListener('lostpointercapture', () => { if (startX != null) reset(true); });
    }
  }

  updateData(newMovies) {
    this.movies = newMovies;
    this.currentIndex = 0;
    this.render();
    this.bindEvents();
    this.updateCarousel();
  }
}

window.Coverflow3D = Coverflow3D;
