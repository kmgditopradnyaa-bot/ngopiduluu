/* ==========================================================================
   NgopiDuluu - Internationalization (i18n) Controller
   Handling language switching between Indonesian (id) and English (en).
   ========================================================================== */

const LANG_KEY = 'ngopiduluu_lang';

const TRANSLATIONS = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.menu': 'Menu',
    'nav.gallery': 'Galeri',
    'nav.testimonials': 'Testimoni',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontak',
    'nav.title_theme': 'Ganti Tema',
    'nav.title_search': 'Cari Menu',
    'nav.title_lang': 'Ganti Bahasa',

    // Loading & Tagline
    'loading.tagline': '"Diseduh Sepenuh Hati..."',

    // Hero Section
    'hero.subtitle_1': 'Ngopi Dulu, Baru Lanjut Cerita.',
    'hero.subtitle_2': 'Sajian Kopi Autentik Nusantara.',
    'hero.subtitle_3': 'Ruang Kerja Cozy & Wi-Fi Cepat.',
    'hero.description': 'Setiap seduhan membawa kehangatan, setiap tegukan menyalakan semangat; mari mulai langkahmu hari ini untuk bangkit dan melangkah lebih jauh.',
    'hero.btn_menu': 'Lihat Menu',
    'hero.btn_reservation': 'Reservasi Meja',
    'hero.trust1': 'Racikan Barista Ahli',
    'hero.trust2': 'Biji Pilihan Single Origin',
    'hero.trust3': 'Suasana Cozy &amp; Estetik',

    // Statistics Counter
    'stats.title': 'Angka yang Berbicara',
    'stats.sub': 'Bukti nyata membuat secangkir kopi jadi momen terbaikmu',
    'stats.cups_label': 'Cangkir Diseduh Hari Ini',
    'stats.rating_label': 'Rating Pelanggan',
    'stats.location_label': 'Lokasi di Indonesia',
    'stats.location_val': '50 Cabang',
    'stats.customers_label': 'Pelanggan Setia',

    // About Preview
    'about_prev.subtitle': 'Cerita Kami',
    'about_prev.title': 'Tempat Terbaik Menikmati Kopi & Berbagi Cerita',
    'about_prev.p1': '<strong>NgopiDuluu</strong> berawal dari proyek kreatif karya Saya Sebagai Front-End Developer Pemula yang bertekad menghadirkan penggabungan antara kehangatan kedai kopi tradisional dan kenyamanan coffee shop modern.',
    'about_prev.p2': 'Kami memadukan 100% biji kopi Nusantara pilihan, teknik penyeduhan presisi, dan suasana tempat yang hangat. Apapun tujuanmu—nugas, bekerja remote, atau ngobrol santai—kami siap menyambutmu.',
    'about_prev.feat1': '100% Biji Kopi Nusantara',
    'about_prev.feat2': 'Barista Handal & Ramah',
    'about_prev.feat3': 'Ruang Kerja Wi-Fi Cepat',
    'about_prev.feat4': 'Bahan Segar & Alami',
    'about_prev.btn': 'Pelajari Selengkapnya',

    // Signature Collection
    'sig.subtitle': 'Menu Favorit',
    'sig.title': 'Menu Andalan NgopiDuluu',
    'sig.desc': 'Cicipi racikan menu kopi dan kudapan manis yang paling sering dipesan pelanggan.',
    'sig.btn_all': 'Lihat Semua Menu →',
    'sig.item1_desc': 'Resep kopi rahasia khas barista kami dengan krim manis gurih.',
    'sig.item2_desc': 'Espresso dingin dilapisi foam karamel melayang seperti awan lembut.',
    'sig.item3_desc': 'Cold brew pekat berpadu rasa rempah kayu manis dan orange zest.',
    'sig.item4_desc': 'Uji Matcha asal Jepang berkombinasi dengan susu hangat gurih.',
    'sig.item5_desc': 'Kue keju panggang gaya New York yang lembut dan lumer di mulut.',
    'sig.item6_desc': 'Croissant mentega kualitas tinggi yang sangat renyah dan wangi.',
    'footer.desc_full': '"Ngopi Dulu, Baru Lanjut Cerita."<br>Kedai kopi modern karya saya dengan tema dan sajian rasa autentik, suasana nyaman, dan pelayanan ramah.',

    // Today Special / Promo
    'promo.badge_head': 'Promo Minggu Ini',
    'promo.title': 'Iced Hazelnut Latte',
    'promo.desc': 'Kopi susu dingin dengan sentuhan rasa kacang hazelnut yang harum dan nikmat. Rasakan paduan sempurna antara espresso, susu creamy, dan sirup hazelnut pilihan.',
    'promo.badge': 'Diskon 20%',
    'promo.days': 'Hari',
    'promo.hours': 'Jam',
    'promo.minutes': 'Menit',
    'promo.seconds': 'Detik',
    'promo.btn': 'Lihat Menu Promo',

    // Facilities & Comfort
    'fac.subtitle': 'Fasilitas & Kenyamanan',
    'fac.title': 'Suasana Ruang NgopiDuluu',
    'fac.desc': 'Bukan cuma soal kopi, kami menyediakan ruang kerja dan bersantai yang hangat.',
    'fac.item1_title': 'Wi-Fi Berkecepatan Tinggi',
    'fac.item1_desc': 'Koneksi internet lancar dan stabil untuk kebutuhan nugas dan pekerjaan online.',
    'fac.item2_title': 'Stopkontak Lengkap',
    'fac.item2_desc': 'Tersedia stopkontak di setiap area meja agar laptop dan ponselmu selalu siap.',
    'fac.item3_title': 'Ruang Kerja & Nugas',
    'fac.item3_desc': 'Desain interior bersih dan tenang, cocok untuk diskusi kelompok maupun kerja mandiri.',
    'fac.item4_title': 'Playlist Musik Menenangkan',
    'fac.item4_desc': 'Pilihan lagu latar yang lembut untuk menemani fokus dan waktu santaimu.',

    // Testimonials
    'testi.subtitle': 'Testimoni',
    'testi.title': 'Apa Kata Mereka?',
    'testi.caption': 'Apa yang mereka rasakan saat berkunjung? Yuk simak testimoni di bawah.',

    // Reservation Section
    'res.subtitle': 'Reservasi Online',
    'res.title': 'Pesan Meja Favoritmu',
    'res.desc': 'Pesan meja terlebih dahulu untuk kegiatan nugas, kerja santai, atau kumpul bersama teman.',
    'res.lbl_name': 'Nama Lengkap',
    'res.ph_name': 'Masukkan nama Anda',
    'res.lbl_email': 'Email / Nomor WhatsApp',
    'res.ph_email': 'contoh@gmail.com / 08123456789',
    'res.lbl_date': 'Tanggal Reservasi',
    'res.lbl_time': 'Jam Kedatangan',
    'res.lbl_guests': 'Jumlah Tamu',
    'res.opt_1': '1 Orang',
    'res.opt_2': '2 Orang',
    'res.opt_34': '3 - 4 Orang',
    'res.opt_5plus': '5+ Orang (Grup / Nugas)',
    'res.btn_submit': 'Konfirmasi Reservasi Sekarang',

    // FAQ Section
    'faq.subtitle': 'Tanya Jawab',
    'faq.title': 'Pertanyaan Sering Diajukan (FAQ)',
    'faq.sec1_title': 'Menu & Bahan',
    'faq.q1': 'Dari mana asal biji kopi yang digunakan di NgopiDuluu?',
    'faq.a1': 'Kami menggunakan 100% biji kopi Arabika pilihan dari berbagai daerah penghasil kopi terbaik Nusantara seperti Aceh Gayo, Toraja, dan Bali Kintamani.',
    'faq.q2': 'Apakah ada opsi alternatif susu non-dairy / vegan?',
    'faq.a2': 'Ya! Kamu bisa meminta penggantian susu sapi dengan Oat Milk atau Almond Milk untuk varian kopi maupun non-kopi.',
    'faq.q3': 'Apakah seluruh menu dessert disajikan segar?',
    'faq.a3': 'Setiap croissant, pastry, dan kue kami disajikan fresh setiap hari tanpa bahan pengawet.',
    'faq.sec2_title': 'Fasilitas & Layanan',
    'faq.q4': 'Apakah kedai ini cocok untuk nugas atau bekerja (work from cafe)?',
    'faq.a4': 'Sangat cocok! Kami memiliki fasilitas Wi-Fi berkecepatan tinggi, stopkontak di setiap area meja, serta suasana tenang yang mendukung fokus.',
    'faq.q5': 'Berapa jam operasional kedai NgopiDuluu?',
    'faq.a5': 'Kedai NgopiDuluu buka setiap hari Senin – Minggu dari pukul 07.00 WIB hingga 23.00 WIB.',
    'faq.q6': 'Apakah menerima pembayaran non-tunai (cashless)?',
    'faq.a6': 'Kami menerima berbagai metode pembayaran non-tunai seperti QRIS (GoPay, OVO, ShopeePay, DANA), Transfer Bank, dan Tunai.',
    'faq.q7': 'Bagaimana cara melakukan reservasi meja?',
    'faq.a7': 'Kamu dapat mengisi formulir di halaman Kontak & Reservasi atau langsung mengirim pesan WhatsApp ke +62 877-6407-5285.',
    'faq.cta_title': 'Belum menemukan jawaban yang kamu cari?',
    'faq.cta_desc': 'Tim kami siap membantu lewat chat contact di bawah ini.',
    'faq.cta_btn': 'Hubungi Kami Sekarang',

    // Contact Section
    'contact.subtitle': 'Hubungi Kami',
    'contact.title': 'Lokasi & Kontak NgopiDuluu',
    'contact.page_title': 'Kontak & Lokasi Kedai',
    'contact.page_subtitle': 'Mari Terhubung',
    'contact.page_desc': 'Punya pertanyaan, saran, atau ingin reservasi tempat? Kami siap membantu kamu.',
    'contact.form_kicker': 'Reservasi Online',
    'contact.email_title': 'Kirim Pesan via Email',
    'contact.map_link': 'Buka di Google Maps',
    'contact.my_email': 'Email Saya',
    // Contact Link Section (home page hero contact buttons)
    'contact.link.title': 'Hubungi Kami Gratis',
    'contact.link.title_accent': 'Klik Tombol di Bawah',
    'contact.link.desc': 'Butuh reservasi, info menu, atau sekadar ngobrol seputar kopi? Langsung terhubung dengan tim kami — cepat, ramah, tanpa ribet.',
    'contact.link.btn': 'Hubungi Kami',
    'contact.link.wa': 'WhatsApp Langsung',
    'contact.link.note': 'Tersedia 07:00 – 23:00 WIB • Respon cepat dalam 5 menit',

    // Menu Page
    'menu.page_subtitle': 'Pilihan Terlengkap',
    'menu.page_title': 'Daftar Menu NgopiDuluu',
    'menu.page_desc': 'Temukan sajian racikan kopi pilihan, minuman segar non-kopi, pastry hangat, dan hidangan penutup manis khas kami.',
    'menu.header_sub': 'Pilihan Terlengkap',
    'menu.header_title': 'Daftar Menu NgopiDuluu',
    'menu.header_desc': 'Temukan sajian racikan kopi pilihan, minuman segar non-kopi, pastry hangat, dan hidangan penutup manis khas kami.',
    'menu.search_ph': 'Cari nama menu (contoh: Espresso, Tiramisu, Croissant)...',
    'menu.fav_btn': 'Favorit Saya',
    'menu.btn_fav': 'Favorit Saya',

    // About Page
    'about.page_subtitle': 'Filosofi & Kisah Perjalanan',
    'about.page_title': 'Tentang NgopiDuluu',
    'about.page_desc': '"Ngopi Dulu, Baru Lanjut Cerita."',
    'about.story_subtitle': 'Awal Mula',
    'about.story_title': 'Berawal dari Cangkir & Percakapan Sederhana',
    'about.story_p1': 'NgopiDuluu berawal dari proyek saya yang bertekad menghadirkan kehangatan kedai kopi Nusantara dalam balutan konsep modern, bersih, dan nyaman.',
    'about.story_p2': 'Dari kebiasaan nugas bareng, ngobrol santai, hingga berdiskusi proyek, kami menyadari bahwa secangkir kopi adalah jembatan terbaik untuk memulai setiap ide dan kebersamaan.',
    'about.story_p3': 'Kami memilih biji kopi Nusantara pilihan, menyajikannya secara presisi dengan keramahan khas, serta menghadirkan tempat yang tenang untuk bekerja maupun beristirahat.',
    'about.values_subtitle': 'Nilai Utama',
    'about.values_title': 'Komitmen Kualitas Kami',
    'about.val1_title': 'Biji Kopi Nusantara',
    'about.val1_desc': 'Menggunakan 100% biji kopi pilihan dari petani lokal Nusantara tanpa bahan buatan.',
    'about.val2_title': 'Dukungan Petani Lokal',
    'about.val2_desc': 'Bekerja sama secara adil dengan kelompok tani lokal untuk kualitas biji terjaga.',
    'about.val3_title': 'Penyeduhan Presisi',
    'about.val3_desc': 'Sajian diseduh dengan rasio suhu dan takaran yang pas untuk menjaga konsistensi rasa.',
    'about.val4_title': 'Kemasan Ramah Lingkungan',
    'about.val4_desc': 'Menggunakan sedotan dan paper cup biodegradable untuk mengurangi sampah plastik.',

    // Gallery Page
    'gallery.page_subtitle': 'Dokumentasi & Suasana',
    'gallery.page_title': 'Galeri Foto NgopiDuluu',
    'gallery.page_desc': 'Kumpulan foto suasana kedai, keceriaan pengunjung, serta sajian kopi dan pastry terbaik kami.',
    'gallery.header_sub': 'Dokumentasi Visual',
    'gallery.header_title': 'Galeri NgopiDuluu',
    'gallery.header_desc': 'Setiap sudut kedai dirancang untuk memberikan kehangatan, estetika modern, dan suasana ngopi yang berkesan.',
    'gallery.pill_all': 'Semua Foto',
    'gallery.pill_interior': 'Interior & Suasana',
    'gallery.pill_coffee': 'Kopi & Barista',
    'gallery.pill_pastry': 'Pastry & Dessert',
    'gallery.pill_ambience': 'Outdoor & Acara',
    'gallery.cat_all': 'Semua Foto',
    'gallery.cat_interior': 'Interior & Suasana',
    'gallery.cat_coffee': 'Kopi & Minuman',
    'gallery.cat_pastry': 'Pastry & Dessert',
    'gallery.cat_ambience': 'Teras & Komunitas',

    // FAQ Page Headers & Extras
    'faq.header_sub': 'Pusat Bantuan',
    'faq.header_title': 'Pertanyaan Sering Diajukan',
    'faq.header_desc': 'Temukan jawaban cepat atas pertanyaan Anda seputar sajian kopi, fasilitas, jam buka, hingga layanan kami.',
    'faq.cat_menu': 'Menu & Bahan',
    'faq.cat_facility': 'Fasilitas & Layanan',

    // Contact Page Headers & Form
    'contact.header_sub': 'Mari Terhubung',
    'contact.header_title': 'Kontak & Reservasi Meja',
    'contact.header_desc': 'Kami siap mendengarkan pesan, kritik, masukan, maupun reservasi meja Anda.',
    'contact.form_title': 'Formulir Reservasi',
    'contact.label_name': 'Nama Lengkap',
    'contact.ph_name': 'Masukkan nama Anda',
    'contact.label_contact': 'Email / Nomor WhatsApp',
    'contact.ph_contact': 'contoh@gmail.com / 08123456789',
    'contact.label_date': 'Tanggal Reservasi',
    'contact.label_time': 'Jam Kedatangan',
    'contact.label_guests': 'Jumlah Tamu',
    'contact.opt_1': '1 Orang',
    'contact.opt_2': '2 Orang',
    'contact.opt_34': '3 - 4 Orang',
    'contact.opt_5': '5+ Orang (Grup / Nugas)',
    'contact.btn_submit': 'Konfirmasi Reservasi Sekarang',
    'contact.location_title': 'Lokasi Kedai NgopiDuluu',
    'contact.direct_title': 'Kontak Langsung',
    'contact.whatsapp_btn': 'Hubungi via WhatsApp',
    'contact.ig_btn': 'Hubungi via Instagram',
    'contact.form_name_ph': 'Nama',
    'contact.form_email_ph': 'Email',
    'contact.form_msg_ph': 'Tulis pesan Anda di sini...',
    'contact.form_send_btn': 'Kirim Pesan',

    // Poster Page
    'poster.page_subtitle': 'Media Promosi',
    'poster.page_title': 'Poster & Flyer NgopiDuluu',

    // Search Modal
    'search.modal_title': 'Pencarian Menu',
    'search.modal_ph': 'Cari nama menu...',
    'search.modal_hint': 'Ketik nama menu, contoh: <i>"Latte"</i>, <i>"Croissant"</i>, <i>"Tiramisu"</i>...',
    'search.modal_empty': 'Tidak ada menu yang sesuai',

    // Footer
    'footer.tagline': '"Ngopi Dulu, Baru Lanjut Cerita."',
    'footer.desc': 'Kedai kopi modern karya saya dengan tema dan sajian rasa autentik, suasana nyaman, dan pelayanan ramah.',
    'footer.title_links': 'Tautan Cepat',
    'footer.title_hours': 'Jam Operasional',
    'footer.title_location': 'Lokasi Utama',
    'footer.hours_days': 'Senin – Minggu',
    'footer.hours_open': '07:00 – 23:00 WIB',
    'footer.hours_holiday': 'Hari Libur',
    'footer.hours_holiday_open': 'Tetap Buka',
    'footer.location_addr': 'Jl. Kopi Nusantara No. 88, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190',
    'footer.copyright': '© 2026 NgopiDuluu Coffee Shop — Project Karya Ditoo. Hak Cipta Dilindungi.',
    'footer.subcopyright': 'Ngopi Dulu, Baru Lanjut Cerita',
    'back_to_top': 'Kembali ke Atas'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.title_theme': 'Switch Theme',
    'nav.title_search': 'Search Menu',
    'nav.title_lang': 'Switch Language',

    // Loading & Tagline
    'loading.tagline': '"Brewed Wholeheartedly..."',

    // Hero Section
    'hero.subtitle_1': 'Coffee First, Then Let Stories Flow.',
    'hero.subtitle_2': 'Authentic Indonesian Coffee Experience.',
    'hero.subtitle_3': 'Cozy Workspace & Fast Wi-Fi.',
    'hero.description': 'Every brew brings warmth, every sip sparks spirit; begin your steps today to rise and go even further.',
    'hero.btn_menu': 'View Menu',
    'hero.btn_reservation': 'Reserve Table',
    'hero.trust1': 'Expert Barista Craft',
    'hero.trust2': 'Single Origin Beans',
    'hero.trust3': 'Cozy &amp; Aesthetic Vibes',

    // Statistics Counter
    'stats.title': 'Numbers That Speak',
    'stats.sub': 'Real proof turning a cup of coffee into your best moment',
    'stats.cups_label': 'Cups Brewed Today',
    'stats.rating_label': 'Customer Rating',
    'stats.location_label': 'Location in Jakarta',
    'stats.location_val': '50 Branch',
    'stats.customers_label': 'Loyal Customers',

    // About Preview
    'about_prev.subtitle': 'Our Story',
    'about_prev.title': 'The Best Place to Enjoy Coffee & Share Stories',
    'about_prev.p1': '<strong>NgopiDuluu</strong> originated as a creative project by me as a Beginner Front-End Developer dedicated to merging the warmth of traditional Indonesian coffee shops with modern cafe comfort.',
    'about_prev.p2': 'We combine 100% select Indonesian coffee beans, precision brewing techniques, and a warm atmosphere. Whether studying, working remotely, or chatting casually—we are ready to welcome you.',
    'about_prev.feat1': '100% Indonesian Coffee Beans',
    'about_prev.feat2': 'Skilled & Friendly Baristas',
    'about_prev.feat3': 'Fast Wi-Fi Workspace',
    'about_prev.feat4': 'Fresh & Natural Ingredients',
    'about_prev.btn': 'Learn More',

    // Signature Collection
    'sig.subtitle': 'Favorite Menu',
    'sig.title': 'NgopiDuluu Signature Menu',
    'sig.desc': 'Taste our signature coffee blends and sweet bites most requested by our guests.',
    'sig.btn_all': 'View All Menu →',
    'sig.item1_desc': 'Our barista signature coffee recipe with savory sweet cream.',
    'sig.item2_desc': 'Iced espresso topped with velvety caramel foam floating like soft clouds.',
    'sig.item3_desc': 'Rich cold brew infused with cinnamon spices and fresh orange zest.',
    'sig.item4_desc': 'Authentic Japanese Uji Matcha paired with smooth, savory warm milk.',
    'sig.item5_desc': 'Creamy and melt-in-your-mouth New York style baked cheesecake.',
    'sig.item6_desc': 'Premium buttery croissant, delightfully flaky, crispy, and aromatic.',

    // Today Special / Promo
    'promo.badge_head': 'Promo of the Week',
    'promo.title': 'Iced Hazelnut Latte',
    'promo.desc': 'Cold milk coffee with a fragrant touch of hazelnut. Experience the perfect harmony of espresso, creamy milk, and select hazelnut syrup.',
    'promo.badge': '20% Off',
    'promo.days': 'Days',
    'promo.hours': 'Hours',
    'promo.minutes': 'Mins',
    'promo.seconds': 'Secs',
    'promo.btn': 'View Promo Menu',

    // Facilities & Comfort
    'fac.subtitle': 'Facilities & Ambiance',
    'fac.title': 'NgopiDuluu Atmosphere',
    'fac.desc': 'Not just about coffee, we provide a warm space for productivity and relaxation.',
    'fac.item1_title': 'High-Speed Wi-Fi',
    'fac.item1_desc': 'Smooth and reliable internet connection for work and online studies.',
    'fac.item2_title': 'Abundant Power Outlets',
    'fac.item2_desc': 'Outlets available at every table so your laptop and phone are always ready.',
    'fac.item3_title': 'Work & Study Lounge',
    'fac.item3_desc': 'Clean and tranquil interior design, suitable for group discussions or solo work.',
    'fac.item4_title': 'Soothing Music Playlist',
    'fac.item4_desc': 'Thoughtfully chosen background tracks to accompany your focus and downtime.',

    // Testimonials
    'testi.subtitle': 'Testimonials',
    'testi.title': 'What They Say?',
    'testi.caption': 'How did they feel on their visit? Check out the testimonials below.',

    // Reservation Section
    'res.subtitle': 'Online Reservation',
    'res.title': 'Reserve Your Favorite Table',
    'res.desc': 'Book your table in advance for studying, remote work, or hanging out with friends.',
    'res.lbl_name': 'Full Name',
    'res.ph_name': 'Enter your full name',
    'res.lbl_email': 'Email / WhatsApp Number',
    'res.ph_email': 'example@gmail.com / 08123456789',
    'res.lbl_date': 'Reservation Date',
    'res.lbl_time': 'Arrival Time',
    'res.lbl_guests': 'Number of Guests',
    'res.opt_1': '1 Person',
    'res.opt_2': '2 People',
    'res.opt_34': '3 - 4 People',
    'res.opt_5plus': '5+ People (Group / Study)',
    'res.btn_submit': 'Confirm Reservation Now',

    // FAQ Section
    'faq.subtitle': 'Help & FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.sec1_title': 'Menu & Ingredients',
    'faq.q1': 'Where do your coffee beans come from?',
    'faq.a1': 'We source 100% premium Arabica beans from Indonesia’s finest coffee-growing regions including Aceh Gayo, Toraja, and Bali Kintamani.',
    'faq.q2': 'Do you offer non-dairy / vegan milk options?',
    'faq.a2': 'Yes! You can substitute dairy milk with Oat Milk or Almond Milk for both coffee and non-coffee beverages.',
    'faq.q3': 'Are all dessert menu items freshly prepared?',
    'faq.a3': 'Every croissant, pastry, and cake is served fresh daily without preservatives.',
    'faq.sec2_title': 'Facilities & Services',
    'faq.q4': 'Is the cafe suitable for work or studying (Work from Cafe)?',
    'faq.a4': 'Absolutely! We feature high-speed Wi-Fi, accessible power outlets at every table, and a tranquil atmosphere.',
    'faq.q5': 'What are your operating hours?',
    'faq.a5': 'NgopiDuluu is open daily Monday – Sunday from 07:00 AM to 11:00 PM WIB.',
    'faq.q6': 'Do you accept cashless payments?',
    'faq.a6': 'We accept various cashless payment methods including QRIS (GoPay, OVO, ShopeePay, DANA), Bank Transfer, and Cash.',
    'faq.q7': 'How do I reserve a table?',
    'faq.a7': 'You can fill out the form on our Contact & Reservation page or send us a direct WhatsApp message at +62 877-6407-5285.',
    'faq.cta_title': 'Can\'t find the answer you\'re looking for?',
    'faq.cta_desc': 'Our team is ready to help — reach us via the contact options below.',
    'faq.cta_btn': 'Contact Us Now',

    // Contact Section
    'contact.subtitle': 'Contact Us',
    'contact.title': 'NgopiDuluu Location & Contact',
    'contact.page_title': 'Contact & Store Location',
    'contact.page_subtitle': 'Let\'s Connect',
    'contact.page_desc': 'Have questions, feedback, or table inquiries? We are here to help you.',
    'contact.form_kicker': 'Online Reservation',
    'contact.email_title': 'Send a Message via Email',
    'contact.map_link': 'Open in Google Maps',
    'contact.my_email': 'My Email',
    // Contact Link Section (home page hero contact buttons)
    'contact.link.title': 'Contact Us Free',
    'contact.link.title_accent': 'Click the Button Below',
    'contact.link.desc': 'Need a reservation, menu info, or just want to chat about coffee? Connect directly with our team — quick, friendly, hassle-free.',
    'contact.link.btn': 'Contact Us',
    'contact.link.wa': 'WhatsApp Direct',
    'contact.link.note': 'Available 07:00 – 11:00 PM WIB • Quick response within 5 minutes',

    // Menu Page
    'menu.page_subtitle': 'Complete Selection',
    'menu.page_title': 'NgopiDuluu Menu List',
    'menu.page_desc': 'Explore our selection of handcrafted coffees, refreshing non-coffees, warm pastries, and delicious sweet desserts.',
    'menu.header_sub': 'Complete Selection',
    'menu.header_title': 'NgopiDuluu Menu List',
    'menu.header_desc': 'Discover our curated coffee blends, refreshing non-coffee drinks, warm pastries, and signature sweet desserts.',
    'menu.search_ph': 'Search menu item (e.g. Espresso, Tiramisu, Croissant)...',
    'menu.fav_btn': 'My Favorites',
    'menu.btn_fav': 'My Favorites',

    // About Page
    'about.page_subtitle': 'Philosophy & Journey',
    'about.page_title': 'About NgopiDuluu',
    'about.page_desc': '"Coffee First, Then Let Stories Flow."',
    'about.story_subtitle': 'The Beginning',
    'about.story_title': 'Starting from a Cup & Simple Conversations',
    'about.story_p1': 'NgopiDuluu began as a project driven by my ambition to bring the warmth of traditional Indonesian coffee shops into a modern, clean, and welcoming concept.',
    'about.story_p2': 'From studying together to discussing creative projects over coffee, we realized a great cup of coffee is the finest bridge to ignite ideas and community.',
    'about.story_p3': 'We select 100% Indonesian coffee beans, craft them with precision, and offer a peaceful retreat to work, read, or relax.',
    'about.values_subtitle': 'Core Values',
    'about.values_title': 'Our Quality Commitment',
    'about.val1_title': 'Indonesian Coffee Beans',
    'about.val1_desc': 'Using 100% select coffee beans from local Indonesian farmers with no artificial additives.',
    'about.val2_title': 'Local Farmer Support',
    'about.val2_desc': 'Partnering fairly with local farming cooperatives to ensure high bean quality.',
    'about.val3_title': 'Precision Brewing',
    'about.val3_desc': 'Every cup is brewed with exact water temperature and ratios to maintain flavor consistency.',
    'about.val4_title': 'Eco-Friendly Packaging',
    'about.val4_desc': 'Utilizing biodegradable paper cups and straws to reduce plastic waste.',

    // Gallery Page
    'gallery.page_subtitle': 'Gallery & Ambiance',
    'gallery.page_title': 'NgopiDuluu Photo Gallery',
    'gallery.page_desc': 'A collection of store moments, cheerful guests, and our finest coffee & pastry creations.',
    'gallery.header_sub': 'Visual Documentation',
    'gallery.header_title': 'NgopiDuluu Gallery',
    'gallery.header_desc': 'Every corner of our cafe is designed to offer warmth, modern aesthetics, and a memorable coffee experience.',
    'gallery.pill_all': 'All Photos',
    'gallery.pill_interior': 'Interior & Vibe',
    'gallery.pill_coffee': 'Coffee & Barista',
    'gallery.pill_pastry': 'Pastry & Dessert',
    'gallery.pill_ambience': 'Outdoor & Events',
    'gallery.cat_all': 'All Photos',
    'gallery.cat_interior': 'Interior & Vibe',
    'gallery.cat_coffee': 'Coffee & Drinks',
    'gallery.cat_pastry': 'Pastry & Dessert',
    'gallery.cat_ambience': 'Terrace & Community',

    // FAQ Page Headers & Extras
    'faq.header_sub': 'Help Center',
    'faq.header_title': 'Frequently Asked Questions',
    'faq.header_desc': 'Find quick answers to your questions about our coffee, facilities, operating hours, and services.',
    'faq.cat_menu': 'Menu & Ingredients',
    'faq.cat_facility': 'Facilities & Services',

    // Contact Page Headers & Form
    'contact.header_sub': 'Let\'s Connect',
    'contact.header_title': 'Contact & Table Reservation',
    'contact.header_desc': 'We are ready to hear your message, feedback, suggestions, or table reservations.',
    'contact.form_title': 'Reservation Form',
    'contact.label_name': 'Full Name',
    'contact.ph_name': 'Enter your name',
    'contact.label_contact': 'Email / WhatsApp Number',
    'contact.ph_contact': 'example@gmail.com / 08123456789',
    'contact.label_date': 'Reservation Date',
    'contact.label_time': 'Arrival Time',
    'contact.label_guests': 'Number of Guests',
    'contact.opt_1': '1 Person',
    'contact.opt_2': '2 People',
    'contact.opt_34': '3 - 4 People',
    'contact.opt_5': '5+ People (Group / Study)',
    'contact.btn_submit': 'Confirm Reservation Now',
    'contact.location_title': 'NgopiDuluu Store Location',
    'contact.direct_title': 'Direct Contact',
    'contact.whatsapp_btn': 'Contact via WhatsApp',
    'contact.ig_btn': 'Contact via Instagram',
    'contact.form_name_ph': 'Name',
    'contact.form_email_ph': 'Email',
    'contact.form_msg_ph': 'Write your message here...',
    'contact.form_send_btn': 'Send Message',

    // Poster Page
    'poster.page_subtitle': 'Promotional Media',
    'poster.page_title': 'NgopiDuluu Posters & Flyers',

    // Search Modal
    'search.modal_title': 'Search Menu',
    'search.modal_ph': 'Search menu name...',
    'search.modal_hint': 'Type menu name, e.g.: <i>"Latte"</i>, <i>"Croissant"</i>, <i>"Tiramisu"</i>...',
    'search.modal_empty': 'No matching menu item found',

    // Footer
    'footer.tagline': '"Coffee First, Then Let Stories Flow."',
    'footer.desc': 'My modern coffee shop featuring authentic flavors, cozy ambiance, and warm friendly service.',
    'footer.desc_full': '"Coffee First, Then Let Stories Flow."<br>My modern coffee shop featuring authentic flavors, cozy ambiance, and warm friendly service.',
    'footer.title_links': 'Quick Links',
    'footer.title_hours': 'Operating Hours',
    'footer.title_location': 'Main Location',
    'footer.hours_days': 'Monday – Sunday',
    'footer.hours_open': '07:00 AM – 11:00 PM WIB',
    'footer.hours_holiday': 'Holidays',
    'footer.hours_holiday_open': 'Open as Usual',
    'footer.location_addr': 'Jl. Kopi Nusantara No. 88, Kebayoran Baru, South Jakarta, DKI Jakarta 12190',
    'footer.copyright': '© 2026 NgopiDuluu Coffee Shop — Project by Ditoo. All Rights Reserved.',
    'footer.subcopyright': 'Coffee First, Then Let Stories Flow',
    'back_to_top': 'Back to Top'
  }
};

