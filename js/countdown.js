/* ==========================================================================
   NgopiDuluu - Real-Time Rotating Promo Countdown Timer Engine
   Ketika waktu promo habis, otomatis lanjut ke promo berikutnya.
   Hitung mundur real-time, aman dari race condition.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // =============================================================
  // DAFTAR PROMO BERPINDAH (1 minggu masing-masing)
  // =============================================================
  const allPromos = [
    {
      id: 'hazelnut-latte',
      title: 'Iced Hazelnut Latte',
      desc: 'Kopi susu dingin dengan sentuhan rasa kacang hazelnut yang harum dan nikmat. Rasakan paduan sempurna antara espresso, susu creamy, dan sirup hazelnut pilihan.',
      priceCurrent: 'Rp 26.400',
      priceOld: 'Rp 33.000',
      badge: 'Diskon 20%',
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwY3VwJTIwc3RlYW0lMjBjb3p5fGVufDB8fDB8fHwwh',
      durationMinutes: 10080  // 1 minggu penuh (7 hari)
    },
    {
      id: 'caramel-brew',
      title: 'Caramel Macchiato',
      desc: 'Espresso panas dengan paduan gula karamel manis dan susu lembut. Nikmat untuk menemani momen kerja atau nugas Anda.',
      priceCurrent: 'Rp 28.000',
      priceOld: 'Rp 35.000',
      badge: 'Diskon 20%',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycmFtZWwlMjBtY2hjaWF0b3xlbnwwfDB8fHww',
      durationMinutes: 10080
    },
    {
      id: 'matcha-frappe',
      title: 'Matcha Frappe',
      desc: 'Frappe matcha creamy dengan topping whipped cream dan gerusan matcha asli. Sensasi sehat dan menenangkan untuk harimu.',
      priceCurrent: 'Rp 32.000',
      priceOld: 'Rp 40.000',
      badge: 'Diskon 20%',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWF0Y2hhJTIwbGF0dGV8ZW58MHwwfDB8fHww',
      durationMinutes: 10080
    }
  ];

  // =============================================================
  // INISIALISASI STATUS PROMO (dari localStorage agar konsisten)
  // =============================================================
  let state = {
    index: 0,
    end: 0
  };

  try {
    const saved = localStorage.getItem('ngopiduluu_promo_state');
    if (saved) state = JSON.parse(saved);
  } catch (e) {
    state = { index: 0, end: 0 };
  }

  // Validasi index
  if (!state.index || state.index >= allPromos.length) state.index = 0;

  // Jika promo belum punya waktu end / sudah expired, mulai promo saat ini
  const now = Date.now();
  if (!state.end || state.end <= now) {
    state.end = now + allPromos[state.index].durationMinutes * 60 * 1000;
  }

  function saveState() {
    try {
      localStorage.setItem('ngopiduluu_promo_state', JSON.stringify(state));
    } catch (e) { /* storage penuh / tidak tersedia */ }
  }

  // =============================================================
  // RENDER PROMO ke HTML
  // =============================================================
  function applyPromo(promo) {
    document.querySelectorAll('.special-section').forEach(section => {
      const title = section.querySelector('h2.promo-title');
      const desc = section.querySelector('.special-content p');
      const priceCur = section.querySelector('.price-current');
      const priceOld = section.querySelector('.price-old');
      const badge = section.querySelector('.badge-promo');
      const img = section.querySelector('.special-img');

      if (title) title.textContent = promo.title;
      if (desc) desc.textContent = promo.desc;
      if (priceCur) priceCur.textContent = promo.priceCurrent;
      if (priceOld) priceOld.textContent = promo.priceOld;
      if (badge) badge.textContent = promo.badge;
      if (img) {
        img.src = promo.image;
        img.alt = promo.title + ' Promo';
        img.classList.add('promo-fade');
        setTimeout(() => img.classList.remove('promo-fade'), 400);
      }
    });
  }

  function animatePromoChange() {
    // Animasi hanya gambar biar timer display tidak terpengaruh
    document.querySelectorAll('.special-img').forEach(img => {
      img.classList.add('promo-fade');
      setTimeout(() => img.classList.remove('promo-fade'), 400);
    });
  }

  // =============================================================
  // COUNTDOWN — dijalankan setiap 1 detik oleh setInterval
  // =============================================================
  const daysEls = document.querySelectorAll('.timer-days');
  const hoursEls = document.querySelectorAll('.timer-hours');
  const minutesEls = document.querySelectorAll('.timer-minutes');
  const secondsEls = document.querySelectorAll('.timer-seconds');

  function updateCountdowns() {
    const currentTime = Date.now();
    let distance = state.end - currentTime;

    // Jika promo habis → langsung ganti ke promo berikutnya
    if (distance <= 0) {
      state.index = (state.index + 1) % allPromos.length;
      state.end = currentTime + allPromos[state.index].durationMinutes * 60 * 1000;
      saveState();
      applyPromo(allPromos[state.index]);
      animatePromoChange();
      distance = state.end - currentTime; // hitung ulang untuk promo baru
    }

    // Hitung hari/jam/menit/detik dari distance yang valid
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dStr = String(days).padStart(2, '0');
    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');

    daysEls.forEach(el => el.textContent = dStr);
    hoursEls.forEach(el => el.textContent = hStr);
    minutesEls.forEach(el => el.textContent = mStr);
    secondsEls.forEach(el => el.textContent = sStr);
  }

  // =============================================================
  // INIT
  // =============================================================
  saveState();
  applyPromo(allPromos[state.index]);
  updateCountdowns();
  setInterval(updateCountdowns, 1000);
});
