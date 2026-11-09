/**
 * CINE3D - Web Audio API Sinematik Ses Efektleri
 * Dış bağımlılık olmadan tarayıcıda doğrudan sentezlenen sesler
 */

class CinemaAudio {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.initialized = true;
      }
    } catch (e) {
      console.warn("Web Audio API başlatılamadı:", e);
    }
  }

  // Netflix tarzı sinematik "Ta-Dum" bas akoru
  playTaDum() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;

    // Bas darbesi 1 (Düşük frekans D-flat)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(65.4, now); // C2
    osc1.frequency.exponentialRampToValueAtTime(32.7, now + 1.2); // C1

    // Düşük geçiren filtre
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.exponentialRampToValueAtTime(80, now + 1.2);

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.linearRampToValueAtTime(0.4, now + 0.08);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    osc1.connect(filter);
    filter.connect(gain1);
    gain1.connect(this.ctx.destination);

    osc1.start(now);
    osc1.stop(now + 1.5);

    // İkinci parlak sinematik vuruş (Ta-DUM! darbesi)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(130.8, now + 0.18);
    osc2.frequency.exponentialRampToValueAtTime(65.4, now + 1.8);

    gain2.gain.setValueAtTime(0.001, now + 0.18);
    gain2.gain.linearRampToValueAtTime(0.5, now + 0.28);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);

    osc2.start(now + 0.18);
    osc2.stop(now + 2.1);
  }

  // Kart üzerine gelindiğinde fısıltı/tıklama efekti
  playHover() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.04);

    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Kart açılma efekti
  playWhoosh() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(360, now + 0.15);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  // HBO Max tarzı derin ve kozmik sinematik ambiyans sesi
  playHboChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;

    // 1. Derin kozmik bas drone
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(73.4, now); // D2
    osc1.frequency.exponentialRampToValueAtTime(55.0, now + 1.8);

    const filter1 = this.ctx.createBiquadFilter();
    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(320, now);
    filter1.frequency.exponentialRampToValueAtTime(70, now + 1.6);

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.linearRampToValueAtTime(0.35, now + 0.12);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 2.1);

    // 2. Parlak mor statik tınısı (HBO Swell)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(587.33, now + 0.1); // D5
    osc2.frequency.linearRampToValueAtTime(880.0, now + 0.6); // A5

    gain2.gain.setValueAtTime(0.0001, now + 0.1);
    gain2.gain.linearRampToValueAtTime(0.18, now + 0.35);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.1);
    osc2.stop(now + 1.9);
  }

  // Disney+ tarzı sihirli peri tozu çan arpeji
  playDisneyMagic() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const notes = [783.99, 1046.50, 1318.51, 1567.98, 2093.00]; // G5, C6, E6, G6, C7

    notes.forEach((freq, idx) => {
      const noteTime = now + (idx * 0.08);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.001, noteTime);
      gain.gain.linearRampToValueAtTime(0.15, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.7);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.75);
    });
  }

  // Amazon Prime Video tarzı fütüristik temiz iki tonlu tını
  playPrimeSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;

    // Birinci akor vuruşu (D4)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(293.66, now); // D4

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.linearRampToValueAtTime(0.25, now + 0.04);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.95);

    // İkinci parlak tepe tınısı (A4 & D5)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(587.33, now + 0.12); // D5

    gain2.gain.setValueAtTime(0.001, now + 0.12);
    gain2.gain.linearRampToValueAtTime(0.3, now + 0.18);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.12);
    osc2.stop(now + 1.25);
  }

  // Seçili temaya uygun ses çal
  playThemeSound(theme = 'netflix') {
    if (theme === 'hbo') {
      this.playHboChime();
    } else if (theme === 'disney') {
      this.playDisneyMagic();
    } else if (theme === 'prime') {
      this.playPrimeSound();
    } else {
      this.playTaDum();
    }
  }

  // --- FAZ 4: RUİLET TIKIRTISI & AMBİYANS TEMA MÜZİĞİ ---
  playReelTick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800 + Math.random() * 200, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.025);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.03);
  }

  // Hans Zimmer / Christopher Nolan tarzı epik sinematik tema müziği
  playCinematicAmbientScore() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    this.stopAmbientScore();

    const now = this.ctx.currentTime;
    this.activeAmbientNodes = [];

    // Master Gain
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.linearRampToValueAtTime(0.25, now + 1.2);
    masterGain.gain.setValueAtTime(0.25, now + 8.0);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 12.0);
    masterGain.connect(this.ctx.destination);
    this.activeAmbientNodes.push(masterGain);

    // 1. Derin Sub-Bass Drone (D2 & A1)
    const bassOsc = this.ctx.createOscillator();
    bassOsc.type = 'sawtooth';
    bassOsc.frequency.setValueAtTime(73.42, now); // D2
    const bassFilter = this.ctx.createBiquadFilter();
    bassFilter.type = 'lowpass';
    bassFilter.frequency.setValueAtTime(140, now);
    bassFilter.frequency.linearRampToValueAtTime(240, now + 6.0);
    bassFilter.frequency.linearRampToValueAtTime(100, now + 12.0);

    bassOsc.connect(bassFilter);
    bassFilter.connect(masterGain);
    bassOsc.start(now);
    bassOsc.stop(now + 12.0);
    this.activeAmbientNodes.push(bassOsc);

    // 2. Sinematik Arpej Akor Notaları (D4, F4, A4, C5, D5)
    const chordNotes = [293.66, 349.23, 440.0, 523.25, 587.33, 440.0, 349.23];
    chordNotes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = now + (idx * 0.7);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.001, noteTime);
      gain.gain.linearRampToValueAtTime(0.18, noteTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 2.5);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(noteTime);
      osc.stop(noteTime + 2.6);
      this.activeAmbientNodes.push(osc);
    });

    return true;
  }

  stopAmbientScore() {
    if (this.activeAmbientNodes && this.activeAmbientNodes.length > 0) {
      try {
        this.activeAmbientNodes.forEach(n => {
          if (n.stop) n.stop();
          if (n.disconnect) n.disconnect();
        });
      } catch (e) {}
      this.activeAmbientNodes = [];
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

window.cinemaAudio = new CinemaAudio();
