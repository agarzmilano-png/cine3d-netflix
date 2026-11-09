/**
 * CINE3D NETFLIX - Genişletilmiş ve Doğrulanmış Film & Dizi Veritabanı (109 Yapım)
 * Gerçek IMDb puanları, kategoriler, detaylı konular, doğrulanmış Türkiye yayıncıları ve Ruh Hali (Mood) eşleşmeleri
 */


const MOVIES_DATA = [
{
    "id": "inception",
    "title": "Başlangıç",
    "originalTitle": "Inception",
    "year": 2010,
    "imdbRating": 8.8,
    "imdbVotes": "2.5M",
    "duration": "2s 28dk",
    "ageRating": "16+",
    "genres": [
      "Bilim Kurgu",
      "Aksiyon",
      "Macera"
    ],
    "director": "Christopher Nolan",
    "cast": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy"
    ],
    "tagline": "Senin zihnin, suç mahalli.",
    "awards": "4 Oscar Ödülü",
    "summary": "Dom Cobb (Leonardo DiCaprio), insanların zihinlerinin en savunmasız olduğu rüya görme anında bilinçaltının derinliklerindeki değerli sırları çalan yetenekli bir hırsızdır. Cobb'un bu eşsiz yeteneği onu kurumsal casusluğun tehlikeli dünyasında aranan bir oyuncu yaparken, aynı zamanda uluslararası bir kaçak haline getirmiştir. Ona kaybettiği hayatını geri verebilecek son bir görev teklif edilir: Bir fikri çalmak yerine, zihne yeni bir fikir yerleştirmek (başlangıç). Kusursuz bir ekip kuran Cobb, bu tehlikeli zihin labirentinde kendi geçmişinin karanlık gölgeleriyle de yüzleşmek zorundadır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "YoHD9XEInc0",
    "isFeatured": true,
    "platforms": [
      "netflix",
      "tvplus",
      "hbo"
    ],
    "themeColor": "#38bdf8",
    "featuredBadge": "Günün 3D Seçimi",
    "moods": [
      "mind-bending",
      "thrill"
    ]
  },
  {
    "id": "interstellar",
    "title": "Yıldızlararası",
    "originalTitle": "Interstellar",
    "year": 2014,
    "imdbRating": 8.7,
    "imdbVotes": "2.1M",
    "duration": "2s 49dk",
    "ageRating": "13+",
    "genres": [
      "Bilim Kurgu",
      "Dram",
      "Macera"
    ],
    "director": "Christopher Nolan",
    "cast": [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine"
    ],
    "tagline": "İnsanlığın sonu Dünya olmayacak.",
    "awards": "1 Oscar Ödülü (En İyi Görsel Efekt)",
    "summary": "Yakın gelecekte yeryüzü kuraklık ve toz fırtınalarıyla yok oluşun eşiğindedir. İnsanlığın hayatta kalabilmesi için tek çare Dünya dışında yaşanabilir yeni bir gezegen bulmaktır. Eski bir NASA pilotu olan Cooper, gizli bir uzay görevine liderlik etmeyi kabul eder. Satürn yakınlarında aniden beliren gizemli bir solucan deliğinden geçerek, zamanın ve yerçekiminin büküldüğü bambaşka galaksilere doğru insanlık tarihinin en kritik yolculuğuna çıkarlar. Aşk, zaman ve fedakarlık temalarını işleyen bir başyapıt.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "zSWdZVtXT7E",
    "isFeatured": true,
    "platforms": [
      "hbo"
    ],
    "themeColor": "#f59e0b",
    "featuredBadge": "IMDb Top Efsane",
    "moods": [
      "mind-bending",
      "tearjerker",
      "escapism"
    ]
  },
  {
    "id": "dark-knight",
    "title": "Kara Şövalye",
    "originalTitle": "The Dark Knight",
    "year": 2008,
    "imdbRating": 9,
    "imdbVotes": "2.9M",
    "duration": "2s 32dk",
    "ageRating": "16+",
    "genres": [
      "Aksiyon",
      "Suç",
      "Dram"
    ],
    "director": "Christopher Nolan",
    "cast": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine"
    ],
    "tagline": "Neden bu kadar ciddisin?",
    "awards": "2 Oscar Ödülü (Heath Ledger)",
    "summary": "Batman, Teğmen Jim Gordon ve yeni savcı Harvey Dent'in yardımıyla Gotham sokaklarını suç örgütlerinden temizlemeye başlamıştır. Ancak kaosun ta kendisi olan Joker ortaya çıktığında, Gotham daha önce hiç görmediği psikolojik ve anarşik bir terör dalgasıyla sarsılır. Batman, Joker'in ahlaki ve etik sınırları zorlayan oyunları karşısında bir kahraman ile bir günah keçisi arasındaki ince çizgiyi sorgulamak zorunda kalır. Sinema tarihinin en etkileyici kötü adam performanslarından biri.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "EXeTwQWrcwY",
    "isFeatured": true,
    "platforms": [
      "prime",
      "tvplus",
      "hbo"
    ],
    "themeColor": "#ef4444",
    "featuredBadge": "IMDb #3 Sırada",
    "moods": [
      "adrenaline",
      "thrill",
      "prestige"
    ]
  },
  {
    "id": "pulp-fiction",
    "title": "Ucuz Roman",
    "originalTitle": "Pulp Fiction",
    "year": 1994,
    "imdbRating": 8.9,
    "imdbVotes": "2.2M",
    "duration": "2s 34dk",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Dram"
    ],
    "director": "Quentin Tarantino",
    "cast": [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson",
      "Bruce Willis"
    ],
    "tagline": "Birbirine bağlanan kaderler, çanta ve dans.",
    "awards": "Altın Palmiye & 1 Oscar Ödülü",
    "summary": "Los Angeles yeraltı dünyasında yolları kesişen iki felsefi kiralık katil Vincent Vega ve Jules Winnfield, mafya babasının karısını eğlendirmekle görevlendirilen Vincent, gururu yüzünden şikeli maçı satmayan boksör Butch ve bir lokantayı soymaya kalkan amatör bir çift. Doğrusal olmayan kurgusu, unutulmaz diyalogları ve pop kültür referanslarıyla modern sinemayı baştan tanımlayan Tarantino klasiği.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "trailerYoutubeId": "s7EdQ4FqbhY",
    "isFeatured": false,
    "platforms": [],
    "globalPlatforms": [
      "prime"
    ],
    "themeColor": "#eab308",
    "moods": [
      "prestige",
      "thrill"
    ]
  },
  {
    "id": "shawshank",
    "title": "Esaretin Bedeli",
    "originalTitle": "The Shawshank Redemption",
    "year": 1994,
    "imdbRating": 9.3,
    "imdbVotes": "2.95M",
    "duration": "2s 22dk",
    "ageRating": "16+",
    "genres": [
      "Dram"
    ],
    "director": "Frank Darabont",
    "cast": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler"
    ],
    "tagline": "Korku seni tutsak eder, umut ise özgür bırakır.",
    "awards": "IMDb Tüm Zamanların En Yüksek Puanlı Filmi (#1)",
    "summary": "Başarılı bir bankacı olan Andy Dufresne, masum olduğunu iddia etmesine rağmen karısını ve sevgilisini öldürmek suçundan ömür boyu hapse mahkûm edilir. Gönderildiği Shawshank Hapishanesi'nde gardiyanların acımasızlığı ve hapishane koşullarıyla karşılaşır. Ancak zekâsı, sakinliği ve kaçak mallar temin eden bilge mahkum Red ile kurduğu derin dostluk sayesinde umudunu hiçbir zaman kaybetmez. Yıllara yayılan sabrın ve insan ruhunun zaferinin hikayesi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "PLl99DlL6b4",
    "isFeatured": false,
    "platforms": [],
    "themeColor": "#10b981",
    "moods": [
      "prestige",
      "heartwarming",
      "tearjerker"
    ]
  },
  {
    "id": "godfather",
    "platforms": ["tvplus"],
    "title": "Baba",
    "originalTitle": "The Godfather",
    "year": 1972,
    "imdbRating": 9.2,
    "imdbVotes": "2.0M",
    "duration": "2s 55dk",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Dram"
    ],
    "director": "Francis Ford Coppola",
    "cast": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall"
    ],
    "tagline": "Reddedemeyeceği bir teklif yapacağım.",
    "awards": "3 Oscar Ödülü (En İyi Film)",
    "summary": "1940'lar ve 50'ler New York'unda İtalyan-Amerikan mafya ailesi Corleone'lerin destansı hikayesi. 'Don' Vito Corleone, yeraltı dünyasının en güçlü ve saygın figürlerinden biridir. Aileye suikast girişimi düzenlenince, savaştan yeni dönmüş ve suç dünyasından uzak durmak isteyen küçük oğlu Michael Corleone, ailesini korumak için kaçınılmaz olarak mafya liderliğine doğru adım adım dönüşüm yaşar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "trailerYoutubeId": "sY1S34973zA",
    "isFeatured": false,
    "themeColor": "#b91c1c",
    "moods": [
      "prestige",
      "thrill"
    ]
  },
  {
    "id": "fight-club",
    "title": "Dövüş Kulübü",
    "originalTitle": "Fight Club",
    "year": 1999,
    "imdbRating": 8.8,
    "imdbVotes": "2.3M",
    "duration": "2s 19dk",
    "ageRating": "18+",
    "genres": [
      "Dram",
      "Gerilim"
    ],
    "director": "David Fincher",
    "cast": [
      "Brad Pitt",
      "Edward Norton",
      "Helena Bonham Carter",
      "Meat Loaf"
    ],
    "tagline": "Sahip oldukların sonunda sana sahip olur.",
    "awards": "Kült Başyapıt",
    "summary": "Kronik uykusuzluk çeken ve tüketim çılgınlığıyla dolu monoton hayatından boğulan bir otomobil firması çalışanı, karizmatik ve anarşist sabun satıcısı Tyler Durden ile tanışır. İkili, erkeklerin çıplak elleriyle dövüşerek bastırılmış öfkelerini ve hayata bağlılıklarını yeniden keşfettikleri gizli bir yeraltı kulübü kurarlar. Kulüp hızla ülke çapında kaotik bir anti-kapitalist harekete dönüşürken gerçekliğin perdesi sarsıcı bir biçimde aralanır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "qtRKdVHc-cE",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "tvplus",
      "hbo"
    ],
    "themeColor": "#ec4899",
    "moods": [
      "mind-bending",
      "thrill"
    ]
  },
  {
    "id": "the-matrix",
    "platforms": ["prime","tvplus","hbo"],
    "title": "Matrix",
    "originalTitle": "The Matrix",
    "year": 1999,
    "imdbRating": 8.7,
    "imdbVotes": "2.0M",
    "duration": "2s 16dk",
    "ageRating": "16+",
    "genres": [
      "Bilim Kurgu",
      "Aksiyon"
    ],
    "director": "Lana & Lilly Wachowski",
    "cast": [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving"
    ],
    "tagline": "Kırmızı hapı mı seçeceksin, mavi hapı mı?",
    "awards": "4 Oscar Ödülü",
    "summary": "Thomas Anderson gündüzleri sıradan bir yazılımcı, geceleri ise 'Neo' takma adıyla usta bir hacker'dır. Gizemli Morpheus ile tanıştığında, içinde yaşadığı dünyanın aslında insan ırkını köleleştiren yapay zekalar tarafından simüle edilmiş devasa bir dijital illüzyon ('Matrix') olduğunu öğrenir. Gerçeği seçerek kırmızı hapı yutan Neo, makinelerin zulmüne karşı insanlığın kurtarıcısı 'Seçilmiş Kişi' olma kaderine adım atar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "vKQi3bBA1y8",
    "isFeatured": false,
    "themeColor": "#22c55e",
    "moods": [
      "mind-bending",
      "adrenaline",
      "escapism"
    ]
  },
  {
    "id": "parasite",
    "platforms": ["tvplus","tod","hbo"],
    "title": "Parazit",
    "originalTitle": "Parasite (Gisaengchung)",
    "year": 2019,
    "imdbRating": 8.5,
    "imdbVotes": "950K",
    "duration": "2s 12dk",
    "ageRating": "16+",
    "genres": [
      "Gerilim",
      "Dram",
      "Komedi"
    ],
    "director": "Bong Joon Ho",
    "cast": [
      "Song Kang-ho",
      "Lee Sun-kyun",
      "Cho Yeo-jeong",
      "Choi Woo-shik"
    ],
    "tagline": "Bir aile, diğer ailenin hayatına sızarsa...",
    "awards": "4 Oscar Ödülü (En İyi Film Tarihi Başarı)",
    "summary": "Seul'de yarı bodrum katında sefalet içinde yaşayan dört kişilik Kim ailesi, işsizlik ve yoksullukla boğuşmaktadır. Oğulları Ki-woo, varlıklı Park ailesinin kızına özel İngilizce dersi vermeye başladığında kurnaz bir plan yaparlar. Kim ailesinin tüm üyeleri kimliklerini gizleyerek lüks malikanede şoför, hizmetçi ve sanat terapisti olarak sırayla işe yerleşir. Ancak zenginliğin altındaki karanlık bir sır açığa çıktığında olaylar geri dönülemez bir felakete dönüşür.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "5xH0hhMbzEQ",
    "isFeatured": false,
    "themeColor": "#06b6d4",
    "moods": [
      "thrill",
      "prestige"
    ]
  },
  {
    "id": "spirited-away",
    "title": "Ruhların Kaçışı",
    "originalTitle": "Sen to Chihiro no Kamikakushi",
    "year": 2001,
    "imdbRating": 8.6,
    "imdbVotes": "850K",
    "duration": "2s 05dk",
    "ageRating": "Genel İzleyici",
    "genres": [
      "Animasyon",
      "Macera",
      "Fantastik"
    ],
    "director": "Hayao Miyazaki",
    "cast": [
      "Rumi Hiiragi",
      "Miyu Irino",
      "Mari Natsuki"
    ],
    "tagline": "Adını unutursan, evinin yolunu asla bulamazsın.",
    "awards": "En İyi Animasyon Oscar Ödülü",
    "summary": "10 yaşındaki huysuz Chihiro, ailesiyle yeni bir kasabaya taşınırken gizemli bir tünelden geçerek terkedilmiş görünen bir eğlence parkına girer. Anne ve babası pervasızca yemek yedikten sonra domuza dönüşünce, Chihiro buranın tanrılar, cadılar ve doğaüstü varlıkların dinlendiği büyülü bir hamam olduğunu anlar. Güçlü cadı Yubaba'nın yanında işe giren Chihiro, adını korumak ve ailesini kurtarıp insan dünyasına dönmek için cesaret dolu bir serüvene atılır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "ByXuk9QqQkk",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "themeColor": "#a855f7",
    "moods": [
      "escapism",
      "heartwarming"
    ]
  },
  {
    "id": "oppenheimer",
    "title": "Oppenheimer",
    "originalTitle": "Oppenheimer",
    "year": 2023,
    "imdbRating": 8.9,
    "imdbVotes": "850K",
    "duration": "3s 00dk",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Tarih",
      "Biyografi"
    ],
    "director": "Christopher Nolan",
    "cast": [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr."
    ],
    "tagline": "Şimdi ben ölüm oldum, dünyaların yok edicisi.",
    "awards": "7 Oscar Ödülü (En İyi Film, Yönetmen, Erkek Oyuncu)",
    "summary": "İkinci Dünya Savaşı sırasında Nazi Almanyası'ndan önce nükleer silah geliştirmek isteyen ABD hükümeti, 'Manhattan Projesi'nin başına teorik fizikçi J. Robert Oppenheimer'ı getirir. Los Alamos çölündeki gizli laboratuvarda tarihin ilk atom bombası üretilir. Trinity testi başarıyla sonuçlansa da Hiroşima ve Nagazaki'nin bombalanmasının ardından Oppenheimer, yarattığı dehşet verici gücün vicdani yüküyle ezilir ve Soğuk Savaş dönemi siyasi cadı avının hedefi haline gelir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "uYPbbksJxIg",
    "isFeatured": false,
    "platforms": [],
    "themeColor": "#f97316",
    "moods": [
      "prestige",
      "mind-bending"
    ]
  },
  {
    "id": "dune-2",
    "platforms": ["tvplus","hbo"],
    "title": "Dune: Çöl Gezegeni Bölüm İki",
    "originalTitle": "Dune: Part Two",
    "year": 2024,
    "imdbRating": 8.6,
    "imdbVotes": "550K",
    "duration": "2s 46dk",
    "ageRating": "13+",
    "genres": [
      "Bilim Kurgu",
      "Macera",
      "Aksiyon"
    ],
    "director": "Denis Villeneuve",
    "cast": [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Javier Bardem"
    ],
    "tagline": "Kaderin kumları üzerinde bir imparatorluk yükselecek.",
    "awards": "Görsel Başyapıt & Gişe Rekortmeni",
    "summary": "Ailesini yok eden komploya karşı intikam arayışında olan Paul Atreides, Arrakis çölünün yerlileri olan Fremenler ve Chani ile güçlerini birleştirir. Kum solucanlarına hükmetmeyi öğrenen ve peygamber 'Muad'Dib' olarak kutsanan Paul, hayatının aşkı ile bilinen evrenin kaderi arasında yürek parçalayıcı bir seçimle karşı karşıya kalır. Galaksiyi ateşe verecek kutsal bir cihadı engellemeye çalışırken kaderine teslim olmak zorundadır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "Way9Dexny3w",
    "isFeatured": true,
    "themeColor": "#ca8a04",
    "featuredBadge": "2024 En Çok Konuşulan",
    "moods": [
      "escapism",
      "adrenaline"
    ]
  },
  {
    "id": "gladiator",
    "title": "Gladyatör",
    "originalTitle": "Gladiator",
    "year": 2000,
    "imdbRating": 8.5,
    "imdbVotes": "1.6M",
    "duration": "2s 35dk",
    "ageRating": "16+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Dram"
    ],
    "director": "Ridley Scott",
    "cast": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed"
    ],
    "tagline": "Hayatta yaptıklarımız sonsuzlukta yankılanır.",
    "awards": "5 Oscar Ödülü (En İyi Film)",
    "summary": "Roma İmparatoru Marcus Aurelius, tahtını kıskanç oğlu Commodus yerine dürüst ve sevilen komutan Maximus'a devretmek ister. Babasını öldürerek tahtı ele geçiren Commodus, Maximus'un ailesini katlettirir ve kendisini köle tüccarlarına satar. Kölelikten gladyatörlüğe yükselen Maximus, arenadaki dövüşlerde kazandığı efsanevi şöhretle Roma Kolezyumu'na döner. Tek amacı imparatordan ailesinin intikamını almaktır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "owK1qxDselE",
    "isFeatured": false,
    "platforms": [
      "prime",
      "tvplus"
    ],
    "themeColor": "#dc2626",
    "moods": [
      "adrenaline",
      "tearjerker",
      "prestige"
    ]
  },
  {
    "id": "prestige",
    "platforms": ["netflix","tvplus"],
    "title": "Prestij",
    "originalTitle": "The Prestige",
    "year": 2006,
    "imdbRating": 8.5,
    "imdbVotes": "1.4M",
    "duration": "2s 10dk",
    "ageRating": "16+",
    "genres": [
      "Gizem",
      "Bilim Kurgu",
      "Dram"
    ],
    "director": "Christopher Nolan",
    "cast": [
      "Hugh Jackman",
      "Christian Bale",
      "Michael Caine",
      "Scarlett Johansson"
    ],
    "tagline": "Her sihirbazlık numarası üç bölümden oluşur.",
    "awards": "2 Oscar Adaylığı",
    "summary": "19. yüzyıl sonu Victoria dönemi Londra'sında iki yetenekli sihirbaz, Robert Angier ve Alfred Borden, ortak başladıkları kariyerlerinde yaşanan ölümcül bir sahne kazası sonucu ezeli düşmana dönüşürler. İkisi de kusursuz bir 'Işınlanan İnsan' ilüzyonu sahneleyebilmek için birbirlerinin sırlarını çalmaya, hayatlarını feda etmeye ve bilimin sınırlarını (Nikola Tesla dahil) zorlamaya başlarlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BM2Y0YmM5MWYtZTYzNi00ZjU5LTlmOGYtZDQ4ODQyMjAzNjQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BM2Y0YmM5MWYtZTYzNi00ZjU5LTlmOGYtZDQ4ODQyMjAzNjQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailerYoutubeId": "o4gHCmTQDVI",
    "isFeatured": false,
    "themeColor": "#6366f1",
    "moods": [
      "mind-bending",
      "thrill"
    ]
  },
  {
    "id": "whiplash",
    "title": "Whiplash",
    "originalTitle": "Whiplash",
    "year": 2014,
    "imdbRating": 8.5,
    "imdbVotes": "980K",
    "duration": "1s 47dk",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Müzik"
    ],
    "director": "Damien Chazelle",
    "cast": [
      "Miles Teller",
      "J.K. Simmons",
      "Paul Reiser",
      "Melissa Benoist"
    ],
    "tagline": "İngilizcedeki en tehlikeli iki kelime: 'Aferin, fena değil.'",
    "awards": "3 Oscar Ödülü (J.K. Simmons)",
    "summary": "Ülkenin en prestijli müzik konservatuarında okuyan genç ve hırslı caz davulcusu Andrew Neiman, neslinin en iyisi olmayı arzulamaktadır. Okulun efsanevi ve aynı zamanda acımasız orkestra şefi Terence Fletcher'ın stüdyo grubuna seçilir. Fletcher, öğrencilerini mükemmelliğe ulaştırmak adına psikolojik ve fiziksel şiddet sınırlarını aşan radikal yöntemler kullanır. Deha ile delilik, tutku ile takıntı arasındaki amansız bir düello.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "7d_jQycdQGo",
    "isFeatured": false,
    "themeColor": "#8b5cf6",
    "moods": [
      "prestige",
      "thrill"
    ]
  },
  {
    "id": "spider-verse",
    "title": "Örümcek-Adam: Örümcek Evreninde",
    "originalTitle": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "imdbRating": 8.4,
    "imdbVotes": "670K",
    "duration": "1s 57dk",
    "ageRating": "Genel İzleyici",
    "genres": [
      "Animasyon",
      "Aksiyon",
      "Macera"
    ],
    "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    "cast": [
      "Shameik Moore",
      "Jake Johnson",
      "Hailee Steinfeld",
      "Mahershala Ali"
    ],
    "tagline": "Herkes o maskeyi takabilir. Sen nasıl takacaksın?",
    "awards": "En İyi Animasyon Oscar Ödülü",
    "summary": "Brooklyn'li genç Miles Morales, radyoaktif bir örümcek tarafından ısırıldıktan sonra Örümcek Adam güçleri kazanır. Kingpin'in boyutlar arası açtığı kapı sonucu farklı paralel evrenlerden gelen beş farklı Örümcek kahraman Miles'ın dünyasına düşer. Miles, orijinal Peter Parker ve Gwen Stacy'nin rehberliğinde kendi özgüvenini kazanarak dünyayı ve tüm boyutları yıkımdan kurtarmak için kahramanlığını kanıtlamak zorundadır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailerYoutubeId": "g4Hbz2jLxvQ",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "disney",
      "tvplus",
      "tod"
    ],
    "themeColor": "#ec4899",
    "moods": [
      "adrenaline",
      "escapism"
    ]
  },
  {
    "id": "seven",
    "platforms": ["netflix"],
    "title": "Yedi",
    "originalTitle": "Se7en",
    "year": 1995,
    "imdbRating": 8.6,
    "imdbVotes": "1.8M",
    "duration": "2s 07dk",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Gizem",
      "Gerilim"
    ],
    "director": "David Fincher",
    "cast": [
      "Brad Pitt",
      "Morgan Freeman",
      "Gwyneth Paltrow",
      "Kevin Spacey"
    ],
    "tagline": "Yedi ölümcül günah. Yedi korkunç cinayet.",
    "awards": "Kült Polisiye Gerilim",
    "summary": "Emekliliğine bir hafta kalmış kıdemli ve sakin dedektif William Somerset ile onun yerine atanan tezcanlı genç dedektif David Mills, Hristiyanlığın yedi ölümcül günahını (oburluk, açgözlülük, tembellik, şehvet, kibir, kıskançlık, öfke) temel alan zeki ve sapkın bir seri katilin peşine düşerler. Katil her kurbanını işlediği günaha uygun biçimde cezalandırmaktadır. Finalindeki kutu sahnesiyle sinema tarihinin en şok edici finallerinden birine sahiptir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "trailerYoutubeId": "znmZoVkCjpI",
    "isFeatured": false,
    "themeColor": "#71717a",
    "moods": [
      "thrill"
    ]
  },
  {
    "id": "alien",
    "platforms": ["disney"],
    "title": "Yaratık",
    "originalTitle": "Alien",
    "year": 1979,
    "imdbRating": 8.5,
    "imdbVotes": "950K",
    "duration": "1s 57dk",
    "ageRating": "18+",
    "genres": [
      "Korku",
      "Bilim Kurgu"
    ],
    "director": "Ridley Scott",
    "cast": [
      "Sigourney Weaver",
      "Tom Skerritt",
      "John Hurt",
      "Ian Holm"
    ],
    "tagline": "Uzayda kimse çığlığınızı duyamaz.",
    "awards": "1 Oscar Ödülü (Görsel Efekt)",
    "summary": "Ticari kargo gemisi Nostromo, Dünya'ya dönüş yolundayken ıssız bir aydan gelen gizemli bir imdat sinyali alır. Mürettebat araştırmaya gittiğinde terk edilmiş yabancı bir uzay gemisi ve binlerce yumurtayla dolu bir bölme keşfeder. Bir parazit yaratık mürettebattan birine yapışır ve gemiye taşınır. Kısa sürede ölümcül bir kabusa dönüşen kusursuz avcı Xenomorph, teğmen Ellen Ripley önderliğindeki mürettebatı tek tek avlamaya başlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "trailerYoutubeId": "LjLamj-b0I8",
    "isFeatured": false,
    "themeColor": "#10b981",
    "moods": [
      "thrill"
    ]
  },
  {
    "id": "shining",
    "title": "Cinnet",
    "originalTitle": "The Shining",
    "year": 1980,
    "imdbRating": 8.4,
    "imdbVotes": "1.1M",
    "duration": "2s 26dk",
    "ageRating": "18+",
    "genres": [
      "Korku",
      "Dram",
      "Gizem"
    ],
    "director": "Stanley Kubrick",
    "cast": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd",
      "Scatman Crothers"
    ],
    "tagline": "İşte Johnny!",
    "awards": "Korku Sineması Şaheseri",
    "summary": "Eski öğretmen ve yazar Jack Torrance, kış aylarında kapalı olan Overlook Oteli'nin kışlık bakımını üstlenir. Karısı Wendy ve psişik yeteneklere ('Işıltı') sahip küçük oğlu Danny ile birlikte dağların arasındaki bu izole otele yerleşirler. Şiddetli kar fırtınasıyla dış dünyadan tamamen kopan otel, barındırdığı karanlık doğaüstü güçlerle Jack'in zihnini ele geçirmeye başlar. Jack giderek cinnet eşiğine gelirken ailesi için hayatta kalma mücadelesi başlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    "trailerYoutubeId": "S014oGZiSdI",
    "isFeatured": false,
    "themeColor": "#b91c1c",
    "moods": [
      "thrill",
      "mind-bending"
    ]
  },
  {
    "id": "blade-runner-2049",
    "platforms": ["prime","mubi","tvplus"],
    "title": "Bıçak Sırtı 2049",
    "originalTitle": "Blade Runner 2049",
    "year": 2017,
    "imdbRating": 8,
    "imdbVotes": "640K",
    "duration": "2s 44dk",
    "ageRating": "16+",
    "genres": [
      "Bilim Kurgu",
      "Gizem",
      "Dram"
    ],
    "director": "Denis Villeneuve",
    "cast": [
      "Ryan Gosling",
      "Harrison Ford",
      "Ana de Armas",
      "Sylvia Hoeks"
    ],
    "tagline": "Gördüğün her şey bir yanılsama olabilir.",
    "awards": "2 Oscar Ödülü (En İyi Görüntü Yönetimi)",
    "summary": "İlk filmin olaylarından otuz yıl sonra, Los Angeles Polis Departmanı'nda 'Blade Runner' olarak görev yapan replikant K, toplumun geri kalanını kaosa sürükleme potansiyeline sahip uzun süredir gömülü bir sırrı gün yüzüne çıkarır. Bu keşif onu otuz yıldır kayıp olan eski bir LAPD bıçak sırtı avcısı Rick Deckard'ı bulmaya iter. Çarpıcı siberpunk görselleri ve varoluşsal sorgulamalarıyla modern bir bilim kurgu şaheseri.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "gCcx85zbxz4",
    "isFeatured": false,
    "themeColor": "#0ea5e9",
    "hubTags": [
      "wb",
      "scifi"
    ],
    "moods": [
      "mind-bending",
      "escapism",
      "prestige"
    ]
  },
  {
    "id": "star-wars-empire",
    "title": "Star Wars: Bölüm V - İmparator",
    "originalTitle": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "imdbRating": 8.7,
    "imdbVotes": "1.4M",
    "duration": "2s 4dk",
    "ageRating": "10+",
    "genres": [
      "Bilim Kurgu",
      "Macera",
      "Aksiyon"
    ],
    "director": "Irvin Kershner",
    "cast": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Billy Dee Williams"
    ],
    "tagline": "Güç seninle olsun. Ben senin babanım!",
    "awards": "2 Oscar Ödülü",
    "summary": "Asiler, ölümcül İmparatorluk filosu tarafından Hoth buzul gezegeninden püskürtüldükten sonra Luke Skywalker, bilge Jedi Ustası Yoda'dan Güç'ün yollarını öğrenmek üzere Dagobah bataklıklarına gider. Han Solo ve Prenses Leia ise Darth Vader'ın ölümcül tuzağına doğru Bespin Bulut Şehri'ne kaçar. Sinema tarihinin en ikonik ters köşe sahnesi ve uzay operasının zirvesi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "trailerYoutubeId": "JNwNXF9Y6kY",
    "isFeatured": true,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "starwars",
      "disney",
      "lucasfilm"
    ],
    "themeColor": "#00d2ff",
    "featuredBadge": "Disney+ Star Wars Zirvesi",
    "moods": [
      "escapism",
      "adrenaline"
    ]
  },
  {
    "id": "the-mandalorian",
    "title": "The Mandalorian",
    "originalTitle": "The Mandalorian",
    "year": 2019,
    "imdbRating": 8.7,
    "imdbVotes": "610K",
    "duration": "3 Sezon",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Bilim Kurgu"
    ],
    "director": "Jon Favreau",
    "cast": [
      "Pedro Pascal",
      "Carl Weathers",
      "Giancarlo Esposito"
    ],
    "tagline": "İşte yol bu. (This is the way.)",
    "awards": "14 Emmy Ödülü",
    "summary": "İmparatorluğun çöküşünün ardından ve İlk Düzen'in ortaya çıkışından önce galaksinin ücra köşelerinde geçen hikayede yalnız bir silahşor olan Din Djarin (Mandalorian), aldığı gizemli bir ödül avı görevinde Güç ile derin bağları olan sevimli bir çocuğu (Grogu) korumayı seçer ve tüm galaktik suç şebekelerini karşısına alır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "aOC8E8z_ifA",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "starwars",
      "disney"
    ],
    "themeColor": "#00d2ff",
    "featuredBadge": "Disney+ Orijinal Dizisi",
    "moods": [
      "escapism",
      "adrenaline"
    ]
  },
  {
    "id": "star-wars-new-hope",
    "title": "Star Wars: Bölüm IV - Yeni Bir Umut",
    "originalTitle": "Star Wars: Episode IV - A New Hope",
    "year": 1977,
    "imdbRating": 8.6,
    "imdbVotes": "1.5M",
    "duration": "2s 1dk",
    "ageRating": "10+",
    "genres": [
      "Bilim Kurgu",
      "Macera",
      "Aksiyon"
    ],
    "director": "George Lucas",
    "cast": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Alec Guinness"
    ],
    "tagline": "Çok çok uzun zaman önce, uzak bir galakside...",
    "awards": "6 Oscar Ödülü",
    "summary": "Genç çiftçi Luke Skywalker, İmparatorluğun en ölümcül silahı olan Ölüm Yıldızı'nın gizli planlarını taşıyan iki droid ile karşılaşır. Yaşlı Jedi Şövalyesi Obi-Wan Kenobi ve kaçakçı Han Solo ile güçlerini birleştirerek galaksiyi zalim Galaktik İmparatorluktan kurtarmak için Asiler İttifakı'na katılır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "trailerYoutubeId": "vZ734NWnAHA",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "starwars",
      "disney"
    ],
    "themeColor": "#00d2ff",
    "moods": [
      "escapism",
      "adrenaline"
    ]
  },
  {
    "id": "avengers-endgame",
    "title": "Avengers: Endgame",
    "originalTitle": "Avengers: Endgame",
    "year": 2019,
    "imdbRating": 8.4,
    "imdbVotes": "1.3M",
    "duration": "3s 1dk",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Bilim Kurgu"
    ],
    "director": "Anthony Russo, Joe Russo",
    "cast": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson"
    ],
    "tagline": "Ne pahasına olursa olsun.",
    "awards": "1 Oscar Adaylığı & Tüm Zamanların Gişe Rekoru",
    "summary": "Thanos'un evrendeki yaşamın yarısını yok etmesinin ardından dağılan Yenilmezler, geriye kalan dostlarını ve evreni kurtarmak için zaman yolculuğu yaparak Sonsuzluk Taşlarını geçmişten toplamaya karar verirler. Marvel Sinematik Evreni'nin 22 filmlik görkemli finali.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "TcMBFSGVi1c",
    "isFeatured": true,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "marvel",
      "disney"
    ],
    "themeColor": "#e11d48",
    "featuredBadge": "Marvel Efsanesi",
    "moods": [
      "adrenaline",
      "escapism"
    ]
  },
  {
    "id": "iron-man",
    "title": "Demir Adam",
    "originalTitle": "Iron Man",
    "year": 2008,
    "imdbRating": 7.9,
    "imdbVotes": "1.1M",
    "duration": "2s 6dk",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Bilim Kurgu"
    ],
    "director": "Jon Favreau",
    "cast": [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Jeff Bridges"
    ],
    "tagline": "Ben Demir Adam'ım.",
    "awards": "2 Oscar Adaylığı",
    "summary": "Dahi milyarder Tony Stark, teröristler tarafından kaçırıldıktan sonra hayatta kalmak için yüksek teknolojili bir zırh takımı üretir. Kurtulduktan sonra silah ticaretini bırakarak zırhını adaleti sağlamak ve dünyayı korumak için kullanır. MCU efsanesini başlatan film.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "8ugaeA-nMTc",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "marvel",
      "disney"
    ],
    "themeColor": "#dc2626",
    "moods": [
      "adrenaline",
      "escapism"
    ]
  },
  {
    "id": "loki",
    "title": "Loki",
    "originalTitle": "Loki",
    "year": 2021,
    "imdbRating": 8.2,
    "imdbVotes": "410K",
    "duration": "2 Sezon",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Fantastik"
    ],
    "director": "Michael Waldron",
    "cast": [
      "Tom Hiddleston",
      "Owen Wilson",
      "Sophia Di Martino"
    ],
    "tagline": "Görkemli bir amaç için.",
    "awards": "6 Emmy Adaylığı",
    "summary": "Tesseract ile kaçtıktan sonra Zaman Sapması Kurumu (TVA) tarafından yakalanan Fesatlık Tanrısı Loki, çoklu evrenin kırılmasını önlemek ve zaman çizgisinin arkasındaki karanlık gerçeği çözmek için beklenmedik bir bürokrasi macerasına atılır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzA2YjM2ZWQtYTZhMS00OTI3LTlhYzQtZjBiZWZkMDdlNjA5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzA2YjM2ZWQtYTZhMS00OTI3LTlhYzQtZjBiZWZkMDdlNjA5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "nW948Va-l10",
    "isFeatured": false,
    "isSeries": true,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "marvel",
      "disney"
    ],
    "themeColor": "#10b981",
    "moods": [
      "mind-bending",
      "escapism"
    ]
  },
  {
    "id": "wall-e",
    "title": "VOL-İ",
    "originalTitle": "WALL·E",
    "year": 2008,
    "imdbRating": 8.4,
    "imdbVotes": "1.2M",
    "duration": "1s 38dk",
    "ageRating": "Genel",
    "genres": [
      "Animasyon",
      "Macera",
      "Bilim Kurgu"
    ],
    "director": "Andrew Stanton",
    "cast": [
      "Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin"
    ],
    "tagline": "Dünyada kalan son küçük robot, insanlığın en büyük umudu haline gelir.",
    "awards": "1 Oscar Ödülü (En İyi Animasyon)",
    "summary": "İnsanlığın çöp yığınına dönüştürüp terk ettiği Dünya'da yüzyıllardır tek başına çalışan sevimli robot WALL-E, gezegene gönderilen gelişmiş robot EVE'e aşık olur. Canlı bir bitki filizi bulmasıyla birlikte tüm insanlığın kaderini değiştirecek galaksiler arası bir maceraya sürüklenir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzk0ZGMzMDYtMDJkYS00NTdhLWJlZWUtMTdhOTJkOTM3NDUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMzk0ZGMzMDYtMDJkYS00NTdhLWJlZWUtMTdhOTJkOTM3NDUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "alIq_82P9mM",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "pixar",
      "disney",
      "animasyon"
    ],
    "themeColor": "#f59e0b",
    "moods": [
      "heartwarming",
      "tearjerker"
    ]
  },
  {
    "id": "up",
    "title": "Yukarı Bak",
    "originalTitle": "Up",
    "year": 2009,
    "imdbRating": 8.3,
    "imdbVotes": "1.1M",
    "duration": "1s 36dk",
    "ageRating": "Genel",
    "genres": [
      "Animasyon",
      "Macera",
      "Komedi"
    ],
    "director": "Pete Docter",
    "cast": [
      "Edward Asner",
      "Jordan Nagai",
      "John Ratzenberger"
    ],
    "tagline": "Macera orada bir yerde bekliyor!",
    "awards": "2 Oscar Ödülü",
    "summary": "78 yaşındaki huysuz baloncu Carl Fredricksen, evine binlerce renkli balon bağlayarak ölen karısına verdiği sözü tutmak için Güney Amerika'daki Cennet Şelalesi'ne doğru göklere uçar. Ancak verandasında saklanan sevimli izci Russell ile birlikte hiç beklemediği bir dostluk ve serüven onu karşılar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailerYoutubeId": "ORFWdXl_zJ4",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "pixar",
      "disney",
      "animasyon"
    ],
    "themeColor": "#38bdf8",
    "moods": [
      "heartwarming",
      "tearjerker"
    ]
  },
  {
    "id": "coco",
    "title": "Koko",
    "originalTitle": "Coco",
    "year": 2017,
    "imdbRating": 8.4,
    "imdbVotes": "600K",
    "duration": "1s 45dk",
    "ageRating": "Genel",
    "genres": [
      "Animasyon",
      "Macera",
      "Dram"
    ],
    "director": "Lee Unkrich",
    "cast": [
      "Anthony Gonzalez",
      "Gael García Bernal",
      "Benjamin Bratt"
    ],
    "tagline": "Beni hatırla, sevgiyle an.",
    "awards": "2 Oscar Ödülü (En İyi Animasyon & Şarkı)",
    "summary": "Müziğin yasak olduğu bir ayakkabıcı ailesinde büyüyen genç Miguel, idolü Ernesto de la Cruz gibi bir müzisyen olma hayaliyle Ölüler Diyarı'na büyülü bir geçiş yapar. Orada atalarının gerçek aile sırrını keşfeder.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "trailerYoutubeId": "xLnTIAMergg",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "pixar",
      "disney",
      "animasyon"
    ],
    "themeColor": "#f97316",
    "moods": [
      "tearjerker",
      "heartwarming",
      "escapism"
    ]
  },
  {
    "id": "lion-king",
    "title": "Aslan Kral",
    "originalTitle": "The Lion King",
    "year": 1994,
    "imdbRating": 8.5,
    "imdbVotes": "1.1M",
    "duration": "1s 28dk",
    "ageRating": "Genel",
    "genres": [
      "Animasyon",
      "Macera",
      "Dram"
    ],
    "director": "Roger Allers, Rob Minkoff",
    "cast": [
      "Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones"
    ],
    "tagline": "Hayat Döngüsü sizi bekliyor.",
    "awards": "2 Oscar Ödülü (Hans Zimmer & Elton John)",
    "summary": "Afrika savanında aslan kral Mufasa'nın oğlu Simba, amcası Scar'ın hain tuzağı yüzünden krallığından kaçar. Timon ve Pumbaa ile büyüyen Simba, geçmişiyle yüzleşerek Gurur Kayalığı'ndaki tahtını geri almak için geri döner.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailerYoutubeId": "lFzVJEksoDY",
    "isFeatured": true,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "disney",
      "animasyon"
    ],
    "themeColor": "#eab308",
    "featuredBadge": "Disney Klasik Başyapıt",
    "moods": [
      "heartwarming",
      "tearjerker",
      "escapism"
    ]
  },
  {
    "id": "the-bear",
    "title": "The Bear",
    "originalTitle": "The Bear",
    "year": 2022,
    "imdbRating": 8.6,
    "imdbVotes": "290K",
    "duration": "3 Sezon",
    "ageRating": "18+",
    "genres": [
      "Dram",
      "Komedi"
    ],
    "director": "Christopher Storer",
    "cast": [
      "Jeremy Allen White",
      "Ebon Moss-Bachrach",
      "Ayo Edebiri"
    ],
    "tagline": "Evet Şef! (Yes, Chef!)",
    "awards": "10 Emmy Ödülü & Altın Küre",
    "summary": "Dünyanın en iyi restoranlarında çalışan genç gurme şef Carmy Berzatto, abisinin trajik intiharının ardından Chicago'daki salaş İtalyan sandviç dükkanını yönetmek için geri döner. Mutfaktaki yüksek tansiyon, aile travmaları ve lezzet arayışı.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjk2NWI5OTctODcwYy00NGRmLWFmN2YtOTZiNzFiYjVlODBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjk2NWI5OTctODcwYy00NGRmLWFmN2YtOTZiNzFiYjVlODBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "y-cqqAJIXhk",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "disney",
      "originals"
    ],
    "themeColor": "#0284c7",
    "featuredBadge": "Disney+ & FX Ödüllü Dizi",
    "moods": [
      "prestige",
      "thrill"
    ]
  },
  {
    "id": "avatar",
    "title": "Avatar",
    "originalTitle": "Avatar",
    "year": 2009,
    "imdbRating": 7.9,
    "imdbVotes": "1.4M",
    "duration": "2s 42dk",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Bilim Kurgu"
    ],
    "director": "James Cameron",
    "cast": [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver"
    ],
    "tagline": "Pandora'nın büyülü dünyasına adım atın.",
    "awards": "3 Oscar Ödülü",
    "summary": "Felçli eski deniz piyadesi Jake Sully, Pandora uydusunda yaşayan Na'vi ırkının arasına sızmak için Avatar programına katılır. Na'vi prensesi Neytiri'ye aşık olan Jake, insanların yıkıcı madencilik operasyonuna karşı doğayı ve Pandora'yı korumak için savaşır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "5PSNL1qE6VY",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "disney"
    ],
    "themeColor": "#00d2ff",
    "moods": [
      "escapism",
      "adrenaline"
    ]
  },
  {
    "id": "free-solo",
    "title": "Free Solo: İpsiz Tek Başına",
    "originalTitle": "Free Solo",
    "year": 2018,
    "imdbRating": 8.1,
    "imdbVotes": "160K",
    "duration": "1s 40dk",
    "ageRating": "13+",
    "genres": [
      "Belgesel",
      "Macera"
    ],
    "director": "Jimmy Chin, Elizabeth Chai Vasarhelyi",
    "cast": [
      "Alex Honnold",
      "Tommy Caldwell",
      "Jimmy Chin"
    ],
    "tagline": "Herhangi bir halat veya güvenlik ipi olmadan 900 metrelik El Capitan kayası.",
    "awards": "1 Oscar Ödülü (En İyi Belgesel)",
    "summary": "Dünyaca ünlü dağcı Alex Honnold'un Yosemite Ulusal Parkı'ndaki 900 metrelik dikey granit kaya El Capitan'a hiçbir emniyet ipi veya koruma olmadan serbest solo tırmanış yapma hayalini nefes kesen görüntülerle anlatan National Geographic belgeseli.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjA2YTAxMzMtNzA2Mi00NTcyLTg4NzUtODIxYzFiYzdiNWNlXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjA2YTAxMzMtNzA2Mi00NTcyLTg4NzUtODIxYzFiYzdiNWNlXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "urRVZ4SW7WU",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "natgeo",
      "disney"
    ],
    "themeColor": "#f59e0b",
    "moods": [
      "adrenaline",
      "heartwarming"
    ]
  },
  {
    "id": "game-of-thrones",
    "title": "Taht Oyunları",
    "originalTitle": "Game of Thrones",
    "year": 2011,
    "imdbRating": 9.2,
    "imdbVotes": "2.3M",
    "duration": "8 Sezon",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Dram"
    ],
    "director": "David Benioff, D.B. Weiss",
    "cast": [
      "Emilia Clarke",
      "Kit Harington",
      "Peter Dinklage",
      "Lena Headey"
    ],
    "tagline": "Kış Geliyor. (Winter is Coming.)",
    "awards": "59 Emmy Ödülü (Tarihin En Çok Emmy Kazanan Dizisi)",
    "summary": "Westeros diyarının Yedi Krallığı üzerinde hak iddia eden soylu hanedanlar, Demir Taht'ı ele geçirmek için ölümcül bir güç mücadelesine girişir. Güneşte entrikalar dönerken, kadim Kuzey Duvarı'nın ardında insanlığın sonunu getirecek buzdan bir kabus uyanmaktadır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGYxOGJkMjItZjVkZC00OGEzLWExNjktOTZmNGZhZmRlMTk2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGYxOGJkMjItZjVkZC00OGEzLWExNjktOTZmNGZhZmRlMTk2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "KPLWWIOCOOQ",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "hbo",
      "tvplus"
    ],
    "hubTags": [
      "hbo",
      "max"
    ],
    "themeColor": "#9945ff",
    "featuredBadge": "HBO Efsane Dizisi",
    "moods": [
      "escapism",
      "prestige",
      "thrill"
    ]
  },
  {
    "id": "the-last-of-us",
    "title": "The Last of Us",
    "originalTitle": "The Last of Us",
    "year": 2023,
    "imdbRating": 8.7,
    "imdbVotes": "550K",
    "duration": "1 Sezon",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Dram"
    ],
    "director": "Craig Mazin, Neil Druckmann",
    "cast": [
      "Pedro Pascal",
      "Bella Ramsey",
      "Gabriel Luna"
    ],
    "tagline": "Karanlıkta kaybolduğunda, ışığı ara.",
    "awards": "8 Emmy Ödülü",
    "summary": "Modern uygarlığın kordiseps mantar salgınıyla yok edilmesinden yirmi yıl sonra, sertleşmiş bir hayatta kalan olan Joel, insanlığın tek tedavi umudu olabilecek 14 yaşındaki Ellie'yi baskıcı bir karantina bölgesinden kaçırıp ölümcül Amerika harabelerinde kaçırmakla görevlendirilir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "uLtkt8BonwM",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "hbo",
      "tvplus"
    ],
    "hubTags": [
      "hbo",
      "max"
    ],
    "themeColor": "#9945ff",
    "featuredBadge": "HBO Orijinal Başyapıtı",
    "moods": [
      "tearjerker",
      "thrill",
      "prestige"
    ]
  },
  {
    "id": "succession",
    "title": "Succession",
    "originalTitle": "Succession",
    "year": 2018,
    "imdbRating": 8.9,
    "imdbVotes": "280K",
    "duration": "4 Sezon",
    "ageRating": "18+",
    "genres": [
      "Dram"
    ],
    "director": "Jesse Armstrong",
    "cast": [
      "Brian Cox",
      "Jeremy Strong",
      "Sarah Snook",
      "Kieran Culkin"
    ],
    "tagline": "Zenginlik, güç ve aile ihanetleri.",
    "awards": "19 Emmy Ödülü & 5 Altın Küre",
    "summary": "Dünyanın en büyük medya ve eğlence imparatorluklarından biri olan Waystar RoyCo'nun sahibi yaşlı Logan Roy'un sağlığı bozulduğunda, dört yetişkin çocuğu şirketin kontrolünü ele geçirmek için acımasız ve zekice tasarlanmış bir güç savaşına girişir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTY4YTVkY2QtMjRmOS00YzliLWIxOWQtMTdkOTVkN2UzODNmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTY4YTVkY2QtMjRmOS00YzliLWIxOWQtMTdkOTVkN2UzODNmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "OzYxJV_rmE8",
    "isFeatured": false,
    "isSeries": true,
    "platforms": [
      "hbo",
      "tvplus"
    ],
    "hubTags": [
      "hbo",
      "max"
    ],
    "themeColor": "#7928ca",
    "moods": [
      "prestige",
      "thrill"
    ]
  },
  {
    "id": "chernobyl",
    "title": "Çernobil",
    "originalTitle": "Chernobyl",
    "year": 2019,
    "imdbRating": 9.3,
    "imdbVotes": "900K",
    "duration": "5 Bölüm Minidizi",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Tarih",
      "Gerilim"
    ],
    "director": "Craig Mazin",
    "cast": [
      "Jared Harris",
      "Stellan Skarsgård",
      "Emily Watson"
    ],
    "tagline": "Yalanların bedeli nedir?",
    "awards": "10 Emmy Ödülü & 2 Altın Küre",
    "summary": "Nisan 1986'da Sovyet Sosyalist Cumhuriyetler Birliği'ndeki Çernobil Nükleer Santrali'nde insanlık tarihinin en büyük nükleer felaketi yaşanır. Felaketin ardından tüm Avrupa'yı kurtarmak için hayatlarını feda eden cesur insanların ve gerçeği saklamaya çalışan bürokrasinin sarsıcı hikayesi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "s9APLXM9Ei8",
    "isFeatured": false,
    "isSeries": true,
    "platforms": [
      "hbo",
      "tvplus"
    ],
    "hubTags": [
      "hbo",
      "max"
    ],
    "themeColor": "#9945ff",
    "moods": [
      "thrill",
      "prestige",
      "tearjerker"
    ]
  },
  {
    "id": "joker",
    "title": "Joker",
    "originalTitle": "Joker",
    "year": 2019,
    "imdbRating": 8.4,
    "imdbVotes": "1.4M",
    "duration": "2s 2dk",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Dram",
      "Gerilim"
    ],
    "director": "Todd Phillips",
    "cast": [
      "Joaquin Phoenix",
      "Robert De Niro",
      "Zazie Beetz"
    ],
    "tagline": "Yüzüne bir gülücük kondur.",
    "awards": "2 Oscar Ödülü (Joaquin Phoenix En İyi Erkek Oyuncu)",
    "summary": "Gotham City'de toplum tarafından dışlanan ve akıl sağlığı bozulan palyaço Arthur Fleck, maruz kaldığı şiddet ve aşağılanmalar sonucu Gotham'ı anarşiye sürükleyecek ikonik suç dehası Joker kimliğine bürünür.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "zAGVQLHvwOY",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "hbo",
      "prime"
    ],
    "hubTags": [
      "dc",
      "wb",
      "hbo"
    ],
    "themeColor": "#9945ff",
    "moods": [
      "thrill",
      "prestige"
    ]
  },
  {
    "id": "harry-potter",
    "title": "Harry Potter ve Felsefe Taşı",
    "originalTitle": "Harry Potter and the Sorcerer's Stone",
    "year": 2001,
    "imdbRating": 7.6,
    "imdbVotes": "900K",
    "duration": "2s 32dk",
    "ageRating": "Genel",
    "genres": [
      "Macera",
      "Fantastik"
    ],
    "director": "Chris Columbus",
    "cast": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson"
    ],
    "tagline": "Sihir başlıyor.",
    "awards": "3 Oscar Adaylığı",
    "summary": "On birinci doğum gününde kendisinin bir büyücü olduğunu öğrenen yetim Harry Potter, Hogwarts Cadılık ve Büyücülük Okulu'na kabul edilir. Ron ve Hermione ile birlikte okulun gizli koridorlarında ölümsüzlük iksiri sunan Felsefe Taşı'nı karanlık güçlerden korumaya çalışır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "VyHV0BRtdxo",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "hbo"
    ],
    "hubTags": [
      "wizarding",
      "wb",
      "hbo"
    ],
    "themeColor": "#eab308",
    "moods": [
      "escapism",
      "heartwarming"
    ]
  },
  {
    "id": "the-boys",
    "title": "The Boys",
    "originalTitle": "The Boys",
    "year": 2019,
    "imdbRating": 8.7,
    "imdbVotes": "710K",
    "duration": "4 Sezon",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Komedi",
      "Suç"
    ],
    "director": "Eric Kripke",
    "cast": [
      "Karl Urban",
      "Jack Quaid",
      "Antony Starr",
      "Erin Moriarty"
    ],
    "tagline": "Kahramanlarınıza asla güvenmeyin.",
    "awards": "8 Emmy Adaylığı",
    "summary": "Süper güçlerini halkın gözü önünde iyilik için kullanıyormuş gibi davranan ancak kapalı kapılar ardında ahlaksız ve yozlaşmış olan kurumsal süper kahraman grubu 'Yedi'yi dize getirmek için kanunsuz adalet arayıcısı 'The Boys' ekibi harekete geçer.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "06rueu_fh30",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime-originals",
      "prime"
    ],
    "themeColor": "#00a8e1",
    "featuredBadge": "Prime Video #1 Dizisi",
    "moods": [
      "adrenaline",
      "thrill"
    ]
  },
  {
    "id": "fallout",
    "title": "Fallout",
    "originalTitle": "Fallout",
    "year": 2024,
    "imdbRating": 8.4,
    "imdbVotes": "250K",
    "duration": "1 Sezon",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Dram"
    ],
    "director": "Jonathan Nolan, Lisa Joy",
    "cast": [
      "Ella Purnell",
      "Aaron Moten",
      "Walton Goggins"
    ],
    "tagline": "Kıyametten sonra hayat devam ediyor.",
    "awards": "16 Emmy Adaylığı",
    "summary": "Nükleer kıyametten 200 yıl sonra lüks sığınak Vault 33'ten yüzeye çıkan saf sığınak sakini Lucy, acımasız ve vahşi Los Angeles nükleer çölünde babasını bulmak için bir Ghoul ödül avcısı ve Çelik Kardeşliği askeriyle karşılaşır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzE1MTZmY2ItMTgxNi00OGU5LTk4NTItMmY2ODFhYzhjZjRkXkEyXkFqcGc@._V1_QL75_UX380_CR0,57,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzE1MTZmY2ItMTgxNi00OGU5LTk4NTItMmY2ODFhYzhjZjRkXkEyXkFqcGc@._V1_QL75_UX380_CR0,57,380,562_.jpg",
    "trailerYoutubeId": "V-mugKDQDlg",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime-originals",
      "prime"
    ],
    "themeColor": "#00a8e1",
    "featuredBadge": "Prime Video Yeni Hit",
    "moods": [
      "escapism",
      "adrenaline"
    ]
  },
  {
    "id": "rings-of-power",
    "title": "Yüzüklerin Efendisi: Güç Yüzükleri",
    "originalTitle": "The Lord of the Rings: The Rings of Power",
    "year": 2022,
    "imdbRating": 7,
    "imdbVotes": "380K",
    "duration": "2 Sezon",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Dram"
    ],
    "director": "J.D. Payne, Patrick McKay",
    "cast": [
      "Morfydd Clark",
      "Ismael Cruz Cordova",
      "Charlie Vickers"
    ],
    "tagline": "Yüzükten önce güç vardı.",
    "awards": "6 Emmy Adaylığı",
    "summary": "J.R.R. Tolkien'in Orta Dünya İkinci Çağı'nda geçen dizide Güç Yüzüklerinin dövülüşü, Karanlıklar Efendisi Sauron'un yükselişi ve Númenor krallığının destansı kaderi anlatılıyor.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjlhYTk3ZGQtNjdlYi00NDQyLTgxZTEtMzk0OTU5OTRhNGZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,57,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjlhYTk3ZGQtNjdlYi00NDQyLTgxZTEtMzk0OTU5OTRhNGZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,57,380,562_.jpg",
    "trailerYoutubeId": "v7v1hIkXY2I",
    "isFeatured": false,
    "isSeries": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime-originals",
      "prime"
    ],
    "themeColor": "#f59e0b",
    "moods": [
      "escapism"
    ]
  },
  {
    "id": "reacher",
    "title": "Reacher",
    "originalTitle": "Reacher",
    "year": 2022,
    "imdbRating": 8.1,
    "imdbVotes": "220K",
    "duration": "2 Sezon",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Suç",
      "Dram"
    ],
    "director": "Nick Santora",
    "cast": [
      "Alan Ritchson",
      "Malcolm Goodwin",
      "Willa Fitzgerald"
    ],
    "tagline": "Araştırmacı, gezgin ve durdurulamaz bir güç.",
    "awards": "Critics Choice Super Adaylığı",
    "summary": "Eski bir ordu askeri polisi olan Jack Reacher, işlemediği bir cinayetle suçlanınca küçük bir Gürcistan kasabasında polisler, iş adamları ve politikacıları içeren derin bir komployu kas gücü ve parlak zekasıyla ortaya çıkarmaya başlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmE0YTA3MTItMjhiNC00MGQ3LTllZDktNGNiZWY1OWFmNmM1XkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMmE0YTA3MTItMjhiNC00MGQ3LTllZDktNGNiZWY1OWFmNmM1XkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    "trailerYoutubeId": "GSycMV_vr8k",
    "isFeatured": false,
    "isSeries": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime-originals",
      "prime"
    ],
    "themeColor": "#00a8e1",
    "moods": [
      "adrenaline",
      "thrill"
    ]
  },
  {
    "id": "no-time-to-die",
    "title": "007: Ölmek İçin Zaman Yok",
    "originalTitle": "No Time to Die",
    "year": 2021,
    "imdbRating": 7.3,
    "imdbVotes": "440K",
    "duration": "2s 43dk",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Gerilim"
    ],
    "director": "Cary Joji Fukunaga",
    "cast": [
      "Daniel Craig",
      "Rami Malek",
      "Léa Seydoux",
      "Ana de Armas"
    ],
    "tagline": "Son görev.",
    "awards": "1 Oscar Ödülü (Billie Eilish En İyi Şarkı)",
    "summary": "Aktif hizmetten ayrılan James Bond, Jamaika'da sakin bir hayat sürmektedir. Ancak CIA'den eski dostu Felix Leiter'ın kaçırılan bir bilim insanını kurtarma ricası onu tehlikeli yeni teknolojilerle donanmış gizemli bir düşmanın peşine düşürür.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGZiOGZhZDQtZmRkNy00ZmUzLTliMGEtZGU0NjExOGMxZDVkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGZiOGZhZDQtZmRkNy00ZmUzLTliMGEtZGU0NjExOGMxZDVkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "BIhNsAtPbPI",
    "isFeatured": false,
    "isSeries": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "mgm",
      "prime"
    ],
    "themeColor": "#00a8e1",
    "moods": [
      "adrenaline",
      "thrill"
    ]
  },
  {
    "id": "stranger-things",
    "title": "Stranger Things",
    "originalTitle": "Stranger Things",
    "year": 2016,
    "imdbRating": 8.7,
    "imdbVotes": "1.3M",
    "duration": "4 Sezon",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Fantastik",
      "Korku"
    ],
    "director": "The Duffer Brothers",
    "cast": [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "Winona Ryder",
      "David Harbour"
    ],
    "tagline": "Arkadaşların yalan söylemez. Baş aşağı dünya açılıyor.",
    "awards": "12 Emmy Ödülü & 4 Altın Küre Adaylığı",
    "summary": "1980'lerde Indiana'nın sakin Hawkins kasabasında küçük bir çocuk gizemli bir şekilde ortadan kaybolur. Ailesi ve arkadaşları onu ararken telekinetik güçlere sahip gizemli bir kız (Eleven) ve kasabanın altında açılan karanlık boyut (Upside Down) ile karşılaşırlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "b9EkMc79ZSU",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix-originals",
      "netflix"
    ],
    "themeColor": "#e50914",
    "featuredBadge": "Netflix Global Hit",
    "moods": [
      "escapism",
      "thrill"
    ]
  },
  {
    "id": "squid-game",
    "title": "Squid Game",
    "originalTitle": "Squid Game",
    "year": 2021,
    "imdbRating": 8,
    "imdbVotes": "580K",
    "duration": "1 Sezon",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Dram",
      "Gerilim"
    ],
    "director": "Hwang Dong-hyuk",
    "cast": [
      "Lee Jung-jae",
      "Park Hae-soo",
      "Jung Ho-yeon"
    ],
    "tagline": "45.6 milyar won ödül için çocuk oyunları oynar mısınız?",
    "awards": "6 Emmy Ödülü & Altın Küre",
    "summary": "Maddi çıkmazdaki 456 çaresiz insan, devasa para ödülünü kazanmak için çocuk oyunlarından oluşan gizemli bir yarışmaya davet edilir. Ancak elenmenin bedelinin ölüm olduğunu keşfettiklerinde oyun hayatta kalma mücadelesine döner.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDcxYjg1OTctYmUxZi00ZjhjLWIwNTMtNmI2M2Y4OTU1YWU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDcxYjg1OTctYmUxZi00ZjhjLWIwNTMtNmI2M2Y4OTU1YWU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "oqxAJKy0ii4",
    "isFeatured": false,
    "isSeries": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix-originals",
      "netflix"
    ],
    "themeColor": "#e50914",
    "moods": [
      "thrill",
      "adrenaline"
    ]
  },
  {
    "id": "breaking-bad",
    "title": "Breaking Bad",
    "originalTitle": "Breaking Bad",
    "year": 2008,
    "imdbRating": 9.5,
    "imdbVotes": "2.1M",
    "duration": "5 Sezon",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Dram",
      "Gerilim"
    ],
    "director": "Vince Gilligan",
    "cast": [
      "Bryan Cranston",
      "Aaron Paul",
      "Anna Gunn",
      "Giancarlo Esposito"
    ],
    "tagline": "Ben tehlikede değilim Skyler, tehlike benim!",
    "awards": "16 Emmy Ödülü & 2 Altın Küre (Tüm Zamanların En Yüksek IMDb Puanlı Dizisi)",
    "summary": "İleri evre akciğer kanseri teşhisi konan lise kimya öğretmeni Walter White, ailesinin geleceğini güvence altına almak için eski öğrencisi Jesse Pinkman ile birlikte metamfetamin üretip satmaya başlar. İyi bir aile babasının acımasız bir uyuşturucu baronuna (Heisenberg) dönüşümünün kusursuz hikayesi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWE4NTc3YmYtNmU2Mi00ZjhkLWE1MTItZmM1M2U1ODU3YjFlXkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOWE4NTc3YmYtNmU2Mi00ZjhkLWE1MTItZmM1M2U1ODU3YjFlXkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailerYoutubeId": "HhesaQXLuRY",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix-originals",
      "netflix",
      "awards"
    ],
    "themeColor": "#e50914",
    "featuredBadge": "IMDb #1 Efsane Dizi",
    "moods": [
      "thrill",
      "prestige"
    ]
  },
  {
    "id": "dark",
    "title": "Dark",
    "originalTitle": "Dark",
    "year": 2017,
    "imdbRating": 8.7,
    "imdbVotes": "450K",
    "duration": "3 Sezon",
    "ageRating": "16+",
    "genres": [
      "Suç",
      "Dram",
      "Gizem"
    ],
    "director": "Baran bo Odar",
    "cast": [
      "Louis Hofmann",
      "Oliver Masucci",
      "Jördis Triebel"
    ],
    "tagline": "Soru nerede olduğu değil, ne zaman olduğu.",
    "awards": "Grimme-Preis Ödülü",
    "summary": "Almanya'nın Winden kasabasında iki çocuğun kaybolması, dört ayrı ailenin 33 yıllık döngülerle birbirine bağlanan karmaşık zaman yolculuğu sırlarını ve karanlık geçmişini ortaya çıkarır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTUzNjQ2MTY5NV5BMl5BanBnXkFtZTgwOTAzNTQxNDM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTUzNjQ2MTY5NV5BMl5BanBnXkFtZTgwOTAzNTQxNDM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "rrwycJ08PSA",
    "isFeatured": false,
    "isSeries": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix-originals",
      "netflix"
    ],
    "themeColor": "#e50914",
    "moods": [
      "mind-bending",
      "thrill"
    ]
  },
  {
    "id": "arcane",
    "title": "Arcane",
    "originalTitle": "Arcane",
    "year": 2021,
    "imdbRating": 9,
    "imdbVotes": "280K",
    "duration": "2 Sezon",
    "ageRating": "16+",
    "genres": [
      "Animasyon",
      "Aksiyon",
      "Macera"
    ],
    "director": "Christian Linke, Alex Yee",
    "cast": [
      "Hailee Steinfeld",
      "Ella Purnell",
      "Kevin Alejandro"
    ],
    "tagline": "İki kardeş, iki şehir, bir savaş.",
    "awards": "4 Emmy Ödülü (Mükemmel Animasyon Programı)",
    "summary": "Ütopik zengin şehir Piltover ile ezilen yer altı şehri Zaun arasındaki gerilimde, iki yetim kız kardeş Vi ve Powder (Jinx), büyülü hextest teknolojisinin keşfi ve kimyasal mutant maddelerin gölgesinde birbirine düşman iki karşı cephede kalır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "fXmAurh012s",
    "isFeatured": true,
    "isSeries": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix-originals",
      "netflix",
      "anime"
    ],
    "themeColor": "#e50914",
    "featuredBadge": "Netflix #1 Animasyon",
    "moods": [
      "escapism",
      "adrenaline",
      "prestige"
    ]
  },
  {
    "id": "the-hangover",
    "title": "Felekten Bir Gece",
    "originalTitle": "The Hangover",
    "year": 2009,
    "imdbRating": 7.7,
    "imdbVotes": "840K",
    "duration": "1s 40dk",
    "ageRating": "18+",
    "genres": [
      "Komedi"
    ],
    "director": "Todd Phillips",
    "cast": [
      "Bradley Cooper",
      "Ed Helms",
      "Zach Galifianakis",
      "Justin Bartha"
    ],
    "tagline": "Bazı geceleri hatırlayamazsın, ama asla unutamazsın.",
    "awards": "1 Altın Küre Ödülü (En İyi Komedi)",
    "summary": "Dört yakın arkadaş, Doug'ın yaklaşan düğünü öncesinde bekarlığa veda partisi yapmak için Las Vegas'a gider. Ancak ertesi sabah Caesars Palace'taki lüks süitlerinde uyandıklarında odada bir Bengal kaplanı, banyoda bir tavuk, gardıropta ağlayan bir bebek bulurlar ve en önemlisi damat Doug tamamen kayıptır! Bir gece önce neler yaşandığını zerrece hatırlamayan üç kafadar, düğünden önce damadı bulabilmek için geride bıraktıkları darmadağınık ipuçlarını takip etmek zorundadır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "tcdUhdOlz9M",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "wb",
      "netflix",
      "prime"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#f59e0b"
  },
  {
    "id": "superbad",
    "title": "Çok Fena",
    "originalTitle": "Superbad",
    "year": 2007,
    "imdbRating": 7.6,
    "imdbVotes": "620K",
    "duration": "1s 53dk",
    "ageRating": "18+",
    "genres": [
      "Komedi"
    ],
    "director": "Greg Mottola",
    "cast": [
      "Jonah Hill",
      "Michael Cera",
      "Christopher Mintz-Plasse",
      "Bill Hader",
      "Seth Rogen"
    ],
    "tagline": "Bir partiye içki sokmak hiç bu kadar zor olmamıştı.",
    "awards": "MTV Film Ödülleri Adayı",
    "summary": "Liseyi bitirmek üzere olan ayrılmaz iki yakın arkadaş Seth ve Evan, farklı üniversitelere gitmeden önce popüler kızların davet edildiği büyük bir mezuniyet partisinde şanslarını denemek ister. Arkadaşları Fogell'ın sahte kimliği 'McLovin' ile içki almaya çalışırken iki çılgın polisle başlarının belaya girmesiyle başlayan absürt gece, tam bir felaketler ve kahkaha zincirine dönüşür.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailerYoutubeId": "4eaZ_48ZYog",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#eab308"
  },
  {
    "id": "the-truman-show",
    "title": "Truman Show",
    "originalTitle": "The Truman Show",
    "year": 1998,
    "imdbRating": 8.2,
    "imdbVotes": "1.2M",
    "duration": "1s 43dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Dram"
    ],
    "director": "Peter Weir",
    "cast": [
      "Jim Carrey",
      "Laura Linney",
      "Ed Harris",
      "Natascha McElhone"
    ],
    "tagline": "Günün 24 saati, haftanın 7 günü canlı yayında.",
    "awards": "3 Oscar Adaylığı, 3 Altın Küre Ödülü",
    "summary": "Truman Burbank, kusursuz bir ada kasabasında sıradan bir hayat süren neşeli bir sigortacıdır. Ancak farkında olmadığı şey, doğduğu andan itibaren tüm yaşamının dev bir stüdyoda 5000 gizli kamerayla 24 saat boyunca tüm dünyaya kesintisiz canlı yayınlanan bir reality şov olduğudur. Gökyüzünden düşen bir stüdyo ışığı ve tuhaf rastlantılar Truman'ı gerçekliği sorgulamaya ve kendi özgürlüğünü aramaya iter.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailerYoutubeId": "dlnmQbPGuls",
    "isFeatured": true,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "chill-comedy",
      "mind-bending",
      "prestige"
    ],
    "themeColor": "#38bdf8",
    "featuredBadge": "Kült Başyapıt"
  },
  {
    "id": "the-grand-budapest-hotel",
    "title": "Büyük Budapeşte Oteli",
    "originalTitle": "The Grand Budapest Hotel",
    "year": 2014,
    "imdbRating": 8.1,
    "imdbVotes": "900K",
    "duration": "1s 39dk",
    "ageRating": "16+",
    "genres": [
      "Komedi",
      "Macera"
    ],
    "director": "Wes Anderson",
    "cast": [
      "Ralph Fiennes",
      "Tony Revolori",
      "Saoirse Ronan",
      "Willem Dafoe",
      "Adrien Brody"
    ],
    "tagline": "Cinayet, entrika ve paha biçilmez bir Rönesans tablosu.",
    "awards": "4 Oscar Ödülü, Altın Ayı Büyük Jüri Ödülü",
    "summary": "İki dünya savaşı arasındaki dönemde, hayali Zubrowka Cumhuriyeti'nin zirvesindeki lüks Büyük Budapeşte Oteli'nin efsanevi konsiyerji Gustave H. ile komi çırağı Zero Moustafa'nın sıradışı dostluğu. Gustave'a yaşlı bir kontes tarafından miras bırakılan paha biçilmez 'Elmalı Çocuk' tablosu yüzünden patlak veren aile kavgası, cinayet suçlaması ve hapishaneden kaçış macerası Wes Anderson'ın simetrik ve pastel sinema görseliyle anlatılıyor.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "1Fg5iWmQjwk",
    "isFeatured": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "disney"
    ],
    "moods": [
      "chill-comedy",
      "prestige"
    ],
    "themeColor": "#ec4899"
  },
  {
    "id": "deadpool",
    "title": "Deadpool",
    "originalTitle": "Deadpool",
    "year": 2016,
    "imdbRating": 8,
    "imdbVotes": "1.1M",
    "duration": "1s 48dk",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Komedi",
      "Macera"
    ],
    "director": "Tim Miller",
    "cast": [
      "Ryan Reynolds",
      "Morena Baccarin",
      "Ed Skrein",
      "T.J. Miller"
    ],
    "tagline": "Büyük güç, büyük sorumsuzluk getirir.",
    "awards": "2 Altın Küre Adaylığı, Critics' Choice En İyi Komedi",
    "summary": "Eski bir özel kuvvetler askeri olan Wade Wilson, ölümcül kansere yakalandıktan sonra deneysel bir tedavi teklifini kabul eder. Deney sonucunda hızlandırılmış iyileşme gücüne sahip olur ancak vücudu tanınmaz hale gelir. Kırmızı kostümünü giyip kendine 'Deadpool' adını veren laf cambazı anti-kahraman, dördüncü duvarı kırarak seyirciyle sohbet ede ede hayatını mahveden adamın peşine düşer.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "ONHBaC-pfsk",
    "isFeatured": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "marvel",
      "disney"
    ],
    "moods": [
      "chill-comedy",
      "adrenaline"
    ],
    "themeColor": "#ef4444"
  },
  {
    "id": "deadpool-wolverine",
    "title": "Deadpool & Wolverine",
    "originalTitle": "Deadpool & Wolverine",
    "year": 2024,
    "imdbRating": 7.7,
    "imdbVotes": "460K",
    "duration": "2s 8dk",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Komedi",
      "Bilim Kurgu"
    ],
    "director": "Shawn Levy",
    "cast": [
      "Ryan Reynolds",
      "Hugh Jackman",
      "Emma Corrin",
      "Matthew Macfadyen"
    ],
    "tagline": "Evreni kurtarmak için iki kişi yeter.",
    "awards": "2024 Global Gişe Rekoru (1.3 Milyar Dolar)",
    "summary": "Kendi evreninin yok olma tehlikesiyle karşı karşıya kalan Deadpool, TVA'nın müdahalesi sonrası çareyi çoklu evrenlerden depresif ve isteksiz bir Wolverine bulup geri getirmekte bulur. Birbirlerine tahammül edemeyen bu iki zıt karakter, Void diyarına sürgün edilince Cassandra Nova'ya karşı kahkaha, pop-kültür göndermeleri ve vahşi aksiyon dolu bir hayatta kalma mücadelesi verir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "73_1biulkYk",
    "isFeatured": true,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "marvel",
      "disney"
    ],
    "moods": [
      "chill-comedy",
      "adrenaline"
    ],
    "themeColor": "#eab308",
    "featuredBadge": "2024 Zirvesi"
  },
  {
    "id": "olumlu-dunya",
    "title": "Ölümlü Dünya",
    "originalTitle": "Ölümlü Dünya",
    "year": 2018,
    "imdbRating": 7.6,
    "imdbVotes": "42K",
    "duration": "1s 47dk",
    "ageRating": "16+",
    "genres": [
      "Komedi",
      "Aksiyon",
      "Suç"
    ],
    "director": "Ali Atay",
    "cast": [
      "Ahmet Mümtaz Taylan",
      "Alper Kul",
      "Sarp Apak",
      "Feyyaz Yiğit",
      "İrem Sak",
      "Doğu Demirkol"
    ],
    "tagline": "Mermer ailesiyle tanışmaya hazır mısınız?",
    "awards": "Sadri Alışık Sinema Ödülleri",
    "summary": "Nesillerdir Haydarpaşa Garı'nda Anadolu Tat Lokantası'nı işleten 8 kişilik Mermer ailesi, dışarıdan sıradan bir esnaf gibi görünse de aslında uluslararası bir suç örgütü için gizli kiralık katillik yapmaktadır. Örgütün gizli bir kuralını çiğnemeleriyle birlikte hedef haline gelirler ve Türkiye'den kaçmak için absürt, panik dolu ve kahkahalarla bezeli bir hayatta kalma operasyonu başlatırlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGQzMWY0NGYtMGE4MS00YmExLTkyOWItNzQxOWUzODkxNzAyXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGQzMWY0NGYtMGE4MS00YmExLTkyOWItNzQxOWUzODkxNzAyXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
    "trailerYoutubeId": "e-7Q_dUtv_w",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#ef4444"
  },
  {
    "id": "olumlu-dunya-2",
    "title": "Ölümlü Dünya 2",
    "originalTitle": "Ölümlü Dünya 2",
    "year": 2023,
    "imdbRating": 7.1,
    "imdbVotes": "25K",
    "duration": "1s 55dk",
    "ageRating": "16+",
    "genres": [
      "Komedi",
      "Aksiyon"
    ],
    "director": "Ali Atay",
    "cast": [
      "Ahmet Mümtaz Taylan",
      "Alper Kul",
      "Sarp Apak",
      "Feyyaz Yiğit",
      "İrem Sak",
      "Doğu Demirkol",
      "Giray Altınok"
    ],
    "tagline": "Aile her şeydir, ama bu aile biraz fazla.",
    "awards": "Gişe Lideri (2 Milyon Seyirci)",
    "summary": "Kanun kaçağı olarak birbirinden kopuk saklanan Mermer ailesi, ailenin en saf üyesi Zafer'in örgüt tarafından kaçırılması üzerine mecburen yeniden bir araya gelir. Zafer'i kurtarabilmek için örgütün elindeki devasa bir veri bankasını çalmak üzere son bir absürt soyguna girişirler.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTExMzUyZjctZDViNS00NzA3LWJiNTctNzE1ZWJiYmZjNmM4XkEyXkFqcGc@._V1_SX300.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTExMzUyZjctZDViNS00NzA3LWJiNTctNzE1ZWJiYmZjNmM4XkEyXkFqcGc@._V1_SX300.jpg",
    "trailerYoutubeId": "Ld1wF1c4G6I",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#e50914"
  },
  {
    "id": "gora",
    "title": "G.O.R.A.",
    "originalTitle": "G.O.R.A.",
    "year": 2004,
    "imdbRating": 8,
    "imdbVotes": "74K",
    "duration": "2s 7dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Bilim Kurgu",
      "Macera"
    ],
    "director": "Ömer Faruk Sorak",
    "cast": [
      "Cem Yılmaz",
      "Rasim Öztekin",
      "Özkan Uğur",
      "Şafak Sezer",
      "Ozan Güven",
      "İdil Fırat"
    ],
    "tagline": "Bir Türk uzayda ne yapar?",
    "awards": "Türk Sinema Tarihi Gişe Efsanesi",
    "summary": "Kurnaz ve hazırcevap halı satıcısı Arif, dükkanına gelen uzaylılar tarafından kaçırılarak G.O.R.A. gezegenine köle olarak götürülür. Gezegendeki kötü kalpli Komutan Logar'ın Prenses Ceku ile evlenip gezegeni ele geçirme planını fark eden Arif, gezegenden kaçmak ve prensesi kurtarmak için Türk usulü akıl oyunları ve efsanevi esprilerle mücadeleye girişir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDU3NTVhYTItNGYyOS00Njk0LWIzMWQtZTU5Njg5MzkwZTllXkEyXkFqcGc@._V1_SX300.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDU3NTVhYTItNGYyOS00Njk0LWIzMWQtZTU5Njg5MzkwZTllXkEyXkFqcGc@._V1_SX300.jpg",
    "trailerYoutubeId": "W26g55o779g",
    "isFeatured": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy",
      "escapism"
    ],
    "themeColor": "#06b6d4",
    "featuredBadge": "Kült Komedi"
  },
  {
    "id": "arog",
    "title": "A.R.O.G.",
    "originalTitle": "A.R.O.G: Bir Yontma Taş Filmi",
    "year": 2008,
    "imdbRating": 7.4,
    "imdbVotes": "48K",
    "duration": "2s 8dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Bilim Kurgu"
    ],
    "director": "Cem Yılmaz, Ali Taner Baltacı",
    "cast": [
      "Cem Yılmaz",
      "Ozan Güven",
      "Özkan Uğur",
      "Nil Karaibrahimgil",
      "Zafer Algöz"
    ],
    "tagline": "Yontma taş devrinde ilk futbol maçı.",
    "awards": "Yeşilçam Ödülleri",
    "summary": "G.O.R.A.'dan kurtulup Dünya'da Ceku ile mutlu bir evlilik kuran Arif, intikam peşindeki Komutan Logar'ın zaman makinesi hilesiyle günümüzden bir milyon yıl öncesine, Taş Devri'ne sürgün edilir. Vahşi doğada Taş Devri insanlarıyla karşılaşan Arif, modern çağın futbolunu, teknolojisini ve medeniyetini ilkel kabileye öğreterek tekrar geleceğe dönmenin yolunu arar.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/8/83/A.R.O.G._%28movie_poster%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "backdropUrl": "https://upload.wikimedia.org/wikipedia/en/8/83/A.R.O.G._%28movie_poster%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "trailerYoutubeId": "yK6C_qgK-z0",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#d97706"
  },
  {
    "id": "knives-out",
    "title": "Bıçaklar Çekildi",
    "originalTitle": "Knives Out",
    "year": 2019,
    "imdbRating": 7.9,
    "imdbVotes": "640K",
    "duration": "2s 10dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Gizem",
      "Suç"
    ],
    "director": "Rian Johnson",
    "cast": [
      "Daniel Craig",
      "Ana de Armas",
      "Chris Evans",
      "Jamie Lee Curtis",
      "Michael Shannon"
    ],
    "tagline": "Herkes şüpheli, kimse masum değil.",
    "awards": "1 Oscar Adaylığı, 3 Altın Küre Adaylığı",
    "summary": "Varlıklı polisiye yazarı Harlan Thrombey 85. yaş gününün ertesi sabahı malikanesinde ölü bulunur. Görünürde bir intihar gibi duran olayı aydınlatmak üzere gizemli bir müşteri tarafından tutulan güneyli şık dedektif Benoit Blanc devreye girer. Harlan'ın açgözlü ve sahtekar akrabalarının her birinin cinayet için sebebi vardır. Zekice yazılmış diyalogları ve Agatha Christie havasındaki mizahıyla modern bir klasik.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "qGqiHJTsRfs",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy",
      "prestige"
    ],
    "themeColor": "#8b5cf6"
  },
  {
    "id": "the-big-lebowski",
    "title": "Büyük Lebowski",
    "originalTitle": "The Big Lebowski",
    "year": 1998,
    "imdbRating": 8.1,
    "imdbVotes": "860K",
    "duration": "1s 57dk",
    "ageRating": "18+",
    "genres": [
      "Komedi",
      "Suç"
    ],
    "director": "Joel & Ethan Coen",
    "cast": [
      "Jeff Bridges",
      "John Goodman",
      "Julianne Moore",
      "Steve Buscemi"
    ],
    "tagline": "O halı odayı gerçekten birbirine bağlıyordu.",
    "awards": "Berlin Film Festivali Altın Ayı Adayı",
    "summary": "Los Angeles'ta bornozu, terlikleri ve White Russian kokteyliyle tasasız bir hayat süren tembel bowling tutkunu Jeffrey 'The Dude' Lebowski, aynı adı taşıyan bir milyonerle karıştırılınca evine giren serseriler tarafından halısı berbat edilir. Mahvolan halısının tazminatını almak için adaşı milyonerin peşine düşen Dude, kendini sahte fidye kaçırma planlarının, nihilistlerin ve absürt sanatçıların ortasında bulur.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "cd-go0oBF4Y",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "chill-comedy",
      "prestige"
    ],
    "themeColor": "#f59e0b"
  },
  {
    "id": "brooklyn-nine-nine",
    "title": "Brooklyn Nine-Nine",
    "originalTitle": "Brooklyn Nine-Nine",
    "year": 2013,
    "imdbRating": 8.4,
    "imdbVotes": "380K",
    "duration": "8 Sezon",
    "ageRating": "13+",
    "isSeries": true,
    "genres": [
      "Komedi",
      "Suç"
    ],
    "director": "Dan Goor, Michael Schur",
    "cast": [
      "Andy Samberg",
      "Stephanie Beatriz",
      "Terry Crews",
      "Melissa Fumero",
      "Andre Braugher"
    ],
    "tagline": "Kural tanımaz dedektifler, tavizsiz bir komiser.",
    "awards": "2 Altın Küre Ödülü (En İyi Komedi & Andy Samberg)",
    "summary": "New York Polis Departmanı'nın 99. bölgesinde görev yapan yetenekli ama çocuk ruhlu dedektif Jake Peralta ile disiplin ve kural aşığı yeni komiser Raymond Holt arasındaki kuşak ve tarz çatışması. Terry'nin yoğurt aşkı, Boyle'un gurme yemekleri ve ekibin Cadılar Bayramı soygun yarışlarıyla ekranın en sevilen durum komedilerinden biri.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "sEOuJ4z5aTc",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#0284c7"
  },
  {
    "id": "the-office",
    "title": "The Office",
    "originalTitle": "The Office (US)",
    "year": 2005,
    "imdbRating": 9,
    "imdbVotes": "730K",
    "duration": "9 Sezon",
    "ageRating": "16+",
    "isSeries": true,
    "genres": [
      "Komedi"
    ],
    "director": "Greg Daniels",
    "cast": [
      "Steve Carell",
      "John Krasinski",
      "Jenna Fischer",
      "Rainn Wilson",
      "B.J. Novak"
    ],
    "tagline": "Dünyanın en iyi patronu (kendi iddiasına göre).",
    "awards": "5 Emmy Ödülü, 1 Altın Küre Ödülü",
    "summary": "Scranton, Pennsylvania'daki Dunder Mifflin kağıt şirketinin çalışanlarını bir sahte belgesel (mockumentary) tarzında takip eden efsanevi komedi. Şubenin kendini komik zanneden ama kalbi temiz sakar müdürü Michael Scott, onun sadık yardımcısı Dwight Schrute ve Jim ile Pam'in tatlı aşk hikayesi televizyon tarihinin en çok izlenen ve gif üretilen başyapıtıdır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "LHOtME2DL4g",
    "isFeatured": true,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "prime",
      "netflix"
    ],
    "moods": [
      "chill-comedy",
      "prestige"
    ],
    "themeColor": "#22c55e",
    "featuredBadge": "IMDb 9.0 Komedi"
  },
  {
    "id": "friends",
    "title": "Friends",
    "originalTitle": "Friends",
    "year": 1994,
    "imdbRating": 8.9,
    "imdbVotes": "1.1M",
    "duration": "10 Sezon",
    "ageRating": "13+",
    "isSeries": true,
    "genres": [
      "Komedi",
      "Romantik"
    ],
    "director": "David Crane, Marta Kauffman",
    "cast": [
      "Jennifer Aniston",
      "Courteney Cox",
      "Lisa Kudrow",
      "Matt LeBlanc",
      "Matthew Perry",
      "David Schwimmer"
    ],
    "tagline": "Senin için her zaman orada olacaklar.",
    "awards": "6 Emmy Ödülü, 1 Altın Küre",
    "summary": "Manhattan'da yaşayan yirmili yaşlarındaki altı yakın arkadaş Rachel, Monica, Phoebe, Joey, Chandler ve Ross'un dostluk, kariyer, aşk ve hayat mücadelelerini Central Perk kafesinde ve unutulmaz dairelerinde konu alan, televizyon tarihinin en ikonik ve samimi durum komedisi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "hDNNmeeMCU1",
    "isFeatured": false,
    "platforms": [
      "hbo"
    ],
    "hubTags": [
      "hbo"
    ],
    "moods": [
      "chill-comedy",
      "heartwarming",
      "prestige"
    ],
    "themeColor": "#7928ca"
  },
  {
    "id": "ted",
    "title": "Ayı Teddy",
    "originalTitle": "Ted",
    "year": 2012,
    "imdbRating": 6.9,
    "imdbVotes": "620K",
    "duration": "1s 46dk",
    "ageRating": "18+",
    "genres": [
      "Komedi",
      "Fantastik"
    ],
    "director": "Seth MacFarlane",
    "cast": [
      "Mark Wahlberg",
      "Mila Kunis",
      "Seth MacFarlane (Ses)"
    ],
    "tagline": "Büyümek zorunda olan bir adam ve onun küfürbaz peluş ayısı.",
    "awards": "1 Oscar Adaylığı (En İyi Şarkı)",
    "summary": "John Bennett çocukken dilediği bir dilek sayesinde en sevdiği peluş ayısı Ted canlanır ve tüm dünyaya ün salar. Ancak aradan 27 yıl geçmiştir ve John artık 35 yaşında yetişkin bir erkektir. Ted ise hala küfürbaz, bira içen, sorumsuz bir ayıdır. John sevgilisi Lori ile geleceğini kurmak isterken, çocukluk dostu Ted'in yarattığı absürt karmaşalar arasında bocalayacaktır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailerYoutubeId": "9fbo_pRkamL",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#eab308"
  },
  {
    "id": "groundhog-day",
    "title": "Bugün Aslında Dündü",
    "originalTitle": "Groundhog Day",
    "year": 1993,
    "imdbRating": 8,
    "imdbVotes": "680K",
    "duration": "1s 41dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Fantastik",
      "Romantik"
    ],
    "director": "Harold Ramis",
    "cast": [
      "Bill Murray",
      "Andie MacDowell",
      "Chris Elliott"
    ],
    "tagline": "Dün tekrar başladı.",
    "awards": "BAFTA En İyi Özgün Senaryo",
    "summary": "Bencil, huysuz televizyon hava durumu spikeri Phil Connors, her yıl nefret ettiği Punxsutawney kasabasına 'Dağ Sıçanı Günü' festivalini haber yapmak için gönderilir. Ancak ertesi sabah uyandığında yine aynı 2 Şubat sabahına uyandığını fark eder. Zaman döngüsünde sıkışan Phil, aynı günü defalarca yaşarken intihar denemelerinden piyanistliğe kadar her şeyi dener ve sonunda iyi bir insan olmanın değerini anlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailerYoutubeId": "GncQtURucE4",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy",
      "mind-bending"
    ],
    "themeColor": "#38bdf8"
  },
  {
    "id": "modern-family",
    "title": "Modern Family",
    "originalTitle": "Modern Family",
    "year": 2009,
    "imdbRating": 8.5,
    "imdbVotes": "500K",
    "duration": "11 Sezon",
    "ageRating": "13+",
    "isSeries": true,
    "genres": [
      "Komedi"
    ],
    "director": "Steven Levitan, Christopher Lloyd",
    "cast": [
      "Ed O'Neill",
      "Sofía Vergara",
      "Julie Bowen",
      "Ty Burrell",
      "Jesse Tyler Ferguson"
    ],
    "tagline": "Büyük, gürültülü ve kusursuz bir modern aile.",
    "awards": "22 Emmy Ödülü (5 Yıl Üst Üste En İyi Komedi)",
    "summary": "Birbiriyle akraba olan üç farklı aile yapısının komik ve sıcak hikayesi: Zengin yaşlı Jay Pritchett ile genç Kolombiyalı eşi Gloria; geleneksel çekirdek aile Phil ve Claire Dunphy çifti; evlat edindikleri bebekle eşcinsel çift Mitchell ve Cameron. Belgesel tarzı röportajlarla aile dinamiklerini kahkahalarla ekrana yansıtan fenomen dizi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzFlOWFjNzQtODViNC00NzgzLThhZmItZTc1N2VlZDgwODUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzFlOWFjNzQtODViNC00NzgzLThhZmItZTc1N2VlZDgwODUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailerYoutubeId": "a9s0DCxI7G8",
    "isFeatured": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "disney"
    ],
    "moods": [
      "chill-comedy",
      "heartwarming"
    ],
    "themeColor": "#0284c7"
  },
  {
    "id": "ted-lasso",
    "title": "Ted Lasso",
    "originalTitle": "Ted Lasso",
    "year": 2020,
    "imdbRating": 8.8,
    "imdbVotes": "350K",
    "duration": "3 Sezon",
    "ageRating": "16+",
    "isSeries": true,
    "genres": [
      "Komedi",
      "Dram",
      "Spor"
    ],
    "director": "Brendan Hunt, Joe Kelly, Bill Lawrence",
    "cast": [
      "Jason Sudeikis",
      "Hannah Waddingham",
      "Brett Goldstein",
      "Juno Temple"
    ],
    "tagline": "İnanmaya devam et (Believe).",
    "awards": "13 Emmy Ödülü",
    "summary": "Futbol (Amerikan futbolu) koçu olan iyimser ve güler yüzlü Ted Lasso, hiçbir şey bilmediği İngiliz Premier Ligi takımı AFC Richmond'ın başına teknik direktör olarak getirilir. Kulüp sahibinin takımı batırma niyetine rağmen Ted'in nezaketi, pozitif kurabiyeleri ve insanlara olan inancı tüm soyunma odasını ve kasabayı kökten değiştirir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BM2ZlYTU0YWUtMzY4OC00N2JkLTk1ZGQtN2UxNWJhMTBkMzM4XkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BM2ZlYTU0YWUtMzY4OC00N2JkLTk1ZGQtN2UxNWJhMTBkMzM4XkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    "trailerYoutubeId": "3u7EIiohs6U",
    "isFeatured": false,
    "platforms": [],
    "globalPlatforms": [
      "apple"
    ],
    "moods": [
      "chill-comedy",
      "heartwarming",
      "prestige"
    ],
    "themeColor": "#facc15"
  },
  {
    "id": "free-guy",
    "title": "Free Guy",
    "originalTitle": "Free Guy",
    "year": 2021,
    "imdbRating": 7.1,
    "imdbVotes": "420K",
    "duration": "1s 55dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Aksiyon",
      "Bilim Kurgu"
    ],
    "director": "Shawn Levy",
    "cast": [
      "Ryan Reynolds",
      "Jodie Comer",
      "Taika Waititi",
      "Joe Keery"
    ],
    "tagline": "Hayat bir oyun, ama sen arka plan karakteri olmak zorunda değilsin.",
    "awards": "Oscar Adayı (Görsel Efekt)",
    "summary": "Free City adlı açık dünya video oyununda banka memuru olarak yaşayan Guy, her gün aynı rutinle soygunlara maruz kalan bir arka plan NPC'sidir. Bir gün gözlüklü bir kadın oyuncuya aşık olup bir oyuncunun gözlüğünü çalmasıyla kendi kodunun dışına çıkarak oyunun ve kendi kaderinin kahramanı haline gelir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "trailerYoutubeId": "X2m-08c80EY",
    "isFeatured": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "disney"
    ],
    "moods": [
      "chill-comedy",
      "escapism"
    ],
    "themeColor": "#38bdf8"
  },
  {
    "id": "jump-street-21",
    "title": "Liseli Polisler",
    "originalTitle": "21 Jump Street",
    "year": 2012,
    "imdbRating": 7.2,
    "imdbVotes": "580K",
    "duration": "1s 49dk",
    "ageRating": "16+",
    "genres": [
      "Komedi",
      "Aksiyon"
    ],
    "director": "Phil Lord, Christopher Miller",
    "cast": [
      "Jonah Hill",
      "Channing Tatum",
      "Brie Larson",
      "Dave Franco",
      "Ice Cube"
    ],
    "tagline": "Genç görünüyorsunuz, okula geri dönüyorsunuz.",
    "awards": "BMI Film Müzik Ödülü",
    "summary": "Polis akademisinde güçlerini birleştiren lise düşmanı iki genç Schmidt ve Jenko, sokak devriyesinde başarısız olunca gizli operasyonlar için eski bir kilisede konuşlanan '21 Jump Street' birimine atanır. Görevleri, sentetik bir uyuşturucunun kaynağını bulmak için liseli kılığına girip okula sızmaktır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "RLoKtb4c4W0",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#f97316"
  },
  {
    "id": "the-mask",
    "title": "Maske",
    "originalTitle": "The Mask",
    "year": 1994,
    "imdbRating": 6.9,
    "imdbVotes": "440K",
    "duration": "1s 41dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Fantastik"
    ],
    "director": "Chuck Russell",
    "cast": [
      "Jim Carrey",
      "Cameron Diaz",
      "Peter Riegert"
    ],
    "tagline": "Sıfırdan süper kahramana: Biri beni durdursun!",
    "awards": "Oscar Adaylığı (En İyi Görsel Efekt)",
    "summary": "Kendi halinde, ezik ve iyi niyetli banka memuru Stanley Ipkiss, nehirde bulduğu antik İskandinav yaramazlık tanrısı Loki'ye ait tahta maskeyi yüzüne taktığında, fizik kurallarını ve ahlaki sınırları hiçe sayan yeşil yüzlü, çizgi film güçlerine sahip hiperaktif bir alter-egoya dönüşür.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailerYoutubeId": "hOqVRwGVUkA",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#22c55e"
  },
  {
    "id": "rick-and-morty",
    "title": "Rick and Morty",
    "originalTitle": "Rick and Morty",
    "year": 2013,
    "imdbRating": 9,
    "imdbVotes": "620K",
    "duration": "7 Sezon",
    "ageRating": "18+",
    "isSeries": true,
    "genres": [
      "Animasyon",
      "Komedi",
      "Bilim Kurgu"
    ],
    "director": "Dan Harmon, Justin Roiland",
    "cast": [
      "Justin Roiland",
      "Chris Parnell",
      "Spencer Grammer",
      "Sarah Chalke"
    ],
    "tagline": "Wubba Lubba Dub Dub!",
    "awards": "2 Emmy Ödülü (En İyi Animasyon)",
    "summary": "Evrenin en zeki, en sorumsuz ve alkolik bilim insanı Rick Sanchez ile onun saf, endişeli torunu Morty'nin paralel boyutlar, alternatif gerçeklikler ve uzayın en tehlikeli köşelerinde geçen akıl almaz absürt maceraları. Hem nihilist felsefesi hem de çılgın kahkahalarıyla bir animasyon başyapıtı.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "WNhH00OIPP0",
    "isFeatured": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy",
      "mind-bending"
    ],
    "themeColor": "#10b981",
    "featuredBadge": "IMDb 9.0 Çılgınlık"
  },
  {
    "id": "cinayet-susu",
    "title": "Cinayet Süsü",
    "originalTitle": "Cinayet Süsü",
    "year": 2019,
    "imdbRating": 6.6,
    "imdbVotes": "28K",
    "duration": "1s 52dk",
    "ageRating": "16+",
    "genres": [
      "Komedi",
      "Suç",
      "Gizem"
    ],
    "director": "Ali Atay",
    "cast": [
      "Uğur Yücel",
      "Binnur Kaya",
      "Cengiz Bozkurt",
      "Feyyaz Yiğit",
      "Mert Denizmen"
    ],
    "tagline": "Katil bir dahi, ekip ise biraz kafası karışık.",
    "awards": "Sadri Alışık Sinema Ödülleri",
    "summary": "İstanbul Emniyeti Cinayet Büro'nun deneyimli başkomiseri Emin ve ekibi, kurbanlarını tuhaf sanat eserleri gibi süsleyen gizemli bir seri katilin peşine düşer. Olay yerine gelen suç uzmanı Dizdar Koşu'nun absürt teorileri, ekibin beceriksizlikleri ve ardı arkası kesilmeyen yanlış anlamalarla katili yakalama görevi tam bir komedi fiyaskosuna dönüşür.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjA1YjQxM2YtNjBmZi00ZDQ0LTlhZGMtNTVhYjRiNjRhM2VkXkEyXkFqcGc@._V1_SX300.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjA1YjQxM2YtNjBmZi00ZDQ0LTlhZGMtNTVhYjRiNjRhM2VkXkEyXkFqcGc@._V1_SX300.jpg",
    "trailerYoutubeId": "y3qj69V1T9k",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#e50914"
  },
  {
    "id": "shaun-of-the-dead",
    "title": "Zombilerin Şafağı",
    "originalTitle": "Shaun of the Dead",
    "year": 2004,
    "imdbRating": 7.9,
    "imdbVotes": "580K",
    "duration": "1s 39dk",
    "ageRating": "18+",
    "genres": [
      "Komedi",
      "Korku"
    ],
    "director": "Edgar Wright",
    "cast": [
      "Simon Pegg",
      "Nick Frost",
      "Kate Ashfield",
      "Bill Nighy"
    ],
    "tagline": "Bir aşk, bir dostluk ve birkaç bin zombi.",
    "awards": "BAFTA Ödülleri Adayı",
    "summary": "Londra'da elektronik eşya mağazasında çalışan ve hayatında hiçbir hedefi olmayan 30 yaşındaki Shaun, kız arkadaşı Liz tarafından terk edilir. Tam hayatını düzene sokmaya karar verdiği gün Londra sokaklarını bir zombi istilası sarar. Shaun ve tembel ev arkadaşı Ed, annesini ve Liz'i kurtarıp en sevdikleri pub The Winchester'a sığınmak için absürt bir mücadeleye girişir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailerYoutubeId": "LIFh924GeQQ",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "chill-comedy"
    ],
    "themeColor": "#b91c1c"
  },
  {
    "id": "the-green-mile",
    "title": "Yeşil Yol",
    "originalTitle": "The Green Mile",
    "year": 1999,
    "imdbRating": 8.6,
    "imdbVotes": "1.4M",
    "duration": "3s 9dk",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Fantastik",
      "Suç"
    ],
    "director": "Frank Darabont",
    "cast": [
      "Tom Hanks",
      "Michael Clarke Duncan",
      "David Morse",
      "Sam Rockwell"
    ],
    "tagline": "Mucizeler bazen en karanlık yerlerde gerçekleşir.",
    "awards": "4 Oscar Adaylığı",
    "summary": "1935 yılında Cold Mountain Cezaevi'nin idam koğuşunda (Yeşil Yol) başgardiyanlık yapan Paul Edgecomb, iki küçük kızı öldürmekle suçlanan devasa cüsseli siyahi mahkum John Coffey ile tanışır. Coffey, görünüşünün aksine çocuksu bir saflığa ve dokunuşuyla insanları iyileştiren doğaüstü bir güce sahiptir. Paul, masum olduğuna inandığı bu kutsal ruhu elektrikli sandalyeden kurtarmak ile görevi arasında kahredici bir ahlaki ikileme düşer.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "Ki4haFrqSrw",
    "isFeatured": true,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "tearjerker",
      "prestige"
    ],
    "themeColor": "#22c55e",
    "featuredBadge": "IMDb #27 Başyapıt"
  },
  {
    "id": "life-is-beautiful",
    "title": "Hayat Güzeldir",
    "originalTitle": "La Vita è Bella",
    "year": 1997,
    "imdbRating": 8.6,
    "imdbVotes": "750K",
    "duration": "1s 56dk",
    "ageRating": "13+",
    "genres": [
      "Dram",
      "Komedi",
      "Savaş"
    ],
    "director": "Roberto Benigni",
    "cast": [
      "Roberto Benigni",
      "Nicoletta Braschi",
      "Giorgio Cantarini"
    ],
    "tagline": "Sevginin ve hayal gücünün en karanlık zulme zaferi.",
    "awards": "3 Oscar Ödülü (En İyi Erkek Oyuncu & Yabancı Film)",
    "summary": "1930'lar İtalya'sında neşeli kitapçı Guido, Dora ile evlenip minik oğulları Giosuè ile mutlu bir yuva kurar. Ancak Nazi işgali sırasında Yahudi oldukları için toplama kampına sürülürler. Guido, küçük oğlunun kamptaki vahşeti ve ölümü fark edip travma yaşamaması için ona her şeyin 1000 puan toplayanın gerçek bir tank kazanacağı dev bir saklambaç oyunu olduğunu söyler. Babalık sevgisinin sinema tarihindeki en dokunaklı anıtı.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailerYoutubeId": "pAYEQP8gx3w",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "tearjerker",
      "heartwarming",
      "prestige"
    ],
    "themeColor": "#eab308"
  },
  {
    "id": "the-pianist",
    "title": "Piyanist",
    "originalTitle": "The Pianist",
    "year": 2002,
    "imdbRating": 8.5,
    "imdbVotes": "920K",
    "duration": "2s 30dk",
    "ageRating": "16+",
    "genres": [
      "Biyografi",
      "Dram",
      "Müzik"
    ],
    "director": "Roman Polanski",
    "cast": [
      "Adrien Brody",
      "Thomas Kretschmann",
      "Frank Finlay"
    ],
    "tagline": "Müzik onun tek sığınağıydı.",
    "awards": "3 Oscar Ödülü (En İyi Yönetmen & Erkek Oyuncu), Altın Palmiye",
    "summary": "Polonyalı yetenekli piyanist Wladyslaw Szpilman'ın gerçek hayat hikayesi. 1939'da Varşova Radyosu'nda Chopin çalarken düşen bombalarla başlayan Nazi işgalinde ailesini ölüm kamplarına kaybeden Szpilman, Varşova gettosunun harabeleri arasında açlık, dondurucu soğuk ve yalnızlıkla tek başına savaşır. Yıkıntılar arasında piyano tuşlarına dokunarak insanlık onurunu ve hayatta kalma arzusunu korur.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    "trailerYoutubeId": "BFwGqLa_oAo",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "tearjerker",
      "prestige"
    ],
    "themeColor": "#64748b"
  },
  {
    "id": "schindlers-list",
    "title": "Schindler'in Listesi",
    "originalTitle": "Schindler's List",
    "year": 1993,
    "imdbRating": 9,
    "imdbVotes": "1.5M",
    "duration": "3s 15dk",
    "ageRating": "18+",
    "genres": [
      "Biyografi",
      "Dram",
      "Tarih"
    ],
    "director": "Steven Spielberg",
    "cast": [
      "Liam Neeson",
      "Ben Kingsley",
      "Ralph Fiennes"
    ],
    "tagline": "Bir canı kurtaran, bütün dünyayı kurtarmış gibidir.",
    "awards": "7 Oscar Ödülü (En İyi Film & Yönetmen)",
    "summary": "2. Dünya Savaşı sırasında Polonya'da orduya emaye eşya üreten fabrikasında Yahudi işçileri çalıştırarak zenginleşmeyi hedefleyen fırsatçı Alman sanayici Oskar Schindler, Nazi partisinin Yahudilere yönelik insanlık dışı katliamlarına tanık oldukça servetini ve canını feda ederek 1100'den fazla insanı gaz odalarından kurtarmak için hayatının en büyük vicdan mücadelesini verir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "gG22XNhtnoY",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "tearjerker",
      "prestige"
    ],
    "themeColor": "#e50914"
  },
  {
    "id": "good-will-hunting",
    "title": "Can Dostum",
    "originalTitle": "Good Will Hunting",
    "year": 1997,
    "imdbRating": 8.3,
    "imdbVotes": "1.1M",
    "duration": "2s 6dk",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Romantik"
    ],
    "director": "Gus Van Sant",
    "cast": [
      "Robin Williams",
      "Matt Damon",
      "Ben Affleck",
      "Stellan Skarsgård",
      "Minnie Driver"
    ],
    "tagline": "Hayatının dönüm noktasında bir dostun fısıltısı.",
    "awards": "2 Oscar Ödülü (Robin Williams & Özgün Senaryo)",
    "summary": "MIT üniversitesinde hademelik yapan 20 yaşındaki Will Hunting, koridordaki tahtaya yazılan imkansız matematik denklemlerini gizlice çözen dahi bir gençtir. Ancak çocukluk travmaları, öfke patlamaları ve tutuklanma riski yüzünden geleceğini çöpe atmaktadır. Bir profesörün yönlendirmesiyle dul terapist Sean Maguire ile seanslara başlar. Sean'ın 'Bu senin suçun değil' diyerek Will'in kabuğunu kırdığı sahne sinema tarihinin en unutulmaz duygusal anlarından biridir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzJkNmZiMDEtNjg2Yi00ZDljLWJjZGQtZGFiMTExZjMyMTljXkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_SX300.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzJkNmZiMDEtNjg2Yi00ZDljLWJjZGQtZGFiMTExZjMyMTljXkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_SX300.jpg",
    "trailerYoutubeId": "PaAVLWF8V4U",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "tearjerker",
      "heartwarming",
      "prestige"
    ],
    "themeColor": "#38bdf8"
  },
  {
    "id": "babam-ve-oglum",
    "title": "Babam ve Oğlum",
    "originalTitle": "Babam ve Oğlum",
    "year": 2005,
    "imdbRating": 8.2,
    "imdbVotes": "92K",
    "duration": "1s 52dk",
    "ageRating": "13+",
    "genres": [
      "Dram",
      "Aile"
    ],
    "director": "Çağan Irmak",
    "cast": [
      "Fikret Kuşkan",
      "Çetin Tekindor",
      "Hümeyra",
      "Ege Tanman",
      "Yetkin Dikinciler"
    ],
    "tagline": "Evlatlar babalarının çizdiği yollarda yürür.",
    "awards": "İstanbul Film Festivali En İyi Film",
    "summary": "12 Eylül darbesinin yaşandığı gece annesi doğumda ölen minik Deniz, gazeteci babası Sadık tarafından büyütülür. Sadık hapishane işkenceleri yüzünden amansız bir hastalığa yakalanınca, yıllar önce üniversiteye giderken kavga edip bağlarını kopardığı Ege'deki küs çiftlik sahibi babası Hüseyin Efendi'nin yanına oğlunu emanet etmek için döner. Türk sinemasının mendil ıslatan en büyük aile dramı.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDE3MTBkNmQtNGFjMC00YTcwLWExY2ItN2MyMGZkNWJlMmFmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDE3MTBkNmQtNGFjMC00YTcwLWExY2ItN2MyMGZkNWJlMmFmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "s3G5vB27B5M",
    "isFeatured": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "tearjerker"
    ],
    "themeColor": "#e11d48",
    "featuredBadge": "Milli Başyapıt"
  },
  {
    "id": "ayla",
    "title": "Ayla",
    "originalTitle": "Ayla: The Daughter of War",
    "year": 2017,
    "imdbRating": 8.3,
    "imdbVotes": "44K",
    "duration": "2s 5dk",
    "ageRating": "13+",
    "genres": [
      "Biyografi",
      "Dram",
      "Tarih"
    ],
    "director": "Can Ulkay",
    "cast": [
      "İsmail Hacıoğlu",
      "Kim Seol",
      "Çetin Tekindor",
      "Ali Atay",
      "Murat Yıldırım"
    ],
    "tagline": "Savaşın ortasında yeşeren gerçek bir baba-kız aşkı.",
    "awards": "Uluslararası Festivallerde 12 Ödül",
    "summary": "1950 Kore Savaşı'nda Türk Tugayı'nda görevli Astsubay Süleyman Dilbirliği, savaş alanında donmak üzere olan 5 yaşındaki öksüz bir Koreli minik kız çocuğu bulur. Ona 'Ayla' adını verip 15 ay boyunca kendi evladı gibi kışlada bakar ve bağrına basar. Türkiye'ye dönüş vakti geldiğinde kanunlar gereği Ayla'yı getiremeyip yetimhaneye bırakmak zorunda kalması ve 60 yıl sonra tekrar birbirlerine sarılmaları gözyaşlarını sel gibi akıtan gerçek bir destandır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDRhYTNiMjMtY2U1OC00NWIwLTk0MTEtMDY1NTMxZDExYjBmXkEyXkFqcGc@._V1_QL75_UY562_CR13,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDRhYTNiMjMtY2U1OC00NWIwLTk0MTEtMDY1NTMxZDExYjBmXkEyXkFqcGc@._V1_QL75_UY562_CR13,0,380,562_.jpg",
    "trailerYoutubeId": "yW3eR6XkFv8",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "tearjerker",
      "heartwarming"
    ],
    "themeColor": "#ef4444"
  },
  {
    "id": "miracle-in-cell-no-7",
    "title": "7. Koğuştaki Mucize",
    "originalTitle": "7. Koğuştaki Mucize",
    "year": 2019,
    "imdbRating": 8.2,
    "imdbVotes": "55K",
    "duration": "2s 12dk",
    "ageRating": "16+",
    "genres": [
      "Dram"
    ],
    "director": "Mehmet Ada Öztekin",
    "cast": [
      "Aras Bulut İynemli",
      "Nisa Sofiya Aksongur",
      "Deniz Baysal",
      "İlker Aksum"
    ],
    "tagline": "Lingo lingo şişeler...",
    "awards": "Türkiye Gişe Rekortmeni (5.3 Milyon Seyirci)",
    "summary": "1983 yılında bir Ege kasabasında kızı Ova ile aynı zeka yaşına sahip zihinsel engelli Memo, bir komutanın kızının kazara kayalıklardan düşüp ölmesi üzerine haksız yere cinayetle suçlanıp idama mahkum edilir. Sıkıyönetim hapishanesindeki en sert mahkumların bulunduğu 7. koğuşa atılan Memo'nun saflığı ve kızına olan aşkı, koğuş arkadaşlarının kalbini yumuşatır ve Memo ile Ova'yı kavuşturmak için hayatlarını ortaya koydukları bir mucize planı başlatılır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTEyZTQ4YWItMzNkNi00MTUwLWEyODAtMWI3NDNhNDRiYmQwXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTEyZTQ4YWItMzNkNi00MTUwLWEyODAtMWI3NDNhNDRiYmQwXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "trailerYoutubeId": "tV_vKk0Z9Jg",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix"
    ],
    "moods": [
      "tearjerker"
    ],
    "themeColor": "#f59e0b"
  },
  {
    "id": "hachiko",
    "title": "Hachiko: Bir Köpeğin Hikayesi",
    "originalTitle": "Hachi: A Dog's Tale",
    "year": 2009,
    "imdbRating": 8.1,
    "imdbVotes": "320K",
    "duration": "1s 33dk",
    "ageRating": "Genel İzleyici",
    "genres": [
      "Biyografi",
      "Dram",
      "Aile"
    ],
    "director": "Lasse Hallström",
    "cast": [
      "Richard Gere",
      "Joan Allen",
      "Cary-Hiroyuki Tagawa"
    ],
    "tagline": "Sadakat hiçbir zaman ölmez.",
    "awards": "Seppey Uluslararası Film Festivali",
    "summary": "Üniversite müzik profesörü Parker Wilson, tren istasyonunda terk edilmiş yavru bir Japon Akita cinsi köpek bulur ve ona 'Hachi' adını verir. Hachi her sabah profesörü tren istasyonuna kadar uğurlar ve her akşam tam 17:00'de onu kapıda karşılar. Bir gün profesör üniversitede kalp krizi geçirip hayatını kaybettiğinde, Hachi hiçbir yere ayrılmadan tam 10 yıl boyunca kışın karda, yazın sıcakta her gün aynı saatte sahibini beklemeye devam eder.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTU5NjYyYTgtZGQ3My00MzRhLThjNGYtZmVjN2JjYjhkMjhhXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTU5NjYyYTgtZGQ3My00MzRhLThjNGYtZmVjN2JjYjhkMjhhXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailerYoutubeId": "Y6U728AZnV0",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "tearjerker",
      "heartwarming"
    ],
    "themeColor": "#f59e0b"
  },
  {
    "id": "grave-of-the-fireflies",
    "title": "Ateşböceklerinin Mezarı",
    "originalTitle": "Hotaru no Haka (Grave of the Fireflies)",
    "year": 1988,
    "imdbRating": 8.5,
    "imdbVotes": "330K",
    "duration": "1s 29dk",
    "ageRating": "16+",
    "genres": [
      "Animasyon",
      "Dram",
      "Savaş"
    ],
    "director": "Isao Takahata (Studio Ghibli)",
    "cast": [
      "Tsutomu Tatsumi",
      "Ayano Shiraishi",
      "Yoshiko Shinohara"
    ],
    "tagline": "Ateşböcekleri neden bu kadar çabuk ölmek zorunda?",
    "awards": "Blue Ribbon Ödülü, Chicago Çocuk Filmleri Festivali",
    "summary": "2. Dünya Savaşı'nın son aylarında Japonya'nın Kobe kenti Amerikan yangın bombalarıyla kül olurken, annelerini kaybeden 14 yaşındaki Seita ile 4 yaşındaki minik kız kardeşi Setsuko'nun hayatta kalma mücadelesi. Terk edilmiş bir sığınakta ateşböceklerinin ışığında hayal kurarak açlık ve çaresizlikle savaşan iki masum çocuğun hikayesi, sinema tarihinin insanı en derinden sarsan ve gözyaşı döktüren animasyonudur.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "4vPeTSRd580",
    "isFeatured": false,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "anime",
      "netflix"
    ],
    "moods": [
      "tearjerker",
      "prestige"
    ],
    "themeColor": "#ef4444"
  },
  {
    "id": "eternal-sunshine",
    "title": "Sil Baştan",
    "originalTitle": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "imdbRating": 8.3,
    "imdbVotes": "1.1M",
    "duration": "1s 48dk",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Romantik",
      "Bilim Kurgu"
    ],
    "director": "Michel Gondry",
    "cast": [
      "Jim Carrey",
      "Kate Winslet",
      "Kirsten Dunst",
      "Mark Ruffalo",
      "Elijah Wood"
    ],
    "tagline": "Onu aklından silebilirsin, ama kalbinden asla.",
    "awards": "Oscar Ödülü (En İyi Özgün Senaryo - Charlie Kaufman)",
    "summary": "İki yıl süren fırtınalı ilişkilerinin ardından Clementine'ın Lacuna adlı deneysel bir kliniğe giderek Joel ile ilgili tüm hatıralarını beyninden sildirdiğini öğrenen Joel, kırık kalbiyle aynı işlemi yaptırmaya karar verir. Ancak hafızası geriye doğru taranıp Clementine ile tanıştığı en saf, en güzel anlara ulaşıldığında Joel silme işlemini durdurmaya çalışır ve bilinçaltının derinliklerinde sevdiği kadını saklamak için umutsuz bir kaçış başlatır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "07-QBnEkgXU",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "tearjerker",
      "mind-bending",
      "prestige"
    ],
    "themeColor": "#06b6d4"
  },
  {
    "id": "manchester-by-the-sea",
    "title": "Yaşamın Kıyısında",
    "originalTitle": "Manchester by the Sea",
    "year": 2016,
    "imdbRating": 7.8,
    "imdbVotes": "330K",
    "duration": "2s 17dk",
    "ageRating": "16+",
    "genres": [
      "Dram"
    ],
    "director": "Kenneth Lonergan",
    "cast": [
      "Casey Affleck",
      "Michelle Williams",
      "Kyle Chandler",
      "Lucas Hedges"
    ],
    "tagline": "Bazı acılar atlatılamaz, sadece taşınır.",
    "awards": "2 Oscar Ödülü (Casey Affleck & En İyi Senaryo)",
    "summary": "Boston'da kapıcılık yaparak yalnız ve içine kapanık bir hayat süren Lee Chandler, ağabeyinin ani ölümü üzerine memleketi Manchester-by-the-Sea'ye döner. Ağabeyinin 16 yaşındaki oğlu Patrick'in yasal vasisi olarak atandığını öğrenen Lee, yıllar önce kasabayı terk etmesine neden olan ve kendi ailesini yok eden kahredici yangın trajedisiyle ve eski eşi Randi ile yüzleşmek zorunda kalır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "gsVoD0zmpe8",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "tearjerker",
      "prestige"
    ],
    "themeColor": "#475569"
  },
  {
    "id": "the-father",
    "title": "Baba",
    "originalTitle": "The Father",
    "year": 2020,
    "imdbRating": 8.2,
    "imdbVotes": "200K",
    "duration": "1s 37dk",
    "ageRating": "13+",
    "genres": [
      "Dram",
      "Gizem"
    ],
    "director": "Florian Zeller",
    "cast": [
      "Anthony Hopkins",
      "Olivia Colman",
      "Mark Gatiss",
      "Imogen Poots"
    ],
    "tagline": "Zihnin labirentinde kaybolan bir ömür.",
    "awards": "2 Oscar Ödülü (Anthony Hopkins & Uyarlama Senaryo)",
    "summary": "80 yaşındaki Anthony, Londra'daki dairesinde yalnız yaşamayı ısrarla sürdüren bağımsız bir adamdır. Ancak ilerleyen demans hastalığı nedeniyle kızı Anne'i, damadını ve hatta içinde bulunduğu odayı tanıyamaz hale gelir. İzleyiciyi doğrudan demanslı bir hastanın gözünden dünyaya baktıran film, Anthony'nin zaman algısını, mekanları ve anılarını yitirirken 'tüm yapraklarımı döküyorum' diyerek annesini aradığı final sahnesiyle kalpleri paramparça eder.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTQzY2M5ZmUtZjBkNi00NTAzLTgzMTItODJlMzhhMDI5OGRhXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTQzY2M5ZmUtZjBkNi00NTAzLTgzMTItODJlMzhhMDI5OGRhXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "4TZb33mTcqA",
    "isFeatured": false,
    "platforms": [
      "hbo"
    ],
    "hubTags": [
      "hbo"
    ],
    "moods": [
      "tearjerker",
      "prestige",
      "mind-bending"
    ],
    "themeColor": "#8b5cf6"
  },
  {
    "id": "memento",
    "title": "Akıl Defteri",
    "originalTitle": "Memento",
    "year": 2000,
    "imdbRating": 8.4,
    "imdbVotes": "1.3M",
    "duration": "1s 53dk",
    "ageRating": "16+",
    "genres": [
      "Gizem",
      "Gerilim"
    ],
    "director": "Christopher Nolan",
    "cast": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano"
    ],
    "tagline": "Bazı şeyleri hatırlamak için unutman gerekir.",
    "awards": "2 Oscar Adaylığı, Bağımsız Ruh Ödülleri",
    "summary": "Eski bir sigorta müfettişi olan Leonard Shelby, karısının vahşice öldürüldüğü saldırı sırasında kafasına aldığı darbe yüzünden kısa süreli hafıza kaybı hastalığına (anterograd amnezi) yakalanmıştır. 15 dakikada bir her şeyi unutan Leonard, karısının katilini bulabilmek için önemli bilgileri polaroid fotoğraflarla belgeler ve vücuduna dövme olarak kazır. Biri sondan başa, diğeri baştan sona ilerleyen iki zaman kurgusuyla sinema tarihinin en büyük akıl oyunudur.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZmJlNzYxMmMtMzQ2YS00NTM5LWJjMjYtMzRmY2NhNDZkMjE1XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZmJlNzYxMmMtMzQ2YS00NTM5LWJjMjYtMzRmY2NhNDZkMjE1XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg",
    "trailerYoutubeId": "4CV41hoyS8A",
    "isFeatured": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "mind-bending",
      "thrill",
      "prestige"
    ],
    "themeColor": "#a855f7",
    "featuredBadge": "Nolan Zirvesi"
  },
  {
    "id": "shutter-island",
    "title": "Zindan Adası",
    "originalTitle": "Shutter Island",
    "year": 2010,
    "imdbRating": 8.2,
    "imdbVotes": "1.5M",
    "duration": "2s 18dk",
    "ageRating": "16+",
    "genres": [
      "Gizem",
      "Gerilim"
    ],
    "director": "Martin Scorsese",
    "cast": [
      "Leonardo DiCaprio",
      "Mark Ruffalo",
      "Ben Kingsley",
      "Michelle Williams"
    ],
    "tagline": "Bir canavar olarak yaşamak mı, yoksa iyi bir insan olarak ölmek mi?",
    "awards": "National Board of Review Top 10",
    "summary": "1954 yılında ABD Mareşali Teddy Daniels ve yeni ortağı Chuck, Boston açıklarındaki Ashecliffe Akıl Hastanesi'nden gizemli bir şekilde kaybolan çocuk katili Rachel Solando'yu araştırmak üzere fırtınalı bir günde Zindan Adası'na gelir. Ancak ada fırtına yüzünden dış dünyaya kapandıkça Teddy, hastanede hastalar üzerinde yasa dışı beyin deneyleri yapıldığını ve geçmişindeki karanlık travmalarla ada doktorlarının akıl almaz bir psikolojik komplosu arasında sıkıştığını anlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "5iaYLCiq5RM",
    "isFeatured": true,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "mind-bending",
      "thrill"
    ],
    "themeColor": "#8b5cf6",
    "featuredBadge": "Efsanevi Ters Köşe"
  },
  {
    "id": "tenet",
    "title": "Tenet",
    "originalTitle": "Tenet",
    "year": 2020,
    "imdbRating": 7.3,
    "imdbVotes": "560K",
    "duration": "2s 30dk",
    "ageRating": "16+",
    "genres": [
      "Aksiyon",
      "Bilim Kurgu",
      "Gerilim"
    ],
    "director": "Christopher Nolan",
    "cast": [
      "John David Washington",
      "Robert Pattinson",
      "Elizabeth Debicki",
      "Kenneth Branagh"
    ],
    "tagline": "Zaman akıp gitmez, tersine çevrilir.",
    "awards": "1 Oscar Ödülü (En İyi Görsel Efekt)",
    "summary": "Kendisine yalnızca 'Kahraman' denilen gizli bir ajan, insanlığı 3. Dünya Savaşı'ndan daha büyük bir felaketten (gelecekten geçmişe yönelik zaman entropisinin tersine çevrilmesi) kurtarmak için uluslararası bir casusluk operasyonuna seçilir. Mermilerin hedeften silaha geri döndüğü, zamanın ileri ve geri aynı anda aktığı bu zihin yakan kuantum labirentinde Neil ile birlikte Rus oligark Andrei Sator'un kıyamet algoritmasını durdurmak zorundadırlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "LdOM0x0WVSc",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "wb",
      "prime"
    ],
    "moods": [
      "mind-bending",
      "adrenaline"
    ],
    "themeColor": "#38bdf8"
  },
  {
    "id": "severance",
    "platforms": ["apple"],
    "title": "Severance",
    "originalTitle": "Severance",
    "year": 2022,
    "imdbRating": 8.7,
    "imdbVotes": "220K",
    "duration": "1 Sezon",
    "ageRating": "18+",
    "isSeries": true,
    "genres": [
      "Dram",
      "Gizem",
      "Bilim Kurgu"
    ],
    "director": "Ben Stiller, Aoife McArdle",
    "cast": [
      "Adam Scott",
      "Zach Cherry",
      "Britt Lower",
      "Patricia Arquette",
      "John Turturro"
    ],
    "tagline": "İş hayatınız ve kişisel hayatınız birbirinden tamamen kopsaydı?",
    "awards": "2 Emmy Ödülü, AFI Yılın Televizyon Programı",
    "summary": "Lumon Industries adlı gizemli biyoteknoloji şirketinde çalışan Mark Scout, 'ayrılma' (severance) adı verilen cerrahi bir beyin operasyonunu kabul etmiştir. Bu operasyon sayesinde çalışanlar işteyken kişisel hayatlarını, dışarıdayken ise işte ne yaptıklarını hiçbir şekilde hatırlamazlar. Ancak Mark'ın işteki benliği ('innie') şirketin karanlık sırlarını çözmeye başladığında, iki benlik arasındaki perde yırtılır ve tüyler ürpertici bir isyan başlar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "xEQP4VVuyrY",
    "isFeatured": true,
    "globalPlatforms": [
      "apple"
    ],
    "moods": [
      "mind-bending",
      "thrill",
      "prestige"
    ],
    "themeColor": "#06b6d4",
    "featuredBadge": "Beyin Yakan Başyapıt"
  },
  {
    "id": "coherence",
    "title": "Paralel Evren",
    "originalTitle": "Coherence",
    "year": 2013,
    "imdbRating": 7.2,
    "imdbVotes": "160K",
    "duration": "1s 29dk",
    "ageRating": "16+",
    "genres": [
      "Gizem",
      "Bilim Kurgu",
      "Gerilim"
    ],
    "director": "James Ward Byrkit",
    "cast": [
      "Emily Baldoni",
      "Maury Sterling",
      "Nicholas Brendon"
    ],
    "tagline": "Bu gece yalnız değilsiniz... kendinizle berabersiniz.",
    "awards": "Austin Fantastic Fest En İyi Senaryo",
    "summary": "Miller kuyruklu yıldızının Dünya'ya en yakın geçtiği gece, sekiz yakın arkadaş bir akşam yemeğinde toplanır. Aniden tüm mahallenin elektriği kesilir ve sadece iki sokak ötedeki tek bir evin ışıkları yanar. Kontrol etmek için oraya gidenler, masasında kendileri gibi oturan kendi kopyalarını görürler. Schrödinger'in kedisi deneyinin gerçek hayata taşındığı, sonsuz paralel boyutların birbirine karıştığı dâhiyane bir düşük bütçeli bilimkurgu.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "sEceDz1Rodc",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "mind-bending",
      "thrill"
    ],
    "themeColor": "#6366f1"
  },
  {
    "id": "donnie-darko",
    "title": "Donnie Darko",
    "originalTitle": "Donnie Darko",
    "year": 2001,
    "imdbRating": 8,
    "imdbVotes": "850K",
    "duration": "1s 53dk",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Gizem",
      "Bilim Kurgu"
    ],
    "director": "Richard Kelly",
    "cast": [
      "Jake Gyllenhaal",
      "Jena Malone",
      "Drew Barrymore",
      "Patrick Swayze"
    ],
    "tagline": "Dünyanın sonuna 28 gün, 6 saat, 42 dakika ve 12 saniye kaldı.",
    "awards": "Toronto Film Festivali Özel Gösterim",
    "summary": "1988 yılında sorunlu bir banliyö genci olan Donnie Darko, bir gece uyurgezer olarak evden çıktığı sırada odasının tavanına gökyüzünden nereden geldiği bilinmeyen dev bir jet motoru düşer. Bu ölümden onu kurtaran şey, kendisine dünyanın 28 gün sonra sona ereceğini fısıldayan Frank adında ürpertici dev bir tavşan kostümüdür. Paralel evrenler, solucan delikleri ve kader sorgusuyla kültleşmiş bir beyin fırtınası.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWE3NTYzZmEtM2U5MS00MDZhLTk2ZTQtZTgzNjg0ZGQ5ZjM0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMWE3NTYzZmEtM2U5MS00MDZhLTk2ZTQtZTgzNjg0ZGQ5ZjM0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "bzLn8sYeM9o",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "mind-bending",
      "thrill"
    ],
    "themeColor": "#a855f7"
  },
  {
    "id": "predestination",
    "title": "Kader",
    "originalTitle": "Predestination",
    "year": 2014,
    "imdbRating": 7.4,
    "imdbVotes": "310K",
    "duration": "1s 37dk",
    "ageRating": "16+",
    "genres": [
      "Aksiyon",
      "Dram",
      "Bilim Kurgu"
    ],
    "director": "Michael & Peter Spierig",
    "cast": [
      "Ethan Hawke",
      "Sarah Snook",
      "Noah Taylor"
    ],
    "tagline": "Yılan kendi kuyruğunu yutarsa...",
    "awards": "AACTA En İyi Yönetmen & Kadın Oyuncu",
    "summary": "Geçmişe ve geleceğe sıçrayarak suçları daha işlenmeden önce önlemekle görevli 'Zamansal Ajan', New York'ta binlerce masum insanın ölümüne neden olan 'Fiyasko Bombacısı' adlı teröristi durdurmak için son bir göreve çıkar. Bir barda barmen kılığına girdiğinde gizemli bir müşteriyle sohbet etmeye başlar. Zaman yolculuğu ve büyükbaba paradoksunun sinema tarihindeki en baş döndürücü ve ters köşe senaryolarından biri.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjcxZjhkOTAtNTAyMC00ZjAwLWJmODAtNDA0Mjc3YzZjMWYyXkEyXkFqcGc@._V1_SX300.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjcxZjhkOTAtNTAyMC00ZjAwLWJmODAtNDA0Mjc3YzZjMWYyXkEyXkFqcGc@._V1_SX300.jpg",
    "trailerYoutubeId": "xxG-YfedrUo",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "mind-bending",
      "thrill"
    ],
    "themeColor": "#8b5cf6"
  },
  {
    "id": "black-mirror",
    "title": "Black Mirror",
    "originalTitle": "Black Mirror",
    "year": 2011,
    "imdbRating": 8.7,
    "imdbVotes": "640K",
    "duration": "6 Sezon",
    "ageRating": "18+",
    "isSeries": true,
    "genres": [
      "Dram",
      "Gizem",
      "Bilim Kurgu"
    ],
    "director": "Charlie Brooker",
    "cast": [
      "Daniel Kaluuya",
      "Bryce Dallas Howard",
      "Jon Hamm",
      "Aaron Paul"
    ],
    "tagline": "Her ekran soğuk, karanlık bir aynadır.",
    "awards": "6 Primetime Emmy Ödülü",
    "summary": "Gelişen teknolojinin, yapay zekanın, sosyal medyanın ve sanal gerçekliğin insan doğasını nasıl manipüle ettiğini, ahlaki sınırları nasıl çürüttüğünü her bölümde bağımsız bir hikayeyle inceleyen distopik antoloji dizisi. Beyin yakan ters köşeleri ve sarsıcı karanlık öngörüleriyle televizyon tarihinin en çarpıcı bilimkurgusudur.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "2bVik34nWLY",
    "isFeatured": true,
    "platforms": [
      "netflix"
    ],
    "hubTags": [
      "netflix-originals",
      "netflix"
    ],
    "moods": [
      "mind-bending",
      "thrill"
    ],
    "themeColor": "#e50914",
    "featuredBadge": "Netflix Fenomeni"
  },
  {
    "id": "source-code",
    "title": "Yaşam Şifresi",
    "originalTitle": "Source Code",
    "year": 2011,
    "imdbRating": 7.5,
    "imdbVotes": "550K",
    "duration": "1s 33dk",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Gizem",
      "Bilim Kurgu"
    ],
    "director": "Duncan Jones",
    "cast": [
      "Jake Gyllenhaal",
      "Michelle Monaghan",
      "Vera Farmiga",
      "Jeffrey Wright"
    ],
    "tagline": "Bombayı bulmak için sadece 8 dakikan var.",
    "awards": "Saturn Ödülleri Adayı",
    "summary": "Yüzbaşı Colter Stevens, kendini bilmediği bir banliyö treninde Sean Fentress adlı bir öğretmenin bedeninde uyanırken bulur. Tam 8 dakika sonra tren büyük bir patlamayla havaya uçar. Stevens, askeri bir simülasyon olan 'Yaşam Şifresi' sayesinde ölen kişinin son 8 dakikalık anısına tekrar tekrar gönderilmektedir. Chicago'yu havaya uçuracak ikinci bombayı bulmak için her 8 dakikada bir treni baştan araştırmak zorundadır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "mnJegNyAb1w",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "mind-bending",
      "thrill",
      "adrenaline"
    ],
    "themeColor": "#38bdf8"
  },
  {
    "id": "mr-nobody",
    "title": "Bay Hiçkimse",
    "originalTitle": "Mr. Nobody",
    "year": 2009,
    "imdbRating": 7.7,
    "imdbVotes": "250K",
    "duration": "2s 21dk",
    "ageRating": "16+",
    "genres": [
      "Dram",
      "Fantastik",
      "Romantik",
      "Bilim Kurgu"
    ],
    "director": "Jaco Van Dormael",
    "cast": [
      "Jared Leto",
      "Sarah Polley",
      "Diane Kruger",
      "Linh Dan Pham"
    ],
    "tagline": "Her seçim, feda edilen diğer tüm hayat olasılıklarıdır.",
    "awards": "Venedik Film Festivali 2 Ödül",
    "summary": "2092 yılında genetik ölümsüzlüğün keşfedildiği bir gelecekte, 118 yaşındaki Nemo Nobody dünyada doğal yollardan ölecek son insandır. Bir gazeteci Nemo'nun anılarını kaydederken Nemo, tren istasyonunda babasıyla kalmak veya annesiyle gitmek arasında yaptığı seçimin doğurduğu tüm alternatif paralel yaşamları aynı anda hatırlar. Zaman, kelebek etkisi ve olasılıklar felsefesi üzerine görsel bir şölen.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "vXf3gVYXlHg",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "mind-bending",
      "escapism"
    ],
    "themeColor": "#8b5cf6"
  },
  {
    "id": "john-wick-4",
    "title": "John Wick: Bölüm 4",
    "originalTitle": "John Wick: Chapter 4",
    "year": 2023,
    "imdbRating": 7.7,
    "imdbVotes": "360K",
    "duration": "2s 49dk",
    "ageRating": "18+",
    "genres": [
      "Aksiyon",
      "Suç",
      "Gerilim"
    ],
    "director": "Chad Stahelski",
    "cast": [
      "Keanu Reeves",
      "Donnie Yen",
      "Bill Skarsgård",
      "Laurence Fishburne",
      "Hiroyuki Sanada"
    ],
    "tagline": "Özgürlüğün bedeli kandır.",
    "awards": "Critics' Choice Süper Ödülleri",
    "summary": "Başına konan ödül katlanarak artan John Wick, Yüksek Şura'ya karşı nihai özgürlüğünü kazanmak için New York'tan Paris'e, Osaka'dan Berlin'e uzanan ölümcül bir savaşa girer. Sacré-Cœur merdivenlerinde 222 basamaklık efsanevi dövüş ve Paris Zafer Takı etrafında dönen araç kovalamacalarıyla modern aksiyon sinemasının koreografi zirvesidir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "qEVUtrk8_B4",
    "isFeatured": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "adrenaline",
      "thrill"
    ],
    "themeColor": "#ef4444",
    "featuredBadge": "Saf Adrenalin Zirvesi"
  },
  {
    "id": "mad-max-fury-road",
    "title": "Mad Max: Öfkeli Yollar",
    "originalTitle": "Mad Max: Fury Road",
    "year": 2015,
    "imdbRating": 8.1,
    "imdbVotes": "1.1M",
    "duration": "2s 0dk",
    "ageRating": "16+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Bilim Kurgu"
    ],
    "director": "George Miller",
    "cast": [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult",
      "Hugh Keays-Byrne"
    ],
    "tagline": "Ne muhteşem bir gün!",
    "awards": "6 Oscar Ödülü",
    "summary": "Kıyamet sonrası nükleer çöl dünyasında su ve benzin için savaşan insanların arasında yalnız Max Rockatansky, tiran Ölümsüz Joe'nun haremini kurtaran tek kollu savaşçı İmparator Furiosa ile zoraki bir ittifak kurar. Canavar zırhlı tırlarla çölde geçen iki saatlik kesintisiz, pratik efektli ve alev fışkırtan elektro gitarlı saf aksiyon senfonisi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "hEJnMQG99gw",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "wb",
      "prime"
    ],
    "moods": [
      "adrenaline",
      "escapism",
      "prestige"
    ],
    "themeColor": "#f97316"
  },
  {
    "id": "top-gun-maverick",
    "title": "Top Gun: Maverick",
    "originalTitle": "Top Gun: Maverick",
    "year": 2022,
    "imdbRating": 8.2,
    "imdbVotes": "710K",
    "duration": "2s 10dk",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Dram"
    ],
    "director": "Joseph Kosinski",
    "cast": [
      "Tom Cruise",
      "Miles Teller",
      "Jennifer Connelly",
      "Jon Hamm",
      "Val Kilmer"
    ],
    "tagline": "Düşünme, sadece yap.",
    "awards": "1 Oscar Ödülü (En İyi Ses), 6 Oscar Adaylığı",
    "summary": "Donanmanın en cesur test pilotu Pete 'Maverick' Mitchell, 30 yılı aşkın hizmetin ardından imkansız bir göreve (uranyum zenginleştirme tesisine yapılacak dar kanyon hava saldırısı) genç Top Gun pilotlarını eğitmek üzere geri çağrılır. Eğittiği pilotlar arasında eski uçuş ortağı Goose'un oğlu Rooster da vardır. Gerçek F/A-18 kokpitlerinde çekilen nefes kesici uçuş sekanslarıyla gişeleri altüst eden başyapıt.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "giXco2jaZ_4",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "adrenaline"
    ],
    "themeColor": "#0284c7"
  },
  {
    "id": "terminator-2",
    "title": "Terminatör 2: Kıyamet Günü",
    "originalTitle": "Terminator 2: Judgment Day",
    "year": 1991,
    "imdbRating": 8.6,
    "imdbVotes": "1.2M",
    "duration": "2s 17dk",
    "ageRating": "16+",
    "genres": [
      "Aksiyon",
      "Bilim Kurgu"
    ],
    "director": "James Cameron",
    "cast": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Edward Furlong",
      "Robert Patrick"
    ],
    "tagline": "Hasta la vista, baby.",
    "awards": "4 Oscar Ödülü",
    "summary": "Gelecekte makineler dünyayı ele geçirdikten sonra, insan direnişinin lideri John Connor'ı henüz 10 yaşındayken yok etmek için sıvı metalden şekil değiştirebilen ölümcül T-1000 gönderilir. Gelecekteki John ise kendisini korumak için yeniden programlanmış bir T-800'ü (Schwarzenegger) geçmişe yollar. Anne Sarah Connor ve T-800'ün insanlığın geleceğini kurtarma savaşı aksiyon sinemasının zirvesidir.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailerYoutubeId": "CRRlbK5w8AE",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "adrenaline",
      "mind-bending",
      "prestige"
    ],
    "themeColor": "#38bdf8"
  },
  {
    "id": "mission-impossible-dead-reckoning",
    "title": "Görevimiz Tehlike: Ölümcül Hesaplaşma",
    "originalTitle": "Mission: Impossible - Dead Reckoning Part One",
    "year": 2023,
    "imdbRating": 7.7,
    "imdbVotes": "280K",
    "duration": "2s 43dk",
    "ageRating": "13+",
    "genres": [
      "Aksiyon",
      "Macera",
      "Gerilim"
    ],
    "director": "Christopher McQuarrie",
    "cast": [
      "Tom Cruise",
      "Hayley Atwell",
      "Ving Rhames",
      "Simon Pegg",
      "Rebecca Ferguson"
    ],
    "tagline": "Hayatımız, kararlarımızın toplamıdır.",
    "awards": "2 Oscar Adaylığı",
    "summary": "Ethan Hunt ve IMF ekibi, küresel finansı, nükleer savunma sistemlerini ve gerçeğin kendisini kontrol edebilen 'Varlık' adlı kontrolden çıkmış bir yapay zekanın iki parçalı anahtarını ele geçirmek için ölümcül bir yarışa girer. Abu Dabi havalimanından Roma sokaklarına ve Tom Cruise'un motosikletle uçurumdan atladığı nefes kesen tren kovalamacasına kadar dur durak bilmeyen bir macera.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "avz0AhEtbTE",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "adrenaline",
      "thrill"
    ],
    "themeColor": "#eab308"
  },
  {
    "id": "silence-of-the-lambs",
    "title": "Kuzuların Sessizliği",
    "originalTitle": "The Silence of the Lambs",
    "year": 1991,
    "imdbRating": 8.6,
    "imdbVotes": "1.5M",
    "duration": "1s 58dk",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Dram",
      "Gerilim"
    ],
    "director": "Jonathan Demme",
    "cast": [
      "Jodie Foster",
      "Anthony Hopkins",
      "Scott Glenn",
      "Ted Levine"
    ],
    "tagline": "Kuzular susmayacak.",
    "awards": "5 Büyük Oscar Ödülü (Film, Yönetmen, Erkek/Kadın Oyuncu, Senaryo)",
    "summary": "Genç ve hırslı FBI akademisi öğrencisi Clarice Starling, kurbanlarının derisini yüzen 'Buffalo Bill' adlı psikopat seri katili yakalayabilmek için yüksek güvenlikli akıl hastanesinde yatan dahi yamyam psikiyatrist Dr. Hannibal Lecter ile görüşmekle görevlendirilir. Lecter, katilin profilini çıkarma karşılığında Clarice'in çocukluk travmalarını ve en gizli korkularını deşerek gerilim dolu bir psikolojik satranç başlatır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "W6Mm8Sbe__o",
    "isFeatured": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "thrill",
      "prestige"
    ],
    "themeColor": "#ef4444",
    "featuredBadge": "5 Oscar Kazananı"
  },
  {
    "id": "prisoners",
    "title": "Tutsak",
    "originalTitle": "Prisoners",
    "year": 2013,
    "imdbRating": 8.1,
    "imdbVotes": "800K",
    "duration": "2s 33dk",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Dram",
      "Gizem",
      "Gerilim"
    ],
    "director": "Denis Villeneuve",
    "cast": [
      "Hugh Jackman",
      "Jake Gyllenhaal",
      "Viola Davis",
      "Paul Dano"
    ],
    "tagline": "Kızını kurtarmak için ne kadar ileri gidebilirsin?",
    "awards": "1 Oscar Adaylığı",
    "summary": "Şükran Günü kutlaması sırasında iki ailenin küçük kızları gizemli bir şekilde ortadan kaybolur. Olayı soruşturan soğukkanlı Dedektif Loki, delil yetersizliği yüzünden zihinsel engelli şüpheli Alex Jones'u serbest bırakmak zorunda kalır. Çaresizlikten çılgına dönen baba Keller Dover, kızını kurtarmak için adaleti kendi ellerine alarak şüpheliyi kaçırıp gizli bir sorguya başlar. Ahlaki sınırları altüst eden tırnak kemirtici bir gerilim.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "bpXfcT61eyA",
    "isFeatured": false,
    "platforms": [
      "netflix",
      "prime"
    ],
    "hubTags": [
      "netflix",
      "prime"
    ],
    "moods": [
      "thrill"
    ],
    "themeColor": "#334155"
  },
  {
    "id": "gone-girl",
    "title": "Kayıp Kız",
    "originalTitle": "Gone Girl",
    "year": 2014,
    "imdbRating": 8.1,
    "imdbVotes": "1.1M",
    "duration": "2s 29dk",
    "ageRating": "18+",
    "genres": [
      "Dram",
      "Gizem",
      "Gerilim"
    ],
    "director": "David Fincher",
    "cast": [
      "Ben Affleck",
      "Rosamund Pike",
      "Neil Patrick Harris",
      "Tyler Perry"
    ],
    "tagline": "Kimi evlendiğini gerçekten biliyor musun?",
    "awards": "1 Oscar Adaylığı, 4 Altın Küre Adaylığı",
    "summary": "Beşinci evlilik yıldönümlerinde Nick Dunne eve döndüğünde, oturma odasındaki kırık cam sehpası ve kan lekeleriyle eşi Amy'nin kaybolduğunu görür. Medyanın ilgisiyle olay ülke gündemine otururken, Nick'in soğukkanlı ve çelişkili tavırları şüpheleri üzerine çeker. Ancak Amy'nin günlüğü ve hazırladığı gizli ipuçları ortaya çıktıkça olayın arkasındaki akıl almaz ve tüyler ürpertici psikolojik manipülasyon açığa çıkar.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "2-_-1nJf8Vg",
    "isFeatured": false,
    "platforms": [
      "disney",
      "prime"
    ],
    "hubTags": [
      "disney",
      "prime"
    ],
    "moods": [
      "thrill"
    ],
    "themeColor": "#0284c7"
  },
  {
    "id": "zodiac",
    "title": "Zodiac",
    "originalTitle": "Zodiac",
    "year": 2007,
    "imdbRating": 7.7,
    "imdbVotes": "600K",
    "duration": "2s 37dk",
    "ageRating": "18+",
    "genres": [
      "Suç",
      "Dram",
      "Gizem",
      "Gerilim"
    ],
    "director": "David Fincher",
    "cast": [
      "Jake Gyllenhaal",
      "Mark Ruffalo",
      "Robert Downey Jr.",
      "Anthony Edwards"
    ],
    "tagline": "Gazetelere şifreli mektuplar gönderen bir hayalet.",
    "awards": "Cannes Film Festivali Altın Palmiye Adayı",
    "summary": "1960'ların sonlarında San Francisco Körfez Bölgesi'nde rastgele insanları öldürüp gazetelere şifreli mektuplar gönderen 'Zodiac' adlı seri katil, polisi ve basını dehşete düşürür. San Francisco Chronicle gazetesinde siyasi karikatürist olan Robert Graysmith, şifreleri çözme konusunda saplantılı hale gelerek dedektiflerin bile pes ettiği yıllar boyunca katilin peşini bırakmaz.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailerYoutubeId": "yNncHPl1UXg",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "thrill",
      "prestige"
    ],
    "themeColor": "#475569"
  },
  {
    "id": "the-intouchables",
    "title": "Can Dostum (Fransız)",
    "originalTitle": "Intouchables",
    "year": 2011,
    "imdbRating": 8.5,
    "imdbVotes": "930K",
    "duration": "1s 52dk",
    "ageRating": "13+",
    "genres": [
      "Biyografi",
      "Komedi",
      "Dram"
    ],
    "director": "Olivier Nakache, Éric Toledano",
    "cast": [
      "François Cluzet",
      "Omar Sy",
      "Anne Le Ny"
    ],
    "tagline": "Bazen bir yabancı, hayatınızı baştan aşağı değiştirir.",
    "awards": "César Ödülü (Omar Sy - En İyi Erkek Oyuncu)",
    "summary": "Yamaç paraşütü kazası sonrası felç kalarak tekerlekli sandalyeye mahkum olan zengin aristokrat Philippe, kendisine bakıcılık yapması için hapisten yeni çıkmış neşeli göçmen genç Driss'i işe alır. Driss ona acımak yerine bir dost gibi davranıp Vivaldi'den Earth Wind & Fire'a, hız arabalarından sokak şakalarına kadar Philippe'e hayatın tadını yeniden hatırlatır. İki zıt dünyanın iç ısıtan gerçek dostluk hikayesi.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "34WIbmXkewU",
    "isFeatured": true,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "heartwarming",
      "chill-comedy",
      "prestige"
    ],
    "themeColor": "#10b981",
    "featuredBadge": "İç Isıtan Şaheser"
  },
  {
    "id": "amelie",
    "title": "Amélie",
    "originalTitle": "Le Fabuleux Destin d'Amélie Poulain",
    "year": 2001,
    "imdbRating": 8.3,
    "imdbVotes": "780K",
    "duration": "2s 2dk",
    "ageRating": "13+",
    "genres": [
      "Komedi",
      "Romantik"
    ],
    "director": "Jean-Pierre Jeunet",
    "cast": [
      "Audrey Tautou",
      "Mathieu Kassovitz",
      "Rufus",
      "Jamel Debbouze"
    ],
    "tagline": "Hayat küçük mucizelerle doludur.",
    "awards": "5 Oscar Adaylığı, 4 César Ödülü",
    "summary": "Paris'te Montmartre kafesinde garsonluk yapan hayalperest ve çekingen genç kız Amélie, banyosundaki fayansın arkasında 40 yıl öncesinden kalma bir çocukluk hazine kutusu bulur. Kutunun sahibini gizlice bulup ona ulaştırdığında adamın mutluluğunu görünce, tüm hayatını etrafındaki insanların hayatlarını gizlice güzelleştirmeye adar. Sıcak renkleri, büyüleyici Yann Tiersen müzikleriyle kalbe dokunan bir peri masalı.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTNmYzY0MWQtZGZmNy00Y2Y4LWFmMDQtMTZjYTdiYzEwZGQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTNmYzY0MWQtZGZmNy00Y2Y4LWFmMDQtMTZjYTdiYzEwZGQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailerYoutubeId": "HUECWi5pX7o",
    "isFeatured": false,
    "platforms": [
      "prime"
    ],
    "hubTags": [
      "prime"
    ],
    "moods": [
      "heartwarming",
      "escapism",
      "prestige"
    ],
    "themeColor": "#f43f5e"
  },
  {
    "id": "ratatouille",
    "title": "Ratatuy",
    "originalTitle": "Ratatouille",
    "year": 2007,
    "imdbRating": 8.1,
    "imdbVotes": "820K",
    "duration": "1s 51dk",
    "ageRating": "Genel İzleyici",
    "genres": [
      "Animasyon",
      "Komedi",
      "Macera"
    ],
    "director": "Brad Bird (Pixar)",
    "cast": [
      "Patton Oswalt",
      "Ian Holm",
      "Lou Romano",
      "Peter O'Toole"
    ],
    "tagline": "Herkes yemek yapabilir.",
    "awards": "1 Oscar Ödülü (En İyi Animasyon)",
    "summary": "Olağanüstü koku ve tat alma duyusuna sahip sevimli fare Remy, Paris'in efsanevi şefi Gusteau'nun restoranında baş aşçı olma hayali kurar. Restoranda çöpçü olarak çalışan sakar Linguini ile iş birliği yaparak onun şapkasının altından saçlarını çekerek yemekleri pişirmesini sağlar. Korkunç gurme eleştirmen Anton Ego'ya sundukları geleneksel 'Ratatouille' yemeğiyle Ego'nun çocukluğuna dönüp kalbini erittiği sahne sinema tarihinin en sıcak anıdır.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailerYoutubeId": "NgsQ8mVkN8w",
    "isFeatured": false,
    "platforms": [
      "disney"
    ],
    "hubTags": [
      "pixar",
      "disney"
    ],
    "moods": [
      "heartwarming",
      "chill-comedy",
      "escapism"
    ],
    "themeColor": "#eab308"
  }
];

