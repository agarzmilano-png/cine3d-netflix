/**
 * CINE3D - Çalışma zamanı ayarları
 *
 * Sunucu YOKSA site, verileri doğrudan tarayıcıdan çeker:
 *   - OMDb  (https://www.omdbapi.com)  → arama, detay, IMDb puanı, kadro, afiş
 *   - Türkçe Vikipedi REST API          → Türkçe konu özeti
 *   - data/catalog.json (haftalık)      → TR yayıncıları + yedek arama indeksi
 *
 * OMDb anahtarı: yerleşik demo anahtar ("trilogy") herkesle paylaşıldığı için
 * günlük kota dolabilir. Kendi ücretsiz anahtarınızı eklemek için konsolda:
 *
 *   localStorage.setItem('cine3d_omdb_keys', 'anahtar1,anahtar2')
 *
 * Anahtar yoksa/kota dolarsa site otomatik olarak yerel indekse düşer.
 */
window.CINE3D_CONFIG = {
  omdbKeys: ['trilogy']
};