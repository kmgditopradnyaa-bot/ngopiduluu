/* ==========================================================================
   NgopiDuluu - Complete Menu Data & Category Filter Engine
   ========================================================================== */

const MENU_DATA = [
  // ☕ COFFEE
  { id: 'c1', name: 'Espresso', category: 'coffee', price: 20000, rating: 4.9, desc: 'Ekstrak biji kopi murni pilihan dengan cita rasa pekat dan aroma kaya.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80' },
  { id: 'c2', name: 'Americano', category: 'coffee', price: 24000, rating: 4.7, desc: 'Espresso ganda diseduh dengan air panas, kaya rasa tanpa kesan berat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' },
  { id: 'c3', name: 'Cappuccino', category: 'coffee', price: 28000, rating: 4.9, desc: 'Perpaduan sempurna espresso, susu hangat, dan foam tebal nan lembut.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'c4', name: 'Latte', category: 'coffee', price: 28000, rating: 4.8, desc: 'Espresso halus dipadukan dengan steamed milk nikmat bermotif latte art.', badge: 'signature', badgeText: '⭐ Signature', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
  { id: 'c5', name: 'Flat White', category: 'coffee', price: 29000, rating: 4.7, desc: 'Ristretto ganda dengan microfoam susu yang sangat halus.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80' },
  { id: 'c6', name: 'Macchiato', category: 'coffee', price: 23000, rating: 4.6, desc: 'Espresso klasik dengan sedikit sentuhan foam susu lembut.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80' },
  { id: 'c7', name: 'Mocha', category: 'coffee', price: 32000, rating: 4.8, desc: 'Harmoni espresso espresso, cokelat premium, dan susu creamy.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80' },
  { id: 'c8', name: 'Piccolo', category: 'coffee', price: 24000, rating: 4.7, desc: 'Ristretto kuat dalam cangkir kecil disempurnakan susu hangat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80' },
  { id: 'c9', name: 'Long Black', category: 'coffee', price: 25000, rating: 4.6, desc: 'Espresso ganda yang dituangkan di atas air panas untuk crema alami.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'c10', name: 'Affogato', category: 'coffee', price: 30000, rating: 4.9, desc: 'Satu scoop es krim vanila manis disiram espresso panas pekat.', badge: 'new', badgeText: '🆕 New', image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=600&q=80' },

  // 🧊 ICED COFFEE
  { id: 'ic1', name: 'Iced Americano', category: 'iced-coffee', price: 25000, rating: 4.8, desc: 'Espresso dingin segar dengan es batu, penyegar terbaik saat cuaca terik.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic2', name: 'Iced Latte', category: 'iced-coffee', price: 29000, rating: 4.8, desc: 'Espresso dingin creamy disajikan dengan es batu segar.', badge: 'vegan', badgeText: '🥛 Milk Alt', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic3', name: 'Iced Mocha', category: 'iced-coffee', price: 33000, rating: 4.7, desc: 'Perpaduan cokelat dingin dan espresso segar.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic4', name: 'Iced Caramel Latte', category: 'iced-coffee', price: 34000, rating: 4.9, desc: 'Kopi susu dingin dengan sirup karamel gurih dan saus karamel lezat.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic5', name: 'Iced Vanilla Latte', category: 'iced-coffee', price: 33000, rating: 4.7, desc: 'Sensasi lembut es kopi susu berkombinasi dengan aroma vanila alami.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic6', name: 'Iced Hazelnut Latte', category: 'iced-coffee', price: 33000, rating: 4.7, desc: 'Kopi susu dingin dengan sentuhan rasa kacang hazelnut yang harum.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic7', name: 'Iced Spanish Latte', category: 'iced-coffee', price: 34000, rating: 4.9, desc: 'Perpaduan manis gurih susu kental manis, susu segar, dan espresso dingin.', badge: 'signature', badgeText: '⭐ Signature', image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic8', name: 'Cold Brew', category: 'iced-coffee', price: 30000, rating: 4.8, desc: 'Kopi yang diseduh dingin selama 16 jam, menghasilkan rasa halus tanpa asam berlebih.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic9', name: 'Nitro Cold Brew', category: 'iced-coffee', price: 35000, rating: 4.9, desc: 'Cold brew berinfusi nitrogen dengan tekstur velvety creamy seperti bir draft.', badge: 'new', badgeText: '🆕 New', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'ic10', name: 'Iced Brown Sugar Latte', category: 'iced-coffee', price: 32000, rating: 5.0, desc: 'Kopi susu gula aren autentik dengan rasa legit dan keharuman khas.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },

  // ⭐ SIGNATURE DRINKS
  { id: 'sig1', name: 'NgopiDulu Signature', category: 'signature-drinks', price: 36000, rating: 5.0, desc: 'Resep rahasia kopi racikan barista kami dengan krim rahasia manis gurih.', badge: 'signature', badgeText: '⭐ Signature', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig2', name: 'Caramel Cloud', category: 'signature-drinks', price: 38000, rating: 4.9, desc: 'Espresso dingin dilapisi foam karamel melayang seperti awan lembut.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig3', name: 'Midnight Brew', category: 'signature-drinks', price: 37000, rating: 4.8, desc: 'Cold brew pekat berpadu rasa rempah kayu manis dan orange zest.', badge: 'new', badgeText: '🆕 New', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig4', name: 'Buttercream Latte', category: 'signature-drinks', price: 38000, rating: 4.9, desc: 'Sensasi gurih krim mentega kaya rasa bertemu pahit manis espresso.', badge: 'signature', badgeText: '⭐ Signature', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig5', name: 'Coconut Coffee', category: 'signature-drinks', price: 35000, rating: 4.7, desc: 'Perpaduan kelapa organik tropis dengan shot espresso pilihan.', badge: 'vegan', badgeText: '🌱 Vegan', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig6', name: 'Honey Cinnamon Latte', category: 'signature-drinks', price: 34000, rating: 4.8, desc: 'Kopi hangat dengan madu hutan murni dan taburan kayu manis.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig7', name: 'Salted Caramel Latte', category: 'signature-drinks', price: 35000, rating: 4.9, desc: 'Paduan manis gurih salted caramel premium dengan espresso creamy.', badge: 'promo', badgeText: '💸 Promo 20%', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 'sig8', name: 'Maple Latte', category: 'signature-drinks', price: 35000, rating: 4.7, desc: 'Kopi latte manis lembut menggunakan sirup maple asli Kanada.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80' },

  // 🍵 NON COFFEE
  { id: 'nc1', name: 'Matcha Latte', category: 'non-coffee', price: 33000, rating: 4.9, desc: 'Uji Matcha asal Jepang berkombinasi dengan susu hangat gurih.', badge: 'signature', badgeText: '⭐ Signature', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc2', name: 'Chocolate', category: 'non-coffee', price: 31000, rating: 4.9, desc: 'Cokelat hitam Belgia kental dipadu susu creamy memanjakan lidah.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc3', name: 'Red Velvet', category: 'non-coffee', price: 32000, rating: 4.7, desc: 'Minuman manis gurih beraroma kue red velvet dan cream cheese.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc4', name: 'Taro Latte', category: 'non-coffee', price: 30000, rating: 4.6, desc: 'Rasa talas ungu manis yang khas berpadu susu lembut.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc5', name: 'Thai Tea', category: 'non-coffee', price: 25000, rating: 4.8, desc: 'Teh Thailand autentik bercita rasa rempah unik dan gurih.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc6', name: 'Green Tea', category: 'non-coffee', price: 24000, rating: 4.7, desc: 'Seduhan teh hijau murni dari pucuk teh pilihan penyegar jiwa.', badge: 'vegan', badgeText: '🌱 Vegan', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc7', name: 'Cookies & Cream', category: 'non-coffee', price: 34000, rating: 4.9, desc: 'Susu blended dengan biskuit cokelat renyah dan whipped cream.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc8', name: 'Vanilla Milk', category: 'non-coffee', price: 26000, rating: 4.6, desc: 'Susu murni hangat disempurnakan ekstrak ekstrak vanila manis.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80' },
  { id: 'nc9', name: 'Fresh Milk', category: 'non-coffee', price: 22000, rating: 4.5, desc: 'Susu segar pasteurisasi dingin kaya nutrisi.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80' },

  // 🥤 REFRESHMENTS
  { id: 'rf1', name: 'Lemon Tea', category: 'refreshments', price: 22000, rating: 4.7, desc: 'Es teh segar dipadu perasan lemon alami yang asam manis nikmat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf2', name: 'Peach Tea', category: 'refreshments', price: 26000, rating: 4.8, desc: 'Kombinasi manis buah persik segar dan aroma teh hitam lembut.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf3', name: 'Lychee Tea', category: 'refreshments', price: 27000, rating: 4.8, desc: 'Teh dingin manis dilengkapi dengan 2 buah kelengkeng/lisi segar.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf4', name: 'Passion Fruit Tea', category: 'refreshments', price: 27000, rating: 4.7, desc: 'Sensasi tropis buah markisa segar menggugah semangat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf5', name: 'Mango Tea', category: 'refreshments', price: 26000, rating: 4.6, desc: 'Racikan teh buah mangga harum dan menyegarkan.', badge: '', badgeText: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj2YzgdIozNDf9vJy8nIR8q4rtX5eCfB_paqM19uw9BRsV8OddHafY_Y&s=10' },
  { id: 'rf6', name: 'Strawberry Soda', category: 'refreshments', price: 28000, rating: 4.8, desc: 'Mocktail stroberi berkilau dengan soda dan mint segar.', badge: 'new', badgeText: '🆕 New', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf7', name: 'Mojito Mint (Non Alcohol)', category: 'refreshments', price: 29000, rating: 4.9, desc: 'Sensasi dingin daun mint, perasan jeruk nipis, dan soda bersoda.', badge: 'vegan', badgeText: '🌱 Vegan', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' },
  { id: 'rf8', name: 'Sparkling Lemon', category: 'refreshments', price: 25000, rating: 4.7, desc: 'Minuman soda lemon dingin penyegar dahaga seketika.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },

  // 🍰 DESSERT
  { id: 'ds1', name: 'Cheesecake', category: 'dessert', price: 38000, rating: 4.9, desc: 'Kue keju panggang gaya New York yang lembut dan lumer di mulut.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds2', name: 'Brownies', category: 'dessert', price: 28000, rating: 4.8, desc: 'Fudge brownies cokelat pekat dengan tekstur fudgy dan kacang renyah.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds3', name: 'Tiramisu', category: 'dessert', price: 40000, rating: 5.0, desc: 'Dessert Italia klasik dengan ladyfinger terendam espresso dan mascarpone.', badge: 'signature', badgeText: '⭐ Signature', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds4', name: 'Chocolate Cake', category: 'dessert', price: 36000, rating: 4.8, desc: 'Layer cake cokelat kaya rasa dengan ganache cokelat lezat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds5', name: 'Red Velvet Cake', category: 'dessert', price: 38000, rating: 4.7, desc: 'Kue red velvet lembut berlapis cream cheese frosting gurih.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds6', name: 'Pancake', category: 'dessert', price: 32000, rating: 4.7, desc: 'Pancake empuk hangat disajikan dengan sirup maple dan mentega.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds7', name: 'Waffle', category: 'dessert', price: 34000, rating: 4.8, desc: 'Waffle Belgia renyah di luar lembut di dalam dengan topping es krim.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80' },
  { id: 'ds8', name: 'Ice Cream', category: 'dessert', price: 25000, rating: 4.6, desc: '2 scoop es krim gelato manis varian Vanila / Cokelat / Matcha.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80' },

  // 🥐 PASTRY
  { id: 'ps1', name: 'Croissant', category: 'pastry', price: 26000, rating: 4.8, desc: 'Pastry khas Prancis berlapis renyah dengan aroma butter alami.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps2', name: 'Butter Croissant', category: 'pastry', price: 28000, rating: 4.9, desc: 'Croissant mentega kualitas tinggi yang sangat renyah dan wangi.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps3', name: 'Almond Croissant', category: 'pastry', price: 34000, rating: 5.0, desc: 'Croissant berisikan krim almond manis dan taburan almond panggang.', badge: 'signature', badgeText: '⭐ Signature', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps4', name: 'Pain au Chocolat', category: 'pastry', price: 30000, rating: 4.8, desc: 'Roti pastry berlapis renyah berisian cokelat leleh nikmat.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps5', name: 'Cinnamon Roll', category: 'pastry', price: 29000, rating: 4.7, desc: 'Roti gulung rempah kayu manis disiram cream cheese glaze halus.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps6', name: 'Danish Pastry', category: 'pastry', price: 32000, rating: 4.7, desc: 'Pastry manis dengan isian buah segar berry dan custard cream.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
  { id: 'ps7', name: 'Garlic Bread', category: 'pastry', price: 25000, rating: 4.6, desc: 'Roti panggang mentega bawang putih dan peterseli harum.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80' },

  // 🥪 SNACKS
  { id: 'sn1', name: 'French Fries', category: 'snacks', price: 25000, rating: 4.7, desc: 'Kentang goreng gurih renyah disajikan dengan saus keju & sambal.', badge: '', badgeText: '', image: 'https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1662474181&s=50bccc38a736ef0e0a6e261ad23378f4' },
  { id: 'sn2', name: 'Chicken Wings', category: 'snacks', price: 36000, rating: 4.9, desc: 'Sayap ayam goreng bumbu BBQ gurih pedas manis spesial.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn3', name: 'Onion Rings', category: 'snacks', price: 24000, rating: 4.6, desc: 'Bawang bombay balut tepung renyah khas coffee shop.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn4', name: 'Nuggets', category: 'snacks', price: 27000, rating: 4.6, desc: 'Nugget ayam tebal renyah teman ngobrol santai.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn5', name: 'Toast', category: 'snacks', price: 26000, rating: 4.7, desc: 'Roti panggang mentega dengan pilihan selai cokelat / keju.', badge: '', badgeText: '', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/08/french-toast-recipe.jpg' },
  { id: 'sn6', name: 'Sandwich', category: 'snacks', price: 32000, rating: 4.8, desc: 'Sandwich isi smoked beef, keju melleh, dan sayuran segar.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn7', name: 'Club Sandwich', category: 'snacks', price: 38000, rating: 4.9, desc: 'Sandwich 3 lapis isi daging ayam, telur, bacon, keju, dan kentang.', badge: 'bestseller', badgeText: '🔥 Best Seller', image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=600&q=80' },
  { id: 'sn8', name: 'Garlic Toast', category: 'snacks', price: 26000, rating: 4.6, desc: 'Toast panggang renyah beraroma garlic butter gurih.', badge: '', badgeText: '', image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=600&q=80' }
];

// Keterangan bahan penyusun setiap menu (terbuat dari apa)
const MENU_INGREDIENTS = {
  // ☕ COFFEE
  c1: 'Biji arabica Gayo sangrai medium, digiling halus, diekstrak 25 detik tanpa gula.',
  c2: 'Double shot espresso ditambah air panas 200ml, tanpa susu.',
  c3: 'Espresso single + steamed milk + foam susu tebal, ditaburi bubuk cokelat.',
  c4: 'Espresso single + steamed milk + microfoam halus dengan latte art.',
  c5: 'Ristretto ganda + microfoam susu yang sangat halus.',
  c6: 'Espresso klasik + satu sendok foam susu lembut.',
  c7: 'Espresso + cokelat Belgia premium + steamed milk + whipped cream.',
  c8: 'Ristretto kuat + steamed milk, disajikan dalam cangkir kecil.',
  c9: 'Double espresso dituang di atas air panas untuk crema alami.',
  c10: '2 scoop es krim vanila manis disiram shot espresso panas pekat.',

  // 🧊 ICED COFFEE
  ic1: 'Espresso ganda + air dingin + es batu segar.',
  ic2: 'Espresso + susu segar pasteurisasi + es batu.',
  ic3: 'Cokelat dingin + espresso + susu segar + es batu.',
  ic4: 'Espresso + susu segar + sirup karamel gurih + saus karamel + es.',
  ic5: 'Espresso + susu segar + sirup vanila asli + es batu.',
  ic6: 'Espresso + susu segar + sirup hazelnut premium + es batu.',
  ic7: 'Espresso + susu segar + susu kental manis, diaduk dengan es.',
  ic8: 'Biji kopi pilihan direndam air dingin selama 16 jam lalu disaring.',
  ic9: 'Cold brew 16 jam + infusi nitrogen untuk tekstur velvety creamy.',
  ic10: 'Espresso + susu segar + gula aren asli dengan rasa legit + es.',

  // ⭐ SIGNATURE DRINKS
  sig1: 'Espresso + krim rahasia manis gurih + taburan bubuk cokelat.',
  sig2: 'Espresso dingin + foam karamel yang melayang seperti awan.',
  sig3: 'Cold brew pekat + rempah kayu manis + orange zest.',
  sig4: 'Espresso + krim mentega kaya rasa + steamed milk.',
  sig5: 'Shot espresso + kelapa organik tropis yang menyegarkan.',
  sig6: 'Espresso + madu hutan murni + taburan kayu manis + susu hangat.',
  sig7: 'Espresso + salted caramel premium + susu creamy + garam laut.',
  sig8: 'Espresso + sirup maple asli Kanada + steamed milk.',

  // 🍵 NON COFFEE
  nc1: 'Matcha Uji Jepang berkualitas + susu hangat gurih.',
  nc2: 'Cokelat hitam Belgia 70% kental + susu creamy + whipped cream.',
  nc3: 'Sirup red velvet + susu segar + foam cream cheese.',
  nc4: 'Talas ungu asli + susu segar, manis lembut khas.',
  nc5: 'Teh Thailand autentik + susu kental manis.',
  nc6: 'Seduhan pucuk teh hijau murni pilihan.',
  nc7: 'Susu segar + biskuit cokelat renyah + whipped cream.',
  nc8: 'Susu murni hangat + ekstrak vanila asli.',
  nc9: 'Susu segar pasteurisasi dingin kaya nutrisi.',

  // 🥤 REFRESHMENTS
  rf1: 'Es teh hitam + perasan lemon asli, asam manis menyegarkan.',
  rf2: 'Teh hitam + sirup buah persik segar + es batu.',
  rf3: 'Teh dingin manis + 2 buah kelengkeng/lychee segar.',
  rf4: 'Teh hitam + buah markisa segar tropis.',
  rf5: 'Teh + sirup mangga harum + es batu.',
  rf6: 'Sirup stroberi + soda berkilau + daun mint segar + es.',
  rf7: 'Daun mint segar + perasan jeruk nipis + soda + es batu.',
  rf8: 'Air soda dingin + perasan lemon asli + es batu.',

  // 🍰 DESSERT
  ds1: 'Krim keju New York panggang + crust biskuit graham renyah.',
  ds2: 'Cokelat pekat fudgy + kacang walnut renyah.',
  ds3: 'Ladyfinger terendam espresso + mascarpone lembut + bubuk kakao.',
  ds4: 'Layer cake cokelat + ganache cokelat premium.',
  ds5: 'Kue red velvet lembut + cream cheese frosting.',
  ds6: 'Adonan telur & susu empuk, disiram sirup maple + mentega.',
  ds7: 'Adonan waffle Belgia renyah + topping es krim.',
  ds8: '2 scoop gelato manis: Vanila / Cokelat / Matcha.',

  // 🥐 PASTRY
  ps1: 'Lapis pastry + butter Prancis, dipanggang hingga renyah.',
  ps2: 'Lapis pastry + mentega premium kualitas tinggi.',
  ps3: 'Croissant + krim almond manis + taburan almond panggang.',
  ps4: 'Lapis pastry renyah + isi cokelat leleh.',
  ps5: 'Adonan roti + kayu manis + cream cheese glaze halus.',
  ps6: 'Pastry manis + buah berry segar + custard cream.',
  ps7: 'Roti panggang + mentega bawang putih + peterseli harum.',

  // 🥪 SNACKS
  sn1: 'Kentang pilihan digoreng gurih + saus keju & sambal.',
  sn2: 'Sayap ayam segar, bumbu BBQ gurih pedas manis.',
  sn3: 'Bawang bombay + adonan tepung renyah khas coffee shop.',
  sn4: 'Ayam giling tebal + tepung panir renyah.',
  sn5: 'Roti panggang + mentega + selai cokelat / keju.',
  sn6: 'Smoked beef + keju meleleh + sayuran segar.',
  sn7: 'Ayam + telur + bacon + keju + kentang, sandwich 3 lapis.',
  sn8: 'Toast panggang renyah + garlic butter gurih.'
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
      showToast(showFavoritesOnly ? '❤️ Menampilkan Menu Favorit' : '☕ Menampilkan Semua Menu');
    });
  }
});

function renderCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  const categories = [
    { id: 'all', name: 'Semua Menu', icon: '✨' },
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'iced-coffee', name: 'Iced Coffee', icon: '🧊' },
    { id: 'signature-drinks', name: 'Signature Drinks', icon: '⭐' },
    { id: 'non-coffee', name: 'Non Coffee', icon: '🍵' },
    { id: 'refreshments', name: 'Refreshments', icon: '🥤' },
    { id: 'dessert', name: 'Dessert', icon: '🍰' },
    { id: 'pastry', name: 'Pastry', icon: '🥐' },
    { id: 'snacks', name: 'Snacks', icon: '🥪' }
  ];

  let html = '';
  categories.forEach(cat => {
    const isActive = activeCategory === cat.id ? 'active' : '';
    html += `
      <button type="button" class="category-pill gallery-pill ${isActive}" data-cat="${cat.id}">
        <span class="pill-icon">${cat.icon}</span>
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
  // When user explicitly selects a category, show the full category
  // (disable "favorites only" to avoid empty results if no favorites exist)
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

  let filtered = itemsToRender;

  if (!filtered) {
    filtered = MENU_DATA.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchFav = !showFavoritesOnly || StorageService.isFavorite(item.id);
      return matchCat && matchFav;
    });
  }

  // Update on-screen debug overlay (if present)
  try {
    const dbg = document.getElementById('filter-debug');
    if (dbg) {
      dbg.style.display = 'block';
      dbg.textContent = `category: ${activeCategory} · favoritesOnly: ${showFavoritesOnly} · results: ${filtered.length}`;
    }
  } catch (e) {
    console.warn('[filter] debug overlay update failed', e);
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:1rem;">☕🔍</div>
        <h3>Menu tidak ditemukan</h3>
        <p>Coba kata kunci lain atau pilih kategori menu yang berbeda.</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const isFav = StorageService.isFavorite(item.id);
    const badgeHtml = item.badgeText ? `<span class="badge badge-${item.badge}">${item.badgeText}</span>` : '';
    const ingredients = MENU_INGREDIENTS[item.id] || '';

    html += `
      <div class="menu-card" data-aos="fade-up">
        <div class="menu-img-container">
          <img src="${item.image}" alt="${item.name}" class="menu-img" loading="lazy">
          <div class="menu-badges">
            ${badgeHtml}
          </div>
          <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavItem('${item.id}', this)" title="Favoritkan">
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
          <p class="menu-desc">${item.desc}</p>
          <p class="menu-ingredients">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span>${ingredients}</span>
          </p>
          <div class="menu-footer-row">
            <div class="menu-price">${formatRupiah(item.price)}</div>
          </div>
        </div>
      </div>
    `;
  });

  gridContainer.innerHTML = html;

  // Ensure newly-inserted AOS elements are visible (they are inserted after initial observer setup)
  // AOS animations disabled: intentionally not adding 'aos-animate'
}

function toggleFavItem(id, btnEl) {
  const updatedFavs = StorageService.toggleFavorite(id);
  const isFav = updatedFavs.includes(id);
  btnEl.classList.toggle('active', isFav);

  if (typeof showToast === 'function') {
    showToast(isFav ? '❤️ Ditambahkan ke Favorit' : '💔 Dihapus dari Favorit');
  }

  if (showFavoritesOnly) {
    renderMenuGrid();
  }
}
