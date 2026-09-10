/* ==========================================================================
   NgopiDuluu - Complete Menu Data & Category Filter Engine
   ========================================================================== */

const MENU_DATA = [
  // ☕ COFFEE
  { id: 'c1', name: 'Espresso', category: 'coffee', price: 20000, rating: 4.9, desc: 'Ekstrak biji kopi Arabika murni yang diseduh dengan tekanan tinggi menghasilkan crema emas tebal. Rasa pekat dengan aroma kaya yang membangunkan semangatmu di pagi hari.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80' },
  { id: 'c2', name: 'Americano', category: 'coffee', price: 24000, rating: 4.7, desc: 'Espresso ganda yang dituang perlahan ke atas air panas menciptakan lapisan crema tipis. Rasa kopi kuat namun ringan, cocok untuk yang menyukai hitam tanpa susu.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' },
  { id: 'c3', name: 'Cappuccino', category: 'coffee', price: 28000, rating: 4.9, desc: 'Perpaduan sempurna satu shot espresso, steamed milk, dan foam susu tebal berlapis bubuk cokelat. Setiap tegukan memberikan keseimbangan antara pahit kopi dan manis susu yang lembut.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'c4', name: 'Latte', category: 'coffee', price: 28000, rating: 4.8, desc: 'Espresso halus dipadukan dengan steamed milk dan microfoam yang membentuk latte art indah di permukaan. Tekstur creamy dan rasa seimbang, favorit sepanjang hari.', badge: 'signature', badgeText: 'Signature', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
  { id: 'c5', name: 'Flat White', category: 'coffee', price: 29000, rating: 4.7, desc: 'Ristretto ganda dengan microfoam susu yang sangat halus dan tipis. Kekuatan kopi lebih dominan dibanding latte, memberikan rasa kopi murni yang velvety.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80' },
  { id: 'c6', name: 'Macchiato', category: 'coffee', price: 23000, rating: 4.6, desc: 'Espresso klasik yang diberi sedikit sentuhan foam susu lembut di atasnya. Bentuk asli dari cappuccino, cocok untuk pencinta kopi pekat dengan sedikit krim.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80' },
  { id: 'c7', name: 'Mocha', category: 'coffee', price: 32000, rating: 4.8, desc: 'Harmoni espresso, cokelat Belgia premium, dan steamed milk yang creamy. Dihiasi whipped cream di atasnya, sempurna untuk pencinta rasa manis pahit.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80' },
  { id: 'c8', name: 'Piccolo', category: 'coffee', price: 24000, rating: 4.7, desc: 'Ristretto kuat disajikan dalam cangkir kecil 120ml dengan steamed milk minimal. Rasa kopi sangat dominan dengan sedikit creamy di akhir tegukan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80' },
  { id: 'c9', name: 'Long Black', category: 'coffee', price: 25000, rating: 4.6, desc: 'Double espresso yang dituang di atas air panas menjaga crema alami di permukaan. Rasa kopi kuat namun tidak sepekat espresso murni.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'c10', name: 'Affogato', category: 'coffee', price: 30000, rating: 4.9, desc: 'Dua scoop es krim vanila Italia yang dilumeri satu shot espresso panas pekat. Kontras suhu dan rasa antara manis dingin es krim dan pahit panas kopi.', badge: 'new', badgeText: 'New', image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=600&q=80' },

  // 🧊 ICED COFFEE
  { id: 'ic1', name: 'Iced Americano', category: 'iced-coffee', price: 25000, rating: 4.8, desc: 'Espresso ganda yang langsung dituang ke atas segunung es batu, menjaga kesegaran rasa kopi. Minuman penyegar terbaik saat cuaca terik atau setelah aktivitas padat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic2', name: 'Iced Latte', category: 'iced-coffee', price: 29000, rating: 4.8, desc: 'Espresso dingin yang dipadukan dengan susu segar pasteurisasi dan es batu, menghasilkan lapisan visual yang menarik. Creamy, menyegarkan, dan cocok untuk dinikmati kapan saja.', badge: 'vegan', badgeText: 'Milk Alt', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic3', name: 'Iced Mocha', category: 'iced-coffee', price: 33000, rating: 4.7, desc: 'Perpaduan cokelat dingin yang kental dengan espresso segar dan susu creamy. Dilengkapi whipped cream dan serutan cokelat di atasnya.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic4', name: 'Iced Caramel Latte', category: 'iced-coffee', price: 34000, rating: 4.9, desc: 'Kopi susu dingin dengan sirup karamel gurih dan saus karamel yang mengalir di dinding gelas. Manis legit yang bikin ketagihan, best seller sepanjang musim.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic5', name: 'Iced Vanilla Latte', category: 'iced-coffee', price: 33000, rating: 4.7, desc: 'Espresso dingin, susu segar, dan sirup vanila asli yang memberikan aroma harum alami. Sensasi lembut dan manis yang tidak berlebihan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic6', name: 'Iced Hazelnut Latte', category: 'iced-coffee', price: 33000, rating: 4.7, desc: 'Kopi susu dingin dengan sentuhan sirup hazelnut premium yang memberikan aroma kacang khas. Rasa gurih-manis yang bikin ketagihan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic7', name: 'Iced Spanish Latte', category: 'iced-coffee', price: 34000, rating: 4.9, desc: 'Perpaduan unik susu kental manis, susu segar, dan espresso dingin yang menghasilkan rasa manis gurih khas. Tekstur lebih creamy dari latte biasa.', badge: 'signature', badgeText: 'Signature', image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic8', name: 'Cold Brew', category: 'iced-coffee', price: 30000, rating: 4.8, desc: 'Biji kopi premium yang direndam air dingin selama 16 jam penuh, menghasilkan ekstrak yang halus dan tidak asam. Disajikan dingin dengan rasa clean dan manis alami.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic9', name: 'Nitro Cold Brew', category: 'iced-coffee', price: 35000, rating: 4.9, desc: 'Cold brew 16 jam yang diinfusi nitrogen untuk menghasilkan tekstur velvety creamy seperti bir draft. Rasa kopi yang halus dengan foam alami micro-bubble.', badge: 'new', badgeText: 'New', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic10', name: 'Iced Brown Sugar Latte', category: 'iced-coffee', price: 32000, rating: 5.0, desc: 'Kopi susu dengan gula aren asli Jawa yang dicampur hingga terbentuk pola tiger stripe. Manis legit alami dengan aroma karamel yang khas.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },

  // ⭐ SIGNATURE DRINKS
  { id: 'sig1', name: 'NgopiDulu Signature', category: 'signature-drinks', price: 36000, rating: 5.0, desc: 'Resep rahasia barista kepala kami yang telah dikembangkan selama bertahun-tahun. Espresso ganda dengan krim rahasia manis gurih dan taburan bubuk cokelat Belanda.', badge: 'signature', badgeText: 'Signature', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig2', name: 'Caramel Cloud', category: 'signature-drinks', price: 38000, rating: 4.9, desc: 'Espresso dingin yang dilapisi foam karamel melayang di atasnya seperti awan lembut. Setiap tegukan menghadirkan rasa karamel manis yang berpadu dengan pahit kopi.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig3', name: 'Midnight Brew', category: 'signature-drinks', price: 37000, rating: 4.8, desc: 'Cold brew pekat yang berpadu dengan rempah kayu manis Ceylon dan orange zest segar. Aroma rempah yang hangat berpadu dengan kesegaran jeruk, cocok untuk malam hari.', badge: 'new', badgeText: 'New', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig4', name: 'Buttercream Latte', category: 'signature-drinks', price: 38000, rating: 4.9, desc: 'Sensasi gurih krim mentega premium yang kaya rasa bertemu dengan pahit manis espresso hangat. Tekstur creamy yang luar biasa dan rasa yang memanjakan lidah.', badge: 'signature', badgeText: 'Signature', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig5', name: 'Coconut Coffee', category: 'signature-drinks', price: 35000, rating: 4.7, desc: 'Perpaduan kelapa organik tropis yang menyegarkan dengan shot espresso pilihan. Rasa unik antara kesegaran kelapa dan kekuatan kopi, cocok untuk cuaca panas.', badge: 'vegan', badgeText: 'Vegan', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig6', name: 'Honey Cinnamon Latte', category: 'signature-drinks', price: 34000, rating: 4.8, desc: 'Kopi hangat dengan madu hutan murni Sumatera dan taburan kayu manis Sri Lanka. Rasa manis alami madu berpadu dengan aroma rempah yang hangat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig7', name: 'Salted Caramel Latte', category: 'signature-drinks', price: 35000, rating: 4.9, desc: 'Paduan manis gurih salted caramel premium Italia dengan espresso creamy. Sedikit garam laut menonjolkan rasa manis karamel dan pahit kopi secara bersamaan.', badge: 'promo', badgeText: 'Promo 20%', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig8', name: 'Maple Latte', category: 'signature-drinks', price: 35000, rating: 4.7, desc: 'Latte hangat menggunakan sirup maple asli Kanada yang memberikan rasa manis earthy khas. Berbeda dari gula biasa, maple memberikan kedalaman rasa yang unik.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80' },

  // 🍵 NON COFFEE
  { id: 'nc1', name: 'Matcha Latte', category: 'non-coffee', price: 33000, rating: 4.9, desc: 'Bubuk matcha Uji asal Jepang grade premium yang diaduk hingga larut sempurna dengan susu hangat gurih. Rasa pahit manis yang seimbang dengan warna hijau alami memesona.', badge: 'signature', badgeText: 'Signature', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc2', name: 'Chocolate', category: 'non-coffee', price: 31000, rating: 4.9, desc: 'Cokelat hitam Belgia 70% yang dilelehkan dan dipadu susu creamy serta whipped cream lembut. Rasa cokelat pekat autentik yang memanjakan lidah pencinta cokelat sejati.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc3', name: 'Red Velvet', category: 'non-coffee', price: 32000, rating: 4.7, desc: 'Minuman red velvet berwarna merah pekat dengan rasa manis gurih khas kue red velvet. Dilengkapi foam cream cheese lembut di atasnya yang memberikan kontras rasa sempurna.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc4', name: 'Taro Latte', category: 'non-coffee', price: 30000, rating: 4.6, desc: 'Talas ungu asli yang dihaluskan dan dipadukan dengan susu segar menghasilkan rasa manis lembut khas. Warna ungu alami yang memesona dan aroma yang menggugah selera.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc5', name: 'Thai Tea', category: 'non-coffee', price: 25000, rating: 4.8, desc: 'Teh Thailand autentik yang diseduh dengan rempah-rempah pilihan dan diberi susu kental manis. Warna jingga khas dan rasa rempah unik yang berbeda dari teh biasa.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc6', name: 'Green Tea', category: 'non-coffee', price: 24000, rating: 4.7, desc: 'Seduhan pucuk teh hijau murni kualitas premium dari perkebunan pilihan. Rasa segar dengan sedikit pahit alami, kaya akan antioksidan dan menyegarkan jiwa.', badge: 'vegan', badgeText: 'Vegan', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc7', name: 'Cookies & Cream', category: 'non-coffee', price: 34000, rating: 4.9, desc: 'Susu segar yang diblender lembut dengan biskuit cokelat renyah Oreo dan whipped cream tebal. Kombinasi renyah dan creamy yang bikin nagih, cocok untuk semua usia.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc8', name: 'Vanilla Milk', category: 'non-coffee', price: 26000, rating: 4.6, desc: 'Susu murni hangat yang disempurnakan dengan ekstrak vanila asli Madagascar. Aroma harum yang menenangkan dan rasa manis lembut, cocok untuk minimalis.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc9', name: 'Fresh Milk', category: 'non-coffee', price: 22000, rating: 4.5, desc: 'Susu segar pasteurisasi dingin kaya nutrisi tanpa tambahan apapun. Menyehatkan, menyegarkan, dan cocok untuk pelengkap makanan atau dinikmati sendiri.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80' },

  // 🥤 REFRESHMENTS
  { id: 'rf1', name: 'Lemon Tea', category: 'refreshments', price: 22000, rating: 4.7, desc: 'Es teh hitam yang segar dipadu perasan lemon asli memberikan rasa asam manis yang menyegarkan. Cocok diminum kapan saja untuk melepas dahaga.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf2', name: 'Peach Tea', category: 'refreshments', price: 26000, rating: 4.8, desc: 'Kombinasi manis buah persik segar yang harum berpadu dengan aroma teh hitam lembut. Minuman fruity yang menyegarkan dan bikin ketagihan.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf3', name: 'Lychee Tea', category: 'refreshments', price: 27000, rating: 4.8, desc: 'Teh dingin manis yang dilengkapi dua buah kelengkeng segar utuh di dalamnya. Rasa manis alami kelengkeng berpadu sempurna dengan teh yang segar.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf4', name: 'Passion Fruit Tea', category: 'refreshments', price: 27000, rating: 4.7, desc: 'Sensasi tropis buah markisa segar yang asam manis menggugah semangat. Rasa buah yang bright dan menyegarkan, cocok untuk hari panas.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf5', name: 'Mango Tea', category: 'refreshments', price: 26000, rating: 4.6, desc: 'Racikan teh yang dipadu sirup mangga harum dan menyegarkan. Rasa manis alami mangga berpadu dengan teh yang ringan, cocok untuk pecinta buah.', badge: '', badgeText: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj2YzgdIozNDf9vJy8nIR8q4rtX5eCfB_paqM19uw9BRsV8OddHafY_Y&s=10' },
  { id: 'rf6', name: 'Strawberry Soda', category: 'refreshments', price: 28000, rating: 4.8, desc: 'Mocktail stroberi berkilau yang dicampur dengan soda dan daun mint segar. Busa dan kesegaran soda berpadu dengan manis asam stroberi yang menyegarkan.', badge: 'new', badgeText: 'New', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf7', name: 'Mojito Mint (Non Alcohol)', category: 'refreshments', price: 29000, rating: 4.9, desc: 'Sensasi dingin daun mint segar yang diperas, perasan jeruk nipis, dan soda berkilau. Tanpa alkohol, menyegarkan dan cocok untuk semua kalangan.', badge: 'vegan', badgeText: 'Vegan', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf8', name: 'Sparkling Lemon', category: 'refreshments', price: 25000, rating: 4.7, desc: 'Minuman soda lemon dingin yang langsung menyegarkan dahaga seketika. Rasa lemon asli berpadu dengan gelembung soda yang menyenangkan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },

  // 🍰 DESSERT
  { id: 'ds1', name: 'Cheesecake', category: 'dessert', price: 38000, rating: 4.9, desc: 'Kue keju panggang gaya New York yang lembut dan lumer di mulut dengan crust biskuit graham renyah di bawahnya. Tekstur creamy yang kaya rasa keju dengan sedikit rasa asam segar.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds2', name: 'Brownies', category: 'dessert', price: 28000, rating: 4.8, desc: 'Fudge brownies cokelat pekat dengan tekstur fudgy yang lembut di dalam dan crispy tipis di luar. Diberi topping kacang walnut renyah yang memberikan tekstur kontras.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds3', name: 'Tiramisu', category: 'dessert', price: 40000, rating: 5.0, desc: 'Dessert Italia klasik dengan lapisan ladyfinger yang terendam espresso pekat, mascarpone lembut, dan taburan bubuk kakao. Setiap sendok menghadirkan perpaduan pahit-manis yang sempurna.', badge: 'signature', badgeText: 'Signature', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds4', name: 'Chocolate Cake', category: 'dessert', price: 36000, rating: 4.8, desc: 'Layer cake cokelat tiga lapis dengan ganache cokelat premium yang mengalir di antara setiap lapisan. Rasa cokelat pekat yang intens dan tekstur lembut yang memanjakan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds5', name: 'Red Velvet Cake', category: 'dessert', price: 38000, rating: 4.7, desc: 'Kue red velvet empat lapis lembut berwarna merah pekat dengan cream cheese frosting gurih di setiap lapisannya. Lembut, manis, dan gurih dalam satu gigitan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds6', name: 'Pancake', category: 'dessert', price: 32000, rating: 4.7, desc: 'Pancake empuk hangat yang tebal dan fluffy, disajikan dengan sirup maple asli dan mentega. Cocok sebagai sarapan manis atau teman ngopi santai.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds7', name: 'Waffle', category: 'dessert', price: 34000, rating: 4.8, desc: 'Waffle Belgia renyah di luar namun lembut di dalam dengan pola grid khas. Dilengkapi topping es krim vanilla dan sirup cokelat yang menggugah selera.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds8', name: 'Ice Cream', category: 'dessert', price: 25000, rating: 4.6, desc: 'Dua scoop gelato premium pilihan: Vanila Madagascar, Cokelat Belgia, atau Matcha Uji Jepang. Tekstur halus dan rasa autentik yang menyempurnakan pengalaman ngopi.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80' },

  // 🥐 PASTRY
  { id: 'ps1', name: 'Croissant', category: 'pastry', price: 26000, rating: 4.8, desc: 'Pastry khas Prancis dengan puluhan lapisan tipis yang dipanggang hingga renyah keemasan. Aroma butter Prancis alami yang harum saat digigit pertama kali.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps2', name: 'Butter Croissant', category: 'pastry', price: 28000, rating: 4.9, desc: 'Croissant dengan kandungan mentega premium kualitas tinggi yang menciptakan rasa gurih dan aroma yang luar biasa. Lapisan renyah di luar dan lembut berlubang di dalam.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps3', name: 'Almond Croissant', category: 'pastry', price: 34000, rating: 5.0, desc: 'Croissant berisikan krim almond manis yang lembut dan dilapisi taburan almond panggang renyah di atasnya. Kombinasi tekstur crispy, creamy, dan nutty yang sempurna.', badge: 'signature', badgeText: 'Signature', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps4', name: 'Pain au Chocolat', category: 'pastry', price: 30000, rating: 4.8, desc: 'Roti pastry Prancis berlapis renyah dengan isian batang cokelat Belgia yang meleleh di dalam saat dipanggang. Manis cokelat yang lumer berpadu dengan pastry renyah.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps5', name: 'Cinnamon Roll', category: 'pastry', price: 29000, rating: 4.7, desc: 'Roti gulung lembut yang dipenuhi rempah kayu manis Ceylon dan disiram cream cheese glaze halus di atasnya. Hangat, manis, dan aromanya menggoda.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps6', name: 'Danish Pastry', category: 'pastry', price: 32000, rating: 4.7, desc: 'Pastry manis Prancis dengan isian buah berry segar dan custard cream vanila di tengahnya. Pastry renyah berpadu dengan filling fruity yang segar.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps7', name: 'Garlic Bread', category: 'pastry', price: 25000, rating: 4.6, desc: 'Roti panggang mentega yang diolesi garlic butter gurih dan taburan peterseli hijau segar. Aroma bawang putih panggang yang menggugah selera, cocok sebagai pendamping.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80' },

  // 🥪 SNACKS
  { id: 'sn1', name: 'French Fries', category: 'snacks', price: 25000, rating: 4.7, desc: 'Kentang pilihan yang dipotong memanjang dan digoreng hingga gurih renyah keemasan. Disajikan hangat dengan saus keju cheddar dan sambal pedas.', badge: '', badgeText: '', image: 'https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1662474181&s=50bccc38a736ef0e0a6e261ad23378f4' },
  { id: 'sn2', name: 'Chicken Wings', category: 'snacks', price: 36000, rating: 4.9, desc: 'Sayap ayam segar yang digoreng renyah dan dilumuri bumbu BBQ gurih pedas manis spesial. Tekstur renyah di luar dan juicy di dalam, bikin nagih.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn3', name: 'Onion Rings', category: 'snacks', price: 24000, rating: 4.6, desc: 'Bawang bombay segar yang dipotong cincin, dilapisi adonan tepung renyah khas coffee shop, lalu digoreng hingga keemasan. Cocok sebagai cemilan santai.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn4', name: 'Nuggets', category: 'snacks', price: 27000, rating: 4.6, desc: 'Nugget ayam giling tebal yang dilapisi tepung panir renyah. Daging ayam yang juicy dan bumbu yang meresap, cocok untuk teman ngobrol.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn5', name: 'Toast', category: 'snacks', price: 26000, rating: 4.7, desc: 'Roti panggang mentega yang renyah dengan pilihan selai cokelat Belgium atau keju cheddar leleh. Simpel tapi memuaskan, cocok untuk sarapan atau ngemil.', badge: '', badgeText: '', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/08/french-toast-recipe.jpg' },
  { id: 'sn6', name: 'Sandwich', category: 'snacks', price: 32000, rating: 4.8, desc: 'Sandwich isi smoked beef premium, keju meleleh yang lumer, dan sayuran segar di antara dua roti panggang. Porsi besar yang mengenyangkan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn7', name: 'Club Sandwich', category: 'snacks', price: 38000, rating: 4.9, desc: 'Sandwich 3 lapis tebal dengan isi daging ayam panggang, telur mata sapi, bacon renyah, keju, dan kentang goreng. Porsi komplit untuk yang lapar.', badge: 'bestseller', badgeText: 'Best Seller', image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn8', name: 'Garlic Toast', category: 'snacks', price: 26000, rating: 4.6, desc: 'Toast panggang renyah yang diolesi garlic butter gurih dan dipanggang hingga keemasan. Aroma bawang putih yang harum dan tekstur renyah yang memuaskan.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80' }
];

// Keterangan bahan penyusun setiap menu (terbuat dari apa)
const MENU_INGREDIENTS = {
  // ☕ COFFEE
  c1: '18g biji kopi Arabika Gayo sangrai medium, digiling halus, diekstrak mesin espresso profesional selama 25-30 detik menghasilkan 36ml espresso dengan crema tebal.',
  c2: 'Double shot espresso 72ml ditambah 200ml air panas 92°C, diaduk perlahan tanpa susu atau gula tambahan.',
  c3: 'Single shot espresso 36ml + 120ml steamed milk + 1cm foam susu tebal, ditaburi bubuk cokelat Belgia di atasnya.',
  c4: 'Single shot espresso 36ml + 200ml steamed milk + microfoam halus, dituang dengan teknik latte art heart atau rosetta.',
  c5: 'Double ristretto 28ml + 160ml microfoam susu yang sangat halus, ratio kopi lebih kuat dari latte biasa.',
  c6: 'Single shot espresso 36ml klasik + satu sendok makan foam susu lembut di atasnya, disajikan dalam cangkir kecil.',
  c7: 'Single shot espresso 36ml + 30g cokelat Belgia premium dilelehkan + 150ml steamed milk + whipped cream segar.',
  c8: 'Double ristretto 28ml kuat + 60ml steamed milk, disajikan dalam cangkir Piccolo 120ml.',
  c9: 'Double espresso 72ml dituang perlahan di atas 150ml air panas 90°C untuk menjaga crema alami di permukaan.',
  c10: '2 scoop es krim vanila Italia 100g disiram 1 shot espresso panas pekat 36ml langsung di atasnya.',

  // 🧊 ICED COFFEE
  ic1: 'Double espresso 72ml dituang langsung ke atas segunung es batu, ditambah 150ml air dingin, diaduk perlahan.',
  ic2: 'Single espresso 36ml + 180ml susu segar pasteurisasi + es batu penuh, aduk hingga tercampur merata.',
  ic3: '30g cokelat bubuk premium + single espresso 36ml + 150ml susu segar + es batu, aduk ringan.',
  ic4: 'Single espresso 36ml + 150ml susu segar + 20ml sirup karamel gurih + 15ml saus karamel + es batu.',
  ic5: 'Single espresso 36ml + 180ml susu segar + 15ml sirup vanila asli Madagascar + es batu penuh.',
  ic6: 'Single espresso 36ml + 180ml susu segar + 15ml sirup hazelnut premium + es batu, aduk rata.',
  ic7: 'Single espresso 36ml + 100ml susu segar + 50ml susu kental manis, diaduk dengan es batu penuh.',
  ic8: 'Biji kopi pilihan 100g direndam 700ml air dingin selama 16 jam pada suhu 4°C, disaring dengan kain halus.',
  ic9: 'Cold brew 16 jam + infusi nitrogen pressurizer menghasilkan micro-bubble untuk tekstur velvety creamy.',
  ic10: 'Single espresso 36ml + 150ml susu segar + 30g gula aren asli Jawa dilarutkan, aduk dengan es batu.',

  // ⭐ SIGNATURE DRINKS
  sig1: 'Double espresso 72ml + 40ml krim rahasia manis gurih racikan barista + taburan 5g bubuk cokelat Belanda.',
  sig2: 'Double espresso dingin 72ml + 80ml foam karamel melayang dibuat dengan teknik micro-foaming khusus.',
  sig3: 'Cold brew 16 jam 200ml + 2g kayu manis Ceylon bubuk + 5ml orange zest segar diparut, aduk perlahan.',
  sig4: 'Double espresso 72ml + 30g krim mentega premium New Zealand + 120ml steamed milk, aduk hingga larut.',
  sig5: 'Single shot espresso 36ml + 150ml santan kelapa organik tropis segar, aduk dengan es batu.',
  sig6: 'Single espresso 36ml + 20ml madu hutan murni Sumatera + 2g kayu manis Sri Lanka bubuk + 120ml susu hangat.',
  sig7: 'Single espresso 36ml + 25ml salted caramel premium Italia + 150ml susu creamy + 1g garam laut Maldon.',
  sig8: 'Single espresso 36ml + 20ml sirup maple asli grade A Kanada + 150ml steamed milk, aduk perlahan.',

  // 🍵 NON COFFEE
  nc1: '3g bubuk matcha Uji grade premium Jepang + 200ml susu hangat gurih, diaduk dengan chasen bamboo whisk hingga berbusa.',
  nc2: '30g cokelat hitam Belgia 70% dilelehkan + 200ml susu segar creamy + whipped cream segar di atasnya.',
  nc3: '15ml sirup red velvet concentrat + 200ml susu segar + 30ml foam cream cheese lembut di atasnya.',
  nc4: '25g talas ungu asli dihaluskan + 200ml susu segar, diaduk hingga tercampur sempurna, manis lembut khas.',
  nc5: 'Teh Thailand autentik 10g diseduh air panas 200ml + 40ml susu kental manis, aduk hingga tercampur.',
  nc6: '4g pucuk teh hijau murni grade premium diseduh air panas 80°C 200ml selama 2 menit, saring.',
  nc7: '200ml susu segar + 3 keping biskuit Oreo dihancurkan + 50ml whipped cream lembut, blender ringan.',
  nc8: '250ml susu murni hangat + 5ml ekstrak vanila asli Madagascar, aduk perlahan tanpa gula tambahan.',
  nc9: '250ml susu segar pasteurisasi yang didinginkan langsung dari kulkas, disajikan tanpa tambahan apapun.',

  // 🥤 REFRESHMENTS
  rf1: 'Teh hitam 8g diseduh air panas 200ml + perasan 1 buah lemon segar + es batu, aduk rata.',
  rf2: 'Teh hitam 8g diseduh air panas 200ml + 30ml sirup buah persik segar + es batu penuh.',
  rf3: 'Teh dingin 200ml + 20ml sirup manis + 2 buah kelengkeng segar utuh, es batu.',
  rf4: 'Teh hitam 8g diseduh air panas 200ml + 40ml puree buah markisa segar tropis + es batu.',
  rf5: 'Teh 8g diseduh air panas 200ml + 30ml sirup mangga harum + es batu, aduk perlahan.',
  rf6: '30ml sirup stroberi segar + 150ml soda berkilau + 5 lembar daun mint segar + es batu.',
  rf7: '8 lembar daun mint segar diperas + perasan 1 buah jeruk nipis + 150ml soda + es batu penuh.',
  rf8: '150ml air soda dingin + perasan setengah buah lemon asli + es batu, aduk ringan.',

  // 🍰 DESSERT
  ds1: 'Krim keju Philadelphia 200g dipanggang oven 160°C selama 50 menit + crust biskuit graham 100g dengan mentega, didinginkan 4 jam.',
  ds2: 'Cokelat pekat 70% 150g + mentega 100g + telur 3 butir + gula 150g + tepung terigu 80g + kacang walnut 50g, panggang 170°C 25 menit.',
  ds3: 'Ladyfinger 200g terendam espresso pekat 150ml + mascarpone 250g + kuning telur 3 + gula 80g + taburan bubuk kakao Belanda.',
  ds4: 'Tiga lapis dark chocolate sponge cake + ganache cokelat premium 200g dari dark chocolate 70% dan heavy cream.',
  ds5: 'Empat lapis red velvet sponge tepung dan cokelat bubuk + cream cheese frosting 300g dari cream cheese, mentega, dan gula halus.',
  ds6: 'Adonan tepung 150g + telur 2 + susu 200ml + mentega leleh 30g + baking powder 8g, dipanggang di wajan anti lengket hingga keemasan.',
  ds7: 'Adonan waffle Belgia tepung 200g + telur 2 + susu 250ml + mentega leleh 50g dipanggang hingga renyah, topping es krim 2 scoop + sirup.',
  ds8: '2 scoop 150g gelato premium handmade: Vanila Madagascar, Cokelat Belgia 70%, atau Matcha Uji Jepang, disajikan dalam mangkuk.',

  // 🥐 PASTRY
  ps1: 'Adonan puff pastry berlapis 27 lapis dengan butter Prancis 40%, dipanggang oven 200°C selama 18 menit hingga mengembang keemasan.',
  ps2: 'Adonan croissant dengan 45% kandungan mentega premium Eropa, dilipat 3x lipatan, dipanggang hingga renyah dan berwarna keemasan.',
  ps3: 'Croissant base + 40g krim almond dari almond meal, gula, dan telur + taburan irisan almond panggang 15g di atasnya, dipanggang ulang.',
  ps4: 'Puff pastry renyah berlapis + 2 batang cokelat Belgium 65% diletakkan di tengah, digulung dan dipanggang 190°C 15 menit.',
  ps5: 'Adonan roti lembut + filling kayu manis Ceylon 10g + gula merah 30g, digulung, dipotong, dipanggang lalu disiram cream cheese glaze.',
  ps6: 'Puff pastry renyah + filling custard vanila segar 40g + buah berry segar campuran strawberry, blueberry, dan raspberry di atasnya.',
  ps7: 'Roti baguette dipotong serong + olesan garlic butter mentega 30g, bawang putih 5g, dan peterseli segar, dipanggang 180°C 8 menit.',

  // 🥪 SNACKS
  sn1: 'Kentang pilihan 200g dipotong memanjang, direndam air dingin, digoreng dua kali hingga gurih renyah keemasan + saus keju dan sambal.',
  sn2: 'Sayap ayam segar 250g dimarinasi bumbu BBQ spesial paprika, bawang putih, madu, dan kecap manis selama 2 jam, digoreng hingga renyah.',
  sn3: 'Bawang bombay 150g dipotong cincin, dilapisi tepung seasoned tepung, paprika, dan bawang putih bubuk, digoreng deep-fry hingga renyah.',
  sn4: 'Ayam giling 200g dibumbui garam, merica, dan bawang putih, dibentuk persegi, dilapisi tepung panir renyah, digoreng hingga keemasan.',
  sn5: 'Roti tawar premium 2 iris dipanggang mentega 15g hingga renyah, diberi pilihan selai cokelat Belgium atau keju cheddar leleh.',
  sn6: 'Roti sourdough 2 iris + smoked beef 80g + keju cheddar meleleh 40g + selada, tomat, timun segar, mustard, dipanggang ringan.',
  sn7: '3 lapis roti gandum + ayam panggang 80g + telur mata sapi 1 + bacon renyah 2 strips + keju 30g + kentang goreng, tusuk lidi.',
  sn8: 'Roti tawar 2 iris + garlic butter 20g dari mentega, bawang putih cincang, dan peterseli dipanggang hingga keemasan dan renyah.'
};

// Label kategori spesifik untuk non-coffee (menggantikan "Non-Kopi")
const DETAIL_CATEGORY_MAP = {
  nc1: { label: 'Matcha', icon: '🍵' },
  nc2: { label: 'Chocolate', icon: '🍫' },
  nc3: { label: 'Red Velvet', icon: '❤️' },
  nc4: { label: 'Taro', icon: '💜' },
  nc5: { label: 'Thai Tea', icon: '🧋' },
  nc6: { label: 'Green Tea', icon: '🍃' },
  nc7: { label: 'Cookies & Cream', icon: '🍪' },
  nc8: { label: 'Vanilla Milk', icon: '🥛' },
  nc9: { label: 'Fresh Milk', icon: '🥛' }
};

// English descriptions for each menu item
const MENU_DESC_EN = {
  c1: 'Pure Arabica espresso extracted under high pressure, producing a thick golden crema. Bold taste with a rich aroma to kickstart your morning.',
  c2: 'Double espresso poured slowly over hot water creating a thin crema layer. Strong yet smooth coffee flavor, perfect for black coffee lovers.',
  c3: 'Perfect blend of a single shot espresso, steamed milk, and thick foam dusted with cocoa powder. Each sip balances bitter coffee and sweet creamy milk.',
  c4: 'Smooth espresso blended with steamed milk and microfoam forming beautiful latte art. Creamy texture and balanced taste, an all-day favorite.',
  c5: 'Double ristretto with ultra-fine microfoam. Stronger coffee ratio than a latte, delivering a velvety pure coffee experience.',
  c6: 'Classic espresso topped with a single spoon of soft milk foam. The original form of cappuccino, ideal for bold coffee purists.',
  c7: 'A harmony of espresso, premium Belgian chocolate, and creamy steamed milk. Topped with whipped cream, perfect for sweet-bitter lovers.',
  c8: 'Strong double ristretto with steamed milk, served in a small 120ml Piccolo cup. Coffee-dominant taste with a hint of creaminess.',
  c9: 'Double espresso poured slowly over hot water to preserve the natural crema on top. Strong coffee taste without being as intense as pure espresso.',
  c10: 'Two scoops of Italian vanilla ice cream drowned in a shot of hot espresso. A contrast of cold sweet ice cream and hot bitter coffee.',
  ic1: 'Double espresso poured directly over a mountain of ice cubes with cold water, preserving coffee freshness. The best refresher for scorching weather.',
  ic2: 'Cold espresso blended with pasteurized fresh milk and ice cubes, creating an attractive layered look. Creamy, refreshing, and perfect anytime.',
  ic3: 'Rich cold chocolate blended with fresh espresso and creamy milk. Served with whipped cream and chocolate shavings on top.',
  ic4: 'Cold coffee milk with savory caramel syrup and caramel sauce drizzling down the glass. Addictive sweet-savory taste, a year-round best seller.',
  ic5: 'Cold espresso, fresh milk, and real vanilla syrup providing a natural aromatic scent. Gentle sweet sensation without being overpowering.',
  ic6: 'Cold coffee milk with premium hazelnut syrup giving a distinctive nutty aroma. Savory-sweet taste that keeps you coming back.',
  ic7: 'A unique blend of sweet condensed milk, fresh milk, and cold espresso. Creamier texture than a regular latte.',
  ic8: 'Premium coffee beans steeped in cold water for a full 16 hours, producing a smooth, non-acidic extract. Clean, naturally sweet cold coffee.',
  ic9: 'Cold brew infused with nitrogen for a velvety creamy texture like draft beer. Smooth coffee taste with natural micro-bubble foam.',
  ic10: 'Coffee milk with real Javanese palm sugar mixed to create a tiger stripe pattern. Authentic sweet-savory taste with a distinctive caramel aroma.',
  sig1: 'Our head barista\'s secret recipe developed over years. Double espresso with a secret sweet-savory cream and Dutch cocoa powder.',
  sig2: 'Cold espresso layered with floating caramel foam like a soft cloud. Each sip brings sweet caramel blended with bitter coffee.',
  sig3: 'Rich cold brew combined with Ceylon cinnamon spice and fresh orange zest. Warm spice aroma meets citrus freshness, perfect for nighttime.',
  sig4: 'Sensation of rich premium buttercream meeting sweet-bitter hot espresso. Extraordinary creamy texture that pampers the palate.',
  sig5: 'A refreshing blend of organic tropical coconut with a shot of specialty espresso. Unique fusion of coconut freshness and coffee strength.',
  sig6: 'Hot coffee with pure Sumatran forest honey and Sri Lankan cinnamon sprinkle. Natural honey sweetness meets warm spice aroma.',
  sig7: 'A sweet-savory blend of premium Italian salted caramel with creamy espresso. A touch of sea salt enhances both caramel sweetness and coffee bitterness.',
  sig8: 'A warm latte using genuine Canadian maple syrup for a distinctive earthy sweetness. Unlike regular sugar, maple adds unique depth of flavor.',
  nc1: 'Premium Uji-grade Japanese matcha powder whisked to perfection with savory hot milk. Balanced bitter-sweet taste with a mesmerizing natural green color.',
  nc2: 'Melted 70% Belgian dark chocolate blended with creamy fresh milk and soft whipped cream. Authentic rich chocolate taste for true chocolate lovers.',
  nc3: 'Deep red velvet drink with a distinctive sweet-savory taste. Topped with soft cream cheese foam for a perfect flavor contrast.',
  nc4: 'Real purple taro pureed and blended with fresh milk for a gentle sweet taste. Mesmerizing natural purple color and an appetizing aroma.',
  nc5: 'Authentic Thai tea brewed with selected spices and sweet condensed milk. Signature orange color and unique spice flavor different from regular tea.',
  nc6: 'Premium grade pure green tea buds steeped to perfection. Fresh taste with a hint of natural bitterness, rich in antioxidants.',
  nc7: 'Fresh milk blended smooth with crunchy Oreo cookies and thick whipped cream. A crunchy-creamy combo that everyone loves.',
  nc8: 'Pure warm milk perfected with real Madagascar vanilla extract. Soothing aromatic scent and gentle sweet taste, ideal for minimalists.',
  nc9: 'Cold pasteurized fresh milk packed with nutrition, served without any additions. Healthy, refreshing, and perfect as a meal companion.',
  rf1: 'Refreshing iced black tea with real lemon juice for a tangy sweet taste. Perfect to quench your thirst anytime.',
  rf2: 'A combination of fresh, fragrant peach sweetness blending with smooth black tea aroma. A fruity, refreshing drink that keeps you hooked.',
  rf3: 'Sweet iced tea with two whole fresh lychee fruits. Natural lychee sweetness perfectly blends with refreshing tea.',
  rf4: 'Tropical sensation of fresh passion fruit that\'s tangy sweet and energizing. Bright, refreshing fruit taste for hot days.',
  rf5: 'Tea blend with fragrant and refreshing mango syrup. Natural mango sweetness blends with light tea, perfect for fruit lovers.',
  rf6: 'Sparkling strawberry mocktail mixed with soda and fresh mint leaves. Fizzy freshness blends with tangy sweet strawberry.',
  rf7: 'Refreshing cool fresh mint leaves, squeezed lime juice, and fizzy soda. Non-alcoholic, refreshing and suitable for all ages.',
  rf8: 'Cold sparkling water with freshly squeezed lemon, instantly refreshing your thirst.',
  ds1: 'New York-style baked cheesecake that\'s soft and melts in your mouth with a crispy graham biscuit crust. Rich creamy cheese texture with a hint of tangy freshness.',
  ds2: 'Rich dark fudge brownies with a fudgy interior and thin crispy top. Topped with crunchy walnuts for a contrasting texture.',
  ds3: 'Classic Italian dessert with ladyfingers soaked in rich espresso, soft mascarpone, and cocoa powder dusting. Each spoon delivers a perfect bitter-sweet blend.',
  ds4: 'Triple-layer dark chocolate cake with premium chocolate ganache flowing between each layer. Intense rich chocolate taste and indulgent soft texture.',
  ds5: 'Four-layer soft red velvet cake with savory cream cheese frosting on each layer. Soft, sweet, and savory in one bite.',
  ds6: 'Thick, fluffy warm pancakes served with real maple syrup and butter. Perfect for a sweet breakfast or casual coffee companion.',
  ds7: 'Belgian waffles crispy outside yet soft inside with a signature grid pattern. Topped with vanilla ice cream and chocolate syrup.',
  ds8: 'Two scoops of premium handmade gelato: Madagascar Vanilla, Belgian Chocolate 70%, or Uji Matcha. Smooth texture and authentic flavor.',
  ps1: 'French pastry with dozens of thin layers baked until golden crispy. Natural French butter aroma that\'s irresistible on first bite.',
  ps2: 'Croissant with 45% high-quality European premium butter content, creating an extraordinary savory taste and aroma. Crispy layers outside, soft and airy inside.',
  ps3: 'Croissant filled with sweet almond cream and topped with crispy toasted almond slices. A perfect combination of crispy, creamy, and nutty textures.',
  ps4: 'Crispy layered French pastry with Belgian chocolate batons that melt inside when baked. Sweet melted chocolate meets crispy pastry.',
  ps5: 'Soft rolled bread filled with Ceylon cinnamon spice and drizzled with smooth cream cheese glaze. Warm, sweet, and irresistible aroma.',
  ps6: 'Sweet French pastry with fresh berry filling and vanilla custard cream in the center. Crispy pastry meets fresh fruity filling.',
  ps7: 'Baguette sliced diagonally with garlic butter spread (butter, garlic, fresh parsley), baked at 180°C for 8 minutes.',
  sn1: 'Selected potatoes cut long, soaked in cold water, double-fried until savory crispy golden. Served warm with cheese sauce and chili.',
  sn2: 'Fresh chicken wings marinated in special BBQ seasoning (paprika, garlic, honey, soy sauce) for 2 hours, fried until crispy.',
  sn3: 'Fresh onion sliced into rings, coated in seasoned flour (flour, paprika, garlic powder), deep-fried until crispy.',
  sn4: 'Thick ground chicken seasoned with salt, pepper, and garlic, shaped into squares, coated in crispy panko breadcrumbs, fried golden.',
  sn5: 'Premium white bread toasted with butter until crispy, topped with Belgian chocolate spread or melted cheddar cheese.',
  sn6: 'Sourdough bread with premium smoked beef, melted cheddar cheese, fresh lettuce, tomato, cucumber, and mustard, lightly toasted.',
  sn7: 'Triple-layer whole wheat bread with grilled chicken, fried egg, crispy bacon strips, cheese, and french fries, held together with a toothpick.',
  sn8: 'Toasted bread with garlic butter (butter, minced garlic, parsley) baked until golden and crispy.'
};

// English ingredients for each menu item
const MENU_INGREDIENTS_EN = {
  c1: '18g medium-roast Gayo Arabica beans, finely ground, extracted on a professional espresso machine for 25-30 seconds yielding 36ml espresso with thick crema.',
  c2: 'Double shot espresso (72ml) plus 200ml hot water at 92°C, stirred gently without milk or sugar.',
  c3: 'Single shot espresso (36ml) + 120ml steamed milk + 1cm thick milk foam, dusted with Belgian cocoa powder on top.',
  c4: 'Single shot espresso (36ml) + 200ml steamed milk + fine microfoam, poured using heart or rosetta latte art technique.',
  c5: 'Double ristretto (28ml) + 160ml ultra-fine microfoam, stronger coffee ratio than a regular latte.',
  c6: 'Classic single shot espresso (36ml) + one tablespoon of soft milk foam on top, served in a small cup.',
  c7: 'Single shot espresso (36ml) + 30g melted premium Belgian chocolate + 150ml steamed milk + fresh whipped cream.',
  c8: 'Strong double ristretto (28ml) + 60ml steamed milk, served in a 120ml Piccolo cup.',
  c9: 'Double espresso (72ml) poured slowly over 150ml hot water at 90°C to preserve natural crema on top.',
  ic1: 'Double espresso (72ml) poured directly over a mountain of ice cubes, 150ml cold water, stirred gently.',
  ic2: 'Single espresso (36ml) + 180ml pasteurized fresh milk + full ice cubes, stirred until well combined.',
  ic3: '30g premium cocoa powder + single espresso (36ml) + 150ml fresh milk + ice cubes, lightly stirred.',
  ic4: 'Single espresso (36ml) + 150ml fresh milk + 20ml savory caramel syrup + 15ml caramel sauce + ice cubes.',
  ic5: 'Single espresso (36ml) + 180ml fresh milk + 15ml real Madagascar vanilla syrup + full ice cubes.',
  ic6: 'Single espresso (36ml) + 180ml fresh milk + 15ml premium hazelnut syrup + ice cubes, stir well.',
  ic7: 'Single espresso (36ml) + 100ml fresh milk + 50ml sweet condensed milk, stirred with full ice cubes.',
  ic8: '100g selected coffee beans steeped in 700ml cold water for 16 hours at 4°C, strained through fine cloth.',
  ic9: '16-hour cold brew + nitrogen pressurizer infusion creating micro-bubble for velvety creamy texture.',
  ic10: 'Single espresso (36ml) + 150ml fresh milk + 30g dissolved real Javanese palm sugar, stirred with ice cubes.',
  sig1: 'Double espresso (72ml) + 40ml secret sweet-savory cream barista blend + 5g Dutch cocoa powder sprinkle.',
  sig2: 'Double cold espresso (72ml) + 80ml floating caramel foam made with special micro-foaming technique.',
  sig3: '16-hour cold brew 200ml + 2g Ceylon cinnamon powder + 5ml freshly grated orange zest, stir gently.',
  sig4: 'Double espresso (72ml) + 30g premium New Zealand buttercream + 120ml steamed milk, stir until dissolved.',
  sig5: 'Single shot espresso (36ml) + 150ml fresh organic tropical coconut milk, stirred with ice cubes.',
  sig6: 'Single espresso (36ml) + 20ml pure Sumatran forest honey + 2g Sri Lankan cinnamon powder + 120ml hot milk.',
  sig7: 'Single espresso (36ml) + 25ml premium Italian salted caramel + 150ml creamy milk + 1g Maldon sea salt.',
  sig8: 'Single espresso (36ml) + 20ml genuine grade A Canadian maple syrup + 150ml steamed milk, stir gently.',
  nc1: '3g premium Uji-grade Japanese matcha powder + 200ml savory hot milk, whisked with a bamboo chasen until frothy.',
  nc2: '30g melted 70% Belgian dark chocolate + 200ml creamy fresh milk + fresh whipped cream on top.',
  nc3: '15ml red velvet concentrate syrup + 200ml fresh milk + 30ml soft cream cheese foam on top.',
  nc4: '25g real purple taro pureed + 200ml fresh milk, stirred until perfectly blended, naturally sweet.',
  nc5: '10g authentic Thai tea steeped in 200ml hot water + 40ml sweet condensed milk, stir until blended.',
  nc6: '4g premium grade pure green tea buds steeped in 200ml hot water at 80°C for 2 minutes, strained.',
  nc7: '200ml fresh milk + 3 crushed Oreo cookies + 50ml soft whipped cream, lightly blended.',
  nc8: '250ml warm pure milk + 5ml real Madagascar vanilla extract, stirred gently without added sugar.',
  nc9: '250ml cold pasteurized fresh milk straight from the fridge, served without any additions.',
  rf1: '8g black tea steeped in 200ml hot water + juice of 1 fresh lemon + ice cubes, stir well.',
  rf2: '8g black tea steeped in 200ml hot water + 30ml fresh peach syrup + full ice cubes.',
  rf3: '200ml cold sweet tea + 20ml sweet syrup + 2 whole fresh lychees, ice cubes.',
  rf4: '8g black tea steeped in 200ml hot water + 40ml fresh tropical passion fruit puree + ice cubes.',
  rf5: '8g tea steeped in 200ml hot water + 30ml fragrant mango syrup + ice cubes, stir gently.',
  rf6: '30ml fresh strawberry syrup + 150ml sparkling soda + 5 fresh mint leaves + ice cubes.',
  rf7: '8 fresh mint leaves squeezed + juice of 1 lime + 150ml soda + full ice cubes.',
  rf8: '150ml cold sparkling water + juice of half a fresh lemon + ice cubes, stir lightly.',
  ds1: '200g Philadelphia cream cheese baked in oven at 160°C for 50 minutes + 100g graham biscuit crust with butter, chilled for 4 hours.',
  ds2: '150g 70% dark chocolate + 100g butter + 3 eggs + 150g sugar + 80g flour + 50g walnuts, baked at 170°C for 25 minutes.',
  ds3: '200g ladyfingers soaked in 150ml rich espresso + 250g mascarpone + 3 egg yolks + 80g sugar + Dutch cocoa powder dusting.',
  ds4: 'Three layers of dark chocolate sponge cake + 200g premium chocolate ganache (70% dark chocolate + heavy cream) between layers.',
  ds5: 'Four layers of red velvet sponge (flour, cocoa powder) + 300g cream cheese frosting (cream cheese, butter, powdered sugar).',
  ds6: '150g flour batter + 2 eggs + 200ml milk + 30g melted butter + 8g baking powder, pan-fried until golden.',
  ds7: 'Belgian waffle batter (200g flour + 2 eggs + 250ml milk + 50g melted butter) baked until crispy, topped with 2 scoops ice cream + syrup.',
  ds8: '2 scoops (150g) premium handmade gelato: Madagascar Vanilla, Belgian Chocolate 70%, or Uji Matcha, served in a bowl.',
  ps1: 'Puff pastry dough with 27 layers using 40% French butter, baked in oven at 200°C for 18 minutes until golden and risen.',
  ps2: 'Croissant dough with 45% European premium butter content, triple-folded, baked until crispy and golden brown.',
  ps3: 'Croissant base + 40g almond cream (almond meal, sugar, egg) + 15g toasted sliced almonds on top, re-baked.',
  ps4: 'Crispy layered puff pastry + 2 Belgian chocolate batons (65%) placed in center, rolled and baked at 190°C for 15 minutes.',
  ps5: 'Soft bread dough + 10g Ceylon cinnamon filling + 30g brown sugar, rolled, sliced, baked then drizzled with cream cheese glaze.',
  ps6: 'Crispy puff pastry + 40g fresh vanilla custard filling + mixed fresh berries (strawberry, blueberry, raspberry) on top.',
  ps7: 'Baguette sliced diagonally + garlic butter spread (30g butter, 5g garlic, fresh parsley), baked at 180°C for 8 minutes.',
  sn1: '200g selected potatoes cut long, soaked in cold water, double-fried until savory crispy golden + cheese sauce and chili.',
  sn2: '250g fresh chicken wings marinated in special BBQ seasoning (paprika, garlic, honey, soy sauce) for 2 hours, fried crispy.',
  sn3: '150g fresh onion sliced into rings, coated in seasoned flour (flour, paprika, garlic powder), deep-fried until crispy.',
  sn4: '200g ground chicken seasoned with salt, pepper, and garlic, shaped into squares, coated in crispy panko, fried golden.',
  sn5: '2 slices premium white bread toasted with 15g butter until crispy, topped with Belgian chocolate spread or melted cheddar.',
  sn6: '2 slices sourdough bread + 80g smoked beef + 40g melted cheddar cheese + fresh lettuce, tomato, cucumber, mustard, lightly toasted.',
  sn7: '3 slices whole wheat bread + 80g grilled chicken + 1 fried egg + 2 crispy bacon strips + 30g cheese + french fries, skewered.',
  sn8: '2 slices bread + 20g garlic butter (butter, minced garlic, parsley) baked until golden and crispy.'
};

// Keperluan tampilan katalog menu; terpisah dari fitur pemesanan.
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

let activeCategory = 'all';
let showFavoritesOnly = false;

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryPills();
  renderMenuGrid();

  // Favorites Filter Toggle
  const favFilterBtn = document.getElementById('fav-filter-btn');
  if (favFilterBtn) {
    favFilterBtn.addEventListener('click', () => {
      showFavoritesOnly = !showFavoritesOnly;
      favFilterBtn.classList.toggle('active', showFavoritesOnly);
      // Hanya satu kolom yang aktif: matikan highlight kategori saat Favorit aktif,
      // lalu kembalikan highlight kategori saat Favorit dimatikan.
      const categoryPills = document.querySelectorAll('#category-pills-container .category-pill');
      if (showFavoritesOnly) {
        categoryPills.forEach(p => p.classList.remove('active'));
      } else {
        renderCategoryPills();
      }
      renderMenuGrid();
      showToast(showFavoritesOnly ? 'Menampilkan Menu Favorit' : 'Menampilkan Semua Menu');
    });
  }
});

function renderCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  const isEn = (typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en');

  const categories = [
    { id: 'all', name: isEn ? 'All Menu' : 'Semua Menu' },
    { id: 'coffee', name: isEn ? 'Coffee' : 'Kopi' },
    { id: 'iced-coffee', name: isEn ? 'Iced Coffee' : 'Es Kopi' },
    { id: 'signature-drinks', name: isEn ? 'Signature Drinks' : 'Menu Signature' },
    { id: 'non-coffee', name: isEn ? 'Non-Coffee' : 'Non-Kopi' },
    { id: 'refreshments', name: isEn ? 'Refreshments' : 'Minuman Segar' },
    { id: 'dessert', name: isEn ? 'Dessert' : 'Dessert' },
    { id: 'pastry', name: isEn ? 'Pastry & Bakery' : 'Pastry' },
    { id: 'snacks', name: isEn ? 'Savory Snacks' : 'Cemilan Gurih' }
  ];

  let html = '';
  categories.forEach(cat => {
    const isActive = activeCategory === cat.id ? 'active' : '';
    html += `
      <button type="button" class="category-pill gallery-pill ${isActive}" data-cat="${cat.id}">
        <span>${cat.name}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  // Attach click handlers in JS to avoid relying on inline onclick and to prevent accidental form submits
  const pills = container.querySelectorAll('.category-pill');
  pills.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const catId = btn.getAttribute('data-cat');
      if (catId) filterCategory(catId);
    });
  });
}

function filterCategory(catId) {
  activeCategory = catId;
  showFavoritesOnly = false;
  const favFilterBtn = document.getElementById('fav-filter-btn');
  if (favFilterBtn) favFilterBtn.classList.remove('active');

  renderCategoryPills();
  renderMenuGrid();
}

function renderMenuGrid(itemsToRender = null) {
  const gridContainer = document.getElementById('menu-grid-container');
  if (!gridContainer) return;

  const isEn = (typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en');
  let filtered = itemsToRender;

  if (!filtered) {
    filtered = MENU_DATA.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchFav = !showFavoritesOnly || StorageService.isFavorite(item.id);
      return matchCat && matchFav;
    });
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 4rem 1rem; color: var(--text-muted);">
        <h3>${isEn ? 'Menu not found' : 'Menu tidak ditemukan'}</h3>
        <p>${isEn ? 'Try another keyword or select a different menu category.' : 'Coba kata kunci lain atau pilih kategori menu yang berbeda.'}</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const isFav = StorageService.isFavorite(item.id);
    const badgeText = item.badgeText ? (isEn && item.badgeText_en ? item.badgeText_en : item.badgeText) : '';
    const badgeHtml = badgeText ? `<span class="badge badge-${item.badge}">${badgeText}</span>` : '';
    const descText = (isEn && MENU_DESC_EN[item.id]) ? MENU_DESC_EN[item.id] : item.desc;
    const ingredients = (isEn && typeof MENU_INGREDIENTS_EN !== 'undefined' && MENU_INGREDIENTS_EN[item.id]) 
      ? MENU_INGREDIENTS_EN[item.id] 
      : (MENU_INGREDIENTS[item.id] || '');

    html += `
      <div class="menu-card" data-aos="fade-up">
        <div class="menu-img-container menu-img-portrait">
          <img src="${item.image}" alt="${item.name}" class="menu-img" loading="lazy">
          <div class="menu-badges">
            ${badgeHtml}
          </div>
          <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavItem('${item.id}', this)" title="${isEn ? 'Favorite' : 'Favoritkan'}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        <div class="menu-content">
          <div class="menu-header-row">
            <h3 class="menu-title">${item.name}</h3>
            <div class="menu-rating">★ ${item.rating}</div>
          </div>
          <p class="menu-desc">${descText}</p>
          <div class="menu-ingredients-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span class="menu-ingredients-text">${ingredients}</span>
          </div>
          <div class="menu-footer-row">
            <div class="menu-price">${formatRupiah(item.price)}</div>
            <button class="menu-expand-btn" onclick="event.stopPropagation(); toggleExpand(this.closest('.menu-card'))" title="${isEn ? 'Show more' : 'Lihat selengkapnya'}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  gridContainer.innerHTML = html;
}

function openMenuDetail(id) {
  if (typeof MENU_DATA === 'undefined') return;
  const item = MENU_DATA.find(function(i) { return i.id === id; });
  if (!item) return;

  const isEn = (typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en');

  const ingredients = (isEn && typeof MENU_INGREDIENTS_EN !== 'undefined' && MENU_INGREDIENTS_EN[item.id])
    ? MENU_INGREDIENTS_EN[item.id]
    : (MENU_INGREDIENTS[item.id] || (isEn ? 'Fresh quality ingredients selected by our barista.' : 'Bahan segar pilihan berkualitas dari barista kami.'));

  const badgeText = item.badgeText ? (isEn && item.badgeText_en ? item.badgeText_en : item.badgeText) : '';
  const badgeHtml = badgeText ? `<span class="badge badge-${item.badge}">${badgeText}</span>` : '';

  // Gunakan DETAIL_CATEGORY_MAP untuk non-coffee agar label lebih spesifik
  const categoryNames = {
    'coffee': isEn ? 'Coffee' : 'Kopi',
    'iced-coffee': isEn ? 'Iced Coffee' : 'Es Kopi',
    'signature-drinks': isEn ? 'Signature Drink' : 'Menu Signature',
    'non-coffee': isEn ? 'Non-Coffee' : 'Non-Kopi',
    'refreshments': isEn ? 'Refreshments' : 'Minuman Segar',
    'dessert': isEn ? 'Dessert' : 'Dessert',
    'pastry': isEn ? 'Pastry' : 'Pastry',
    'snacks': isEn ? 'Snacks' : 'Cemilan'
  };

  let catName = categoryNames[item.category] || item.category;
  let catIcon = '';
  if (item.category === 'non-coffee' && DETAIL_CATEGORY_MAP[item.id]) {
    catName = DETAIL_CATEGORY_MAP[item.id].label;
    catIcon = DETAIL_CATEGORY_MAP[item.id].icon + ' ';
  }

  const descText = (isEn && item.desc_en) ? item.desc_en : item.desc;
  const priceText = typeof formatRupiah === 'function' ? formatRupiah(item.price) : 'Rp ' + item.price.toLocaleString('id-ID');
  const ingLabel = isEn ? 'Ingredients & Composition' : 'Bahan & Komposisi';

  // Remove any stale modal first to avoid ID conflicts
  const old = document.getElementById('menu-detail-modal');
  if (old) old.remove();

  // Build fresh modal HTML — staggered animation untuk efek "kamera mengikuti"
  const modal = document.createElement('div');
  modal.id = 'menu-detail-modal';
  modal.innerHTML = `
    <div class="menu-detail-content">
      <button class="modal-close" id="menu-detail-close-btn" aria-label="Tutup">✕</button>
      <div class="menu-detail-glow"></div>
      <div class="menu-detail-body">
        <div class="menu-detail-info">
          <h3 class="menu-detail-title detail-anim" data-delay="0">${item.name}</h3>
          <div class="menu-detail-meta detail-anim" data-delay="1">
            <span class="menu-detail-rating">★ ${item.rating}</span>
            <span class="menu-detail-category">${catIcon}${catName}</span>
          </div>
          <p class="menu-detail-desc detail-anim" data-delay="2">${descText}</p>
          <div class="menu-detail-ingredients detail-anim" data-delay="3">
            <h4>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
              </svg>
              <span>${ingLabel}</span>
            </h4>
            <p>${ingredients}</p>
          </div>
          <div class="menu-detail-price detail-anim" data-delay="4">${priceText}</div>
        </div>
        <div class="menu-detail-image-wrapper detail-anim" data-delay="5">
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-badges" style="position:absolute; top:0.75rem; left:0.75rem;">${badgeHtml}</div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Klik di luar modal-content untuk menutup
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeMenuDetail();
  });

  // Tombol close
  document.getElementById('menu-detail-close-btn').addEventListener('click', closeMenuDetail);

  // Trigger staggered animations — efek "kamera mengikuti ke kotak"
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      modal.classList.add('active');
      var animItems = modal.querySelectorAll('.detail-anim');
      animItems.forEach(function(el) {
        var delay = parseInt(el.getAttribute('data-delay')) || 0;
        el.style.animationDelay = (80 + delay * 70) + 'ms';
        el.classList.add('anim-in');
      });

      // Scroll modal ke deskripsi & bahan setelah semua animasi selesai
      setTimeout(function() {
        var contentEl = modal.querySelector('.menu-detail-content');
        var ingEl = modal.querySelector('.menu-detail-ingredients');
        if (!contentEl || !ingEl) return;
        // Tunggu layout stabil dulu
        contentEl.offsetHeight;
        var cRect = contentEl.getBoundingClientRect();
        var iRect = ingEl.getBoundingClientRect();
        var target = (iRect.top - cRect.top) + contentEl.scrollTop;
        if (target > 5) {
          contentEl.scrollTo({ top: target, behavior: 'smooth' });
        }
      }, 1000);
    });
  });

  document.body.style.overflow = 'hidden';
}

function closeMenuDetail() {
  const modal = document.getElementById('menu-detail-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Hapus modal setelah animasi selesai
    setTimeout(function() {
      const m = document.getElementById('menu-detail-modal');
      if (m && !m.classList.contains('active')) m.remove();
    }, 300);
  }
}

// Tutup dengan tombol Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMenuDetail();
});

function toggleFavItem(id, btnEl) {
  const isEn = (typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en');
  const updatedFavs = StorageService.toggleFavorite(id);
  const isFav = updatedFavs.includes(id);
  btnEl.classList.toggle('active', isFav);

  if (typeof showToast === 'function') {
    showToast(isFav 
      ? (isEn ? 'Added to Favorites' : 'Ditambahkan ke Favorit') 
      : (isEn ? 'Removed from Favorites' : 'Dihapus dari Favorit')
    );
  }

  if (showFavoritesOnly) {
    renderMenuGrid();
  }
}

function toggleExpand(card) {
  var desc = card.querySelector('.menu-desc');
  var ing = card.querySelector('.menu-ingredients-wrap');
  if (card.classList.contains('expanded')) {
    card.classList.remove('expanded');
    if (desc) desc.style.maxHeight = '3em';
    if (ing) ing.style.maxHeight = '2.4em';
  } else {
    card.classList.add('expanded');
    if (desc) desc.style.maxHeight = desc.scrollHeight + 'px';
    if (ing) ing.style.maxHeight = ing.scrollHeight + 'px';
  }
}

window.addEventListener('languageChange', () => {
  renderCategoryPills();
  renderMenuGrid();
});