const LanguageService = {
  getLang() {
    try {
      return localStorage.getItem(LANG_KEY) || 'id';
    } catch (e) {
      return 'id';
    }
  },

  setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
    this.applyLanguage(lang);
  },

  applyLanguage(lang) {
    const currentLang = lang || this.getLang();
    document.documentElement.lang = currentLang;

    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['id'];

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update innerHTML for elements with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders for elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // Update title attributes for elements with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.setAttribute('title', dict[key]);
      }
    });

    // Update src attributes for elements with data-i18n-src
    document.querySelectorAll('[data-i18n-src]').forEach((el) => {
      const key = el.getAttribute('data-i18n-src');
      if (dict[key] !== undefined) {
        el.src = dict[key];
      }
    });

    // Update alt attributes for elements with data-i18n-alt
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) {
        el.alt = dict[key];
      }
    });

    // Update switcher UI
    this.updateSwitcherUI(currentLang);

    // Notify other scripts
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: currentLang } }));
  },

  updateSwitcherUI(lang) {
    const isEn = lang === 'en';
    const flagEl = document.getElementById('current-lang-flag');
    const codeEl = document.getElementById('current-lang-code');

    const flagID = `<svg width="18" height="13" viewBox="0 0 640 480" style="border-radius:2px; vertical-align:middle; display:inline-block; box-shadow: 0 0 1px rgba(0,0,0,0.4);"><path fill="#e70011" d="M0 0h640v240H0z"/><path fill="#fff" d="M0 240h640v240H0z"/></svg>`;
    const flagEN = `<svg width="18" height="13" viewBox="0 0 640 480" style="border-radius:2px; vertical-align:middle; display:inline-block; box-shadow: 0 0 1px rgba(0,0,0,0.4);"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 245 184L565 0h75v55L395 240l245 185v55h-75L320 295 75 480H0v-55l245-185L0 55V0h75z"/><path fill="#C8102E" d="m424 288 216 163v29h-38L370 310l54-22zm-208 64L0 480v-29h38l232-171-54 71zM640 0v3L418 170l54 20L640 27v-27zM0 0v3l222 167-54 20L0 27V0z"/><path fill="#FFF" d="M250 0v480h140V0H250zM0 170v140h640V170H0z"/><path fill="#C8102E" d="M275 0v480h90V0h-90zM0 195v90h640v-90H0z"/></svg>`;

    if (flagEl) flagEl.innerHTML = isEn ? flagEN : flagID;
    if (codeEl) codeEl.textContent = isEn ? 'EN' : 'ID';

    // Update flag icons inside dropdown options & mobile drawer
    document.querySelectorAll('.lang-option, .mobile-lang-btn').forEach((opt) => {
      const optLang = opt.getAttribute('data-lang-opt');
      const flagSpan = opt.querySelector('.flag') || opt;
      if (optLang === 'id') {
        const spanFlag = opt.querySelector('.flag');
        if (spanFlag) spanFlag.innerHTML = flagID;
      } else if (optLang === 'en') {
        const spanFlag = opt.querySelector('.flag');
        if (spanFlag) spanFlag.innerHTML = flagEN;
      }
      opt.classList.toggle('active', optLang === lang);
    });
  },

  init() {
    const savedLang = this.getLang();
    this.applyLanguage(savedLang);

    // Toggle dropdown open/close
    const langBtn = document.getElementById('lang-toggle-btn');
    const langSwitcher = document.getElementById('lang-switcher');

    if (langBtn && langSwitcher) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('active');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
          langSwitcher.classList.remove('active');
        }
      });
    }

    // Handlers for language option clicks (desktop dropdown & mobile)
    document.addEventListener('click', (e) => {
      const optBtn = e.target.closest('[data-lang-opt]');
      if (optBtn) {
        const lang = optBtn.getAttribute('data-lang-opt');
        if (lang) {
          this.setLang(lang);
          if (langSwitcher) langSwitcher.classList.remove('active');
        }
      }
    });
  }
};

// Immediate early run for saved language attribute on html element
(function () {
  try {
    var l = localStorage.getItem('ngopiduluu_lang') || 'id';
    document.documentElement.lang = l;
  } catch (e) {}
})();

document.addEventListener('DOMContentLoaded', () => {
  LanguageService.init();
});