// Film Tür Listesi (Komedi Dahil Eksiksiz Liste)
const GENRES_LIST = [
  "Tümü",
  "Komedi",
  "Bilim Kurgu",
  "Aksiyon",
  "Dram",
  "Suç",
  "Macera",
  "Gerilim",
  "Korku",
  "Gizem",
  "Animasyon"
];

// IMDb Puan Filtreleri
const IMDB_FILTER_PRESETS = [
  { label: "Tüm Puanlar", min: 0 },
  { label: "⭐ 8.5+ Üst Düzey", min: 8.5 },
  { label: "🏆 8.8+ Başyapıtlar", min: 8.8 },
  { label: "👑 9.0+ Efsaneler", min: 9.0 }
];

// Güvenli Görsel Fallback Üreteci
function getFallbackPoster(title, genre = "Sinema", rating = "8.5") {
  const safeTitle = (title || "Film").replace(/[<>&"']/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
    <defs>
      <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2d0a0e"/>
        <stop offset="40%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0a0a0d"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGlow)"/>
    <circle cx="200" cy="220" r="85" fill="#e50914" opacity="0.2"/>
    <circle cx="200" cy="220" r="50" fill="#f5c518" opacity="0.15"/>
    <text x="200" y="240" font-family="sans-serif" font-size="56" fill="#ffffff" text-anchor="middle">🎬</text>
    <text x="200" y="370" font-family="sans-serif" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">${safeTitle}</text>
    <rect x="130" y="400" width="140" height="32" rx="16" fill="#f5c518" />
    <text x="200" y="422" font-family="sans-serif" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">★ IMDb ${rating}</text>
    <text x="200" y="460" font-family="sans-serif" font-size="14" fill="#a3a3b2" text-anchor="middle">${genre}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ==========================================
// YAYIN PLATFORMLARI (STREAMING SERVICES)
// Netflix, HBO Max, Disney+, Prime Video, Apple TV+, TV+, BluTV, TOD, Exxen, GAİN, MUBI
// ==========================================
const STREAMING_PLATFORMS = {
  netflix: {
    id: 'netflix',
    name: 'Netflix',
    badgeClass: 'plat-netflix',
    brandColor: '#E50914',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.398 0v24c1.178-.14 2.378-.337 3.557-.59v-9.356l4.237 9.176c1.23-.274 2.45-.607 3.655-.998V0h-3.557v9.42L9.053 0H5.398z"/></svg>`,
    getUrl: (title) => `https://www.netflix.com/search?q=${encodeURIComponent(title)}`
  },
  hbo: {
    id: 'hbo',
    name: 'HBO Max (BluTV)',
    badgeClass: 'plat-hbo',
    brandColor: '#7928ca',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.84 8.78h2.08v6.44h-2.08V8.78zm-6.72 0h2.08v2.46h2.56V8.78h2.08v6.44H8.84v-2.32H6.2v2.32H4.12V8.78zm13.12 0h2.8c1.32 0 2.2.82 2.2 1.94 0 .78-.44 1.4-1.12 1.68.86.26 1.42.94 1.42 1.84 0 1.22-.96 2.06-2.38 2.06h-2.92V8.78zm2.08 1.62v1.22h.64c.42 0 .7-.24.7-.62 0-.38-.28-.6-.7-.6h-.64zm0 2.4v1.38h.74c.48 0 .8-.26.8-.7 0-.42-.32-.68-.8-.68h-.74z"/></svg>`,
    getUrl: (title) => `https://play.max.com/search?q=${encodeURIComponent(title)}`
  },
  disney: {
    id: 'disney',
    name: 'Disney+',
    badgeClass: 'plat-disney',
    brandColor: '#113CCF',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 14.51c-.604-.15-.994-.436-.994-.78 0-.45.626-.84 1.545-.84 1.258 0 2.627.568 3.513 1.157l.635-1.42a8.03 8.03 0 0 0-4.08-1.077c-2.128 0-3.376.993-3.376 2.247 0 1.144 1.05 1.866 2.502 2.235 1.096.28 1.42.66 1.42 1.01 0 .524-.74.965-1.895.965-1.574 0-3.08-.72-4.01-1.405l-.65 1.435c1.075.82 2.92 1.49 4.72 1.49 2.43 0 3.73-1.09 3.73-2.457 0-1.19-1.05-1.87-2.46-2.22z"/></svg>`,
    getUrl: (title) => `https://www.disneyplus.com/search?q=${encodeURIComponent(title)}`
  },
  prime: {
    id: 'prime',
    name: 'Prime Video',
    badgeClass: 'plat-prime',
    brandColor: '#00A8E1',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>`,
    getUrl: (title) => `https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${encodeURIComponent(title)}`
  },
  apple: {
    id: 'apple',
    name: 'Apple TV+',
    badgeClass: 'plat-apple',
    brandColor: '#27272a',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.16c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.6.69-1.12 1.83-.98 2.92 1.07.08 2.13-.53 2.79-1.32z"/></svg>`,
    getUrl: (title) => `https://tv.apple.com/search?term=${encodeURIComponent(title)}`
  },
  blutv: {
    id: 'blutv',
    name: 'BluTV',
    badgeClass: 'plat-blutv',
    brandColor: '#00A8FF',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">BLU</text></svg>`,
    getUrl: (title) => `https://www.blutv.com/arama?q=${encodeURIComponent(title)}`
  },
  tvplus: {
    id: 'tvplus',
    name: 'TV+',
    badgeClass: 'plat-tvplus',
    brandColor: '#FFB800',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">TV+</text></svg>`,
    getUrl: (title) => `https://tvplus.com.tr/`
  },
  tod: {
    id: 'tod',
    name: 'TOD',
    badgeClass: 'plat-tod',
    brandColor: '#10b981',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">TOD</text></svg>`,
    getUrl: (title) => `https://www.todtv.com.tr/`
  },
  exxen: {
    id: 'exxen',
    name: 'Exxen',
    badgeClass: 'plat-exxen',
    brandColor: '#F59E0B',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="8" font-weight="bold" fill="#000" text-anchor="middle">EXXEN</text></svg>`,
    getUrl: (title) => `https://www.exxen.com/`
  },
  gain: {
    id: 'gain',
    name: 'GAİN',
    badgeClass: 'plat-gain',
    brandColor: '#059669',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">GAİN</text></svg>`,
    getUrl: (title) => `https://www.gain.tv/`
  },
  mubi: {
    id: 'mubi',
    name: 'MUBI',
    badgeClass: 'plat-mubi',
    brandColor: '#2563eb',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">MUBI</text></svg>`,
    getUrl: (title) => `https://mubi.com/tr/search/films?query=${encodeURIComponent(title)}`
  }
};

// Film veya dizinin GERÇEK ve DOĞRULANMIŞ yayın bilgilerini döndürür
function getMovieStreamingInfo(movie) {
  if (!movie) {
    return {
      hasTrProvider: false,
      statusText: "TR yayıncısı bulunamadı",
      providers: [],
      globalProviders: []
    };
  }

  // 1. Canlı API sorgusundan gelen doğrulanmış streamingInfo
  if (movie.streamingInfo) {
    const info = movie.streamingInfo;
    const providers = (info.providers || []).map(p => {
      const reg = STREAMING_PLATFORMS[p.id];
      return {
        id: p.id,
        name: p.name || (reg ? reg.name : 'Yayıncı'),
        badgeClass: p.badgeClass || (reg ? reg.badgeClass : 'plat-other'),
        brandColor: p.brandColor || (reg ? reg.brandColor : '#475569'),
        iconSvg: reg ? reg.iconSvg : STREAMING_PLATFORMS.netflix.iconSvg,
        url: p.url || (reg ? reg.getUrl(movie.title) : '#')
      };
    });

    const globalProviders = (info.globalProviders || []).map(p => {
      const reg = STREAMING_PLATFORMS[p.id];
      return {
        id: p.id,
        name: p.name || (reg ? reg.name : 'Küresel Yayıncı'),
        badgeClass: p.badgeClass || (reg ? reg.badgeClass : 'plat-apple'),
        brandColor: p.brandColor || (reg ? reg.brandColor : '#1e1e24'),
        iconSvg: reg ? reg.iconSvg : STREAMING_PLATFORMS.apple.iconSvg,
        url: p.url || (reg ? reg.getUrl(movie.title) : '#'),
        isGlobal: true
      };
    });

    return {
      hasTrProvider: info.hasTrProvider === true && providers.length > 0,
      statusText: (info.hasTrProvider === true && providers.length > 0) ? "Türkiye'de Yayında" : "TR yayıncısı bulunamadı",
      providers,
      globalProviders
    };
  }

  // 2. Predefined katalog filmleri için platforms ve globalPlatforms
  if (Array.isArray(movie.platforms)) {
    const providers = movie.platforms.map(pid => {
      const reg = STREAMING_PLATFORMS[pid];
      if (!reg) return null;
      return {
        id: reg.id,
        name: reg.name,
        badgeClass: reg.badgeClass,
        brandColor: reg.brandColor,
        iconSvg: reg.iconSvg,
        url: reg.getUrl(movie.title)
      };
    }).filter(Boolean);

    const globalProviders = Array.isArray(movie.globalPlatforms) ? movie.globalPlatforms.map(pid => {
      const reg = STREAMING_PLATFORMS[pid];
      if (!reg) return null;
      return {
        id: reg.id,
        name: reg.name,
        badgeClass: reg.badgeClass,
        brandColor: reg.brandColor,
        iconSvg: reg.iconSvg,
        url: reg.getUrl(movie.title),
        isGlobal: true
      };
    }).filter(Boolean) : [];

    const hasTr = providers.length > 0;
    return {
      hasTrProvider: hasTr,
      statusText: hasTr ? "Türkiye'de Yayında" : "TR yayıncısı bulunamadı",
      providers,
      globalProviders
    };
  }

  return {
    hasTrProvider: false,
    statusText: "TR yayıncısı bulunamadı",
    providers: [],
    globalProviders: []
  };
}

function getStreamingPlatforms(movie) {
  const info = getMovieStreamingInfo(movie);
  if (info.hasTrProvider && info.providers.length > 0) {
    return info.providers;
  }
  if (info.globalProviders && info.globalProviders.length > 0) {
    return info.globalProviders;
  }
  return [];
}
