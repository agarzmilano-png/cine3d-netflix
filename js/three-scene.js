/**
 * CINE3D - Three.js 3D Arka Plan Sahnesi
 * Sinematik ışıklandırma, yüzen 3D partiküller ve fareye duyarlı derinlik efekti
 */

class Cinema3DScene {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.dustParticles = null;
    this.rings = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.clock = null;

    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      console.warn("Three.js kütüphanesi henüz yüklenmedi.");
      return;
    }

    // Sahne
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x0a0a0c, 0.0018);

    // Kamera
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    this.camera.position.z = 600;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.clock = new THREE.Clock();

    // Işıklar
    this.createLights();

    // 3D Elemanlar
    this.createCinemaParticles();
    this.createFilmReelRings();
    this.createFloatingGeometry();

    // Olay Dinleyicileri
    this.bindEvents();

    // Animasyon Döngüsü
    this.animate();
  }

  createLights() {
    // Kırmızı Netflix ambiyans ışığı
    this.redLight = new THREE.PointLight(0xe50914, 2.5, 900);
    this.redLight.position.set(-200, 150, 200);
    this.scene.add(this.redLight);

    // Altın IMDb ambiyans ışığı
    this.goldLight = new THREE.PointLight(0xf5c518, 1.8, 800);
    this.goldLight.position.set(250, -100, 150);
    this.scene.add(this.goldLight);

    // Yumuşak genel aydınlatma
    const ambientLight = new THREE.AmbientLight(0x221122, 0.6);
    this.scene.add(ambientLight);
  }

  createCinemaParticles() {
    const particleCount = 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color(0xe50914), // Netflix Red
      new THREE.Color(0xf5c518), // IMDb Gold
      new THREE.Color(0xffffff), // Beyaz Yıldız
      new THREE.Color(0x38bdf8)  // Neon Mavi
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 1600;
      positions[i3 + 1] = (Math.random() - 0.5) * 1200;
      positions[i3 + 2] = (Math.random() - 0.5) * 1000;

      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = randomColor.r;
      colors[i3 + 1] = randomColor.g;
      colors[i3 + 2] = randomColor.b;

      sizes[i] = Math.random() * 4 + 1.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Glow dokulu materyal
    const material = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  createFilmReelRings() {
    // 3D Dönen Sinema Halkaları (Arka planda soyut derinlik katan halkalar)
    for (let i = 0; i < 3; i++) {
      const radius = 180 + i * 90;
      const ringGeo = new THREE.TorusGeometry(radius, 1.2, 8, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0xe50914 : (i === 1 ? 0xf5c518 : 0x444455),
        transparent: true,
        opacity: 0.15,
        wireframe: true
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(0, 0, -200 + i * 50);
      ringMesh.rotation.x = Math.PI / 4 + i * 0.2;
      ringMesh.rotation.y = Math.PI / 6;
      this.scene.add(ringMesh);
      this.rings.push(ringMesh);
    }
  }

  createFloatingGeometry() {
    this.floatingMeshes = [];
    const shardGeo = new THREE.TetrahedronGeometry(18, 0);

    for (let i = 0; i < 15; i++) {
      const shardMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xe50914 : 0xf5c518,
        metalness: 0.85,
        roughness: 0.2,
        transparent: true,
        opacity: 0.35,
        wireframe: i % 3 === 0
      });

      const mesh = new THREE.Mesh(shardGeo, shardMat);
      mesh.position.set(
        (Math.random() - 0.5) * 1200,
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 500
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );
      mesh.scale.setScalar(Math.random() * 0.8 + 0.5);
      
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatSpeed: Math.random() * 0.5 + 0.2,
        initialY: mesh.position.y
      };

      this.scene.add(mesh);
      this.floatingMeshes.push(mesh);
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize());

    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = (e.clientX - window.innerWidth / 2) * 0.25;
      this.targetMouseY = (e.clientY - window.innerHeight / 2) * 0.25;
    });

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (this.camera) {
        this.camera.position.y = -scrollY * 0.15;
      }
    });
  }

  onResize() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    // Sekme gizliyken çizim yapma (pil/CPU tasarrufu), görünür olunca devam et.
    if (document.hidden) {
      if (!this._visibilityBound) {
        this._visibilityBound = true;
        document.addEventListener('visibilitychange', () => {
          if (!document.hidden) {
            if (this.clock) this.clock.getDelta(); // geçen süreyi at, ani zıplama olmasın
            this.animate();
          }
        });
      }
      return;
    }

    requestAnimationFrame(() => this.animate());

    const elapsedTime = this.clock ? this.clock.getElapsedTime() : 0;

    // Yumuşak kamera süzülmesi
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.04;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.04;

    if (this.camera) {
      this.camera.position.x = this.mouseX * 0.35;
      this.camera.lookAt(0, this.camera.position.y * 0.5, 0);
    }

    // Partikül yavaş rotasyonu
    if (this.particles) {
      this.particles.rotation.y = elapsedTime * 0.025;
      this.particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.08;
    }

    // 3D Halkalar rotasyonu
    this.rings.forEach((ring, index) => {
      ring.rotation.z += 0.002 * (index % 2 === 0 ? 1 : -1);
      ring.rotation.x += 0.001 * (index + 1);
    });

    // Geometrik parçaların yüzmesi
    if (this.floatingMeshes) {
      this.floatingMeshes.forEach(mesh => {
        mesh.rotation.x += mesh.userData.rotSpeedX;
        mesh.rotation.y += mesh.userData.rotSpeedY;
        mesh.position.y = mesh.userData.initialY + Math.sin(elapsedTime * mesh.userData.floatSpeed) * 35;
      });
    }

    // Işıkların dinamik hareketi
    if (this.redLight) {
      this.redLight.position.x = -200 + Math.sin(elapsedTime * 0.8) * 120 + this.mouseX * 0.2;
      this.redLight.position.y = 150 + Math.cos(elapsedTime * 0.6) * 80 - this.mouseY * 0.2;
    }

    if (this.goldLight) {
      this.goldLight.position.x = 250 + Math.cos(elapsedTime * 0.7) * 100 + this.mouseX * 0.2;
      this.goldLight.position.y = -100 + Math.sin(elapsedTime * 0.9) * 80 - this.mouseY * 0.2;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  // 3D Sahne Temasını Değiştir (Netflix, HBO, Disney+, Prime Video)
  setTheme(theme = 'netflix') {
    if (!this.scene) return;

    const themeColors = {
      netflix: {
        primary: 0xe50914,
        secondary: 0xf5c518,
        ambient: 0x221122,
        fog: 0x0a0a0c,
        palette: [0xe50914, 0xf5c518, 0xffffff, 0xb80710]
      },
      hbo: {
        primary: 0x9945ff,
        secondary: 0x7928ca,
        ambient: 0x180828,
        fog: 0x07060d,
        palette: [0x9945ff, 0x7928ca, 0xffffff, 0x5822b4]
      },
      disney: {
        primary: 0x00d2ff,
        secondary: 0x113ccf,
        ambient: 0x081530,
        fog: 0x040714,
        palette: [0x00d2ff, 0x113ccf, 0xffffff, 0x38bdf8]
      },
      prime: {
        primary: 0x00a8e1,
        secondary: 0xf59e0b,
        ambient: 0x0a1626,
        fog: 0x090e18,
        palette: [0x00a8e1, 0x38bdf8, 0xffffff, 0xf59e0b]
      }
    };

    const cfg = themeColors[theme] || themeColors.netflix;

    if (this.redLight) this.redLight.color.setHex(cfg.primary);
    if (this.goldLight) this.goldLight.color.setHex(cfg.secondary);
    if (this.scene.fog) this.scene.fog.color.setHex(cfg.fog);

    // Partiküllerin renklerini güncelle
    if (this.particles && this.particles.geometry) {
      const colorsAttr = this.particles.geometry.attributes.color;
      if (colorsAttr) {
        const count = colorsAttr.count;
        const colorPalette = cfg.palette.map(c => new THREE.Color(c));
        for (let i = 0; i < count; i++) {
          const randCol = colorPalette[Math.floor(Math.random() * colorPalette.length)];
          colorsAttr.setXYZ(i, randCol.r, randCol.g, randCol.b);
        }
        colorsAttr.needsUpdate = true;
      }
    }
  }
}

// Global başlatıcı
window.initThreeScene = () => {
  window.cinema3D = new Cinema3DScene('cinema-3d-canvas');
};
