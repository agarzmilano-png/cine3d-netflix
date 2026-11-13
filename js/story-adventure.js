/**
 * CINE3D - Kendi Seçimini Kendin Yarat (İnteraktif Hikaye Akışı) Motoru
 * Kullanıcının 5 adımda yaptığı tercihlere göre tek bir sinematik başyapıt belirler.
 */

// HTML özniteliği (alt="...") için kaçış yardımcısı — features.js'teki esc() davranışı
function escAttr(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Inline onerror JS'i için başlık kaçışı — features.js'teki posterFallback deseni
function posterFallbackTitle(value) {
  return String(value == null ? '' : value)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}

const STORY_STEPS = [
  {
    stepIndex: 1,
    badge: 'SAHNE 1 • İLK KARŞILAŞMA',
    question: 'Karanlık ve tekinsiz bir sokaktasın. Yağmur bardaktan boşalırcasına yağıyor. Sokak lambasının cızırtılı ışığında önüne aniden ne çıksın?',
    hint: 'Seni en çok heyecanlandıran görsel ve başlangıç senaryosunu seç:',
    options: [
      {
        id: 'opt_crime_killer',
        tag: 'A',
        icon: '🔪',
        secondaryIcon: '🕵️',
        title: 'Bir Katil & Gizemli Cinayet İpuçları',
        sub: 'Pardösülü bir dedektif, ıslak sokakta kan izleri ve çözülmesi gereken tekinsiz sırlar.',
        category: 'Gerilim & Gizem',
        scoreKey: 'thrill',
        color: '#ec4899',
        leadThemes: ['seven', 'fight-club', 'shutter-island', 'silence-of-the-lambs', 'dark-knight', 'zodiac', 'memento']
      },
      {
        id: 'opt_scifi_ship',
        tag: 'B',
        icon: '🛸',
        secondaryIcon: '🌌',
        title: 'Gökyüzünü Yaran Bir Uzay Gemisi',
        sub: 'Sessizliği delen bir gök gürültüsü, neon parıltılar ve yıldızlararası bir boyut çağrısı.',
        category: 'Bilim Kurgu & Evren',
        scoreKey: 'mind-bending',
        color: '#06b6d4',
        leadThemes: ['inception', 'interstellar', 'the-matrix', 'dark', 'blade-runner-2049', 'dune-2', 'tenet']
      },
      {
        id: 'opt_comedy_crew',
        tag: 'C',
        icon: '😂',
        secondaryIcon: '🚗',
        title: 'Kahkahalarla Gülen Çılgın Bir Arkadaş Grubu',
        sub: 'Eski model bir arabayla yanına yanaşan, seni bu kasvetten kaçırıp çılgın bir maceraya atacak neşeli bir ekip.',
        category: 'Komedi & Eğlence',
        scoreKey: 'chill-comedy',
        color: '#eab308',
        leadThemes: ['the-hangover', 'superbad', 'the-truman-show', 'deadpool', 'olumlu-dunya', 'the-office', 'gora']
      },
      {
        id: 'opt_emotional_stranger',
        tag: 'D',
        icon: '💔',
        secondaryIcon: '🥀',
        title: 'Yağmurda Gözyaşlarıyla Veda Eden Bir Yabancı',
        sub: 'Gözyaşları içinde son bir mektup bırakan, kalbini derinden sarsacak hüzünlü ve unutulmaz bir dram.',
        category: 'Duygusal Dram & Ağlatan Başyapıt',
        scoreKey: 'tearjerker',
        color: '#f43f5e',
        leadThemes: ['the-green-mile', 'life-is-beautiful', 'the-pianist', 'schindlers-list', 'babam-ve-oglum', 'ayla']
      }
    ]
  },
  {
    stepIndex: 2,
    badge: 'SAHNE 2 • ZAMAN VE MEKÂNIN ÖTESİ',
    question: 'Olaylar kontrolden çıktı ve boyut kapısı aralandı! Şimdi kendini hangi dünya ve atmosferde bulmak istersin?',
    hint: 'Ruhunu en çok çeken sinematik evreni belirle:',
    options: [
      {
        id: 'opt_loc_quantum',
        tag: 'A',
        icon: '⏳',
        secondaryIcon: '🌀',
        title: 'Zamanın Büküldüğü Kuantum Labirenti',
        sub: 'Katman katman rüyalar, zaman paradoksları ve yerçekiminin büküldüğü gökdelenler.',
        category: 'Kuantum & Rüyalar',
        scoreKey: 'mind-bending',
        color: '#a855f7',
        leadThemes: ['inception', 'interstellar', 'tenet', 'the-matrix', 'dark', 'source-code']
      },
      {
        id: 'opt_loc_desert',
        tag: 'B',
        icon: '🏜️',
        secondaryIcon: '🔥',
        title: 'Kızgın Çöl Fırtınası & Vahşi Distopya',
        sub: 'Paslı zırhlı araçlar, alev püskürten gitarlar, sonsuz kum tepeleri ve saf adrenalin.',
        category: 'Çöl & Post-Apokaliptik',
        scoreKey: 'adrenaline',
        color: '#ea580c',
        leadThemes: ['mad-max-fury-road', 'dune-2', 'blade-runner-2049', 'fallout', 'reacher']
      },
      {
        id: 'opt_loc_castle',
        tag: 'C',
        icon: '🏰',
        secondaryIcon: '⚔️',
        title: 'Büyülü Hanedanlıklar & Demir Taht',
        sub: 'Taht kavgaları, Valyrian kılıçları, ejderhalar ve destansı hanedanlık entrikaları.',
        category: 'Epik Fantastik & Şatolar',
        scoreKey: 'escapism',
        color: '#38bdf8',
        leadThemes: ['game-of-thrones', 'gladiator', 'harry-potter', 'rings-of-power', 'star-wars-empire']
      },
      {
        id: 'opt_loc_vintage',
        tag: 'D',
        icon: '🏙️',
        secondaryIcon: '🥃',
        title: '1970\'ler Mafya Malikânesi & Dumanlı Caz Kulübü',
        sub: 'Pahalı İtalyan takım elbiseler, viski kadehleri, aile bağı ve gizli intikam fermanları.',
        category: 'Prestij Sinema & Suç',
        scoreKey: 'prestige',
        color: '#b45309',
        leadThemes: ['godfather', 'pulp-fiction', 'fight-club', 'the-intouchables', 'good-will-hunting', 'succession']
      }
    ]
  },
  {
    stepIndex: 3,
    badge: 'SAHNE 3 • BAŞKAHRAMANIN RUHU',
    question: 'Bu hikayenin merkezinde sen varsın. Senin karakterinin en baskın sinematik gücü ne olsun?',
    hint: 'Kendini bu dünyada nasıl tanımlıyorsun?',
    options: [
      {
        id: 'opt_char_genius',
        tag: 'A',
        icon: '🧠',
        secondaryIcon: '♟️',
        title: 'Herkesi Ters Köşeye Yatıran Kusursuz Bir Zeka',
        sub: 'Kimsenin göremediği detayları fark eden, herkesi 5 hamle önceden mat eden bir stratejist.',
        category: 'Dâhi & Akıl Oyunları',
        scoreKey: 'mind-bending',
        color: '#8b5cf6',
        leadThemes: ['inception', 'shutter-island', 'memento', 'seven', 'prestige', 'sherlock']
      },
      {
        id: 'opt_char_warrior',
        tag: 'B',
        icon: '⚡',
        secondaryIcon: '🛡️',
        title: 'Kuralları Tanımayan Korkusuz Bir Savaşçı',
        sub: 'Ölümün gözünün içine gülen, tek başına koca bir orduya meydan okuyan durdurulamaz bir güç.',
        category: 'Gözü Pek Savaşçı',
        scoreKey: 'adrenaline',
        color: '#ef4444',
        leadThemes: ['john-wick-4', 'gladiator', 'dark-knight', 'mad-max-fury-road', 'terminator-2']
      },
      {
        id: 'opt_char_heart',
        tag: 'C',
        icon: '❤️',
        secondaryIcon: '🕊️',
        title: 'Tüm Kötülüklere Rağmen Sevgiye İnanan Bir Kalp',
        sub: 'Karanlığın ortasında bile bir insanın hayatı için her şeyini feda eden, umut aşılayan bir ruh.',
        category: 'Umut & Fedakârlık',
        scoreKey: 'tearjerker',
        color: '#10b981',
        leadThemes: ['the-green-mile', 'life-is-beautiful', 'interstellar', 'schindlers-list', 'ayla', 'hachiko']
      },
      {
        id: 'opt_char_rebel',
        tag: 'D',
        icon: '🃏',
        secondaryIcon: '🎭',
        title: 'Kuralları Alaya Alan Kaotik Bir İsyankâr',
        sub: 'En tehlikeli anda bile espri patlatan, 4. duvarı yıkan ve dünyaya meydan okuyan çılgın bir figür.',
        category: 'Absürt İsyankâr',
        scoreKey: 'chill-comedy',
        color: '#f59e0b',
        leadThemes: ['deadpool', 'the-big-lebowski', 'fight-club', 'the-hangover', 'gora', 'free-guy']
      }
    ]
  },
  {
    stepIndex: 4,
    badge: 'SAHNE 4 • BÜYÜK KIRILMA VE KRİZ',
    question: 'Büyük dönüm noktası geldi çattı! Karşına öyle bir kriz çıktı ki kaderini mühürleyecek hamleyi yapmalısın:',
    hint: 'Hikayenin kırılma anında ne yaparsın?',
    options: [
      {
        id: 'opt_crisis_matrix',
        tag: 'A',
        icon: '🤯',
        secondaryIcon: '💊',
        title: 'Gerçekliği Sorgula: Ya tüm dünya bir yanılsamaysa?',
        sub: 'Sanal illüzyonu kır, simülasyonu ya da rüya katmanını delip mutlak gerçeğe ulaş.',
        category: 'Gerçeklik Sorgusu',
        scoreKey: 'mind-bending',
        color: '#10b981',
        leadThemes: ['the-matrix', 'inception', 'shutter-island', 'the-truman-show', 'dark', 'coherence']
      },
      {
        id: 'opt_crisis_sacrifice',
        tag: 'B',
        icon: '🛡️',
        secondaryIcon: '🌌',
        title: 'Sevdiklerini Kurtarmak İçin Hayatını Feda Et',
        sub: 'Evrenin öbür ucundaki bir kara deliğe de dalsan veya ateşe de atlasan verdiğin sözü tut.',
        category: 'Kutsal Fedakârlık',
        scoreKey: 'tearjerker',
        color: '#38bdf8',
        leadThemes: ['interstellar', 'the-green-mile', 'schindlers-list', 'ayla', 'terminator-2']
      },
      {
        id: 'opt_crisis_revenge',
        tag: 'C',
        icon: '💥',
        secondaryIcon: '🎯',
        title: 'İhanetin Bedelini Ödet: Adalet Merhamet Tanımaz!',
        sub: 'Sana yapılanı unutma; karanlık şehre adaleti kendi ellerinle getir ve intikamını al.',
        category: 'Kanlı İntikam',
        scoreKey: 'adrenaline',
        color: '#f97316',
        leadThemes: ['dark-knight', 'seven', 'john-wick-4', 'gladiator', 'dune-2', 'godfather']
      },
      {
        id: 'opt_crisis_party',
        tag: 'D',
        icon: '🤝',
        secondaryIcon: '🍕',
        title: 'Dünyayı Boş Ver, Dostlarına Sarıl ve Kahkaha At!',
        sub: 'Krizleri arkanda bırak; sevdiklerinle unutulmaz bir gece yaşa ve anın tadını çıkar.',
        category: 'Dostluk & Kahkaha',
        scoreKey: 'chill-comedy',
        color: '#eab308',
        leadThemes: ['the-hangover', 'superbad', 'friends', 'the-office', 'olumlu-dunya', 'modern-family']
      }
    ]
  },
  {
    stepIndex: 5,
    badge: 'SAHNE 5 • BÜYÜK FİNAL VE PERDE',
    question: 'Ve son sahne... Perde yavaşça inerken ekranda ne görmek ve ne hissetmek istersin?',
    hint: 'Sinema salonundan hangi duyguyla ayrılmak istersin?',
    options: [
      {
        id: 'opt_final_twist',
        tag: 'A',
        icon: '🌀',
        secondaryIcon: '🤯',
        title: 'Ağzımı Açık Bırakacak Şok Edici Bir Ters Köşe!',
        sub: 'Ekran karardığında nefesim kesilsin, günlerce filmin sonunu ve detaylarını düşüneyim.',
        category: 'Zihin Felç Eden Ters Köşe',
        scoreKey: 'mind-bending',
        color: '#a855f7',
        leadThemes: ['fight-club', 'shutter-island', 'memento', 'seven', 'prestige', 'inception', 'the-matrix']
      },
      {
        id: 'opt_final_tears',
        tag: 'B',
        icon: '😭',
        secondaryIcon: '🎻',
        title: 'Gözyaşlarımı Tutamayacağım Şiirsel Bir Veda',
        sub: 'Boğazımda koca bir düğüm kalsın, hüznün güzelliğiyle içimdeki tüm duyguları boşaltıp arınayım.',
        category: 'Gözyaşı & Katarsis',
        scoreKey: 'tearjerker',
        color: '#38bdf8',
        leadThemes: ['the-green-mile', 'life-is-beautiful', 'the-pianist', 'babam-ve-oglum', 'schindlers-list', 'ayla']
      },
      {
        id: 'opt_final_epic',
        tag: 'C',
        icon: '🏆',
        secondaryIcon: '⚡',
        title: 'Efsane Müzikler Eşliğinde Zafer ve Adrenalin!',
        sub: 'Tüylerim diken diken olsun, kahraman intikamını almış olarak arkasına bakmadan yürüsün.',
        category: 'Görkemli Zafer & Adrenalin',
        scoreKey: 'adrenaline',
        color: '#ef4444',
        leadThemes: ['mad-max-fury-road', 'gladiator', 'dark-knight', 'dune-2', 'john-wick-4', 'avengers-endgame']
      },
      {
        id: 'opt_final_warmth',
        tag: 'D',
        icon: '✨',
        secondaryIcon: '☀️',
        title: 'İçimi Isıtan, Umut Veren Sıcacık Bir Tebessüm',
        sub: 'Bütün dertlerimi unuttursun, "İyi ki izledim" dedirtip kalbime sıcacık bir sarılma gibi gelsin.',
        category: 'İç Isıtan Huzur & Neşe',
        scoreKey: 'heartwarming',
        color: '#10b981',
        leadThemes: ['the-intouchables', 'the-truman-show', 'amelie', 'good-will-hunting', 'ratatouille', 'ted-lasso']
      }
    ]
  }
];

class StoryAdventureEngine {
  constructor(app) {
    this.app = app;
    this.currentStep = 0; // 0: intro, 1..5: steps, 6: analyzing, 7: destiny
    this.userChoices = [];
    this.targetMovie = null;

    this.container = document.getElementById('story-adventure-section');
    this.introCard = document.getElementById('story-intro-card');
    this.gameBoard = document.getElementById('story-game-board');
    this.analyzingCard = document.getElementById('story-analyzing-card');
    this.destinyCard = document.getElementById('story-destiny-card');

    this.initEvents();
  }

  initEvents() {
    // Başla butonu
    document.getElementById('btn-start-story')?.addEventListener('click', () => {
      this.startStory();
    });

    // Geri butonu
    document.getElementById('btn-story-back')?.addEventListener('click', () => {
      this.goBack();
    });
  }

  startStory() {
    this.currentStep = 1;
    this.userChoices = [];
    this.targetMovie = null;

    if (this.app && typeof this.app.switchDiscoveryTab === 'function') {
      this.app.switchDiscoveryTab('story-adventure-section');
    }

    if (window.cinemaAudio) window.cinemaAudio.playWhoosh();

    if (this.introCard) this.introCard.classList.add('hidden');
    if (this.analyzingCard) this.analyzingCard.classList.add('hidden');
    if (this.destinyCard) this.destinyCard.classList.add('hidden');
    if (this.gameBoard) this.gameBoard.classList.remove('hidden');

    this.renderCurrentStep();
    this.scrollToStory();
  }

  renderCurrentStep() {
    const stepData = STORY_STEPS.find(s => s.stepIndex === this.currentStep);
    if (!stepData) return;

    // Üst bar güncellemeleri
    const stepLabel = document.getElementById('story-step-label');
    const progressFill = document.getElementById('story-progress-bar-fill');
    const backBtn = document.getElementById('btn-story-back');

    if (stepLabel) stepLabel.textContent = `ADIM ${this.currentStep} / 5`;
    if (progressFill) progressFill.style.width = `${(this.currentStep / 5) * 100}%`;
    if (backBtn) backBtn.classList.toggle('hidden', this.currentStep <= 1);

    // Soru ve sahne bilgisi
    const badgeElem = document.getElementById('scenario-badge');
    const questionElem = document.getElementById('scenario-question');
    const hintElem = document.getElementById('scenario-hint');

    if (badgeElem) badgeElem.textContent = stepData.badge;
    if (questionElem) questionElem.textContent = stepData.question;
    if (hintElem) hintElem.textContent = stepData.hint;

    // Seçenek kartları
    const optionsContainer = document.getElementById('story-options-container');
    if (!optionsContainer) return;

    optionsContainer.innerHTML = stepData.options.map(opt => `
      <div class="story-option-card card-3d-tilt" data-option-id="${opt.id}" style="--option-accent: ${opt.color};">
        <div class="story-card-glow" style="background: radial-gradient(circle at center, ${opt.color}33 0%, transparent 70%);"></div>
        <div class="story-card-top">
          <span class="story-tag-pill">${opt.tag}</span>
          <span class="story-category-tag" style="border-color: ${opt.color}66; color: ${opt.color};">${opt.category}</span>
        </div>
        <div class="story-card-visual-row">
          <span class="story-option-icon">${opt.icon}</span>
          <span class="story-option-sec-icon">${opt.secondaryIcon}</span>
        </div>
        <div class="story-card-body">
          <h4 class="story-option-title">${opt.title}</h4>
          <p class="story-option-desc">${opt.sub}</p>
        </div>
        <div class="story-card-footer">
          <span class="story-select-cta" style="color: ${opt.color};">
            <span>Bu Yoldan Git</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </span>
        </div>
      </div>
    `).join('');

    // Kart tıklama dinleyicileri
    optionsContainer.querySelectorAll('.story-option-card').forEach(card => {
      card.addEventListener('click', () => {
        const optionId = card.dataset.optionId;
        const chosenOption = stepData.options.find(o => o.id === optionId);
        if (chosenOption) {
          card.classList.add('selected');
          this.selectOption(chosenOption);
        }
      });

      card.addEventListener('mouseenter', () => {
        if (window.cinemaAudio) window.cinemaAudio.playHover();
      });
    });

    // 3D Parallaks Tilt bağla
    if (this.app && typeof this.app.bind3DTiltToCards === 'function') {
      this.app.bind3DTiltToCards(optionsContainer.querySelectorAll('.story-option-card'));
    }
  }

  selectOption(option) {
    this.userChoices.push(option);

    if (window.cinemaAudio) window.cinemaAudio.playWhoosh();

    if (this.currentStep < 5) {
      this.currentStep++;
      // Yumuşak geçiş
      const board = document.getElementById('story-game-board');
      if (board) {
        board.classList.add('step-fade');
        setTimeout(() => {
          this.renderCurrentStep();
          board.classList.remove('step-fade');
        }, 220);
      } else {
        this.renderCurrentStep();
      }
    } else {
      // 5. Adım tamamlandı -> Analiz ve Kader Ekranına Geç
      this.finishJourneyAndAnalyze();
    }
  }

  goBack() {
    if (this.currentStep > 1) {
      this.userChoices.pop();
      this.currentStep--;
      if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
      this.renderCurrentStep();
    }
  }

  finishJourneyAndAnalyze() {
    this.currentStep = 6;
    if (this.gameBoard) this.gameBoard.classList.add('hidden');
    if (this.analyzingCard) this.analyzingCard.classList.remove('hidden');

    // 1.4 saniye dramatik sinematik DNA analizi
    setTimeout(() => {
      this.targetMovie = this.resolveDestinyMovie(this.userChoices);
      this.renderDestinyReveal(this.targetMovie, this.userChoices);
    }, 1400);
  }

  resolveDestinyMovie(choices) {
    const allMovies = this.app.ageAllowedMovies();

    // 1. choices içindeki leadThemes havuzundan ağırlıklı puanlama
    const scoreMap = {};

    choices.forEach((choice, idx) => {
      const weight = (idx + 1) * 1.5; // Son kararlar daha yüksek ağırlığa sahip
      if (Array.isArray(choice.leadThemes)) {
        choice.leadThemes.forEach(movieId => {
          scoreMap[movieId] = (scoreMap[movieId] || 0) + (10 * weight);
        });
      }
    });

    // 2. Seçilen ruh hali (scoreKey) ve tür uyumu kontrolü
    const chosenScoreKeys = choices.map(c => c.scoreKey).filter(Boolean);

    allMovies.forEach(m => {
      let bonus = 0;
      if (Array.isArray(m.moods)) {
        chosenScoreKeys.forEach(k => {
          if (m.moods.includes(k)) bonus += 8;
        });
      }
      // IMDb puanı bonusu (kalite çarpanı)
      bonus += (m.imdbRating || 8) * 1.5;
      scoreMap[m.id] = (scoreMap[m.id] || 0) + bonus;
    });

    // En yüksek skora sahip filmi bul
    let topMovieId = null;
    let maxScore = -1;

    for (const [movieId, score] of Object.entries(scoreMap)) {
      if (score > maxScore) {
        maxScore = score;
        topMovieId = movieId;
      }
    }

    let resultMovie = allMovies.find(m => m.id === topMovieId);

    // Fallback kuralları (kullanıcının ilk seçimine göre garantili ikonik yapımlar)
    if (!resultMovie) {
      const firstChoice = choices[0] ? choices[0].id : '';
      if (firstChoice === 'opt_crime_killer') resultMovie = allMovies.find(m => m.id === 'seven') || allMovies[0];
      else if (firstChoice === 'opt_scifi_ship') resultMovie = allMovies.find(m => m.id === 'inception') || allMovies[0];
      else if (firstChoice === 'opt_comedy_crew') resultMovie = allMovies.find(m => m.id === 'the-hangover') || allMovies[0];
      else resultMovie = allMovies.find(m => m.id === 'the-green-mile') || allMovies[0];
    }

    return resultMovie;
  }

  renderDestinyReveal(movie, choices) {
    if (!movie || !this.app.isAgeAllowed(movie)) {
      this.analyzingCard?.classList.add('hidden');
      this.introCard?.classList.remove('hidden');
      this.app.showToast('Bu profil için yaş sınırına uygun öneri bulunamadı.', 'info');
      return;
    }
    this.currentStep = 7;
    if (this.analyzingCard) this.analyzingCard.classList.add('hidden');
    if (!this.destinyCard) return;

    if (window.cinemaAudio) window.cinemaAudio.playTaDum();

    const streamInfo = typeof getMovieStreamingInfo === 'function'
      ? getMovieStreamingInfo(movie)
      : { hasTrProvider: false, statusText: "TR yayıncısı bulunamadı", providers: [], globalProviders: [] };

    // Yolculuk adımları özeti (Breadcrumbs)
    const journeyIcons = choices.map(c => `<span class="journey-step-chip" title="${c.title}">${c.icon} ${c.title.split(' ')[0]}</span>`).join('<span class="journey-arrow">➔</span>');

    // Neden bu film seçildi? (Kişiselleştirilmiş gerekçe)
    const rationaleText = this.generateRationale(choices, movie);

    this.destinyCard.innerHTML = `
      <div class="destiny-card-inner">
        <div class="destiny-card-glow"></div>

        <!-- Üst Banner & Afiş -->
        <div class="destiny-header-wrap">
          <div class="destiny-badge-row">
            <span class="destiny-crown-badge">
              <span class="crown-icon">👑</span>
              <span>SENİN SİNEMATİK KADERİN • %99.6 EŞLEŞME</span>
            </span>
            <span class="destiny-step-badge">5 Kararlık Yolculuk Tamamlandı</span>
          </div>

          <!-- Seçim Yolu (Breadcrumbs) -->
          <div class="destiny-journey-trail">
            <span class="journey-trail-title">Senin Tercihlerin:</span>
            <div class="journey-chips-row">${journeyIcons}</div>
          </div>
        </div>

        <!-- Ana Film Vitrini (Büyük Kart) -->
        <div class="destiny-movie-hero-grid">
          <div class="destiny-poster-side">
            <img src="${movie.posterUrl}" alt="${escAttr(movie.title)}" class="destiny-poster-img" onerror="this.onerror=null; this.src=getFallbackPoster('${posterFallbackTitle(movie.title)}', '${posterFallbackTitle(movie.genres[0])}', '${movie.imdbRating}');" />
            <div class="destiny-poster-glare"></div>
            <span class="destiny-imdb-badge">
              <span class="badge-star">★</span>
              <span class="badge-val">${movie.imdbRating}</span>
              <span class="badge-votes">${movie.imdbVotes}</span>
            </span>
          </div>

          <div class="destiny-details-side">
            <div class="destiny-title-row">
              <h3 class="destiny-movie-title">${movie.title}</h3>
              <span class="destiny-year">${movie.year}</span>
            </div>
            <p class="destiny-orig-title">${movie.originalTitle}</p>

            <!-- Tür Etiketleri -->
            <div class="destiny-genres-row">
              ${movie.genres.map(g => `<span class="destiny-genre-tag">${g}</span>`).join('')}
              <span class="destiny-age-tag">${movie.ageRating}</span>
              <span class="destiny-type-tag">${movie.isSeries ? '📺 Dizi' : '🎬 Film'}</span>
            </div>

            <!-- Kişiselleştirilmiş Neden Seçildi Kutusu -->
            <div class="destiny-rationale-box">
              <div class="rationale-header">
                <span class="rationale-icon">🧠</span>
                <span class="rationale-title">Neden Senin İçin Seçildi?</span>
              </div>
              <p class="rationale-desc">${rationaleText}</p>
            </div>

            <!-- Film Özeti -->
            <p class="destiny-summary-text">${movie.summary}</p>

            <!-- Türkiye Yayıncıları (Nerede İzlenir?) -->
            <div class="destiny-streaming-box">
              <span class="destiny-streaming-label">Türkiye'de Nerede İzlenir?</span>
              <div class="destiny-streaming-list">
                ${streamInfo.hasTrProvider && streamInfo.providers.length > 0 ? `
                  ${streamInfo.providers.map(p => `
                    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="streaming-logo-pill ${p.badgeClass}" title="${p.name}'da ${movie.title} İzle">
                      ${p.iconSvg}
                      <span>${p.name} · ${p.actionLabel}</span>
                    </a>
                  `).join('')}
                ` : `
                  <div class="card-no-tr-pill" style="position:static;" title="Bu yapımın Türkiye'de resmi bir yayıncısı bulunmamaktadır.">
                    <span class="no-tr-dot"></span>
                    <span>${streamInfo.statusText}</span>
                  </div>
                  ${streamInfo.globalProviders && streamInfo.globalProviders.length > 0 ? `
                    ${streamInfo.globalProviders.map(p => `
                      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="streaming-logo-pill ${p.badgeClass}" title="${p.name} (Küresel Yayıncı)">
                        ${p.iconSvg}
                        <span>${p.name} (Global)</span>
                      </a>
                    `).join('')}
                  ` : ''}
                `}
              </div>
            </div>

            <!-- Eylem Butonları -->
            <div class="destiny-actions-row">
              <button class="btn-destiny-play" id="btn-destiny-play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Fragmanı Başlat (Hemen İzle)</span>
              </button>
              <button class="btn-destiny-watchlist" id="btn-destiny-watchlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <span>Listeme Ekle</span>
              </button>
              <button class="btn-destiny-restart" id="btn-destiny-restart" title="Farklı kararlarla yeni bir macera başlat">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                <span>Farklı Bir Hikaye Yarat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.destinyCard.classList.remove('hidden');
    this.scrollToStory();

    // Dinleyiciler
    document.getElementById('btn-destiny-play')?.addEventListener('click', () => {
      this.app.openModal(movie);
    });

    document.getElementById('btn-destiny-watchlist')?.addEventListener('click', () => {
      this.app.toggleWatchlist(movie);
    });

    document.getElementById('btn-destiny-restart')?.addEventListener('click', () => {
      this.startStory();
    });
  }

  generateRationale(choices, movie) {
    const c1 = choices[0] ? choices[0].title : '';
    const c2 = choices[1] ? choices[1].title : '';
    const c3 = choices[2] ? choices[2].title : '';
    const c4 = choices[3] ? choices[3].title : '';
    const c5 = choices[4] ? choices[4].title : '';

    return `Verdiğin 5 kararda <strong>${c1}</strong> ile yola çıktın, <strong>${c2}</strong> atmosferinde nefes aldın. Karakterinin <strong>${c3}</strong> yönünü ön plana çıkararak <strong>${c4}</strong> hamlesini yaptın ve finalde <strong>${c5}</strong> arzusuyla perdeyi kapattın. ${this.app.ageAllowedMovies().length} yapımlık kataloğumuzda bu tercihlere uygun önerimiz <strong>${movie.title}</strong> oldu.`;
  }

  scrollToStory() {
    if (!this.container) return;
    const nav = document.getElementById('navbar');
    const navHeight = nav ? nav.offsetHeight : 74;
    const targetPos = this.container.getBoundingClientRect().top + window.pageYOffset - navHeight - 15;
    window.scrollTo({
      top: Math.max(0, targetPos),
      behavior: 'smooth'
    });
  }
}

// Global olarak dışa aktar
window.STORY_STEPS = STORY_STEPS;
window.StoryAdventureEngine = StoryAdventureEngine;
