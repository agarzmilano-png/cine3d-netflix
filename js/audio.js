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
