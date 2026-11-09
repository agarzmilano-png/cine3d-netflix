/**
 * CINE3D - Ana Uygulama Mantığı & Dinamik Çoklu Platform Arayüz Motoru
 * Netflix, HBO Max, Disney+, Prime Video Arayüz Dönüşümü
 */

// HTML kaçış yardımcısı: dinamik metinler innerHTML/attribute içine girerken
// tırnak veya `<` karakteri taşırsa markup'ı (ve inline onerror JS'ini) bozuyordu.
function escapeHtmlText(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const PLATFORM_HUBS = {
  disney: [
    {
      id: 'disney-hub-disney',
      title: 'DISNEY',
      subtitle: 'Klasikler & Orijinaller',
      filterKey: 'disney',
      keywords: ['Disney', 'Lion King', 'Aslan Kral', 'Avatar', 'Bear', 'Aladdin', 'Frozen', 'Karlar Ülkesi'],
      genre: 'Animasyon',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
    },
    {
      id: 'disney-hub-pixar',
      title: 'PIXAR',
      subtitle: 'Animasyon Dünyası',
      filterKey: 'pixar',
      keywords: ['Pixar', 'WALL-E', 'VOL-İ', 'Up', 'Yukarı Bak', 'Coco', 'Koko', 'Toy Story', 'Nemo', 'Ratatouille'],
      genre: 'Animasyon',
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>`
    },
    {
      id: 'disney-hub-marvel',
      title: 'MARVEL',
      subtitle: 'Sinematik Evren',
      filterKey: 'marvel',
      keywords: ['Marvel', 'Avengers', 'Iron Man', 'Demir Adam', 'Loki', 'Spider', 'Örümcek', 'Thor', 'Captain'],
      genre: 'Aksiyon',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
    },
    {
      id: 'disney-hub-starwars',
      title: 'STAR WARS',
      subtitle: 'Galaktik Destan',
      filterKey: 'starwars',
      keywords: ['Star Wars', 'Mandalorian', 'Andor', 'Jedi', 'Sith', 'Yoda', 'Skywalker', 'Vader', 'İmparator'],
      genre: 'Bilim Kurgu',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="3.6" y1="9" x2="20.4" y2="9"/><line x1="3.6" y1="15" x2="20.4" y2="15"/></svg>`
    },
    {
      id: 'disney-hub-natgeo',
      title: 'NAT GEO',
      subtitle: 'Doğa & Keşif',
      filterKey: 'natgeo',
      keywords: ['Nat Geo', 'National Geographic', 'Free Solo', 'Belgesel', 'Planet', 'Gezegen'],
      genre: 'Macera',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="3"><rect x="5" y="3" width="14" height="18" rx="2"/></svg>`
    }
  ],
  hbo: [
    {
      id: 'hbo-hub-hbo',
      title: 'HBO',
      subtitle: 'Prestij Televizyonu',
      filterKey: 'hbo',
      keywords: ['HBO', 'Game of Thrones', 'Taht Oyunları', 'Succession', 'Last of Us', 'Chernobyl', 'Çernobil', 'Sopranos', 'Wire'],
      genre: 'Dram',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>`
    },
    {
      id: 'hbo-hub-max',
      title: 'MAX ORIGINALS',
      subtitle: 'Seçkin Yapımlar',
      filterKey: 'max',
      keywords: ['Max', 'House of the Dragon', 'Euphoria', 'True Detective', 'Chernobyl', 'Succession'],
      genre: 'Suç',
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/></svg>`
    },
    {
      id: 'hbo-hub-dc',
      title: 'DC COMICS',
      subtitle: 'Süper Kahramanlar',
      filterKey: 'dc',
      keywords: ['DC', 'Batman', 'Kara Şövalye', 'Dark Knight', 'Joker', 'Superman', 'Justice League'],
      genre: 'Aksiyon',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    },
    {
      id: 'hbo-hub-wb',
      title: 'WARNER BROS',
      subtitle: '100 Yıllık Sinema',
      filterKey: 'wb',
      keywords: ['Warner', 'Inception', 'Başlangıç', 'Matrix', 'Dune', 'Interstellar', 'Yıldızlararası'],
      genre: 'Bilim Kurgu',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/></svg>`
    },
    {
      id: 'hbo-hub-wizarding',
      title: 'WIZARDING',
      subtitle: 'Büyücülük Dünyası',
      filterKey: 'wizarding',
      keywords: ['Harry Potter', 'Wizarding', 'Büyücülük', 'Fantastic Beasts', 'Hogwarts'],
      genre: 'Fantastik',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="22" x2="22" y2="2"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="18" y1="12" x2="22" y2="12"/></svg>`
    }
  ],
  prime: [
    {
      id: 'prime-hub-originals',
      title: 'PRIME ORIGINALS',
      subtitle: 'Amazon Orijinal',
      filterKey: 'prime-originals',
      keywords: ['The Boys', 'Fallout', 'Rings of Power', 'Güç Yüzükleri', 'Reacher', 'Invincible', 'Fleabag'],
      genre: 'Dram',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 14c4 4 12 4 16 0"/><polyline points="18 13 21 15 19 18"/></svg>`
    },
    {
      id: 'prime-hub-mgm',
      title: 'AMAZON MGM',
      subtitle: 'MGM Stüdyoları',
      filterKey: 'mgm',
      keywords: ['MGM', '007', 'James Bond', 'No Time to Die', 'Creed', 'Gladiator', 'Gladyatör', 'Rocky'],
      genre: 'Aksiyon',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`
    },
    {
      id: 'prime-hub-xray',
      title: 'X-RAY CINEMA',
      subtitle: 'Oyuncular & Trivia',
      filterKey: 'xray',
      keywords: ['Oppenheimer', 'Interstellar', 'Gladiator', 'Nolan', 'X-Ray'],
      genre: 'Bilim Kurgu',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
    },
    {
      id: 'prime-hub-included',
      title: '✓ prime',
      subtitle: 'Prime ile Dahil',
      filterKey: 'prime',
      keywords: ['prime'],
      genre: 'Gerilim',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
    },
    {
      id: 'prime-hub-top10',
      title: 'PRIME TOP 10',
      subtitle: 'En Çok İzlenenler',
      filterKey: 'top10',
      keywords: ['The Boys', 'Fallout', 'Breaking Bad', 'Reacher', 'Kara Şövalye'],
      genre: 'Tümü',
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>`
    }
  ],
  netflix: [
    {
      id: 'netflix-hub-originals',
      title: 'NETFLIX',
      subtitle: 'N Orijinal Yapımları',
      filterKey: 'netflix-originals',
      keywords: ['Stranger Things', 'Squid Game', 'Dark', 'Arcane', 'Black Mirror', 'Queen'],
      genre: 'Dram',
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 2v20l8-10 8 10V2h-4v12l-4-5-4 5V2z"/></svg>`
    },
    {
      id: 'netflix-hub-awards',
      title: 'ÖDÜLLÜLER',
      subtitle: 'Akademi & Festivaller',
      filterKey: 'awards',
      keywords: ['Breaking Bad', 'Parazit', 'Parasite', 'Esaretin Bedeli', 'Shawshank', 'Baba', 'Godfather'],
      genre: 'Biyografi',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M4 22h16M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34"/></svg>`
    },
    {
      id: 'netflix-hub-top10',
      title: 'TÜRKİYE İLK 10',
      subtitle: 'Bugün Trend',
      filterKey: 'top10',
      keywords: ['Breaking Bad', 'Stranger Things', 'Inception', 'Dark', 'Squid Game'],
      genre: 'Tümü',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`
    },
    {
      id: 'netflix-hub-world',
      title: 'DÜNYA SİNEMASI',
      subtitle: 'Küresel Başyapıtlar',
      filterKey: 'world',
      keywords: ['Parazit', 'Dark', 'Squid Game', 'Ruhların Kaçışı', 'Spirited Away'],
      genre: 'Suç',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    },
    {
      id: 'netflix-hub-anime',
      title: 'ANİME & AİLE',
      subtitle: 'Animasyon Dünyası',
      filterKey: 'anime',
      keywords: ['Arcane', 'Ruhların Kaçışı', 'Spirited Away', 'Örümcek-Adam', 'Spider-Verse'],
      genre: 'Animasyon',
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
    }
  ]
};

// --- RUH HALİ (MOOD) MATRİKSİ VERİTABANI ---
const MOOD_PRESETS = [
  {
    id: 'mind-bending',
    title: 'Beyin Yakan & Zihin Büken',
    shortTitle: 'Beyin Yakan',
    emoji: '🧠',
    quote: 'Ters köşe sonlar, zaman paradoksları ve gerçeklik sorgusu: Aklını başından alacak şaheserler.',
    color: '#a855f7',
    badgeText: '🧠 Beyin Yakan',
    movieIds: [
      'inception', 'interstellar', 'the-matrix', 'dark', 'memento', 'shutter-island', 
      'tenet', 'severance', 'coherence', 'donnie-darko', 'predestination', 'black-mirror', 
      'source-code', 'mr-nobody', 'prestige', 'blade-runner-2049', 'fight-club', 
      'shining', 'oppenheimer', 'the-truman-show', 'eternal-sunshine', 'groundhog-day', 
      'rick-and-morty', 'terminator-2'
    ],
    tags: ['Bilim Kurgu', 'Gizem'],
    keywords: ['zaman', 'rüya', 'gerçeklik', 'paradoks', 'kuantum', 'simülasyon', 'hafıza', 'akıl', 'ters köşe', 'paralel']
  },
  {
    id: 'tearjerker',
    title: 'Bugün Ağlamak İstiyorum',
    shortTitle: 'Ağlatma Garantili',
    emoji: '😭',
    quote: 'Boğazında düğüm bırakacak, kalbine dokunan ve gözyaşlarını tutamayacağın dokunaklı hikayeler.',
    color: '#38bdf8',
    badgeText: '😭 Gözyaşı Garantili',
    movieIds: [
      'the-green-mile', 'life-is-beautiful', 'the-pianist', 'schindlers-list', 'good-will-hunting', 
      'babam-ve-oglum', 'ayla', 'miracle-in-cell-no-7', 'hachiko', 'grave-of-the-fireflies', 
      'eternal-sunshine', 'manchester-by-the-sea', 'the-father', 'shawshank', 'lion-king', 
      'coco', 'wall-e', 'gladiator', 'interstellar', 'the-last-of-us', 'chernobyl'
    ],
    tags: ['Dram', 'Biyografi'],
    keywords: ['hüzün', 'gözyaşı', 'ayrılık', 'veda', 'fedakarlık', 'özlem', 'ağlatıcı', 'dram', 'ölüm', 'trajedi']
  },
  {
    id: 'chill-comedy',
    title: 'Kafamı Boşaltacak Komedi',
    shortTitle: 'Kafa Boşaltan',
    emoji: '😂',
    quote: 'Günün tüm dertlerini unutturacak, kahkaha dolu, hafif ve enerjini yükseltecek neşeli yapımlar.',
    color: '#eab308',
    badgeText: '😂 Kafa Boşaltan',
    movieIds: [
      'the-hangover', 'superbad', 'the-truman-show', 'the-grand-budapest-hotel', 'deadpool', 
      'deadpool-wolverine', 'olumlu-dunya', 'olumlu-dunya-2', 'gora', 'arog', 
      'knives-out', 'the-big-lebowski', 'brooklyn-nine-nine', 'the-office', 'friends', 
      'ted', 'groundhog-day', 'modern-family', 'ted-lasso', 'free-guy', 
      'jump-street-21', 'the-mask', 'rick-and-morty', 'cinayet-susu', 'shaun-of-the-dead', 
      'the-intouchables', 'ratatouille'
    ],
    tags: ['Komedi'],
    keywords: ['komedi', 'kahkaha', 'eğlence', 'neşeli', 'espri', 'hafif', 'çerezlik', 'absürt']
  },
  {
    id: 'adrenaline',
    title: 'Adrenalin Patlaması & Aksiyon',
    shortTitle: 'Saf Adrenalin',
    emoji: '⚡',
    quote: 'Nabzını 180\'e fırlatacak, soluksuz kovalamacalar ve yerinde duramayacağın patlayıcı aksiyon.',
    color: '#ef4444',
    badgeText: '⚡ Saf Adrenalin',
    movieIds: [
      'john-wick-4', 'mad-max-fury-road', 'top-gun-maverick', 'terminator-2', 
      'mission-impossible-dead-reckoning', 'dark-knight', 'avengers-endgame', 'gladiator', 
      'the-mandalorian', 'reacher', 'no-time-to-die', 'deadpool', 'deadpool-wolverine', 
      'spider-verse', 'fallout', 'iron-man', 'dune-2'
    ],
    tags: ['Aksiyon', 'Macera'],
    keywords: ['aksiyon', 'kovalamaca', 'patlama', 'dövüş', 'adrenalin', 'hız', 'tempo', 'savaş']
  },
  {
    id: 'escapism',
    title: 'Başka Dünyalara Kaçış & Büyü',
    shortTitle: 'Büyülü Evrenler',
    emoji: '🌌',
    quote: 'Gerçek dünyadan tamamen kopup fantastik diyarlarda, uzak galaksilerde ve büyülü evrenlerde kaybol.',
    color: '#06b6d4',
    badgeText: '🌌 Büyülü Kaçış',
    movieIds: [
      'star-wars-empire', 'the-mandalorian', 'star-wars-new-hope', 'harry-potter', 
      'rings-of-power', 'avatar', 'dune-2', 'spirited-away', 'arcane', 'gora', 
      'free-guy', 'ratatouille', 'amelie', 'mr-nobody'
    ],
    tags: ['Fantastik', 'Macera', 'Bilim Kurgu'],
    keywords: ['büyü', 'galaksi', 'uzay', 'fantastik', 'destansı', 'evren', 'yolculuk', 'kaçış']
  },
  {
    id: 'thrill',
    title: 'Gerilimden Tırnak Yedirten',
    shortTitle: 'Karanlık Gerilim',
    emoji: '🕵️',
    quote: 'Son saniyeye kadar nefesini kesecek, tekinsiz sırlar ve tırnak kemirtecek yüksek tansiyon.',
    color: '#ec4899',
    badgeText: '🕵️ Nefes Kesen Gerilim',
    movieIds: [
      'silence-of-the-lambs', 'prisoners', 'gone-girl', 'zodiac', 'chernobyl', 
      'breaking-bad', 'seven', 'squid-game', 'parasite', 'joker', 
      'alien', 'shining', 'dark', 'memento', 'shutter-island'
    ],
    tags: ['Gerilim', 'Korku', 'Suç', 'Gizem'],
    keywords: ['gerilim', 'cinayet', 'katil', 'sır', 'karanlık', 'tekinsiz', 'tırnak yedirten', 'korku', 'soruşturma']
  },
  {
    id: 'prestige',
    title: 'Ödüllü Prestij & Şaheser',
    shortTitle: 'Prestij Sinema',
    emoji: '🥂',
    quote: 'Dâhiyane senaryolar, ödüllü dev performanslar ve sinema sanatının zirvesi başyapıtlar.',
    color: '#10b981',
    badgeText: '🥂 Prestij Başyapıt',
    movieIds: [
      'schindlers-list', 'the-pianist', 'the-green-mile', 'silence-of-the-lambs', 
      'life-is-beautiful', 'the-father', 'the-intouchables', 'succession', 'godfather', 
      'shawshank', 'oppenheimer', 'whiplash', 'game-of-thrones', 'pulp-fiction', 
      'the-office', 'severance', 'the-truman-show', 'the-grand-budapest-hotel'
    ],
    tags: ['Dram', 'Tarih', 'Biyografi'],
    keywords: ['oscar', 'emmy', 'ödüllü', 'başyapıt', 'şaheser', 'prestij', 'sinema sanatı', 'zirve']
  },
  {
    id: 'heartwarming',
    title: 'İç Isıtan & Umut Veren',
    shortTitle: 'İç Isıtan',
    emoji: '❤️',
    quote: 'Ruhunu dinlendirecek, dostluk, sevgi, aile bağı ve yaşama sevinci aşılayan sıcacık filmler.',
    color: '#f43f5e',
    badgeText: '❤️ İç Isıtan',
    movieIds: [
      'the-intouchables', 'amelie', 'ratatouille', 'life-is-beautiful', 'good-will-hunting', 
      'hachiko', 'ayla', 'modern-family', 'ted-lasso', 'friends', 'shawshank', 
      'wall-e', 'coco', 'lion-king', 'up', 'free-solo', 'spirited-away'
    ],
    tags: ['Animasyon', 'Dram', 'Komedi'],
    keywords: ['umut', 'dostluk', 'aile', 'sevgi', 'iç ısıtan', 'yaşam', 'iyilik', 'samimi', 'nezaket']
  }
];

// --- SİNEMATİK RENK PALETİ & GÖRSEL TON VERİTABANI ---
const COLOR_PALETTES = [
  {
    id: 'wes-anderson-pastel',
    title: 'Pastel & Masalsı Simetri',
    directorSignature: 'Wes Anderson Tonları',
    subText: 'Pudra pembesi, vanilya sarısı, nane yeşili ve nostaljik masal tonları.',
    accentColor: '#f472b6',
    swatches: ['#f472b6', '#fef08a', '#6ee7b7', '#38bdf8', '#fbcfe8'],
    movieIds: [
      'the-grand-budapest-hotel', 'amelie', 'coco', 'up', 'spirited-away', 
      'ratatouille', 'the-truman-show', 'life-is-beautiful', 'modern-family', 'free-guy'
    ],
    keywords: ['pastel', 'pembe', 'sarı', 'masal', 'simetri', 'renkli', 'wes anderson']
  },
  {
    id: 'fincher-noir-teal',
    title: 'Karanlık & Zümrüt Yeşili / Teal',
    directorSignature: 'David Fincher Tonları',
    subText: 'Desatüre zümrüt, çelik laciverti, tekinsiz gölgeler ve soğuk noir atmosfer.',
    accentColor: '#10b981',
    swatches: ['#064e3b', '#0f766e', '#1e293b', '#0284c7', '#022c22'],
    movieIds: [
      'seven', 'fight-club', 'the-matrix', 'gone-girl', 'zodiac', 
      'shining', 'alien', 'chernobyl', 'dark', 'severance', 
      'silence-of-the-lambs', 'prisoners', 'dark-knight', 'squid-game'
    ],
    keywords: ['karanlık', 'yeşil', 'teal', 'noir', 'gölge', 'fincher', 'tekinsiz']
  },
  {
    id: 'mad-max-desert-amber',
    title: 'Sıcak Çöl & Pas Turuncusu',
    directorSignature: 'Mad Max / Dune Çöl Tonları',
    subText: 'Kızgın çöl kumu, yanık amber, pas kırmızısı ve yüksek kontrastlı sıcak ışık.',
    accentColor: '#f97316',
    swatches: ['#ea580c', '#d97706', '#b45309', '#78350f', '#f59e0b'],
    movieIds: [
      'mad-max-fury-road', 'dune-2', 'blade-runner-2049', 'gladiator', 'breaking-bad', 
      'fallout', 'oppenheimer', 'interstellar', 'reacher', 'gora', 'arog'
    ],
    keywords: ['çöl', 'turuncu', 'amber', 'kum', 'sıcak', 'mad max', 'dune']
  },
  {
    id: 'blade-runner-neon',
    title: 'Siberpunk & Neon Işıltısı',
    directorSignature: 'Blade Runner / Siberpunk',
    subText: 'Elektrik moru, fuşya, neon mavi ve yağmurlu gece sokak yansımaları.',
    accentColor: '#a855f7',
    swatches: ['#a855f7', '#ec4899', '#06b6d4', '#4f46e5', '#3b0764'],
    movieIds: [
      'blade-runner-2049', 'arcane', 'spider-verse', 'john-wick-4', 'stranger-things', 
      'the-matrix', 'inception', 'deadpool', 'deadpool-wolverine', 'rick-and-morty'
    ],
    keywords: ['neon', 'mor', 'siberpunk', 'fuşya', 'parlak', 'blade runner', 'cyberpunk']
  },
  {
    id: 'nolan-arctic-cold',
    title: 'Arktik Soğuk Mavi & Çelik',
    directorSignature: 'Christopher Nolan Soğuk Palet',
    subText: 'Buzul mavisi, çelik grisi, metalik duman ve dondurucu monokromatik zarafet.',
    accentColor: '#38bdf8',
    swatches: ['#0284c7', '#38bdf8', '#94a3b8', '#334155', '#0f172a'],
    movieIds: [
      'interstellar', 'inception', 'shutter-island', 'tenet', 'manchester-by-the-sea', 
      'the-pianist', 'star-wars-empire', 'free-solo', 'source-code', 'the-father', 
      'the-mandalorian'
    ],
    keywords: ['soğuk', 'mavi', 'buz', 'çelik', 'gri', 'nolan', 'metalik']
  },
  {
    id: 'godfather-sepia-gold',
    title: 'Altın Çağ & Sıcak Sepya',
    directorSignature: 'Godfather / Klasik 35mm',
    subText: 'Sıcak tütün kahvesi, bal sarısı, altın ışık huzmeleri ve klasik 35mm doku.',
    accentColor: '#eab308',
    swatches: ['#b45309', '#f59e0b', '#78350f', '#451a03', '#292524'],
    movieIds: [
      'godfather', 'pulp-fiction', 'prestige', 'good-will-hunting', 'the-green-mile', 
      'the-intouchables', 'succession', 'the-big-lebowski', 'game-of-thrones', 'lion-king', 
      'babam-ve-oglum', 'ayla'
    ],
    keywords: ['sepya', 'altın', 'kahverengi', 'klasik', 'sıcak', 'godfather', 'vintage']
  },
  {
    id: 'schindler-monochrome',
    title: 'Monokrom & Siyah-Beyaz',
    directorSignature: 'Film Noir & Schindler',
    subText: 'Derin siyahlar, gümüş beyazlar, chiaroscuro gölge sanatı ve dramatik kontrast.',
    accentColor: '#e4e4e7',
    swatches: ['#000000', '#27272a', '#71717a', '#d4d4d8', '#ffffff'],
    movieIds: [
      'schindlers-list', 'oppenheimer', 'memento', 'the-pianist', 'coherence', 
      'donnie-darko', 'grave-of-the-fireflies'
    ],
    keywords: ['siyah beyaz', 'monokrom', 'gri', 'noir', 'kontrast', 'schindler']
  },
  {
    id: 'vibrant-pop-art',
    title: 'Canlı & Doygun Pop-Art',
    directorSignature: 'Marvel & Doygun Renkler',
    subText: 'Patlayan ana renkler, parlak kırmızı, canlı sarı ve çizgi roman enerjisi.',
    accentColor: '#ef4444',
    swatches: ['#ef4444', '#3b82f6', '#eab308', '#10b981', '#ec4899'],
    movieIds: [
      'deadpool', 'deadpool-wolverine', 'the-hangover', 'superbad', 'avengers-endgame', 
      'iron-man', 'free-guy', 'jump-street-21', 'the-mask', 'olumlu-dunya', 
      'olumlu-dunya-2', 'shaun-of-the-dead', 'brooklyn-nine-nine', 'the-office', 
      'friends', 'ted', 'cinayet-susu'
    ],
    keywords: ['pop art', 'canlı', 'kırmızı', 'renkli', 'çizgi roman', 'parlak', 'marvel']
  }
];

// --- DİNAMİK ARAMA ÇUBUĞU GÖRSEL TEMALARI & PARTİKÜLLERİ ---
const SEARCH_VISUAL_THEMES = {
  'mad-max': {
    id: 'mad-max',
    themeClass: 'theme-mad-max',
    title: 'Mad Max: Fury Road',
    subtitle: 'Kızgın Çöl Kumu, Fırtına & War Rig',
    emblem: '🏜️',
    badgeText: '🏜️ Çöl & Kum Taneleri',
    particleType: 'sand',
    accentColor: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
    quote: 'Kıyamet sonrası çöl fırtınası, sonsuz kum tepeleri ve War Rig kovalamacası.',
    movieId: 'mad-max-fury-road',
    keywords: ['mad max', 'fury road', 'mad max fury road', 'dune', 'arrakis', 'çöl', 'desert', 'kum', 'sand', 'kum taneleri', 'fırtına']
  },
  'game-of-thrones': {
    id: 'game-of-thrones',
    themeClass: 'theme-game-of-thrones',
    title: 'Game of Thrones (Taht Oyunları)',
    subtitle: 'Demir Taht, Buzul Kış & Ejderha Ateşi',
    emblem: '⚔️',
    badgeText: '⚔️ Demir Taht • Kış Geliyor',
    particleType: 'snow_and_embers',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    quote: 'Demir Taht için verilen kanlı taht kavgaları, Valyrian çeliği ve yaklaşan kış.',
    movieId: 'game-of-thrones',
    keywords: ['game of thrones', 'got', 'taht', 'demir taht', 'taht oyunları', 'throne', 'iron throne', 'house of the dragon', 'targaryen', 'winter is coming', 'kış geliyor']
  },
  'matrix': {
    id: 'matrix',
    themeClass: 'theme-matrix',
    title: 'The Matrix',
    subtitle: 'Dijital Yeşil Kod Yağmuru & Simülasyon',
    emblem: '🕶️',
    badgeText: '🟢 Kod Yağmuru & Simülasyon',
    particleType: 'matrix_rain',
    accentColor: '#22c55e',
    glowColor: 'rgba(34, 197, 94, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    quote: 'Gerçeklik bir simülasyondur. Kırmızı hap mı, yoksa mavi hap mı?',
    movieId: 'the-matrix',
    keywords: ['matrix', 'the matrix', 'neo', 'morpheus', 'yeşil kod', 'kod', 'simülasyon']
  },
  'interstellar': {
    id: 'interstellar',
    themeClass: 'theme-interstellar',
    title: 'Interstellar (Yıldızlararası)',
    subtitle: 'Gargantua Kara Deliği & Uzay-Zaman',
    emblem: '🕳️',
    badgeText: '🌌 Gargantua & Kara Delik',
    particleType: 'cosmic_warp',
    accentColor: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=80',
    quote: 'Sevgi, zaman ve mekân boyutlarını aşabilen tek olgudur.',
    movieId: 'interstellar',
    keywords: ['interstellar', 'yıldızlararası', 'kara delik', 'gargantua', 'solucan deliği', 'uzay']
  },
  'breaking-bad': {
    id: 'breaking-bad',
    themeClass: 'theme-breaking-bad',
    title: 'Breaking Bad',
    subtitle: 'Heisenberg, Karavan & Mavi Kristal',
    emblem: '⚗️',
    badgeText: '🧪 Kimyasal Duman & Heisenberg',
    particleType: 'chemical_smoke',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    quote: 'Ben tehlikede değilim Skyler, tehlikenin ta kendisi benim!',
    movieId: 'breaking-bad',
    keywords: ['breaking bad', 'walter white', 'heisenberg', 'jesse pinkman', 'saul goodman', 'better call saul']
  },
  'stranger-things': {
    id: 'stranger-things',
    themeClass: 'theme-stranger-things',
    title: 'Stranger Things',
    subtitle: 'The Upside Down, Kızıl Şimşekler & Spores',
    emblem: '⚡',
    badgeText: '🔴 Baş Aşağı Evren & Spores',
    particleType: 'spores',
    accentColor: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.8)',
    backdropUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    quote: 'Hawkins kasabasının altındaki karanlık boyut uyanıyor.',
    movieId: 'stranger-things',
    keywords: ['stranger things', 'upside down', 'demogorgon', 'vecna', 'eleven']
  },
  'star-wars': {
    id: 'star-wars',
    themeClass: 'theme-star-wars',
    title: 'Star Wars & Mandalorian',
    subtitle: 'Galaktik İmparatorluk & Hiperuzay',
    emblem: '✨',
    badgeText: '⭐ Hiperuzay & Güç',
    particleType: 'cosmic_warp',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80',
    quote: 'Güç seninle olsun. Çok çok uzak bir galakside...',
    movieId: 'star-wars-empire',
    keywords: ['star wars', 'mandalorian', 'jedi', 'darth vader', 'yoda', 'grogu', 'skywalker', 'andor']
  },
  'harry-potter': {
    id: 'harry-potter',
    themeClass: 'theme-harry-potter',
    title: 'Harry Potter',
    subtitle: 'Hogwarts Kalesi & Altın Sihir Parıltısı',
    emblem: '🪄',
    badgeText: '✨ Hogwarts & Sihir',
    particleType: 'golden_sparks',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    quote: 'Hogwarts her zaman yardım arayanlara kapılarını açar.',
    movieId: 'harry-potter',
    keywords: ['harry potter', 'hogwarts', 'voldemort', 'dumbledore', 'snitch', 'büyü']
  },
  'batman': {
    id: 'batman',
    themeClass: 'theme-batman',
    title: 'The Dark Knight (Kara Şövalye)',
    subtitle: 'Gotham Yağmuru & Yarasa Sinyali',
    emblem: '🦇',
    badgeText: '🦇 Gotham & Bat-Signal',
    particleType: 'rain',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.75)',
    backdropUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    quote: 'Bazen gerçekler yeterli değildir. İnsanlar daha fazlasını hak eder.',
    movieId: 'dark-knight',
    keywords: ['batman', 'dark knight', 'kara şövalye', 'joker', 'gotham']
  }
};

// --- ARAMA ÇUBUĞU CANLI PARTİKÜL MOTORU (CANVAS 2D) ---
class SearchFXEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext('2d') : null;
    this.particles = [];
    this.animId = null;
    this.currentType = null;
    this.isRunning = false;
    this.width = 0;
    this.height = 0;

    if (this.canvas) {
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }
  }

  resize() {
    if (!this.canvas || !this.canvas.parentElement) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width || 380;
    this.height = rect.height || 42;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setTheme(type) {
    if (this.currentType === type && this.isRunning) return;
    this.stop();
    if (!type || !this.canvas || !this.ctx) return;

    this.currentType = type;
    this.isRunning = true;
    this.resize();
    this.initParticles(type);
    this.canvas.classList.add('active');
    this.loop();
  }

  stop() {
    this.isRunning = false;
    this.currentType = null;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.classList.remove('active');
    }
    this.particles = [];
  }

  initParticles(type) {
    this.particles = [];
    const count = type === 'sand' ? 65 : 
                  type === 'snow_and_embers' ? 50 : 
                  type === 'matrix_rain' ? 30 : 
                  type === 'cosmic_warp' ? 45 : 35;

    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(type, true));
    }
  }

  createParticle(type, randomX = false) {
    const w = this.width || 380;
    const h = this.height || 42;

    if (type === 'sand') {
      // Çöl Kum Taneleri (Mad Max / Dune): Sağa/sola hızla savrulan altın & yanık amber zerrecikler
      const colors = ['#ea580c', '#f59e0b', '#d97706', '#fef08a', '#fb923c'];
      return {
        x: randomX ? Math.random() * w : w + Math.random() * 20,
        y: Math.random() * h,
        vx: -(2.5 + Math.random() * 4.5),
        vy: (Math.random() - 0.5) * 1.2,
        size: 1 + Math.random() * 2.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.35 + Math.random() * 0.65,
        type: 'sand'
      };
    } else if (type === 'snow_and_embers') {
      // Game of Thrones: Düşen buz taneleri ve yukarı uçuşan ejderha kıvılcımları
      const isEmber = Math.random() < 0.28;
      return {
        x: Math.random() * w,
        y: isEmber ? (randomX ? Math.random() * h : h + 5) : (randomX ? Math.random() * h : -5),
        vx: (Math.random() - 0.5) * 1.2,
        vy: isEmber ? -(1.2 + Math.random() * 2) : (0.8 + Math.random() * 1.8),
        size: isEmber ? 1.5 + Math.random() * 2.5 : 1.2 + Math.random() * 2.2,
        color: isEmber ? (Math.random() < 0.5 ? '#f97316' : '#ef4444') : (Math.random() < 0.5 ? '#e0f2fe' : '#67e8f9'),
        alpha: 0.4 + Math.random() * 0.6,
        isEmber: isEmber,
        type: 'snow_and_embers'
      };
    } else if (type === 'matrix_rain') {
      const chars = ['0', '1', 'λ', 'σ', '7', 'X', 'Z', '9', '§'];
      return {
        x: Math.random() * w,
        y: randomX ? Math.random() * h : -10,
        vx: 0,
        vy: 2.5 + Math.random() * 4,
        char: chars[Math.floor(Math.random() * chars.length)],
        size: 9 + Math.random() * 4,
        color: Math.random() < 0.25 ? '#86efac' : '#22c55e',
        alpha: 0.4 + Math.random() * 0.6,
        type: 'matrix_rain'
      };
    } else if (type === 'cosmic_warp') {
      // Interstellar & Star Wars: Hızlanan yıldız izleri
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4;
      return {
        x: randomX ? Math.random() * w : w / 2,
        y: randomX ? Math.random() * h : h / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * (speed * 0.3),
        size: 1 + Math.random() * 2.4,
        color: Math.random() < 0.5 ? '#38bdf8' : '#e0f2fe',
        alpha: 0.3 + Math.random() * 0.7,
        type: 'cosmic_warp'
      };
    } else if (type === 'chemical_smoke') {
      // Breaking Bad: Yükselen yeşil & camgöbeği kimyasal duman kabarcıkları
      return {
        x: Math.random() * w,
        y: randomX ? Math.random() * h : h + 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(1 + Math.random() * 2),
        size: 2 + Math.random() * 4.5,
        color: Math.random() < 0.6 ? '#06b6d4' : '#10b981',
        alpha: 0.25 + Math.random() * 0.5,
        type: 'chemical_smoke'
      };
    } else if (type === 'golden_sparks') {
      // Harry Potter: Altın büyü kıvılcımları
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(0.5 + Math.random() * 1.5),
        size: 1.5 + Math.random() * 2.8,
        color: Math.random() < 0.5 ? '#fbbf24' : '#f59e0b',
        alpha: 0.4 + Math.random() * 0.6,
        pulse: Math.random() * Math.PI,
        type: 'golden_sparks'
      };
    } else if (type === 'rain') {
      // Batman: Gotham eğik yağmur damlaları
      return {
        x: randomX ? Math.random() * w : Math.random() * (w + 40) - 20,
        y: randomX ? Math.random() * h : -5,
        vx: -1.2,
        vy: 4 + Math.random() * 5,
        size: 1.2,
        length: 5 + Math.random() * 8,
        color: '#94a3b8',
        alpha: 0.3 + Math.random() * 0.4,
        type: 'rain'
      };
    } else {
      // Genel ambient partikül
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: 1.5 + Math.random() * 2,
        color: '#e50914',
        alpha: 0.3 + Math.random() * 0.4,
        type: 'generic_ambient'
      };
    }
  }

  loop() {
    if (!this.isRunning || !this.ctx || !this.canvas) return;

    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.type === 'sand') {
        p.vy = Math.sin(p.x * 0.05) * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 4;
        ctx.fill();

        if (p.x < -10) Object.assign(p, this.createParticle('sand', false));
      } else if (p.type === 'snow_and_embers') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.isEmber ? '#ef4444' : '#38bdf8';
        ctx.shadowBlur = p.isEmber ? 8 : 4;
        ctx.fill();

        if (p.isEmber && p.y < -10) Object.assign(p, this.createParticle('snow_and_embers', false));
        else if (!p.isEmber && p.y > h + 10) Object.assign(p, this.createParticle('snow_and_embers', false));
      } else if (p.type === 'matrix_rain') {
        ctx.font = `${p.size}px monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = '#22c55e';
        ctx.shadowBlur = 6;
        ctx.fillText(p.char, p.x, p.y);

        if (p.y > h + 15) Object.assign(p, this.createParticle('matrix_rain', false));
      } else if (p.type === 'rain') {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.vx * 1.5, p.y + p.length);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.lineWidth = p.size;
        ctx.stroke();

        if (p.y > h + 15) Object.assign(p, this.createParticle('rain', false));
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        if (p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) {
          Object.assign(p, this.createParticle(p.type, false));
        }
      }
    }

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;

    this.animId = requestAnimationFrame(() => this.loop());
  }
}

