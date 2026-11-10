# 🎬 Cine3D Netflix - 3D Sinematik Film & Dizi Keşif Platformu (Canlı İnternet Entegrasyonlu)

Netflix tarzı karanlık ve modern kullanıcı deneyimini, **Three.js WebGL 3D efektleri**, **kart düzeyinde 3D tilt parallaksı**, **IMDb puanı tabanlı filtreleme**, **OMDb API üzerinden canlı internet araması** ve **kapsamlı film/dizi konusu ve fragman desteği** ile buluşturan yeni nesil web uygulaması.

---

## 🌐 Canlı İnternet Veri Entegrasyonu (Yeni)

Kullanıcı arama yaptığında aranan yapım başlangıç kataloğunda bulunmasa bile:
1. **Canlı İnternet Taraması**: OMDb API ve küresel film veritabanı anlık taranır (örn: *Breaking Bad*, *Game of Thrones*, *Avatar*, *Sherlock*, *Dune 2*, *Stranger Things*, *Titanic* vb.).
2. **Resmi IMDb Puanı ve Oyları**: Yapımın resmi IMDb puanı (örn: 9.5), oy adedi ve kalite rozetleri canlı çekilir.
3. **Film Türleri ve Çevirisi**: İngilizce türler (Action, Sci-Fi, Crime, Drama vb.) anında Türkçe sinema türlerine dönüştürülür ve tür filtreleme çubuğuna eklenir.
4. **Detaylı Konu Anlatımı**: Türkçe Vikipedi API'si ve OMDb üzerinden filmin hikaye örgüsü, teması ve çatışması detaylı olarak açıklanır.
5. **Fragman Desteği**: 
   - Modal içinde otomatik YouTube Fragman Oynatıcısı (Arama Embed modu ile her yapıma uygun fragman).
   - Tek tıkla doğrudan resmi YouTube fragmanına giden *"YouTube'da Aç"* butonu.
6. **Sürekli Çevrimiçi Çekim**: Açılışta otomatik olarak trend diziler ve filmler çekilir; ayrıca kontrol çubuğundaki **"🌐 İnternetten Yeni Filmler/Diziler Çek"** butonuyla tek tıkla yeni kategoriler kataloğa dahil edilebilir.

---

## ✨ Öne Çıkan Özellikler

### 1. 🌌 Netflix Tarzı & 3D Sinematik Tasarım
- **Three.js WebGL 3D Sahnesi**: Sayfa arka planında fare hareketlerine tepki veren Netflix Kırmızısı (`#E50914`) ve IMDb Altını (`#F5C518`) sinematik ışık kaynakları, dönen 3D film makarası halkaları ve yüzen uzay partikülleri.
- **Kart Seviyesinde 3D Tilt Parallaksı**: Her film kartına fareyle yaklaşıldığında kart 3 boyutlu uzayda eğilir (`rotateX`, `rotateY`, `scale3d`), üzerindeki ışık yansıması (`specular glare`) fareyi takip eder ve IMDb rozeti derinlik kazanarak öne fırlar (`translateZ`).
- **3D Coverflow Modu**: Tek tıkla "Netflix Izgara" ve "3D Sinematik Coverflow" arasında geçiş yapılabilir. Coverflow modunda filmler 3 boyutlu silindirik perspektifte dizilir ve ok tuşları, fare tekerleği veya tıklama ile döndürülebilir.
- **Netflix "Ta-Dum" Sinematik Sesi**: Web Audio API ile hiçbir harici MP3 indirmeden doğrudan tarayıcı osilatörleriyle sentezlenen Netflix introlu bas darbesi ve arayüz sesleri.

### 2. ⭐ IMDb Puanlama Sistemi
- **IMDb Odaklı Vitrin**: Her filmde resmi IMDb puanı, oy sayısı ve kalite sınıflandırması (9.0+ Efsaneler, 8.8+ Başyapıtlar, 8.5+ Üst Düzey).
- **Hızlı Filtre Butonları**: "⭐ 8.5+ Üst Düzey", "🏆 8.8+ Başyapıtlar", "👑 9.0+ Efsaneler" filtreleri.
- **Hassas IMDb Kaydırıcısı (Slider)**: Puanı 0.1 hassasiyetle filtreleyebilme.
- **Top 10 IMDb Başyapıtı**: Netflix'in meşhur dev numaralı (1, 2, 3...) en yüksek puanlı filmler şeridi.

