/**
 * CINE3D NETFLIX - Doğrulanmış Orijinal Dizi & Film Müzikleri Veritabanı (OST)
 * 109 Yapımın Tamamı İçin Gerçek Besteci, Eser Adı ve Doğrulanmış YouTube Parça Kimlikleri
 *
 * NOT: youtubeId değerleri scripts/fix-ost.js ile oEmbed üzerinden doğrulanmıştır.
 */

const MOVIE_SOUNDTRACKS = {
  "inception": {
    "track": "Time",
    "composer": "Hans Zimmer",
    "youtubeId": "RxabLA7UQ9k",
    "description": "Rüya katmanlarının derinliğini yansıtan, yavaşça zirveye tırmanan efsanevi yaylı ve piyano başyapıtı."
  },
  "interstellar": {
    "track": "Cornfield Chase & First Step",
    "composer": "Hans Zimmer",
    "youtubeId": "JuSsvM8B4Jc",
    "description": "Londra Temple Kilisesi'ndeki tarihi 1926 yapımı kilise orguyla kaydedilmiş uzay senfonisi."
  },
  "dark-knight": {
    "track": "Why So Serious? (Joker Theme)",
    "composer": "Hans Zimmer & James Newton Howard",
    "youtubeId": "1zyhQjJ5UgY",
    "description": "Joker'in anarşik kaosunu temsil eden tek telli, yükselen rahatsız edici çello tınısı."
  },
  "pulp-fiction": {
    "track": "Misirlou",
    "composer": "Dick Dale & His Del-Tones",
    "youtubeId": "jtkcM7lerFM",
    "description": "Sinema tarihinin en enerjik surf-rock açılışı ve kült gitar solosu."
  },
  "shawshank": {
    "track": "Brooks Was Here / End Title",
    "composer": "Thomas Newman",
    "youtubeId": "4JSGCooJo2A",
    "description": "Umut, özgürlük ve insan onurunu anlatan hüzünlü ve etkileyici piyano melodisi."
  },
  "godfather": {
    "track": "The Godfather Waltz & Love Theme (Speak Softly Love)",
    "composer": "Nino Rota",
    "youtubeId": "Flb01Ni3p3M",
    "description": "Sicilya ezgileri ve trompet solosuyla sinema tarihinin en ikonik mafya melodisi."
  },
  "fight-club": {
    "track": "Where Is My Mind?",
    "composer": "The Pixies / Maxence Cyrin",
    "youtubeId": "49FB9hhoO6c",
    "description": "Gökdelenlerin yıkılışı eşliğinde modern sinemanın en unutulmaz final müziği."
  },
  "the-matrix": {
    "track": "Clubbed to Death (Kurayamino Variation)",
    "composer": "Rob Dougan",
    "youtubeId": "pFS4zYWxzNA",
    "description": "Elektronik trip-hop vuruşları ve Edward Elgar'ın Enigma Varyasyonları'ndan ilham alan yaylılar."
  },
  "parasite": {
    "track": "Soju One Glass & Opening (The Belt of Faith)",
    "composer": "Jung Jae-il",
    "youtubeId": "jZIVYXicHHI",
    "description": "Barok tarzı piyano ve sınıf çatışmasını hissettiren trajikomik ezgiler."
  },
  "spirited-away": {
    "track": "One Summer's Day (Ano Natsu e)",
    "composer": "Joe Hisaishi",
    "youtubeId": "TK1Ij_-mank",
    "description": "Studio Ghibli ve Hayao Miyazaki evreninin en saf, nostaljik piyano başyapıtı."
  },
  "oppenheimer": {
    "track": "Can You Hear The Music",
    "composer": "Ludwig Göransson",
    "youtubeId": "4JZ-o3iAJv4",
    "description": "Atomik bölünmeyi ve zihindeki fırtınaları anlatan 21 kez tempo değiştiren çılgın keman senfonisi."
  },
  "dune-2": {
    "track": "A Time of Quiet Between the Storms",
    "composer": "Hans Zimmer",
    "youtubeId": "igtwOdqboT0",
    "description": "Arrakis çöl rüzgarları, duduk tınıları ve Paul Atreides ile Chani'nin aşk teması."
  },
  "gladiator": {
    "track": "Now We Are Free",
    "composer": "Hans Zimmer & Lisa Gerrard",
    "youtubeId": "ghxzLw2wRis",
    "description": "Elysium buğday tarlalarında yankılanan, ruhu dinlendiren mistik vokal ağıtı."
  },
  "prestige": {
    "track": "Are You Watching Closely?",
    "composer": "David Julyan",
    "youtubeId": "zt21SR0J4G4",
    "description": "Sihirbazların karanlık rekabetini ve takıntısını hissettiren gerilimli yaylı tınıları."
  },
  "whiplash": {
    "track": "Caravan",
    "composer": "John Wasson / Justin Hurwitz",
    "youtubeId": "ZZY-Ytrw2co",
    "description": "Mükemmeliyetçilik uğruna ellerin kanadığı sinema tarihinin en nefes kesici caz davul performansı."
  },
  "spider-verse": {
    "track": "Sunflower / What's Up Danger",
    "composer": "Post Malone & Swae Lee / Blackway & Black Caviar",
    "youtubeId": "ApXoWvfEYVU",
    "description": "Miles Morales'in Brooklyn semalarındaki inanç sıçramasını taçlandıran modern hip-hop marşı."
  },
  "seven": {
    "track": "Suite from Se7en / Air on the G String",
    "composer": "Howard Shore / J.S. Bach",
    "youtubeId": "1PkD47rNkfY",
    "description": "Yağmurlu ve çürümüş şehrin kasvetini yansıtan tekinsiz orkestral düzenleme."
  },
  "alien": {
    "track": "Main Title (Alien)",
    "composer": "Jerry Goldsmith",
    "youtubeId": "yc94TrMnwaw",
    "description": "Uzayın tekinsiz ve klostrofobik sessizliğinde yankılanan nefes kesici üflemeliler."
  },
  "shining": {
    "track": "Main Title (Dies Irae)",
    "composer": "Wendy Carlos & Rachel Elkind",
    "youtubeId": "pylfy_L6Bjs",
    "description": "Overlook Oteli'ne giden dağ yolundaki ölümcül synthesizer tınıları."
  },
  "blade-runner-2049": {
    "track": "Tears in the Rain / Mesa",
    "composer": "Hans Zimmer & Benjamin Wallfisch",
    "youtubeId": "by2pM_0Sf8c",
    "description": "Vangelis mirasını devralan distopik, analog CS-80 synthesizer fırtınası."
  },
  "star-wars-empire": {
    "track": "The Imperial March (Darth Vader's Theme)",
    "composer": "John Williams",
    "youtubeId": "-bzWSJG93P8",
    "description": "Galaktik İmparatorluğun askeri gücünü ve Darth Vader'ın karanlığını simgeleyen pirinç üflemeli marş."
  },
  "the-mandalorian": {
    "track": "The Mandalorian Main Theme",
    "composer": "Ludwig Göransson",
    "youtubeId": "i_OIKx9IG4o",
    "description": "Bas flüt solosuyla başlayıp epik uzay western davullarına dönüşen ikonik dizi teması."
  },
  "star-wars-new-hope": {
    "track": "Binary Sunset (Force Theme) & Main Title",
    "composer": "John Williams",
    "youtubeId": "u2W5YPQJqUs",
    "description": "Tatooine'de iki güneşin batışını izleyen Luke Skywalker'ın kader teması."
  },
  "avengers-endgame": {
    "track": "Portals / The Avengers Main Theme",
    "composer": "Alan Silvestri",
    "youtubeId": "F_mhWxOjxp4",
    "description": "Portalların açıldığı ve tüm kahramanların toplandığı MCU tarihinin en epik anı."
  },
  "iron-man": {
    "track": "Driving With the Top Down",
    "composer": "Ramin Djawadi",
    "youtubeId": "RvFXOlvEJbY",
    "description": "Tony Stark'ın rock 'n' roll ruhunu yansıtan distorsiyonlu elektro gitar riff'leri."
  },
  "loki": {
    "track": "TVA Theme / Green Theme",
    "composer": "Natalie Holt",
    "youtubeId": "yV_76cm2BWU",
    "description": "Theremin ve saat tik-tak sesleriyle zaman bürosunun zamansızlığını anlatan yenilikçi beste."
  },
  "wall-e": {
    "track": "Define Dancing",
    "composer": "Thomas Newman",
    "youtubeId": "wvEwsc0Qmnw",
    "description": "Uzay boşluğunda yangın söndürücü eşliğinde yapılan en büyüleyici robot dansı."
  },
  "up": {
    "track": "Married Life",
    "composer": "Michael Giacchino",
    "youtubeId": "2rn-vMbFglI",
    "description": "Carl ve Ellie'nin hayatını tek bir kelime olmadan gözyaşlarına boğan Oscar ödüllü vals."
  },
  "coco": {
    "track": "Remember Me (Beni Hatırla)",
    "composer": "Kristen Anderson-Lopez & Robert Lopez",
    "youtubeId": "123hb62Rhpc",
    "description": "Nesiller boyu sevgi ve anıları yaşatan, yürek burkan akustik gitar baladı."
  },
  "lion-king": {
    "track": "Circle of Life / This Land",
    "composer": "Hans Zimmer & Lebo M",
    "youtubeId": "GibiNy4d4gc",
    "description": "Afrika koro vokalleri ve gurur kayalığındaki hayat döngüsü marşı."
  },
  "the-bear": {
    "track": "New Noise / Spiders (Kidsmoke)",
    "composer": "Refused / Wilco",
    "youtubeId": "NkAe30aEG5c",
    "description": "Mutfaktaki sipariş kaosu, adrenalin ve tencere sesleriyle harmanlanan post-hardcore enerjisi."
  },
  "avatar": {
    "track": "Becoming One with the People (Neytiri's Theme)",
    "composer": "James Horner",
    "youtubeId": "ODXpYfZ_fHU",
    "description": "Pandora'nın biyolüminesans ormanlarında Na'vi kabilesine kabul ediliş ezgisi."
  },
  "free-solo": {
    "track": "Gravity Fin / Main Theme",
    "composer": "Marco Beltrami",
    "youtubeId": "BpQEOvJy4Zc",
    "description": "El Capitan granit duvarındaki 900 metrelik ipsiz tırmanışın gerilim dolu notaları."
  },
  "game-of-thrones": {
    "track": "Main Title Theme & Light of the Seven",
    "composer": "Ramin Djawadi",
    "youtubeId": "s7L2PVdrb_8",
    "description": "Demir Taht için savaşan hanedanlıkları simgeleyen sinema tarihinin en ünlü çello melodisi."
  },
  "the-last-of-us": {
    "track": "The Last of Us Main Theme & All Gone",
    "composer": "Gustavo Santaolalla",
    "youtubeId": "Y97u-U0nvJM",
    "description": "Kıyamet sonrası sessizliği delen 6 telli Arjantin akustik gitarı ve derin duygusallık."
  },
  "succession": {
    "track": "Succession Main Title Theme",
    "composer": "Nicholas Britell",
    "youtubeId": "LlgWqcHXD8w",
    "description": "Bozuk bir piyano sesiyle 808 hip-hop vuruşlarını birleştiren entrika ve güç marşı."
  },
  "chernobyl": {
    "track": "Bridge of Death & Vichnaya Pamyat",
    "composer": "Hildur Guðnadóttir",
    "youtubeId": "aM_HhU_CV44",
    "description": "Gerçek bir nükleer santraldeki metal ve radyasyon rezonanslarıyla kaydedilmiş karanlık ağıt."
  },
  "joker": {
    "track": "Bathroom Dance / Call Me Joker",
    "composer": "Hildur Guðnadóttir",
    "youtubeId": "gSwbYHJYskM",
    "description": "Arthur Fleck'in banyodaki yavaş çekim dönüşüm dansına eşlik eden Oscar ödüllü çello."
  },
  "harry-potter": {
    "track": "Hedwig's Theme",
    "composer": "John Williams",
    "youtubeId": "wtHra9tFISY",
    "description": "Büyücülük dünyasının kapılarını aralayan celesta zili ve mistik orkestrasyon."
  },
  "the-boys": {
    "track": "Translucent Alive / I Can Do Whatever I Want",
    "composer": "Christopher Lennertz",
    "youtubeId": "-sp1PmmLwFA",
    "description": "Vought şirketinin sahte süper kahraman parıltısını yıkan karanlık, kirli baslar."
  },
  "fallout": {
    "track": "I Don't Want to Set the World on Fire / Main Title",
    "composer": "The Ink Spots / Ramin Djawadi",
    "youtubeId": "6l6vqPUM_FE",
    "description": "Kıyamet sonrası sığınak kapısı açıldığında çalan 1940'lar nostaljik gramofon şarkısı."
  },
  "rings-of-power": {
    "track": "The Lord of the Rings: The Rings of Power Main Title",
    "composer": "Howard Shore & Bear McCreary",
    "youtubeId": "F1efWC-qEjM",
    "description": "Orta Dünya'nın İkinci Çağı'na ve Númenor ihtişamına götüren koral ezgiler."
  },
  "reacher": {
    "track": "Reacher Theme / Bad As They Come",
    "composer": "Tony Morales",
    "youtubeId": "AldmDTTC1x0",
    "description": "Jack Reacher'ın heybetli yumruklarını ve adalet arayışını anlatan güney rock tınıları."
  },
  "no-time-to-die": {
    "track": "No Time to Die",
    "composer": "Billie Eilish & Hans Zimmer",
    "youtubeId": "GB_S2qFh5lU",
    "description": "Daniel Craig'in veda James Bond filmine eşlik eden melankolik orkestral orkestra."
  },
  "stranger-things": {
    "track": "Stranger Things Main Theme & Kids",
    "composer": "Kyle Dixon & Michael Stein",
    "youtubeId": "-RcPZdihrp4",
    "description": "1980'lerin analog Roland synth arpejleriyle Upside Down dünyasına yolculuk."
  },
  "squid-game": {
    "track": "Way Back Then (Pink Soldiers)",
    "composer": "Jung Jae-il",
    "youtubeId": "asQNnQmOVCE",
    "description": "Kore çocuk melodilerini ölümcül bir arena ritmine dönüştüren blokflüt ve alkış sesleri."
  },
  "breaking-bad": {
    "track": "Breaking Bad Main Title Theme",
    "composer": "Dave Porter",
    "youtubeId": "ilfYnhXD-bE",
    "description": "Albuquerque çölündeki kimyasal değişimi ve Walter White'ın dönüşümünü anlatan resonator gitar."
  },
  "dark": {
    "track": "Goodbye",
    "composer": "Apparat feat. Soap&Skin",
    "youtubeId": "66VnOdk6oto",
    "description": "Winden kasabasındaki zaman döngülerini ve kaçınılmaz kaderi anlatan melankolik başyapıt."
  },
  "arcane": {
    "track": "Enemy / Guns for Hire",
    "composer": "Imagine Dragons & JID / Woodkid",
    "youtubeId": "D9G1VOjN_84",
    "description": "Piltover ile Zaun arasındaki çatışmayı ve Jinx'in iç dünyasını anlatan patlayıcı marş."
  },
  "the-hangover": {
    "track": "Right Round / Candy Shop",
    "composer": "Flo Rida / Christophe Beck",
    "youtubeId": "CcCw1ggftuQ",
    "description": "Las Vegas sabahında kayıp damadı ararken çalan eğlenceli ve hareketli parti ritimleri."
  },
  "superbad": {
    "track": "Superwhat? / Too Hot to Stop",
    "composer": "Lyle Workman & Bootsy Collins",
    "youtubeId": "JUUSdyYpwT8",
    "description": "McLovin ve arkadaşlarının parti gecesini şenlendiren 70'ler funk basları."
  },
  "the-truman-show": {
    "track": "Truman Sleeps / Father Kolbe's Preaching",
    "composer": "Philip Glass / Burkhard Dallwitz",
    "youtubeId": "rod163ksVdM",
    "description": "Yapay bir dünyada gerçeği arayan Truman'ın uyanışını anlatan hipnotik minimal piyano."
  },
  "the-grand-budapest-hotel": {
    "track": "Mr. Moustafa & The Moonshine Fugue",
    "composer": "Alexandre Desplat",
    "youtubeId": "duPMC7IEcFE",
    "description": "Zubrowka Cumhuriyeti'nin nostaljik atmosferini yaratan balalayka ve zurna orkestrası."
  },
  "deadpool": {
    "track": "Careless Whisper / Maximum Effort",
    "composer": "George Michael / Junkie XL",
    "youtubeId": "izGwDsrQ1eQ",
    "description": "Wade Wilson'ın kırmızı kostümlü intikam aksiyonuna eşlik eden 80'ler saksafon solosu."
  },
  "deadpool-wolverine": {
    "track": "Bye Bye Bye / Slash",
    "composer": "*NSYNC / Rob Simonsen",
    "youtubeId": "C27NShgTQE4",
    "description": "Adamantium pençeler ve Deadpool dansıyla açılan tarihin en eğlenceli sinema jeneriği."
  },
  "olumlu-dunya": {
    "track": "Mermer Ailesi Operasyonu & Kaçış",
    "composer": "Ali Saran / İlkay Akdağlı",
    "youtubeId": null,
    "description": "Lokantacı kiralık katil ailesinin absürt kovalamacalarına eşlik eden dinamik Türk yaylıları."
  },
  "olumlu-dunya-2": {
    "track": "Ölümlü Dünya 2 Çete Teması",
    "composer": "Ali Saran",
    "youtubeId": null,
    "description": "Serinin ikinci filmindeki soygun ve rehine krizinin tempolu müzikal kurgusu."
  },
  "gora": {
    "track": "G.O.R.A. Jenerik & Garavel Teması",
    "composer": "Ozan Çolakoğlu",
    "youtubeId": "Bsol33faDcg",
    "description": "Arif'in uzay macerasını ve Garavel ustanın öğütlerini ölümsüzleştiren senfonik Türk bilim kurgu marşı."
  },
  "arog": {
    "track": "A.R.O.G: Bir Yontma Taş Macera Teması",
    "composer": "Ozan Çolakoğlu",
    "youtubeId": null,
    "description": "1 milyon yıl önceye sürgün edilen Arif'in taş devri futbol maçı ve macera tınıları."
  },
  "knives-out": {
    "track": "Knives Out! (String Quartet in G Minor)",
    "composer": "Nathan Johnson",
    "youtubeId": "TuImJ7X9LW4",
    "description": "Benoit Blanc'ın malikanedeki cinayeti çözerken dinlediği neoklasik yaylılar."
  },
  "the-big-lebowski": {
    "track": "The Man in Me / Hotel California",
    "composer": "Bob Dylan / Gipsy Kings",
    "youtubeId": "3l436MSlivQ",
    "description": "The Dude'un bowling salonundaki rahatlığını ve uçan halı rüyalarını simgeleyen şarkılar."
  },
  "brooklyn-nine-nine": {
    "track": "Brooklyn Nine-Nine Main Theme",
    "composer": "Dan Marocco",
    "youtubeId": "ETkbiH5Y9jc",
    "description": "99. Bölge karakolunun enerjik pirinç üflemeli ve davul açılış jeneriği."
  },
  "the-office": {
    "track": "The Office Theme Song",
    "composer": "The Scrantones",
    "youtubeId": "HNX7kGrnTsA",
    "description": "Dunder Mifflin kağıt şirketinin neşeli piyano ve melodika ezgisi."
  },
  "friends": {
    "track": "I'll Be There for You",
    "composer": "The Rembrandts",
    "youtubeId": "q-9kPks0IfE",
    "description": "Central Perk kanepesindeki 6 dostun ve televizyon tarihinin en meşhur alkışlı jeneriği."
  },
  "ted": {
    "track": "Thunder Buddies Song & Everybody Needs a Best Friend",
    "composer": "Walter Murphy & Norah Jones",
    "youtubeId": "veHpPG-Wcy8",
    "description": "Şimşek fırtınalarında söylenen komik ve sıcacık dostluk şarkısı."
  },
  "groundhog-day": {
    "track": "I Got You Babe / Pennsylvania Polka",
    "composer": "Sonny & Cher",
    "youtubeId": "HKGjCPBSG38",
    "description": "Her sabah saat 06:00'da çalar saatte başlayan sonsuz gün döngüsü."
  },
  "modern-family": {
    "track": "Modern Family Main Title",
    "composer": "Gabriel Mann",
    "youtubeId": "1e4yQm7J3jE",
    "description": "Pritchett ve Dunphy ailelerinin neşeli fotoğraf çekimi teması."
  },
  "ted-lasso": {
    "track": "Ted Lasso Theme",
    "composer": "Marcus Mumford & Tom Howe",
    "youtubeId": "AIcis7S-byg",
    "description": "Richmond AFC soyunma odasındaki 'Believe' tabelasını yaşatan pozitif folk-rock tınısı."
  },
  "free-guy": {
    "track": "Fantasy",
    "composer": "Mariah Carey / Christophe Beck",
    "youtubeId": "qq09UkPRdFY",
    "description": "Arka plan NPC'si Guy'ın kendi kaderini ele geçirdiği eğlenceli aşk marşı."
  },
  "jump-street-21": {
    "track": "21 Jump Street Rock Theme",
    "composer": "Mark Mothersbaugh",
    "youtubeId": "3U5W2P6wQVQ",
    "description": "Liseye gizli görevle giren Schmidt ve Jenko'nun absürt aksiyon ritimleri."
  },
  "the-mask": {
    "track": "Cuban Pete (Hey Pachuco!)",
    "composer": "Jim Carrey & Royal Crown Revue",
    "youtubeId": "ns1_foq0FJo",
    "description": "Polis kordonunda rumba yapan yeşil suratlı Maske'nin unutulmaz Latin dansı."
  },
  "rick-and-morty": {
    "track": "Rick and Morty Main Theme",
    "composer": "Ryan Elder",
    "youtubeId": "fcrm8XIvbcY",
    "description": "Doctor Who ve bilimkurgu parodilerini boyutlararası çılgınlığa taşıyan synth melodisi."
  },
  "cinayet-susu": {
    "track": "Cinayet Süsü Cinai Vakalar Teması",
    "composer": "Ali Saran",
    "youtubeId": "NOTmLnB0BKg",
    "description": "Başkomiser Emin ve ekibinin seri katil peşindeki trajikomik polisiye yürüyüşü."
  },
  "shaun-of-the-dead": {
    "track": "Don't Stop Me Now / The Blue Wrath",
    "composer": "Queen / I Monster",
    "youtubeId": "HgzGwKwLmgM",
    "description": "Winchester barında bilardo sopalarıyla zombi avlarken pikaptan çalan Queen klasiği."
  },
  "the-green-mile": {
    "track": "The Green Mile Suite (Coffey on the Mile)",
    "composer": "Thomas Newman",
    "youtubeId": "WdcOqc4RMnY",
    "description": "John Coffey'nin mucizelerini ve insanlığın acımasızlığını anlatan gözyaşı dolu yaylılar."
  },
  "life-is-beautiful": {
    "track": "La Vita è Bella & Buongiorno Principessa",
    "composer": "Nicola Piovani",
    "youtubeId": "jV3im7nkIFs",
    "description": "Toplama kampında oğluna hayatı bir oyun gibi gösteren fedakar babanın Oscar'lı melodisi."
  },
  "the-pianist": {
    "track": "Nocturne in C-sharp minor / Ballade No. 1 in G minor",
    "composer": "Frédéric Chopin",
    "youtubeId": "Zj_psrTUW_w",
    "description": "Varşova harabelerinde bir Nazi subayına canı pahasına çalınan sinema tarihinin en dokunaklı piyanosu."
  },
  "schindlers-list": {
    "track": "Theme from Schindler's List",
    "composer": "John Williams & Itzhak Perlman",
    "youtubeId": "057A1RdssoU",
    "description": "Kemanın tellerinden dökülen tarihin en büyük insanlık dramı ve kurtuluş anıtı."
  },
  "good-will-hunting": {
    "track": "Between the Bars / Miss Misery",
    "composer": "Elliott Smith / Danny Elfman",
    "youtubeId": "zH8-lQ9CeyI",
    "description": "Boston sokaklarında travmalarıyla yüzleşen dahi Will Hunting'in melankolik akustik ezgileri."
  },
  "babam-ve-oglum": {
    "track": "Babam ve Oğlum Ana Tema (Biz Bir Aileyiz)",
    "composer": "Evanthia Reboutsika",
    "youtubeId": "Y9SnsxCFC10",
    "description": "Ege kasabasında 'Bana bir oda ver baba' feryadına eşlik eden Türk sinemasının en hüzünlü keman eseri."
  },
  "ayla": {
    "track": "Ayla & Süleyman Ana Tema",
    "composer": "Fahir Atakoğlu",
    "youtubeId": "j9OR0bu5O8g",
    "description": "Kore Savaşı'nda Türk astsubayı ile küçük Koreli kızın 60 yıllık sevgi bağını anlatan şaheser."
  },
  "miracle-in-cell-no-7": {
    "track": "7. Koğuştaki Mucize Ana Tema (Memo & Ova)",
    "composer": "Hasan Özsüt",
    "youtubeId": "qKS_xdvcCS4",
    "description": "'Lingo Lingo Şişeler' nidalarıyla masumiyetin ve koşulsuz baba sevgisinin dokunaklı melodisi."
  },
  "hachiko": {
    "track": "Goodbye / Hachi Waiting for Parker",
    "composer": "Jan A.P. Kaczmarek",
    "youtubeId": "iC2BLHXkvKg",
    "description": "Tren istasyonunda ömrünün sonuna dek sahibini bekleyen sadık Akita köpeğinin piyano ağıtı."
  },
  "grave-of-the-fireflies": {
    "track": "Hotaru no Haka (Setsuko and Seita)",
    "composer": "Michio Mamiya",
    "youtubeId": "0QF_OEeUIOE",
    "description": "Ateşböceklerinin ışığında sığınakta birbirine tutunan iki kardeşin yürek parçalayan melodisi."
  },
  "eternal-sunshine": {
    "track": "Theme / Everybody's Gotta Learn Sometime",
    "composer": "Jon Brion & Beck",
    "youtubeId": "s3ifFET2fgs",
    "description": "Hafızadan silinen aşkın Montauk sahilindeki karlı kumsalda yeniden yeşermesi."
  },
  "manchester-by-the-sea": {
    "track": "Adagio per Archi e Organo in Sol minore",
    "composer": "Tomaso Albinoni / Lesley Barber",
    "youtubeId": "kn1gcjuhlhg",
    "description": "Küllerinden doğamayan bir adamın derin kederini anlatan Barok orkestrasyon."
  },
  "the-father": {
    "track": "Je crois entendre encore (Les Pêcheurs de Perles)",
    "composer": "Georges Bizet / Ludovico Einaudi",
    "youtubeId": "LJKIJpWUNHE",
    "description": "Zihnin labirentlerinde kaybolan Anthony Hopkins'in dramına eşlik eden zarif opera aryası."
  },
  "memento": {
    "track": "Remember Me / Memento Opening",
    "composer": "David Julyan",
    "youtubeId": "b-j07BRzq1g",
    "description": "Geriye doğru akan zaman kurgusunda 15 dakikalık hafıza kaybının karanlık ambiyansı."
  },
  "shutter-island": {
    "track": "On the Nature of Daylight",
    "composer": "Max Richter",
    "youtubeId": "_Gd96mSMHfI",
    "description": "Akıl hastanesi adasındaki fırtına ve bastırılmış vicdan azabını yansıtan eşsiz çello eseri."
  },
  "tenet": {
    "track": "RAINY NIGHT IN TALLINN & POSTERITY",
    "composer": "Ludwig Göransson",
    "youtubeId": "8N768T-5Ujs",
    "description": "Geriye doğru nefes alma ve tersine entropiyle bestelenmiş sinematik ses tasarımı."
  },
  "severance": {
    "track": "Main Titles (Severance)",
    "composer": "Theodore Shapiro",
    "youtubeId": "k-_SX5MheDI",
    "description": "Lumon Industries asansöründeki kişilik bölünmesini simgeleyen minimalist dört nota piyano."
  },
  "coherence": {
    "track": "Coherence Theme & Dark Current",
    "composer": "Kristopher Carter",
    "youtubeId": null,
    "description": "Miller kuyruklu yıldızı geçerken paralel evrenlerin çatışmasını anlatan tekinsiz yaylılar."
  },
  "donnie-darko": {
    "track": "Mad World",
    "composer": "Gary Jules & Michael Andrews",
    "youtubeId": "etSbOs3aUqI",
    "description": "Dev tavşan Frank'in uyarısıyla başlayan varoluşsal kıyametin en ünlü piyano şarkısı."
  },
  "predestination": {
    "track": "I'm My Own Grandpa / Main Theme",
    "composer": "Peter Spierig",
    "youtubeId": "TozzjbUA5ZA",
    "description": "Zamanda yolculuk paradokslarının düğümlendiği barda başlayan gizemli ezgiler."
  },
  "black-mirror": {
    "track": "San Junipero Theme (Heaven Is a Place on Earth) & Bandersnatch",
    "composer": "Clint Mansell / Belinda Carlisle",
    "youtubeId": "APZpyHD47L0",
    "description": "Teknolojinin karanlık yüzünü ve nostaljik simülasyonları anlatan elektronik tınılar."
  },
  "source-code": {
    "track": "Source Code Main Title",
    "composer": "Chris Bacon",
    "youtubeId": "RujRvw8kIvU",
    "description": "Patlamadan önceki son 8 dakikayı yeniden yaşayan askerin nefes nefese kalan orkestrası."
  },
  "mr-nobody": {
    "track": "Mr. Sandman / Everyday",
    "composer": "The Chordettes / Buddy Holly",
    "youtubeId": "CX45pYvxDiA",
    "description": "Alınmayan kararların ve sonsuz olasılıkların rengarenk kelebek etkisi melodisi."
  },
  "john-wick-4": {
    "track": "John Wick Reckoning & Le Paris 77",
    "composer": "Tyler Bates & Joel J. Richard",
    "youtubeId": "Wch_hStKkws",
    "description": "Paris sokaklarında şafak vaktine kadar süren ölüm kalım mücadelesinin endüstriyel rock vuruşları."
  },
  "mad-max-fury-road": {
    "track": "Brothers in Arms & Blood Bag",
    "composer": "Junkie XL (Tom Holkenborg)",
    "youtubeId": "akggf50-mRI",
    "description": "Alev püskürten gitarlar ve taiko savaş davullarıyla çölün en vahşi aksiyon senfonisi."
  },
  "top-gun-maverick": {
    "track": "Top Gun Anthem & Danger Zone",
    "composer": "Harold Faltermeyer, Hans Zimmer & Kenny Loggins",
    "youtubeId": "siwpn14IE7E",
    "description": "Uçak gemisinden fırlayan F-18'lerle yankılanan 80'ler elektro gitar efsanesi."
  },
  "terminator-2": {
    "track": "Terminator 2: Judgment Day Main Title",
    "composer": "Brad Fiedel",
    "youtubeId": "CnQm2_cAZvo",
    "description": "Dökme demir tavaya vurulan metal çekiç darbeleriyle yaratılmış yapay zeka savaş marşı."
  },
  "mission-impossible-dead-reckoning": {
    "track": "Mission: Impossible Main Theme (5/4 Time)",
    "composer": "Lalo Schifrin & Lorne Balfe",
    "youtubeId": "O07WucFwdq8",
    "description": "Sinema tarihinin en ikonik 5/4 ölçülü ritmiyle Ethan Hunt'ın imkansız görev koşusu."
  },
  "silence-of-the-lambs": {
    "track": "The Silence of the Lambs Main Title",
    "composer": "Howard Shore",
    "youtubeId": "oyyIcbb7lOE",
    "description": "Hannibal Lecter'ın hücresine inen karanlık koridorları tasvir eden ürpertici senfoni."
  },
  "prisoners": {
    "track": "The Candlelight Vigil",
    "composer": "Jóhann Jóhannsson",
    "youtubeId": "ZJTBZ4N5Fjk",
    "description": "Kayıp kızlarını arayan çaresiz babanın karanlığını anlatan İzlandalı dehanın yaylıları."
  },
  "gone-girl": {
    "track": "Sugar Storm & What Have We Done to Each Other?",
    "composer": "Trent Reznor & Atticus Ross",
    "youtubeId": "M0NRmS-Jxws",
    "description": "Sahte ve parlak bir evliliğin altındaki zehirli manipülasyonu fısıldayan ambient synth'ler."
  },
  "zodiac": {
    "track": "Hurdy Gurdy Man / Easy to Be Hard",
    "composer": "Donovan / David Shire",
    "youtubeId": "CHxfOZH8cew",
    "description": "San Francisco'daki faili meçhul cinayetleri saplantı haline getiren karikatüristin dönemsel şarkıları."
  },
  "the-intouchables": {
    "track": "Una Mattina & Fly",
    "composer": "Ludovico Einaudi",
    "youtubeId": "5LRwYKpV-6A",
    "description": "Tekerlekli sandalyedeki aristokrat ile banliyö gencinin dostluğunu anlatan dünyaca ünlü piyano eseri."
  },
  "amelie": {
    "track": "Comptine d'un autre été: L'Après-Midi",
    "composer": "Yann Tiersen",
    "youtubeId": "NvryolGa19A",
    "description": "Paris Montmartre sokaklarında çocukluk masumiyetini canlandıran sinema tarihinin en sevilen akordeon ve piyanosu."
  },
  "ratatouille": {
    "track": "Le Festin",
    "composer": "Camille / Michael Giacchino",
    "youtubeId": "p_hdmt4vpBo",
    "description": "Paris'in mutfaklarında hayallerinin peşinden koşan minik şef Remy'nin sıcacık Fransız şansonu."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MOVIE_SOUNDTRACKS;
  module.exports.MOVIE_SOUNDTRACKS = MOVIE_SOUNDTRACKS;
}