class Cine3DApp {
  constructor() {
    this.movies = [...MOVIES_DATA];
    this.filteredMovies = [...MOVIES_DATA];
    this.activeGenre = "Tümü";
    this.minImdb = 0;
    this.searchQuery = "";
    this.sortBy = "imdb-desc";
    this.viewMode = "grid"; // 'grid' veya 'coverflow'
    this.watchlist = this.loadWatchlist();
    // İzlediklerim Listesi & Aktif Çekmece Sekmesi (Faz 3)
    this.watchedList = this.loadWatchedList();
    this.activeDrawerTab = 'watchlist'; // 'watchlist', 'watched', 'stats'
    // Sinematik VS / Düello Listesi (Faz 2: En fazla 2 film)
    this.vsList = [];
    this.activeMovieForModal = null;
    this.coverflowInstance = null;
    this.heroMovieIndex = 0;
    this.featuredMovies = this.movies.filter(m => m.isFeatured);

    // Aktif Marka / Franchise Hub Filtresi (Star Wars, Marvel, Pixar, HBO, Prime vb.)
    this.activeHubFilter = null;
    this.activeHubTitle = "";
    this.activeHubKeywords = [];

    // Aktif Ruh Hali (Mood) Filtresi
    this.activeMoodFilter = null;
    this.activeMoodObj = null;

    // Aktif Süre Filtresi ('all', 'quick', 'standard', 'epic', 'series')
    this.activeDurationFilter = 'all';

    // Aktif Görsel Ton & Renk Paleti Filtresi (Wes Anderson, David Fincher, Mad Max vb.)
    this.activePaletteFilter = null;
    this.activePaletteObj = null;

    // Çevrimiçi Servis ve Arama Durumu
    this.apiService = window.cinemaApiService;
    this.staticMode = false;
    this.onlineSearchTimeout = null;
    this.isOnlineSearching = false;
    this.curatedCategoryIndex = 0;
    this.curatedCategories = ['series', 'trending', 'scifi', 'action', 'masterpieces'];

    // Platform Teması (Netflix, HBO Max, Disney+, Prime Video)
    this.activeTheme = localStorage.getItem('cine3d_theme') || 'netflix';

    // Dinamik Arama Görseli & Partikül Motoru
    this.searchFXEngine = null;
    this.activeSearchVisualTheme = null;

    // Aktif Çalan Orijinal Film/Dizi Müziği (OST)
    this.currentPlayingOstMovieId = null;

    this.init();
  }

  // Aktif temaya özel öne çıkan vitrin filmleri
  getThemeFeaturedMovies(theme = this.activeTheme) {
    const themePool = this.movies.filter(m => {
      if (theme === 'disney') {
        return (Array.isArray(m.hubTags) && m.hubTags.includes('disney')) || 
               (Array.isArray(m.platforms) && m.platforms.includes('disney'));
      } else if (theme === 'hbo') {
        return (Array.isArray(m.hubTags) && (m.hubTags.includes('hbo') || m.hubTags.includes('max') || m.hubTags.includes('wb') || m.hubTags.includes('dc'))) || 
               (Array.isArray(m.platforms) && m.platforms.includes('hbo'));
      } else if (theme === 'prime') {
        return (Array.isArray(m.hubTags) && (m.hubTags.includes('prime-originals') || m.hubTags.includes('prime') || m.hubTags.includes('mgm'))) || 
               (Array.isArray(m.platforms) && m.platforms.includes('prime'));
      } else {
        return (Array.isArray(m.hubTags) && (m.hubTags.includes('netflix-originals') || m.hubTags.includes('netflix'))) || 
               (Array.isArray(m.platforms) && m.platforms.includes('netflix'));
      }
    });

    const featured = themePool.filter(m => m.isFeatured);
    return featured.length > 0 ? featured : (themePool.length > 0 ? themePool : this.movies.filter(m => m.isFeatured));
  }

  init() {
    // 3D Canvas başlat
    if (window.initThreeScene) {
      try {
        window.initThreeScene();
      } catch (err) {
        // WebGL kapalı/engelli cihazlarda renderer kurulamıyor; bu hata tüm init()
        // zincirini kesip sayfayı boş bırakıyordu. 2D modda devam ediyoruz.
        console.warn('[3D] Sahne başlatılamadı, 2D modda devam ediliyor:', err && err.message);
        const canvas = document.getElementById('cinema-3d-canvas');
        if (canvas) canvas.style.display = 'none';
        document.body.classList.add('no-webgl');
      }
    }

    // Temayı başlat
    this.applyTheme(this.activeTheme, false);

    // Canlı Arama Partikül & Atmosfer Motorunu Başlat
    const searchCanvas = document.getElementById('search-fx-canvas');
    if (searchCanvas) {
      this.searchFXEngine = new SearchFXEngine(searchCanvas);
    }
    this.initSearchVisualInteractions();

    // Arayüz elemanlarını bağla
    this.renderGenreFilters();
    this.renderImdbPresets();
    this.renderPlatformHubs();
    this.renderMoodSection();
    this.renderPaletteSection();
    this.initDiscoveryTabs();
    this.renderHeroBanner();
    this.applyFilters();
    this.bindGlobalEvents();
    this.initHeroAutoCycle();

    // Ses bildirim ikonu durumu
    this.updateAudioButtonState();

    // İnteraktif Hikaye Akışı Motoru (Kendi Seçimini Kendin Yarat)
    if (window.StoryAdventureEngine) {
      this.storyAdventure = new StoryAdventureEngine(this);
    }

    // Arka planda ilk çevrimiçi film/dizi paketini yükle (Katalog zenginleştirme)
    this.fetchInitialOnlineBatch();

    // URL Parametrelerini Çözümle (Deep Linking: ?movie=... & ?tab=...)
    this.handleInitialUrlParams();

    // PWA (Progressive Web App) Servis Çalışanı ve Kurulum Desteği
    this.initPWA();
  }