### 3. 🎭 Film & Dizi Türleri ve Kapsamlı Konu Açıklamaları
- **Tür Filtreleme Hapları**: Bilim Kurgu, Aksiyon, Dram, Suç, Gerilim, Macera, Korku, Gizem, Animasyon ve internetten yeni gelen türler.
- **Detaylı Konu Modalı**:
  - Filmin ana çatışmasını ve karakterlerini anlatan Türkçe konu özeti.
  - Akılda kalıcı replik/slogan kutusu.
  - Yönetmen, başrol oyuncuları, süre, yaş sınırı ve kazanılan ödüller.
  - **YouTube Fragman Entegrasyonu**: Modal içinden tek tıkla resmi fragmanı HD olarak izleyebilme.

### 4. 🚀 Yeni Nesil Güncellemeler (Faz 1 - 4)
- **⏱️ Süre & Format Filtresi (Faz 1)**: `⏱️ Tümü`, `⚡ < 100 dk (Çerezlik)`, `🎬 100-140 dk (Standart)`, `🍿 140+ dk (Epik)`, `📺 Dizi / Sezon`.
- **🔗 İnteraktif Filmografi Ağı (Faz 1)**: Modaldaki yönetmen ve oyuncu etiketlerine tıklayarak anında o ismin tüm yapımlarını filtreleme.
- **⚔️ Sinematik Düello / VS Modu (Faz 2)**: İki filmi yan yana split-screen 3D arenada kapıştırma; IMDb puanı, oy sayısı, süre, ödüller ve "Cine3D Zafer Tahtı" algoritması.
- **📊 İzlediklerim & Sinema Karnem (Faz 3)**: Filmleri "İzledim (✓)" olarak işaretleme, 1-10 kişisel puan verme, toplam izleme süresi, tür DNA'sı ve Sinefil rütbesi hesaplayan analitik paneli.
- **🎡 3D Sinematik Film Ruleti (Faz 4)**: Kararsız kalındığında slot makarası efekti, mekanik sesler ve Ta-Dum ile şansına film seçtiren interaktif rulet.
- **🎵 Sinematik Ambiyans Tema Müziği (Faz 4)**: Web Audio API ile modal içinde Hans Zimmer tarzı sentezlenen tema müziği ön dinlemesi.
- **🎟️ VIP Sinema Bileti Oluşturucu (Faz 4)**: Her filme özel nostaljik IMAX/VIP sinema bileti üretme ve PNG olarak indirebilme.

---

## 🚀 Nasıl Çalıştırılır?

```bash
npm start
# veya
node server.js
# LAN cihazlarından da erişmek için:
HOST=0.0.0.0 node server.js   # Windows CMD: set HOST=0.0.0.0 && node server.js
```

