/**
 * CINE3D - 3D Coverflow Sinematik Karusel
 * Kartların 3 boyutlu silindirik perspektifte döndüğü interaktif mod
 */

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
    this.bindEvents();
    this.updateCarousel();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="coverflow-stage">
        <div class="coverflow-track" id="coverflow-track">
          ${this.movies.map((movie, index) => `
            <div class="coverflow-card" data-index="${index}" data-movie-id="${movie.id}">
              <div class="coverflow-card-inner">
                <img src="${movie.posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.onerror=null; this.src=getFallbackPoster('${(movie.title || '').replace(/'/g, "\\'")}', '${(movie.genres && movie.genres[0]) || 'Sinema'}', '${movie.imdbRating || '8.0'}');" />
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
                <span>${p.name}'da İzle</span>
              </a>
            `).join('')}
          ` : `
            <span class="hud-no-tr-pill" title="Bu yapımın Türkiye'de resmi bir yayıncısı bulunmamaktadır.">
              <span class="no-tr-dot"></span>
              TR yayıncısı bulunamadı
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
      card.addEventListener('click', (e) => {
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

    // Klavye yön tuşları
    window.addEventListener('keydown', (e) => {
      const coverflowWrapper = document.getElementById('coverflow-view-section');
      if (coverflowWrapper && !coverflowWrapper.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') this.next();
        if (e.key === 'ArrowLeft') this.prev();
      }
    });

    // Fare tekerleğiyle geçiş
    if (this.container) {
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