  // --- KEŞİF & MOD MERKEZİ SEKME YÖNETİMİ ---
  initDiscoveryTabs() {
    const hubWrapper = document.getElementById('discovery-hub-section');
    if (!hubWrapper) return;

    hubWrapper.querySelectorAll('.discovery-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const panelId = btn.dataset.tabPanel;
        this.switchDiscoveryTab(panelId);
      });
    });
  }

  switchDiscoveryTab(panelId) {
    const hubWrapper = document.getElementById('discovery-hub-section');
    if (!hubWrapper) return;

    const allBtns = hubWrapper.querySelectorAll('.discovery-tab-btn');
    const allPanels = hubWrapper.querySelectorAll('.discovery-panel');

    allBtns.forEach(btn => {
      const isMatch = btn.dataset.tabPanel === panelId;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    if (panelId === 'collapse') {
      allPanels.forEach(p => p.classList.add('hidden'));
      this.showToast('Keşif panelleri gizlendi, doğrudan katalog listeleniyor.', 'info');
      return;
    }

    allPanels.forEach(panel => {
      if (panel.id === panelId) {
        panel.classList.remove('hidden');
        panel.classList.add('active');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('active');
      }
    });

    if (panelId === 'roulette-section') {
      this.initRoulette();
    } else if (panelId === 'duo-match-section') {
      if (window.cine3dFeatures && window.cine3dFeatures.duoMatcher) {
        window.cine3dFeatures.duoMatcher.init();
      }
    }

    if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
  }

  // --- PLATFORM MARKA & HUB BARI (Disney+, HBO Max, Prime Video, Netflix) ---
  renderPlatformHubs() {
    const container = document.getElementById('platform-hubs-section');
    if (!container) return;

    const currentTheme = this.activeTheme || 'netflix';
    const hubs = PLATFORM_HUBS[currentTheme] || PLATFORM_HUBS.netflix;

    const themeTitles = {
      netflix: { title: 'N Orijinal & Öne Çıkan Kategoriler', badge: 'NETFLIX HUBS' },
      hbo: { title: 'Warner Bros. Discovery & HBO Hubs', badge: 'MAX BRAND HUBS' },
      disney: { title: 'Disney+ Marka Vitrini', badge: 'DISNEY+ BRANDS' },
      prime: { title: 'Amazon Prime Kanalları & Kategorileri', badge: 'PRIME CHANNELS' }
    };
    const meta = themeTitles[currentTheme] || themeTitles.netflix;

    container.innerHTML = `
      <div class="platform-hubs-title-row">
        <h3 class="platform-hubs-title">
          <span>${meta.title}</span>
        </h3>
        <span class="platform-hubs-badge">${meta.badge}</span>
      </div>
      <div class="platform-hubs-grid">
        ${hubs.map(hub => `
          <div class="hub-card card-3d-tilt ${this.activeHubFilter === hub.filterKey ? 'active' : ''}" 
               data-filter-key="${hub.filterKey}" 
               data-hub-title="${hub.title}" 
               data-genre="${hub.genre}" 
               data-hub-id="${hub.id}">
            <div class="hub-card-sheen"></div>
            <div class="hub-card-icon-wrap">${hub.iconSvg}</div>
            <div class="hub-card-title">${hub.title}</div>
            <div class="hub-card-subtitle">${hub.subtitle}</div>
          </div>
        `).join('')}
      </div>
    `;

    // Hub tıklama dinleyicileri - Franchise & Marka bazlı anında filtreleme
    container.querySelectorAll('.hub-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const filterKey = card.dataset.filterKey;
        const hubTitle = card.dataset.hubTitle;
        const currentTheme = this.activeTheme || 'netflix';
        const hubsList = PLATFORM_HUBS[currentTheme] || PLATFORM_HUBS.netflix;
        const hubObj = hubsList.find(h => h.filterKey === filterKey);
        const keywords = hubObj ? hubObj.keywords : [];

        this.setHubFilter(filterKey, hubTitle, keywords);
      });
    });

    this.bind3DTiltToCards(container.querySelectorAll('.hub-card'));
  }

  setHubFilter(filterKey, hubTitle, keywords = []) {
    const container = document.getElementById('platform-hubs-section');
    
    // Toggle mantığı: Zaten aktifse filtreyi kaldır
    if (this.activeHubFilter === filterKey) {
      this.activeHubFilter = null;
      this.activeHubTitle = "";
      this.activeHubKeywords = [];
      if (container) {
        container.querySelectorAll('.hub-card').forEach(c => c.classList.remove('active'));
      }
      this.showToast(`Marka filtresi kaldırıldı, tüm katalog listeleniyor.`, 'info');
    } else {
      this.activeHubFilter = filterKey;
      this.activeHubTitle = hubTitle;
      this.activeHubKeywords = keywords;
      if (container) {
        container.querySelectorAll('.hub-card').forEach(c => {
          c.classList.toggle('active', c.dataset.filterKey === filterKey);
        });
      }
      this.showToast(`✨ ${hubTitle} koleksiyonu filtrelendi!`, 'success');
      if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
    }

    this.applyFilters();

    // Kataloğa yumuşak ve ofsetli kaydır (Kullanıcı asla olduğu yerde kalmaz)
    const moviesSection = document.getElementById('movies-anchor');
    if (moviesSection) {
      const nav = document.getElementById('navbar');
      const navHeight = nav ? nav.offsetHeight : 74;
      const targetPos = moviesSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 15;
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: 'smooth'
      });
    }
  }

  clearHubFilter() {
    this.activeHubFilter = null;
    this.activeHubTitle = "";
    this.activeHubKeywords = [];
    const container = document.getElementById('platform-hubs-section');
    if (container) {
      container.querySelectorAll('.hub-card').forEach(c => c.classList.remove('active'));
    }
    this.showToast(`Marka filtresi kaldırıldı.`, 'info');
    this.applyFilters();
  }

  // --- RUH HALİ (MOOD) MATRİKSİ YÖNETİMİ ---
  renderMoodSection() {
    const container = document.getElementById('mood-cards-container');
    if (!container) return;

    container.innerHTML = MOOD_PRESETS.map(mood => {
      const matchCount = this.movies.filter(m => this.isMovieMatchingMood(m, mood.id)).length;
      const isActive = this.activeMoodFilter === mood.id;

      return `
        <div class="mood-card card-3d-tilt ${isActive ? 'active' : ''}" 
             data-mood-id="${mood.id}" 
             style="${isActive ? `border-color: ${mood.color} !important; box-shadow: 0 0 30px ${mood.color}88, inset 0 0 15px ${mood.color}33 !important;` : ''}">
          <div class="mood-card-sheen"></div>
          <div class="mood-card-top-row">
            <span class="mood-card-emoji">${mood.emoji}</span>
            <span class="mood-card-count" style="${isActive ? `background: ${mood.color}; color: #000; border-color: ${mood.color};` : ''}">
              ${matchCount} Yapım
            </span>
          </div>
          <div class="mood-card-body">
            <h4 class="mood-card-title" style="${isActive ? `color: ${mood.color};` : ''}">${mood.title}</h4>
            <p class="mood-card-quote">"${mood.quote}"</p>
            <div class="mood-card-active-indicator" style="color: ${mood.color};">
              <span>✓ Aktif Ruh Hali</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Kart tıklama dinleyicileri
    container.querySelectorAll('.mood-card').forEach(card => {
      card.addEventListener('click', () => {
        const moodId = card.dataset.moodId;
        this.setMoodFilter(moodId);
      });
    });

    // 3D Parallaks Tilt efekti bağla
    this.bind3DTiltToCards(container.querySelectorAll('.mood-card'));

    // Üstteki "Filtreyi Kaldır" butonunun görünürlüğü
    const topClearBtn = document.getElementById('btn-clear-mood-top');
    if (topClearBtn) {
      topClearBtn.classList.toggle('hidden', !this.activeMoodFilter);
    }
  }

  isMovieMatchingMood(movie, moodId) {
    if (!moodId) return true;
    const mood = MOOD_PRESETS.find(m => m.id === moodId);
    if (!mood) return true;

    // 1. Film nesnesinde moods dizisi tanımlıysa (Katalogdaki tüm yapımlar için en kesin kural)
    if (Array.isArray(movie.moods) && movie.moods.length > 0) {
      return movie.moods.includes(moodId);
    }

    // 2. Doğrudan mood.movieIds listesinde var mı?
    if (Array.isArray(mood.movieIds) && mood.movieIds.includes(movie.id)) {
      return true;
    }

    // 3. İnternetten canlı arama veya çevrimiçi API ile çekilen filmler için akıllı filtreleme:
    if (moodId === 'chill-comedy') {
      const isComedy = Array.isArray(movie.genres) && movie.genres.some(g => ['Komedi', 'Comedy'].includes(g));
      if (!isComedy) return false;
      const hasHeavy = Array.isArray(movie.genres) && movie.genres.some(g => ['Korku', 'Horror', 'Savaş', 'War'].includes(g));
      if (hasHeavy) return false;
      return true;
    }

    if (moodId === 'tearjerker') {
      const isDrama = Array.isArray(movie.genres) && movie.genres.some(g => ['Dram', 'Drama', 'Biyografi'].includes(g));
      if (!isDrama) return false;
      const text = `${movie.title} ${movie.summary || ''}`.toLowerCase();
      return ['ölüm', 'kayıp', 'hüzün', 'gözyaşı', 'fedakarlık', 'ayrılık', 'hastalık', 'dram', 'trajedi', 'savaş'].some(k => text.includes(k));
    }

    if (moodId === 'mind-bending') {
      const isSciFi = Array.isArray(movie.genres) && movie.genres.some(g => ['Bilim Kurgu', 'Gizem', 'Sci-Fi', 'Mystery'].includes(g));
      if (!isSciFi) return false;
      const text = `${movie.title} ${movie.summary || ''}`.toLowerCase();
      return ['zaman', 'rüya', 'hafıza', 'paradoks', 'gerçeklik', 'akıl', 'simülasyon', 'boyut', 'zihin', 'ters köşe', 'paralel'].some(k => text.includes(k));
    }

    if (Array.isArray(movie.genres) && mood.tags.some(t => movie.genres.includes(t))) {
      const textToSearch = `${movie.title} ${movie.originalTitle || ''} ${movie.summary || ''} ${movie.tagline || ''}`.toLowerCase();
      if (mood.keywords.some(kw => textToSearch.includes(kw.toLowerCase()))) {
        return true;
      }
    }

    return false;
  }

  getMovieMoodBadge(movie) {
    if (this.activeMoodObj && this.isMovieMatchingMood(movie, this.activeMoodObj.id)) {
      return this.activeMoodObj;
    }
    if (Array.isArray(movie.moods) && movie.moods.length > 0) {
      const mObj = MOOD_PRESETS.find(m => m.id === movie.moods[0]);
      if (mObj) return mObj;
    }
    for (const mood of MOOD_PRESETS) {
      if (mood.movieIds.includes(movie.id)) return mood;
    }
    return null;
  }

  setMoodFilter(moodId) {
    if (this.activeMoodFilter === moodId) {
      this.clearMoodFilter();
      return;
    }

    const mood = MOOD_PRESETS.find(m => m.id === moodId);
    if (!mood) return;

    this.activeMoodFilter = mood.id;
    this.activeMoodObj = mood;

    // Çakışmayı önlemek için tekil marka filtresini sıfırla
    this.activeHubFilter = null;
    this.activeHubTitle = "";
    this.activeHubKeywords = [];
    const hubContainer = document.getElementById('platform-hubs-section');
    if (hubContainer) {
      hubContainer.querySelectorAll('.hub-card').forEach(c => c.classList.remove('active'));
    }

    this.renderMoodSection();
    this.applyFilters();

    if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
    this.showToast(`${mood.emoji} "${mood.title}" moduna göre filtrelendi!`, 'success');

    // Kataloğa yumuşak kaydır
    const moviesSection = document.getElementById('movies-anchor');
    if (moviesSection) {
      const nav = document.getElementById('navbar');
      const navHeight = nav ? nav.offsetHeight : 74;
      const targetPos = moviesSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 15;
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: 'smooth'
      });
    }
  }

  clearMoodFilter() {
    this.activeMoodFilter = null;
    this.activeMoodObj = null;
    this.renderMoodSection();
    this.applyFilters();
    this.showToast('Ruh hali filtresi kaldırıldı, tüm katalog gösteriliyor.', 'info');
  }

  selectRandomMood() {
    const diceBtn = document.getElementById('btn-surprise-mood');
    if (diceBtn) {
      diceBtn.classList.add('rolling');
      setTimeout(() => diceBtn.classList.remove('rolling'), 700);
    }

    const available = MOOD_PRESETS.filter(m => m.id !== this.activeMoodFilter);
    const chosen = available[Math.floor(Math.random() * available.length)];
    if (chosen) {
      this.setMoodFilter(chosen.id);
      this.showToast(`🎲 Şansına "${chosen.title}" çıktı! İyi seyirler!`, 'success');
      if (window.cinemaAudio) window.cinemaAudio.playThemeSound(this.activeTheme);
    }
  }

  // --- GÖRSEL TON VE RENK PALETİ MOTORU ---
  renderPaletteSection() {
    const container = document.getElementById('palette-cards-container');
    if (!container) return;

    container.innerHTML = COLOR_PALETTES.map(pal => {
      const matchCount = this.movies.filter(m => this.isMovieMatchingPalette(m, pal.id)).length;
      const isActive = this.activePaletteFilter === pal.id;

      return `
        <div class="palette-card card-3d-tilt ${isActive ? 'active' : ''}" 
             data-palette-id="${pal.id}"
             style="${isActive ? `border-color: ${pal.accentColor} !important; box-shadow: 0 0 32px ${pal.accentColor}66, inset 0 0 16px ${pal.accentColor}22 !important;` : ''}">
          <div class="palette-card-sheen"></div>
          <div class="palette-swatches-strip">
            ${pal.swatches.map(color => `
              <div class="palette-swatch-bar" style="background-color: ${color};" title="${color}"></div>
            `).join('')}
          </div>
          <div class="palette-card-body">
            <div class="palette-top-row">
              <span class="palette-director-badge" style="color: ${pal.accentColor}; border-color: ${pal.accentColor}66;">
                ${pal.directorSignature}
              </span>
              <span class="palette-match-count" style="${isActive ? `background: ${pal.accentColor}; color: #000; border-color: ${pal.accentColor};` : ''}">
                ${matchCount} Yapım
              </span>
            </div>
            <h4 class="palette-card-title" style="${isActive ? `color: ${pal.accentColor};` : ''}">${pal.title}</h4>
            <p class="palette-card-desc">${pal.subText}</p>
            <div class="palette-active-indicator" style="color: ${pal.accentColor};">
              <span>✓ Aktif Renk Paleti</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Kart tıklama dinleyicileri
    container.querySelectorAll('.palette-card').forEach(card => {
      card.addEventListener('click', () => {
        const palId = card.dataset.paletteId;
        this.setPaletteFilter(palId);
      });
    });

    // 3D Parallaks Tilt efekti bağla
    this.bind3DTiltToCards(container.querySelectorAll('.palette-card'));

    // Üstteki "Paleti Temizle" butonunun görünürlüğü
    const topClearBtn = document.getElementById('btn-clear-palette-top');
    if (topClearBtn) {
      topClearBtn.classList.toggle('hidden', !this.activePaletteFilter);
    }
  }

  isMovieMatchingPalette(movie, paletteId) {
    if (!paletteId) return true;
    const palette = COLOR_PALETTES.find(p => p.id === paletteId);
    if (!palette) return true;

    // 1. Doğrudan palet film listesinde tanımlı mı?
    if (Array.isArray(palette.movieIds) && palette.movieIds.includes(movie.id)) {
      return true;
    }

    // 2. Film nesnesinde palette / palettes alanı varsa
    if (movie.palette === paletteId || (Array.isArray(movie.palettes) && movie.palettes.includes(paletteId))) {
      return true;
    }

    // 3. Yönetmen ve imza tarzı eşleşmeleri
    const director = (movie.director || '').toLowerCase();
    if (paletteId === 'wes-anderson-pastel' && director.includes('anderson')) return true;
    if (paletteId === 'fincher-noir-teal' && director.includes('fincher')) return true;
    if (paletteId === 'nolan-arctic-cold' && director.includes('nolan')) return true;
    if (paletteId === 'mad-max-desert-amber' && (director.includes('miller') || director.includes('villeneuve'))) return true;
    if (paletteId === 'godfather-sepia-gold' && (director.includes('coppola') || director.includes('tarantino'))) return true;

    // 4. Anahtar kelime taraması (Başlık, orijinal ad, özet)
    const textToSearch = `${movie.title} ${movie.originalTitle || ''} ${movie.summary || ''} ${movie.director || ''}`.toLowerCase();
    if (Array.isArray(palette.keywords) && palette.keywords.some(kw => textToSearch.includes(kw.toLowerCase()))) {
      return true;
    }

    return false;
  }

  getMoviePalette(movie) {
    if (this.activePaletteObj && this.isMovieMatchingPalette(movie, this.activePaletteObj.id)) {
      return this.activePaletteObj;
    }
    for (const pal of COLOR_PALETTES) {
      if (Array.isArray(pal.movieIds) && pal.movieIds.includes(movie.id)) {
        return pal;
      }
    }
    return null;
  }

  setPaletteFilter(paletteId) {
    if (this.activePaletteFilter === paletteId) {
      this.clearPaletteFilter();
      return;
    }

    const palette = COLOR_PALETTES.find(p => p.id === paletteId);
    if (!palette) return;

    this.activePaletteFilter = palette.id;
    this.activePaletteObj = palette;

    // Çakışmayı önlemek için tekil marka filtresini sıfırla
    this.activeHubFilter = null;
    this.activeHubTitle = "";
    this.activeHubKeywords = [];
    const hubContainer = document.getElementById('platform-hubs-section');
    if (hubContainer) {
      hubContainer.querySelectorAll('.hub-card').forEach(c => c.classList.remove('active'));
    }

    this.renderPaletteSection();
    this.applyFilters();

    if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
    this.showToast(`🎨 "${palette.title}" (${palette.directorSignature}) tonlarına göre filtrelendi!`, 'success');

    // Kataloğa yumuşak kaydır
    const moviesSection = document.getElementById('movies-anchor');
    if (moviesSection) {
      const nav = document.getElementById('navbar');
      const navHeight = nav ? nav.offsetHeight : 74;
      const targetPos = moviesSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 15;
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: 'smooth'
      });
    }
  }

  clearPaletteFilter() {
    this.activePaletteFilter = null;
    this.activePaletteObj = null;
    this.renderPaletteSection();
    this.applyFilters();
    this.showToast('Renk paleti filtresi kaldırıldı, tüm katalog listeleniyor.', 'info');
  }

  selectRandomPalette() {
    const diceBtn = document.getElementById('btn-surprise-palette');
    if (diceBtn) {
      diceBtn.classList.add('rolling');
      setTimeout(() => diceBtn.classList.remove('rolling'), 700);
    }

    const available = COLOR_PALETTES.filter(p => p.id !== this.activePaletteFilter);
    const chosen = available[Math.floor(Math.random() * available.length)];
    if (chosen) {
      this.setPaletteFilter(chosen.id);
      this.showToast(`🎨 Şansına "${chosen.title}" (${chosen.directorSignature}) çıktı!`, 'success');
      if (window.cinemaAudio) window.cinemaAudio.playThemeSound(this.activeTheme);
    }
  }

  // --- İZLEME LİSTESİ (LOCAL STORAGE) ---
  loadWatchlist() {
    try {
      const stored = localStorage.getItem('cine3d_watchlist');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveWatchlist() {
    try {
      localStorage.setItem('cine3d_watchlist', JSON.stringify(this.watchlist));
      this.updateWatchlistCount();
    } catch (e) {
      console.warn("Watchlist kaydedilemedi:", e);
    }
  }

  toggleWatchlist(movie) {
    const exists = this.watchlist.some(m => m.id === movie.id);
    if (exists) {
      this.watchlist = this.watchlist.filter(m => m.id !== movie.id);
      this.showToast(`"${movie.title}" listenizden kaldırıldı.`, 'info');
    } else {
      this.watchlist.push(movie);
      this.showToast(`"${movie.title}" listenize eklendi!`, 'success');
      if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
    }
    this.saveWatchlist();
    this.updateWatchlistModalBtn(movie.id);
    this.renderWatchlistDrawer();
  }

  isMovieInWatchlist(movieId) {
    return this.watchlist.some(m => m.id === movieId);
  }

  updateWatchlistCount() {
    const badge = document.getElementById('watchlist-badge');
    if (badge) {
      badge.textContent = this.watchlist.length;
      badge.style.display = this.watchlist.length > 0 ? 'inline-flex' : 'none';
    }
  }

  // =========================================================================
  // --- İZLEDİKLERİM (WATCHED) & SİNEMA KARNEM (FAZ 3) ---
  // =========================================================================
  loadWatchedList() {
    try {
      const stored = localStorage.getItem('cine3d_watched');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveWatchedList() {
    try {
      localStorage.setItem('cine3d_watched', JSON.stringify(this.watchedList));
      const countBadge = document.getElementById('drawer-tab-watched-count');
      if (countBadge) countBadge.textContent = this.watchedList.length;
    } catch (e) {
      console.warn("Watched list kaydedilemedi:", e);
    }
  }

  isMovieWatched(movieId) {
    return this.watchedList.some(item => item.id === movieId);
  }

  getMovieWatchedRecord(movieId) {
    return this.watchedList.find(item => item.id === movieId) || null;
  }

  toggleWatched(movie, userRating = 10) {
    if (!movie) return;
    const exists = this.isMovieWatched(movie.id);

    if (exists) {
      this.watchedList = this.watchedList.filter(item => item.id !== movie.id);
      this.showToast(`"${movie.title}" izlediklerinizden kaldırıldı.`, 'info');
    } else {
      this.watchedList.push({
        id: movie.id,
        userRating: Number(userRating) || 10,
        watchedAt: Date.now()
      });
      this.showToast(`👁️ "${movie.title}" izlendi olarak işaretlendi!`, 'success');
      if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
    }

    this.saveWatchedList();
    this.updateWatchedCardButtons();
    this.updateWatchedModalBtn(movie.id);
    this.renderWatchlistDrawer();
  }

  setMovieUserRating(movieId, rating) {
    const record = this.getMovieWatchedRecord(movieId);
    if (record) {
      record.userRating = Math.max(1, Math.min(10, Number(rating) || 10));
      this.saveWatchedList();
      this.renderWatchlistDrawer();
      this.showToast(`⭐ Kişisel puanınız güncellendi: ${record.userRating}/10`, 'success');
      if (window.cinemaAudio) window.cinemaAudio.playHover();
    }
  }

  updateWatchedCardButtons() {
    document.querySelectorAll('.card-watched-btn').forEach(btn => {
      const id = btn.dataset.movieId;
      const watched = this.isMovieWatched(id);
      btn.classList.toggle('active', watched);
      btn.setAttribute('title', watched ? 'İzlenenlerden Çıkar' : 'İzledim Olarak İşaretle');
    });
  }

  updateWatchedModalBtn(movieId) {
    const btn = document.getElementById('modal-watched-btn');
    const txt = document.getElementById('modal-watched-text');
    if (!btn || !txt) return;
    const watched = this.isMovieWatched(movieId);
    btn.classList.toggle('active', watched);
    txt.textContent = watched ? 'İzlendi (✓)' : 'İzledim';
  }

  switchDrawerTab(tabName) {
    this.activeDrawerTab = tabName || 'watchlist';
    document.querySelectorAll('.drawer-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.drawerTab === this.activeDrawerTab);
    });
    this.renderWatchlistDrawer();
  }

  loadDemoWatchedHistory() {
    const demoIds = ['inception', 'interstellar', 'dark-knight', 'fight-club', 'pulp-fiction', 'matrix', 'parasite', 'oppenheimer'];
    this.watchedList = demoIds.map((id, index) => ({
      id,
      userRating: [10, 10, 9, 9, 8, 9, 10, 9][index] || 9,
      watchedAt: Date.now() - (index * 86400000 * 3)
    }));
    this.saveWatchedList();
    this.updateWatchedCardButtons();
    if (this.activeMovieForModal) this.updateWatchedModalBtn(this.activeMovieForModal.id);
    this.renderWatchlistDrawer();
    this.showToast('📊 8 Başyapıtlık örnek izleme geçmişi yüklendi!', 'success');
    if (window.cinemaAudio) window.cinemaAudio.playTaDum();
  }

  clearWatchedHistory() {
    this.watchedList = [];
    this.saveWatchedList();
    this.updateWatchedCardButtons();
    if (this.activeMovieForModal) this.updateWatchedModalBtn(this.activeMovieForModal.id);
    this.renderWatchlistDrawer();
    this.showToast('İzleme geçmişiniz sıfırlandı.', 'info');
  }

  // =========================================================================
  // --- SİNEMATİK DÜELLO & FİLM KIYASLAMA (FAZ 2) ---
  // =========================================================================
  isMovieInVS(movieId) {
    return this.vsList.some(m => m.id === movieId);
  }

  toggleVS(movie) {
    if (!movie) return;
    const exists = this.isMovieInVS(movie.id);

    if (exists) {
      this.vsList = this.vsList.filter(m => m.id !== movie.id);
      this.showToast(`"${movie.title}" düellodan çıkarıldı.`, 'info');
    } else {
      if (this.vsList.length >= 2) {
        // En fazla 2 film karşılaştırılabilir: 2.yi değiştir veya uyar
        this.showToast(`⚔️ Düelloda en fazla 2 film yarışabilir! Karşılaştırmayı başlatabilir veya birini çıkarabilirsiniz.`, 'warn');
        this.updateVSDock(true);
        return;
      }
      this.vsList.push(movie);
      this.showToast(`⚔️ "${movie.title}" düelloya eklendi (${this.vsList.length}/2)`, 'success');
      if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
    }

    this.updateVSDock(true);
    this.updateVSCardButtons();
    this.updateVSModalBtn(movie.id);

    // Eğer 2 film dolduysa alt dock'u vurgula
    if (this.vsList.length === 2 && window.cinemaAudio) {
      window.cinemaAudio.playHover();
    }
  }

  updateVSCardButtons() {
    document.querySelectorAll('.card-vs-btn').forEach(btn => {
      const id = btn.dataset.movieId;
      const active = this.isMovieInVS(id);
      btn.classList.toggle('active', active);
      btn.setAttribute('title', active ? 'Kıyaslamadan Çıkar' : 'Düelloya / VSye Ekle');
    });
  }

  updateVSModalBtn(movieId) {
    const vsBtn = document.getElementById('modal-vs-btn');
    const vsText = document.getElementById('modal-vs-text');
    if (!vsBtn || !vsText) return;
    const active = this.isMovieInVS(movieId);
    vsBtn.classList.toggle('active', active);
    vsText.textContent = active ? 'Düellodan Çıkar' : 'Filmle Kıyasla (VS)';
  }

  updateVSDock(showIfNotEmpty = false) {
    const dock = document.getElementById('vs-dock');
    const badge = document.getElementById('vs-badge');
    const countBadge = document.getElementById('vs-dock-count');
    const slot1 = document.getElementById('vs-slot-1');
    const slot2 = document.getElementById('vs-slot-2');
    const launchBtn = document.getElementById('vs-launch-btn');

    if (badge) {
      badge.textContent = this.vsList.length;
      badge.style.display = this.vsList.length > 0 ? 'inline-flex' : 'none';
    }

    if (countBadge) {
      countBadge.textContent = `${this.vsList.length}/2`;
    }

    if (dock) {
      if (this.vsList.length > 0 && showIfNotEmpty) {
        dock.classList.remove('hidden');
      } else if (this.vsList.length === 0) {
        dock.classList.add('hidden');
      }
    }

    // Slot 1 Render
    if (slot1) {
      const m1 = this.vsList[0];
      if (m1) {
        slot1.className = 'vs-slot vs-slot-1 filled';
        slot1.innerHTML = `
          <img src="${m1.posterUrl}" class="vs-slot-thumb" alt="${m1.title}" onerror="this.src=getFallbackPoster('${m1.title}', '${m1.genres[0]}', '${m1.imdbRating}');" />
          <div class="vs-slot-meta">
            <div class="vs-slot-title" title="${m1.title}">${m1.title}</div>
            <div class="vs-slot-info">★ ${m1.imdbRating} • ${m1.year}</div>
          </div>
          <button class="vs-slot-remove" data-slot="0" title="Kaldır">✕</button>
        `;
      } else {
        slot1.className = 'vs-slot vs-slot-1';
        slot1.innerHTML = `<div class="vs-slot-empty">1. Film Seçin (Kartlardan ⚔️ VS'ye tıklayın)</div>`;
      }
    }

    // Slot 2 Render
    if (slot2) {
      const m2 = this.vsList[1];
      if (m2) {
        slot2.className = 'vs-slot vs-slot-2 filled';
        slot2.innerHTML = `
          <img src="${m2.posterUrl}" class="vs-slot-thumb" alt="${m2.title}" onerror="this.src=getFallbackPoster('${m2.title}', '${m2.genres[0]}', '${m2.imdbRating}');" />
          <div class="vs-slot-meta">
            <div class="vs-slot-title" title="${m2.title}">${m2.title}</div>
            <div class="vs-slot-info">★ ${m2.imdbRating} • ${m2.year}</div>
          </div>
          <button class="vs-slot-remove" data-slot="1" title="Kaldır">✕</button>
        `;
      } else {
        slot2.className = 'vs-slot vs-slot-2';
        slot2.innerHTML = `<div class="vs-slot-empty">2. Film Seçin (Rakip belirleyin)</div>`;
      }
    }

    // Slot kaldırma butonlarını dinle
    dock?.querySelectorAll('.vs-slot-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const slotIdx = parseInt(btn.dataset.slot, 10);
        this.vsList.splice(slotIdx, 1);
        this.updateVSDock(true);
        this.updateVSCardButtons();
        if (this.activeMovieForModal) this.updateVSModalBtn(this.activeMovieForModal.id);
      });
    });

    // Başlat butonu durumu
    if (launchBtn) {
      if (this.vsList.length === 2) {
        launchBtn.classList.remove('disabled');
        launchBtn.innerHTML = `<span>⚔️ DÜELLOYU BAŞLAT (${this.vsList[0].title} vs ${this.vsList[1].title})</span>`;
      } else {
        launchBtn.classList.add('disabled');
        launchBtn.innerHTML = `<span>⚔️ DÜELLOYU BAŞLAT (2 Film Gerekli)</span>`;
      }
    }
  }

  parseVotesNumber(votesStr) {
    if (!votesStr) return 100000;
    const s = String(votesStr).toUpperCase().trim();
    if (s.includes('M')) return Math.round(parseFloat(s.replace('M', '')) * 1000000);
    if (s.includes('K')) return Math.round(parseFloat(s.replace('K', '')) * 1000);
    const n = parseInt(s.replace(/[^0-9]/g, ''), 10);
    return isNaN(n) ? 100000 : n;
  }

  openVSModal(movie1 = null, movie2 = null) {
    if (movie1 && movie2) {
      this.vsList = [movie1, movie2];
    }

    if (this.vsList.length < 2) {
      if (this.vsList.length === 1) {
        // Otomatik olarak harika bir rakip öner ve eşle
        const m1 = this.vsList[0];
        const candidate = this.movies.find(m => m.id !== m1.id && (m.genres.some(g => m1.genres.includes(g)) || m.imdbRating >= 8.7));
        if (candidate) {
          this.vsList.push(candidate);
        }
      } else {
        this.selectRandomVSPair(false);
      }
    }

    this.updateVSDock(false);
    this.updateVSCardButtons();

    const m1 = this.vsList[0];
    const m2 = this.vsList[1];
    if (!m1 || !m2) return;

    // Metrik Karşılaştırma Hesaplamaları
    const votes1 = this.parseVotesNumber(m1.imdbVotes);
    const votes2 = this.parseVotesNumber(m2.imdbVotes);
    const mins1 = this.parseDurationMinutes(m1.duration) || 120;
    const mins2 = this.parseDurationMinutes(m2.duration) || 120;

    const numMins1 = typeof mins1 === 'number' ? mins1 : 120;
    const numMins2 = typeof mins2 === 'number' ? mins2 : 120;

    // Bar oranları
    const imdbSum = m1.imdbRating + m2.imdbRating;
    const imdbBar1 = ((m1.imdbRating / imdbSum) * 100).toFixed(1);
    const imdbBar2 = (100 - imdbBar1).toFixed(1);

    const votesSum = votes1 + votes2;
    const votesBar1 = ((votes1 / votesSum) * 100).toFixed(1);
    const votesBar2 = (100 - votesBar1).toFixed(1);

    const durationSum = numMins1 + numMins2;
    const durBar1 = ((numMins1 / durationSum) * 100).toFixed(1);
    const durBar2 = (100 - durBar1).toFixed(1);

    // Ortak ve Ayrışan Türler
    const sharedGenres = m1.genres.filter(g => m2.genres.includes(g));

    // Kazanan Puanı Algoritması
    // Puan Formülü: IMDb * 10 + log10(votes)*4 + Oscar Ödülü Vurgusu
    const oscarBonus1 = (m1.awards && m1.awards.toLowerCase().includes('oscar')) ? 6 : 2;
    const oscarBonus2 = (m2.awards && m2.awards.toLowerCase().includes('oscar')) ? 6 : 2;
    const score1 = (m1.imdbRating * 10) + (Math.log10(votes1) * 4) + oscarBonus1;
    const score2 = (m2.imdbRating * 10) + (Math.log10(votes2) * 4) + oscarBonus2;

    const isTie = Math.abs(score1 - score2) < 0.5;
    const winner = score1 > score2 ? m1 : m2;
    const loser = score1 > score2 ? m2 : m1;

    let winnerReason = '';
    if (isTie) {
      winnerReason = `İki başyapıt da sinema tarihinin zirvesinde! IMDb puanları ve küresel beğeni skorları birbirine denk.`;
    } else {
      const diff = Math.abs(m1.imdbRating - m2.imdbRating).toFixed(1);
      winnerReason = `🏆 <strong>${winner.title}</strong>, ${winner.imdbRating} IMDb puanı, ${winner.imdbVotes} kullanıcı oyu ve prestijli ödül geçmişiyle bu sinematik düellonun galibi ilan edildi!`;
    }

    const modalBody = document.getElementById('vs-modal-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="vs-arena-header">
        <div class="vs-arena-tag">⚔️ SİNEMATİK DÜELLO ARENASI</div>
        <h2 class="vs-arena-title">BÜYÜK BAŞYAPIT KARŞILAŞTIRMASI</h2>
        <p class="vs-arena-sub">İki dev yapımın IMDb puanı, küresel oyları, süreleri ve sinematik başarıları karşılaştırılıyor.</p>
      </div>

      <!-- Zafer Banner'ı -->
      <div class="vs-winner-banner">
        <div class="vs-winner-headline">
          <span>👑</span>
          <span>${isTie ? 'EFSANEVİ BERABERLİK!' : `CINE3D ZAFER TAHTI: ${winner.title.toUpperCase()}`}</span>
          <span>👑</span>
        </div>
        <div class="vs-winner-desc">${winnerReason}</div>
      </div>

      <!-- Karşılaşma Kartları Izgarası -->
      <div class="vs-fighters-grid">
        <!-- 1. Dövüşçü (Sol) -->
        <div class="vs-fighter-card ${!isTie && winner.id === m1.id ? 'is-winner' : ''}">
          ${!isTie && winner.id === m1.id ? '<div class="fighter-crown-badge">👑 KAZANAN</div>' : ''}
          <div class="vs-fighter-top">
            <img src="${m1.posterUrl}" class="vs-fighter-poster" alt="${m1.title}" onerror="this.src=getFallbackPoster('${m1.title}', '${m1.genres[0]}', '${m1.imdbRating}');" />
            <div class="vs-fighter-info">
              <h3 class="vs-fighter-title">${m1.title}</h3>
              <div class="vs-fighter-meta">${m1.originalTitle} • ${m1.year} • ${m1.director}</div>
              <div class="vs-fighter-genres">
                ${m1.genres.map(g => `<span class="vs-genre-tag ${sharedGenres.includes(g) ? 'shared' : ''}">${g}</span>`).join('')}
              </div>
            </div>
          </div>
          <p style="font-size:0.84rem; color:var(--text-muted); line-height:1.4; margin:0;">${m1.tagline || m1.summary.slice(0, 110) + '...'}</p>
          <div style="display:flex; gap:8px; margin-top:auto;">
            <button class="btn btn-primary btn-sm" id="vs-play-m1" style="font-size:0.8rem; padding:6px 12px; width:100%;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              ${m1.title} Fragmanı
            </button>
          </div>
        </div>

        <!-- Merkez Sütun: VS Logosu -->
        <div class="vs-center-pillar">
          <div class="vs-giant-emblem">VS</div>
          <span class="vs-sparks-label">KAPIŞMA</span>
        </div>

        <!-- 2. Dövüşçü (Sağ) -->
        <div class="vs-fighter-card ${!isTie && winner.id === m2.id ? 'is-winner' : ''}">
          ${!isTie && winner.id === m2.id ? '<div class="fighter-crown-badge">👑 KAZANAN</div>' : ''}
          <div class="vs-fighter-top">
            <img src="${m2.posterUrl}" class="vs-fighter-poster" alt="${m2.title}" onerror="this.src=getFallbackPoster('${m2.title}', '${m2.genres[0]}', '${m2.imdbRating}');" />
            <div class="vs-fighter-info">
              <h3 class="vs-fighter-title">${m2.title}</h3>
              <div class="vs-fighter-meta">${m2.originalTitle} • ${m2.year} • ${m2.director}</div>
              <div class="vs-fighter-genres">
                ${m2.genres.map(g => `<span class="vs-genre-tag ${sharedGenres.includes(g) ? 'shared' : ''}">${g}</span>`).join('')}
              </div>
            </div>
          </div>
          <p style="font-size:0.84rem; color:var(--text-muted); line-height:1.4; margin:0;">${m2.tagline || m2.summary.slice(0, 110) + '...'}</p>
          <div style="display:flex; gap:8px; margin-top:auto;">
            <button class="btn btn-primary btn-sm" id="vs-play-m2" style="font-size:0.8rem; padding:6px 12px; width:100%;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              ${m2.title} Fragmanı
            </button>
          </div>
        </div>
      </div>

      <!-- Kıyaslama Metrik Barları -->
      <div class="vs-metrics-list">
        <!-- 1. IMDb Puanı Metriği -->
        <div class="vs-metric-row">
          <div class="vs-metric-header">
            <span class="metric-val-left">★ ${m1.imdbRating} ${m1.imdbRating >= m2.imdbRating ? '👑' : ''}</span>
            <span class="metric-name">⭐ IMDb Resmi Puanı</span>
            <span class="metric-val-right">${m2.imdbRating >= m1.imdbRating ? '👑 ' : ''}★ ${m2.imdbRating}</span>
          </div>
          <div class="vs-bar-container">
            <div class="vs-bar-left" style="width: ${imdbBar1}%;"></div>
            <div class="vs-bar-right" style="width: ${imdbBar2}%;"></div>
          </div>
        </div>

        <!-- 2. IMDb Kullanıcı Oyu -->
        <div class="vs-metric-row">
          <div class="vs-metric-header">
            <span class="metric-val-left">${m1.imdbVotes} oy ${votes1 >= votes2 ? '👑' : ''}</span>
            <span class="metric-name">🗳️ Toplam Kullanıcı Oyu</span>
            <span class="metric-val-right">${votes2 >= votes1 ? '👑 ' : ''}${m2.imdbVotes} oy</span>
          </div>
          <div class="vs-bar-container">
            <div class="vs-bar-left" style="width: ${votesBar1}%;"></div>
            <div class="vs-bar-right" style="width: ${votesBar2}%;"></div>
          </div>
        </div>

        <!-- 3. Süre Metriği -->
        <div class="vs-metric-row">
          <div class="vs-metric-header">
            <span class="metric-val-left">${m1.duration}</span>
            <span class="metric-name">⏱️ Yapım Süresi</span>
            <span class="metric-val-right">${m2.duration}</span>
          </div>
          <div class="vs-bar-container">
            <div class="vs-bar-left" style="width: ${durBar1}%;"></div>
            <div class="vs-bar-right" style="width: ${durBar2}%;"></div>
          </div>
        </div>

        <!-- 4. Ödüller & İtibar -->
        <div class="vs-metric-row">
          <div class="vs-metric-header">
            <span class="metric-val-left" style="font-size:0.8rem;">🏆 ${m1.awards || 'Popüler Sinema'}</span>
            <span class="metric-name">🎖️ Ödüller & İtibar</span>
            <span class="metric-val-right" style="font-size:0.8rem;">🏆 ${m2.awards || 'Popüler Sinema'}</span>
          </div>
        </div>

        <!-- 5. Ortak Türler -->
        <div class="vs-metric-row">
          <div class="vs-metric-header">
            <span class="metric-name" style="width:100%; text-align:center; color:#38bdf8;">
              ${sharedGenres.length > 0 ? `Ortak Genler: ${sharedGenres.join(', ')}` : 'Farklı Türler'}
            </span>
          </div>
        </div>
      </div>

      <!-- Hızlı Düello Presetleri -->
      <div class="vs-presets-section">
        <div class="vs-presets-title">
          <span>⚡</span>
          <span>Efsanevi Hazır Düelloları Dene:</span>
        </div>
        <div class="vs-presets-row">
          <button class="vs-preset-btn" data-p1="inception" data-p2="interstellar">🌌 Başlangıç vs Yıldızlararası</button>
          <button class="vs-preset-btn" data-p1="dark-knight" data-p2="fight-club">⚡ Kara Şövalye vs Dövüş Kulübü</button>
          <button class="vs-preset-btn" data-p1="godfather" data-p2="pulp-fiction">👑 Baba vs Ucuz Roman</button>
          <button class="vs-preset-btn" data-p1="breaking-bad" data-p2="better-call-saul">🧪 Breaking Bad vs Better Call Saul</button>
          <button class="vs-preset-btn" data-p1="matrix" data-p2="blade-runner-2049">🤖 Matrix vs Blade Runner 2049</button>
        </div>
      </div>
    `;

    const vsModal = document.getElementById('vs-modal');
    vsModal?.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Dinleyiciler: Fragmanlar
    document.getElementById('vs-play-m1')?.addEventListener('click', () => {
      this.closeVSModal();
      this.openModal(m1, true);
    });

    document.getElementById('vs-play-m2')?.addEventListener('click', () => {
      this.closeVSModal();
      this.openModal(m2, true);
    });

    // Hazır Düello Butonları
    modalBody.querySelectorAll('.vs-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const p1 = btn.dataset.p1;
        const p2 = btn.dataset.p2;
        this.loadVSPreset(p1, p2);
      });
    });

    if (window.cinemaAudio) window.cinemaAudio.playTaDum();
  }

  closeVSModal() {
    const vsModal = document.getElementById('vs-modal');
    vsModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  loadVSPreset(id1, id2) {
    const m1 = this.movies.find(m => m.id === id1) || this.movies[0];
    const m2 = this.movies.find(m => m.id === id2) || this.movies[1];
    this.vsList = [m1, m2];
    this.openVSModal(m1, m2);
  }

  selectRandomVSPair(openModalDirectly = true) {
    const pool = this.movies.filter(m => m.imdbRating >= 8.5);
    if (pool.length < 2) return;
    const idx1 = Math.floor(Math.random() * pool.length);
    let idx2 = Math.floor(Math.random() * pool.length);
    while (idx2 === idx1) {
      idx2 = Math.floor(Math.random() * pool.length);
    }

    const m1 = pool[idx1];
    const m2 = pool[idx2];
    this.vsList = [m1, m2];
    this.updateVSDock(true);
    this.updateVSCardButtons();

    if (openModalDirectly) {
      this.openVSModal(m1, m2);
    } else {
      this.showToast(`🎲 Rastgele Düello seçildi: ${m1.title} vs ${m2.title}`, 'info');
    }
  }

  // =========================================================================
  // --- SİNEMATİK FİLM RULETİ & BİLET OLUŞTURUCU (FAZ 4) ---
  // =========================================================================
  initRoulette() {
    const strip = document.getElementById('roulette-strip');
    if (!strip) return;

    let pool = [...this.movies];
    if (this.activeRouletteFilter === 'masterpiece') pool = pool.filter(m => m.imdbRating >= 8.8);
    else if (this.activeRouletteFilter === 'scifi') pool = pool.filter(m => Array.isArray(m.genres) && m.genres.includes('Bilim Kurgu'));
    else if (this.activeRouletteFilter === 'mind-bending') pool = pool.filter(m => Array.isArray(m.moods) && m.moods.includes('mind-bending'));
    else if (this.activeRouletteFilter === 'series') pool = pool.filter(m => m.isSeries);

    if (pool.length < 5) pool = [...this.movies];

    const repeated = [];
    while (repeated.length < 32) {
      repeated.push(...pool);
    }
    this.roulettePool = repeated.slice(0, 36);

    strip.innerHTML = this.roulettePool.map((m, idx) => `
      <div class="roulette-card-item" data-index="${idx}" data-movie-id="${m.id}">
        <img src="${m.posterUrl}" alt="${m.title}" onerror="this.src=getFallbackPoster('${m.title.replace(/'/g, "\\'")}', '${m.genres[0]}', '${m.imdbRating}');" />
        <div class="item-badge">★ ${m.imdbRating} ${m.title}</div>
      </div>
    `).join('');

    strip.style.transition = 'none';
    strip.style.transform = 'translateX(0px)';
  }

  spinRoulette() {
    if (this.isSpinningRoulette) return;
    const strip = document.getElementById('roulette-strip');
    const spinBtn = document.getElementById('btn-spin-roulette');
    const revealCard = document.getElementById('roulette-reveal-card');
    if (!strip || !spinBtn) return;

    this.isSpinningRoulette = true;
    spinBtn.disabled = true;
    revealCard?.classList.add('hidden');

    if (!this.roulettePool || this.roulettePool.length === 0) {
      this.initRoulette();
    }

    const targetIdx = 20 + Math.floor(Math.random() * (this.roulettePool.length - 22));
    const targetMovie = this.roulettePool[targetIdx];

    const cardWidth = 146;
    const windowEl = document.getElementById('roulette-window');
    const windowWidth = windowEl ? windowEl.offsetWidth : 800;
    const centerOffset = (windowWidth / 2) - 65 - 20;
    const targetTranslateX = -((targetIdx * cardWidth) - centerOffset);

    // Rulet dönüş ses döngüsü
    let tickCount = 0;
    const maxTicks = 24;
    const tickInterval = setInterval(() => {
      if (window.cinemaAudio) window.cinemaAudio.playReelTick();
      tickCount++;
      if (tickCount >= maxTicks) clearInterval(tickInterval);
    }, 130);

    strip.style.transition = 'transform 3.8s cubic-bezier(0.12, 0.8, 0.18, 1)';
    strip.style.transform = `translateX(${targetTranslateX}px)`;

    setTimeout(() => {
      this.isSpinningRoulette = false;
      spinBtn.disabled = false;

      if (window.cinemaAudio) window.cinemaAudio.playTaDum();

      if (revealCard && targetMovie) {
        revealCard.innerHTML = `
          <img src="${targetMovie.posterUrl}" class="roulette-reveal-thumb" alt="${targetMovie.title}" onerror="this.src=getFallbackPoster('${targetMovie.title}', '${targetMovie.genres[0]}', '${targetMovie.imdbRating}');" />
          <div class="roulette-reveal-info">
            <div class="reveal-crown-line">👑 ŞANSININ SEÇTİĞİ BAŞYAPIT</div>
            <h3 class="reveal-title">${targetMovie.title}</h3>
            <div class="reveal-meta">⭐ ${targetMovie.imdbRating} IMDb • ${targetMovie.year} • ${targetMovie.duration} • ${targetMovie.director}</div>
            <div class="reveal-tagline">“${targetMovie.tagline || targetMovie.summary.slice(0, 100) + '...'}”</div>
            <div class="reveal-actions">
              <button class="btn btn-primary" id="roulette-open-modal-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Hemen İncele & Fragman İzle
              </button>
              <button class="btn btn-secondary" id="roulette-re-spin-btn">
                🔄 Tekrar Döndür
              </button>
            </div>
          </div>
        `;
        revealCard.classList.remove('hidden');

        document.getElementById('roulette-open-modal-btn')?.addEventListener('click', () => {
          this.openModal(targetMovie);
        });

        document.getElementById('roulette-re-spin-btn')?.addEventListener('click', () => {
          this.spinRoulette();
        });
      }
    }, 3900);
  }

  openTicketModal(movie) {
    if (!movie) return;
    this.activeTicketMovie = movie;

    const modal = document.getElementById('ticket-modal');
    const canvas = document.getElementById('ticket-canvas');
    if (!modal || !canvas) return;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#0a0a12');
    bgGrad.addColorStop(0.5, '#121324');
    bgGrad.addColorStop(1, '#090a10');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#f5c518';
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(14, 14, w - 28, h - 28);

    const stubX = 170;
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(stubX, 15);
    ctx.lineTo(stubX, h - 15);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#0a0a10';
    ctx.beginPath();
    ctx.arc(stubX, 8, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(stubX, h - 8, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(stubX - 25, h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CINE3D VIP ADMISSION', 0, 0);
    ctx.restore();

    ctx.fillStyle = '#ffffff';
    let barX = 35;
    for (let i = 0; i < 22; i++) {
      const barW = (i % 3 === 0) ? 3 : (i % 2 === 0 ? 1.5 : 2);
      ctx.fillRect(barX, 40, barW, 200);
      barX += 5;
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '10px monospace';
    ctx.fillText('NO: C3D-2026-VIP', 28, 265);

    ctx.fillStyle = '#e50914';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('CINE3D CINEMA • SİNEMA BİLETİ', stubX + 35, 45);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    const rawTicketTitle = this.decodeHtmlEntities(movie.title || '');
    const displayTitle = rawTicketTitle.length > 22 ? rawTicketTitle.slice(0, 22) + '...' : rawTicketTitle;
    ctx.fillText(displayTitle, stubX + 35, 85);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.fillText(`${this.decodeHtmlEntities(movie.originalTitle || movie.title)} (${movie.year})`, stubX + 35, 110);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '13px sans-serif';
    ctx.fillText(`Yönetmen: ${this.decodeHtmlEntities(movie.director || 'Sinema Başyapıtı')}`, stubX + 35, 138);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px sans-serif';
    const genresTxt = Array.isArray(movie.genres) ? movie.genres.slice(0, 3).join(' • ') : movie.genres;
    ctx.fillText(`${genresTxt} • ${movie.duration || 'Standart'}`, stubX + 35, 164);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.fillRect(stubX + 35, 182, 430, 48);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.strokeRect(stubX + 35, 182, 430, 48);

    ctx.fillStyle = '#f5c518';
    ctx.font = 'bold 13px monospace';
    ctx.fillText('SALON: 01 (IMAX 3D)', stubX + 50, 212);

    ctx.fillStyle = '#f59e0b';
    ctx.fillText('SIRA: A', stubX + 220, 212);

    ctx.fillStyle = '#ffffff';
    ctx.fillText('KOLTUK: 07', stubX + 300, 212);

    ctx.fillStyle = 'rgba(245, 197, 24, 0.15)';
    ctx.fillRect(w - 110, 35, 75, 48);
    ctx.strokeStyle = '#f5c518';
    ctx.strokeRect(w - 110, 35, 75, 48);

    ctx.fillStyle = '#f5c518';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(`★ ${movie.imdbRating}`, w - 100, 66);

    const today = new Date().toLocaleDateString('tr-TR');
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '11px sans-serif';
    ctx.fillText(`Tarih: ${today} • Geçerlilik: Ömür Boyu Başyapıt Garantisi`, stubX + 35, 260);

    if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
  }

  closeTicketModal() {
    const modal = document.getElementById('ticket-modal');
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  downloadTicketImage() {
    const canvas = document.getElementById('ticket-canvas');
    if (!canvas) return;
    const movie = this.activeTicketMovie || { id: 'film', title: 'Cine3D' };
    const link = document.createElement('a');
    link.download = `Cine3D-Bilet-${movie.id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    this.showToast(`🎟️ "${movie.title}" sinema biletiniz indirildi!`, 'success');
    if (window.cinemaAudio) window.cinemaAudio.playTaDum();
  }

  // --- HERO BANNER ---
  renderHeroBanner() {
    const themeFeatured = this.getThemeFeaturedMovies(this.activeTheme);
    if (this.heroMovieIndex >= themeFeatured.length) {
      this.heroMovieIndex = 0;
    }
    const heroMovie = themeFeatured[this.heroMovieIndex] || themeFeatured[0] || this.movies[0];
    const heroContainer = document.getElementById('hero-section');
    if (!heroContainer) return;

    const heroStreamInfo = typeof getMovieStreamingInfo === 'function' 
      ? getMovieStreamingInfo(heroMovie) 
      : { hasTrProvider: false, statusText: "TR yayıncısı bulunamadı", providers: [], globalProviders: [] };

    const theme = this.activeTheme || 'netflix';
    let heroThemeBadge = `🔥 ${heroMovie.featuredBadge || 'Günün Öne Çıkanı'}`;
    let playBtnText = "Fragmanı İzle";
    let detailBtnText = "Film Konusu & Detaylar";

    if (theme === 'disney') {
      heroThemeBadge = `✨ DISNEY+ ORİJİNAL • ${heroMovie.genres[0]}`;
      playBtnText = "Disney+ Fragmanını Aç";
      detailBtnText = "Koleksiyon & Konu";
    } else if (theme === 'hbo') {
      heroThemeBadge = `🟣 MAX EXCLUSIVE • ${heroMovie.year}`;
      playBtnText = "HBO Max Fragmanını Aç";
      detailBtnText = "Prestij Notları & Detay";
    } else if (theme === 'prime') {
      heroThemeBadge = `✓ prime DAHİL • X-Ray Aktif`;
      playBtnText = "Prime ile Fragmanı İzle";
      detailBtnText = "X-Ray Oyuncular & Konu";
    }

    heroContainer.innerHTML = `
      <div class="hero-backdrop" style="background-image: linear-gradient(to top, #0f0f12 5%, rgba(15,15,18,0.7) 45%, rgba(15,15,18,0.4) 100%), linear-gradient(to right, #0f0f12 0%, rgba(15,15,18,0.85) 40%, rgba(15,15,18,0.2) 100%), url('${heroMovie.backdropUrl}');">
      </div>
      <div class="hero-content">
        <div class="hero-badge-row">
          <span class="hero-featured-tag">${heroThemeBadge}</span>
          <span class="hero-imdb-pill">
            <span class="imdb-star">★</span>
            <span class="imdb-score">${heroMovie.imdbRating}</span>
            <span class="imdb-max">/10</span>
          </span>
          <span class="hero-meta">${heroMovie.year}</span>
          <span class="hero-age">${heroMovie.ageRating}</span>
          <span class="hero-duration">${heroMovie.duration}</span>
        </div>

        <!-- Yayın Platformları (IMDb Puanının Hemen Altında) -->
        <div class="hero-streaming-row">
          ${heroStreamInfo.hasTrProvider && heroStreamInfo.providers.length > 0 ? `
            <span class="hero-streaming-label">Türkiye Yayıncıları:</span>
            <div class="hero-streaming-list">
              ${heroStreamInfo.providers.map(p => `
                <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="hero-plat-btn ${p.badgeClass}" title="${p.name}'da ${heroMovie.title} İzle">
                  ${p.iconSvg}
                  <span>${p.name}'da İzle</span>
                </a>
              `).join('')}
            </div>
          ` : `
            <div class="hero-no-tr-pill" title="Bu yapımın Türkiye'de resmi bir yayıncısı bulunmamaktadır.">
              <span class="no-tr-dot"></span>
              <span>TR yayıncısı bulunamadı</span>
            </div>
            ${heroStreamInfo.globalProviders && heroStreamInfo.globalProviders.length > 0 ? `
              <div class="hero-streaming-list">
                ${heroStreamInfo.globalProviders.map(p => `
                  <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="hero-plat-btn ${p.badgeClass}" title="${p.name} (Küresel Yayıncı)">
                    ${p.iconSvg}
                    <span>${p.name} (Global)</span>
                  </a>
                `).join('')}
              </div>
            ` : ''}
          `}
        </div>

        <h1 class="hero-title">${heroMovie.title}</h1>
        <p class="hero-tagline">"${heroMovie.tagline}"</p>

        <div class="hero-genres">
          ${heroMovie.genres.map(g => `<span class="hero-genre-pill" data-genre="${g}">${g}</span>`).join('')}
        </div>

        <p class="hero-summary">${heroMovie.summary}</p>

        <div class="hero-actions">
          <button class="btn btn-primary btn-play-trailer" data-movie-id="${heroMovie.id}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            ${playBtnText}
          </button>
          <button class="btn btn-secondary btn-hero-detail" data-movie-id="${heroMovie.id}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            ${detailBtnText}
          </button>
          <button class="btn btn-icon hero-watchlist-btn ${this.isMovieInWatchlist(heroMovie.id) ? 'active' : ''}" data-movie-id="${heroMovie.id}" title="Listeme Ekle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="${this.isMovieInWatchlist(heroMovie.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
      </div>

      <!-- Hero Film Değiştirme Butonları -->
      <div class="hero-nav-dots">
        ${themeFeatured.map((m, idx) => `
          <button class="hero-dot ${idx === this.heroMovieIndex ? 'active' : ''}" data-hero-index="${idx}" aria-label="${m.title}"></button>
        `).join('')}
      </div>
    `;

    // Buton dinleyicileri
    heroContainer.querySelector('.btn-play-trailer')?.addEventListener('click', () => {
      this.openModal(heroMovie, true);
    });

    heroContainer.querySelector('.btn-hero-detail')?.addEventListener('click', () => {
      this.openModal(heroMovie, false);
    });

    heroContainer.querySelector('.hero-watchlist-btn')?.addEventListener('click', (e) => {
      this.toggleWatchlist(heroMovie);
      const btn = e.currentTarget;
      const isFav = this.isMovieInWatchlist(heroMovie.id);
      btn.classList.toggle('active', isFav);
      btn.querySelector('svg').setAttribute('fill', isFav ? 'currentColor' : 'none');
    });

    heroContainer.querySelectorAll('.hero-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.heroIndex, 10);
        this.heroMovieIndex = index;
        this.renderHeroBanner();
      });
    });

    // Tür etiketine tıklayınca filtre uygula
    heroContainer.querySelectorAll('.hero-genre-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const genre = e.currentTarget.dataset.genre;
        this.setGenre(genre);
      });
    });
  }

  initHeroAutoCycle() {
    setInterval(() => {
      if (document.hidden) return;
      const themeFeatured = this.getThemeFeaturedMovies(this.activeTheme);
      if (themeFeatured.length > 0) {
        this.heroMovieIndex = (this.heroMovieIndex + 1) % themeFeatured.length;
        this.renderHeroBanner();
      }
    }, 12000);
  }

  // --- ÇEVRİMİÇİ VERİ ENTEGRASYONU ---
  async fetchInitialOnlineBatch() {
    if (!this.apiService) return;

    // Statik barındırmada (ör. GitHub Pages) /api yok: canlı çekimi atla.
    if (!(await this.apiService.isApiAvailable())) {
      this.applyStaticMode();
      return;
    }

    const CACHE_KEY = 'cine3d_online_batch_v1';
    const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 saat

    // Her ziyaretçi açılışta ~25 dış istek (6 arama + 6 detay + wiki + poster +
    // JustWatch) tetikleyip OMDb kotasını yakıyordu. Önce 12 saatlik tarayıcı
    // önbelleğine bakıyoruz; varsa ağa hiç çıkmıyoruz.
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items) && parsed.items.length > 0 && (Date.now() - parsed.t) < CACHE_TTL) {
          this.integrateOnlineMovies(parsed.items, false);
          return;
        }
      }
    } catch (e) {
      // Bozuk önbellek: yoksay ve ağdan çek
    }

    const run = async () => {
      try {
        const onlineItems = await this.apiService.fetchCuratedOnlineBatch('series');
        if (onlineItems && onlineItems.length > 0) {
          this.integrateOnlineMovies(onlineItems, false);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), items: onlineItems }));
          } catch (e) {
            // Kota dolu olabilir; kritik değil
          }
        }
      } catch (err) {
        console.warn("İlk çevrimiçi paket yüklenemedi:", err);
      }
    };

    // İlk boyamayı bloklamamak için boşta olduğunda çalıştır
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => run(), { timeout: 4000 });
    } else {
      setTimeout(run, 1500);
    }
  }

  // Statik barındırma (sunucusuz) modunda arayüzü sadeleştir
  applyStaticMode() {
    this.staticMode = true;
    const fetchMoreBtn = document.getElementById('fetch-more-online-btn');
    if (fetchMoreBtn) {
      fetchMoreBtn.hidden = true;
      fetchMoreBtn.setAttribute('aria-hidden', 'true');
    }
  }

  async fetchMoreOnline() {
    if (!this.apiService) return;
    const btn = document.getElementById('fetch-more-online-btn');
    if (btn) {
      btn.classList.add('loading');
      btn.innerHTML = `<span class="spinner-ring"></span> Çekiliyor...`;
    }

    const category = this.curatedCategories[this.curatedCategoryIndex];
    this.curatedCategoryIndex = (this.curatedCategoryIndex + 1) % this.curatedCategories.length;

    try {
      const items = await this.apiService.fetchCuratedOnlineBatch(category);
      if (items && items.length > 0) {
        const added = this.integrateOnlineMovies(items, true);
        this.showToast(`✨ İnternetten ${added} yeni yapım kataloğa eklendi!`, 'success');
        if (window.cinemaAudio) window.cinemaAudio.playTaDum();
      } else {
        this.showToast('İnternet bağlantısı sağlandı, yeni filmler güncel.', 'info');
      }
    } catch (e) {
      this.showToast('Çevrimiçi veri çekilirken hata oluştu.', 'info');
    } finally {
      if (btn) {
        btn.classList.remove('loading');
        btn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          <span>İnternetten Yeni Filmler/Diziler Çek</span>
        `;
      }
    }
  }

  // Canlı Arama: Katalogda olmasa bile internetten çeker ve Görsel Atmosferi Canlandırır
  async handleLiveSearch(query) {
    clearTimeout(this.onlineSearchTimeout);
    this.searchQuery = query;

    // Arama Çubuğu Görsel & Partikül Atmosferini Güncelle (Mad Max Çölü, Demir Taht, vb.)
    this.updateSearchVisualAtmosphere(query);

    // Önce yerel anlık filtreleme (0ms)
    this.applyFilters();

    const cleanQuery = query.trim();
    if (cleanQuery.length >= 2) {
      this.showOnlineSearchIndicator(true);

      // 400ms debounce ile internet araması
      this.onlineSearchTimeout = setTimeout(async () => {
        if (!this.apiService) {
          this.showOnlineSearchIndicator(false);
          return;
        }

        try {
          const onlineResults = await this.apiService.searchAndEnrich(cleanQuery, 6);
          if (onlineResults && onlineResults.length > 0) {
            const addedCount = this.integrateOnlineMovies(onlineResults, true);
            if (addedCount > 0) {
              this.showToast(`🌐 İnternetten "${cleanQuery}" için ${addedCount} sonuç çekildi!`, 'success');
              // Görsel atmosferi zenginleştir
              this.updateSearchVisualAtmosphere(cleanQuery);
            }
          }
        } catch (err) {
          console.warn("Online arama hatası:", err);
        } finally {
          this.showOnlineSearchIndicator(false);
        }
      }, 400);
    } else {
      this.showOnlineSearchIndicator(false);
    }
  }

  initSearchVisualInteractions() {
    const searchInput = document.getElementById('search-input');
    const container = document.getElementById('search-box-container');
    const spotlight = document.getElementById('search-spotlight-dropdown');

    if (!searchInput) return;

    // Arama kutusuna odaklanıldığında spotlight'ı tekrar göster (eğer aktif görsel tema varsa)
    searchInput.addEventListener('focus', () => {
      if (this.activeSearchVisualTheme && spotlight && spotlight.innerHTML) {
        spotlight.classList.remove('hidden');
      }
    });

    // Sayfa dışına tıklandığında spotlight dropdown'ı kapat
    document.addEventListener('click', (e) => {
      if (!container) return;
      if (!container.contains(e.target)) {
        if (spotlight) spotlight.classList.add('hidden');
      }
    });

    // ESC tuşuna basıldığında dropdown'ı kapat
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (spotlight) spotlight.classList.add('hidden');
      }
    });
  }

  updateSearchVisualAtmosphere(query) {
    const cleanQuery = (query || '').toLowerCase().trim();

    if (!cleanQuery || cleanQuery.length < 2) {
      this.clearSearchVisualTheme();
      return;
    }

    // 1. Önce özel sinematik temalara bak (Mad Max çöl kumu, Game of Thrones demir taht vb.)
    let matchedTheme = null;
    for (const key in SEARCH_VISUAL_THEMES) {
      const t = SEARCH_VISUAL_THEMES[key];
      if (t.keywords.some(kw => cleanQuery.includes(kw) || kw.includes(cleanQuery))) {
        matchedTheme = t;
        break;
      }
    }

    if (matchedTheme) {
      this.applySearchVisualTheme(matchedTheme);
      return;
    }

    // 2. Özel tema değilse, katalogdaki 109 filmden eşleşen ilk filmin afiş/arka planını çek
    const matchedMovie = this.movies.find(m => {
      const titleLower = (m.title || '').toLowerCase();
      const origLower = (m.originalTitle || '').toLowerCase();
      return titleLower.includes(cleanQuery) || origLower.includes(cleanQuery);
    });

    if (matchedMovie) {
      const isSciFi = Array.isArray(matchedMovie.genres) && matchedMovie.genres.some(g => ['Bilim Kurgu', 'Sci-Fi'].includes(g));
      const isAction = Array.isArray(matchedMovie.genres) && matchedMovie.genres.some(g => ['Aksiyon', 'Action'].includes(g));
      const isThriller = Array.isArray(matchedMovie.genres) && matchedMovie.genres.some(g => ['Gerilim', 'Korku', 'Suç'].includes(g));

      let particleType = 'generic_ambient';
      if (isSciFi) particleType = 'cosmic_warp';
      else if (isAction) particleType = 'sand';
      else if (isThriller) particleType = 'rain';

      const customTheme = {
        id: 'custom-' + matchedMovie.id,
        themeClass: 'theme-custom-movie',
        title: matchedMovie.title,
        subtitle: `${matchedMovie.year} • ⭐ IMDb ${matchedMovie.imdbRating} • ${matchedMovie.genres.slice(0, 2).join(', ')}`,
        emblem: matchedMovie.isSeries ? '📺' : '🎬',
        badgeText: `🎬 ${matchedMovie.title.slice(0, 18)}`,
        particleType: particleType,
        accentColor: '#e50914',
        glowColor: 'rgba(229, 9, 20, 0.65)',
        backdropUrl: matchedMovie.posterUrl,
        quote: matchedMovie.summary ? (matchedMovie.summary.slice(0, 110) + '...') : 'Katalogda eşleşen sinematik yapım.',
        movie: matchedMovie
      };

      this.applySearchVisualTheme(customTheme);
      return;
    }

    // Eşleşme yoksa temayı kaldır
    this.clearSearchVisualTheme();
  }

  applySearchVisualTheme(theme) {
    this.activeSearchVisualTheme = theme;

    const container = document.getElementById('search-box-container');
    const visualBg = document.getElementById('search-visual-bg');
    const defaultIcon = document.getElementById('search-default-icon');
    const themeEmblem = document.getElementById('search-theme-emblem');
    const atmosphereTag = document.getElementById('search-atmosphere-tag');
    const spotlight = document.getElementById('search-spotlight-dropdown');

    if (!container) return;

    // Önceki tema sınıflarını temizle
    container.classList.remove(
      'has-active-theme', 'theme-mad-max', 'theme-game-of-thrones', 'theme-matrix', 
      'theme-interstellar', 'theme-breaking-bad', 'theme-stranger-things', 
      'theme-star-wars', 'theme-harry-potter', 'theme-batman', 'theme-custom-movie'
    );
    container.classList.add('has-active-theme', theme.themeClass || 'theme-custom-movie');

    // Arama kutusu içi sinematik görsel katmanı
    if (visualBg) {
      visualBg.style.backgroundImage = `url('${theme.backdropUrl}')`;
      visualBg.classList.add('active');
    }

    // Canlı Partikül Simülasyonu başlat (Kum taneleri, kar, kod yağmuru vb.)
    if (this.searchFXEngine) {
      this.searchFXEngine.setTheme(theme.particleType);
    }

    // Sol ikon: Büyüteç ikonunu gizle, film tematik sembolünü (🏜️, ⚔️, vb.) göster
    if (defaultIcon) defaultIcon.classList.add('hidden');
    if (themeEmblem) {
      themeEmblem.textContent = theme.emblem;
      themeEmblem.classList.remove('hidden');
    }

    // Sağ etiket: Atmosfer rozeti
    if (atmosphereTag) {
      atmosphereTag.textContent = theme.badgeText;
      atmosphereTag.classList.remove('hidden');
    }

    // Spotlight Dropdown Kartı (Görsel vitrin)
    if (spotlight) {
      const movieObj = theme.movie || this.movies.find(m => m.id === theme.movieId) || this.movies[0];

      spotlight.style.setProperty('--spotlight-aura', theme.glowColor || 'rgba(229, 9, 20, 0.4)');
      spotlight.innerHTML = `
        <div class="spotlight-banner-wrap">
          <img class="spotlight-banner-img" src="${theme.backdropUrl}" alt="${theme.title}" onerror="this.onerror=null; this.src='${movieObj ? movieObj.posterUrl : ''}';" />
          <div class="spotlight-banner-overlay"></div>
          <span class="spotlight-banner-tag">${theme.badgeText}</span>
          ${movieObj ? `<span class="spotlight-imdb-chip">★ ${movieObj.imdbRating}</span>` : ''}
        </div>
        <div class="spotlight-body">
          <div class="spotlight-title-row">
            <h4 class="spotlight-title">${theme.title}</h4>
            <span class="spotlight-year">${theme.subtitle}</span>
          </div>
          <p class="spotlight-quote">"${theme.quote}"</p>
          <div class="spotlight-actions-row">
            <button class="btn-spotlight-play" id="btn-spotlight-play" data-movie-id="${movieObj ? movieObj.id : ''}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <span>Fragmanı Oynat</span>
            </button>
            <button class="btn-spotlight-view" id="btn-spotlight-view">
              <span>Kataloğu Gör ↓</span>
            </button>
          </div>
        </div>
      `;
      spotlight.classList.remove('hidden');

      // Olay dinleyicileri
      document.getElementById('btn-spotlight-play')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (movieObj) {
          this.openModal(movieObj);
          spotlight.classList.add('hidden');
        }
      });

      document.getElementById('btn-spotlight-view')?.addEventListener('click', (e) => {
        e.stopPropagation();
        spotlight.classList.add('hidden');
        const moviesSection = document.getElementById('movies-anchor');
        if (moviesSection) {
          const nav = document.getElementById('navbar');
          const navHeight = nav ? nav.offsetHeight : 74;
          const targetPos = moviesSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 15;
          window.scrollTo({ top: Math.max(0, targetPos), behavior: 'smooth' });
        }
      });
    }
  }

  clearSearchVisualTheme() {
    this.activeSearchVisualTheme = null;

    const container = document.getElementById('search-box-container');
    const visualBg = document.getElementById('search-visual-bg');
    const defaultIcon = document.getElementById('search-default-icon');
    const themeEmblem = document.getElementById('search-theme-emblem');
    const atmosphereTag = document.getElementById('search-atmosphere-tag');
    const spotlight = document.getElementById('search-spotlight-dropdown');
    const searchInput = document.getElementById('search-input');

    if (container) {
      container.classList.remove(
        'has-active-theme', 'theme-mad-max', 'theme-game-of-thrones', 'theme-matrix', 
        'theme-interstellar', 'theme-breaking-bad', 'theme-stranger-things', 
        'theme-star-wars', 'theme-harry-potter', 'theme-batman', 'theme-custom-movie'
      );
    }

    if (visualBg) {
      visualBg.classList.remove('active');
      visualBg.style.backgroundImage = 'none';
    }

    if (this.searchFXEngine) {
      this.searchFXEngine.stop();
    }

    if (defaultIcon) defaultIcon.classList.remove('hidden');
    if (themeEmblem) themeEmblem.classList.add('hidden');
    if (atmosphereTag) atmosphereTag.classList.add('hidden');
    if (spotlight) spotlight.classList.add('hidden');

    if (searchInput && searchInput.value.trim() === '') {
      searchInput.setAttribute('placeholder', 'Ara');
    }
  }

  showOnlineSearchIndicator(show) {
    const spinner = document.getElementById('search-spinner');
    if (spinner) {
      spinner.classList.toggle('hidden', !show);
    }
  }

  // Yeni çekilen filmleri mevcut kataloğa kusursuzca entegre eder
  integrateOnlineMovies(newMovies, notify = false) {
    let addedCount = 0;

    newMovies.forEach(item => {
      // Çift kayıt engelleme (imdbID, orijinal başlık veya Türkçe başlık kontrolü)
      const exists = this.movies.some(m => 
        (m.imdbID && item.imdbID && m.imdbID === item.imdbID) || 
        (m.originalTitle && item.originalTitle && m.originalTitle.toLowerCase() === item.originalTitle.toLowerCase()) ||
        (m.title && item.title && m.title.toLowerCase() === item.title.toLowerCase())
      );

      if (!exists) {
        this.movies.push(item);
        addedCount++;

        // Yeni türler geldiyse tür listesine ekle
        item.genres.forEach(g => {
          if (!GENRES_LIST.includes(g)) {
            GENRES_LIST.push(g);
          }
        });
      }
    });

    if (addedCount > 0) {
      this.renderGenreFilters();
      this.applyFilters();
    }

    return addedCount;
  }

  // --- FİLTRE & KATEGORİ RENDERLARI ---
  renderGenreFilters() {
    const container = document.getElementById('genre-filters');
    if (!container) return;

    container.innerHTML = GENRES_LIST.map(genre => {
      const count = genre === "Tümü" 
        ? this.movies.length 
        : this.movies.filter(m => m.genres.includes(genre)).length;

      return `
        <button class="genre-pill ${genre === this.activeGenre ? 'active' : ''}" data-genre="${genre}">
          ${genre}
          <span class="genre-count">${count}</span>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.genre-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const g = e.currentTarget.dataset.genre;
        this.setGenre(g);
      });
    });
  }

  renderImdbPresets() {
    const container = document.getElementById('imdb-preset-buttons');
    if (!container) return;

    container.innerHTML = IMDB_FILTER_PRESETS.map(preset => `
      <button class="imdb-preset-btn ${preset.min === this.minImdb ? 'active' : ''}" data-min="${preset.min}">
        ${preset.label}
      </button>
    `).join('');

    container.querySelectorAll('.imdb-preset-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const minVal = parseFloat(e.currentTarget.dataset.min);
        this.setMinImdb(minVal);
      });
    });
  }

  setGenre(genre) {
    this.activeGenre = genre;
    this.renderGenreFilters();
    this.applyFilters();
    if (window.cinemaAudio) window.cinemaAudio.playHover();
  }

  setMinImdb(score) {
    this.minImdb = score;
    const slider = document.getElementById('imdb-range-slider');
    const label = document.getElementById('imdb-range-value');
    if (slider) slider.value = score;
    if (label) label.textContent = score > 0 ? `${score.toFixed(1)}+` : 'Tümü';

    this.renderImdbPresets();
    this.applyFilters();
    if (window.cinemaAudio) window.cinemaAudio.playHover();
  }

  // --- SÜRE PARSER & FİLTRESİ (FAZ 1) ---
  parseDurationMinutes(duration) {
    if (!duration) return null;
    const str = String(duration).toLowerCase().trim();
    if (str.includes('sezon') || str.includes('season') || str.includes('bölüm') || str.includes('minidizi')) {
      return 'series';
    }
    let total = 0;
    let hasMatch = false;
    const sMatch = str.match(/(\d+)\s*(?:s|h|saat|hour)/);
    if (sMatch) { total += parseInt(sMatch[1], 10) * 60; hasMatch = true; }
    const dkMatch = str.match(/(\d+)\s*(?:dk|m|dakika|min)/);
    if (dkMatch) { total += parseInt(dkMatch[1], 10); hasMatch = true; }
    if (!hasMatch) {
      const rawNum = parseInt(str, 10);
      if (!isNaN(rawNum) && (str.includes('dk') || str.includes('min') || rawNum > 30)) return rawNum;
      return null;
    }
    return total;
  }

  setDurationFilter(key) {
    this.activeDurationFilter = key || 'all';
    
    // UI butonlarını güncelle
    document.querySelectorAll('#duration-preset-buttons .duration-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.duration === this.activeDurationFilter);
    });

    this.applyFilters();
    if (window.cinemaAudio) window.cinemaAudio.playHover();
  }

  // --- İNTERAKTİF YÖNETMEN & OYUNCU FİLMOGRAFİSİNE ODAKLANMA (FAZ 1) ---
  filterByPerson(person) {
    if (!person) return;
    const cleanPerson = person.trim();

    // Çakışan diğer kategorik filtreleri temizle
    this.activeGenre = "Tümü";
    this.activeMoodFilter = null;
    this.activeMoodObj = null;
    this.activePaletteFilter = null;
    this.activePaletteObj = null;
    this.activeHubFilter = null;
    this.activeHubTitle = "";
    this.activeHubKeywords = [];
    this.activeDurationFilter = 'all';

    // Arama kutusuna yaz
    this.searchQuery = cleanPerson;
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = cleanPerson;
      this.updateSearchVisualAtmosphere(cleanPerson);
    }

    // Buton UI'larını sıfırla
    this.renderGenreFilters();
    this.renderMoodSection();
    this.renderPaletteSection();
    document.querySelectorAll('#duration-preset-buttons .duration-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.duration === 'all');
    });

    this.applyFilters();

    // Kataloğa yumuşak kaydır
    const catalogAnchor = document.getElementById('movies-anchor');
    if (catalogAnchor) {
      const nav = document.getElementById('navbar');
      const navH = nav ? nav.offsetHeight : 70;
      const top = catalogAnchor.getBoundingClientRect().top + window.pageYOffset - navH - 15;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }

    this.showToast(`🎬 "${cleanPerson}" filmografisi listeleniyor (${this.filteredMovies.length} yapım)`, 'success');
    if (window.cinemaAudio) window.cinemaAudio.playTaDum();
  }

  // --- FİLTRELEME & SIRALAMA MANTIĞI ---
  applyFilters() {
    let result = [...this.movies];

    // 0. Ruh Hali (Mood) Filtresi (Beyin Yakan, Ağlatan, Komedi, Aksiyon, Büyü vb.)
    if (this.activeMoodFilter) {
      result = result.filter(m => this.isMovieMatchingMood(m, this.activeMoodFilter));
    }

    // 0.1 Görsel Ton & Renk Paleti Filtresi (Wes Anderson, David Fincher, Mad Max vb.)
    if (this.activePaletteFilter) {
      result = result.filter(m => this.isMovieMatchingPalette(m, this.activePaletteFilter));
    }

    // 1. Marka / Franchise Hub Filtresi (Star Wars, Marvel, Pixar, Disney, HBO, Prime vb.)
    if (this.activeHubFilter) {
      const fk = this.activeHubFilter;
      const kws = this.activeHubKeywords || [];

      result = result.filter(m => {
        // Doğrudan hubTags etiketi eşleşmesi
        if (Array.isArray(m.hubTags) && m.hubTags.includes(fk)) return true;

        // Özel platform & stüdyo kuralları
        if (fk === 'starwars') {
          return (m.title && (m.title.toLowerCase().includes('star wars') || m.title.toLowerCase().includes('mandalorian'))) ||
                 (m.originalTitle && (m.originalTitle.toLowerCase().includes('star wars') || m.originalTitle.toLowerCase().includes('mandalorian')));
        }
        if (fk === 'marvel') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('marvel')) ||
                 ['avengers-endgame', 'iron-man', 'loki', 'spider-verse'].includes(m.id) ||
                 (m.title && (m.title.toLowerCase().includes('avengers') || m.title.toLowerCase().includes('demir adam') || m.title.toLowerCase().includes('loki')));
        }
        if (fk === 'pixar') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('pixar')) ||
                 ['wall-e', 'up', 'coco'].includes(m.id) ||
                 (m.title && (m.title.toLowerCase().includes('vol-i') || m.title.toLowerCase().includes('yukarı bak') || m.title.toLowerCase().includes('koko')));
        }
        if (fk === 'natgeo') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('natgeo')) || m.id === 'free-solo';
        }
        if (fk === 'disney') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('disney')) || (Array.isArray(m.platforms) && m.platforms.includes('disney'));
        }
        if (fk === 'hbo' || fk === 'max') {
          return (Array.isArray(m.hubTags) && (m.hubTags.includes('hbo') || m.hubTags.includes('max'))) || 
                 (Array.isArray(m.platforms) && m.platforms.includes('hbo'));
        }
        if (fk === 'dc') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('dc')) || ['dark-knight', 'joker'].includes(m.id);
        }
        if (fk === 'wb') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('wb')) || ['inception', 'interstellar', 'the-matrix', 'blade-runner-2049', 'joker', 'harry-potter'].includes(m.id);
        }
        if (fk === 'wizarding') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('wizarding')) || (m.title && m.title.toLowerCase().includes('harry potter'));
        }
        if (fk === 'prime-originals') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('prime-originals')) || ['the-boys', 'fallout', 'rings-of-power', 'reacher'].includes(m.id);
        }
        if (fk === 'mgm') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('mgm')) || ['no-time-to-die', 'gladiator'].includes(m.id);
        }
        if (fk === 'xray') {
          return ['oppenheimer', 'interstellar', 'gladiator', 'the-boys', 'fallout'].includes(m.id);
        }
        if (fk === 'prime') {
          return Array.isArray(m.platforms) && m.platforms.includes('prime');
        }
        if (fk === 'netflix-originals') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('netflix-originals')) || ['stranger-things', 'squid-game', 'breaking-bad', 'dark', 'arcane'].includes(m.id);
        }
        if (fk === 'awards') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('awards')) || m.imdbRating >= 9.0;
        }
        if (fk === 'top10') {
          return m.imdbRating >= 8.6;
        }
        if (fk === 'anime') {
          return (Array.isArray(m.hubTags) && m.hubTags.includes('anime')) || (Array.isArray(m.genres) && m.genres.includes('Animasyon'));
        }
        if (fk === 'world') {
          return ['parasite', 'dark', 'squid-game', 'spirited-away'].includes(m.id);
        }

        // Anahtar kelime taraması (searchText: escape'siz ham metin)
        return kws.some(kw => {
          const k = kw.toLowerCase();
          return (m.searchText && m.searchText.includes(k)) ||
                 (m.title && m.title.toLowerCase().includes(k)) ||
                 (m.originalTitle && m.originalTitle.toLowerCase().includes(k)) ||
                 (m.summary && m.summary.toLowerCase().includes(k));
        });
      });
    }

    // 2. Tür filtresi
    if (this.activeGenre !== "Tümü") {
      result = result.filter(m => m.genres && m.genres.includes(this.activeGenre));
    }

    // 2.1 Süre ve Format Filtresi (Faz 1)
    if (this.activeDurationFilter && this.activeDurationFilter !== 'all') {
      result = result.filter(m => {
        const mins = this.parseDurationMinutes(m.duration);
        if (this.activeDurationFilter === 'series') {
          return mins === 'series' || m.isSeries;
        }
        if (mins === 'series' || m.isSeries) return false;
        if (typeof mins !== 'number') return false;
        if (this.activeDurationFilter === 'quick') return mins < 100;
        if (this.activeDurationFilter === 'standard') return mins >= 100 && mins <= 140;
        if (this.activeDurationFilter === 'epic') return mins > 140;
        return true;
      });
    }

    // 3. IMDb puanı filtresi
    if (this.minImdb > 0) {
      result = result.filter(m => m.imdbRating >= this.minImdb);
    }

    // 4. Arama sorgusu (Başlık, orijinal başlık, yönetmen, oyuncular, konu)
    if (this.searchQuery.trim() !== "") {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(m =>
        // searchText: internetten gelen filmler için escape'siz ham arama alanı
        (m.searchText && m.searchText.includes(q)) ||
        (m.title && m.title.toLowerCase().includes(q)) ||
        (m.originalTitle && m.originalTitle.toLowerCase().includes(q)) ||
        (m.director && m.director.toLowerCase().includes(q)) ||
        (Array.isArray(m.cast) && m.cast.some(c => c.toLowerCase().includes(q))) ||
        (m.summary && m.summary.toLowerCase().includes(q)) ||
        (Array.isArray(m.genres) && m.genres.some(g => g.toLowerCase().includes(q)))
      );
    }

    // Sıralama
    result.sort((a, b) => {
      if (this.sortBy === 'imdb-desc') return b.imdbRating - a.imdbRating;
      if (this.sortBy === 'imdb-asc') return a.imdbRating - b.imdbRating;
      if (this.sortBy === 'year-desc') return (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0);
      if (this.sortBy === 'title-asc') return a.title.localeCompare(b.title, 'tr');
      return 0;
    });

    this.filteredMovies = result;

    // Arayüzü güncelle
    this.renderMoviesGrid();
    this.renderTop10Row();
    this.updateStatsBar();
    this.updateCatalogHeader();

    // 3D Coverflow açıksa onu da güncelle
    if (this.coverflowInstance) {
      this.coverflowInstance.updateData(this.filteredMovies);
    }
  }

  updateCatalogHeader() {
    const titleText = document.getElementById('catalog-title-text');
    if (!titleText) return;

    // Eğer aktif Renk Paleti filtresi varsa
    if (this.activePaletteFilter && this.activePaletteObj) {
      titleText.innerHTML = `
        <span class="catalog-title-wrapper">
          <span>🎨 ${this.activePaletteObj.title} (${this.activePaletteObj.directorSignature})</span>
          <span class="palette-catalog-badge" style="border-color: ${this.activePaletteObj.accentColor}; color: ${this.activePaletteObj.accentColor};">
            <span>${this.filteredMovies.length} Yapım Eşleşti</span>
            <button class="btn-clear-catalog-palette" id="clear-catalog-palette-btn" title="Paleti Kaldır">✕ Kaldır</button>
          </span>
        </span>
      `;
      document.getElementById('clear-catalog-palette-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clearPaletteFilter();
      });
      return;
    }

    // Eğer aktif Ruh Hali filtresi varsa
    if (this.activeMoodFilter && this.activeMoodObj) {
      titleText.innerHTML = `
        <span class="catalog-title-wrapper">
          <span>${this.activeMoodObj.emoji} ${this.activeMoodObj.title} Modu</span>
          <span class="mood-catalog-badge" style="border-color: ${this.activeMoodObj.color}; color: ${this.activeMoodObj.color};">
            <span>${this.filteredMovies.length} Yapım Eşleşti</span>
            <button class="btn-clear-catalog-mood" id="clear-catalog-mood-btn" title="Modu Kaldır">✕ Kaldır</button>
          </span>
        </span>
      `;
      document.getElementById('clear-catalog-mood-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clearMoodFilter();
      });
      return;
    }

    if (this.activeHubFilter) {
      titleText.innerHTML = `
        <span class="catalog-title-wrapper">
          <span>${this.activeHubTitle} Koleksiyonu</span>
          <span class="hub-active-badge">
            <span>${this.filteredMovies.length} Yapım</span>
            <button class="btn-clear-hub-filter" id="clear-hub-filter-btn" title="Filtreyi Temizle">✕ Temizle</button>
          </span>
        </span>
      `;
      document.getElementById('clear-hub-filter-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clearHubFilter();
      });
    } else {
      const platformTitles = {
        netflix: 'Netflix Film & Dizi Kataloğu',
        hbo: 'HBO Max & Warner Bros. Kataloğu',
        disney: 'Disney+ Büyülü Film & Dizi Koleksiyonu',
        prime: 'Amazon Prime Video & MGM Arşivi'
      };
      titleText.textContent = platformTitles[this.activeTheme] || 'Film & Dizi Kataloğu';
    }
  }

  updateStatsBar() {
    const statsElem = document.getElementById('filter-stats-text');
    if (statsElem) {
      const onlineCount = this.movies.filter(m => m.isOnlineFetched).length;
      statsElem.innerHTML = `
        Bulunan: <strong>${this.filteredMovies.length} yapım</strong> 
        ${this.activePaletteFilter && this.activePaletteObj ? `• Palet: <span class="tag-highlight" style="color:${this.activePaletteObj.accentColor};">🎨 ${this.activePaletteObj.title}</span>` : ''}
        ${this.activeMoodFilter && this.activeMoodObj ? `• Mod: <span class="tag-highlight" style="color:${this.activeMoodObj.color};">${this.activeMoodObj.emoji} ${this.activeMoodObj.shortTitle}</span>` : ''}
        ${this.activeHubFilter ? `• Marka: <span class="tag-highlight">${this.activeHubTitle}</span>` : ''}
        ${onlineCount > 0 ? `• <span class="tag-highlight">🌐 ${onlineCount} Çevrimiçi Çekildi</span>` : ''}
        ${this.activeGenre !== 'Tümü' ? `• Tür: <span class="tag-highlight">${this.activeGenre}</span>` : ''} 
        ${this.minImdb > 0 ? `• Min IMDb: <span class="tag-highlight">${this.minImdb.toFixed(1)}+</span>` : ''}
      `;
    }
  }

  // --- TOP 10 SIRALAMASI (PLATFORM TEMA DESTEKLİ & İZOLE EDİLMİŞ) ---
  renderTop10Row() {
    const container = document.getElementById('top10-container');
    if (!container) return;

    const theme = this.activeTheme || 'netflix';
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    // Platforma özel Top 10 havuzu:
    let candidatePool = [...this.movies];
    if (theme === 'disney') {
      candidatePool = this.movies.filter(m => 
        (Array.isArray(m.hubTags) && m.hubTags.includes('disney')) ||
        (Array.isArray(m.platforms) && m.platforms.includes('disney')) ||
        (m.title && (m.title.includes('Star Wars') || m.title.includes('Mandalorian') || m.title.includes('Avengers') || m.title.includes('VOL-İ') || m.title.includes('Koko') || m.title.includes('Aslan Kral')))
      );
    } else if (theme === 'hbo') {
      candidatePool = this.movies.filter(m =>
        (Array.isArray(m.hubTags) && (m.hubTags.includes('hbo') || m.hubTags.includes('max') || m.hubTags.includes('dc') || m.hubTags.includes('wb') || m.hubTags.includes('wizarding'))) ||
        (Array.isArray(m.platforms) && m.platforms.includes('hbo')) ||
        ['inception', 'interstellar', 'dark-knight', 'the-matrix', 'joker', 'chernobyl', 'game-of-thrones', 'the-last-of-us', 'succession', 'harry-potter'].includes(m.id)
      );
    } else if (theme === 'prime') {
      candidatePool = this.movies.filter(m =>
        (Array.isArray(m.hubTags) && (m.hubTags.includes('prime-originals') || m.hubTags.includes('prime') || m.hubTags.includes('mgm') || m.hubTags.includes('xray'))) ||
        (Array.isArray(m.platforms) && m.platforms.includes('prime')) ||
        ['the-boys', 'fallout', 'rings-of-power', 'reacher', 'no-time-to-die', 'gladiator', 'interstellar', 'dark-knight'].includes(m.id)
      );
    } else {
      // netflix
      const netflixPool = this.movies.filter(m =>
        (Array.isArray(m.hubTags) && (m.hubTags.includes('netflix-originals') || m.hubTags.includes('netflix'))) ||
        (Array.isArray(m.platforms) && m.platforms.includes('netflix'))
      );
      if (netflixPool.length >= 6) {
        candidatePool = netflixPool;
      }
    }

    const sortedCandidates = [...candidatePool].sort((a, b) => b.imdbRating - a.imdbRating);
    const top10 = [...sortedCandidates];
    if (top10.length < 10) {
      const remaining = [...this.movies]
        .sort((a, b) => b.imdbRating - a.imdbRating)
        .filter(m => !top10.some(t => t.id === m.id));
      top10.push(...remaining.slice(0, 10 - top10.length));
    }
    const finalTop10 = top10.slice(0, 10);

    // Başlık aksiyon butonunu dinamik bağla
    const subtitleElem = document.getElementById('top10-subtitle-text');
    if (subtitleElem) {
      const btnText = theme === 'disney' ? '✦ Star Wars & Disney Yıldızlarını Listele' : '✦ Bu Yapımları Aşağıda Listele';
      subtitleElem.innerHTML = `
        <div class="top10-header-actions">
          <span>${theme === 'disney' ? 'Star Wars, Marvel & Pixar Zirvesi' : 'Platformun En İyileri'}</span>
          <button class="top10-explore-btn" id="top10-explore-btn">${btnText}</button>
        </div>
      `;
      document.getElementById('top10-explore-btn')?.addEventListener('click', () => {
        if (theme === 'disney') {
          this.setHubFilter('disney', 'Disney+ Yıldızlar Geçidi', ['star wars', 'mandalorian', 'avengers', 'disney', 'pixar']);
        } else {
          this.setHubFilter('top10', 'Top 10 Başyapıt', []);
        }
      });
    }

    container.innerHTML = finalTop10.map((movie, index) => {
      let rankText = index + 1;
      if (theme === 'hbo') {
        rankText = romanNumerals[index] || (index + 1);
      }

      return `
        <div class="top10-card" data-movie-id="${movie.id}">
          <span class="top10-rank">${rankText}</span>
          <div class="top10-poster-wrap card-3d-tilt">
            <img src="${movie.posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.onerror=null; this.src=getFallbackPoster('${movie.title.replace(/'/g, "\\'")}', '${movie.genres[0]}', '${movie.imdbRating}');" />
            <div class="top10-rating-badge">⭐ ${movie.imdbRating}</div>
          </div>
          <div class="top10-info">
            <h4 class="top10-title">${movie.title}</h4>
            <span class="top10-meta">${movie.genres[0]} • ${movie.year}</span>
          </div>
        </div>
      `;
    }).join('');

    // Dinleyiciler
    container.querySelectorAll('.top10-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.movieId;
        const movie = this.movies.find(m => m.id === id);
        if (movie) this.openModal(movie);
      });
    });

    this.bind3DTiltToCards(container.querySelectorAll('.top10-poster-wrap'));
  }

  // --- PLATFORM FİLM VE DİZİ IZGARASI ---
  renderMoviesGrid() {
    const grid = document.getElementById('movies-grid');
    if (!grid) return;

    if (this.filteredMovies.length === 0) {
      // DÜZELTME: Statik barındırmada (sunucu yok) "Çevrimiçi Veritabanı Taranıyor"
      // spinner'ı hiçbir zaman bitmiyordu; kullanıcıya sonsuz yükleme gibi görünüyordu.
      const staticBilgi = `
          <div class="no-results">
            <div class="no-results-icon">🔍</div>
            <h3>"${escapeHtmlText(this.searchQuery)}" katalogda bulunamadı</h3>
            <p>Bu sürümde arama, katalogdaki 109 yapım içinde yapılır (canlı internet taraması kapalı).</p>
            <p style="color:#a3a3b2;font-size:0.85rem;">Farklı bir başlık deneyin veya filtreleri sıfırlayın.</p>
            <button class="btn btn-secondary" style="margin-top: 14px;" id="reset-filters-btn">Filtreleri Sıfırla</button>
          </div>`;
      const onlineBilgi = `
        <div class="no-results">
          <div class="no-results-icon">🌐</div>
          <h3>"${escapeHtmlText(this.searchQuery)}" katalogda bulunamadı</h3>
          <p>İnternet bağlantınız üzerinden IMDb ve fragman verileri taranıyor...</p>
          <div class="search-loading-spinner" style="position: static; margin: 16px auto; display: inline-flex;">
            <div class="spinner-ring"></div>
            <span>Çevrimiçi Veritabanı Taranıyor</span>
          </div>
          <br />
          <button class="btn btn-secondary" style="margin-top: 14px;" id="reset-filters-btn">Filtreleri Sıfırla</button>
        </div>`;

      grid.innerHTML = this.staticMode ? staticBilgi : onlineBilgi;
      document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
        this.resetFilters();
      });
      return;
    }

    const theme = this.activeTheme || 'netflix';
    let brandBadgeHtml = '';
    if (theme === 'netflix') {
      brandBadgeHtml = `<div class="card-brand-badge card-brand-netflix"><span class="badge-brand-symbol">N</span> <span>DİZİ/FİLM</span></div>`;
    } else if (theme === 'disney') {
      brandBadgeHtml = `<div class="card-brand-badge card-brand-disney"><span class="badge-brand-symbol">✦</span> <span>DISNEY+</span></div>`;
    } else if (theme === 'hbo') {
      brandBadgeHtml = `<div class="card-brand-badge card-brand-hbo"><span class="badge-brand-symbol">●</span> <span>MAX</span></div>`;
    } else if (theme === 'prime') {
      brandBadgeHtml = `<div class="card-brand-badge card-brand-prime"><span class="badge-prime-check">✓</span> <span>prime</span></div>`;
    }

    grid.innerHTML = this.filteredMovies.map(movie => {
      const isFav = this.isMovieInWatchlist(movie.id);
      const moodBadge = this.getMovieMoodBadge(movie);
      const moviePalette = this.getMoviePalette(movie);
      const streamInfo = typeof getMovieStreamingInfo === 'function' 
        ? getMovieStreamingInfo(movie) 
        : { hasTrProvider: false, statusText: "TR yayıncısı bulunamadı", providers: [], globalProviders: [] };

      // IMDb puan rengi
      let imdbClass = "imdb-gold";
      if (movie.imdbRating >= 9.0) imdbClass = "imdb-legend";
      else if (movie.imdbRating >= 8.7) imdbClass = "imdb-master";

      return `
        <div class="movie-card card-3d-tilt" data-movie-id="${movie.id}">
          <div class="card-inner">
            <div class="card-poster">
              <img src="${movie.posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.onerror=null; this.src=getFallbackPoster('${movie.title.replace(/'/g, "\\'")}', '${movie.genres[0]}', '${movie.imdbRating}');" />
              <div class="card-glare"></div>

              <!-- Platform Marka Rozeti -->
              ${brandBadgeHtml}

              <!-- Kart Üzerinde Hover Play İkonu -->
              <div class="card-hover-play-btn" title="Fragmanı Oynat">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              
              <!-- IMDb 3D Badge -->
              <div class="card-imdb-badge ${imdbClass}">
                <span class="badge-star">★</span>
                <span class="badge-val">${movie.imdbRating}</span>
                <span class="badge-votes">${movie.imdbVotes}</span>
              </div>

              <!-- IMDb Puanının Hemen Altında: Yayın Platformları -->
              <div class="card-streaming-row">
                ${streamInfo.hasTrProvider && streamInfo.providers.length > 0 ? `
                  <span class="streaming-badge-label">Nerede İzlenir?</span>
                  <div class="streaming-logo-row">
                    ${streamInfo.providers.map(p => `
                      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="streaming-logo-pill ${p.badgeClass}" title="${p.name}'da ${movie.title} İzle" onclick="event.stopPropagation();">
                        ${p.iconSvg}
                        <span>${p.name}</span>
                      </a>
                    `).join('')}
                  </div>
                ` : `
                  <div class="card-no-tr-pill" title="Bu yapımın Türkiye'de resmi bir yayıncısı bulunmamaktadır.">
                    <span class="no-tr-dot"></span>
                    <span>TR yayıncısı bulunamadı</span>
                  </div>
                  ${streamInfo.globalProviders && streamInfo.globalProviders.length > 0 ? `
                    <div class="streaming-logo-row" style="margin-top: 3px;">
                      ${streamInfo.globalProviders.map(p => `
                        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="streaming-logo-pill ${p.badgeClass}" title="${p.name} (Küresel Yayıncı)" onclick="event.stopPropagation();">
                          ${p.iconSvg}
                          <span>${p.name} (Global)</span>
                        </a>
                      `).join('')}
                    </div>
                  ` : ''}
                `}
              </div>

              <!-- Yaş Sınırı -->
              <span class="card-age-tag">${movie.ageRating}</span>

              <!-- Film / Dizi Türü Rozeti -->
              <span class="card-type-tag">${movie.isSeries ? '📺 Dizi' : '🎬 Film'}</span>

              <!-- Çevrimiçi Çekildi Rozeti -->
              ${movie.isOnlineFetched ? `
                <span class="card-online-badge">
                  <span class="online-indicator-dot" style="width:6px;height:6px;"></span>
                  Canlı IMDb
                </span>
              ` : ''}

              <!-- Ruh Hali Rozeti (Mood Pill) -->
              ${moodBadge ? `
                <span class="card-mood-pill" style="border-color:${moodBadge.color}; color:${moodBadge.color};">
                  ${moodBadge.emoji} ${moodBadge.shortTitle}
                </span>
              ` : ''}

              <!-- Renk Paleti Mini Göstergesi (5 Renk Noktası) -->
              ${moviePalette ? `
                <div class="card-palette-mini" title="${moviePalette.title} (${moviePalette.directorSignature})">
                  ${moviePalette.swatches.map(color => `<span class="palette-mini-dot" style="background-color: ${color};"></span>`).join('')}
                </div>
              ` : ''}

              <!-- Kart Eylem Butonları (İzledim, VS, Favori) -->
              <div class="card-actions-row">
                <!-- İzledim Butonu (Faz 3) -->
                <button class="card-action-btn card-watched-btn ${this.isMovieWatched(movie.id) ? 'active' : ''}" data-movie-id="${movie.id}" title="${this.isMovieWatched(movie.id) ? 'İzlenenlerden Çıkar' : 'İzledim Olarak İşaretle'}">
                  👁️
                </button>

                <!-- VS Düello Butonu (Faz 2) -->
                <button class="card-action-btn card-vs-btn ${this.isMovieInVS(movie.id) ? 'active' : ''}" data-movie-id="${movie.id}" title="${this.isMovieInVS(movie.id) ? 'Kıyaslamadan Çıkar' : 'Düelloya / VSye Ekle'}">
                  ⚔️
                </button>

                <!-- Favori Butonu -->
                <button class="card-action-btn card-fav-btn ${isFav ? 'active' : ''}" data-movie-id="${movie.id}" title="${isFav ? 'Listeden Çıkar' : 'Listeme Ekle'}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
            </div>

            <!-- Kart İçerik Bilgileri -->
            <div class="card-body">
              <div class="card-title-row">
                <h3 class="card-title" title="${movie.title}">${movie.title}</h3>
                <span class="card-year">${movie.year}</span>
              </div>
              <p class="card-original-title">${movie.originalTitle}</p>

              <!-- Platform Linkleri (IMDb ve Başlık Altı) -->
              <div class="card-inline-streaming-row">
                ${streamInfo.hasTrProvider && streamInfo.providers.length > 0 ? `
                  <span class="card-streaming-txt">Yayın:</span>
                  ${streamInfo.providers.map(p => `
                    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="inline-plat-badge ${p.badgeClass}" title="${p.name}'da ${movie.title} İzle" onclick="event.stopPropagation();">
                      ${p.iconSvg}
                      <span>${p.name}</span>
                    </a>
                  `).join('')}
                ` : `
                  <span class="card-streaming-txt-warn">Yayın:</span>
                  <span class="inline-no-tr-badge">TR yayıncısı bulunamadı</span>
                  ${streamInfo.globalProviders && streamInfo.globalProviders.length > 0 ? `
                    ${streamInfo.globalProviders.map(p => `
                      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="inline-plat-badge ${p.badgeClass}" title="${p.name} (Global)" onclick="event.stopPropagation();">
                        ${p.iconSvg}
                        <span>${p.name}</span>
                      </a>
                    `).join('')}
                  ` : ''}
                `}
              </div>

              <!-- Tür Etiketleri -->
              <div class="card-genres">
                ${movie.genres.slice(0, 3).map(g => `<span class="genre-tag">${g}</span>`).join('')}
              </div>

              <!-- Konu Özeti (Kısa) -->
              <p class="card-summary-short">${movie.summary ? movie.summary.slice(0, 115) : ''}...</p>

              <!-- Alt Aksiyonlar -->
              <div class="card-footer">
                <button class="card-detail-btn" data-movie-id="${movie.id}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Konuyu Oku & Fragman
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Olay dinleyicilerini bağla
    grid.querySelectorAll('.movie-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-fav-btn') || e.target.closest('.card-vs-btn') || e.target.closest('.card-watched-btn')) return;
        const id = card.dataset.movieId;
        const movie = this.movies.find(m => m.id === id);
        if (movie) this.openModal(movie);
      });
    });

    grid.querySelectorAll('.card-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.movieId;
        const movie = this.movies.find(m => m.id === id);
        if (movie) {
          this.toggleWatchlist(movie);
          btn.classList.toggle('active', this.isMovieInWatchlist(id));
          btn.querySelector('svg').setAttribute('fill', this.isMovieInWatchlist(id) ? 'currentColor' : 'none');
        }
      });
    });

    // İzledim Butonları (Faz 3)
    grid.querySelectorAll('.card-watched-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.movieId;
        const movie = this.movies.find(m => m.id === id);
        if (movie) {
          this.toggleWatched(movie);
        }
      });
    });

    // VS Düello Butonları (Faz 2)
    grid.querySelectorAll('.card-vs-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.movieId;
        const movie = this.movies.find(m => m.id === id);
        if (movie) {
          this.toggleVS(movie);
        }
      });
    });

    // 3D Parallaks Tilt efektini uygula
    this.bind3DTiltToCards(grid.querySelectorAll('.card-3d-tilt'));
  }

  // --- 3D PERSPEKTİF TİLT VE PARLAMA EFEKTİ ---
  bind3DTiltToCards(elements) {
    elements.forEach(card => {
      let bounds;

      function rotateToMouse(e) {
        bounds = card.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        };

        const maxDeg = 12;
        const rotateX = (-center.y / (bounds.height / 2)) * maxDeg;
        const rotateY = (center.x / (bounds.width / 2)) * maxDeg;

        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX.toFixed(2)}deg)
          rotateY(${rotateY.toFixed(2)}deg)
          scale3d(1.04, 1.04, 1.04)
        `;

        const glare = card.querySelector('.card-glare');
        if (glare) {
          const posX = (leftX / bounds.width) * 100;
          const posY = (topY / bounds.height) * 100;
          glare.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 60%)`;
        }
      }

      function onMouseEnter() {
        bounds = card.getBoundingClientRect();
        card.style.transition = 'transform 0.1s ease-out';
        if (window.cinemaAudio) window.cinemaAudio.playHover();
      }

      function onMouseLeave() {
        card.style.transition = 'transform 0.5s ease-out';
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        const glare = card.querySelector('.card-glare');
        if (glare) {
          glare.style.background = 'transparent';
        }
      }

      card.addEventListener('mouseenter', onMouseEnter);
      card.addEventListener('mousemove', rotateToMouse);
      card.addEventListener('mouseleave', onMouseLeave);
    });
  }

  // --- DETAY MODALI / FİLM KONUSU & FRAGMAN ---
  openModal(movie, autoplayTrailer = false, updateUrl = true) {
    this.stopMovieOst();
    this.activeMovieForModal = movie;
    const modal = document.getElementById('movie-modal');
    if (!modal) return;

    if (updateUrl) {
      this.updateUrlForMovie(movie.id);
    }

    if (window.cinemaAudio) window.cinemaAudio.playWhoosh();

    const isFav = this.isMovieInWatchlist(movie.id);

    // Eğer videoId henüz yoksa arka planda hemen çözümle
    if (!movie.trailerYoutubeId && this.apiService) {
      this.apiService.resolveTrailerVideoId(movie.title, movie.year).then(vid => {
        if (vid) {
          movie.trailerYoutubeId = vid;
          const extBtn = document.getElementById('modal-external-yt-link');
          if (extBtn) {
            extBtn.href = `https://www.youtube.com/watch?v=${vid}`;
          }
        }
      });
    }

    const youtubeSearchQueryUrl = movie.trailerYoutubeId 
      ? `https://www.youtube.com/watch?v=${movie.trailerYoutubeId}`
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + (movie.year || '') + ' fragman official trailer')}`;

    const modalStreamInfo = typeof getMovieStreamingInfo === 'function' 
      ? getMovieStreamingInfo(movie) 
      : { hasTrProvider: false, statusText: "TR yayıncısı bulunamadı", providers: [], globalProviders: [] };

    modal.innerHTML = `
      <div class="modal-backdrop" id="modal-backdrop"></div>
      <div class="modal-window">
        <button class="modal-close-btn" id="modal-close" aria-label="Kapat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Medya Bölümü (Trailer veya Backdrop) -->
        <div class="modal-media-header" id="modal-media-box">
          <div class="modal-backdrop-img" style="background-image: linear-gradient(to top, #141417 5%, rgba(20,20,23,0.6) 50%, rgba(20,20,23,0.2) 100%), url('${movie.backdropUrl}');">
            <button class="modal-play-trailer-trigger" id="modal-start-trailer" title="Fragmanı Başlat">
              <div class="play-pulse-circle">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <span>Fragmanı Başlat (${movie.isSeries ? 'Dizi Tanıtımı' : 'Resmi Fragman'})</span>
            </button>
          </div>
        </div>

        <!-- Modal İçerik -->
        <div class="modal-body-content">
          <div class="modal-grid-layout">
            <!-- Sol Kolon: Poster ve IMDb Rozeti -->
            <div class="modal-col-left">
              <div class="modal-poster-wrap card-3d-tilt">
                <img src="${movie.posterUrl}" alt="${movie.title}" onerror="this.onerror=null; this.src=getFallbackPoster('${movie.title.replace(/'/g, "\\'")}', '${movie.genres[0]}', '${movie.imdbRating}');" />
              </div>

              <!-- IMDb Süper Rozeti -->
              <div class="modal-imdb-showcase">
                <div class="imdb-score-circle">
                  <span class="imdb-score-number">${movie.imdbRating}</span>
                  <span class="imdb-score-label">IMDb PUANI</span>
                </div>
                <div class="imdb-votes-info">
                  <div class="stars-row">★★★★★</div>
                  <span>${movie.imdbVotes} kullanıcı oyu</span>
                  <span class="imdb-quality">${movie.imdbRating >= 9.0 ? 'Efsane Başyapıt' : 'Dünya Çapında Yüksek Skor'}</span>
                </div>
              </div>

              <!-- IMDb Puanının Hemen Altında: Yayın Platformları -->
              <div class="modal-streaming-showcase" id="modal-streaming-box">
                <div class="modal-streaming-header">
                  <span class="modal-streaming-title">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4z"/></svg>
                    Nerede İzlenir?
                  </span>
                  <span class="modal-streaming-badge ${modalStreamInfo.hasTrProvider ? '' : 'badge-warn'}">
                    ${modalStreamInfo.hasTrProvider ? `${modalStreamInfo.providers.length} TR Platformu` : 'TR Yayıncısı Yok'}
                  </span>
                </div>

                ${modalStreamInfo.hasTrProvider && modalStreamInfo.providers.length > 0 ? `
                  <div class="modal-plat-list">
                    ${modalStreamInfo.providers.map(p => `
                      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="modal-plat-btn ${p.badgeClass}" title="${p.name}'da ${movie.title} İzle">
                        <div class="plat-icon-wrap">
                          ${p.iconSvg}
                          <span class="plat-name">${p.name}</span>
                        </div>
                        <span class="plat-watch-action">
                          <span>Şimdi İzle</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </span>
                      </a>
                    `).join('')}
                  </div>
                ` : `
                  <div class="modal-no-tr-box">
                    <div class="no-tr-status-line">
                      <span class="no-tr-warn-icon">⚠️</span>
                      <span class="no-tr-warn-title">TR yayıncısı bulunamadı</span>
                    </div>
                    <p class="no-tr-warn-desc">Bu yapım şu an Türkiye'deki resmi dijital yayın platformlarında (Netflix, Prime Video, Disney+, TV+, BluTV vb.) yer almamaktadır.</p>
                  </div>
                  ${modalStreamInfo.globalProviders && modalStreamInfo.globalProviders.length > 0 ? `
                    <div class="modal-global-section">
                      <span class="modal-global-header">Orijinal / Küresel Yayıncı:</span>
                      <div class="modal-plat-list">
                        ${modalStreamInfo.globalProviders.map(p => `
                          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="modal-plat-btn ${p.badgeClass}" title="${p.name}'da İzle (Küresel)">
                            <div class="plat-icon-wrap">
                              ${p.iconSvg}
                              <span class="plat-name">${p.name} (Global)</span>
                            </div>
                            <span class="plat-watch-action">
                              <span>Global Sayfası</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </span>
                          </a>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                `}
              </div>
            </div>

            <!-- Sağ Kolon: Başlık, Konu, Türler, Künye -->
            <div class="modal-col-right">
              <div class="modal-title-bar">
                <h2 class="modal-title">${movie.title}</h2>
                <div class="modal-original-title">${movie.originalTitle} (${movie.year})</div>
              </div>

              <div class="modal-pill-row">
                <span class="modal-duration-tag">⏱️ ${movie.duration}</span>
                <span class="modal-age-tag">🔞 ${movie.ageRating}</span>
                <span class="modal-awards-tag">🏆 ${movie.awards || 'Popüler Sinema/Dizi'}</span>
                ${movie.isOnlineFetched ? '<span class="card-online-badge" style="position:static;">🌐 Canlı İnternet Verisi</span>' : ''}
              </div>

              <!-- Film Türleri -->
              <div class="modal-genre-box">
                <span class="genre-box-label">Türler:</span>
                <div class="genre-tags-list">
                  ${movie.genres.map(g => `<button class="modal-genre-pill" data-genre="${g}">${g}</button>`).join('')}
                </div>
              </div>

              <!-- Film Konusu (Detaylı Açıklama) -->
              <div class="modal-plot-section">
                <h4 class="section-heading">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  Film / Dizi Konusu & Hikayesi
                </h4>
                <p class="modal-plot-text">${movie.summary}</p>
                <div class="modal-quote-box">
                  <span class="quote-symbol">“</span>
                  <p class="quote-content">${movie.tagline}</p>
                </div>
              </div>

              <!-- Künye: Yönetmen & Oyuncular (Faz 1: İnteraktif Tıklanabilir Filmografi) -->
              <div class="modal-credits">
                <div class="credit-row">
                  <span class="credit-label">Yönetmen / Yapım:</span>
                  <div class="credit-value">
                    ${movie.director ? `
                      <button class="credit-pill-btn" data-person="${String(movie.director).replace(/"/g, '&quot;')}" title="${movie.director} filmografisini göster">
                        <span>🎬</span>
                        <span>${movie.director}</span>
                      </button>
                    ` : '<span>Bilinmiyor</span>'}
                  </div>
                </div>
                <div class="credit-row">
                  <span class="credit-label">Başrol Oyuncuları:</span>
                  <div class="credit-pills-list">
                    ${(Array.isArray(movie.cast) ? movie.cast : (movie.cast ? String(movie.cast).split(',') : [])).map(actor => {
                      const a = String(actor).trim();
                      if (!a) return '';
                      return `
                        <button class="credit-pill-btn" data-person="${a.replace(/"/g, '&quot;')}" title="${a} yapımlarını göster">
                          <span>🎭</span>
                          <span>${a}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              </div>

              <!-- Alt Butonlar -->
              <div class="modal-action-row">
                <button class="btn btn-primary" id="modal-toggle-video-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Fragmanı Oynat
                </button>
                <a href="${youtubeSearchQueryUrl}" target="_blank" rel="noopener noreferrer" class="btn-yt-external" id="modal-external-yt-link" title="YouTube'da Resmi Fragmanı Aç">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube'da Aç
                </a>
                <button class="btn btn-secondary ${isFav ? 'active' : ''}" id="modal-watchlist-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <span id="modal-watchlist-text">${isFav ? 'Listemden Çıkar' : 'İzleme Listeme Ekle'}</span>
                </button>
                <button class="btn btn-secondary ${this.isMovieWatched(movie.id) ? 'active' : ''}" id="modal-watched-btn" style="${this.isMovieWatched(movie.id) ? 'background:#10b981; border-color:#34d399; color:#fff;' : ''}">
                  <span>👁️</span>
                  <span id="modal-watched-text">${this.isMovieWatched(movie.id) ? 'İzlendi (✓)' : 'İzledim'}</span>
                </button>
                <button class="btn btn-vs-modal ${this.isMovieInVS(movie.id) ? 'active' : ''}" id="modal-vs-btn">
                  <span>⚔️</span>
                  <span id="modal-vs-text">${this.isMovieInVS(movie.id) ? 'Düellodan Çıkar' : 'Filmle Kıyasla (VS)'}</span>
                </button>
                <!-- Orijinal Dizi / Film Müziği (OST) ve Bilet Butonları -->
                <button class="btn btn-secondary btn-ambient-sound" id="modal-theme-song-btn" title="Orijinal Film / Dizi Müziğini (OST) Çal">
                  <span>🎵</span>
                  <span id="modal-theme-song-text">Tema Müziği</span>
                </button>
                <button class="btn btn-secondary btn-ticket-create" id="modal-ticket-btn" title="Hatıra VIP Sinema Bileti Oluştur">
                  <span>🎟️</span>
                  <span>Bilet Oluştur</span>
                </button>
                <button class="btn btn-secondary btn-share-modal" id="modal-share-btn" title="Film bağlantısını kopyala ve paylaş">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  <span>Paylaş</span>
                </button>
              </div>

              <!-- Orijinal Film/Dizi Müziği (OST) Şeridi Yuvası -->
              <div class="modal-ost-slot" id="modal-ost-slot"></div>

              <!-- Kişisel Film Notu & İnceleme Bölümü (Faz 6) -->
              <div class="modal-review-section" id="modal-review-section"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Modal penceresinin daima en üstten başlamasını ve asla yatay kaymamasını garanti et
    const modalWindow = modal.querySelector('.modal-window');
    if (modalWindow) {
      modalWindow.scrollTop = 0;
      modalWindow.scrollLeft = 0;
      modalWindow.addEventListener('scroll', () => {
        if (modalWindow.scrollLeft !== 0) {
          modalWindow.scrollLeft = 0;
        }
      }, { passive: true });
    }

    // Kişisel Film Notu & İncelemesini Render Et
    this.renderModalReviewSection(movie);

    // Dinleyiciler
    document.getElementById('modal-close')?.addEventListener('click', () => this.closeModal());
    document.getElementById('modal-backdrop')?.addEventListener('click', () => this.closeModal());

    document.getElementById('modal-start-trailer')?.addEventListener('click', () => {
      this.switchModalToTrailer(movie);
    });

    document.getElementById('modal-toggle-video-btn')?.addEventListener('click', () => {
      const mediaBox = document.getElementById('modal-media-box');
      if (mediaBox.querySelector('iframe')) {
        this.openModal(movie, false);
      } else {
        this.switchModalToTrailer(movie);
      }
    });

    document.getElementById('modal-watchlist-btn')?.addEventListener('click', () => {
      this.toggleWatchlist(movie);
    });

    document.getElementById('modal-watched-btn')?.addEventListener('click', () => {
      this.toggleWatched(movie);
    });

    document.getElementById('modal-vs-btn')?.addEventListener('click', () => {
      this.toggleVS(movie);
    });

    // Orijinal Film/Dizi Müziği (OST) ve Bilet Modalı Dinleyicileri
    document.getElementById('modal-theme-song-btn')?.addEventListener('click', () => {
      this.toggleMovieOriginalOst(movie);
    });

    document.getElementById('modal-ticket-btn')?.addEventListener('click', () => {
      this.openTicketModal(movie);
    });

    document.getElementById('modal-share-btn')?.addEventListener('click', async () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}?movie=${encodeURIComponent(movie.id)}`;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(shareUrl);
        } else {
          const ta = document.createElement('textarea');
          ta.value = shareUrl;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        this.showToast('📋 Film bağlantısı panoya kopyalandı!', 'success');
      } catch (err) {
        this.showToast('Bağlantı: ' + shareUrl, 'info');
      }
    });

    modal.querySelectorAll('.modal-genre-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const g = e.currentTarget.dataset.genre;
        this.closeModal();
        this.setGenre(g);
      });
    });

    // İnteraktif Yönetmen & Oyuncu Tıklama (Faz 1)
    modal.querySelectorAll('.credit-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const person = btn.dataset.person;
        if (person) {
          this.closeModal();
          this.filterByPerson(person);
        }
      });
    });

    this.bind3DTiltToCards(modal.querySelectorAll('.card-3d-tilt'));

    if (autoplayTrailer) {
      this.switchModalToTrailer(movie);
    }

    // Eğer yayın bilgisi henüz yoksa canlı çöz ve modalı güncelle
    if (!movie.streamingInfo && !Array.isArray(movie.platforms) && this.apiService) {
      this.apiService.resolveStreamingProviders(movie.title, movie.year, movie.originalTitle).then(res => {
        if (res && this.activeMovieForModal && this.activeMovieForModal.id === movie.id) {
          movie.streamingInfo = res;
          const box = document.getElementById('modal-streaming-box');
          if (box) {
            const updated = getMovieStreamingInfo(movie);
            box.innerHTML = `
              <div class="modal-streaming-header">
                <span class="modal-streaming-title">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4z"/></svg>
                  Nerede İzlenir?
                </span>
                <span class="modal-streaming-badge ${updated.hasTrProvider ? '' : 'badge-warn'}">
                  ${updated.hasTrProvider ? `${updated.providers.length} TR Platformu` : 'TR Yayıncısı Yok'}
                </span>
              </div>
              ${updated.hasTrProvider && updated.providers.length > 0 ? `
                <div class="modal-plat-list">
                  ${updated.providers.map(p => `
                    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="modal-plat-btn ${p.badgeClass}" title="${p.name}'da ${movie.title} İzle">
                      <div class="plat-icon-wrap">
                        ${p.iconSvg}
                        <span class="plat-name">${p.name}</span>
                      </div>
                      <span class="plat-watch-action">
                        <span>Şimdi İzle</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </span>
                    </a>
                  `).join('')}
                </div>
              ` : `
                <div class="modal-no-tr-box">
                  <div class="no-tr-status-line">
                    <span class="no-tr-warn-icon">⚠️</span>
                    <span class="no-tr-warn-title">TR yayıncısı bulunamadı</span>
                  </div>
                  <p class="no-tr-warn-desc">Bu yapım şu an Türkiye'deki resmi dijital yayın platformlarında yer almamaktadır.</p>
                </div>
                ${updated.globalProviders && updated.globalProviders.length > 0 ? `
                  <div class="modal-global-section">
                    <span class="modal-global-header">Orijinal / Küresel Yayıncı:</span>
                    <div class="modal-plat-list">
                      ${updated.globalProviders.map(p => `
                        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="modal-plat-btn ${p.badgeClass}" title="${p.name}'da İzle (Küresel)">
                          <div class="plat-icon-wrap">
                            ${p.iconSvg}
                            <span class="plat-name">${p.name} (Global)</span>
                          </div>
                          <span class="plat-watch-action">
                            <span>Global Sayfası</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                          </span>
                        </a>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              `}
            `;
          }
        }
      });
    }
  }

  async switchModalToTrailer(movie) {
    // Fragman başlarken çalan tema müziğini durdur (ses çakışmasını önle)
    this.stopMovieOst();

    const mediaBox = document.getElementById('modal-media-box');
    if (!mediaBox) return;

    // 1. Eğer video ID henüz yoksa, loading gösterip canlı YouTube ID'sini çöz
    if (!movie.trailerYoutubeId) {
      mediaBox.innerHTML = `
        <div class="trailer-loading-box">
          <div class="spinner-ring" style="width:38px;height:38px;border-width:3px;"></div>
          <span style="font-size:1.1rem;font-weight:700;color:#fff;">"${movie.title}" Fragmanı Hazırlanıyor...</span>
          <span style="font-size:0.85rem;color:#a3a3b2;">Resmi YouTube kaynağı canlı taranıyor</span>
        </div>
      `;

      try {
        const resolvedId = await this.apiService?.resolveTrailerVideoId(movie.title, movie.year);
        if (resolvedId) {
          movie.trailerYoutubeId = resolvedId;
        }
      } catch (e) {
        console.warn("Fragman ID çözülemedi:", e);
      }
    }

    const fallbackYtUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + (movie.year || '') + ' fragman official trailer')}`;

    if (movie.trailerYoutubeId) {
      const directWatchUrl = `https://www.youtube.com/watch?v=${movie.trailerYoutubeId}`;
      const embedUrl = `https://www.youtube-nocookie.com/embed/${movie.trailerYoutubeId}?autoplay=1&rel=0&enablejsapi=1`;

      mediaBox.innerHTML = `
        <div class="trailer-iframe-wrap">
          <iframe 
            src="${embedUrl}" 
            title="${escapeHtmlText(movie.title)} Fragman" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <div class="trailer-fallback-strip">
            <span>Video oynatılmazsa veya telif kısıtlaması varsa:</span>
            <a href="${directWatchUrl}" target="_blank" rel="noopener noreferrer" class="strip-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube'da Doğrudan İzle
            </a>
          </div>
        </div>
      `;
    } else {
      // Her türlü açacak garanti fallback:
      // DÜZELTME: `window.open` bir `await` sonrasında çağrıldığı için tarayıcı bunu
      // kullanıcı hareketi saymıyor ve popup engelleyici sekmeyi kapatıyordu.
      // Artık otomatik pencere açmıyoruz; kullanıcıya net bir buton sunuyoruz.
      mediaBox.innerHTML = `
        <div class="trailer-fallback-box">
          <div style="font-size:3rem;margin-bottom:8px;">🎬</div>
          <h3 style="color:#fff;margin-bottom:6px;">"${escapeHtmlText(movie.title)}" Fragmanı Hazır</h3>
          <p style="color:#a3a3b2;font-size:0.9rem;margin-bottom:16px;">Fragman gömülü oynatıcıda açılamadı. Aşağıdaki butonla resmi YouTube sayfasında açabilirsiniz.</p>
          <a href="${fallbackYtUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Fragmanı YouTube'da Başlat
          </a>
        </div>
      `;
    }

    const toggleBtn = document.getElementById('modal-toggle-video-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        Görsele Dön
      `;
    }
  }

  updateWatchlistModalBtn(movieId) {
    if (!this.activeMovieForModal || this.activeMovieForModal.id !== movieId) return;
    const isFav = this.isMovieInWatchlist(movieId);
    const btn = document.getElementById('modal-watchlist-btn');
    const text = document.getElementById('modal-watchlist-text');
    if (btn && text) {
      btn.classList.toggle('active', isFav);
      btn.querySelector('svg').setAttribute('fill', isFav ? 'currentColor' : 'none');
      text.textContent = isFav ? 'Listemden Çıkar' : 'İzleme Listeme Ekle';
    }
  }

  // --- ORİJİNAL DİZİ & FİLM MÜZİĞİ (OST) YÖNETİMİ ---
  async toggleMovieOriginalOst(movie) {
    const slot = document.getElementById('modal-ost-slot');
    const btn = document.getElementById('modal-theme-song-btn');
    const txt = document.getElementById('modal-theme-song-text');
    
    // Eğer şu anda bu filmin müziği çalıyorsa durdur
    if (this.currentPlayingOstMovieId === movie.id) {
      this.stopMovieOst();
      this.showToast(`⏹️ "${movie.title}" tema müziği durduruldu.`, 'info');
      return;
    }

    // Başka bir müzik çalıyorsa önce onu durdur
    this.stopMovieOst();

    if (btn) btn.classList.add('loading');
    if (txt) txt.textContent = 'Müzik Başlatılıyor...';

    // 1. OST verisini al
    let ostData = (typeof MOVIE_SOUNDTRACKS !== 'undefined' && MOVIE_SOUNDTRACKS[movie.id]) 
      ? { ...MOVIE_SOUNDTRACKS[movie.id] } 
      : {
          track: `${movie.title} Orijinal Tema`,
          composer: movie.director || 'Film Müziği',
          youtubeId: movie.trailerYoutubeId || '',
          description: 'Resmi film müziği ve tema parçası.'
        };

    // Göreli yol: alt dizin barındırmada (ör. GitHub Pages /cine3d-netflix/) da çalışır.
    const localAudioUrl = `audio/ost/${movie.id}.mp3`;
    const streamAudioUrl = `api/stream-ost?id=${encodeURIComponent(movie.id)}&title=${encodeURIComponent(movie.title)}&originalTitle=${encodeURIComponent(movie.originalTitle || '')}&composer=${encodeURIComponent(ostData.composer || movie.director || '')}`;
    const initialAudioUrl = movie.isOnlineFetched ? streamAudioUrl : localAudioUrl;
    const fallbackAudioUrl = movie.isOnlineFetched ? localAudioUrl : streamAudioUrl;

    const watchUrl = ostData.youtubeId 
      ? `https://www.youtube.com/watch?v=${ostData.youtubeId}`
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + ostData.track + ' soundtrack')}`;

    this.currentPlayingOstMovieId = movie.id;

    if (btn) {
      btn.classList.remove('loading');
      btn.classList.add('playing');
    }
    if (txt) txt.textContent = 'Müziği Durdur';

    // 2. Doğrudan HTML5 Ses Oynatıcısını Başlat (Yerel/Akış Çift Katmanlı Yedeklilik)
    const audio = new Audio();
    audio.preload = 'auto';
    audio.volume = 0.85;
    this.currentOstAudio = audio;

    let fallbackTried = false;
    audio.onerror = () => {
      console.warn("Müzik yükleme uyarısı, alternatif kaynak deneniyor...");
      if (!fallbackTried) {
        fallbackTried = true;
        audio.src = fallbackAudioUrl;
        audio.load();
        audio.play().catch(e => console.warn("Fallback ses çalma hatası:", e));
      }
    };

    audio.src = initialAudioUrl;
    audio.load();

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.showToast(`🎵 "${movie.title}" Orijinal Müziği: ${ostData.composer} — "${ostData.track}" çalıyor!`, 'success');
      }).catch(err => {
        console.warn("Otomatik oynatma uyarısı:", err);
      });
    }

    // 3. Şeritte Lüks Sinematik Oynatıcı Arayüzü (Plak, Dalgalar, Süre Çubuğu, YouTube Butonu)
    if (slot) {
      // DÜZELTME: OST alanları `innerHTML` içine kaçışsız basılıyordu; kesme işareti
      // (', ") içeren başlıklarda inline onerror JS'i kırılıyor ve XSS'e yol açıyordu.
      const safeTitle = escapeHtmlText(movie.title);
      const safeGenre = escapeHtmlText(movie.genres && movie.genres[0] ? movie.genres[0] : 'Sinema');
      const safeRating = escapeHtmlText(movie.imdbRating);
      const safePoster = escapeHtmlText(movie.posterUrl);
      slot.innerHTML = `
        <div class="modal-ost-ribbon" id="modal-ost-ribbon">
          <div class="ost-vinyl-disc spinning" id="ost-vinyl-disc" title="Plak Dönüyor">
            <div class="ost-vinyl-grooves"></div>
            <img src="${safePoster}" class="ost-vinyl-art" alt="${safeTitle}" data-title="${safeTitle}" data-genre="${safeGenre}" data-rating="${safeRating}" onerror="this.onerror=null; this.src=getFallbackPoster(this.dataset.title, this.dataset.genre, this.dataset.rating);" />
            <div class="ost-vinyl-hole"></div>
          </div>
          <div class="ost-meta-info">
            <div class="ost-badge-pill">
              <span class="ost-pulse-dot"></span>
              ORİJİNAL DİZİ / FİLM MÜZİĞİ (STUDIO OST)
            </div>
            <h4 class="ost-track-title">${escapeHtmlText(ostData.track)}</h4>
            <p class="ost-composer-row">
              <span>Beste / Sanatçı:</span>
              <strong>${escapeHtmlText(ostData.composer)}</strong>
            </p>
            ${ostData.description ? `<p class="ost-desc">${escapeHtmlText(ostData.description)}</p>` : ''}
            
            <div class="ost-player-progress-wrap">
              <div class="ost-sound-wave" id="ost-sound-wave" title="Ses Çalıyor">
                <span class="bar bar-1"></span>
                <span class="bar bar-2"></span>
                <span class="bar bar-3"></span>
                <span class="bar bar-4"></span>
                <span class="bar bar-5"></span>
                <span class="bar bar-6"></span>
                <span class="bar bar-7"></span>
                <span class="bar bar-8"></span>
              </div>
              <div class="ost-timeline-bar" id="ost-timeline-bar" title="Süre İlerlemesi">
                <div class="ost-timeline-fill" id="ost-timeline-fill" style="width: 0%;"></div>
              </div>
              <span class="ost-timer-text" id="ost-timer-text">0:00 / 0:30</span>
            </div>
          </div>
          <div class="ost-controls-box">
            <div class="ost-extra-actions">
              <button class="ost-play-pause-btn" id="ost-play-pause-btn" title="Oynat / Duraklat">
                <span id="ost-play-pause-icon">⏸️</span>
              </button>
              <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="ost-external-link" title="YouTube'da Tam Parçayı Dinle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>YouTube'da Tam Sürüm</span>
              </a>
              <button class="ost-ribbon-close-btn" id="ost-ribbon-close-btn" title="Müziği Kapat">
                <span>✕ Kapat</span>
              </button>
            </div>
          </div>
        </div>
      `;

      // Oynat / Duraklat Butonu
      const playPauseBtn = document.getElementById('ost-play-pause-btn');
      const playPauseIcon = document.getElementById('ost-play-pause-icon');
      const disc = document.getElementById('ost-vinyl-disc');
      const waves = document.getElementById('ost-sound-wave');

      playPauseBtn?.addEventListener('click', () => {
        if (!this.currentOstAudio) return;
        if (this.currentOstAudio.paused) {
          this.currentOstAudio.play();
          if (playPauseIcon) playPauseIcon.textContent = '⏸️';
          if (disc) disc.classList.add('spinning');
          if (waves) waves.style.opacity = '1';
        } else {
          this.currentOstAudio.pause();
          if (playPauseIcon) playPauseIcon.textContent = '▶️';
          if (disc) disc.classList.remove('spinning');
          if (waves) waves.style.opacity = '0.3';
        }
      });

      // İlerleme çubuğu ve süre takibi
      const fill = document.getElementById('ost-timeline-fill');
      const timer = document.getElementById('ost-timer-text');
      const bar = document.getElementById('ost-timeline-bar');

      audio.addEventListener('timeupdate', () => {
        if (audio.duration && Number.isFinite(audio.duration) && fill) {
          const pct = Math.min(100, Math.max(0, (audio.currentTime / audio.duration) * 100));
          fill.style.width = pct + '%';
        }
        if (timer) {
          const curMin = Math.floor(audio.currentTime / 60);
          const curSec = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
          const durMin = (audio.duration && Number.isFinite(audio.duration)) ? Math.floor(audio.duration / 60) : 0;
          const durSec = (audio.duration && Number.isFinite(audio.duration)) ? Math.floor(audio.duration % 60).toString().padStart(2, '0') : '30';
          timer.textContent = `${curMin}:${curSec} / ${durMin}:${durSec}`;
        }
      });

      // Tıklanan yere sarma (Seek)
      bar?.addEventListener('click', (e) => {
        if (!audio.duration) return;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * audio.duration;
        audio.currentTime = newTime;
      });

      audio.addEventListener('ended', () => {
        this.stopMovieOst();
      });

      // Kapat Butonu
      document.getElementById('ost-ribbon-close-btn')?.addEventListener('click', () => {
        this.stopMovieOst();
      });
    }
  }

  stopMovieOst(movie = null) {
    this.currentPlayingOstMovieId = null;

    if (this.currentOstAudio) {
      try {
        this.currentOstAudio.pause();
        this.currentOstAudio.currentTime = 0;
      } catch (e) {}
      this.currentOstAudio = null;
    }

    // Şeridi temizle
    const slot = document.getElementById('modal-ost-slot');
    if (slot) slot.innerHTML = '';

    // Butonu sıfırla
    const btn = document.getElementById('modal-theme-song-btn');
    const txt = document.getElementById('modal-theme-song-text');
    if (btn) {
      btn.classList.remove('playing');
      btn.classList.remove('loading');
    }
    if (txt) txt.textContent = 'Tema Müziği';
  }

  closeModal(updateUrl = true) {
    this.stopMovieOst();
    if (window.cinemaAudio) window.cinemaAudio.stopAmbientScore();
    const modal = document.getElementById('movie-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.innerHTML = '';
    document.body.style.overflow = '';
    this.activeMovieForModal = null;
    if (updateUrl) {
      this.clearUrlMovieParam();
    }
  }

  // --- DEEP LINKING & PAYLAŞILABİLİR URL YÖNETİMİ ---
  updateUrlForMovie(movieId) {
    if (!window.history || !window.history.pushState) return;
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get('movie') !== movieId) {
        url.searchParams.set('movie', movieId);
        window.history.pushState({ movieId }, '', url.toString());
      }
    } catch (e) {
      // ignore
    }
  }

  clearUrlMovieParam() {
    if (!window.history || !window.history.replaceState) return;
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('movie')) {
        url.searchParams.delete('movie');
        const search = url.searchParams.toString();
        const newUrl = url.pathname + (search ? '?' + search : '') + url.hash;
        window.history.replaceState({}, '', newUrl);
      }
    } catch (e) {
      // ignore
    }
  }

  handleInitialUrlParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      const movieId = params.get('movie');
      if (movieId) {
        const normalized = movieId.toLowerCase().trim();
        const findAndOpen = () => {
          const found = this.movies.find(m => 
            (m.id && m.id.toLowerCase() === normalized) ||
            (m.imdbId && m.imdbId.toLowerCase() === normalized) ||
            (m.title && m.title.toLowerCase() === normalized) ||
            (m.originalTitle && m.originalTitle.toLowerCase() === normalized)
          );
          if (found) {
            this.openModal(found, false, false);
            return true;
          }
          return false;
        };

        if (!findAndOpen()) {
          setTimeout(findAndOpen, 600);
        }
      }

      const tabId = params.get('tab');
      if (tabId) {
        setTimeout(() => {
          this.switchDiscoveryTab(tabId);
        }, 300);
      }
    } catch (e) {
      console.warn('URL parametre çözümleme hatası:', e);
    }
  }

  // --- PWA (PROGRESSIVE WEB APP) YÖNETİMİ ---
  initPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
          console.log('[PWA] Service Worker aktif:', reg.scope);
        }).catch((err) => {
          console.warn('[PWA] Service Worker kaydedilemedi:', err);
        });
      });
    }

    let deferredPrompt = null;
    const installBtn = document.getElementById('btn-pwa-install');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (installBtn) {
        installBtn.classList.remove('hidden');
      }
    });

    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) {
          this.showToast('ℹ️ Tarayıcınızın menüsünden "Uygulamayı Yükle" diyebilirsiniz.', 'info');
          return;
        }
        deferredPrompt.prompt();
        try {
          const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') {
            this.showToast('🎉 Cine3D uygulaması yükleniyor!', 'success');
          }
        } catch (err) {}
        deferredPrompt = null;
        installBtn.classList.add('hidden');
      });
    }

    window.addEventListener('appinstalled', () => {
      this.showToast('🚀 Cine3D başarıyla yüklendi!', 'success');
      if (installBtn) installBtn.classList.add('hidden');
    });
  }

  // --- KİŞİSEL FİLM NOTU & İNCELEME YÖNETİMİ (FAZ 6) ---
  getMovieReview(movieId) {
    if (!movieId) return null;
    try {
      const data = JSON.parse(localStorage.getItem('cine3d_reviews') || '{}');
      return data[movieId] || null;
    } catch (e) {
      return null;
    }
  }

  saveMovieReview(movieId, reviewData) {
    if (!movieId) return false;
    try {
      const data = JSON.parse(localStorage.getItem('cine3d_reviews') || '{}');
      if (reviewData) {
        data[movieId] = {
          ...reviewData,
          updatedAt: new Date().toISOString()
        };
      } else {
        delete data[movieId];
      }
      localStorage.setItem('cine3d_reviews', JSON.stringify(data));
      window.dispatchEvent(new CustomEvent('cine3d-user-data-changed'));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  renderModalReviewSection(movie, isEditing = false) {
    const container = document.getElementById('modal-review-section');
    if (!container || !movie) return;

    const review = this.getMovieReview(movie.id);
    const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    if (review && !isEditing) {
      const dateStr = review.updatedAt ? new Date(review.updatedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
      container.innerHTML = `
        <div class="modal-review-box">
          <div class="review-box-header">
            <div class="review-box-title">
              <span class="review-box-icon">📝</span>
              <span>Kişisel Sinema Notum</span>
            </div>
            ${dateStr ? `<span class="review-date-badge">${dateStr}</span>` : ''}
          </div>
          <div class="saved-review-card">
            ${review.tag ? `<span class="saved-review-tag">${esc(review.tag)}</span>` : ''}
            <p class="saved-review-text">${esc(review.note)}</p>
            <div class="saved-review-actions">
              <button class="btn-review-sm" id="btn-edit-review">✏️ Düzenle</button>
              <button class="btn-review-sm danger" id="btn-delete-review">🗑️ Sil</button>
            </div>
          </div>
        </div>
      `;

      container.querySelector('#btn-edit-review')?.addEventListener('click', () => {
        this.renderModalReviewSection(movie, true);
      });

      container.querySelector('#btn-delete-review')?.addEventListener('click', () => {
        this.saveMovieReview(movie.id, null);
        this.showToast('🗑️ Kişisel film notunuz silindi.', 'info');
        this.renderModalReviewSection(movie, false);
        this.renderWatchlistDrawer();
      });
      return;
    }

    // Düzenleme / Ekleme Modu
    let selectedTag = review?.tag || '';
    const tags = ['Başyapıt 🏆', 'Kafa Açıcı 🧠', 'Görsel Şölen 🎨', 'Dram / Duygusal 💔', 'Arkadaşla İzlenir 🍿', 'Ters Köşe ⚡', 'Hayal Kırıklığı 🥱'];

    container.innerHTML = `
      <div class="modal-review-box">
        <div class="review-box-header">
          <div class="review-box-title">
            <span class="review-box-icon">📝</span>
            <span>${review ? 'Notu Düzenle' : 'Kişisel Sinema Notu Ekle'}</span>
          </div>
        </div>
        <div class="review-editor-form">
          <div class="review-tags-picker">
            <span class="rtp-label">Atmosfer / Vibe Etiketi:</span>
            <div class="rtp-chips" id="review-tags-chips">
              ${tags.map(t => `
                <button type="button" class="review-tag-chip ${selectedTag === t ? 'active' : ''}" data-tag="${esc(t)}">${esc(t)}</button>
              `).join('')}
            </div>
          </div>
          <textarea 
            id="review-textarea" 
            class="review-textarea" 
            placeholder="Bu yapım hakkındaki kişisel düşüncelerin, unutamadığın sahne veya müzikler..." 
            rows="3" 
            maxlength="600"
          >${review ? esc(review.note) : ''}</textarea>
          <div class="review-editor-footer">
            <span class="review-char-count"><span id="review-char-num">${review ? review.note.length : 0}</span>/600</span>
            <div class="review-footer-buttons">
              ${review ? `<button type="button" class="btn-review-cancel" id="btn-cancel-edit-review">İptal</button>` : ''}
              <button type="button" class="btn-review-save" id="btn-save-review">
                <span>💾 Notu Kaydet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.review-tag-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const tag = chip.dataset.tag;
        if (selectedTag === tag) {
          selectedTag = '';
          chip.classList.remove('active');
        } else {
          selectedTag = tag;
          container.querySelectorAll('.review-tag-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
        }
      });
    });

    const textarea = container.querySelector('#review-textarea');
    const charNum = container.querySelector('#review-char-num');
    textarea?.addEventListener('input', () => {
      if (charNum) charNum.textContent = textarea.value.length;
    });

    container.querySelector('#btn-cancel-edit-review')?.addEventListener('click', () => {
      this.renderModalReviewSection(movie, false);
    });

    container.querySelector('#btn-save-review')?.addEventListener('click', () => {
      const note = textarea ? textarea.value.trim() : '';
      if (!note && !selectedTag) {
        this.showToast('Lütfen bir not yazın veya etiket seçin.', 'warning');
        return;
      }
      this.saveMovieReview(movie.id, {
        note: note || selectedTag,
        tag: selectedTag
      });
      this.showToast('💾 Kişisel film notunuz kaydedildi!', 'success');
      this.renderModalReviewSection(movie, false);
      this.renderWatchlistDrawer();
    });
  }

  // --- İZLEME LİSTESİ ÇEKMECESİ ---
  openWatchlistDrawer() {
    const drawer = document.getElementById('watchlist-drawer');
    if (!drawer) return;
    this.renderWatchlistDrawer();
    drawer.classList.add('open');
    document.getElementById('watchlist-backdrop')?.classList.add('open');
  }

  closeWatchlistDrawer() {
    document.getElementById('watchlist-drawer')?.classList.remove('open');
    document.getElementById('watchlist-backdrop')?.classList.remove('open');
  }

  renderWatchlistDrawer() {
    const container = document.getElementById('watchlist-items-list');
    if (!container) return;

    // Sekme Sayaç Rozetlerini Güncelle
    const wlBadge = document.getElementById('drawer-tab-wl-count');
    const watchedBadge = document.getElementById('drawer-tab-watched-count');
    if (wlBadge) wlBadge.textContent = this.watchlist.length;
    if (watchedBadge) watchedBadge.textContent = this.watchedList.length;

    // Başlık İkon & Metnini Güncelle
    const titleText = document.querySelector('#drawer-main-title span');
    if (titleText) {
      if (this.activeDrawerTab === 'watchlist') titleText.textContent = `İzleme Listem (${this.watchlist.length})`;
      else if (this.activeDrawerTab === 'watched') titleText.textContent = `İzlediklerim (${this.watchedList.length})`;
      else titleText.textContent = `Sinema Karnem`;
    }

    // --- 1. SEKME: İZLEME LİSTEM ---
    if (this.activeDrawerTab === 'watchlist') {
      if (this.watchlist.length === 0) {
        container.innerHTML = `
          <div class="empty-watchlist">
            <div class="empty-icon">🔖</div>
            <h4>Listeniz Henüz Boş</h4>
            <p>Beğendiğiniz filmleri kalp simgesine tıklayarak listenize ekleyebilirsiniz.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = this.watchlist.map(movie => `
        <div class="watchlist-item-card" data-movie-id="${movie.id}">
          <img class="wl-thumb" src="${movie.posterUrl}" alt="${movie.title}" onerror="this.onerror=null; this.src=getFallbackPoster('${movie.title.replace(/'/g, "\\'")}', '${movie.genres[0]}', '${movie.imdbRating}');" />
          <div class="wl-details">
            <h4 class="wl-title">${movie.title}</h4>
            <div class="wl-meta">
              <span class="wl-imdb">⭐ ${movie.imdbRating}</span>
              <span class="wl-year">${movie.year}</span>
            </div>
            <p class="wl-genres">${Array.isArray(movie.genres) ? movie.genres.join(', ') : movie.genres}</p>
          </div>
          <button class="wl-remove-btn" data-movie-id="${movie.id}" title="Listeden Çıkar">
            ✕
          </button>
        </div>
      `).join('');

      container.querySelectorAll('.watchlist-item-card').forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target.closest('.wl-remove-btn')) return;
          const id = item.dataset.movieId;
          const movie = this.movies.find(m => m.id === id);
          if (movie) {
            this.closeWatchlistDrawer();
            this.openModal(movie);
          }
        });
      });

      container.querySelectorAll('.wl-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.dataset.movieId;
          const movie = this.movies.find(m => m.id === id);
          if (movie) this.toggleWatchlist(movie);
        });
      });
      return;
    }

    // --- 2. SEKME: İZLEDİKLERİM (WATCHED) ---
    if (this.activeDrawerTab === 'watched') {
      if (this.watchedList.length === 0) {
        container.innerHTML = `
          <div class="empty-watchlist">
            <div class="empty-icon">👁️</div>
            <h4>Henüz İzlenen Yapım Eklenmedi</h4>
            <p>Kartlardaki 👁️ butonuna tıklayarak izlediğiniz filmleri kaydedebilir ve kişisel puanınızı verebilirsiniz.</p>
            <button class="btn-report-demo" id="btn-load-demo-watched" style="margin: 16px auto 0;">
              <span>🎲 Örnek İzleme Geçmişi Yükle</span>
            </button>
          </div>
        `;
        document.getElementById('btn-load-demo-watched')?.addEventListener('click', () => {
          this.loadDemoWatchedHistory();
        });
        return;
      }

      container.innerHTML = this.watchedList.map(record => {
        const movie = this.movies.find(m => m.id === record.id) || {
          id: record.id,
          title: record.id,
          year: 2024,
          imdbRating: 8.5,
          genres: ['Sinema'],
          posterUrl: ''
        };

        const ratingVal = record.userRating || 10;

        return `
          <div class="watchlist-item-card" data-movie-id="${movie.id}">
            <img class="wl-thumb" src="${movie.posterUrl}" alt="${movie.title}" onerror="this.onerror=null; this.src=getFallbackPoster('${movie.title.replace(/'/g, "\\'")}', '${movie.genres[0]}', '${movie.imdbRating}');" />
            <div class="wl-details">
              <h4 class="wl-title">${movie.title}</h4>
              <div class="wl-meta">
                <span class="wl-imdb" title="IMDb Puanı">⭐ ${movie.imdbRating}</span>
                <span class="wl-year">${movie.year}</span>
              </div>
              <!-- Kişisel Kullanıcı Puanı -->
              <div style="display:flex; align-items:center; gap:6px; margin-top:4px;">
                <span style="font-size:0.75rem; color:#34d399; font-weight:700;">Puanın:</span>
                <select class="user-rating-select" data-movie-id="${movie.id}" onclick="event.stopPropagation();" style="background:rgba(16, 185, 129, 0.15); border:1px solid #10b981; color:#34d399; border-radius:6px; padding:1px 4px; font-size:0.75rem; font-weight:700;">
                  ${[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(score => `
                    <option value="${score}" ${score === ratingVal ? 'selected' : ''}>★ ${score}</option>
                  `).join('')}
                </select>
              </div>
              <!-- Kişisel Film Notu Rozeti -->
              ${(() => {
                const r = this.getMovieReview(movie.id);
                if (!r) return '';
                const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                return `
                  <div class="wl-review-snippet" title="${esc(r.note)}">
                    <span>📝</span>
                    <span class="wl-review-text">${esc(r.tag ? `[${r.tag}] ` : '')}${esc(r.note)}</span>
                  </div>
                `;
              })()}
            </div>
            <button class="wl-remove-btn" data-movie-id="${movie.id}" title="İzlenenlerden Kaldır">
              ✕
            </button>
          </div>
        `;
      }).join('');

      // Tıklayınca Modal Açma
      container.querySelectorAll('.watchlist-item-card').forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target.closest('.wl-remove-btn') || e.target.closest('.user-rating-select')) return;
          const id = item.dataset.movieId;
          const movie = this.movies.find(m => m.id === id);
          if (movie) {
            this.closeWatchlistDrawer();
            this.openModal(movie);
          }
        });
      });

      // Kaldırma
      container.querySelectorAll('.wl-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.dataset.movieId;
          const movie = this.movies.find(m => m.id === id) || { id, title: id };
          this.toggleWatched(movie);
        });
      });

      // Puan Değiştirme
      container.querySelectorAll('.user-rating-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
          const id = sel.dataset.movieId;
          const score = parseInt(e.target.value, 10);
          this.setMovieUserRating(id, score);
        });
      });
      return;
    }

    // --- 3. SEKME: SİNEMA KARNEM (CINE3D ANALYTICS) ---
    if (this.activeDrawerTab === 'stats') {
      if (this.watchedList.length === 0) {
        container.innerHTML = `
          <div class="empty-watchlist">
            <div class="empty-icon">📊</div>
            <h4>Sinema Karneniz Henüz Boş</h4>
            <p>İzlediğiniz filmleri işaretledikçe burada izleme süreniz, zevk profiliniz ve sinematik DNA'nız hesaplanacak!</p>
            <button class="btn-report-demo" id="btn-load-demo-watched-stats" style="margin: 16px auto 0;">
              <span>🎲 Örnek İzleme Geçmişi Yükle</span>
            </button>
          </div>
        `;
        document.getElementById('btn-load-demo-watched-stats')?.addEventListener('click', () => {
          this.loadDemoWatchedHistory();
        });
        return;
      }

      // Analitik Hesaplamaları
      const totalCount = this.watchedList.length;
      let totalMinutes = 0;
      let totalUserRating = 0;
      let totalImdb = 0;
      const genreCounts = {};
      const directorCounts = {};

      this.watchedList.forEach(item => {
        const movie = this.movies.find(m => m.id === item.id);
        if (movie) {
          const mins = this.parseDurationMinutes(movie.duration);
          if (typeof mins === 'number') totalMinutes += mins;
          else totalMinutes += 120; // Varsayılan

          totalImdb += (movie.imdbRating || 8.5);

          if (Array.isArray(movie.genres)) {
            movie.genres.forEach(g => {
              genreCounts[g] = (genreCounts[g] || 0) + 1;
            });
          }

          if (movie.director) {
            directorCounts[movie.director] = (directorCounts[movie.director] || 0) + 1;
          }
        }
        totalUserRating += (item.userRating || 10);
      });

      const hours = Math.floor(totalMinutes / 60);
      const remainingMins = totalMinutes % 60;
      const avgUser = (totalUserRating / totalCount).toFixed(1);
      const avgImdb = (totalImdb / totalCount).toFixed(1);

      // En popüler türler ve DNA oranı
      const sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);
      const topGenre = sortedGenres[0] ? sortedGenres[0][0] : 'Çeşitli';
      const totalGenreHits = Object.values(genreCounts).reduce((a, b) => a + b, 0) || 1;

      // En popüler yönetmen
      const sortedDirectors = Object.entries(directorCounts).sort((a, b) => b[1] - a[1]);
      const topDirector = sortedDirectors[0] ? `${sortedDirectors[0][0]} (${sortedDirectors[0][1]} yapım)` : 'Çeşitli';

      // Sinefil Seviyesi & Rütbe
      let rankBadge = '🌱 SİNEMA ÇIRAĞI';
      let rankTitle = 'Keşif Yolculuğunun Başındasın';
      if (totalCount >= 15) {
        rankBadge = '👑 BAŞYAPIT ÜSTADI';
        rankTitle = 'Sinema Sanatının Yürüyen Ansiklopedisi';
      } else if (totalCount >= 8) {
        rankBadge = '🎬 SİNEFİL GURME';
        rankTitle = 'Yüksek Seçici & Derin Vizyon Sahibi';
      } else if (totalCount >= 4) {
        rankBadge = '🍿 SİNEMA TUTKUNU';
        rankTitle = 'Düzenli Başyapıt Tüketicisi';
      }

      // DNA Bar Renk Paleti
      const segmentColors = ['#38bdf8', '#f59e0b', '#ef4444', '#10b981', '#a855f7'];

      container.innerHTML = `
        <div class="cinema-report-card">
          <!-- Seviye & Rütbe Kutusu -->
          <div class="report-hero-box">
            <span class="report-rank-badge">${rankBadge}</span>
            <h4 class="report-rank-title">${rankTitle}</h4>
            <p style="font-size:0.8rem; color:var(--text-muted); margin:4px 0 0 0;">Cine3D profil analizi tamamlandı</p>
          </div>

          <!-- 4 Ana Metrik Izgarası -->
          <div class="report-stats-grid">
            <div class="report-stat-tile">
              <span class="report-tile-val">${totalCount} Yapım</span>
              <span class="report-tile-label">İzlenen Film/Dizi</span>
            </div>
            <div class="report-stat-tile">
              <span class="report-tile-val">${hours}s ${remainingMins}dk</span>
              <span class="report-tile-label">Toplam Süre</span>
            </div>
            <div class="report-stat-tile">
              <span class="report-tile-val">★ ${avgUser}</span>
              <span class="report-tile-label">Ort. Puanın (IMDb: ${avgImdb})</span>
            </div>
            <div class="report-stat-tile">
              <span class="report-tile-val" style="font-size:1.05rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${topGenre}</span>
              <span class="report-tile-label">Baskın Türün</span>
            </div>
            <div class="report-stat-tile">
              <span class="report-tile-val">${Object.keys(JSON.parse(localStorage.getItem('cine3d_reviews') || '{}')).length} Not</span>
              <span class="report-tile-label">Kişisel İnceleme</span>
            </div>
          </div>

          <!-- Sinematik DNA & Tür Dağılımı -->
          <div class="report-dna-section">
            <div class="report-dna-title">
              <span>🧬</span>
              <span>Sinematik DNA (Tür Dağılımı)</span>
            </div>
            <div class="report-dna-bar-track">
              ${sortedGenres.slice(0, 5).map((item, idx) => {
                const pct = ((item[1] / totalGenreHits) * 100).toFixed(1);
                return `<div class="report-dna-segment" style="width: ${pct}%; background-color: ${segmentColors[idx % segmentColors.length]};" title="${item[0]}: %${pct}"></div>`;
              }).join('')}
            </div>
            <div class="report-dna-legend">
              ${sortedGenres.slice(0, 5).map((item, idx) => {
                const pct = Math.round((item[1] / totalGenreHits) * 100);
                return `<span><span class="dna-legend-dot" style="background-color: ${segmentColors[idx % segmentColors.length]};"></span>${item[0]} (%${pct})</span>`;
              }).join('')}
            </div>
          </div>

          <!-- Favori Yönetmen Kutusu -->
          <div style="background:rgba(255, 255, 255, 0.04); border:1px solid rgba(255, 255, 255, 0.08); border-radius:12px; padding:12px;">
            <div style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase; letter-spacing:0.5px;">En Çok İzlediğin Yönetmen</div>
            <div style="font-size:0.95rem; font-weight:700; color:#fff; margin-top:2px;">🎬 ${topDirector}</div>
          </div>

          <!-- Alt Butonlar -->
          <div style="display:flex; gap:8px;">
            <button class="btn-report-demo" id="btn-reload-demo" style="flex:1;">
              <span>🎲 Örnek Veri</span>
            </button>
            <button class="btn-report-demo" id="btn-clear-history" style="flex:1; border-color:rgba(239, 68, 68, 0.4); color:#ef4444; background:rgba(239, 68, 68, 0.1);">
              <span>🗑️ Sıfırla</span>
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-reload-demo')?.addEventListener('click', () => {
        this.loadDemoWatchedHistory();
      });

      document.getElementById('btn-clear-history')?.addEventListener('click', () => {
        this.clearWatchedHistory();
      });
    }
  }

  // --- GÖRÜNÜM MODU GEÇİŞİ (GRID vs 3D COVERFLOW) ---
  toggleViewMode(mode) {
    this.viewMode = mode;
    const gridContainer = document.getElementById('grid-view-section');
    const coverflowContainer = document.getElementById('coverflow-view-section');
    const btnGrid = document.getElementById('view-toggle-grid');
    const btnCoverflow = document.getElementById('view-toggle-coverflow');

    if (mode === 'coverflow') {
      gridContainer?.classList.add('hidden');
      coverflowContainer?.classList.remove('hidden');
      btnGrid?.classList.remove('active');
      btnCoverflow?.classList.add('active');

      if (!this.coverflowInstance) {
        this.coverflowInstance = new Coverflow3D(
          'coverflow-container',
          this.filteredMovies,
          (movie) => this.openModal(movie)
        );
      } else {
        this.coverflowInstance.updateData(this.filteredMovies);
      }

      if (window.cinemaAudio) window.cinemaAudio.playTaDum();
    } else {
      coverflowContainer?.classList.add('hidden');
      gridContainer?.classList.remove('hidden');
      btnCoverflow?.classList.remove('active');
      btnGrid?.classList.add('active');
    }
  }

  // HTML varlıklarını geri çöz (escape edilmiş veriler canvas/textContent'te düz metin kullanılırken)
  decodeHtmlEntities(str) {
    if (str == null) return '';
    const s = String(str);
    if (!/&[a-zA-Z#0-9]+;/.test(s)) return s;
    const el = document.createElement('textarea');
    el.innerHTML = s;
    return el.value;
  }

  // --- TOAST BİLDİRİMİ ---
  showToast(message, type = 'info') {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    toast.textContent = this.decodeHtmlEntities(message);
    toast.className = `toast-popup show ${type}`;

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  resetFilters() {
    this.activeGenre = "Tümü";
    this.minImdb = 0;
    this.searchQuery = "";
    this.activePaletteFilter = null;
    this.activePaletteObj = null;
    this.activeMoodFilter = null;
    this.activeMoodObj = null;
    this.activeHubFilter = null;
    this.activeHubTitle = "";
    this.activeHubKeywords = [];
    this.activeDurationFilter = 'all';
    document.querySelectorAll('#duration-preset-buttons .duration-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.duration === 'all');
    });
    this.clearSearchVisualTheme();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = "";
      searchInput.setAttribute('placeholder', 'Ara');
    }
    this.setMinImdb(0);
    this.renderGenreFilters();
    this.renderMoodSection();
    this.renderPaletteSection();
    this.applyFilters();
  }

  updateAudioButtonState() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (!audioBtn) return;
    const isMuted = window.cinemaAudio ? window.cinemaAudio.isMuted : false;
    audioBtn.classList.toggle('muted', isMuted);
    audioBtn.setAttribute('title', isMuted ? 'Sesi Aç (Netflix Ta-Dum Aktif)' : 'Sesi Kapat');
  }

  // --- GLOBAL OLAY DİNLEYİCİLERİ ---
  bindGlobalEvents() {
    // Arama Kutusu (Canlı İnternet Arama Entegreli)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleLiveSearch(e.target.value);
      });
    }

    // İnternetten Yeni Filmler/Diziler Çek Butonu
    const fetchMoreBtn = document.getElementById('fetch-more-online-btn');
    if (fetchMoreBtn) {
      fetchMoreBtn.addEventListener('click', () => {
        this.fetchMoreOnline();
      });
    }

    // IMDb Slider — etiket anında güncellenir, ağır ızgara render'ı sürükleme sırasında
    // her pikselde değil 120ms'de bir çalışır (115 kartlık innerHTML yeniden çizimi pahalıdır)
    const imdbSlider = document.getElementById('imdb-range-slider');
    if (imdbSlider) {
      let lastRender = 0;
      let pendingTimer = null;
      imdbSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        const label = document.getElementById('imdb-range-value');
        if (label) label.textContent = val > 0 ? `${val.toFixed(1)}+` : 'Tümü';

        const now = Date.now();
        if (now - lastRender >= 120) {
          lastRender = now;
          if (pendingTimer) { clearTimeout(pendingTimer); pendingTimer = null; }
          this.setMinImdb(val);
        } else if (!pendingTimer) {
          pendingTimer = setTimeout(() => {
            pendingTimer = null;
            lastRender = Date.now();
            this.setMinImdb(parseFloat(imdbSlider.value));
          }, 130);
        }
      });
    }

    // Süre & Format Filtre Butonları (Faz 1)
    document.querySelectorAll('#duration-preset-buttons .duration-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const val = e.currentTarget.dataset.duration;
        this.setDurationFilter(val);
      });
    });

    // Sıralama Seçimi
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.applyFilters();
      });
    }

    // Görünüm Butonları
    document.getElementById('view-toggle-grid')?.addEventListener('click', () => {
      this.toggleViewMode('grid');
    });

    document.getElementById('view-toggle-coverflow')?.addEventListener('click', () => {
      this.toggleViewMode('coverflow');
    });

    // Platform Tema Seçici Butonları (Netflix, HBO Max, Disney+, Prime Video)
    document.querySelectorAll('.theme-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const theme = e.currentTarget.dataset.theme;
        this.applyTheme(theme, true);
      });
    });

    // Ses Butonu
    document.getElementById('audio-toggle-btn')?.addEventListener('click', () => {
      if (window.cinemaAudio) {
        const muted = window.cinemaAudio.toggleMute();
        this.updateAudioButtonState();
        if (!muted) {
          window.cinemaAudio.playThemeSound(this.activeTheme);
        }
      }
    });

    // Platform Ses Efekti Tanıtım Butonu
    document.getElementById('play-tadum-btn')?.addEventListener('click', () => {
      if (window.cinemaAudio) {
        window.cinemaAudio.playThemeSound(this.activeTheme);
      }
    });

    // İzleme Listesi Butonu
    document.getElementById('open-watchlist-btn')?.addEventListener('click', () => {
      this.openWatchlistDrawer();
    });

    document.getElementById('watchlist-close')?.addEventListener('click', () => {
      this.closeWatchlistDrawer();
    });

    document.getElementById('watchlist-backdrop')?.addEventListener('click', () => {
      this.closeWatchlistDrawer();
    });

    // Çekmece Sekme Değiştirici (Faz 3: Listem / İzlediklerim / Karnem)
    document.querySelectorAll('.drawer-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.drawerTab;
        this.switchDrawerTab(tab);
      });
    });

    // --- SİNEMATİK DÜELLO (VS) DİNLENİYİCİLERİ (FAZ 2) ---
    document.getElementById('open-vs-btn')?.addEventListener('click', () => {
      const dock = document.getElementById('vs-dock');
      if (dock) {
        if (this.vsList.length === 2) {
          this.openVSModal();
        } else {
          dock.classList.toggle('hidden');
          this.updateVSDock(true);
        }
      }
    });

    document.getElementById('vs-dock-close')?.addEventListener('click', () => {
      document.getElementById('vs-dock')?.classList.add('hidden');
    });

    document.getElementById('vs-launch-btn')?.addEventListener('click', () => {
      if (this.vsList.length === 2) {
        this.openVSModal();
      } else {
        this.showToast('⚔️ Düelloyu başlatmak için lütfen 2 film seçin veya Rastgele VS butonuna tıklayın!', 'warn');
      }
    });

    document.getElementById('vs-quick-random-btn')?.addEventListener('click', () => {
      this.selectRandomVSPair(false);
      this.showToast('🎲 Rastgele 2 başyapıt eşleştirildi! Düelloyu başlatabilirsiniz.', 'success');
    });

    document.getElementById('vs-clear-btn')?.addEventListener('click', () => {
      this.vsList = [];
      this.updateVSDock();
      this.updateVSCardButtons();
      if (this.activeMovieForModal) this.updateVSModalBtn(this.activeMovieForModal.id);
      this.showToast('Düello listesi temizlendi.', 'info');
    });

    document.getElementById('vs-modal-close')?.addEventListener('click', () => {
      this.closeVSModal();
    });

    document.getElementById('vs-modal-backdrop')?.addEventListener('click', () => {
      this.closeVSModal();
    });

    // --- SİNEMATİK FİLM RULETİ DİNLENİYİCİLERİ (FAZ 4) ---
    document.getElementById('btn-spin-roulette')?.addEventListener('click', () => {
      this.spinRoulette();
    });

    document.querySelectorAll('#roulette-filter-pills .roulette-filter-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('#roulette-filter-pills .roulette-filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeRouletteFilter = pill.dataset.rfilter || 'all';
        this.initRoulette();
        if (window.cinemaAudio) window.cinemaAudio.playHover();
      });
    });

    // --- SİNEMA BİLETİ MODAL DİNLENİYİCİLERİ (FAZ 4) ---
    document.getElementById('ticket-modal-close')?.addEventListener('click', () => {
      this.closeTicketModal();
    });

    document.getElementById('btn-close-ticket')?.addEventListener('click', () => {
      this.closeTicketModal();
    });

    document.getElementById('ticket-modal-backdrop')?.addEventListener('click', () => {
      this.closeTicketModal();
    });

    document.getElementById('btn-download-ticket')?.addEventListener('click', () => {
      this.downloadTicketImage();
    });

    // Ruh Hali (Mood) Butonları (Beni Şaşırt & Filtreyi Kaldır)
    document.getElementById('btn-surprise-mood')?.addEventListener('click', () => {
      this.selectRandomMood();
    });

    document.getElementById('btn-clear-mood-top')?.addEventListener('click', () => {
      this.clearMoodFilter();
    });

    // Renk Paleti Butonları (Rastgele Palet & Filtreyi Kaldır)
    document.getElementById('btn-surprise-palette')?.addEventListener('click', () => {
      this.selectRandomPalette();
    });

    document.getElementById('btn-clear-palette-top')?.addEventListener('click', () => {
      this.clearPaletteFilter();
    });

    // ESC Tuşu ile Modal ve Çekmeceleri Kapatma
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeWatchlistDrawer();
        this.closeVSModal();
        this.closeTicketModal();
      }
    });

    // Tarayıcı İleri / Geri Tuşları (Deep Linking & History API)
    window.addEventListener('popstate', () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const movieId = params.get('movie');
        const modal = document.getElementById('movie-modal');
        if (movieId) {
          const normalized = movieId.toLowerCase().trim();
          const found = this.movies.find(m => 
            (m.id && m.id.toLowerCase() === normalized) ||
            (m.imdbId && m.imdbId.toLowerCase() === normalized)
          );
          if (found && (!this.activeMovieForModal || this.activeMovieForModal.id !== found.id)) {
            this.openModal(found, false, false);
          }
        } else if (modal && modal.classList.contains('open')) {
          this.closeModal(false);
        }
      } catch (err) {
        // ignore
      }
    });

    // Navbar Menü Linkleri (Ofsetli ve Akıcı Kaydırma, Yıldızlar Geçidi Desteği)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Eğer menü linki bir keşif sekmesine işaret ediyorsa, o sekmeyi anında aktif et
        if (link.dataset.tab) {
          this.switchDiscoveryTab(link.dataset.tab);
        }

        const nav = document.getElementById('navbar');
        const navHeight = nav ? nav.offsetHeight : 68;
        const targetRect = targetElement.getBoundingClientRect();
        const offsetTop = targetRect.top + window.pageYOffset - navHeight - 15;

        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        });

        // Top 10 / Yıldızlar Geçidi seçildiğinde dikkat çeken parlama efekti
        if (targetId === 'top10-anchor') {
          targetElement.classList.remove('highlight-section');
          void targetElement.offsetWidth;
          targetElement.classList.add('highlight-section');
          setTimeout(() => targetElement.classList.remove('highlight-section'), 2400);
          if (window.cinemaAudio) window.cinemaAudio.playWhoosh();
        }
      });
    });

    // Sayfaya ilk kullanıcı etkileşiminde ses context'ini uyandır ve tema introsunu çal
    const playIntroOnce = () => {
      if (window.cinemaAudio && !window.cinemaAudio.ctx) {
        window.cinemaAudio.playThemeSound(this.activeTheme);
      }
      window.removeEventListener('click', playIntroOnce);
    };
    window.addEventListener('click', playIntroOnce, { once: true });
  }

  // --- PLATFORM TEMA YÖNETİMİ (NETFLIX, HBO MAX, DISNEY+, PRIME VIDEO) ---
  applyTheme(theme = 'netflix', playSound = true) {
    const validThemes = ['netflix', 'hbo', 'disney', 'prime'];
    if (!validThemes.includes(theme)) theme = 'netflix';

    this.activeTheme = theme;
    this.activeHubFilter = null;
    this.activeHubTitle = "";
    this.activeHubKeywords = [];
    this.heroMovieIndex = 0;
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('cine3d_theme', theme);
    } catch (e) {}

    // 1. Navbar'daki aktif buton durumunu güncelle
    document.querySelectorAll('.theme-pill-btn').forEach(btn => {
      const isActive = btn.dataset.theme === theme;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });

    // 2. Platform Arayüz & Marka Meta Verileri
    const platformUIMeta = {
      netflix: {
        logoIcon: `<svg class="logo-icon" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>`,
        logoTitle: 'CINE3D',
        badge: 'NETFLIX 3D',
        soundName: 'Ta-Dum',
        toast: '🍿 Netflix Arayüzü & Teması Yüklendi!',
        titleText: 'Cine3D Netflix | IMDb Puanlı 3D Sinema & Dizi Keşif Platformu',
        home: 'Ana Sayfa',
        hubs: 'Öne Çıkanlar',
        top10: 'Top 10 IMDb',
        movies: 'Tüm Filmler',
        top10Title: 'IMDb En Yüksek Puanlı Top 10 Başyapıt',
        top10Icon: '👑',
        top10Sub: 'Sinema Tarihinin Zirvesi',
        catalogTitle: 'Netflix Film & Dizi Kataloğu',
        catalogIcon: '🎬',
        footerTitle: 'CINE3D NETFLIX',
        footerDesc: 'Netflix tarzı modern 3D derinlikli sinema deneyimi, IMDb puanları ve gerçek yayıncı rehberi.',
        searchPlaceholder: 'Ara',
        mood: '🎭 Ruh Hali',
        moodBadge: 'NETFLIX RUH HALİ & MOD',
        moodTitle: 'Bugün Ne İzlemek İstiyorsun?',
        moodSub: 'Anlık moduna göre seç: İster gözyaşı dök, ister kahkaha at, ister beynini yak!',
        palette: '🎨 Renk Paleti',
        paletteBadge: 'NETFLIX SİNEMATİK GÖRSEL TONLAR',
        paletteTitle: 'Görsel Ton & Renk Paletiyle Keşfet',
        paletteSub: "Wes Anderson pastellerinden David Fincher'ın karanlık zümrüt tonlarına ve Mad Max çöl sıcağına kadar filmleri renkleriyle keşfet."
      },
      hbo: {
        logoIcon: `<svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>`,
        logoTitle: 'MAX 3D',
        badge: 'HBO MAX',
        soundName: 'HBO Chime',
        toast: '🟣 HBO Max Arayüzü & Teması Yüklendi!',
        titleText: 'Cine3D HBO Max | Prestij Dizileri & Film Arşivi',
        home: 'Ana Sayfa',
        hubs: 'HBO Hubs',
        top10: 'Eleştirmen Zirvesi',
        movies: 'Max Kataloğu',
        top10Title: 'HBO Max Eleştirmen Zirvesi & Prestij Kuşağı',
        top10Icon: '🟣',
        top10Sub: 'Akademi & Emmy Ödüllü Başyapıtlar',
        catalogTitle: 'HBO Max & Warner Bros. Kataloğu',
        catalogIcon: '💎',
        footerTitle: 'CINE3D HBO MAX',
        footerDesc: 'Warner Bros. Discovery & HBO prestij televizyonu ve sinema evreni arşivi.',
        searchPlaceholder: 'Ara',
        mood: '🎭 Mod & Prestij',
        moodBadge: 'HBO MAX & WARNER BROS. MODLARI',
        moodTitle: 'Ruh Haline Göre Prestij Seçkisi',
        moodSub: 'Derin dramlar, ödüllü başyapıtlar veya beyin yakan bilimkurgular arasından seçim yap.',
        palette: '🎨 Sinematik Ton',
        paletteBadge: 'WARNER BROS. & HBO RENK DÜNYASI',
        paletteTitle: 'Yönetmenlerin İkonik Renk Paletleri',
        paletteSub: 'Fincher noir, Nolan buzul mavisi, Coppola sıcak sepya ve monokrom sinema şaheserleri.'
      },
      disney: {
        logoIcon: `<svg class="logo-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.3 7.2L12 17l-6.3 4.2 2.3-7.2-6-4.8h7.6z"/></svg>`,
        logoTitle: 'DISNEY+ 3D',
        badge: 'DISNEY+',
        soundName: 'Disney Magic',
        toast: '✨ Disney+ Arayüzü & Teması Yüklendi!',
        titleText: 'Cine3D Disney+ | Marvel, Star Wars & Pixar Evreni',
        home: 'Ana Sayfa',
        hubs: 'Disney Markaları',
        top10: 'Yıldızlar Geçidi',
        movies: 'Tüm Koleksiyon',
        top10Title: 'Disney+ Yıldızlar Geçidi & En Yüksek Puanlılar',
        top10Icon: '✨',
        top10Sub: 'Disney, Pixar, Marvel, Star Wars & Nat Geo',
        catalogTitle: 'Disney+ Büyülü Film & Dizi Koleksiyonu',
        catalogIcon: '🏰',
        footerTitle: 'CINE3D DISNEY+',
        footerDesc: 'Disney, Pixar, Marvel, Star Wars ve National Geographic büyülü sinema arşivi.',
        searchPlaceholder: 'Ara',
        mood: '🎭 Büyülü Modlar',
        moodBadge: 'DISNEY+ & MARVEL & STAR WARS MODLARI',
        moodTitle: 'Büyülü Evrenler & Ruh Hali Matriksi',
        moodSub: 'İç ısıtan Pixar hikayelerinden galaktik maceralara ve adrenalin dolu anlara uzan.',
        palette: '🎨 Canlı Renkler',
        paletteBadge: 'DISNEY+ & MARVEL CANLI RENKLERİ',
        paletteTitle: 'Renk Paletleri & Masalsı Tonlar',
        paletteSub: 'Masalsı pastel tonlardan Marvel pop-art ve siberpunk neon ışıltılarına büyülü bir görsel yolculuk.'
      },
      prime: {
        logoIcon: `<svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 14c4 4 12 4 16 0"/><polyline points="18 13 21 15 19 18"/></svg>`,
        logoTitle: 'prime video',
        badge: 'PRIME VIDEO',
        soundName: 'Prime Sound',
        toast: '⚡ Amazon Prime Video Arayüzü & Teması Yüklendi!',
        titleText: 'Cine3D Prime Video | X-Ray Destekli Film & Dizi Rehberi',
        home: 'Ana Sayfa',
        hubs: 'Prime Kanalları',
        top10: 'Prime İlk 10',
        movies: 'Tüm Yapımlar',
        top10Title: 'Prime Video En Popüler İlk 10 (Türkiye)',
        top10Icon: '⚡',
        top10Sub: 'Prime ile Dahil & X-Ray Destekli İçerikler',
        catalogTitle: 'Amazon Prime Video & MGM Arşivi',
        catalogIcon: '📦',
        footerTitle: 'CINE3D PRIME VIDEO',
        footerDesc: 'Amazon Prime Video, Amazon MGM Studios ve IMDb X-Ray sinema arşivi.',
        searchPlaceholder: 'Ara',
        mood: '🎭 Moduna Göre',
        moodBadge: 'PRIME VIDEO MODUNA GÖRE İZLE',
        moodTitle: 'Hangi Duyguyu Yaşamak İstiyorsun?',
        moodSub: 'Kahkaha tufanı komediler, tırnak yedirten gerilimler ve soluksuz aksiyonlar seni bekliyor.',
        palette: '🎨 Görsel Palet',
        paletteBadge: 'PRIME VIDEO X-RAY GÖRSEL PALETLER',
        paletteTitle: 'Sinematik Renk Paleti Motoru',
        paletteSub: 'Yanık çöl kumundan siberpunk gecelerine ve arktik çelik tonlarına yapımları renklerine göre filtrele.'
      }
    };

    const currentMeta = platformUIMeta[theme] || platformUIMeta.netflix;

    // 3. Navbar Logo ve Menü Linklerini Güncelle
    const logoIconWrap = document.getElementById('logo-icon-wrap');
    const logoText = document.getElementById('logo-text');
    const logoBadge = document.getElementById('logo-theme-badge');
    const tadumBtnText = document.getElementById('tadum-btn-text');
    const tadumBtn = document.getElementById('play-tadum-btn');
    const searchInput = document.getElementById('search-input');

    const navLinkHome = document.getElementById('nav-link-home');
    const navLinkHubs = document.getElementById('nav-link-hubs');
    const navLinkMood = document.getElementById('nav-link-mood');
    const navLinkPalette = document.getElementById('nav-link-palette');
    const navLinkTop10 = document.getElementById('nav-link-top10');
    const navLinkMovies = document.getElementById('nav-link-movies');

    if (logoIconWrap) logoIconWrap.innerHTML = currentMeta.logoIcon;
    if (logoText) logoText.textContent = currentMeta.logoTitle;
    if (logoBadge) logoBadge.textContent = currentMeta.badge;
    if (tadumBtnText) tadumBtnText.textContent = currentMeta.soundName;
    if (tadumBtn) tadumBtn.setAttribute('title', `${currentMeta.badge} Ses Efektini Dinle`);
    if (searchInput) searchInput.setAttribute('placeholder', currentMeta.searchPlaceholder);

    if (navLinkHome) navLinkHome.textContent = currentMeta.home;
    if (navLinkHubs) navLinkHubs.textContent = currentMeta.hubs;
    if (navLinkMood) navLinkMood.textContent = currentMeta.mood;
    if (navLinkPalette) navLinkPalette.textContent = currentMeta.palette;
    if (navLinkTop10) navLinkTop10.textContent = currentMeta.top10;
    if (navLinkMovies) navLinkMovies.textContent = currentMeta.movies;

    // 4. Bölüm Başlıkları ve Altbilgiyi Güncelle
    const top10TitleText = document.getElementById('top10-title-text');
    const top10TitleIcon = document.getElementById('top10-title-icon');
    const top10SubtitleText = document.getElementById('top10-subtitle-text');
    const catalogTitleText = document.getElementById('catalog-title-text');
    const catalogTitleIcon = document.getElementById('catalog-title-icon');
    const footerBrandTitle = document.getElementById('footer-brand-title');
    const footerBrandDesc = document.getElementById('footer-brand-desc');

    const moodBadgeText = document.getElementById('mood-badge-text');
    const moodMainTitleText = document.getElementById('mood-main-title-text');
    const moodSubtitleText = document.getElementById('mood-subtitle-text');

    const paletteBadgeText = document.getElementById('palette-badge-text');
    const paletteMainTitleText = document.getElementById('palette-main-title-text');
    const paletteSubtitleText = document.getElementById('palette-subtitle-text');

    if (moodBadgeText) moodBadgeText.textContent = currentMeta.moodBadge;
    if (moodMainTitleText) moodMainTitleText.textContent = currentMeta.moodTitle;
    if (moodSubtitleText) moodSubtitleText.textContent = currentMeta.moodSub;

    if (paletteBadgeText) paletteBadgeText.textContent = currentMeta.paletteBadge;
    if (paletteMainTitleText) paletteMainTitleText.textContent = currentMeta.paletteTitle;
    if (paletteSubtitleText) paletteSubtitleText.textContent = currentMeta.paletteSub;

    // Keşif sekme başlıkları
    const dTabHubsTitle = document.getElementById('d-tab-hubs-title');
    const dTabMoodTitle = document.getElementById('d-tab-mood-title');
    const dTabPaletteTitle = document.getElementById('d-tab-palette-title');
    if (dTabHubsTitle) dTabHubsTitle.textContent = currentMeta.hubs;
    if (dTabMoodTitle) dTabMoodTitle.textContent = currentMeta.mood;
    if (dTabPaletteTitle) dTabPaletteTitle.textContent = currentMeta.palette;

    if (top10TitleText) top10TitleText.textContent = currentMeta.top10Title;
    if (top10TitleIcon) top10TitleIcon.textContent = currentMeta.top10Icon;
    if (top10SubtitleText) top10SubtitleText.textContent = currentMeta.top10Sub;
    if (catalogTitleText) catalogTitleText.textContent = currentMeta.catalogTitle;
    if (catalogTitleIcon) catalogTitleIcon.textContent = currentMeta.catalogIcon;
    if (footerBrandTitle) footerBrandTitle.textContent = currentMeta.footerTitle;
    if (footerBrandDesc) footerBrandDesc.textContent = currentMeta.footerDesc;
    document.title = currentMeta.titleText;

    // 5. Arayüz Bileşenlerini Dinamik Olarak Yeniden Render Et
    this.renderPlatformHubs();
    this.renderMoodSection();
    this.renderPaletteSection();
    this.renderHeroBanner();
    this.renderTop10Row();
    this.renderMoviesGrid();

    // 6. Three.js 3D Sahne Işık ve Partiküllerini Güncelle
    if (window.cinema3D && typeof window.cinema3D.setTheme === 'function') {
      window.cinema3D.setTheme(theme);
    }

    // 7. Platforma Özel Sinematik Ses Efektini Çal
    if (playSound && window.cinemaAudio) {
      window.cinemaAudio.playThemeSound(theme);
      this.showToast(currentMeta.toast, 'success');
    }
  }
}

// Uygulamayı başlat
document.addEventListener('DOMContentLoaded', () => {
  window.app = new Cine3DApp();
});