Sunucu varsayılan olarak **yalnızca `127.0.0.1:3300`** üzerinde dinler (tünel için yeterli, LAN'a açık değil).

### OMDb anahtarları

API anahtarları artık kaynak kodda değil, `.env` dosyasında tutulur:

```bash
copy .env.example .env      # ve içine OMDB_API_KEYS=anahtar1,anahtar2 yazın
```

Anahtar tanımlanmazsa yalnızca OMDb'nin herkese açık demo anahtarı kullanılır (günlük kota çok düşüktür).

---

## ☁️ Yayın — GitHub Pages (bilgisayar gerektirmez)

🌍 **Canlı site:** https://agarzmilano-png.github.io/cine3d-netflix/

Site GitHub Pages üzerinde **statik** olarak barınır: 7/24 açıktır, hiçbir bilgisayar veya sunucu çalışması gerekmez.

### Güncelleme

```bash
git add -A
git commit -m "aciklama"
git push
```

Push sonrası GitHub Pages ~1-2 dakika içinde yeni sürümü yayınlar.

### Sunucusuz canlı veri (tarayıcıdan doğrudan)

Site sunucu olmadan da internetten veri çeker. Kullanılan kaynaklar ve nedenleri:

| Kaynak | Ne için | CORS |
|---|---|---|
| **OMDb API** (`omdbapi.com`) | Arama, detay, IMDb puanı/oy, kadro, yönetmen, afiş | ✅ `*` |
| **Türkçe Vikipedi REST** | Türkçe konu özeti | ✅ `*` |
| **data/catalog.json** | TR yayıncıları + yedek arama indeksi (haftalık, GitHub Actions) | ✅ (kendi dosyamız) |
| JustWatch GraphQL | Canlı yayıncı sorgusu | ❌ (tarayıcıdan engelli → haftalık indekse yazılıyor) |
| **iTunes Search API** | Tüm yapımların OST önizlemesi (30 sn, orijinal kayıt) | ✅  |

Yani `sunucu.js` olmadan da arama/detay canlı çalışır; yayıncı bilgisi haftalık indeksten gelir.

### OST (film/dizi müziği)

Tema müziği, 110 yapım için elle doğrulanmış parça adı + Apple Music/iTunes resmî önizlemesiyle
çalınır (30 sn, orijinal kayıt). YouTube kimlikleri `scripts/fix-ost.js` ile oEmbed üzerinden
doğrulanır; doğrulanamayanlarda yanlış video vermek yerine YouTube arama bağlantısı gösterilir.

Doğrulama / yenileme:

```bash
node scripts/fix-ost.js
```

### Uygulama olarak yükleme (PWA)

Site, tarayıcıdan **uygulama olarak yüklenebilir** (ana ekrana ekleme) ve çevrimdışı açılır.

- Manifest: `manifest.json` — `standalone` görünüm, 192/512 px + **maskable** ikon
- Service worker: `sw.js` — kabuk önbelleği, ağ-öncelikli varlıklar, çevrimdışı fallback
- Kurulum: üst çubuktaki 📲 butonu (Chrome/Edge gerçek kurulum penceresi; iOS Safari için talimat gösterir)

### OMDb anahtarı

Varsayılan olarak herkese açık demo anahtar (`trilogy`) kullanılır; günlük kotası dolabilir.
Kendi ücretsiz anahtarınızı iki şekilde ekleyebilirsiniz:

1. Adres çubuğuna bir kez: `.../?omdbkey=ANAHTARINIZ` (localStorage'a yazılır)
2. Konsolda: `localStorage.setItem('cine3d_omdb_keys', 'anahtar1,anahtar2')`
3. Kalıcı varsayılan için `js/config.js` içindeki `omdbKeys` dizisi

Kota dolarsa site otomatik olarak gömülü indekse düşer ve kullanıcıya bilgi verir.

### Gömülü indeks (yedek + yayıncı verisi)

`data/catalog.json` GitHub Actions tarafından her pazartesi JustWatch verisiyle yenilenir
(`.github/workflows/catalog-refresh.yml` + `scripts/build-catalog.js`): ~750 yapım, TR yayıncıları,
varsa doğrulanmış YouTube fragman kimliği.

Elle tazelemek için:

```bash
node scripts/build-catalog.js 600
```

## 🎮 Faz 5 Özellikleri (Cine3D Features Motoru)

- **🎬 Hover Fragman Önizlemesi**: Kart üzerinde 1.2 sn bekleyince sessiz YouTube fragmanı oynar; çekince/kaydırınca temizlenir.
- **🏆 Şampiyonluk Turnuvası v2**: Lobi ile 4/8/16 katılımcı ve havuz seçimi (Önerilerim/Filmler/Diziler/Tümü); oyuncu istatistikleri, favori kazanma yüzdesi, "Cine3D Karar Ver" önerisi, yol haritası, şampiyonun devirdiği rakipler ve `localStorage`'a kayıtlı Şampiyonlar Müzesi.
- **🎯 IMDb Tahmin Oyunu v2**: Zorluk seviyeleri (Kolay ×1 / Orta ×1.5 / Zor ×2 — farklı havuz ve süre), geri sayım çubuğu (süre dolunca 0 puan), 2 joker (Aralık / Yönetmen — tur puanı yarıya düşer), 🔥 seri-kombo bonusu, ödül bilgiseto, animasyonlu bitiş ve zorluk bazlı rekorlar.
- **🧬 Cine3D Öneri Motoru**: En az 3 izleme sonrası "Zevk DNA'n" hesaplanıp %XX eşleşmeli 12 önerilik "Seni Tanıyoruz" şeridi üretilir; izleme verisi değişince otomatik tazelenir.

---

Tarayıcınızda açın:
👉 **[http://localhost:3300](http://localhost:3300)**

> 💡 OMDb API anahtarlarını `OMDB_API_KEYS` ortam değişkeniyle geçersiz kılabilirsiniz:
> `OMDB_API_KEYS=anahtar1,anahtar2 node server.js`

---

## 🧰 v3.0 — Tünel/Canlı Ortam Hata Düzeltmeleri

- **Zaman aşımı koruması**: Tüm dış çağrılar (OMDb, YouTube, iTunes, Deezer, JustWatch, Wikipedia) artık `OUTBOUND_TIMEOUT_MS` (varsayılan 8 sn) ile sınırlı; asılı istekler Cloudflare 524 yerine hızlı ve boş yanıt dönüyor.
- **Detay önbelleği hatası**: Başarısız OMDb kaydı `[]` olarak cache'lenip `success:true` ile "Bilinmeyen Film (2024)" üretiyordu; artık yalnızca başarılı kayıtlar saklanır.
- **Negatif arama önbelleği**: OMDb kotası/geçici hatadan sonra sorgu 1 saat boyunca boş dönüyordu; boş sonuçlar artık cache'lenmiyor.
- **Statik dosya beyaz listesi**: `cloudflared.exe` (55 MB), `server.js`, `package.json`, test dosyaları artık tünelden indirilemiyor.
- **Anahtar sızıntısı**: OMDb anahtarları kaynak koddan çıkarıldı, `.env` üzerinden okunuyor; poster çözücüler de anahtar rotasyonunu kullanıyor.
- **Deezer/OST proxy**: Upstream durum kodu kontrol ediliyor, `Content-Type`/`Content-Length` aktarılıyor, 30 dk cache ve istemci kapanınca bağlantı temizliği eklendi.
- **Güvenlik başlıkları**: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Vary: Accept-Encoding`; statik dosyalarda gereksiz `Access-Control-Allow-Origin: *` kaldırıldı.
- **`HOST` ayarı**: Sunucu varsayılan olarak `127.0.0.1`; `0.0.0.0` artık opt-in.
- **3D sahne koruması**: WebGL kapalı/engelli cihazlarda `initThreeScene()` hatası tüm uygulamayı durdurmuyor, 2D modda devam ediliyor.
- **Fragman fallback**: `await` sonrası `window.open` popup engeline takılıyordu; otomatik pencere açma kaldırıldı, tek tık butonu bırakıldı.
- **XSS/bozuk markup**: OST şeridi ve `onerror` nitelikleri artık `escapeHtmlText` ile kaçışlanıyor (kesme işareti içeren başlıklarda JS kırılmıyor).
- **Service Worker v3**: Sürümlü cache, gezinmelerde network-first, `ignoreSearch` eşleşmesi, offline fallback; güncelleme sonrası eski arayüz görünmüyor.
- **PWA/manifest**: İkon `purpose` değerleri düzeltildi (`any maskable` uyarısı kalktı), `id` eklendi, favicon tanımlandı (`/favicon.ico` 204).
- **CSS**: `modal.css` içindeki fazladan `}` ve sahipsiz `text-overflow` kaldırıldı (212/212 denge).
- **GitHub Pages yayını**: Site bilgisayardan bağımsız, kalıcı adreste yayınlanır.

---

## 🛡️ Güvenlik & Bakım Güncellemesi (v2.7)

- **Sunucu çökme hatası düzeltildi**: `/api/ost` çözücüsünde tanımsız `directAudio` değişkenine referans verilmişti; `fetchItunesAudioPreview` artık gerçekten çağrılıyor.
- **Yol gezintisi (path traversal) kapatıldı**: Statik dosya servisi ve `/api/stream-ost` `id` parametresi artık sunucu kökünden çıkamaz.
- **OMDb API anahtarları tarayıcıdan kaldırıldı**: Arama/detay istekleri artık sunucu proxy uçları (`/api/search`, `/api/details`) üzerinden yapılır; anahtarlar yalnızca sunucuda tutulur.
- **XSS temizliği**: İnternetten gelen tüm metin alanları (başlık, özet, yönetmen, oyuncular...) tek merkezde (`escapeHtml`) temizlenir; canvas bilet ve toast metinleri `decodeHtmlEntities` ile geri çözülür.
- **Önbellekler sınırlı**: Sunucu önbellekleri TTL + boyut sınırına (TTLCache) geçti; RAM sızması önlendi.
- **Coverflow klavye navigasyonu düzeltildi**: Yanlış element ID'si (`coverflow-view` → `coverflow-view-section`) nedeniyle ok tuşları hiç çalışmıyordu.
- **Three.js yerel vendor'a taşındı**: CDN bağımlılığı kaldırıldı (`js/vendor/three.min.js`).
- **package.json eklendi**: `npm start` ile başlatma desteği.

---

## 📂 Dosya Yapısı

```
cine3d-netflix/
├── index.html              # Netflix 3D ana arayüzü ve bileşenler
├── server.js               # Node.js yerel web sunucusu (Port 3300)
├── css/
│   ├── style.css           # Netflix karanlık teması, 3D tilt stilleri, grid ve coverflow
│   └── modal.css           # IMDb vitrini, film konusu ve fragman oynatıcı stilleri
├── js/
│   ├── api-service.js      # OMDb API canlı arama, Vikipedi Türkçe özeti ve fragman servisi
│   ├── movies-data.js      # Başlangıç film verisi (IMDb puanları, konuları, türleri)
│   ├── three-scene.js      # Three.js 3D WebGL ışık ve partikül sahnesi
│   ├── coverflow3d.js      # 3D Coverflow karusel mekaniği
│   ├── audio.js            # Web Audio API ile Netflix Ta-Dum sentezleyicisi
│   └── app.js              # Filtreleme, canlı arama, modal ve izleme listesi mantığı
└── README.md               # Detaylı dokümantasyon
```
