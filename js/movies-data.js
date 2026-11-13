/**
 * CINE3D NETFLIX - Genişletilmiş ve Doğrulanmış Film & Dizi Veritabanı (109 Yapım)
 * Gerçek IMDb puanları, kategoriler, detaylı konular, doğrulanmış Türkiye yayıncıları ve Ruh Hali (Mood) eşleşmeleri
 */


const MOVIES_DATA = [
 {
  "id": "inception",
  "imdbID": "tt1375666",
  "title": "Başlangıç",
  "originalTitle": "Inception",
  "year": 2010,
  "imdbRating": 8.8,
  "imdbVotes": "2.5M",
  "duration": "2s 28dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "YoHD9XEInc0",
  "isFeatured": true,
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "featuredBadge": "Günün 3D Seçimi",
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "interstellar",
  "imdbID": "tt0816692",
  "title": "Yıldızlararası",
  "originalTitle": "Interstellar",
  "year": 2014,
  "imdbRating": 8.7,
  "imdbVotes": "2.1M",
  "duration": "2s 49dk",
  "ageRating": "TV-14",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "zSWdZVtXT7E",
  "isFeatured": true,
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#f59e0b",
  "featuredBadge": "IMDb Top Efsane",
  "moods": [
   "mind-bending",
   "tearjerker",
   "escapism"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "dark-knight",
  "imdbID": "tt0468569",
  "title": "Kara Şövalye",
  "originalTitle": "The Dark Knight",
  "year": 2008,
  "imdbRating": 9,
  "imdbVotes": "2.9M",
  "duration": "2s 32dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "pulp-fiction",
  "imdbID": "tt0110912",
  "title": "Ucuz Roman",
  "originalTitle": "Pulp Fiction",
  "year": 1994,
  "imdbRating": 8.9,
  "imdbVotes": "2.2M",
  "duration": "2s 34dk",
  "ageRating": "16+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "shawshank",
  "imdbID": "tt0111161",
  "title": "Esaretin Bedeli",
  "originalTitle": "The Shawshank Redemption",
  "year": 1994,
  "imdbRating": 9.3,
  "imdbVotes": "2.95M",
  "duration": "2s 22dk",
  "ageRating": "15+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "PLl99DlL6b4",
  "isFeatured": false,
  "platforms": [],
  "themeColor": "#10b981",
  "moods": [
   "prestige",
   "heartwarming",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "godfather",
  "imdbID": "tt0068646",
  "platforms": [
   "tvplus"
  ],
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "sY1S34973zA",
  "isFeatured": false,
  "themeColor": "#b91c1c",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "fight-club",
  "imdbID": "tt0137523",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-matrix",
  "imdbID": "tt0133093",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "title": "Matrix",
  "originalTitle": "The Matrix",
  "year": 1999,
  "imdbRating": 8.7,
  "imdbVotes": "2.0M",
  "duration": "2s 16dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "vKQi3bBA1y8",
  "isFeatured": false,
  "themeColor": "#22c55e",
  "moods": [
   "mind-bending",
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "parasite",
  "imdbID": "tt6751668",
  "platforms": [
   "tvplus",
   "tod",
   "hbo"
  ],
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "5xH0HfJHsaY",
  "isFeatured": false,
  "themeColor": "#06b6d4",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "spirited-away",
  "imdbID": "tt0245429",
  "title": "Ruhların Kaçışı",
  "originalTitle": "Sen to Chihiro no Kamikakushi",
  "year": 2001,
  "imdbRating": 8.6,
  "imdbVotes": "850K",
  "duration": "2s 05dk",
  "ageRating": "PG",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "ByXuk9QqQkk",
  "isFeatured": false,
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a855f7",
  "moods": [
   "escapism",
   "heartwarming"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "oppenheimer",
  "imdbID": "tt15398776",
  "title": "Oppenheimer",
  "originalTitle": "Oppenheimer",
  "year": 2023,
  "imdbRating": 8.9,
  "imdbVotes": "850K",
  "duration": "3s 00dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "uYPbbksJxIg",
  "isFeatured": false,
  "platforms": [],
  "themeColor": "#f97316",
  "moods": [
   "prestige",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "dune-2",
  "imdbID": "tt15239678",
  "platforms": [
   "tvplus",
   "hbo"
  ],
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Way9Dexny3w",
  "isFeatured": true,
  "themeColor": "#ca8a04",
  "featuredBadge": "2024 En Çok Konuşulan",
  "moods": [
   "escapism",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "gladiator",
  "imdbID": "tt0172495",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "prestige",
  "imdbID": "tt0482571",
  "platforms": [
   "netflix",
   "tvplus"
  ],
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BM2Y0YmM5MWYtZTYzNi00ZjU5LTlmOGYtZDQ4ODQyMjAzNjQ2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "o4gHCmTQDVI",
  "isFeatured": false,
  "themeColor": "#6366f1",
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "whiplash",
  "imdbID": "tt2582802",
  "title": "Whiplash",
  "originalTitle": "Whiplash",
  "year": 2014,
  "imdbRating": 8.5,
  "imdbVotes": "980K",
  "duration": "1s 47dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "7d_jQycdQGo",
  "isFeatured": false,
  "themeColor": "#8b5cf6",
  "platforms": [],
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "spider-verse",
  "imdbID": "tt4633694",
  "title": "Örümcek-Adam: Örümcek Evreninde",
  "originalTitle": "Spider-Man: Into the Spider-Verse",
  "year": 2018,
  "imdbRating": 8.4,
  "imdbVotes": "670K",
  "duration": "1s 57dk",
  "ageRating": "PG",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "seven",
  "imdbID": "tt0114369",
  "platforms": [
   "netflix"
  ],
  "title": "Yedi",
  "originalTitle": "Se7en",
  "year": 1995,
  "imdbRating": 8.6,
  "imdbVotes": "1.8M",
  "duration": "2s 07dk",
  "ageRating": "16+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "znmZoVkCjpI",
  "isFeatured": false,
  "themeColor": "#71717a",
  "moods": [
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "alien",
  "imdbID": "tt0078748",
  "platforms": [
   "disney"
  ],
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "LjLamj-b0I8",
  "isFeatured": false,
  "themeColor": "#10b981",
  "moods": [
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "shining",
  "imdbID": "tt0081505",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "S014oGZiSdI",
  "isFeatured": false,
  "themeColor": "#b91c1c",
  "platforms": [],
  "moods": [
   "thrill",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "blade-runner-2049",
  "imdbID": "tt1856101",
  "platforms": [
   "prime",
   "mubi",
   "tvplus"
  ],
  "title": "Bıçak Sırtı 2049",
  "originalTitle": "Blade Runner 2049",
  "year": 2017,
  "imdbRating": 8,
  "imdbVotes": "640K",
  "duration": "2s 44dk",
  "ageRating": "15+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "star-wars-empire",
  "imdbID": "tt0080684",
  "title": "Star Wars: Bölüm V - İmparator",
  "originalTitle": "Star Wars: Episode V - The Empire Strikes Back",
  "year": 1980,
  "imdbRating": 8.7,
  "imdbVotes": "1.4M",
  "duration": "2s 4dk",
  "ageRating": "7+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-mandalorian",
  "imdbID": "tt8111088",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "aOC8E8z_ifw",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "star-wars-new-hope",
  "imdbID": "tt0076759",
  "title": "Star Wars: Bölüm IV - Yeni Bir Umut",
  "originalTitle": "Star Wars: Episode IV - A New Hope",
  "year": 1977,
  "imdbRating": 8.6,
  "imdbVotes": "1.5M",
  "duration": "2s 1dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "avengers-endgame",
  "imdbID": "tt4154796",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "iron-man",
  "imdbID": "tt0371746",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "loki",
  "imdbID": "tt9140554",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzA2YjM2ZWQtYTZhMS00OTI3LTlhYzQtZjBiZWZkMDdlNjA5XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "wall-e",
  "imdbID": "tt0910970",
  "title": "VOL-İ",
  "originalTitle": "WALL·E",
  "year": 2008,
  "imdbRating": 8.4,
  "imdbVotes": "1.2M",
  "duration": "1s 38dk",
  "ageRating": "G",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMzk0ZGMzMDYtMDJkYS00NTdhLWJlZWUtMTdhOTJkOTM3NDUwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "CZ1CATNbXg0",
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
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "up",
  "imdbID": "tt1049413",
  "title": "Yukarı Bak",
  "originalTitle": "Up",
  "year": 2009,
  "imdbRating": 8.3,
  "imdbVotes": "1.1M",
  "duration": "1s 36dk",
  "ageRating": "PG",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "coco",
  "imdbID": "tt2380307",
  "title": "Koko",
  "originalTitle": "Coco",
  "year": 2017,
  "imdbRating": 8.4,
  "imdbVotes": "600K",
  "duration": "1s 45dk",
  "ageRating": "7+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Ga6RYejo6Hk",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "lion-king",
  "imdbID": "tt0110357",
  "title": "Aslan Kral",
  "originalTitle": "The Lion King",
  "year": 1994,
  "imdbRating": 8.5,
  "imdbVotes": "1.1M",
  "duration": "1s 28dk",
  "ageRating": "G",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-bear",
  "imdbID": "tt14452776",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjk2NWI5OTctODcwYy00NGRmLWFmN2YtOTZiNzFiYjVlODBkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "gBmkI4jlaIo",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "avatar",
  "imdbID": "tt0499549",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "free-solo",
  "imdbID": "tt7775622",
  "title": "Free Solo: İpsiz Tek Başına",
  "originalTitle": "Free Solo",
  "year": 2018,
  "imdbRating": 8.1,
  "imdbVotes": "160K",
  "duration": "1s 40dk",
  "ageRating": "PG-13",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjA2YTAxMzMtNzA2Mi00NTcyLTg4NzUtODIxYzFiYzdiNWNlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "game-of-thrones",
  "imdbID": "tt0944947",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGYxOGJkMjItZjVkZC00OGEzLWExNjktOTZmNGZhZmRlMTk2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "KPLWWIOCOOQ",
  "isFeatured": true,
  "isSeries": true,
  "platforms": [
   "tvplus",
   "hbo"
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-last-of-us",
  "imdbID": "tt3581920",
  "title": "The Last of Us",
  "originalTitle": "The Last of Us",
  "year": 2023,
  "imdbRating": 8.7,
  "imdbVotes": "550K",
  "duration": "1 Sezon",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "uLtkt8BonwM",
  "isFeatured": true,
  "isSeries": true,
  "platforms": [
   "tvplus",
   "hbo"
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "succession",
  "imdbID": "tt7660850",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTY4YTVkY2QtMjRmOS00YzliLWIxOWQtMTdkOTVkN2UzODNmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "OzYxJV_rmE8",
  "isFeatured": false,
  "isSeries": true,
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "hubTags": [
   "hbo",
   "max"
  ],
  "themeColor": "#7928ca",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "chernobyl",
  "imdbID": "tt7366338",
  "title": "Çernobil",
  "originalTitle": "Chernobyl",
  "year": 2019,
  "imdbRating": 9.3,
  "imdbVotes": "900K",
  "duration": "5 Bölüm Minidizi",
  "ageRating": "18+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "s9APLXM9Ei8",
  "isFeatured": false,
  "isSeries": true,
  "platforms": [
   "hbo"
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "joker",
  "imdbID": "tt7286456",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "zAGVQLHvwOY",
  "isFeatured": false,
  "isSeries": false,
  "platforms": [
   "netflix",
   "prime",
   "tvplus",
   "hbo"
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "harry-potter",
  "imdbID": "tt0241527",
  "title": "Harry Potter ve Felsefe Taşı",
  "originalTitle": "Harry Potter and the Sorcerer's Stone",
  "year": 2001,
  "imdbRating": 7.6,
  "imdbVotes": "900K",
  "duration": "2s 32dk",
  "ageRating": "10+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "VyHV0BRtdxo",
  "isFeatured": false,
  "isSeries": false,
  "platforms": [
   "prime",
   "tvplus",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-boys",
  "imdbID": "tt1190634",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "M1bhOaLV4FU",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "fallout",
  "imdbID": "tt12637874",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzE1MTZmY2ItMTgxNi00OGU5LTk4NTItMmY2ODFhYzhjZjRkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "7h8zJHywjAw",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "rings-of-power",
  "imdbID": "tt7631058",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjlhYTk3ZGQtNjdlYi00NDQyLTgxZTEtMzk0OTU5OTRhNGZhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "TTSNLnnxI9g",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "reacher",
  "imdbID": "tt9288030",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMmE0YTA3MTItMjhiNC00MGQ3LTllZDktNGNiZWY1OWFmNmM1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "GSycMV-_Csw",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "no-time-to-die",
  "imdbID": "tt2382320",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGZiOGZhZDQtZmRkNy00ZmUzLTliMGEtZGU0NjExOGMxZDVkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "stranger-things",
  "imdbID": "tt4574334",
  "title": "Stranger Things",
  "originalTitle": "Stranger Things",
  "year": 2016,
  "imdbRating": 8.7,
  "imdbVotes": "1.3M",
  "duration": "4 Sezon",
  "ageRating": "18+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "squid-game",
  "imdbID": "tt10919420",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDcxYjg1OTctYmUxZi00ZjhjLWIwNTMtNmI2M2Y4OTU1YWU2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "breaking-bad",
  "imdbID": "tt0903747",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOWE4NTc3YmYtNmU2Mi00ZjhkLWE1MTItZmM1M2U1ODU3YjFlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "dark",
  "imdbID": "tt5753856",
  "title": "Dark",
  "originalTitle": "Dark",
  "year": 2017,
  "imdbRating": 8.7,
  "imdbVotes": "450K",
  "duration": "3 Sezon",
  "ageRating": "18+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTUzNjQ2MTY5NV5BMl5BanBnXkFtZTgwOTAzNTQxNDM@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "arcane",
  "imdbID": "tt11126994",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-hangover",
  "imdbID": "tt1119646",
  "title": "Felekten Bir Gece",
  "originalTitle": "The Hangover",
  "year": 2009,
  "imdbRating": 7.7,
  "imdbVotes": "840K",
  "duration": "1s 40dk",
  "ageRating": "15+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "tcdUhdOlz9M",
  "isFeatured": false,
  "platforms": [
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
  "themeColor": "#f59e0b",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "superbad",
  "imdbID": "tt0829482",
  "title": "Çok Fena",
  "originalTitle": "Superbad",
  "year": 2007,
  "imdbRating": 7.6,
  "imdbVotes": "620K",
  "duration": "1s 53dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "4eaZ_48ZYog",
  "isFeatured": false,
  "platforms": [
   "mubi",
   "prime"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#eab308",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-truman-show",
  "imdbID": "tt0120382",
  "title": "Truman Show",
  "originalTitle": "The Truman Show",
  "year": 1998,
  "imdbRating": 8.2,
  "imdbVotes": "1.2M",
  "duration": "1s 43dk",
  "ageRating": "G",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "dlnmQbPGuls",
  "isFeatured": true,
  "platforms": [
   "tod"
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
  "featuredBadge": "Kült Başyapıt",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-grand-budapest-hotel",
  "imdbID": "tt2278388",
  "title": "Büyük Budapeşte Oteli",
  "originalTitle": "The Grand Budapest Hotel",
  "year": 2014,
  "imdbRating": 8.1,
  "imdbVotes": "900K",
  "duration": "1s 39dk",
  "ageRating": "R",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "themeColor": "#ec4899",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "deadpool",
  "imdbID": "tt1431045",
  "title": "Deadpool",
  "originalTitle": "Deadpool",
  "year": 2016,
  "imdbRating": 8,
  "imdbVotes": "1.1M",
  "duration": "1s 48dk",
  "ageRating": "16+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "themeColor": "#ef4444",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "deadpool-wolverine",
  "imdbID": "tt6263850",
  "title": "Deadpool & Wolverine",
  "originalTitle": "Deadpool & Wolverine",
  "year": 2024,
  "imdbRating": 7.7,
  "imdbVotes": "460K",
  "duration": "2s 8dk",
  "ageRating": "16+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "featuredBadge": "2024 Zirvesi",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "olumlu-dunya",
  "imdbID": "tt7748244",
  "title": "Ölümlü Dünya",
  "originalTitle": "Ölümlü Dünya",
  "year": 2018,
  "imdbRating": 7.6,
  "imdbVotes": "42K",
  "duration": "1s 47dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGQzMWY0NGYtMGE4MS00YmExLTkyOWItNzQxOWUzODkxNzAyXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX1280.jpg",
  "trailerYoutubeId": "jHlLVxkG-XY",
  "isFeatured": false,
  "platforms": [
   "netflix",
   "prime",
   "tvplus",
   "hbo"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#ef4444",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "olumlu-dunya-2",
  "imdbID": "tt27933364",
  "title": "Ölümlü Dünya 2",
  "originalTitle": "Ölümlü Dünya 2",
  "year": 2023,
  "imdbRating": 7.1,
  "imdbVotes": "25K",
  "duration": "1s 55dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTExMzUyZjctZDViNS00NzA3LWJiNTctNzE1ZWJiYmZjNmM4XkEyXkFqcGc@._V1_SX1280.jpg",
  "trailerYoutubeId": "PnQrVt3Vvxc",
  "isFeatured": false,
  "platforms": [
   "netflix",
   "prime"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#e50914",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "gora",
  "imdbID": "tt0384116",
  "title": "G.O.R.A.",
  "originalTitle": "G.O.R.A.",
  "year": 2004,
  "imdbRating": 8,
  "imdbVotes": "74K",
  "duration": "2s 7dk",
  "ageRating": "PG-13",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDU3NTVhYTItNGYyOS00Njk0LWIzMWQtZTU5Njg5MzkwZTllXkEyXkFqcGc@._V1_SX1280.jpg",
  "trailerYoutubeId": "b-xjnFcUGn8",
  "isFeatured": true,
  "platforms": [
   "netflix",
   "prime",
   "tvplus",
   "tod",
   "hbo"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy",
   "escapism"
  ],
  "themeColor": "#06b6d4",
  "featuredBadge": "Kült Komedi",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "arog",
  "imdbID": "tt1286126",
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
  "trailerYoutubeId": "v00CtY2vEQg",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#d97706",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "knives-out",
  "imdbID": "tt8946378",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "aEdV1RoBU_0",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy",
   "prestige"
  ],
  "themeColor": "#8b5cf6",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-big-lebowski",
  "imdbID": "tt0118715",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "cd-go0oBF4Y",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "chill-comedy",
   "prestige"
  ],
  "themeColor": "#f59e0b",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "brooklyn-nine-nine",
  "imdbID": "tt2467372",
  "title": "Brooklyn Nine-Nine",
  "originalTitle": "Brooklyn Nine-Nine",
  "year": 2013,
  "imdbRating": 8.4,
  "imdbVotes": "380K",
  "duration": "8 Sezon",
  "ageRating": "16+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "themeColor": "#0284c7",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-office",
  "imdbID": "tt0386676",
  "title": "The Office",
  "originalTitle": "The Office (US)",
  "year": 2005,
  "imdbRating": 9,
  "imdbVotes": "730K",
  "duration": "9 Sezon",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "LHOtME2DL4g",
  "isFeatured": true,
  "platforms": [
   "netflix",
   "prime",
   "disney"
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
  "featuredBadge": "IMDb 9.0 Komedi",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "friends",
  "imdbID": "tt0108778",
  "title": "Friends",
  "originalTitle": "Friends",
  "year": 1994,
  "imdbRating": 8.9,
  "imdbVotes": "1.1M",
  "duration": "10 Sezon",
  "ageRating": "7+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "8wThS5WCzs4",
  "isFeatured": false,
  "platforms": [
   "netflix",
   "tvplus",
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
  "themeColor": "#7928ca",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ted",
  "imdbID": "tt1637725",
  "title": "Ayı Teddy",
  "originalTitle": "Ted",
  "year": 2012,
  "imdbRating": 6.9,
  "imdbVotes": "620K",
  "duration": "1s 46dk",
  "ageRating": "R",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "9fbo_pQvU7M",
  "isFeatured": false,
  "platforms": [
   "netflix",
   "prime"
  ],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#eab308",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "groundhog-day",
  "imdbID": "tt0107048",
  "title": "Bugün Aslında Dündü",
  "originalTitle": "Groundhog Day",
  "year": 1993,
  "imdbRating": 8,
  "imdbVotes": "680K",
  "duration": "1s 41dk",
  "ageRating": "7+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "GncQtURdcE4",
  "isFeatured": false,
  "platforms": [
   "mubi",
   "tvplus",
   "tod",
   "prime"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy",
   "mind-bending"
  ],
  "themeColor": "#38bdf8",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "modern-family",
  "imdbID": "tt1442437",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzFlOWFjNzQtODViNC00NzgzLThhZmItZTc1N2VlZDgwODUwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Ub_lfN2VMIo",
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
  "themeColor": "#0284c7",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ted-lasso",
  "imdbID": "tt10986410",
  "title": "Ted Lasso",
  "originalTitle": "Ted Lasso",
  "year": 2020,
  "imdbRating": 8.8,
  "imdbVotes": "350K",
  "duration": "3 Sezon",
  "ageRating": "18+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BM2ZlYTU0YWUtMzY4OC00N2JkLTk1ZGQtN2UxNWJhMTBkMzM4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "themeColor": "#facc15",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "free-guy",
  "imdbID": "tt6264654",
  "title": "Free Guy",
  "originalTitle": "Free Guy",
  "year": 2021,
  "imdbRating": 7.1,
  "imdbVotes": "420K",
  "duration": "1s 55dk",
  "ageRating": "18+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "X2m-08cOAbc",
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
  "themeColor": "#38bdf8",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "jump-street-21",
  "imdbID": "tt1232829",
  "title": "Liseli Polisler",
  "originalTitle": "21 Jump Street",
  "year": 2012,
  "imdbRating": 7.2,
  "imdbVotes": "580K",
  "duration": "1s 49dk",
  "ageRating": "15+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "RLoKtb4c4W0",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#f97316",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-mask",
  "imdbID": "tt0110475",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "themeColor": "#22c55e",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "rick-and-morty",
  "imdbID": "tt2861424",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "WNhH00OIPP0",
  "isFeatured": true,
  "platforms": [
   "tvplus",
   "hbo",
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
  "featuredBadge": "IMDb 9.0 Çılgınlık",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "cinayet-susu",
  "imdbID": "tt9675274",
  "title": "Cinayet Süsü",
  "originalTitle": "Cinayet Süsü",
  "year": 2019,
  "imdbRating": 6.6,
  "imdbVotes": "28K",
  "duration": "1s 52dk",
  "ageRating": "15+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjA1YjQxM2YtNjBmZi00ZDQ0LTlhZGMtNTVhYjRiNjRhM2VkXkEyXkFqcGc@._V1_SX1280.jpg",
  "trailerYoutubeId": "TRfAs2qnlh0",
  "isFeatured": false,
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#e50914",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "shaun-of-the-dead",
  "imdbID": "tt0365748",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "ukOhdq1wQlQ",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "chill-comedy"
  ],
  "themeColor": "#b91c1c",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-green-mile",
  "imdbID": "tt0120689",
  "title": "Yeşil Yol",
  "originalTitle": "The Green Mile",
  "year": 1999,
  "imdbRating": 8.6,
  "imdbVotes": "1.4M",
  "duration": "3s 9dk",
  "ageRating": "7+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Ki4haFrqSrw",
  "isFeatured": true,
  "platforms": [],
  "hubTags": [
   "netflix",
   "prime"
  ],
  "moods": [
   "tearjerker",
   "prestige"
  ],
  "themeColor": "#22c55e",
  "featuredBadge": "IMDb #27 Başyapıt",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "life-is-beautiful",
  "imdbID": "tt0118799",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "pAYEQP8gx3w",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "tearjerker",
   "heartwarming",
   "prestige"
  ],
  "themeColor": "#eab308",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-pianist",
  "imdbID": "tt0253474",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "imdbID": "tt0108052",
  "title": "Schindler'in Listesi",
  "originalTitle": "Schindler's List",
  "year": 1993,
  "imdbRating": 9,
  "imdbVotes": "1.5M",
  "duration": "3s 15dk",
  "ageRating": "15+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "gG22XNhtnoY",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "netflix",
   "prime"
  ],
  "moods": [
   "tearjerker",
   "prestige"
  ],
  "themeColor": "#e50914",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "good-will-hunting",
  "imdbID": "tt0119217",
  "title": "Can Dostum",
  "originalTitle": "Good Will Hunting",
  "year": 1997,
  "imdbRating": 8.3,
  "imdbVotes": "1.1M",
  "duration": "2s 6dk",
  "ageRating": "15+",
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
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "PaZVjZEFkRs",
  "isFeatured": false,
  "platforms": [
   "tvplus"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "tearjerker",
   "heartwarming",
   "prestige"
  ],
  "themeColor": "#38bdf8",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "babam-ve-oglum",
  "imdbID": "tt0476735",
  "title": "Babam ve Oğlum",
  "originalTitle": "Babam ve Oğlum",
  "year": 2005,
  "imdbRating": 8.2,
  "imdbVotes": "92K",
  "duration": "1s 52dk",
  "ageRating": "G",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDE3MTBkNmQtNGFjMC00YTcwLWExY2ItN2MyMGZkNWJlMmFmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "KTmrUXNxwWI",
  "isFeatured": true,
  "platforms": [
   "prime"
  ],
  "hubTags": [
   "netflix"
  ],
  "moods": [
   "tearjerker"
  ],
  "themeColor": "#e11d48",
  "featuredBadge": "Milli Başyapıt",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ayla",
  "imdbID": "tt6316138",
  "title": "Ayla",
  "originalTitle": "Ayla: The Daughter of War",
  "year": 2017,
  "imdbRating": 8.3,
  "imdbVotes": "44K",
  "duration": "2s 5dk",
  "ageRating": "PG-13",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDRhYTNiMjMtY2U1OC00NWIwLTk0MTEtMDY1NTMxZDExYjBmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "8PELOIYaEiw",
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
  "themeColor": "#ef4444",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "miracle-in-cell-no-7",
  "imdbID": "tt10431500",
  "title": "7. Koğuştaki Mucize",
  "originalTitle": "7. Koğuştaki Mucize",
  "year": 2019,
  "imdbRating": 8.2,
  "imdbVotes": "55K",
  "duration": "2s 12dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTEyZTQ4YWItMzNkNi00MTUwLWEyODAtMWI3NDNhNDRiYmQwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "z_tgY9Nmo18",
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
  "themeColor": "#f59e0b",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "hachiko",
  "imdbID": "tt1028532",
  "title": "Hachiko: Bir Köpeğin Hikayesi",
  "originalTitle": "Hachi: A Dog's Tale",
  "year": 2009,
  "imdbRating": 8.1,
  "imdbVotes": "320K",
  "duration": "1s 33dk",
  "ageRating": "G",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTU5NjYyYTgtZGQ3My00MzRhLThjNGYtZmVjN2JjYjhkMjhhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Y6U728AZnV0",
  "isFeatured": false,
  "platforms": [
   "tvplus"
  ],
  "hubTags": [
   "netflix",
   "prime"
  ],
  "moods": [
   "tearjerker",
   "heartwarming"
  ],
  "themeColor": "#f59e0b",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "grave-of-the-fireflies",
  "imdbID": "tt0095327",
  "title": "Ateşböceklerinin Mezarı",
  "originalTitle": "Hotaru no Haka (Grave of the Fireflies)",
  "year": 1988,
  "imdbRating": 8.5,
  "imdbVotes": "330K",
  "duration": "1s 29dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "themeColor": "#ef4444",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "eternal-sunshine",
  "imdbID": "tt0338013",
  "title": "Sil Baştan",
  "originalTitle": "Eternal Sunshine of the Spotless Mind",
  "year": 2004,
  "imdbRating": 8.3,
  "imdbVotes": "1.1M",
  "duration": "1s 48dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "07-QBnEkgXU",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "netflix",
   "prime"
  ],
  "moods": [
   "tearjerker",
   "mind-bending",
   "prestige"
  ],
  "themeColor": "#06b6d4",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "manchester-by-the-sea",
  "imdbID": "tt4034228",
  "title": "Yaşamın Kıyısında",
  "originalTitle": "Manchester by the Sea",
  "year": 2016,
  "imdbRating": 7.8,
  "imdbVotes": "330K",
  "duration": "2s 17dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "5TyNHoFcqFY",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "tearjerker",
   "prestige"
  ],
  "themeColor": "#475569",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-father",
  "imdbID": "tt10272386",
  "title": "Baba",
  "originalTitle": "The Father",
  "year": 2020,
  "imdbRating": 8.2,
  "imdbVotes": "200K",
  "duration": "1s 37dk",
  "ageRating": "10+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTQzY2M5ZmUtZjBkNi00NTAzLTgzMTItODJlMzhhMDI5OGRhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "PSZTFO-HSzw",
  "isFeatured": false,
  "platforms": [
   "tvplus",
   "tod",
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
  "themeColor": "#8b5cf6",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "memento",
  "imdbID": "tt0209144",
  "title": "Akıl Defteri",
  "originalTitle": "Memento",
  "year": 2000,
  "imdbRating": 8.4,
  "imdbVotes": "1.3M",
  "duration": "1s 53dk",
  "ageRating": "13+",
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
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "4CV41hoyS8A",
  "isFeatured": true,
  "platforms": [
   "mubi",
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
  "featuredBadge": "Nolan Zirvesi",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "shutter-island",
  "imdbID": "tt1130884",
  "title": "Zindan Adası",
  "originalTitle": "Shutter Island",
  "year": 2010,
  "imdbRating": 8.2,
  "imdbVotes": "1.5M",
  "duration": "2s 18dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "5iaYLCiq5RM",
  "isFeatured": true,
  "platforms": [],
  "hubTags": [
   "netflix",
   "prime"
  ],
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "themeColor": "#8b5cf6",
  "featuredBadge": "Efsanevi Ters Köşe",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "tenet",
  "imdbID": "tt6723592",
  "title": "Tenet",
  "originalTitle": "Tenet",
  "year": 2020,
  "imdbRating": 7.3,
  "imdbVotes": "560K",
  "duration": "2s 30dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "LdOM0x0XDMo",
  "isFeatured": false,
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "hubTags": [
   "wb",
   "prime"
  ],
  "moods": [
   "mind-bending",
   "adrenaline"
  ],
  "themeColor": "#38bdf8",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "severance",
  "imdbID": "tt11280740",
  "platforms": [
   "apple"
  ],
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "featuredBadge": "Beyin Yakan Başyapıt",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "coherence",
  "imdbID": "tt2866360",
  "title": "Paralel Evren",
  "originalTitle": "Coherence",
  "year": 2013,
  "imdbRating": 7.2,
  "imdbVotes": "160K",
  "duration": "1s 29dk",
  "ageRating": "PG",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "sEceDz1Rodc",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "themeColor": "#6366f1",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "donnie-darko",
  "imdbID": "tt0246578",
  "title": "Donnie Darko",
  "originalTitle": "Donnie Darko",
  "year": 2001,
  "imdbRating": 8,
  "imdbVotes": "850K",
  "duration": "1s 53dk",
  "ageRating": "13+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMWE3NTYzZmEtM2U5MS00MDZhLTk2ZTQtZTgzNjg0ZGQ5ZjM0XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "bzLn8sYeM9o",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "themeColor": "#a855f7",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "predestination",
  "imdbID": "tt2397535",
  "title": "Kader",
  "originalTitle": "Predestination",
  "year": 2014,
  "imdbRating": 7.4,
  "imdbVotes": "310K",
  "duration": "1s 37dk",
  "ageRating": "18+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjcxZjhkOTAtNTAyMC00ZjAwLWJmODAtNDA0Mjc3YzZjMWYyXkEyXkFqcGc@._V1_SX1280.jpg",
  "trailerYoutubeId": "dLwKlV5M0ro",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "themeColor": "#8b5cf6",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "black-mirror",
  "imdbID": "tt2085059",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "jROLrhQkK78",
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
  "featuredBadge": "Netflix Fenomeni",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "source-code",
  "imdbID": "tt0945513",
  "title": "Yaşam Şifresi",
  "originalTitle": "Source Code",
  "year": 2011,
  "imdbRating": 7.5,
  "imdbVotes": "550K",
  "duration": "1s 33dk",
  "ageRating": "7+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "mnJegNyAb1w",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "mind-bending",
   "thrill",
   "adrenaline"
  ],
  "themeColor": "#38bdf8",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "mr-nobody",
  "imdbID": "tt0485947",
  "title": "Bay Hiçkimse",
  "originalTitle": "Mr. Nobody",
  "year": 2009,
  "imdbRating": 7.7,
  "imdbVotes": "250K",
  "duration": "2s 21dk",
  "ageRating": "R",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "vXf3gVYXlHg",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "mind-bending",
   "escapism"
  ],
  "themeColor": "#8b5cf6",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "john-wick-4",
  "imdbID": "tt10366206",
  "title": "John Wick: Bölüm 4",
  "originalTitle": "John Wick: Chapter 4",
  "year": 2023,
  "imdbRating": 7.7,
  "imdbVotes": "360K",
  "duration": "2s 49dk",
  "ageRating": "16+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "qEVUtrk8_B4",
  "isFeatured": true,
  "platforms": [
   "tvplus"
  ],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "themeColor": "#ef4444",
  "featuredBadge": "Saf Adrenalin Zirvesi",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "mad-max-fury-road",
  "imdbID": "tt1392190",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "hEJnMQG9ev8",
  "isFeatured": false,
  "platforms": [
   "tvplus",
   "hbo"
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
  "themeColor": "#f97316",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "top-gun-maverick",
  "imdbID": "tt1745960",
  "title": "Top Gun: Maverick",
  "originalTitle": "Top Gun: Maverick",
  "year": 2022,
  "imdbRating": 8.2,
  "imdbVotes": "710K",
  "duration": "2s 10dk",
  "ageRating": "10+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "giXco2jaZ_4",
  "isFeatured": false,
  "platforms": [
   "tvplus"
  ],
  "hubTags": [
   "netflix",
   "prime"
  ],
  "moods": [
   "adrenaline"
  ],
  "themeColor": "#0284c7",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "terminator-2",
  "imdbID": "tt0103064",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "CRRlbK5w8AE",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "adrenaline",
   "mind-bending",
   "prestige"
  ],
  "themeColor": "#38bdf8",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "mission-impossible-dead-reckoning",
  "imdbID": "tt9603212",
  "title": "Görevimiz Tehlike: Ölümcül Hesaplaşma",
  "originalTitle": "Mission: Impossible - Dead Reckoning Part One",
  "year": 2023,
  "imdbRating": 7.7,
  "imdbVotes": "280K",
  "duration": "2s 43dk",
  "ageRating": "PG-13",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "avz06PDqDbM",
  "isFeatured": false,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "themeColor": "#eab308",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "silence-of-the-lambs",
  "imdbID": "tt0102926",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "W6Mm8Sbe__o",
  "isFeatured": true,
  "platforms": [
   "netflix",
   "tvplus",
   "hbo",
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
  "featuredBadge": "5 Oscar Kazananı",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "prisoners",
  "imdbID": "tt1392214",
  "title": "Tutsak",
  "originalTitle": "Prisoners",
  "year": 2013,
  "imdbRating": 8.1,
  "imdbVotes": "800K",
  "duration": "2s 33dk",
  "ageRating": "R",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "bpXfcTF6iVk",
  "isFeatured": false,
  "platforms": [
   "tvplus",
   "prime"
  ],
  "hubTags": [
   "netflix",
   "prime"
  ],
  "moods": [
   "thrill"
  ],
  "themeColor": "#334155",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "gone-girl",
  "imdbID": "tt2267998",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "2-_-1nJf8Vg",
  "isFeatured": false,
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "hubTags": [
   "disney",
   "prime"
  ],
  "moods": [
   "thrill"
  ],
  "themeColor": "#0284c7",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "zodiac",
  "imdbID": "tt0443706",
  "title": "Zodiac",
  "originalTitle": "Zodiac",
  "year": 2007,
  "imdbRating": 7.7,
  "imdbVotes": "600K",
  "duration": "2s 37dk",
  "ageRating": "16+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "yNncHPl1UXg",
  "isFeatured": false,
  "platforms": [
   "netflix"
  ],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "thrill",
   "prestige"
  ],
  "themeColor": "#475569",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-intouchables",
  "imdbID": "tt1675434",
  "title": "Can Dostum (Fransız)",
  "originalTitle": "Intouchables",
  "year": 2011,
  "imdbRating": 8.5,
  "imdbVotes": "930K",
  "duration": "1s 52dk",
  "ageRating": "18+",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "34WIbmXkewU",
  "isFeatured": true,
  "platforms": [],
  "hubTags": [
   "prime"
  ],
  "moods": [
   "heartwarming",
   "chill-comedy",
   "prestige"
  ],
  "themeColor": "#10b981",
  "featuredBadge": "İç Isıtan Şaheser",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "amelie",
  "imdbID": "tt0211915",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTNmYzY0MWQtZGZmNy00Y2Y4LWFmMDQtMTZjYTdiYzEwZGQ2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "HUECWi5pX7o",
  "isFeatured": false,
  "platforms": [
   "mubi",
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
  "themeColor": "#f43f5e",
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ratatouille",
  "imdbID": "tt0382932",
  "title": "Ratatuy",
  "originalTitle": "Ratatouille",
  "year": 2007,
  "imdbRating": 8.1,
  "imdbVotes": "820K",
  "duration": "1s 51dk",
  "ageRating": "G",
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
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
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
  "themeColor": "#eab308",
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "baba-ii",
  "imdbID": "tt0071562",
  "title": "Baba II",
  "originalTitle": "The Godfather Part II",
  "year": 1974,
  "imdbRating": 9,
  "imdbVotes": "1.5M",
  "duration": "3s 22dk",
  "ageRating": "13+",
  "genres": [
   "Suç",
   "Dram"
  ],
  "director": "Francis Ford Coppola",
  "cast": [
   "Al Pacino",
   "Robert De Niro",
   "Robert Duvall"
  ],
  "tagline": "Aile tahtı için kan gerekir.",
  "awards": "Won 6 Oscars. 17 wins & 21 nominations total",
  "summary": "Michael Corleone, babasının bıraktığı imparatorluğu 1950'lerin Las Vegas'ında büyütürken, genç Vito Corleone'nin Sicilya'dan New York'a uzanan yükseliş hikâyesiyle paralel ilerler. Güç, aile sadakati ve paranoyanın iç içe geçtiği bu devam filmi, sinema tarihinin en çok beğenilen devam filmlerinden biridir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "TWOKY4Bg0SI",
  "platforms": [
   "tvplus"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "12-ofkeli-adam",
  "imdbID": "tt0050083",
  "title": "12 Öfkeli Adam",
  "originalTitle": "12 Angry Men",
  "year": 1957,
  "imdbRating": 9,
  "imdbVotes": "1M",
  "duration": "1s 36dk",
  "ageRating": "15+",
  "genres": [
   "Suç",
   "Dram"
  ],
  "director": "Sidney Lumet",
  "cast": [
   "Henry Fonda",
   "Lee J. Cobb",
   "Martin Balsam"
  ],
  "tagline": "Hayat bir oya bağlı.",
  "awards": "Nominated for 3 Oscars. 16 wins & 12 nominations total",
  "summary": "Bir cinayet davasında jüri görevlisi on iki adam, dinlenme odasında ilk oylamayı yapar: 11 suçlu, 1 masum. Tek şüpheci ses, herkesi kanıtları yeniden düşünmeye başlar. Henry Fonda'nın olduğu bu tek mekân draması, makul şüphe kavramını sinema tarihinin en etkili derslerinden biri haline getirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "TEN-2uTi2c0",
  "platforms": [
   "mubi",
   "prime"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "yuzuklerin-efendisi-yuzuk-kardesligi",
  "imdbID": "tt0120737",
  "title": "Yüzüklerin Efendisi: Yüzük Kardeşliği",
  "originalTitle": "The Lord of the Rings: The Fellowship of the Ring",
  "year": 2001,
  "imdbRating": 8.9,
  "imdbVotes": "2.2M",
  "duration": "2s 58dk",
  "ageRating": "13+",
  "genres": [
   "Macera",
   "Dram",
   "Fantastik"
  ],
  "director": "Peter Jackson",
  "cast": [
   "Elijah Wood",
   "Ian McKellen",
   "Orlando Bloom"
  ],
  "tagline": "Tek yüzük hepsini yönetir.",
  "awards": "Won 4 Oscars. 126 wins & 127 nominations total",
  "summary": "Küçük bir hobbit olan Frodo Baggins, dünyayı köleliğe sürükleyecek bir yüzüğü yok etmek için Shire'dan çıkar. İnsanlar, elfler, cüceler ve hobbitlerden oluşan Yüzük Kardeşliği, Orta Dünya'nın en tehlikeli yolculuğuna başlar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "aStYWD25fAQ",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "escapism",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "yuzuklerin-efendisi-iki-kule",
  "imdbID": "tt0167261",
  "title": "Yüzüklerin Efendisi: İki Kule",
  "originalTitle": "The Lord of the Rings: The Two Towers",
  "year": 2002,
  "imdbRating": 8.8,
  "imdbVotes": "2M",
  "duration": "2s 59dk",
  "ageRating": "13+",
  "genres": [
   "Macera",
   "Dram",
   "Fantastik"
  ],
  "director": "Peter Jackson",
  "cast": [
   "Elijah Wood",
   "Ian McKellen",
   "Viggo Mortensen"
  ],
  "tagline": "Savaş yaklaşıyor.",
  "awards": "Won 2 Oscars. 132 wins & 139 nominations total",
  "summary": "Kardeşlik dağılmıştır: Frodo ve Sam yüzüğü Mordor'a taşırken, Aragorn, Legolas ve Gimli Rohan'ı kurtarmak için savaşır. Helm'in Dereleri'ndeki destansı muharebe, orta bölümü unutulmaz kılar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "LbfMDwc4azU",
  "platforms": [],
  "themeColor": "#f59e0b",
  "moods": [
   "escapism",
   "adrenaline"
  ]
 },
 {
  "id": "yuzuklerin-efendisi-kral-n-donusu",
  "imdbID": "tt0167260",
  "title": "Yüzüklerin Efendisi: Kralın Dönüşü",
  "originalTitle": "The Lord of the Rings: The Return of the King",
  "year": 2003,
  "imdbRating": 9,
  "imdbVotes": "2.2M",
  "duration": "3s 21dk",
  "ageRating": "13+",
  "genres": [
   "Macera",
   "Dram",
   "Fantastik"
  ],
  "director": "Peter Jackson",
  "cast": [
   "Elijah Wood",
   "Viggo Mortensen",
   "Ian McKellen"
  ],
  "tagline": "Bir kral geri dönecek.",
  "awards": "Won 11 Oscars. 215 wins & 124 nominations total",
  "summary": "Orta Dünya'nın kaderi Minas Tirith surlarında karar verilir; Frodo ve Sam, Gollum'un ihanetiyle test edilirken kahramanlar son savaşa yürür. 11 Oscar kazanarak üçleme noktası koyan bu final, destansı sinemanın zirvesidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "r5X-hFf6Bwo",
  "platforms": [],
  "themeColor": "#f59e0b",
  "moods": [
   "escapism",
   "adrenaline"
  ]
 },
 {
  "id": "sherlock",
  "imdbID": "tt1475582",
  "title": "Sherlock",
  "originalTitle": "Sherlock",
  "year": 2010,
  "imdbRating": 9,
  "imdbVotes": "1.1M",
  "duration": "4 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gizem"
  ],
  "director": "N/A",
  "cast": [
   "Benedict Cumberbatch",
   "Martin Freeman",
   "Una Stubbs"
  ],
  "tagline": "Oyun başladı.",
  "awards": "Won 9 Primetime Emmys. 95 wins & 185 nominations total",
  "summary": "Modern Londra'da Sherlock Holmes ve Dr. Watson, akıllı telefon çağının en zor cinayetlerini çözüyor; Moriarty'nin bilmeceleri ruhuna işler. Cumberbatch ile Freeman'ın Emmy'li ikilisi, dedektif türünü 21. yüzyıla taşıdı.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjRhZDdjMDYtMTg5Yy00NGI4LWI3ZDgtYjNkNDc4MzJkNDRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjRhZDdjMDYtMTg5Yy00NGI4LWI3ZDgtYjNkNDc4MzJkNDRjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Nj7ZSUkTTVI",
  "platforms": [
   "disney",
   "tvplus"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "s-k-dostlar",
  "imdbID": "tt0099685",
  "title": "Sıkı Dostlar",
  "originalTitle": "GoodFellas",
  "year": 1990,
  "imdbRating": 8.7,
  "imdbVotes": "1.4M",
  "duration": "2s 25dk",
  "ageRating": "18+",
  "genres": [
   "Biyografi",
   "Suç",
   "Dram"
  ],
  "director": "Martin Scorsese",
  "cast": [
   "Robert De Niro",
   "Ray Liotta",
   "Joe Pesci"
  ],
  "tagline": "Ondan asla çıkamazsın.",
  "awards": "Won 1 Oscar. 44 wins & 38 nominations total",
  "summary": "Henry Hill, genç yaşından itibaren mafya ailesinde yükselir; para, saygınlık ve tehlike bir aradadır. Scorsese'nin kamera hareketleriyle ödüllendirdiği bu klasik, gangster sinemasının gerçekçi ve manyak enerjisini tek seferde tanımlar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "2ilzidi_J8Q",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "casino",
  "imdbID": "tt0112641",
  "title": "Casino",
  "originalTitle": "Casino",
  "year": 1995,
  "imdbRating": 8.2,
  "imdbVotes": "629K",
  "duration": "2s 58dk",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram"
  ],
  "director": "Martin Scorsese",
  "cast": [
   "Robert De Niro",
   "Sharon Stone",
   "Joe Pesci"
  ],
  "tagline": "Kumarda her şey kaybedilebilir.",
  "awards": "Nominated for 1 Oscar. 4 wins & 11 nominations total",
  "summary": "Sam \"Ace\" Rothstein, mafyanın parasını Las Vegas'ın en büyük kumarhanesinde yönetir; sadık eşi, aile dostu ve gaddar ortağı Nicky her şeyi içinden çıkılmaz hale getirir. Scorsese'nin operatik suç destanı, Vegas'ın altın çağını hiçbir maskeyle gizlemez.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "EJXDMwGWhoA",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "heat",
  "imdbID": "tt0113277",
  "title": "Heat",
  "originalTitle": "Heat",
  "year": 1995,
  "imdbRating": 8.3,
  "imdbVotes": "821K",
  "duration": "2s 50dk",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Dram"
  ],
  "director": "Michael Mann",
  "cast": [
   "Al Pacino",
   "Robert De Niro",
   "Val Kilmer"
  ],
  "tagline": "İki profesyonel, tek kader.",
  "awards": "15 nominations total",
  "summary": "Michael Mann'ın destansı suç dramında, Los Angeles'ta profesyonel bir soygun ekibinin lideri ile onu kovalayan sessiz bir dedektif ilk kez bir restoranda karşı karşıya gelir. İki profesyonelin zekâ ve disiplin çatışması, sinema tarihinin en iyi takip sahnelerinden biriyle taçlanır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "h7N1gsQY4Io",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "kostebek",
  "imdbID": "tt0407887",
  "title": "Köstebek",
  "originalTitle": "The Departed",
  "year": 2006,
  "imdbRating": 8.5,
  "imdbVotes": "1.6M",
  "duration": "2s 31dk",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gerilim"
  ],
  "director": "Martin Scorsese",
  "cast": [
   "Leonardo DiCaprio",
   "Matt Damon",
   "Jack Nicholson"
  ],
  "tagline": "Kiminle çalıştığını bilmiyorsun.",
  "awards": "Won 4 Oscars. 100 wins & 141 nominations total",
  "summary": "Boston mafyasına sızmış bir polis ve polis teşkilatına sızmış bir mafya ajanı, birbirlerini açığa çıkarmak için yarışır. Scorsese'nin Oscar'lı bu gerilimi, kimseyle güvenli olmayan bir şehirde köstebeğin köstebeği avladığını anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "iojhqm0JTW4",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "django-unchained",
  "imdbID": "tt1853728",
  "title": "Django Unchained",
  "originalTitle": "Django Unchained",
  "year": 2012,
  "imdbRating": 8.5,
  "imdbVotes": "1.9M",
  "duration": "2s 45dk",
  "ageRating": "18+",
  "genres": [
   "Dram",
   "Western"
  ],
  "director": "Quentin Tarantino",
  "cast": [
   "Jamie Foxx",
   "Christoph Waltz",
   "Leonardo DiCaprio"
  ],
  "tagline": "İntikamın adı Django.",
  "awards": "Won 2 Oscars. 58 wins & 158 nominations total",
  "summary": "Dr. King Schultz, köle Django'yu özgürlüğüne kavuşturur; karısını kurtarmak için Django avcı olur ve Mississippi'nin en karanlık plantasyonuna yürür. Tarantino'nun ödüllü western'i, intikam hikâyesini gövde gösterisi sahnelerle harmanlar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "0fUCuvNlOCg",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "adrenaline",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "inglourious-basterds",
  "imdbID": "tt0361748",
  "title": "Inglourious Basterds",
  "originalTitle": "Inglourious Basterds",
  "year": 2009,
  "imdbRating": 8.4,
  "imdbVotes": "1.8M",
  "duration": "2s 33dk",
  "ageRating": "15+",
  "genres": [
   "Dram",
   "Savaş"
  ],
  "director": "Quentin Tarantino",
  "cast": [
   "Brad Pitt",
   "Diane Kruger",
   "Eli Roth"
  ],
  "tagline": "Her sahnede bir hesap var.",
  "awards": "Won 1 Oscar. 134 wins & 173 nominations total",
  "summary": "İkinci Dünya Savaşı'nda Yahudi kökenli Amerikan askerlerinden oluşan bir intikam ekibi, Fransız işgaline alttan vuran bir sinema salonu planına bulaşır. Tarantino'nun alışılmadık savaş destanı, diyaloğu bir silah gibi kullanan unutulmaz sahnelerle doludur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "KnrRy6kSFF0",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-wolf-of-wall-street",
  "imdbID": "tt0993846",
  "title": "The Wolf of Wall Street",
  "originalTitle": "The Wolf of Wall Street",
  "year": 2013,
  "imdbRating": 8.2,
  "imdbVotes": "1.8M",
  "duration": "3s 0dk",
  "ageRating": "18+",
  "genres": [
   "Biyografi",
   "Komedi",
   "Suç"
  ],
  "director": "Martin Scorsese",
  "cast": [
   "Leonardo DiCaprio",
   "Jonah Hill",
   "Margot Robbie"
  ],
  "tagline": "Hırs sınırsız.",
  "awards": "Nominated for 5 Oscars. 38 wins & 181 nominations total",
  "summary": "Jordan Belfort, 20'li yaşlarında yolsuzlukla dolu bir borsa imparatorluğu kurar; lüks, partiler ve FBI onu yaklaştıkça hikâye daha çılgın döner. Scorsese ile DiCaprio'nun en doyumsuz iş birliği, güç hırsının komik ve karanlık yüzünü aynı sahnede gösterir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "iszwuX1AK6A",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "chill-comedy"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "yenilmeziler",
  "imdbID": "tt0848228",
  "title": "Yenilmeziler",
  "originalTitle": "The Avengers",
  "year": 2012,
  "imdbRating": 8,
  "imdbVotes": "1.6M",
  "duration": "2s 23dk",
  "ageRating": "6+",
  "genres": [
   "Aksiyon",
   "Bilim Kurgu"
  ],
  "director": "Joss Whedon",
  "cast": [
   "Robert Downey Jr.",
   "Chris Evans",
   "Scarlett Johansson"
  ],
  "tagline": "Kahramanlar birleşiyor.",
  "awards": "Nominated for 1 Oscar. 43 wins & 81 nominations total",
  "summary": "Thor'un kardeşi Loki Dünya'yı ele geçirmek için geldiğinde, Nick Fury en güçlü kahramanları tek bir takımda toplar. Demir Adam, Kaptan Amerika, Hulk ve diğerleri önce birbirleriyle, sonra uzay ordusuyla savaşır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "eOrNdBpGMv8",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "yenilmezler-sonsuzluk-savas",
  "imdbID": "tt4154756",
  "title": "Yenilmezler: Sonsuzluk Savaşı",
  "originalTitle": "Avengers: Infinity War",
  "year": 2018,
  "imdbRating": 8.4,
  "imdbVotes": "1.4M",
  "duration": "2s 29dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Anthony Russo",
  "cast": [
   "Robert Downey Jr.",
   "Chris Hemsworth",
   "Mark Ruffalo"
  ],
  "tagline": "Evrenin kaderi tek elinde.",
  "awards": "Nominated for 1 Oscar. 48 wins & 80 nominations total",
  "summary": "Thanos, evrenin yarısını yok etmek için sonsuzluk taşlarını toplamaya başlar; kahramanlar dünyada ve uzayda iki cephe açar. Marvel'ın on yıllık yapısını sarsan bu bölüm, sinema tarihinin en iddialı kavuşmalarından birini sunar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "6ZfuNTqbHE8",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "spider-man-no-way-home",
  "imdbID": "tt10872600",
  "title": "Spider-Man: No Way Home",
  "originalTitle": "Spider-Man: No Way Home",
  "year": 2021,
  "imdbRating": 8.1,
  "imdbVotes": "1.1M",
  "duration": "2s 28dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Macera",
   "Fantastik"
  ],
  "director": "Jon Watts",
  "cast": [
   "Tom Holland",
   "Zendaya",
   "Benedict Cumberbatch"
  ],
  "tagline": "Bir kahramanın bedeli.",
  "awards": "Nominated for 1 Oscar. 35 wins & 72 nominations total",
  "summary": "Kimliğini dünyaya açıkladıktan sonra Peter Parker, Doctor Strange'den yardım ister ama çoklu evren kapısı yanlış açılır. Eski düşmanlar ve beklenmedik yüzler, Peter'ın en kişisel savaşını başlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "JfVOs4VSpmA",
  "platforms": [
   "disney",
   "tvplus",
   "tod"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "terminator",
  "imdbID": "tt0088247",
  "title": "Terminatör",
  "originalTitle": "The Terminator",
  "year": 1984,
  "imdbRating": 8.1,
  "imdbVotes": "1M",
  "duration": "1s 47dk",
  "ageRating": "15+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "James Cameron",
  "cast": [
   "Arnold Schwarzenegger",
   "Linda Hamilton",
   "Michael Biehn"
  ],
  "tagline": "Geri gelecek.",
  "awards": "10 wins & 13 nominations total",
  "summary": "Geleceğe hakim makineler, Sarah Connor'ı doğmadan kurtarılan liderleri silmek için bir cyborg geri gönderir; onu koruyan tek asker de peşindedir. Cameron'ın çıkış destanı, aksiyon-korku bilimkurgusunun kalıcı şablonudur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "nGrW-OR2uDk",
  "platforms": [
   "prime",
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "die-hard",
  "imdbID": "tt0095016",
  "title": "Die Hard",
  "originalTitle": "Die Hard",
  "year": 1988,
  "imdbRating": 8.2,
  "imdbVotes": "1M",
  "duration": "2s 12dk",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Gerilim"
  ],
  "director": "John McTiernan",
  "cast": [
   "Bruce Willis",
   "Alan Rickman",
   "Bonnie Bedelia"
  ],
  "tagline": "Yippee-ki-yay.",
  "awards": "Nominated for 4 Oscars. 10 wins & 12 nominations total",
  "summary": "Noel'de Los Angeles'ta bir gökdelene düzenlenen terörist soygununda tek tanığı polis John McClane, ayakkabısız bir savaş başlatır. Aksiyon sinemasının kalıp kurucusu, yükseklik ve terle dolu bir klasiği yazdı.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "jaJuwKCmJbY",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "bourne-kimligi",
  "imdbID": "tt0258463",
  "title": "Bourne Kimliği",
  "originalTitle": "The Bourne Identity",
  "year": 2002,
  "imdbRating": 7.8,
  "imdbVotes": "622K",
  "duration": "1s 59dk",
  "ageRating": "15+",
  "genres": [
   "Aksiyon",
   "Gizem",
   "Gerilim"
  ],
  "director": "Doug Liman",
  "cast": [
   "Franka Potente",
   "Matt Damon",
   "Chris Cooper"
  ],
  "tagline": "Kim olduğunu hatırla.",
  "awards": "3 wins & 6 nominations total",
  "summary": "Amnezyalı bir adam, kendi bedeninin bir silah olduğunu keşfeder; kimliğini ararken CIA'nin suikast programını açığa çıkarır. Greengrass öncesi bu ilk bölüm, ajan sinemasını gerçekçi zekâyla yeniden kurdu.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTk1ZTcyMWMtMWUxYS00MmEzLTlmODYtOTk1MGRjOTg1ZjlmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTk1ZTcyMWMtMWUxYS00MmEzLTlmODYtOTk1MGRjOTg1ZjlmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "FpKaB5dvQ4g",
  "platforms": [
   "prime",
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "taken",
  "imdbID": "tt0936501",
  "title": "Taken",
  "originalTitle": "Taken",
  "year": 2008,
  "imdbRating": 8.4,
  "imdbVotes": "25",
  "duration": "0s 5dk",
  "ageRating": "13+",
  "genres": [
   "Short",
   "Komedi"
  ],
  "director": "Don Sniffin",
  "cast": [
   "Ryan Dean",
   "Ellen Ranson"
  ],
  "tagline": "Onu bulacağım.",
  "awards": "Popüler Sinema/Dizi",
  "summary": "Eski ajan Bryan Mills, Paris'te kaçırılan kızını 96 saat içinde kurtarmak için becerilerini yeniden kullanır. Telefon konuşması sahnesi, intikam aksiyonunun en bilinen anlaşma cümlesini kurdu.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDVlZDNhMGItNGI4Yy00MWU0LTg0ZDctZDA3ZGFmMzU0OGQzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQzODk0NTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDVlZDNhMGItNGI4Yy00MWU0LTg0ZDctZDA3ZGFmMzU0OGQzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQzODk0NTU@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "XK9zL0ze9O4",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "kacak",
  "imdbID": "tt0106977",
  "title": "Kaçak",
  "originalTitle": "The Fugitive",
  "year": 1993,
  "imdbRating": 7.8,
  "imdbVotes": "351K",
  "duration": "2s 10dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Suç",
   "Dram"
  ],
  "director": "Andrew Davis",
  "cast": [
   "Harrison Ford",
   "Tommy Lee Jones",
   "Sela Ward"
  ],
  "tagline": "Masumiyeti kanıtla.",
  "awards": "Won 1 Oscar. 13 wins & 37 nominations total",
  "summary": "Eşinin cinayetiyle suçlanan doktor Richard Kimble, yolda bir otobüs kazasıyla kaçar; onun masumiyetine takıntılı bir polis şerif peşine düşer. Oscar'lı Tommy Lee Jones performansı, takip geriliminin altın şablonudur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BM2RjMjEwODUtYTE4OC00MzhkLThjMjItZjYyZjk3YzA4YWUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BM2RjMjEwODUtYTE4OC00MzhkLThjMjItZjYyZjk3YzA4YWUxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "OlYsVq6FpuU",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "okyanus-un-on-biri",
  "imdbID": "tt0240772",
  "title": "Okyanus'un On Biri",
  "originalTitle": "Ocean's Eleven",
  "year": 2001,
  "imdbRating": 7.7,
  "imdbVotes": "685K",
  "duration": "1s 56dk",
  "ageRating": "PG-13",
  "genres": [
   "Suç",
   "Gerilim"
  ],
  "director": "Steven Soderbergh",
  "cast": [
   "George Clooney",
   "Brad Pitt",
   "Julia Roberts"
  ],
  "tagline": "Plan kusursuz.",
  "awards": "4 wins & 20 nominations total",
  "summary": "Danny Ocean, Las Vegas'ın üç kumarhanesini aynı gece soyacak profesyonel bir on birli ekip kurar; eski eşi de sahnenin içindedir. Soderbergh'in şık soygun komedisi, planı zevkle kurup zarifçe açar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmNhZDkxYTgtMDM3ZC00NTQ3LWFjZTUtNzc1Y2QyNWZjNDRmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMmNhZDkxYTgtMDM3ZC00NTQ3LWFjZTUtNzc1Y2QyNWZjNDRmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "imm6OR605UI",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "chill-comedy",
   "escapism"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "now-you-see-me",
  "imdbID": "tt1670345",
  "title": "Now You See Me",
  "originalTitle": "Now You See Me",
  "year": 2013,
  "imdbRating": 7.2,
  "imdbVotes": "780K",
  "duration": "1s 55dk",
  "ageRating": "13+",
  "genres": [
   "Suç",
   "Gizem",
   "Gerilim"
  ],
  "director": "Louis Leterrier",
  "cast": [
   "Jesse Eisenberg",
   "Common",
   "Mark Ruffalo"
  ],
  "tagline": "Daha yakından bak.",
  "awards": "1 win & 3 nominations total",
  "summary": "Dünyaca ünlü dört illüzyonist, bir FBI ajanını ve bir illüzyon eleştirmenini kovalayan gösterilerde bankaları soyar. Sürprizli kurgusuyla bu soygun-hile filmi, izleyiciyi de seyirci koltuğuna oturtur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "4OtM9j2lcUA",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "v-for-vendetta",
  "imdbID": "tt0434409",
  "title": "V for Vendetta",
  "originalTitle": "V for Vendetta",
  "year": 2005,
  "imdbRating": 8.1,
  "imdbVotes": "1.3M",
  "duration": "2s 12dk",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Dram",
   "Bilim Kurgu"
  ],
  "director": "James McTeigue",
  "cast": [
   "Hugo Weaving",
   "Natalie Portman",
   "Rupert Graves"
  ],
  "tagline": "5 Kasımı hatırla.",
  "awards": "7 wins & 29 nominations total",
  "summary": "Totaliter İngiltere'de maske ve düşünce olarak yaşayan bir devrimci V, genç Evey'i kendi özgürlük dersinden geçirir. Wachowski'lerin ikonik uyarlaması, \"fikirler kurşun geçirmez\" cümlesini bayrak yapar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDEwOTRjNjgtOGY0MC00NGYxLWFmYmQtNjc1ZjVhMTc0OWUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDEwOTRjNjgtOGY0MC00NGYxLWFmYmQtNjc1ZjVhMTc0OWUxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "lSA7mAHolAw",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "top-gun",
  "imdbID": "tt0092099",
  "title": "Top Gun",
  "originalTitle": "Top Gun",
  "year": 1986,
  "imdbRating": 7,
  "imdbVotes": "562K",
  "duration": "1s 49dk",
  "ageRating": "10+",
  "genres": [
   "Aksiyon",
   "Dram"
  ],
  "director": "Tony Scott",
  "cast": [
   "Tom Cruise",
   "Tim Robbins",
   "Kelly McGillis"
  ],
  "tagline": "İhtiyacın var mı?",
  "awards": "Won 1 Oscar. 11 wins & 10 nominations total",
  "summary": "Genç pilot Maverick, ABD donanmasının en elit savaş uçağı okulunda yetenek ve kibriyle yarışır; bir kayıp, onu gerçek bir takım oyuncusu yapar. Savaş uçağı sinemasının ikonik klasiği, gökyüzünü bir dans pistine çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZmVjNzQ3MjYtYTZiNC00Y2YzLWExZTEtMTM2ZDllNDI0MzgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZmVjNzQ3MjYtYTZiNC00Y2YzLWExZTEtMTM2ZDllNDI0MzgyXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "xa_z57UatDY",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "rocky",
  "imdbID": "tt0075148",
  "title": "Rocky",
  "originalTitle": "Rocky",
  "year": 1976,
  "imdbRating": 8.1,
  "imdbVotes": "703K",
  "duration": "2s 0dk",
  "ageRating": "PG",
  "genres": [
   "Dram",
   "Spor"
  ],
  "director": "John G. Avildsen",
  "cast": [
   "Sylvester Stallone",
   "Talia Shire",
   "Burt Young"
  ],
  "tagline": "Bir şansı var.",
  "awards": "Won 3 Oscars. 23 wins & 23 nominations total",
  "summary": "Filadelfia'nın küçük boksörü Rocky Balboa, dünya şampiyonuyla dövüşme şansını hayatının tek imkânı olarak yakalar. Oscar'lı bu klasiğin merdiven koşusu, azmin sinema diliyle kalıcı müziğidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDEyY2M2MGMtYjg5OC00ZWFjLWFkZDQtNmQzZTdiYmYzZTBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDEyY2M2MGMtYjg5OC00ZWFjLWFkZDQtNmQzZTdiYmYzZTBkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "-Hk-LYcavrw",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "heartwarming",
   "prestige"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "creed",
  "imdbID": "tt3076658",
  "title": "Creed",
  "originalTitle": "Creed",
  "year": 2015,
  "imdbRating": 7.6,
  "imdbVotes": "341K",
  "duration": "2s 13dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Dram",
   "Spor"
  ],
  "director": "Ryan Coogler",
  "cast": [
   "Michael B. Jordan",
   "Sylvester Stallone",
   "Tessa Thompson"
  ],
  "tagline": "Mirası taşı.",
  "awards": "Nominated for 1 Oscar. 46 wins & 66 nominations total",
  "summary": "Apollo Creed'in oğlu Adonis, Rocky Balboa'dan eğitim isteyen kendi hayaline doğru yürür; iki kuşağın boksü birbirini iyileştirir. Serinin sevilen dönüşü, miras ile azmin yeni nesil hikâyesidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNWM3NjY2ZDctMGZiYy00OGFlLThkMTktOTY2MDM2YjE2OTliXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNWM3NjY2ZDctMGZiYy00OGFlLThkMTktOTY2MDM2YjE2OTliXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Uv554B7YHk4",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "heartwarming",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "warrior",
  "imdbID": "tt1291584",
  "title": "Warrior",
  "originalTitle": "Warrior",
  "year": 2011,
  "imdbRating": 8.1,
  "imdbVotes": "534K",
  "duration": "2s 20dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Dram",
   "Spor"
  ],
  "director": "Gavin O&apos;Connor",
  "cast": [
   "Tom Hardy",
   "Nick Nolte",
   "Joel Edgerton"
  ],
  "tagline": "Aile aynı halkada.",
  "awards": "Nominated for 1 Oscar. 6 wins & 22 nominations total",
  "summary": "Kırık bir ailenin iki kardeşi, karma dövüş turnuvasında aynı halkada karşı karşıya gelir; babalarının dönüşü eski yaraları açar. O'Connor'ın çok ödüllü bu dramı, dövüşü aile terapisine çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Pq4zik2cV-o",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "tearjerker",
   "prestige"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ford-ferrari-ye-kars",
  "imdbID": "tt1950186",
  "title": "Ford Ferrari'ye Karşı",
  "originalTitle": "Ford v Ferrari",
  "year": 2019,
  "imdbRating": 8.1,
  "imdbVotes": "589K",
  "duration": "2s 32dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Biyografi",
   "Dram"
  ],
  "director": "James Mangold",
  "cast": [
   "Matt Damon",
   "Christian Bale",
   "Jon Bernthal"
  ],
  "tagline": "Hız kararlılık ister.",
  "awards": "Won 2 Oscars. 26 wins & 86 nominations total",
  "summary": "Ford, Ferrari'yi Le Mans'ta yenmek için mühendis Carroll Shelby ile sert pilot Ken Miles'ı işe alır; şirket politikası, hızın bedelini artırır. Mangold'ın takıntılı yarış dramı, motor sporlarının ruhunu gösterir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "e8v_dqYvPx8",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "adrenaline"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "rush",
  "imdbID": "tt1979320",
  "title": "Rush",
  "originalTitle": "Rush",
  "year": 2013,
  "imdbRating": 8.1,
  "imdbVotes": "568K",
  "duration": "2s 3dk",
  "ageRating": "13+",
  "genres": [
   "Biyografi",
   "Dram",
   "Spor"
  ],
  "director": "Ron Howard",
  "cast": [
   "Daniel Brühl",
   "Chris Hemsworth",
   "Olivia Wilde"
  ],
  "tagline": "Pistte iki ruh.",
  "awards": "Won 1 BAFTA Award. 6 wins & 67 nominations total",
  "summary": "1976 Formula 1 sezonunda Hunt ile Lauda'nın zıt karakterleri, pistte hayatın sınırında bir rekabete dönüşür. Howard'ın yarış dramı, cesareti ve kibirin bedelini motor sesiyle anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTZhOGQxM2ItNGQyYy00YzE5LWI5MjMtNmMzNGQzNDE1OTUzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTZhOGQxM2ItNGQyYy00YzE5LWI5MjMtNmMzNGQzNDE1OTUzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "4XA73ni9eVs",
  "platforms": [
   "mubi",
   "prime"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "yesil-rehber",
  "imdbID": "tt6966692",
  "title": "Yeşil Rehber",
  "originalTitle": "Green Book",
  "year": 2018,
  "imdbRating": 8.2,
  "imdbVotes": "707K",
  "duration": "2s 10dk",
  "ageRating": "7+",
  "genres": [
   "Biyografi",
   "Komedi",
   "Dram"
  ],
  "director": "Peter Farrelly",
  "cast": [
   "Viggo Mortensen",
   "Mahershala Ali",
   "Linda Cardellini"
  ],
  "tagline": "Dostluk yol bulur.",
  "awards": "Won 3 Oscars. 58 wins & 125 nominations total",
  "summary": "1962'de sert New York bouncer Tony, siyah piyanist Don Shirley'in Güney turnuvasında şoförü olur; iki dünya yol boyu birbirini öğretir. Oscar'lı bu yol filmi, dostluğun ırksal duvarları nasıl kaldırdığını gösterir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "_rPFXcqBWuU",
  "platforms": [
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "heartwarming",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "mutlulugun-pesinde",
  "imdbID": "tt0454921",
  "title": "Mutluluğun Peşinde",
  "originalTitle": "The Pursuit of Happyness",
  "year": 2006,
  "imdbRating": 8,
  "imdbVotes": "633K",
  "duration": "1s 57dk",
  "ageRating": "13+",
  "genres": [
   "Biyografi",
   "Dram"
  ],
  "director": "Gabriele Muccino",
  "cast": [
   "Will Smith",
   "Thandiwe Newton",
   "Jaden Smith"
  ],
  "tagline": "Mutluluk peşinde.",
  "awards": "Nominated for 1 Oscar. 12 wins & 26 nominations total",
  "summary": "Chris Gardner, oğluyla birlikte evsiz kalır; staj programına giren bu baba, metronun altında umutu taşır. Smith'in gerçek babasıyla oynadığı bu dram, azmin en dokunaklı gerçek hikâyesidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "DMOBlEcRuw8",
  "platforms": [
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "tearjerker",
   "heartwarming"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "olu-ozanlar-dernegi",
  "imdbID": "tt0097165",
  "title": "Ölü Ozanlar Derneği",
  "originalTitle": "Dead Poets Society",
  "year": 1989,
  "imdbRating": 8.1,
  "imdbVotes": "672K",
  "duration": "2s 8dk",
  "ageRating": "G",
  "genres": [
   "Komedi",
   "Dram"
  ],
  "director": "Peter Weir",
  "cast": [
   "Robin Williams",
   "Robert Sean Leonard",
   "Ethan Hawke"
  ],
  "tagline": "Carpe diem.",
  "awards": "Won 1 Oscar. 20 wins & 19 nominations total",
  "summary": "Sıkı bir hazırlık okulunda gelen yeni edebiyat öğretmeni Keating, öğrencilere şiiri ve kendi seslerini keşfettirir; baskıyla çarpışma kaçınılmazdır. Williams'ın klasik dramı, \"Carpe Diem\"i sinema diline kazıdı.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "ye4KFyWu2do",
  "platforms": [
   "disney"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "tearjerker",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "inan-lmazlar",
  "imdbID": "tt0317705",
  "title": "İnanılmazlar",
  "originalTitle": "The Incredibles",
  "year": 2004,
  "imdbRating": 8,
  "imdbVotes": "919K",
  "duration": "1s 55dk",
  "ageRating": "PG",
  "genres": [
   "Animasyon",
   "Aksiyon",
   "Macera"
  ],
  "director": "Brad Bird",
  "cast": [
   "Craig T. Nelson",
   "Samuel L. Jackson",
   "Holly Hunter"
  ],
  "tagline": "Aile bir takım.",
  "awards": "Won 2 Oscars. 70 wins & 56 nominations total",
  "summary": "Güçleri yasaklanan süper kahraman bir aile, suburban hayatın altında gizli görevlere karışır; ailenin kendisi en güçlü takımdır. Pixar'ın Oscar'lı eseri, aile komedisini aksiyon sinemasıyla aynı evde büyütür.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "-UaGUdNJdRQ",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "escapism"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "canavarlar-sirketi",
  "imdbID": "tt0198781",
  "title": "Canavarlar Şirketi",
  "originalTitle": "Monsters, Inc.",
  "year": 2001,
  "imdbRating": 8.1,
  "imdbVotes": "1.1M",
  "duration": "1s 32dk",
  "ageRating": "G",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "Pete Docter",
  "cast": [
   "Billy Crystal",
   "John Goodman",
   "Mary Gibbs"
  ],
  "tagline": "Korku enerji.",
  "awards": "Won 1 Oscar. 15 wins & 38 nominations total",
  "summary": "Canavarlar şirketi, çocuk korkusuyla enerji üretir; ama küçük Boo'nun kapısından sızması tüm sistemi tersine çevirir. Pixar'ın sevimli klasiği, korkunun gücü kahkahaya çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "CGbgaHoapFM",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "chill-comedy"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "zootropolis",
  "imdbID": "tt2948356",
  "title": "Zootropolis",
  "originalTitle": "Zootopia",
  "year": 2016,
  "imdbRating": 8,
  "imdbVotes": "651K",
  "duration": "1s 48dk",
  "ageRating": "PG",
  "genres": [
   "Animasyon",
   "Aksiyon",
   "Macera"
  ],
  "director": "Jared Bush",
  "cast": [
   "Ginnifer Goodwin",
   "Jason Bateman",
   "Idris Elba"
  ],
  "tagline": "Herkes için bir yer.",
  "awards": "Won 1 Oscar. 50 wins & 75 nominations total",
  "summary": "Tavşan polis Judy Hopps ile tilki Nick Wilde, kayıp memelilerin gizemini çözmek için zorla takım olur. Disney'in Oscar adaylı eseri, toplumsal klişeleri çocuk diliyle akıllıca sorgular.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Y0c3nKWhlIA",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "chill-comedy"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "yar-n-n-s-n-r-nda",
  "imdbID": "tt1631867",
  "title": "Yarının Sınırında",
  "originalTitle": "Edge of Tomorrow",
  "year": 2014,
  "imdbRating": 7.9,
  "imdbVotes": "818K",
  "duration": "1s 53dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Doug Liman",
  "cast": [
   "Tom Cruise",
   "Emily Blunt",
   "Bill Paxton"
  ],
  "tagline": "Yaşayıp yeniden dene.",
  "awards": "11 wins & 40 nominations total",
  "summary": "Alien istilasında masa başına itilmiş subay William Cage, öldüğü her an gün başına döner; savaşçı Rita ile birlikte döngüyü kırar. Cruise'ın zekice kurulan bu döngü aksiyonu, video oyun ritmini sinema diline çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "vw61gCe2oqI",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "mind-bending"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "sicario",
  "imdbID": "tt3397884",
  "title": "Sicario",
  "originalTitle": "Sicario",
  "year": 2015,
  "imdbRating": 7.7,
  "imdbVotes": "552K",
  "duration": "2s 1dk",
  "ageRating": "15+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Dram"
  ],
  "director": "Denis Villeneuve",
  "cast": [
   "Emily Blunt",
   "Josh Brolin",
   "Benicio Del Toro"
  ],
  "tagline": "Sınırda kural yok.",
  "awards": "Nominated for 3 Oscars. 15 wins & 159 nominations total",
  "summary": "Meksika sınırında kartel karşıtı bir görev ekibine katılan FBI ajanı Kate, kural tanımayan bir savaşın içinde kendini bulur. Villeneuve'ün sessiz ve düşük sesli gerilimi, ahlakın gri tonunu her kareye kazır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "G8tlEcnrGnU",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "drive",
  "imdbID": "tt0780504",
  "title": "Drive",
  "originalTitle": "Drive",
  "year": 2011,
  "imdbRating": 7.8,
  "imdbVotes": "776K",
  "duration": "1s 40dk",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Dram"
  ],
  "director": "Nicolas Winding Refn",
  "cast": [
   "Ryan Gosling",
   "Carey Mulligan",
   "Bryan Cranston"
  ],
  "tagline": "Sessiz sürücü.",
  "awards": "Nominated for 1 Oscar. 79 wins & 180 nominations total",
  "summary": "Gündüz kaskatör, gece şoför olan sessiz bir adam, komşusuyla sevgi bulurken mahallenin çetesine karşı bir intikam motoruna biner. Refn'in neonoir klasiği, minimal diyalogu maksimum gerilimle doldurur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTFmNTFlOTAtNzEyNi00MWU2LTg3MGEtYjA2NWY3MDliNjlkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTFmNTFlOTAtNzEyNi00MWU2LTg3MGEtYjA2NWY3MDliNjlkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "PjvMChPpUNQ",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "baby-driver",
  "imdbID": "tt3890160",
  "title": "Baby Driver",
  "originalTitle": "Baby Driver",
  "year": 2017,
  "imdbRating": 7.5,
  "imdbVotes": "697K",
  "duration": "1s 53dk",
  "ageRating": "16+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Dram"
  ],
  "director": "Edgar Wright",
  "cast": [
   "Ansel Elgort",
   "Jon Bernthal",
   "Jon Hamm"
  ],
  "tagline": "Müzik kaçış.",
  "awards": "Nominated for 3 Oscars. 44 wins & 67 nominations total",
  "summary": "Doğuştan tinnituslu genç şoför Baby, hırsız ekibini müzik ritmiyle kovalamacalara taşır; son işte sevgiyle çıkmak ister. Wright'ın müzik montajı, kovalamacayı bir dans koreografisine çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "zTvJJnoWIPk",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "jumanji-vahsi-orman",
  "imdbID": "tt2283362",
  "title": "Jumanji: Vahşi Orman",
  "originalTitle": "Jumanji: Welcome to the Jungle",
  "year": 2017,
  "imdbRating": 6.9,
  "imdbVotes": "513K",
  "duration": "1s 59dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Macera",
   "Komedi"
  ],
  "director": "Jake Kasdan",
  "cast": [
   "Dwayne Johnson",
   "Karen Gillan",
   "Kevin Hart"
  ],
  "tagline": "Oyun başladı.",
  "awards": "5 wins & 15 nominations total",
  "summary": "Lise cezası alan dört genç, eski bir oyun konsolunda avatar olarak ormana ışınlanır; evlere dönmek için oyunu bitirmek zorundadır. Rock ile Hart'ın komedi enerjisi, 90'ların klasiğini modern bir maceraya çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjI5MzdmODctYjA4NS00ZmMxLWJlOWUtOGVhMjA0OGMxMWYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZjI5MzdmODctYjA4NS00ZmMxLWJlOWUtOGVhMjA0OGMxMWYzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "2QKg5SZ_35I",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "escapism",
   "chill-comedy"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "better-call-saul",
  "imdbID": "tt3032476",
  "title": "Better Call Saul",
  "originalTitle": "Better Call Saul",
  "year": 2015,
  "imdbRating": 9,
  "imdbVotes": "862K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Bob Odenkirk",
   "Rhea Seehorn",
   "Jonathan Banks"
  ],
  "tagline": "İsmini unut.",
  "awards": "Nominated for 53 Primetime Emmys. 66 wins & 317 nominations total",
  "summary": "Breaking Bad evreninin en sevilen ikinci planı: küçük avukat Jimmy McGill, nasıl \"Better Call Saul\" Saul Goodman'a dönüşür? Kim ile Chuck kardeşliğinin yavaş eriyişi, serinin kalbidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "HN4oydykJFc",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "peaky-blinders",
  "imdbID": "tt2442560",
  "title": "Peaky Blinders",
  "originalTitle": "Peaky Blinders",
  "year": 2013,
  "imdbRating": 8.7,
  "imdbVotes": "796K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Cillian Murphy",
   "Paul Anderson",
   "Sophie Rundle"
  ],
  "tagline": "Kapıyı çalan olabilir.",
  "awards": "Won 1 BAFTA Award. 25 wins & 56 nominations total",
  "summary": "Birinci Dünya Savaşı sonrası Birmingham'da Shelby ailesi, şapkalı çete olarak kumarhaneleri ve şehri ele geçirmeye çalışır; Tommy Shelby'in hesabı herkesi yakar. Dönem müziğiyle stilize suç destanı, Britannia'nın en havalı çetesidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "oVzVdvGIC7U",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-witcher",
  "imdbID": "tt5180504",
  "title": "The Witcher",
  "originalTitle": "The Witcher",
  "year": 2019,
  "imdbRating": 7.8,
  "imdbVotes": "626K",
  "duration": "5 Sezon",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Dram"
  ],
  "director": "Tomek Baginski",
  "cast": [
   "Freya Allan",
   "Anya Chalotra",
   "Eamon Farren"
  ],
  "tagline": "Kader onu bağlıyor.",
  "awards": "Nominated for 4 Primetime Emmys. 9 wins & 41 nominations total",
  "summary": "Canavar avcısı Geralt of Rivia, kader Ciri ile prenses Yennefer arasında büyülü bir üçgenin içinde evrenin dengesini taşır. Sapkowski'nin kitaplarından uyarlanan bu fantezi destanı, kılıç ve sihir doludur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTQzMzNmMzUtODgwNS00YTdhLTg5N2MtOWU1YTc4YWY3NjRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTQzMzNmMzUtODgwNS00YTdhLTg5N2MtOWU1YTc4YWY3NjRlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "sqTeQ6pVGKQ",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "escapism",
   "adrenaline"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "kag-t-ev",
  "imdbID": "tt6468322",
  "title": "Kağıt Ev",
  "originalTitle": "Money Heist",
  "year": 2017,
  "imdbRating": 8.2,
  "imdbVotes": "621K",
  "duration": "5 Sezon",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Úrsula Corberó",
   "Álvaro Morte",
   "Itziar Ituño"
  ],
  "tagline": "Bella Ciao.",
  "awards": "38 wins & 48 nominations total",
  "summary": "\"Profesör\" adlı dâhi planlayıcı, sekiz suçluyu Kraliyet Darphanesi'ne sokar; basın ve polis karşısında halkın kahramanı olurlar. Bella Ciao'yla dünya çapında fenomen olan bu soygun dizisi, gerilimi kalp atışı gibi sürer.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BODdiNWI5ZjgtY2RhZi00ODlmLTkyNDEtMzIyMTEyZDE2ZjNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BODdiNWI5ZjgtY2RhZi00ODlmLTkyNDEtMzIyMTEyZDE2ZjNjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "_InqQJRqGW4",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "narcos",
  "imdbID": "tt2707408",
  "title": "Narcos",
  "originalTitle": "Narcos",
  "year": 2015,
  "imdbRating": 8.7,
  "imdbVotes": "538K",
  "duration": "3 Sezon",
  "ageRating": "18+",
  "genres": [
   "Biyografi",
   "Suç",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Pedro Pascal",
   "Wagner Moura",
   "Boyd Holbrook"
  ],
  "tagline": "Kartel yükseliyor.",
  "awards": "Nominated for 3 Primetime Emmys. 9 wins & 22 nominations total",
  "summary": "Kolombiya'da Pablo Escobar'ın kokain imparatorluğu büyürken DEA ajanları onu çökertmek için sınırları zorlar. Belgesel gerçeğiyle suç dramını harmanlayan bu seri, uyuşturucu savaşının tarihini kanla anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "xl8zdCY-abw",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-crown",
  "imdbID": "tt4786824",
  "title": "The Crown",
  "originalTitle": "The Crown",
  "year": 2016,
  "imdbRating": 8.6,
  "imdbVotes": "285K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Biyografi",
   "Dram",
   "Tarih"
  ],
  "director": "N/A",
  "cast": [
   "Claire Foy",
   "Olivia Colman",
   "Imelda Staunton"
  ],
  "tagline": "Taç ağırdır.",
  "awards": "Won 24 Primetime Emmys. 158 wins & 432 nominations total",
  "summary": "II. Elizabeth'in tahta çıkışından itibaren Birleşik Krallık'ın en güçlü kurumu iç dünyasıyla yüzleşir; taç ile aile her zaman çatışır. Oscar seviyesinde kadrosuyla bu prestij draması, tarihin en gözde taht hikâyesidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BODcyODZlZDMtZGE0Ni00NjBhLWJlYTAtZDdlNWY3MzkwMGVhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BODcyODZlZDMtZGE0Ni00NjBhLWJlYTAtZDdlNWY3MzkwMGVhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "JWtnJjn6ng0",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "fleabag",
  "imdbID": "tt5687612",
  "title": "Fleabag",
  "originalTitle": "Fleabag",
  "year": 2016,
  "imdbRating": 8.7,
  "imdbVotes": "254K",
  "duration": "2 Sezon",
  "ageRating": "18+",
  "genres": [
   "Komedi",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Phoebe Waller-Bridge",
   "Sian Clifford",
   "Olivia Colman"
  ],
  "tagline": "Kamera bana bakıyor.",
  "awards": "Won 6 Primetime Emmys. 70 wins & 71 nominations total",
  "summary": "Londra'da kafe işleten isimsiz bir kadın, kameraya bakarak kendi hayatının kaosunu seyirciyle paylaşır; kayıpları ve yası kamera arkasına saklar. Phoebe Waller-Bridge'in Emmy'li monoloğu, komedi ile hüzün arasında uçar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Nd3Qlo0qspU",
  "platforms": [
   "prime"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "chill-comedy",
   "tearjerker"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "prison-break",
  "imdbID": "tt0455275",
  "title": "Prison Break",
  "originalTitle": "Prison Break",
  "year": 2005,
  "imdbRating": 8.3,
  "imdbVotes": "680K",
  "duration": "5 Sezon",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Dominic Purcell",
   "Wentworth Miller",
   "Amaury Nolasco"
  ],
  "tagline": "Plan vücudunda.",
  "awards": "Nominated for 1 Primetime Emmy. 8 wins & 32 nominations total",
  "summary": "İcadıyla dâhi sayılan Michael Scofield, yanlış suçlamayla ölüm sırasına giren ağabeyini kurtarmak için kasıtlı olarak aynı hapishaneye girer; kaçış planı vücuduna dövme olarak işlidir. Planların her adımı, gerilimi yüksek tutar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjE0ODQxNjI2MV5BMl5BanBnXkFtZTYwNTgzMzg3._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjE0ODQxNjI2MV5BMl5BanBnXkFtZTYwNTgzMzg3._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "AL9zLctDJaU",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "dr-house",
  "imdbID": "tt0412142",
  "title": "Dr. House",
  "originalTitle": "House",
  "year": 2004,
  "imdbRating": 8.7,
  "imdbVotes": "602K",
  "duration": "8 Sezon",
  "ageRating": "18+",
  "genres": [
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Hugh Laurie",
   "Omar Epps",
   "Robert Sean Leonard"
  ],
  "tagline": "Herkes yalan söyler.",
  "awards": "Won 5 Primetime Emmys. 58 wins & 140 nominations total",
  "summary": "Kırık ve kibirli Dr. Gregory House, kimseyle baş edemediği tıbbi gizemleri çözer; Laurie'nin Emmy'li rolüyle bu medikal dizi, her bölümde bir bilmece kurar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjgxYjAwNmMtYTAwZC00YmQxLWJlOTMtMWM0NGJmNDE0YmI2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjgxYjAwNmMtYTAwZC00YmQxLWJlOTMtMWM0NGJmNDE0YmI2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "MczMB8nU1sY",
  "platforms": [
   "netflix",
   "prime"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "mind-bending",
   "prestige"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "dexter",
  "imdbID": "tt0773262",
  "title": "Dexter",
  "originalTitle": "Dexter",
  "year": 2006,
  "imdbRating": 8.6,
  "imdbVotes": "958K",
  "duration": "8 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gizem"
  ],
  "director": "N/A",
  "cast": [
   "Michael C. Hall",
   "Jennifer Carpenter",
   "David Zayas"
  ],
  "tagline": "Kod uygulanır.",
  "awards": "Won 4 Primetime Emmys. 56 wins & 202 nominations total",
  "summary": "Adli kan analisti Dexter Morgan gündüz Miami'de kan damlalarıyla konuşurken, gece katilleri avlayan bir seri katildir; babasının kurduğu \"kod\" onu dengede tutar. Michael C. Hall'ın kült gösterimi, ahlakın en karanlık terazisidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTE5ZGI2N2UtYmFiMi00ZGIxLWI1ZTMtYWJkZDYxNDZiOTQwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTE5ZGI2N2UtYmFiMi00ZGIxLWI1ZTMtYWJkZDYxNDZiOTQwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "YQeUmSD1c3g",
  "platforms": [
   "netflix",
   "tod"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "mind-bending"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "suits",
  "imdbID": "tt1632701",
  "title": "Suits",
  "originalTitle": "Suits",
  "year": 2011,
  "imdbRating": 8.4,
  "imdbVotes": "551K",
  "duration": "9 Sezon",
  "ageRating": "16+",
  "genres": [
   "Komedi",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Gabriel Macht",
   "Patrick J. Adams",
   "Meghan Markle"
  ],
  "tagline": "Davayı kazan.",
  "awards": "1 win & 9 nominations total",
  "summary": "Manhattan'ın en prestijli hukuk bürosuna, diplomasız ama ezberi kusursuz bir dâhi Mike Ross alınır; Harvey Specter onu koruyan pazarlıkla büyütür. Hızlı diyaloglarıyla bu ofis dramı, hukukun kozmetik savaşını gösterir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYmE4MmNjZjUtNTEyNy00NTZiLWE4NTktYjM2NjBhYzQ1N2IzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYmE4MmNjZjUtNTEyNy00NTZiLWE4NTktYjM2NjBhYzQ1N2IzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "cUnkjEIW2-o",
  "platforms": [
   "netflix",
   "prime"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "chill-comedy",
   "prestige"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "how-i-met-your-mother",
  "imdbID": "tt0460649",
  "title": "How I Met Your Mother",
  "originalTitle": "How I Met Your Mother",
  "year": 2005,
  "imdbRating": 8.3,
  "imdbVotes": "791K",
  "duration": "9 Sezon",
  "ageRating": "13+",
  "genres": [
   "Komedi",
   "Dram",
   "Romantik"
  ],
  "director": "N/A",
  "cast": [
   "Josh Radnor",
   "Jason Segel",
   "Cobie Smulders"
  ],
  "tagline": "Hikâye uzun.",
  "awards": "Won 10 Primetime Emmys. 29 wins & 102 nominations total",
  "summary": "2030'da babalığa geçen Ted, çocuklarına anneleriyle nasıl tanıştığını anlatmaya başlar; beş arkadaş New York'ta kariyer, aşk ve kahkahayı paylaşır. Dokuz sezonluk bu klasik komedi, dostluk dilinin modern sözlüğüdür.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "cjJLEYMzpjc",
  "platforms": [
   "disney"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "chill-comedy",
   "heartwarming"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-big-bang-theory",
  "imdbID": "tt0898266",
  "title": "The Big Bang Theory",
  "originalTitle": "The Big Bang Theory",
  "year": 2007,
  "imdbRating": 8.1,
  "imdbVotes": "948K",
  "duration": "12 Sezon",
  "ageRating": "TV-PG",
  "genres": [
   "Komedi",
   "Romantik"
  ],
  "director": "N/A",
  "cast": [
   "Johnny Galecki",
   "Jim Parsons",
   "Kaley Cuoco"
  ],
  "tagline": "Bazinga!",
  "awards": "Won 10 Primetime Emmys. 79 wins & 257 nominations total",
  "summary": "İki fizik dâhisi Sheldon ve Leonard, karşılara çekici değil ama sosyolojik olarak ters gelen Penny'yi komşu edinir; dörtlü bilim ekibi hayatı bir deneye çevirir. On iki sezonluk bu sitcom, nerd kültürünün bayrak taşıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "WBb3fojgW0Q",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "chill-comedy"
  ],
  "isSeries": true,
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "vikings",
  "imdbID": "tt2306299",
  "title": "Vikings",
  "originalTitle": "Vikings",
  "year": 2013,
  "imdbRating": 8.5,
  "imdbVotes": "651K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Katheryn Winnick",
   "Gustaf Skarsgård",
   "Alexander Ludwig"
  ],
  "tagline": "Tanrılar izliyor.",
  "awards": "Won 1 Primetime Emmy. 46 wins & 133 nominations total",
  "summary": "Çiftçi savaşçı Ragnar Lothbrok, Viking akınlarının batıya açılmasını sağlayarak tarih yazdırır; oğulları mirasını kana çevirir. History Channel'ın bu destanı, isyan ve inanç kılıçlarla paralel ilerler.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTFmZmExYTEtYmE0Mi00MzRmLWE4ZDYtOThiNzNlOTIyODljXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTFmZmExYTEtYmE0Mi00MzRmLWE4ZDYtOThiNzNlOTIyODljXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "xdm7Z3TQhDg",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "prestige"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "band-of-brothers",
  "imdbID": "tt0185906",
  "title": "Band of Brothers",
  "originalTitle": "Band of Brothers",
  "year": 2001,
  "imdbRating": 9.4,
  "imdbVotes": "608K",
  "duration": "1 Sezon",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Dram",
   "Tarih"
  ],
  "director": "N/A",
  "cast": [
   "Scott Grimes",
   "Damian Lewis",
   "Ron Livingston"
  ],
  "tagline": "Kardeşlik savaşta.",
  "awards": "Won 6 Primetime Emmys. 34 wins & 26 nominations total",
  "summary": "Easy Company, Normandiya'dan Hitler'in kartal yuvasına kadar Avrupa'yı boydan boya geçer; her bölümde farklı bir askerin gözünden savaş anlatılır. Spielberg ile Hanks'in miniseri klasiği, savaş dramasının altın standardıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjdlNGJlYjQtMDU2Mi00ZjA1LWEwYzgtYzlmNDM5MmE1ZGUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjdlNGJlYjQtMDU2Mi00ZjA1LWEwYzgtYzlmNDM5MmE1ZGUwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "KKRBAFlN5ww",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "tearjerker"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "wednesday",
  "imdbID": "tt13443470",
  "title": "Wednesday",
  "originalTitle": "Wednesday",
  "year": 2022,
  "imdbRating": 8,
  "imdbVotes": "514K",
  "duration": "3 Sezon",
  "ageRating": "18+",
  "genres": [
   "Komedi",
   "Suç",
   "Fantastik"
  ],
  "director": "N/A",
  "cast": [
   "Jenna Ortega",
   "Emma Myers",
   "Hunter Doohan"
  ],
  "tagline": "Karanlık hoş geldin.",
  "awards": "Won 4 Primetime Emmys. 28 wins & 97 nominations total",
  "summary": "Addams ailesinin soğuk yüzü Wednesday, Nevermore Akademisi'nde katil bilmeceleri ve psişik yetenekleriyle yüzleşir; kasabanın karanlığı onu bekliyor. Tim Burton'ın imza estetiği, gençlik gizemini gotik bir dille yazıyor.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2E1NDI5OWEtODJmYi00Nzg2LWI4MjUtODFiMTU2YWViOTU3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2E1NDI5OWEtODJmYi00Nzg2LWI4MjUtODFiMTU2YWViOTU3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "xYTkbkV7y7k",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "mind-bending",
   "escapism"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-queen-s-gambit",
  "imdbID": "tt10048342",
  "title": "The Queen's Gambit",
  "originalTitle": "The Queen's Gambit",
  "year": 2020,
  "imdbRating": 8.5,
  "imdbVotes": "681K",
  "duration": "1 Sezon",
  "ageRating": "18+",
  "genres": [
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Anya Taylor-Joy",
   "Chloe Pirrie",
   "Bill Camp"
  ],
  "tagline": "Sıra sende.",
  "awards": "Won 11 Primetime Emmys. 55 wins & 44 nominations total",
  "summary": "Yetimhanede büyüyen Beth Harmon, satranç tahtasında dâhi bir yetenek bulur; ilaç ve alkolle savaşırken dünya zirvesine çıkar. Taylor-Joy'in Emmy'li miniseri, zeka sporunu biçimsel bir sanata çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "KkyBuT90aI0",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "tearjerker"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-handmaid-s-tale",
  "imdbID": "tt5834204",
  "title": "The Handmaid's Tale",
  "originalTitle": "The Handmaid's Tale",
  "year": 2017,
  "imdbRating": 8.3,
  "imdbVotes": "306K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Dram",
   "Bilim Kurgu",
   "Gerilim"
  ],
  "director": "N/A",
  "cast": [
   "Elisabeth Moss",
   "Yvonne Strahovski",
   "Ann Dowd"
  ],
  "tagline": "Direniş kelimelerle.",
  "awards": "Won 15 Primetime Emmys. 98 wins & 298 nominations total",
  "summary": "Totaliter Gilead'da doğurgan kadınlar evlere dağıtılan hizmetkarlardır; June, adı Offred olarak yeniden yazılan bir direniş hikâyesi yaşar. Emmy'li bu distopya, kadın bedeni üzerindeki politikanın en sert uyarısıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWIxMzk4NmItZmM1YS00ODUyLWFlNjgtZDQ4MzljZTZmZDQ5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMWIxMzk4NmItZmM1YS00ODUyLWFlNjgtZDQ4MzljZTZmZDQ5XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "dVLiDETfx1c",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "house-of-cards",
  "imdbID": "tt1856010",
  "title": "House of Cards",
  "originalTitle": "House of Cards",
  "year": 2013,
  "imdbRating": 8.6,
  "imdbVotes": "564K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Dram",
   "Gerilim"
  ],
  "director": "N/A",
  "cast": [
   "Kevin Spacey",
   "Michel Gill",
   "Robin Wright"
  ],
  "tagline": "İktidar hiç uyumaz.",
  "awards": "Won 7 Primetime Emmys. 35 wins & 220 nominations total",
  "summary": "Demokrat Frank Underwood, kendine söz verilen başkanlık verilmeyince kibriyle Washington'ı ele geçirme planına girer; eşi Claire onun en güçlü ortağıdır. Spacey'nin kamera bakışıyla bu politik drama, iktidarın anatomisidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "8QnMmpfKWvo",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "true-detective",
  "imdbID": "tt2356777",
  "title": "True Detective",
  "originalTitle": "True Detective",
  "year": 2014,
  "imdbRating": 8.8,
  "imdbVotes": "774K",
  "duration": "5 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gizem"
  ],
  "director": "N/A",
  "cast": [
   "Vince Vaughn",
   "Colin Farrell",
   "Rachel McAdams"
  ],
  "tagline": "Zaman düz bir dairedir.",
  "awards": "Won 6 Primetime Emmys. 48 wins & 171 nominations total",
  "summary": "Louisiana'nın bataklıklarında iki dedektif, ritüel cinayetlerin peşinde 17 yıl boyunca kendi karanlıklarıyla yüzleşir. McConaughey ile Harrelson'ın Emmy'li ilk sezonu, suç dramasını felsefi bir düzeye taşır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "fVQUcaO4AvE",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "mind-bending"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "mindhunter",
  "imdbID": "tt5290382",
  "title": "Mindhunter",
  "originalTitle": "Mindhunter",
  "year": 2017,
  "imdbRating": 8.6,
  "imdbVotes": "407K",
  "duration": "2 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gizem"
  ],
  "director": "N/A",
  "cast": [
   "Jonathan Groff",
   "Holt McCallany",
   "Anna Torv"
  ],
  "tagline": "Katillerle konuş.",
  "awards": "Nominated for 2 Primetime Emmys. 5 wins & 34 nominations total",
  "summary": "1970'lerin FBI'ında iki ajan, seri katillerle yüz yüze görüşerek suç psikolojisinin temellerini atar; her röportaj akıl sağlığını test eder. Fincher'ın soğuk ve kusursuz suç dizisi, cinayetin dilbilgisini kurar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTk4NDA4MGMtNjliOC00MjExLWI1YzctOTc4NWIxM2I1YjM5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTk4NDA4MGMtNjliOC00MjExLWI1YzctOTc4NWIxM2I1YjM5XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "gpa8E2NSAS8",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "mr-robot",
  "imdbID": "tt4158110",
  "title": "Mr. Robot",
  "originalTitle": "Mr. Robot",
  "year": 2015,
  "imdbRating": 8.5,
  "imdbVotes": "476K",
  "duration": "4 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gerilim"
  ],
  "director": "N/A",
  "cast": [
   "Rami Malek",
   "Christian Slater",
   "Carly Chaikin"
  ],
  "tagline": "Dostlarımıza güven.",
  "awards": "Won 3 Primetime Emmys. 23 wins & 86 nominations total",
  "summary": "Sosyal kaygılı hacker Elliot, dev şirketlerin borç kayıtlarını silmek için bir anarşist kolektifle birleşir; gerçeklik ile paranoya sınırı her bölümde kayar. Rami Malek'in Emmy'li rolüyle bu siber drama, dijital çağın deliliğini anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTg4NTBiZDAtZTc0YS00NzZlLTg4Y2ItNGQ3M2ZlMDM5MWQzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTg4NTBiZDAtZTc0YS00NzZlLTg4Y2ItNGQ3M2ZlMDM5MWQzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "N6HGuJC--rk",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "mind-bending",
   "prestige"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "lost",
  "imdbID": "tt0411008",
  "title": "Lost",
  "originalTitle": "Lost",
  "year": 2004,
  "imdbRating": 8.3,
  "imdbVotes": "684K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Macera",
   "Dram",
   "Fantastik"
  ],
  "director": "N/A",
  "cast": [
   "Naveen Andrews",
   "Matthew Fox",
   "Jorge Garcia"
  ],
  "tagline": "Ada beklemede.",
  "awards": "Won 10 Primetime Emmys. 119 wins & 418 nominations total",
  "summary": "Pasifik'te düşen Oceanic 815'in kazazedeleri, gizemli bir adada hayatta kalmaya çalışır; ada, herkesin geçmişini ve imtihanını açığa çıkarır. Abrams ile Lindelof'un kült dizisi, televizyon tarihinde en çok tartışılan gizem yazıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZmZhY2ViYzYtMTQ0NS00NDcyLWIxZTYtMGUyODE0NDA0NmNkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZmZhY2ViYzYtMTQ0NS00NDcyLWIxZTYtMGUyODE0NDA0NmNkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "KTu8iDynwNc",
  "platforms": [
   "disney"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "mind-bending",
   "escapism"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-walking-dead",
  "imdbID": "tt1520211",
  "title": "The Walking Dead",
  "originalTitle": "The Walking Dead",
  "year": 2010,
  "imdbRating": 8.1,
  "imdbVotes": "1.2M",
  "duration": "11 Sezon",
  "ageRating": "18+",
  "genres": [
   "Dram",
   "Korku",
   "Gerilim"
  ],
  "director": "N/A",
  "cast": [
   "Andrew Lincoln",
   "Norman Reedus",
   "Melissa McBride"
  ],
  "tagline": "İnsanlar tehlikeli.",
  "awards": "Won 2 Primetime Emmys. 86 wins & 237 nominations total",
  "summary": "Sherif Rick Grimes komaya girdiğinde dünya zombilerle dolmuştur; hayatta kalanlar sadece ölülere değil, insan doğasına karşı savaşır. Kült doğmaca dizisi, medeniyetin ne kadar ince bir kabuk olduğunu her sezon test eder.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "m1lZWAwC5Bw",
  "platforms": [
   "netflix",
   "disney",
   "tvplus"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "house-of-the-dragon",
  "imdbID": "tt11198330",
  "title": "House of the Dragon",
  "originalTitle": "House of the Dragon",
  "year": 2022,
  "imdbRating": 8.2,
  "imdbVotes": "574K",
  "duration": "4 Sezon",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Matt Smith",
   "Emma D&apos;Arcy",
   "Olivia Cooke"
  ],
  "tagline": "Ejderhalar uyanıyor.",
  "awards": "Won 2 Primetime Emmys. 23 wins & 103 nominations total",
  "summary": "Targaryen hanedanı tahtın varisi konusunda bölünür;Yeşil ile Siyah konseyler ejderhalarla dolu bir iç savaşa sürüklenir. Game of Thrones evreninin bu öncülü, hanedan politikasını ejderha ölçeğinde yaşatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWU2ZDA0M2EtNWEyYy00MWUwLWI4NjAtYzkxMDFjYzZkNGFiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOWU2ZDA0M2EtNWEyYy00MWUwLWI4NjAtYzkxMDFjYzZkNGFiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "DotnJ7tTA34",
  "platforms": [
   "hbo",
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "adrenaline"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "attack-on-titan",
  "imdbID": "tt2560140",
  "title": "Attack on Titan",
  "originalTitle": "Attack on Titan",
  "year": 2013,
  "imdbRating": 9.1,
  "imdbVotes": "746K",
  "duration": "4 Sezon",
  "ageRating": "18+",
  "genres": [
   "Animasyon",
   "Aksiyon",
   "Macera"
  ],
  "director": "N/A",
  "cast": [
   "Jessie James Grelle",
   "Bryce Papenbrook",
   "Trina Nishimura"
  ],
  "tagline": "Duvarlar düşüyor.",
  "awards": "42 wins & 88 nominations total",
  "summary": "Devasa duvarlar içinde yaşayan insanlık, duvarı parçalayan Titan'larla savaşır; Eren'in annesini yiten öfkesi, hikâyenin motorudur. Kült anime seri, özgürlük ile kaderin en sert sorgusunu yapar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "LV-nazLVmgo",
  "platforms": [],
  "themeColor": "#34d399",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "fullmetal-alchemist-brotherhood",
  "imdbID": "tt1355642",
  "title": "Fullmetal Alchemist: Brotherhood",
  "originalTitle": "Fullmetal Alchemist: Brotherhood",
  "year": 2009,
  "imdbRating": 9.1,
  "imdbVotes": "259K",
  "duration": "1 Sezon",
  "ageRating": "16+",
  "genres": [
   "Animasyon",
   "Aksiyon",
   "Macera"
  ],
  "director": "N/A",
  "cast": [
   "Kent Williams",
   "Iemasa Kayumi",
   "Romi Park"
  ],
  "tagline": "Eşdeğer değişim.",
  "awards": "3 wins & 4 nominations total",
  "summary": "Alkimya dünyasında Edward ile Alphonse Elric, annelerini geri getirmeye çalışırken bedenlerini kaybeder; yasak transmutasyon onları efsane arayışına sokar. Anime tarihinin en tutarlı ve en çok övülen serilerinden biri.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "-GoNo0DGroU",
  "platforms": [],
  "themeColor": "#34d399",
  "moods": [
   "escapism",
   "adrenaline"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "cobra-kai",
  "imdbID": "tt7221388",
  "title": "Cobra Kai",
  "originalTitle": "Cobra Kai",
  "year": 2018,
  "imdbRating": 8.4,
  "imdbVotes": "247K",
  "duration": "6 Sezon",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Komedi",
   "Dram"
  ],
  "director": "N/A",
  "cast": [
   "Ralph Macchio",
   "William Zabka",
   "Courtney Henggeler"
  ],
  "tagline": "Vuruş başlar.",
  "awards": "Nominated for 11 Primetime Emmys. 8 wins & 74 nominations total",
  "summary": "Otuz yıl sonra Johnny Lawrence, Karate Kid'in düşmanı olarak Cobra Kai dojosunu yeniden açar; Daniel LaRusso ile rekabet yeni nesle taşınır. Karate Kid filmlerinin bu devam serisi, nostaljiyi yeniden yaratan nadir örnektir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjA3NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjA3NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "xCwwxNbtK6Y",
  "platforms": [
   "netflix"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "chill-comedy",
   "adrenaline"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "fargo",
  "imdbID": "tt2802850",
  "title": "Fargo",
  "originalTitle": "Fargo",
  "year": 2014,
  "imdbRating": 8.8,
  "imdbVotes": "476K",
  "duration": "5 Sezon",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gerilim"
  ],
  "director": "N/A",
  "cast": [
   "Billy Bob Thornton",
   "Martin Freeman",
   "Allison Tolman"
  ],
  "tagline": "Bu bir gerçek hikâye.",
  "awards": "Won 7 Primetime Emmys. 73 wins & 322 nominations total",
  "summary": "Minnesota'nın kar altında sakin kasabalarında cinayetler, Coen kardeşlerin filminden esinlenerek her sezonda yeni bir suç örgüsüyle başlar. Antiheroların dizisi, kara komedi ile suç dramasını aynı kar altında buluşturur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMzMTIzMTUwN15BMl5BanBnXkFtZTgwNjE0NTg0MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjMzMTIzMTUwN15BMl5BanBnXkFtZTgwNjE0NTg0MTE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "setgvHG3w48",
  "platforms": [
   "prime"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "isSeries": true,
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "spider-man-across-the-spider-verse",
  "imdbID": "tt9362722",
  "title": "Spider-Man: Across the Spider-Verse",
  "originalTitle": "Spider-Man: Across the Spider-Verse",
  "year": 2023,
  "imdbRating": 8.5,
  "imdbVotes": "557K",
  "duration": "2s 20dk",
  "ageRating": "PG",
  "genres": [
   "Animasyon",
   "Aksiyon",
   "Macera"
  ],
  "director": "Joaquim Dos Santos",
  "cast": [
   "Shameik Moore",
   "Hailee Steinfeld",
   "Brian Tyree Henry"
  ],
  "tagline": "Her evrende bir örümcek var.",
  "awards": "Nominated for 1 Oscar. 107 wins & 164 nominations total",
  "summary": "Miles Morales, çoklu evrenin tüm örümcek kahramanlarını bir arada tutan bir teftiş ekibiyle karşılaşır; kendi kaderini değiştirmeye karar verdiğinde her şey sarsılır. Görsel olarak her karesi bir sanat eseri olan bu animasyon, türünün doruğudur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "shW9i6k8cB0",
  "platforms": [],
  "themeColor": "#34d399",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "batman",
  "imdbID": "tt1877830",
  "title": "Batman",
  "originalTitle": "The Batman",
  "year": 2022,
  "imdbRating": 7.8,
  "imdbVotes": "952K",
  "duration": "2s 56dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Gizem"
  ],
  "director": "Matt Reeves",
  "cast": [
   "Robert Pattinson",
   "Zoë Kravitz",
   "Jeffrey Wright"
  ],
  "tagline": "Gecenin kendisi.",
  "awards": "Nominated for 3 Oscars. 40 wins & 176 nominations total",
  "summary": "Bruce Wayne, Gotham'ı karanlık bir katilin bilmeceleriyle boğuşan şehir olarak keşfeder; Selina Kyle ve Gordon ile Riddler'ın izini sürer. Robert Pattinson'ın genç dedektif Batman'i, karaktere bir noir-nefes getirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "mqqft2x_Aa4",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "batman-basl-yor",
  "imdbID": "tt0372784",
  "title": "Batman Başlıyor",
  "originalTitle": "Batman Begins",
  "year": 2005,
  "imdbRating": 8.2,
  "imdbVotes": "1.7M",
  "duration": "2s 20dk",
  "ageRating": "13+",
  "genres": [
   "Suç"
  ],
  "director": "Christopher Nolan",
  "cast": [
   "Christian Bale",
   "Michael Caine",
   "Ken Watanabe"
  ],
  "tagline": "Korkudan güç doğar.",
  "awards": "Nominated for 1 Oscar. 15 wins & 79 nominations total",
  "summary": "Bruce Wayne, ailesinin katiliyle değil kendi korkusuyla yüzleşir; Ra's al Ghul'un gölgesinde dövüşmeyi öğrenir ve Gotham'ın sembolü olur. Nolan'ın üçlemesinin bu ilk bölümü, süper kahraman sinemasına gerçekçilik getiren temel taşır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "neY2xVmOfUM",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "adrenaline",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "karanl-k-sovalye-yukseliyor",
  "imdbID": "tt1345836",
  "title": "Karanlık Şövalye Yükseliyor",
  "originalTitle": "The Dark Knight Rises",
  "year": 2012,
  "imdbRating": 8.4,
  "imdbVotes": "2M",
  "duration": "2s 44dk",
  "ageRating": "PG-13",
  "genres": [
   "Suç",
   "Gerilim"
  ],
  "director": "Christopher Nolan",
  "cast": [
   "Christian Bale",
   "Tom Hardy",
   "Anne Hathaway"
  ],
  "tagline": "Bir kahraman yükselir.",
  "awards": "Nominated for 1 BAFTA Award. 45 wins & 104 nominations total",
  "summary": "Sekiz yıl saklanan Bruce Wayne, Gotham'ı çok güçlü bir Bane'in pençesinden kurtarmak için yaralı bedeniyle kemerini yeniden takar. Üçlemenin finalinde şehir, bir kahramanın bedelini topluca öder.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "GokKUqLcvD8",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "adrenaline",
   "prestige"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ihtiyarlara-yer-yok",
  "imdbID": "tt0477348",
  "title": "İhtiyarlara Yer Yok",
  "originalTitle": "No Country for Old Men",
  "year": 2007,
  "imdbRating": 8.2,
  "imdbVotes": "1.2M",
  "duration": "2s 2dk",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Dram",
   "Gerilim"
  ],
  "director": "Ethan Coen",
  "cast": [
   "Tommy Lee Jones",
   "Javier Bardem",
   "Josh Brolin"
  ],
  "tagline": "Kaderin matematiği.",
  "awards": "Won 4 Oscars. 165 wins & 139 nominations total",
  "summary": "Bir çöl hattında bulduğu satchel parası, pasaklı Llewelyn Moss'u ölümcül bir katilin peşine takar; yaşlı Şerif Bell şiddeti anlamakta yetersizleşir. Coen kardeşlerin Oscar'lı bu gerilimi, kaderin soğuk matematiğini neredeyse hiç konuşmadan anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "38A__WT3-o0",
  "platforms": [
   "tod"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "there-will-be-blood",
  "imdbID": "tt0469494",
  "title": "There Will Be Blood",
  "originalTitle": "There Will Be Blood",
  "year": 2007,
  "imdbRating": 8.2,
  "imdbVotes": "721K",
  "duration": "2s 38dk",
  "ageRating": "15+",
  "genres": [
   "Dram"
  ],
  "director": "Paul Thomas Anderson",
  "cast": [
   "Daniel Day-Lewis",
   "Paul Dano",
   "Ciarán Hinds"
  ],
  "tagline": "Zenginlik kanla gelir.",
  "awards": "Won 2 Oscars. 114 wins & 138 nominations total",
  "summary": "Daniel Plainview, 20. yüzyıl başında petrolle zenginleşen bir girişimcidir; vaaz veren genç bir papazla olan savaşı, ruhunun en karanlık katmanını açığa çıkarır. Daniel Day-Lewis'in Oscar'lı performansı, hırsın anatomisini sinema diline çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "FeSLPELpMeM",
  "platforms": [
   "tod"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "reservoir-dogs",
  "imdbID": "tt0105236",
  "title": "Reservoir Dogs",
  "originalTitle": "Reservoir Dogs",
  "year": 1992,
  "imdbRating": 8.2,
  "imdbVotes": "1.2M",
  "duration": "1s 39dk",
  "ageRating": "15+",
  "genres": [
   "Suç",
   "Gerilim"
  ],
  "director": "Quentin Tarantino",
  "cast": [
   "Harvey Keitel",
   "Tim Roth",
   "Michael Madsen"
  ],
  "tagline": "Soygun ters gitti.",
  "awards": "13 wins & 23 nominations total",
  "summary": "Bir elmas soygunu kanlı biter; hayatta kalan renk kodlu suçlular, aralarında bir ihbarcı olduğunu anlar. Tarantino'nun ilk filmi, tek mekân gerilimini konuşma kültürüne çeviren bir milat işidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmMzYjg4NDctYWY0Mi00OGViLWIzMTMtYWNlZGY5ZDJmYjk3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMmMzYjg4NDctYWY0Mi00OGViLWIzMTMtYWNlZGY5ZDJmYjk3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "vayksn4Y93A",
  "platforms": [
   "tvplus",
   "prime"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "casino-royale",
  "imdbID": "tt0381061",
  "title": "Casino Royale",
  "originalTitle": "Casino Royale",
  "year": 2006,
  "imdbRating": 8,
  "imdbVotes": "756K",
  "duration": "2s 24dk",
  "ageRating": "12A",
  "genres": [
   "Aksiyon",
   "Macera",
   "Gerilim"
  ],
  "director": "Martin Campbell",
  "cast": [
   "Daniel Craig",
   "Eva Green",
   "Judi Dench"
  ],
  "tagline": "Serin başlangıcı.",
  "awards": "Won 1 BAFTA Award. 28 wins & 44 nominations total",
  "summary": "James Bond, terör finansmanını kumarda yenmek için çift 0 lisansını yeni kazandığı haliyle sahaya çıkar; Vesper Lynd ile güven dersleri yaşarken kalbi de oyuna girer. Daniel Craig döneminin sert başlangıcı, seriyi gerçekçi gerilime çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWQ1ZDM4NDktMWY0NC00MjcxLWJlMDMtNmE2MGVhYzRjMWQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMWQ1ZDM4NDktMWY0NC00MjcxLWJlMDMtNmE2MGVhYzRjMWQ0XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "36mnx8dBbGE",
  "platforms": [
   "prime"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "GB",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "skyfall",
  "imdbID": "tt1074638",
  "title": "Skyfall",
  "originalTitle": "Skyfall",
  "year": 2012,
  "imdbRating": 7.8,
  "imdbVotes": "782K",
  "duration": "2s 23dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Gerilim"
  ],
  "director": "Sam Mendes",
  "cast": [
   "Daniel Craig",
   "Javier Bardem",
   "Naomie Harris"
  ],
  "tagline": "Geçmiş geri döndü.",
  "awards": "Won 2 Oscars. 82 wins & 125 nominations total",
  "summary": "Mİ6 saldırıya uğrar; ölü sandığı Bond, eski dostu Silva'nın M'e kurduğu tuzakla yüzleşmek için döner. Oscar'lı şarkısıyla bu Bond, geçmişle hesaplaşmanın en zarifidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjAzMWNkODUtM2FlMi00NzgyLWJhMGUtMWEyNDYyZGFiN2RlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjAzMWNkODUtM2FlMi00NzgyLWJhMGUtMWEyNDYyZGFiN2RlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "6kw1UVovByw",
  "platforms": [
   "prime"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "sosyal-ag",
  "imdbID": "tt1285016",
  "title": "Sosyal Ağ",
  "originalTitle": "The Social Network",
  "year": 2010,
  "imdbRating": 7.8,
  "imdbVotes": "831K",
  "duration": "2s 0dk",
  "ageRating": "15+",
  "genres": [
   "Biyografi",
   "Dram"
  ],
  "director": "David Fincher",
  "cast": [
   "Jesse Eisenberg",
   "Andrew Garfield",
   "Justin Timberlake"
  ],
  "tagline": "Bir fikri çalarlar mı?",
  "awards": "Won 3 Oscars. 174 wins & 188 nominations total",
  "summary": "Harvard'lı genç Mark Zuckerberg, bir gece projesini dünyanın en büyük sosyal ağına çevirir; dava masasında dostluklar ve hisseler bölünür. Fincher'ın keskin diyaloğu, dijital çağın ilk büyük ihanet hikâyesini yazıyor.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "lB95KLmpLR4",
  "platforms": [
   "tvplus",
   "tod"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "forrest-gump",
  "imdbID": "tt0109830",
  "title": "Forrest Gump",
  "originalTitle": "Forrest Gump",
  "year": 1994,
  "imdbRating": 8.8,
  "imdbVotes": "2.5M",
  "duration": "2s 22dk",
  "ageRating": "PG-13",
  "genres": [
   "Dram",
   "Romantik"
  ],
  "director": "Robert Zemeckis",
  "cast": [
   "Tom Hanks",
   "Robin Wright",
   "Gary Sinise"
  ],
  "tagline": "Hayat bir kutu çikolata.",
  "awards": "Won 6 Oscars. 51 wins & 74 nominations total",
  "summary": "IQ'su düşük ama kalbi dev bir adam, tarihin dönüm noktalarının ortasında koşarak hayatını yaşar; tek sevgisi Jenny'ye dönüşen sabır, hikâyenin altın ipliğidir. Zemeckis'in klasik şefkatli epik destanı, şansın ve sevginin tarihini anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "bLvqoHBptjg",
  "platforms": [
   "tvplus"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "heartwarming",
   "tearjerker"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "catch-me-if-you-can",
  "imdbID": "tt0264464",
  "title": "Catch Me If You Can",
  "originalTitle": "Catch Me If You Can",
  "year": 2002,
  "imdbRating": 8.1,
  "imdbVotes": "1.3M",
  "duration": "2s 21dk",
  "ageRating": "G",
  "genres": [
   "Biyografi",
   "Suç",
   "Dram"
  ],
  "director": "Steven Spielberg",
  "cast": [
   "Leonardo DiCaprio",
   "Tom Hanks",
   "Christopher Walken"
  ],
  "tagline": "Gerçek bir dolandırıcılık.",
  "awards": "Nominated for 2 Oscars. 16 wins & 46 nominations total",
  "summary": "Yirmi yaş altı genç Frank Abagnale, pilot, doktor ve avukat kılıklarında milyonları dolandırır; FBI ajanı Carl Hanratty onu yıllarca kovalar. Spielberg'in zeki ve zarif klasik gerilim komedisi, takip oyununu baba-oğul ilişkisine çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "s-7pyIxz8Qg",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "chill-comedy",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "er-ryan-kurtarmak",
  "imdbID": "tt0120815",
  "title": "Er Ryan'ı Kurtarmak",
  "originalTitle": "Saving Private Ryan",
  "year": 1998,
  "imdbRating": 8.6,
  "imdbVotes": "1.7M",
  "duration": "2s 49dk",
  "ageRating": "18+",
  "genres": [
   "Dram",
   "Savaş"
  ],
  "director": "Steven Spielberg",
  "cast": [
   "Tom Hanks",
   "Matt Damon",
   "Tom Sizemore"
  ],
  "tagline": "Bir asker için sekiz can.",
  "awards": "Won 5 Oscars. 79 wins & 75 nominations total",
  "summary": "D-Day'in kanlı Normandiya sahilinden başlayarak, üç kardeşi ölen Ryan'ı bulmak için yola çıkan bir asker ekibi her cephede bedel öder. Spielberg'in açılış 25 dakikası sinema tarihinin en gerçek savaş karesidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "9CiW_DgxCnQ",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "tearjerker",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "1917",
  "imdbID": "tt8579674",
  "title": "1917",
  "originalTitle": "1917",
  "year": 2019,
  "imdbRating": 8.2,
  "imdbVotes": "788K",
  "duration": "1s 59dk",
  "ageRating": "15+",
  "genres": [
   "Dram",
   "Savaş"
  ],
  "director": "Sam Mendes",
  "cast": [
   "Dean-Charles Chapman",
   "George MacKay",
   "Daniel Mays"
  ],
  "tagline": "Saat işliyor.",
  "awards": "Won 3 Oscars. 137 wins & 202 nominations total",
  "summary": "Birinci Dünya Savaşı'nda iki genç asker, 1600 askerin pusuya düşmemesi için tek bir mesajı düşman hattı boyunca taşımak zorundadır. Tek kesim gibi kurgulanan bu savaş gerilimi, zamanı nefesin ritmine bağlar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "YqNYrYUiMfg",
  "platforms": [
   "mubi",
   "tvplus",
   "hbo",
   "prime"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "dunkirk",
  "imdbID": "tt5013056",
  "title": "Dunkirk",
  "originalTitle": "Dunkirk",
  "year": 2017,
  "imdbRating": 7.8,
  "imdbVotes": "829K",
  "duration": "1s 46dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Dram",
   "Tarih"
  ],
  "director": "Christopher Nolan",
  "cast": [
   "Fionn Whitehead",
   "Barry Keoghan",
   "Mark Rylance"
  ],
  "tagline": "Kurtarma başlıyor.",
  "awards": "Won 3 Oscars. 69 wins & 237 nominations total",
  "summary": "1940'ta 400 bin asker Dunkirk sahillerinde kuşatılmıştır; kara, deniz ve hava üç zaman diliminde kurtarma savaşını bir arada anlatır. Nolan'ın minimal diyaloglu bu eser, gerilimi ses ve mekânla kurar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTE0Mjg4MTMwMDZeQTJeQWpwZ15BbWU4MDAwMDQ1ODAy._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTE0Mjg4MTMwMDZeQTJeQWpwZ15BbWU4MDAwMDQ1ODAy._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "L-IunJ5sBRI",
  "platforms": [
   "netflix",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "cesur-yurek",
  "imdbID": "tt0112573",
  "title": "Cesur Yürek",
  "originalTitle": "Braveheart",
  "year": 1995,
  "imdbRating": 8.3,
  "imdbVotes": "1.2M",
  "duration": "2s 58dk",
  "ageRating": "13+",
  "genres": [
   "Dram",
   "Savaş"
  ],
  "director": "Mel Gibson",
  "cast": [
   "Mel Gibson",
   "Sophie Marceau",
   "Patrick McGoohan"
  ],
  "tagline": "Özgürlük için.",
  "awards": "Won 5 Oscars. 34 wins & 34 nominations total",
  "summary": "William Wallace, İskoçya'nın İngiliz zulmüne karşı silah kalkışmasının simgesi olur; ailesini kaybeden bu savaşçı, özgürlük kelimesini bayrak yapar. Mel Gibson'ın Oscar'lı destanı, tarihi epik sinemasının duygusal zirvesidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "1NJO0jxBtMo",
  "platforms": [
   "disney"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "adrenaline",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "titanik",
  "imdbID": "tt0120338",
  "title": "Titanik",
  "originalTitle": "Titanic",
  "year": 1997,
  "imdbRating": 8,
  "imdbVotes": "1.4M",
  "duration": "3s 14dk",
  "ageRating": "10+",
  "genres": [
   "Dram",
   "Romantik"
  ],
  "director": "James Cameron",
  "cast": [
   "Leonardo DiCaprio",
   "Kate Winslet",
   "Billy Zane"
  ],
  "tagline": "Aşk enkazdan güçlü.",
  "awards": "Won 11 Oscars. 126 wins & 84 nominations total",
  "summary": "Doksan yıllık gemi enkazının içinde, sınıf farkıyla ayrılmış iki genç bir yolculukta aşkı yaşar; buz dağı, tarihin en bilinen felaketini bu aşkın sonuna yazar. Cameron'ın 11 Oscar'lı destanı, epik sinemanın duygusal mihenk taşıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "CHekzSiZjrY",
  "platforms": [
   "disney"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "tearjerker",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "la-la-land",
  "imdbID": "tt3783958",
  "title": "La La Land",
  "originalTitle": "La La Land",
  "year": 2016,
  "imdbRating": 8,
  "imdbVotes": "781K",
  "duration": "2s 8dk",
  "ageRating": "15+",
  "genres": [
   "Komedi",
   "Dram",
   "Müzik"
  ],
  "director": "Damien Chazelle",
  "cast": [
   "Ryan Gosling",
   "Emma Stone",
   "Rosemarie DeWitt"
  ],
  "tagline": "Şehir yıldız dolu.",
  "awards": "Won 6 Oscars. 247 wins & 316 nominations total",
  "summary": "Los Angeles'ta oyunculuk hayali kuran Mia ve caz piyanisti Sebastian, birbirlerinin hayallerini tutkunla büyütür; başarı geldiğinde aşkın bedeli de netleşir. Altın çağ müzikallerine saygı duruşu olan bu film, Oscar'ları alıp kalbi kırar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDllYjliOTUtMDJjZC00ODIzLWJmNGMtOWI2NzQxMjA2NzdlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMDllYjliOTUtMDJjZC00ODIzLWJmNGMtOWI2NzQxMjA2NzdlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "0pdqf4P9MB8",
  "platforms": [
   "mubi",
   "tvplus",
   "tod",
   "prime"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "heartwarming",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-greatest-showman",
  "imdbID": "tt1485796",
  "title": "The Greatest Showman",
  "originalTitle": "The Greatest Showman",
  "year": 2017,
  "imdbRating": 7.5,
  "imdbVotes": "354K",
  "duration": "1s 45dk",
  "ageRating": "PG",
  "genres": [
   "Biyografi",
   "Dram",
   "Müzikal"
  ],
  "director": "Michael Gracey",
  "cast": [
   "Hugh Jackman",
   "Michelle Williams",
   "Zac Efron"
  ],
  "tagline": "Gösteri başlıyor.",
  "awards": "Nominated for 1 Oscar. 18 wins & 32 nominations total",
  "summary": "P.T. Barnum, dışlanmış yetenekleri tek sahnede topladığı sirk şovuyla dünyayı değiştirir; hayal ve aile bedelini birlikte öder. Kült şarkılarıyla bu müzikal, gösteri sinemasının en doyumsuz halidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "EodWwczRIe4",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "heartwarming",
   "escapism"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "bir-y-ld-z-doguyor",
  "imdbID": "tt1517451",
  "title": "Bir Yıldız Doğuyor",
  "originalTitle": "A Star Is Born",
  "year": 2018,
  "imdbRating": 7.6,
  "imdbVotes": "454K",
  "duration": "2s 16dk",
  "ageRating": "15+",
  "genres": [
   "Dram",
   "Müzik",
   "Romantik"
  ],
  "director": "Bradley Cooper",
  "cast": [
   "Lady Gaga",
   "Bradley Cooper",
   "Sam Elliott"
  ],
  "tagline": "Bir yıldız doğuyor.",
  "awards": "Won 1 Oscar. 101 wins & 289 nominations total",
  "summary": "Yaşlanan rock yıldızı Jackson Maine, garsonluk yapan güçlü sesli Ally'yi sahnede keşfeder; yıldızı parlar, ikisinin dengesi bozulur. Lady Gaga ile Cooper'ın Oscar'lı melodramı, ünün ve aşkın imtihanını şarkılarla anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGUxZTc0NTAtNzQwMy00MmM2LTgzMGYtZWIyY2E1MGFjYmM5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNGUxZTc0NTAtNzQwMy00MmM2LTgzMGYtZWIyY2E1MGFjYmM5XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "nSbzyEJ8X9E",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "tearjerker",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "bohemian-rhapsody",
  "imdbID": "tt1727824",
  "title": "Bohemian Rhapsody",
  "originalTitle": "Bohemian Rhapsody",
  "year": 2018,
  "imdbRating": 7.9,
  "imdbVotes": "656K",
  "duration": "2s 14dk",
  "ageRating": "13+",
  "genres": [
   "Biyografi",
   "Dram",
   "Müzik"
  ],
  "director": "Bryan Singer",
  "cast": [
   "Rami Malek",
   "Lucy Boynton",
   "Gwilym Lee"
  ],
  "tagline": "Operetin ruhu.",
  "awards": "Won 4 Oscars. 50 wins & 81 nominations total",
  "summary": "Freddie Mercury ve Queen, müziğe ve kimliğe aykırı duruşlarıyla rock tarihinin en büyük sahnesini kurar; Live Aid'deki 20 dakika, hayatın en büyük geri dönüşüdür. Oscar'lı biyografi,ikonik şarkılarıyla konser filmi gibi taşır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "mP0VHJYFOAU",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "heartwarming"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ak-l-oyunlar",
  "imdbID": "tt0268978",
  "title": "Akıl Oyunları",
  "originalTitle": "A Beautiful Mind",
  "year": 2001,
  "imdbRating": 8.2,
  "imdbVotes": "1.1M",
  "duration": "2s 15dk",
  "ageRating": "7+",
  "genres": [
   "Biyografi",
   "Dram",
   "Gizem"
  ],
  "director": "Ron Howard",
  "cast": [
   "Russell Crowe",
   "Ed Harris",
   "Jennifer Connelly"
  ],
  "tagline": "Zihin savaşları.",
  "awards": "Won 4 Oscars. 37 wins & 69 nominations total",
  "summary": "Matematik dâhisi John Nash, şizofreni tanısıyla gerçekle kurduklarını ayırt etmeye çalışır; karısı Alicia'nın inadı, iyileşmenin tek köprüsüdür. Oscar'lı bu biyografi, zeka ile delilik arasındaki ince çizgiyi saygıyla çizer.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjgzNjFkMmItOGJhNi00NWM3LWJlYTUtNDExMGQ3ZTI3NjJkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjgzNjFkMmItOGJhNi00NWM3LWJlYTUtNDExMGQ3ZTI3NjJkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "9wZM7CQY130",
  "platforms": [
   "netflix",
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-imitation-game",
  "imdbID": "tt2084970",
  "title": "The Imitation Game",
  "originalTitle": "The Imitation Game",
  "year": 2014,
  "imdbRating": 8,
  "imdbVotes": "887K",
  "duration": "1s 54dk",
  "ageRating": "PG-13",
  "genres": [
   "Biyografi",
   "Dram",
   "Gerilim"
  ],
  "director": "Morten Tyldum",
  "cast": [
   "Benedict Cumberbatch",
   "Keira Knightley",
   "Matthew Goode"
  ],
  "tagline": "Şifre kırılır.",
  "awards": "Won 1 Oscar. 49 wins & 169 nominations total",
  "summary": "Alan Turing, Nazi şifresi Enigma'yı çözmek için kurulan ekipin başına geçer; icadı savaşı kısaltırken kimliği yasakla takip edilir. Benedict Cumberbatch'in Oscar adaylık gösterimi, dâhinin bedelini toplumculukla anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "nuPZUUED5uk",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "tearjerker"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "hidden-figures",
  "imdbID": "tt4846340",
  "title": "Hidden Figures",
  "originalTitle": "Hidden Figures",
  "year": 2016,
  "imdbRating": 7.8,
  "imdbVotes": "295K",
  "duration": "2s 7dk",
  "ageRating": "13+",
  "genres": [
   "Biyografi",
   "Dram",
   "Tarih"
  ],
  "director": "Theodore Melfi",
  "cast": [
   "Taraji P. Henson",
   "Octavia Spencer",
   "Janelle Monáe"
  ],
  "tagline": "Gökyüzü sınırları aşar.",
  "awards": "Nominated for 3 Oscars. 37 wins & 96 nominations total",
  "summary": "NASA'nın uzay yarışında üç siyah kadın matematikçi, hem hesapları hem ayrımcılığı aşarak tarihe imza atar. Uplifting gerçek hikâye, becerikli zekâyla duygusal bir güç gösterisi sunar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2RhNDRhNzctZTllMy00NTc2LWJjZmUtMzg3MTNiNjhhODMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BY2RhNDRhNzctZTllMy00NTc2LWJjZmUtMzg3MTNiNjhhODMxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "5wfrDhgUMGI",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "heartwarming",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "marsl",
  "imdbID": "tt3659388",
  "title": "Marslı",
  "originalTitle": "The Martian",
  "year": 2015,
  "imdbRating": 8,
  "imdbVotes": "1M",
  "duration": "2s 24dk",
  "ageRating": "PG-13",
  "genres": [
   "Macera",
   "Dram",
   "Bilim Kurgu"
  ],
  "director": "Ridley Scott",
  "cast": [
   "Matt Damon",
   "Jessica Chastain",
   "Kristen Wiig"
  ],
  "tagline": "Tek başına bir gezegen.",
  "awards": "Nominated for 7 Oscars. 41 wins & 199 nominations total",
  "summary": "Mars'ta ölü sayılan astronot Mark Watney, patates tarlasıyla ve mizahıyla hayatta kalmayı öğrenir; Dünya'da bir kurtarma operasyonu büyür. Ridley Scott'ın esprili bilim destanı, insan zekâsının uzağa gidebildiğini gösterir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "ej3ioOneTy8",
  "platforms": [
   "disney"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "escapism",
   "heartwarming"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "gravity",
  "imdbID": "tt1454468",
  "title": "Gravity",
  "originalTitle": "Gravity",
  "year": 2013,
  "imdbRating": 7.7,
  "imdbVotes": "908K",
  "duration": "1s 31dk",
  "ageRating": "10+",
  "genres": [
   "Dram",
   "Bilim Kurgu",
   "Gerilim"
  ],
  "director": "Alfonso Cuarón",
  "cast": [
   "Sandra Bullock",
   "George Clooney",
   "Ed Harris"
  ],
  "tagline": "Boşlukta tek nefes.",
  "awards": "Won 7 Oscars. 242 wins & 189 nominations total",
  "summary": "Uzayda hasar gören bir keşif görevinden hayatta kalan tek astronot Ryan Stone, yörüngede tek başına Dünya'ya dönme çabası içindedir. Cuaron'ın tek nefeste kesilen görüntü dili, uzayı hem göz alıcı hem nefes kesici yapar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "OiTiKOy59o4",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "arrival",
  "imdbID": "tt2543164",
  "title": "Arrival",
  "originalTitle": "Arrival",
  "year": 2016,
  "imdbRating": 7.9,
  "imdbVotes": "882K",
  "duration": "1s 56dk",
  "ageRating": "7+",
  "genres": [
   "Dram",
   "Gizem",
   "Bilim Kurgu"
  ],
  "director": "Denis Villeneuve",
  "cast": [
   "Amy Adams",
   "Jeremy Renner",
   "Forest Whitaker"
  ],
  "tagline": "Dil zamanı değiştirir.",
  "awards": "Won 1 Oscar. 73 wins & 276 nominations total",
  "summary": "Dilbilimci Louise Banks, dünyaya inen uzay gemilerinin diliyle iletişim kurmaya çalışır; öğrendiği dil zamanı bambaşka bir çizgide açar. Villeneuve'ün sessiz ve fikir dolu bilimkurgusu, duyguyu gramerle birleştirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "hT5ZHqRBo_0",
  "platforms": [
   "prime",
   "tvplus"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "mind-bending",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "blade-runner",
  "imdbID": "tt0083658",
  "title": "Blade Runner",
  "originalTitle": "Blade Runner",
  "year": 1982,
  "imdbRating": 8.1,
  "imdbVotes": "893K",
  "duration": "1s 57dk",
  "ageRating": "18+",
  "genres": [
   "Aksiyon",
   "Dram",
   "Bilim Kurgu"
  ],
  "director": "Ridley Scott",
  "cast": [
   "Harrison Ford",
   "Rutger Hauer",
   "Sean Young"
  ],
  "tagline": "İnsan ne demek?",
  "awards": "Nominated for 2 Oscars. 16 wins & 22 nominations total",
  "summary": "2019 Los Angeles'ında emekliye yakın dedektif Deckard, kaçan replikantları avlamak için geri çağrılır; son sorgu, insanın ne olduğunu sorgular. Ridley Scott'ın yağmurlu neonoir destanı, bilimkurgu estetiğini kalıcı biçimde değiştirdi.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "eogpIG53Cis",
  "platforms": [
   "prime"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "mind-bending",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ex-machina",
  "imdbID": "tt0470752",
  "title": "Ex Machina",
  "originalTitle": "Ex Machina",
  "year": 2014,
  "imdbRating": 7.7,
  "imdbVotes": "647K",
  "duration": "1s 48dk",
  "ageRating": "7+",
  "genres": [
   "Dram",
   "Bilim Kurgu",
   "Gerilim"
  ],
  "director": "Alex Garland",
  "cast": [
   "Alicia Vikander",
   "Domhnall Gleeson",
   "Oscar Isaac"
  ],
  "tagline": "Test başlıyor.",
  "awards": "Won 1 Oscar. 74 wins & 163 nominations total",
  "summary": "Genç programcı Caleb, dâhi patronunun yapay zekâsı Ava'yı test etmek için izole bir malikaneye çağrılır; testler, kimin kimin kafesinde olduğunu sorar. Garland'ın cılız ve zeki bilimkurgu gerilimi, Turing'i gövdelerle oynatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "n0wNwiU5iwc",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "besinci-element",
  "imdbID": "tt0119116",
  "title": "Beşinci Element",
  "originalTitle": "The Fifth Element",
  "year": 1997,
  "imdbRating": 7.6,
  "imdbVotes": "553K",
  "duration": "2s 6dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Luc Besson",
  "cast": [
   "Bruce Willis",
   "Milla Jovovich",
   "Gary Oldman"
  ],
  "tagline": "Evren bir dansa ihtiyaç duyuyor.",
  "awards": "Nominated for 1 Oscar. 10 wins & 39 nominations total",
  "summary": "Taksici Korben Dallas, dünyayı kurtaracak \"beşinci element\"in peşine düşer; opera sahnelerinden flying taksi kovalamacalarına uzanan bir retro-fütürist macera açılır. Luc Besson'ın renkli bilimkurgu komedisi, hem absürt hem sevimlidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BODU4ZTE5MWYtNmY2MC00NDkyLTk0NDgtNTk5YjgzMzc4NmQwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BODU4ZTE5MWYtNmY2MC00NDkyLTk0NDgtNTk5YjgzMzc4NmQwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "pqs9ycvKfD8",
  "platforms": [
   "tod"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "escapism",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "gelecege-donus",
  "imdbID": "tt0088763",
  "title": "Geleceğe Dönüş",
  "originalTitle": "Back to the Future",
  "year": 1985,
  "imdbRating": 8.5,
  "imdbVotes": "1.5M",
  "duration": "1s 56dk",
  "ageRating": "G",
  "genres": [
   "Macera",
   "Komedi",
   "Bilim Kurgu"
  ],
  "director": "Robert Zemeckis",
  "cast": [
   "Michael J. Fox",
   "Christopher Lloyd",
   "Lea Thompson"
  ],
  "tagline": "Zaman yolculuğu başlıyor.",
  "awards": "Won 1 Oscar. 30 wins & 28 nominations total",
  "summary": "Genç Marty McFly, Delorean aracında yanlışlıkla 1955'e gider; kendi annesine âşık olma riskiyle ailesinin hikâyesini düzeltmek zorundadır. Zemeckis'in kusursuz kurgulu klasik komedi bilimkurgusu, saat ile mizahı aynı hızda döndürür.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "qvsgGtivCgs",
  "platforms": [
   "prime"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "escapism",
   "chill-comedy"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "jurassic-park",
  "imdbID": "tt0107290",
  "title": "Jurassic Park",
  "originalTitle": "Jurassic Park",
  "year": 1993,
  "imdbRating": 8.2,
  "imdbVotes": "1.2M",
  "duration": "2s 7dk",
  "ageRating": "13+",
  "genres": [
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Steven Spielberg",
  "cast": [
   "Sam Neill",
   "Laura Dern",
   "Jeff Goldblum"
  ],
  "tagline": "Hayat yol bulur.",
  "awards": "Won 3 Oscars. 44 wins & 27 nominations total",
  "summary": "Dinozor DNA'sıyla canlılar kuran bir temalı park, güvenlik testi sırasında kâbusa döner; paleontolog Grant, çocukları T-Rex'in pençesinden kurtarmak zorundadır. Spielberg'in devrimci efekti, felaket sinemasının kalıcı anıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "bx46tthKXmc",
  "platforms": [
   "prime",
   "tvplus"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "raiders-of-the-lost-ark",
  "imdbID": "tt0082971",
  "title": "Raiders of the Lost Ark",
  "originalTitle": "Raiders of the Lost Ark",
  "year": 1981,
  "imdbRating": 8.4,
  "imdbVotes": "1.1M",
  "duration": "1s 55dk",
  "ageRating": "7+",
  "genres": [
   "Macera"
  ],
  "director": "Steven Spielberg",
  "cast": [
   "Harrison Ford",
   "Karen Allen",
   "Paul Freeman"
  ],
  "tagline": "Sandık aranıyor.",
  "awards": "Won 4 Oscars. 46 wins & 26 nominations total",
  "summary": "Arkeoloji profesörü Indiana Jones, Nazi'lerden önce Musa'nın Sandığını bulmak için yarışır; solucan dolu çukurlar, altın heykeller ve kamyon kovalamacaları sırayla gelir. Spielberg'in macera şablonu, türün altın standardıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGNhMjg2ZjgtYzk4Ni00MTViLTg1MmUtYzM2MDZiYjZlMmU3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOGNhMjg2ZjgtYzk4Ni00MTViLTg1MmUtYzM2MDZiYjZlMmU3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Rh_BJXG1-44",
  "platforms": [],
  "themeColor": "#f59e0b",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "acl-k-oyunlar",
  "imdbID": "tt1392170",
  "title": "Açlık Oyunları",
  "originalTitle": "The Hunger Games",
  "year": 2012,
  "imdbRating": 7.2,
  "imdbVotes": "1.1M",
  "duration": "2s 22dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Gary Ross",
  "cast": [
   "Jennifer Lawrence",
   "Josh Hutcherson",
   "Liam Hemsworth"
  ],
  "tagline": "Oyunlar başlıyor.",
  "awards": "Won 1 BAFTA Award. 34 wins & 51 nominations total",
  "summary": "Distopik Panem'de her yıl 12 bölgeden birer genç ölümcül bir televizyon turnuvasına alınır; Katniss Everdeen, kardeşinin yerine geçer. Açlık ve isyanın ilk bölümü, genç distopya dalgasının en sert örneğidir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWI1OGM4YjQtNmIxNi00YmE2LWJkNTAtY2Q0YjU4NTI5NWQyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMWI1OGM4YjQtNmIxNi00YmE2LWJkNTAtY2Q0YjU4NTI5NWQyXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "mfmrPu43DF8",
  "platforms": [
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "hobbit-beklenmedik-yolculuk",
  "imdbID": "tt0903624",
  "title": "Hobbit: Beklenmedik Yolculuk",
  "originalTitle": "The Hobbit: An Unexpected Journey",
  "year": 2012,
  "imdbRating": 7.8,
  "imdbVotes": "939K",
  "duration": "2s 49dk",
  "ageRating": "13+",
  "genres": [
   "Macera",
   "Fantastik"
  ],
  "director": "Peter Jackson",
  "cast": [
   "Martin Freeman",
   "Ian McKellen",
   "Richard Armitage"
  ],
  "tagline": "Yolculuk başlıyor.",
  "awards": "Nominated for 3 Oscars. 11 wins & 76 nominations total",
  "summary": "Hobbit Bilbo Baggins, 13 cüceyle Ejderha Smaug'dan yuvalarını geri almak için yola çıkar; yolculuğa Gollum'un halkasıyla tanışması da sızar. Jackson'ın Orta Dünya'ya dönüşü, hem sevimli hem epiktir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "SDnYMbYB-nU",
  "platforms": [
   "netflix",
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "escapism",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "it",
  "imdbID": "tt1396484",
  "title": "It",
  "originalTitle": "It",
  "year": 2017,
  "imdbRating": 7.3,
  "imdbVotes": "712K",
  "duration": "2s 15dk",
  "ageRating": "15+",
  "genres": [
   "Korku"
  ],
  "director": "Andy Muschietti",
  "cast": [
   "Bill Skarsgård",
   "Jaeden Martell",
   "Finn Wolfhard"
  ],
  "tagline": "Hepimiz yukarı yüzüyoruz.",
  "awards": "13 wins & 49 nominations total",
  "summary": "Derry kasabasında kaybolan çocukların peşinde bir palyaço vardır; dışlanan bir çocuk çetesi, korkularıyla yüzleşmek için yere iner. King uyarlaması, çocukluk dostluğunu üstel korkuyla birleştirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "xKJmEC5ieOk",
  "platforms": [
   "netflix",
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#ef4444",
  "moods": [
   "thrill",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "the-conjuring",
  "imdbID": "tt1457767",
  "title": "The Conjuring",
  "originalTitle": "The Conjuring",
  "year": 2013,
  "imdbRating": 7.5,
  "imdbVotes": "635K",
  "duration": "1s 52dk",
  "ageRating": "15+",
  "genres": [
   "Korku",
   "Gizem",
   "Gerilim"
  ],
  "director": "James Wan",
  "cast": [
   "Patrick Wilson",
   "Vera Farmiga",
   "Ron Livingston"
  ],
  "tagline": "Karanlık gerçek.",
  "awards": "16 wins & 22 nominations total",
  "summary": "Doğaüstü araştırmacılar Ed ve Lorraine Warren, terörize olmuş bir ailenin çiftlik evindeki karanlığı ortaya çıkarır. Wan'ın gerilim ustalığı, modern doğaüstü korkunun referans noktasıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "ejMMn0t58Lc",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#ef4444",
  "moods": [
   "thrill",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "kac",
  "imdbID": "tt5052448",
  "title": "Kaç",
  "originalTitle": "Get Out",
  "year": 2017,
  "imdbRating": 7.8,
  "imdbVotes": "841K",
  "duration": "1s 44dk",
  "ageRating": "15+",
  "genres": [
   "Korku",
   "Gizem",
   "Gerilim"
  ],
  "director": "Jordan Peele",
  "cast": [
   "Daniel Kaluuya",
   "Allison Williams",
   "Bradley Whitford"
  ],
  "tagline": "Kaçabilirsen.",
  "awards": "Won 1 Oscar. 154 wins & 215 nominations total",
  "summary": "Genç fotoğrafçı Chris, beyaz kız arkadaşının ailesiyle hafta sonuna gider; kusursuz kibarlık altında korkunç bir plan bulunur. Jordan Peele'in çıkışı, ırksal gerilimi korku cinasına keskin biçimde taşır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "DzfpyUB60YY",
  "platforms": [
   "prime"
  ],
  "themeColor": "#ef4444",
  "moods": [
   "thrill",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "sessiz-bir-yer",
  "imdbID": "tt6644200",
  "title": "Sessiz Bir Yer",
  "originalTitle": "A Quiet Place",
  "year": 2018,
  "imdbRating": 7.5,
  "imdbVotes": "671K",
  "duration": "1s 30dk",
  "ageRating": "16+",
  "genres": [
   "Dram",
   "Korku",
   "Bilim Kurgu"
  ],
  "director": "John Krasinski",
  "cast": [
   "Emily Blunt",
   "John Krasinski",
   "Millicent Simmonds"
  ],
  "tagline": "Sessiz kal.",
  "awards": "Nominated for 1 Oscar. 38 wins & 129 nominations total",
  "summary": "Ses duyarlı canlıların istilasına uğrayan dünyada bir aile, çıplak ayakla yaşamayı öğrenir; bir çocuğun doğumu, sessizliğin en riskli anında başlar. Krasinski'nin gerilimi, sessizliği silah gibi kullanır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "WR7cc5t7tv8",
  "platforms": [
   "netflix",
   "disney"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "hereditary",
  "imdbID": "tt7784604",
  "title": "Hereditary",
  "originalTitle": "Hereditary",
  "year": 2018,
  "imdbRating": 7.3,
  "imdbVotes": "472K",
  "duration": "2s 7dk",
  "ageRating": "15+",
  "genres": [
   "Dram",
   "Korku",
   "Gizem"
  ],
  "director": "Ari Aster",
  "cast": [
   "Toni Collette",
   "Milly Shapiro",
   "Gabriel Byrne"
  ],
  "tagline": "Aile kaderdir.",
  "awards": "52 wins & 112 nominations total",
  "summary": "Büyükannesinin ölümünden sonra Graham ailesi, nesilden nesile geçen karanlık bir mirasın içinde kaybolur. Ari Aster'ın çıkışı, aile travmasını sinema tarihinin en rahatsız edici karesine çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "V6wWKNij_1M",
  "platforms": [
   "mubi",
   "prime"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "alt-nc-his",
  "imdbID": "tt0167404",
  "title": "Altıncı His",
  "originalTitle": "The Sixth Sense",
  "year": 1999,
  "imdbRating": 8.2,
  "imdbVotes": "1.2M",
  "duration": "1s 47dk",
  "ageRating": "15+",
  "genres": [
   "Dram",
   "Gizem",
   "Gerilim"
  ],
  "director": "M. Night Shyamalan",
  "cast": [
   "Bruce Willis",
   "Haley Joel Osment",
   "Toni Collette"
  ],
  "tagline": "Ölüleri görüyorum.",
  "awards": "Nominated for 6 Oscars. 37 wins & 56 nominations total",
  "summary": "Çocuk psikoloğu Malcolm Crowe, ölüleri gören sessiz bir çocuğun vakasını üstlenir; iyileştirme girişimi, doktorun kendi gerçekini sarsar. Shyamalan'ın klasik gerilimi, sinema tarihinin en meşhur final bükülmesinden birini sunar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "3-ZP95NF_Wk",
  "platforms": [
   "netflix",
   "disney"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "psycho",
  "imdbID": "tt0054215",
  "title": "Psycho",
  "originalTitle": "Psycho",
  "year": 1960,
  "imdbRating": 8.5,
  "imdbVotes": "796K",
  "duration": "1s 49dk",
  "ageRating": "13+",
  "genres": [
   "Dram",
   "Korku",
   "Gizem"
  ],
  "director": "Alfred Hitchcock",
  "cast": [
   "Anthony Perkins",
   "Janet Leigh",
   "Vera Miles"
  ],
  "tagline": "Anneni arama.",
  "awards": "Nominated for 4 Oscars. 9 wins & 14 nominations total",
  "summary": "Çalıntı parayla kaçan Marion Crane, tenha bir motelde Norman Bates ile tanışır; duş sahne de dahil, korku sineması yeniden yazılır. Hitchcock'un bu klasiği, gerilim dilinin gramatiğini kurdu.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Wz719b9QUqY",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "thrill",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "casablanca",
  "imdbID": "tt0034583",
  "title": "Casablanca",
  "originalTitle": "Casablanca",
  "year": 1942,
  "imdbRating": 8.5,
  "imdbVotes": "662K",
  "duration": "1s 42dk",
  "ageRating": "G",
  "genres": [
   "Dram",
   "Romantik",
   "Savaş"
  ],
  "director": "Michael Curtiz",
  "cast": [
   "Humphrey Bogart",
   "Ingrid Bergman",
   "Paul Henreid"
  ],
  "tagline": "Oynat yine Sam.",
  "awards": "Won 3 Oscars. 18 wins & 12 nominations total",
  "summary": "II. Dünya Savaşı'nda Kazablanka'da kafe sahibi Rick, eskiden sevdiği Ilsa'yı kocasıyla şehirden kaçırmak zorunda kalır. Bogart ile Bergman'ın bu klasik aşk destanı, sinemanın en ünlü repliklerinden birini doğurur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "MF7JH_54d8c",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "one-flew-over-the-cuckoo-s-nest",
  "imdbID": "tt0073486",
  "title": "One Flew Over the Cuckoo's Nest",
  "originalTitle": "One Flew Over the Cuckoo's Nest",
  "year": 1975,
  "imdbRating": 8.6,
  "imdbVotes": "1.2M",
  "duration": "2s 13dk",
  "ageRating": "18+",
  "genres": [
   "Dram"
  ],
  "director": "Miloš Forman",
  "cast": [
   "Jack Nicholson",
   "Louise Fletcher",
   "Michael Berryman"
  ],
  "tagline": "En az bir kez uçmayı dene.",
  "awards": "Won 5 Oscars. 38 wins & 15 nominations total",
  "summary": "Sahte delilikla kuruma yerleşen Jack Nicholson karakteri McMurphy, hemşire Ratched'ın demir düzenine isyan bayrağı açar. Beş Oscar kazanan bu klasiğin finali, özgürlüğün bedelini kalıcı biçimde gösterir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "OXrcDonY-B8",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "rain-man",
  "imdbID": "tt0095953",
  "title": "Rain Man",
  "originalTitle": "Rain Man",
  "year": 1988,
  "imdbRating": 8,
  "imdbVotes": "591K",
  "duration": "2s 13dk",
  "ageRating": "R",
  "genres": [
   "Dram"
  ],
  "director": "Barry Levinson",
  "cast": [
   "Dustin Hoffman",
   "Tom Cruise",
   "Valeria Golino"
  ],
  "tagline": "Kardeşlik uzun yol.",
  "awards": "Won 4 Oscars. 27 wins & 27 nominations total",
  "summary": "Showbizde geçinen Charlie, babasından miras kalan servetin otistik ağabeyi Raymond'a kaldığını öğrenir; kumar heyecanı ve kardeşlik yolculuğu başlar. Hoffman'ın Oscar'lı gösterimi ile Cruise'un dönüşü, aile komedisi dramına dönüşür.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDUzODNkNGUtNzJjNi00ODFlLTkzMzktMGNkOTIwYWM2YTQzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZDUzODNkNGUtNzJjNi00ODFlLTkzMzktMGNkOTIwYWM2YTQzXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "mlNwXuHUA8I",
  "platforms": [
   "prime"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "heartwarming",
   "prestige"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "otomatik-portakal",
  "imdbID": "tt0066921",
  "title": "Otomatik Portakal",
  "originalTitle": "A Clockwork Orange",
  "year": 1971,
  "imdbRating": 8.2,
  "imdbVotes": "947K",
  "duration": "2s 16dk",
  "ageRating": "18+",
  "genres": [
   "Suç",
   "Bilim Kurgu"
  ],
  "director": "Stanley Kubrick",
  "cast": [
   "Malcolm McDowell",
   "Patrick Magee",
   "Michael Bates"
  ],
  "tagline": "Özgür irade yok.",
  "awards": "Nominated for 4 Oscars. 12 wins & 26 nominations total",
  "summary": "Alex ve çetesi, şiddeti eğlenceye çeviren genç bir gruptur; devletin \"tedavi\" deneyi, özgür iradeyi robotlaştırır. Kubrick'in ürkütücü klasiği, estetik şiddeti felsefi bir sorguya çevirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "2meAsIclTzQ",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "mind-bending",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "full-metal-jacket",
  "imdbID": "tt0093058",
  "title": "Full Metal Jacket",
  "originalTitle": "Full Metal Jacket",
  "year": 1987,
  "imdbRating": 8.2,
  "imdbVotes": "861K",
  "duration": "1s 56dk",
  "ageRating": "18+",
  "genres": [
   "Dram",
   "Savaş"
  ],
  "director": "Stanley Kubrick",
  "cast": [
   "Matthew Modine",
   "R. Lee Ermey",
   "Vincent D&apos;Onofrio"
  ],
  "tagline": "Savaş zihni değiştirir.",
  "awards": "Nominated for 1 Oscar. 8 wins & 17 nominations total",
  "summary": "Vietnam'a gitmeden önce acemi askerler boot camp'in insanlıktan çıkaran disiplininden geçer; sonra savaş, ruhun kalanını alır. Kubrick'in iki bölümlü savaş klasiği, savaşı hem fiziksel hem zihinsel bir fabrika olarak gösterir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWUzNzZkNzUtNDdiYy00Nzk5LTgxMmItNTk0MjRjNjdjNDA0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYWUzNzZkNzUtNDdiYy00Nzk5LTgxMmItNTk0MjRjNjdjNDA0XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "n2i917l5RFc",
  "platforms": [],
  "themeColor": "#a78bfa",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "buyuk-bal-k",
  "imdbID": "tt0319061",
  "title": "Büyük Balık",
  "originalTitle": "Big Fish",
  "year": 2003,
  "imdbRating": 7.9,
  "imdbVotes": "481K",
  "duration": "2s 5dk",
  "ageRating": "G",
  "genres": [
   "Macera",
   "Dram",
   "Fantastik"
  ],
  "director": "Tim Burton",
  "cast": [
   "Ewan McGregor",
   "Albert Finney",
   "Billy Crudup"
  ],
  "tagline": "Masallar gerçek.",
  "awards": "Nominated for 1 Oscar. 69 nominations total",
  "summary": "Ölüm döşeğindeki Edward Bloom'un abartılı masalları, gerçekçi oğlu Will'in inadıyla çarpışır; her hikâyenin çekirdeğinde bir gerçek bulunur. Tim Burton'ın şefkatli fantastik destanı, babayla barışmanın en şiirsel hallerinden biridir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTVlNjc4ZmItMDZjYy00YWZjLTg1OWEtOTNlZjJlN2FlMjEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTVlNjc4ZmItMDZjYy00YWZjLTg1OWEtOTNlZjJlN2FlMjEwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "D0kiS4ROWkQ",
  "platforms": [],
  "themeColor": "#f59e0b",
  "moods": [
   "heartwarming",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "milyoner",
  "imdbID": "tt1010048",
  "title": "Milyoner",
  "originalTitle": "Slumdog Millionaire",
  "year": 2008,
  "imdbRating": 8,
  "imdbVotes": "917K",
  "duration": "2s 0dk",
  "ageRating": "7+",
  "genres": [
   "Suç",
   "Dram",
   "Romantik"
  ],
  "director": "Danny Boyle",
  "cast": [
   "Dev Patel",
   "Freida Pinto",
   "Saurabh Shukla"
  ],
  "tagline": "Hayat cevaplardır.",
  "awards": "Won 8 Oscars. 154 wins & 133 nominations total",
  "summary": "Mumbai'nin gecekondusundan yetişen Jamal, kimseyle yarışamayacağı bir bilgiyle milyoner olur; her soru, hayatının bir parçasını açar. Boyle'nin Oscar'lı filmi, yoksulluğu enerjiyle dans ettiren bir aşk destanıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTE5ZTRkYWEtZmU5MC00NDJjLTk3NmUtZGJlYTM2MmQ3NTJkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTE5ZTRkYWEtZmU5MC00NDJjLTk3NmUtZGJlYTM2MmQ3NTJkXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "SQ7P5wEI2CA",
  "platforms": [
   "tod"
  ],
  "themeColor": "#a78bfa",
  "moods": [
   "heartwarming",
   "tearjerker"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "pi-nin-hayat",
  "imdbID": "tt0454876",
  "title": "Pi'nin Hayatı",
  "originalTitle": "Life of Pi",
  "year": 2012,
  "imdbRating": 7.9,
  "imdbVotes": "707K",
  "duration": "2s 7dk",
  "ageRating": "PG",
  "genres": [
   "Macera",
   "Dram",
   "Fantastik"
  ],
  "director": "Ang Lee",
  "cast": [
   "Suraj Sharma",
   "Irrfan Khan",
   "Ayush Tandon"
  ],
  "tagline": "Okyanusta tek masal.",
  "awards": "Won 4 Oscars. 81 wins & 134 nominations total",
  "summary": "Gemisi batan genç Pi, bir Bengal kapisiyle okyanus ortasında tek bir sandalda hayatta kalır; hikâye anlatmak, hayatta kalmanın ikinci yarısıdır. Ang Lee'nin Oscar'lı görüntü mücevheri, inanç ile masal arasındaki dengeyi kurar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "3mMN693-F3U",
  "platforms": [
   "disney"
  ],
  "themeColor": "#f59e0b",
  "moods": [
   "escapism",
   "heartwarming"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "muhtesem-bay-fox",
  "imdbID": "tt0432283",
  "title": "Muhteşem Bay Fox",
  "originalTitle": "Fantastic Mr. Fox",
  "year": 2009,
  "imdbRating": 7.9,
  "imdbVotes": "312K",
  "duration": "1s 27dk",
  "ageRating": "7+",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "Wes Anderson",
  "cast": [
   "George Clooney",
   "Meryl Streep",
   "Bill Murray"
  ],
  "tagline": "Tilki her zaman tilki.",
  "awards": "Nominated for 2 Oscars. 32 wins & 63 nominations total",
  "summary": "Tilki Mr. Fox, aile sorumluluğu ile tavuk çiftliklerine karşı doğal hırsı arasında kalır; üç kötü çiftçi onu kuşatır. Wes Anderson'ın stop-motion klasiği, aile komedisini incelikli bir çizgi estetiğiyle taşır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTA1ZTIxZDUtNGFjYS00YTc5LTgzNDMtZWNjYjBlMzI2OTk3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTA1ZTIxZDUtNGFjYS00YTc5LTgzNDMtZWNjYjBlMzI2OTk3XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "n2igjYFojUo",
  "platforms": [
   "tvplus",
   "hbo"
  ],
  "themeColor": "#34d399",
  "moods": [
   "chill-comedy",
   "heartwarming"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "oyuncak-hikayesi",
  "imdbID": "tt0114709",
  "title": "Oyuncak Hikayesi",
  "originalTitle": "Toy Story",
  "year": 1995,
  "imdbRating": 8.3,
  "imdbVotes": "1.2M",
  "duration": "1s 21dk",
  "ageRating": "G",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "John Lasseter",
  "cast": [
   "Tom Hanks",
   "Tim Allen",
   "Don Rickles"
  ],
  "tagline": "Oyuncaklar yaşıyor.",
  "awards": "Nominated for 3 Oscars. 29 wins & 24 nominations total",
  "summary": "Andy'nin sevgili oyuncağı kovboy Woody, uzaylı oyuncak Buzz Lightyear'ın gelişiyle tahtını kaybeder; ikisi evden uzakta birlikte eve dönmek zorundadır. Pixar'ın ilk uzun filmi, animasyon tarihini tamamen değiştirdi.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "v-PjgYDrg70",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ters-yuz",
  "imdbID": "tt2096673",
  "title": "Ters Yüz",
  "originalTitle": "Inside Out",
  "year": 2015,
  "imdbRating": 8.1,
  "imdbVotes": "935K",
  "duration": "1s 35dk",
  "ageRating": "PG",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "Ronnie Del Carmen",
  "cast": [
   "Amy Poehler",
   "Bill Hader",
   "Lewis Black"
  ],
  "tagline": "Duygular bir ekip.",
  "awards": "Won 1 Oscar. 99 wins & 120 nominations total",
  "summary": "11 yaşındaki Riley'nin beyninde sevinç, korku, öfke, tiksinti ve üzüntü bir kontrol panelinde çalışır; taşınma günü panel bozulur. Pixar'ın Oscar'lı eseri, duyguların işleyişini en esprili ve en hassas haliyle anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "yRUAzGQ3nSY",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "tearjerker"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "soul",
  "imdbID": "tt2948372",
  "title": "Soul",
  "originalTitle": "Soul",
  "year": 2020,
  "imdbRating": 8,
  "imdbVotes": "459K",
  "duration": "1s 40dk",
  "ageRating": "7+",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "Pete Docter",
  "cast": [
   "Jamie Foxx",
   "Tina Fey",
   "Graham Norton"
  ],
  "tagline": "Yaşamak müzik.",
  "awards": "Won 2 Oscars. 125 wins & 91 nominations total",
  "summary": "Caz piyanisti Joe Gardner, büyük konserinden hemen önce bedeninden ayrılır; ruhlara hayat sevinci aşılayan 22 numaralı ruhla geri dönüş yolculuğu başlar. Pixar'ın felsefi eseri, \"ne için yaşıyorsun\" sorusunu müzikle cevaplar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTZkYjA5MDEtMjY1ZC00ODk5LThjOTUtZDYxODEzYWNjMTU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BZTZkYjA5MDEtMjY1ZC00ODk5LThjOTUtZDYxODEzYWNjMTU2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "oqMs6Cd7vyg",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "mind-bending"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "moana",
  "imdbID": "tt3521164",
  "title": "Moana",
  "originalTitle": "Moana",
  "year": 2016,
  "imdbRating": 7.6,
  "imdbVotes": "451K",
  "duration": "1s 47dk",
  "ageRating": "G",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "Ron Clements",
  "cast": [
   "Auli&apos;i Cravalho",
   "Dwayne Johnson",
   "Rachel House"
  ],
  "tagline": "Okyanus çağırıyor.",
  "awards": "Nominated for 2 Oscars. 22 wins & 91 nominations total",
  "summary": "Ada şefinin kızı Moana, okyanus seçmiş bir kahramandır; yarı tanrı Maui ile yolu düzeltmek için denize açılır. Disney'in şarkı dolu bu epik macerası, cesaretin kalıtını taşıyan bir kızın destanıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "qnIAbxMMf0E",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "escapism",
   "heartwarming"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "nemo-yu-ar-yorum",
  "imdbID": "tt0266543",
  "title": "Nemo'yu Arıyorum",
  "originalTitle": "Finding Nemo",
  "year": 2003,
  "imdbRating": 8.2,
  "imdbVotes": "1.2M",
  "duration": "1s 40dk",
  "ageRating": "G",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "Andrew Stanton",
  "cast": [
   "Albert Brooks",
   "Ellen DeGeneres",
   "Alexander Gould"
  ],
  "tagline": "Okyanus büyük, aile büyük.",
  "awards": "Won 1 Oscar. 49 wins & 63 nominations total",
  "summary": "Koruma babası balık Marlin, oğlu Nemo akvaryuma kaçırılınca okyanusu kat eder; unutkan Dory ile yol boyu dostluklar kurulur. Pixar'ın Oscar'lı deniz destanı, ebeveynlik ve gevşemeyi aynı dalgada anlatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTc5NjExNTA5OV5BMl5BanBnXkFtZTYwMTQ0ODY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTc5NjExNTA5OV5BMl5BanBnXkFtZTYwMTQ0ODY2._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "SPHfeNgogVs",
  "platforms": [
   "disney"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "shrek",
  "imdbID": "tt0126029",
  "title": "Shrek",
  "originalTitle": "Shrek",
  "year": 2001,
  "imdbRating": 7.9,
  "imdbVotes": "823K",
  "duration": "1s 30dk",
  "ageRating": "7+",
  "genres": [
   "Animasyon",
   "Macera",
   "Komedi"
  ],
  "director": "Andrew Adamson",
  "cast": [
   "Mike Myers",
   "Eddie Murphy",
   "Cameron Diaz"
  ],
  "tagline": "Masallar ters dönüyor.",
  "awards": "Won 1 Oscar. 40 wins & 60 nominations total",
  "summary": "Bataklığında sakin yaşamak isteyen yeşil dev Shrek, krallığın kovuşturduğu masal yaratıklarını geri götürmek için prenses Fiona'yı kurtarma görevine çıkar. DreamWorks'in Oscar'lı komedisi, masal klişelerini zekice yıkar.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "CwXOrWvPBPk",
  "platforms": [
   "netflix",
   "prime",
   "tvplus"
  ],
  "themeColor": "#34d399",
  "moods": [
   "chill-comedy",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "ejderhan-nas-l-eversin",
  "imdbID": "tt0892769",
  "title": "Ejderhanı Nasıl Eversin",
  "originalTitle": "How to Train Your Dragon",
  "year": 2010,
  "imdbRating": 8.1,
  "imdbVotes": "911K",
  "duration": "1s 38dk",
  "ageRating": "G",
  "genres": [
   "Animasyon",
   "Aksiyon",
   "Macera"
  ],
  "director": "Dean DeBlois",
  "cast": [
   "Jay Baruchel",
   "Gerard Butler",
   "Christopher Mintz-Plasse"
  ],
  "tagline": "Dostluk uçmayı öğretir.",
  "awards": "Nominated for 2 Oscars. 25 wins & 63 nominations total",
  "summary": "Viking köyünde başarısız bir genç Hiccup, vurduğu nadir bir ejderhayı öldürmek yerine iyileştirir; kabile imkansızı öğrenir. DreamWorks'in Oscar adaylı destanı, dostluğun kanatlarını açıyor.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "2AKsAxrhqgM",
  "platforms": [
   "netflix",
   "prime"
  ],
  "themeColor": "#34d399",
  "moods": [
   "heartwarming",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "sessiz-bir-ses",
  "imdbID": "tt5323662",
  "title": "Sessiz Bir Ses",
  "originalTitle": "A Silent Voice: The Movie",
  "year": 2016,
  "imdbRating": 8.2,
  "imdbVotes": "151K",
  "duration": "2s 10dk",
  "ageRating": "12",
  "genres": [
   "Animasyon",
   "Dram"
  ],
  "director": "Naoko Yamada",
  "cast": [
   "Miyu Irino",
   "Saori Hayami",
   "Aoi Yûki"
  ],
  "tagline": "Sesler duymaya başlar.",
  "awards": "6 wins & 9 nominations total",
  "summary": "İlkokulda işitme engelli sınıf arkadaşını zorbalıkla dışlayan Shoya, yıllar sonra affetmek için geri döner; sessizliğin içinde bir bağ kurulur. Kyoto Animation'ın dokunaklı eseri, suçluluk ve affetmeyi şiir gibi çizer.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "nfK6UgLra7g",
  "platforms": [],
  "themeColor": "#34d399",
  "moods": [
   "tearjerker",
   "heartwarming"
  ],
  "ageRatingCountry": "GB",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "john-wick",
  "imdbID": "tt2911666",
  "title": "John Wick",
  "originalTitle": "John Wick",
  "year": 2014,
  "imdbRating": 7.5,
  "imdbVotes": "843K",
  "duration": "1s 41dk",
  "ageRating": "16+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Gerilim"
  ],
  "director": "Chad Stahelski",
  "cast": [
   "Keanu Reeves",
   "Michael Nyqvist",
   "Alfie Allen"
  ],
  "tagline": "Yazık o köpeğe.",
  "awards": "5 wins & 12 nominations total",
  "summary": "Emekli kiralık katil John Wick, ölen eşinin hediye köpeğini öldüren gangsterlere karşı geri döner; dünyanın en düzenli suç ekonomisi sarsılır. Keanu Reeves'in dönüş filmi, aksiyon koreografisinin referans noktasıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "C0BMx-qxsP4",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "john-wick-2",
  "imdbID": "tt4425200",
  "title": "John Wick 2",
  "originalTitle": "John Wick: Chapter 2",
  "year": 2017,
  "imdbRating": 7.4,
  "imdbVotes": "580K",
  "duration": "2s 2dk",
  "ageRating": "16+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Gerilim"
  ],
  "director": "Chad Stahelski",
  "cast": [
   "Keanu Reeves",
   "Riccardo Scamarcio",
   "Ian McShane"
  ],
  "tagline": "Kural geçerli.",
  "awards": "4 wins & 11 nominations total",
  "summary": "Emeklilik isteği kısa sürer; itaat damgasıyla bağlanan John, Roma'ya kadar uzanan bir kontratın içinde bulur. Serinin genişleyen suç dünyası, pistten çıkılmayan bir aksiyon cilası taşır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "ChpLV9AMqm4",
  "platforms": [
   "prime",
   "tvplus",
   "hbo"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "logan",
  "imdbID": "tt3315342",
  "title": "Logan",
  "originalTitle": "Logan",
  "year": 2017,
  "imdbRating": 8.1,
  "imdbVotes": "943K",
  "duration": "2s 17dk",
  "ageRating": "16+",
  "genres": [
   "Aksiyon",
   "Dram",
   "Bilim Kurgu"
  ],
  "director": "James Mangold",
  "cast": [
   "Hugh Jackman",
   "Patrick Stewart",
   "Dafne Keen"
  ],
  "tagline": "Bir kahramanın vedası.",
  "awards": "Nominated for 1 Oscar. 29 wins & 82 nominations total",
  "summary": "2029'da yaşlanan Wolverine, zayıflamış mutantların sonuna doğru geriler; küçük bir mutant kız X-23'ü güvene taşımak son görevi olur. Jackman ile Stewart'ın veda filmi, süper kahraman sinemasına western duygusu kazandırır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "Div0iP65aZo",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "x-men-gelecegin-gecmis-gunleri",
  "imdbID": "tt1877832",
  "title": "X-Men: Geleceğin Geçmiş Günleri",
  "originalTitle": "X-Men: Days of Future Past",
  "year": 2014,
  "imdbRating": 7.9,
  "imdbVotes": "799K",
  "duration": "2s 12dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Bryan Singer",
  "cast": [
   "Patrick Stewart",
   "Ian McKellen",
   "Hugh Jackman"
  ],
  "tagline": "Geçmişi değiştir.",
  "awards": "Nominated for 1 Oscar. 16 wins & 48 nominations total",
  "summary": "Robotlar mutantları yok etmeye yaklaştığında Wolverine, zihinlerini 1973'e gönderir; genç ve eski kuşak tek tarihi düzeltmek için buluşur. X-Men serisinin en iddialı kavuşması, iki dönemi aynı sahnede birleştirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzNiYWE4NjMtMTU4OS00NmM4LWE4ZjAtYmE5OTA5NjkzODExXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNzNiYWE4NjMtMTU4OS00NmM4LWE4ZjAtYmE5OTA5NjkzODExXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "pK2zYHWDZKo",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "escapism"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "kaptan-amerika-k-s-askeri",
  "imdbID": "tt1843866",
  "title": "Kaptan Amerika: Kış Askeri",
  "originalTitle": "Captain America: The Winter Soldier",
  "year": 2014,
  "imdbRating": 7.7,
  "imdbVotes": "992K",
  "duration": "2s 16dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Anthony Russo",
  "cast": [
   "Chris Evans",
   "Samuel L. Jackson",
   "Scarlett Johansson"
  ],
  "tagline": "Dost düşman olabilir.",
  "awards": "Nominated for 1 Oscar. 5 wins & 53 nominations total",
  "summary": "Steve Rogers, S.H.I.E.L.D. içindeki bir ihaneti çözerken eski dostu Bucky'yi beyin yıkamış bir suikastçı olarak karşılar. Casus gerilimiyle süper kahramanı harmanlayan bu bölüm, serinin kritik mihenk taşıdır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "7SlILk2WMTI",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "thrill"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "galaksinin-koruyucular",
  "imdbID": "tt2015381",
  "title": "Galaksinin Koruyucuları",
  "originalTitle": "Guardians of the Galaxy",
  "year": 2014,
  "imdbRating": 8,
  "imdbVotes": "1.4M",
  "duration": "2s 1dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Komedi"
  ],
  "director": "James Gunn",
  "cast": [
   "Chris Pratt",
   "Vin Diesel",
   "Bradley Cooper"
  ],
  "tagline": "Ekibe katıl.",
  "awards": "Nominated for 2 Oscars. 53 wins & 106 nominations total",
  "summary": "Hırsız Peter Quill, güç taşı çalarken beklenmedik bir ekiple: öfkeli rakun, ağaç, intikamcı ve katil bile birlik olur. Marvel'ın en esprili uzay ekibi, retro müzik listesiyle taşınan bir macera konseri olur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "d96cjJhvlMA",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "chill-comedy",
   "escapism"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "doctor-strange",
  "imdbID": "tt1211837",
  "title": "Doctor Strange",
  "originalTitle": "Doctor Strange",
  "year": 2016,
  "imdbRating": 7.5,
  "imdbVotes": "900K",
  "duration": "1s 55dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Macera",
   "Fantastik"
  ],
  "director": "Scott Derrickson",
  "cast": [
   "Benedict Cumberbatch",
   "Chiwetel Ejiofor",
   "Rachel McAdams"
  ],
  "tagline": "Boyutlar açılıyor.",
  "awards": "Nominated for 1 Oscar. 21 wins & 69 nominations total",
  "summary": "Kibirli cerrah Stephen Strange, el kazasıyla kariyerini kaybeder; mistik Kamar-Taj'da boyut ve zamanı büken sihre girer. Marvel'ın gerçeklik katmanını açan bu giriş, görsel kâbus estetiğiyle ödüllendirilir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "h7gvFravm4A",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "escapism",
   "mind-bending"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "black-panther",
  "imdbID": "tt1825683",
  "title": "Black Panther",
  "originalTitle": "Black Panther",
  "year": 2018,
  "imdbRating": 7.3,
  "imdbVotes": "929K",
  "duration": "2s 14dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Macera",
   "Bilim Kurgu"
  ],
  "director": "Ryan Coogler",
  "cast": [
   "Chadwick Boseman",
   "Michael B. Jordan",
   "Lupita Nyong&apos;o"
  ],
  "tagline": "Wakanda sonsuza kadar.",
  "awards": "Won 3 Oscars. 125 wins & 289 nominations total",
  "summary": "T'Challa, teknolojisi saklı Wakanda'nın tahtına oturur; kayıp kardeşi Killmonger'ın hırsı, ülkenin dünyaya açılma sorusunu şiddetle sorar. Oscar'lı bu bölüm, süper kahraman sinemasına kültürel bir bayrak diker.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "xjDjIWPwcPU",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "adrenaline",
   "prestige"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "thor-ragnarok",
  "imdbID": "tt3501632",
  "title": "Thor: Ragnarok",
  "originalTitle": "Thor: Ragnarok",
  "year": 2017,
  "imdbRating": 7.9,
  "imdbVotes": "916K",
  "duration": "2s 10dk",
  "ageRating": "PG-13",
  "genres": [
   "Aksiyon",
   "Macera",
   "Komedi"
  ],
  "director": "Taika Waititi",
  "cast": [
   "Chris Hemsworth",
   "Tom Hiddleston",
   "Cate Blanchett"
  ],
  "tagline": "Evren yok oluyor.",
  "awards": "6 wins & 52 nominations total",
  "summary": "Thor, asgardını yok eden kader Ragnarok'u durdurmak için eski dost Hulk ile gladyatör arenasına düşer; kız kardeşi Hela tahtı ele geçirmiştir. Waititi'nin komedili dokunuşu, seriye en renkli macerasını giydirir.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "ue80QwXMRHg",
  "platforms": [
   "disney"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "chill-comedy",
   "adrenaline"
  ],
  "ageRatingCountry": "US",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "suclu-raporu",
  "imdbID": "tt0181689",
  "title": "Suçlu Raporu",
  "originalTitle": "Minority Report",
  "year": 2002,
  "imdbRating": 7.6,
  "imdbVotes": "628K",
  "duration": "2s 25dk",
  "ageRating": "16+",
  "genres": [
   "Aksiyon",
   "Suç",
   "Gizem"
  ],
  "director": "Steven Spielberg",
  "cast": [
   "Tom Cruise",
   "Colin Farrell",
   "Samantha Morton"
  ],
  "tagline": "Suç işlenmeden yakalan.",
  "awards": "Nominated for 1 Oscar. 20 wins & 91 nominations total",
  "summary": "Gelecekte cinayetler işlenmeden önlenir; \"Precog\" sistemini yöneten John Anderton bir gün kendi cinayetini gören raporla kaçak olur. Spielberg ile Cruise'un neo-noir bilimkurgusu, özgür iradeyi gözlerle oynatır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTdmNzM3YzItZTRkYS00MTY5LTg4ZmItNjFmNTk2N2Q2NmNlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BYTdmNzM3YzItZTRkYS00MTY5LTg4ZmItNjFmNTk2N2Q2NmNlXkEyXkFqcGc@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "lG7DGMgfOb8",
  "platforms": [
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "mind-bending",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "9-bolge",
  "imdbID": "tt1136608",
  "title": "9. Bölge",
  "originalTitle": "District 9",
  "year": 2009,
  "imdbRating": 7.9,
  "imdbVotes": "759K",
  "duration": "1s 52dk",
  "ageRating": "15+",
  "genres": [
   "Aksiyon",
   "Bilim Kurgu",
   "Gerilim"
  ],
  "director": "Neill Blomkamp",
  "cast": [
   "Sharlto Copley",
   "David James",
   "Jason Cope"
  ],
  "tagline": "İnsanlık sorgulanıyor.",
  "awards": "Nominated for 4 Oscars. 32 wins & 117 nominations total",
  "summary": "Johannesburg üzerinde duran uzay gemisi, milyonlarca mülteci uzaylıyı bir gecekondu mahallesine mahkûm eder; tahliye görevi Wikus'un bedenini dönüştürür. Blomkamp'ın çıkışı, belgesel estetiğiyle bilimkurgu ayrımcılığını çarpıtır.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTM4OTI1OTM5NF5BMl5BanBnXkFtZTcwMzk5MTU1Mg@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTM4OTI1OTM5NF5BMl5BanBnXkFtZTcwMzk5MTU1Mg@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "DyLUwOcR5pk",
  "platforms": [],
  "themeColor": "#38bdf8",
  "moods": [
   "prestige",
   "thrill"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
 },
 {
  "id": "looper",
  "imdbID": "tt1276104",
  "title": "Looper",
  "originalTitle": "Looper",
  "year": 2012,
  "imdbRating": 7.4,
  "imdbVotes": "634K",
  "duration": "1s 59dk",
  "ageRating": "13+",
  "genres": [
   "Aksiyon",
   "Dram",
   "Bilim Kurgu"
  ],
  "director": "Rian Johnson",
  "cast": [
   "Joseph Gordon-Levitt",
   "Bruce Willis",
   "Emily Blunt"
  ],
  "tagline": "Kendini avla.",
  "awards": "18 wins & 47 nominations total",
  "summary": "2074'te mafya, hedeflerini geçmişe gönderip oradaki \"looper\"lara öldürtür; Joe kendi yaşlı halini beklerken döngü bozulur. Johnson'ın zekice kurulan zaman döngüsü, aksiyon ile felsefeyi aynı pistte koşturur.",
  "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  "backdropUrl": "https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_QL75_UX1280_CR0,0,1280,1893_.jpg",
  "trailerYoutubeId": "2iQuhsmtfHw",
  "platforms": [
   "tvplus"
  ],
  "themeColor": "#38bdf8",
  "moods": [
   "mind-bending",
   "adrenaline"
  ],
  "ageRatingCountry": "TR",
  "ageRatingSource": "JustWatch"
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
    getUrl: (title) => `https://www.justwatch.com/tr/arama?q=${encodeURIComponent(title)}`
  },
  tod: {
    id: 'tod',
    name: 'TOD',
    badgeClass: 'plat-tod',
    brandColor: '#10b981',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">TOD</text></svg>`,
    getUrl: (title) => `https://www.justwatch.com/tr/arama?q=${encodeURIComponent(title)}`
  },
  exxen: {
    id: 'exxen',
    name: 'Exxen',
    badgeClass: 'plat-exxen',
    brandColor: '#F59E0B',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="8" font-weight="bold" fill="#000" text-anchor="middle">EXXEN</text></svg>`,
    getUrl: (title) => `https://www.justwatch.com/tr/arama?q=${encodeURIComponent(title)}`
  },
  gain: {
    id: 'gain',
    name: 'GAİN',
    badgeClass: 'plat-gain',
    brandColor: '#059669',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4"/><text x="12" y="16" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">GAİN</text></svg>`,
    getUrl: (title) => `https://www.justwatch.com/tr/arama?q=${encodeURIComponent(title)}`
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
  movie = movie || {};
  const info = movie.streamingInfo || {};
  const normalizeProviders = (items, isGlobal = false) => {
    const unique = new Map();
    (items || []).forEach(item => {
      const p = typeof item === 'string' ? { id: item } : item;
      if (!p || !p.id) return;
      const reg = STREAMING_PLATFORMS[p.id];
      // Yalnızca HTTPS bağlantılarına izin ver; arama ve ana sayfa doğrudan yapım değildir.
      const suppliedUrl = /^https:\/\//i.test(p.url || '') ? p.url : null;
      let direct = false;
      let usableUrl = suppliedUrl;
      if (suppliedUrl) {
        try {
          const u = new URL(suppliedUrl);
          direct = u.pathname !== '/' && !/search|arama/i.test(u.pathname) && !u.hostname.endsWith('justwatch.com');
          if (u.pathname === '/') usableUrl = null;
        } catch (e) { /* arama bağlantısı kullanılacak */ }
      }
      unique.set(p.id, {
        id: p.id,
        name: reg ? reg.name : 'Diğer yayıncı',
        badgeClass: reg ? reg.badgeClass : 'plat-other',
        brandColor: reg ? reg.brandColor : '#475569',
        iconSvg: reg ? reg.iconSvg : '',
        url: usableUrl || (reg ? reg.getUrl(movie.title) : `https://www.justwatch.com/tr/arama?q=${encodeURIComponent(movie.title || '')}`),
        actionLabel: direct ? 'Yapımı aç' : 'Yayını ara',
        isGlobal
      });
    });
    return [...unique.values()];
  };
  const providers = normalizeProviders(info.providers || movie.platforms);
  const globalProviders = normalizeProviders(info.globalProviders || movie.globalPlatforms, true);
  const checkedAt = Number.isFinite(Date.parse(info.checkedAt)) ? info.checkedAt : null;
  const verified = info.verified === true && !!checkedAt;
  const statusText = providers.length ? (verified ? "Türkiye'de Yayında" : 'Yayıncı bilgisi doğrulanmadı')
    : (verified ? 'TR yayıncısı bulunamadı' : 'Yayıncı bilgisi doğrulanmadı');
  return {
    hasTrProvider: providers.length > 0,
    statusText,
    providers,
    globalProviders,
    verified,
    checkedAt,
    verificationText: checkedAt
      ? `${info.source === 'JustWatch Türkiye indeksi' ? 'JustWatch Türkiye indeksi' : 'JustWatch Türkiye'} · Son kontrol: ${new Date(checkedAt).toLocaleDateString('tr-TR')}. Abonelik/ücretsiz yayınlar; kataloglar değişebilir.`
      : 'Son kontrol tarihi bilinmiyor. Güncel erişimi yayıncıda doğrulayın.'
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
