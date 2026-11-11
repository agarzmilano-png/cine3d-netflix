/**
 * CINE3D - Çoklu Profil & Profil Kapsamlı Depolama (R009/1)
 *
 * Mevcut kod tabanı doğrudan localStorage kullanıyor. Bu dosya, Storage.prototype
 * metotlarını sararak kullanıcı verisi anahtarlarını aktif profile yönlendirir:
 *
 *    cine3d_watched  →  cine3d_p_<pid>_watched
 *
 * Böylece çağrı yerlerinin hiçbiri değişmeden tüm veriler profile scoped olur.
 *
 * Migrasyon: ilk açılışta (profil listesi yokken) eski `cine3d_<ad>` anahtarları
 * varsa varsayılan profile KOPYALANIR, sonra eski anahtar SİLİNİR. Veri kaybı yok.
 */
(function () {
  'use strict';

  var PREFIX = 'cine3d_';
  var PROFILES_KEY = 'cine3d_profiles';
  var ACTIVE_KEY = 'cine3d_active_profile';

  // Profil bazlı olması gereken kullanıcı verileri
  var SCOPED = {
    watched: 1, watchlist: 1, reviews: 1, watchlist_prefs: 1, search_history: 1,
    night_plan: 1, prediction_stats: 1, guess_best_easy: 1, guess_best_medium: 1,
    guess_best_hard: 1, champions: 1, duo_archive: 1, badges: 1
  };

  // Ham (yönlendirilmemiş) erişim için orijinal metotlar
  var rawGet = Storage.prototype.getItem;
  var rawSet = Storage.prototype.setItem;
  var rawRemove = Storage.prototype.removeItem;

  var activePid = null;

  function readRaw(key) {
    try { return rawGet.call(window.localStorage, key); } catch (e) { return null; }
  }
  function writeRaw(key, value) {
    try { rawSet.call(window.localStorage, key, value); } catch (e) { /* kota */ }
  }
  function removeRaw(key) {
    try { rawRemove.call(window.localStorage, key); } catch (e) { /* yoksay */ }
  }

  function scopedKey(name) {
    if (!activePid) return PREFIX + name;
    return PREFIX + 'p_' + activePid + '_' + name;
  }

  function mapKey(key) {
    if (typeof key !== 'string' || key.indexOf(PREFIX) !== 0) return key;
    var name = key.slice(PREFIX.length);
    if (!SCOPED[name]) return key;
    return scopedKey(name);
  }

  // --- Depolama yönlendirmesi (features.js'teki setItem sarmalayıcısıyla uyumlu:
  //     o dosya Storage.prototype.setItem'ı bizden SONRA sardığı için zincir korunur) ---
  Storage.prototype.getItem = function (key) { return rawGet.call(this, mapKey(key)); };
  Storage.prototype.setItem = function (key, value) { return rawSet.call(this, mapKey(key), value); };
  Storage.prototype.removeItem = function (key) { return rawRemove.call(this, mapKey(key)); };

  // --- Profil yönetimi ---
  function loadProfiles() {
    var list = [];
    try { list = JSON.parse(readRaw(PROFILES_KEY) || '[]'); } catch (e) { list = []; }
    if (!Array.isArray(list)) list = [];
    return list.filter(function (p) { return p && typeof p.pid === 'string'; });
  }

  function saveProfiles(list) {
    writeRaw(PROFILES_KEY, JSON.stringify(list));
  }

  function getActivePid() {
    return readRaw(ACTIVE_KEY) || (loadProfiles()[0] || {}).pid || null;
  }

  function migrateLegacyTo(pid) {
    var moved = 0;
    Object.keys(SCOPED).forEach(function (name) {
      var legacy = readRaw(PREFIX + name);
      if (legacy == null) return;
      var target = PREFIX + 'p_' + pid + '_' + name;
      if (readRaw(target) == null) {
        writeRaw(target, legacy);
        moved++;
      }
      removeRaw(PREFIX + name); // eski anahtar temizlenir
    });
    return moved;
  }

  function init() {
    var list = loadProfiles();
    var firstRun = list.length === 0;

    if (firstRun) {
      list = [{ pid: 'p1', name: 'Ben', emoji: '🙂', createdAt: Date.now() }];
      saveProfiles(list);
      writeRaw(ACTIVE_KEY, 'p1');
    }

    activePid = getActivePid();
    if (!activePid || !list.some(function (p) { return p.pid === activePid; })) {
      activePid = list[0].pid;
      writeRaw(ACTIVE_KEY, activePid);
    }

    // Migrasyon: eski anahtarlar varsa aktif profile taşınır
    window.Cine3DStorage.migrated = migrateLegacyTo(activePid);
  }

  function addProfile(name, emoji) {
    var list = loadProfiles();
    var clean = String(name || '').trim().slice(0, 24) || 'Profil';
    var pid = 'p' + Date.now().toString(36);
    list.push({
      pid: pid,
      name: clean,
      emoji: String(emoji || '🙂').slice(0, 4),
      createdAt: Date.now()
    });
    saveProfiles(list);
    return pid;
  }

  function removeProfile(pid) {
    var list = loadProfiles().filter(function (p) { return p.pid !== pid; });
    if (!list.length) return false; // son profil silinemez
    saveProfiles(list);
    // Profilin tüm verilerini temizle
    Object.keys(SCOPED).forEach(function (name) {
      removeRaw(PREFIX + 'p_' + pid + '_' + name);
    });
    if (getActivePid() === pid) writeRaw(ACTIVE_KEY, list[0].pid);
    return true;
  }

  function setActiveProfile(pid) {
    var list = loadProfiles();
    if (!list.some(function (p) { return p.pid === pid; })) return false;
    writeRaw(ACTIVE_KEY, pid);
    activePid = pid;
    return true;
  }

  window.Cine3DStorage = {
    SCOPED_NAMES: Object.keys(SCOPED),
    migrated: 0,
    init: init,
    profiles: loadProfiles,
    activePid: function () { return activePid || getActivePid(); },
    activeProfile: function () {
      var pid = activePid || getActivePid();
      return loadProfiles().find(function (p) { return p.pid === pid; }) || null;
    },
    addProfile: addProfile,
    removeProfile: removeProfile,
    setActiveProfile: setActiveProfile,
    keyFor: scopedKey,
    raw: { get: readRaw, set: writeRaw, remove: removeRaw }
  };

  init();
})();
