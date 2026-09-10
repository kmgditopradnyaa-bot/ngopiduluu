/* ==========================================================================
   NgopiDuluu — animations.js
   Script animasi terpusat. Di-load di semua halaman.
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------
     1. SCROLL REVEAL — data-reveal attribute
        Lebih andal dari data-aos karena tidak bergantung library
  -------------------------------------------------------- */
  function initScrollReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    // Jika browser tidak support IntersectionObserver, tampilkan semua sekaligus
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // hanya reveal sekali
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach(el => observer.observe(el));
  }

  // Izinkan elemen baru (mis. testimonial yang di-render ulang) untuk di-reveal lagi
  window.addEventListener('refreshScrollReveal', initScrollReveal);

  /* --------------------------------------------------------
     2. RESERVATION — SUCCESS MODAL
        Tampil saat form reservasi berhasil submit
  -------------------------------------------------------- */
  function initReservationModal() {
    const resForm = document.getElementById('reservation-form');
    if (!resForm) return;

    // Inject modal HTML ke body (sekali saja)
    if (!document.getElementById('res-success-overlay')) {
      document.body.insertAdjacentHTML('beforeend', `
        <!-- Reservation Success Modal -->
        <div class="res-success-overlay" id="res-success-overlay" role="dialog" aria-modal="true" aria-labelledby="res-success-title">
          <div class="res-success-modal">
            <div class="res-checkmark-wrapper">
              <div class="res-checkmark-circle">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div class="res-confetti">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            <h2 class="res-success-title" id="res-success-title">Reservasi Berhasil!</h2>
            <p class="res-success-subtitle">
              Meja Anda telah berhasil dipesan. Kami akan menyiapkan tempat terbaik untuk Anda!
            </p>
            <div class="res-success-details" id="res-success-details">
              <!-- diisi oleh JS -->
            </div>
            <button class="res-success-close-btn" id="res-success-close">
              Oke, Terima Kasih!
            </button>
          </div>
        </div>

        <!-- Meja Sudah Dibooking Modal -->
        <div class="res-booked-overlay" id="res-booked-overlay" role="alertdialog" aria-modal="true" aria-labelledby="res-booked-title">
          <div class="res-booked-modal">
            <div class="res-booked-icon-wrap">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h2 class="res-booked-title" id="res-booked-title">Meja Sudah Dipesan</h2>
            <p class="res-booked-desc" id="res-booked-desc">
              Maaf, meja untuk waktu yang kamu pilih sudah dipesan orang lain.
              Silakan pilih tanggal atau jam kedatangan yang berbeda.
            </p>
            <div class="res-booked-slots" id="res-booked-slots"></div>
            <button class="res-booked-close-btn" id="res-booked-close">
              Pilih Waktu Lain
            </button>
          </div>
        </div>
      `);

      // Tutup modal sukses
      document.getElementById('res-success-close').addEventListener('click', () => {
        closeModal('res-success-overlay');
      });
      document.getElementById('res-success-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal('res-success-overlay');
      });

      // Tutup modal booked
      document.getElementById('res-booked-close').addEventListener('click', () => {
        closeModal('res-booked-overlay');
        // Fokus kembali ke field tanggal agar user gampang ganti
        const dateField = document.getElementById('res-date');
        if (dateField) dateField.focus();
      });
      document.getElementById('res-booked-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal('res-booked-overlay');
      });

      // Tutup modal dengan ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal('res-success-overlay');
          closeModal('res-booked-overlay');
        }
      });
    }

    // -------------------------------------------------------
    // Simulasi slot yang sudah dipesan (demo data)
    // Di dunia nyata ini diambil dari backend/database
    // -------------------------------------------------------
    const bookedSlots = [
      { date: getTodayStr(), time: '10:00' },
      { date: getTodayStr(), time: '14:00' },
      { date: getTodayStr(), time: '18:00' },
    ];

    function getTodayStr() {
      return new Date().toISOString().split('T')[0];
    }

    function isSlotBooked(date, time) {
      // Normalisasi jam ke HH:MM
      const normalizedTime = time.substring(0, 5);
      return bookedSlots.some(slot => slot.date === date && slot.time === normalizedTime);
    }

    function formatDate(dateStr) {
      if (!dateStr) return '-';
      const [y, m, d] = dateStr.split('-');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      return `${d} ${months[parseInt(m, 10) - 1]} ${y}`;
    }

    function formatTime(timeStr) {
      if (!timeStr) return '-';
      return timeStr.substring(0, 5) + ' WIB';
    }

    // Intercept form submit
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = (document.getElementById('res-name')?.value  || '').trim();
      const contact = (document.getElementById('res-email')?.value || '').trim();
      const date    = document.getElementById('res-date')?.value  || '';
      const time    = document.getElementById('res-time')?.value  || '';
      const guests  = document.getElementById('res-guests')?.value || '1';

      // --- CEK apakah slot sudah dipesan ---
      if (isSlotBooked(date, time)) {
        // Tampilkan slot yang tersedia di tanggal yang sama
        const available = ['08:00','09:00','11:00','12:00','13:00','15:00','16:00','17:00','19:00','20:00','21:00']
          .filter(t => !isSlotBooked(date, t))
          .slice(0, 5);

        const slotsEl = document.getElementById('res-booked-slots');
        if (slotsEl) {
          slotsEl.innerHTML = `
            <strong>Jam tersedia pada ${formatDate(date)}:</strong>
            ${available.length
              ? available.map(t => `<span style="display:inline-block; margin:0.2rem 0.3rem 0 0; background:var(--bg-secondary); border-radius:6px; padding:0.25rem 0.6rem; font-weight:600; color:var(--text-main);">${t} WIB</span>`).join('')
              : '<em>Tidak ada slot tersedia untuk tanggal ini. Coba pilih tanggal lain.</em>'
            }
          `;
        }

        const descEl = document.getElementById('res-booked-desc');
        if (descEl) {
          descEl.textContent = `Maaf, meja untuk pukul ${formatTime(time)} pada ${formatDate(date)} sudah dipesan orang lain. Silakan pilih jam atau tanggal lain.`;
        }

        openModal('res-booked-overlay');
        return;
      }

      // --- SUKSES ---
      // Simpan booking ke array simulasi agar demo konsisten
      bookedSlots.push({ date, time: time.substring(0, 5) });

      const detailsEl = document.getElementById('res-success-details');
      if (detailsEl) {
        detailsEl.innerHTML = `
          <div class="res-success-detail-row">
            <strong>Nama</strong><span>${escapeHtml(name) || '-'}</span>
          </div>
          <div class="res-success-detail-row">
            <strong>Tanggal</strong><span>${formatDate(date)}</span>
          </div>
          <div class="res-success-detail-row">
            <strong>Pukul</strong><span>${formatTime(time)}</span>
          </div>
          <div class="res-success-detail-row">
            <strong>Tamu</strong><span>${guests} orang</span>
          </div>
        `;
      }

      openModal('res-success-overlay');
      resForm.reset();
    });
  }

  /* --------------------------------------------------------
     3. HELPER — buka / tutup modal
  -------------------------------------------------------- */
  function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Arahkan layar ke popup supaya user ga usah scroll manual
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function closeModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active');
    // Pulihkan scroll jika tidak ada modal lain aktif
    const anyActive = document.querySelector('.res-success-overlay.active, .res-booked-overlay.active');
    if (!anyActive) document.body.style.overflow = '';
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  }

  /* --------------------------------------------------------
     4. INIT semua saat DOM siap
  -------------------------------------------------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initScrollReveal();
    initReservationModal();
  }

})();
