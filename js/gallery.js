/* ==========================================================================
   NgopiDuluu - Gallery Lightbox & Filter Engine
   ========================================================================== */

const GALLERY_IMAGES = [
  { id: 1, category: 'interior', title: 'Suasana Workspace Cozy', caption: 'Sudut tenang dengan pencahayaan hangat untuk bekerja & santai.', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80' },
  { id: 2, category: 'coffee', title: 'Artisan Latte Art', caption: 'Karya seni espresso & microfoam susu persembahan head barista.', url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=80' },
  { id: 3, category: 'ambience', title: 'Outdoor Garden Terrace', caption: 'Area teras hijau asri berangin sepoi-sepoi.', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80' },
  { id: 4, category: 'pastry', title: 'Fresh Baked Croissant', caption: 'Pastry mentega renyah yang dipanggang segar setiap pagi.', url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80' },
  { id: 5, category: 'coffee', title: 'Manual Brew Bar', caption: 'Proses penyeduhan pour-over V60 presisi dengan biji kopi single origin.', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80' },
  { id: 6, category: 'interior', title: 'Modern Industrial Counter', caption: 'Desain interior modern minimalis bertema kayu & kontemporer.', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80' },
  { id: 7, category: 'ambience', title: 'Barista Workshop & Tasting', caption: 'Sesi cupping & pelatihan meracik kopi bersama pelanggan.', url: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1000&q=80' },
  { id: 8, category: 'coffee', title: 'Iced Coffee Selection', caption: 'Kesegaran sajian es kopi signature pelipur dahaga.', url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=80' },
  { id: 9, category: 'pastry', title: 'Artisan Cheesecake & Tiramisu', caption: 'Pilihan kue penutup lezat dengan manis yang pas.', url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=80' }
];

let currentLightboxIndex = 0;
let activeGalleryCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderGalleryGrid();
  initGalleryFilterButtons();

  // Lightbox Controls
  const lightboxModal = document.getElementById('lightbox-modal');
  const closeLightboxBtn = document.getElementById('close-lightbox-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (closeLightboxBtn && lightboxModal) {
    closeLightboxBtn.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));
});

function initGalleryFilterButtons() {
  const filterGroup = document.getElementById('gallery-filter-group');
  if (!filterGroup) return;

  const buttons = Array.from(filterGroup.querySelectorAll('.gallery-pill'));
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const cat = button.dataset.cat || 'all';
      filterGalleryCategory(cat, button);
    });
  });
}

function getFilteredGalleryImages() {
  return GALLERY_IMAGES.filter(img =>
    activeGalleryCategory === 'all' || img.category === activeGalleryCategory
  );
}

function renderGalleryGrid() {
  const container = document.getElementById('gallery-grid-container');
  if (!container) return;

  const filtered = getFilteredGalleryImages();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Tidak ada foto untuk kategori ini. Coba pilih kategori lain atau kembali ke Semua Foto.</p>
      </div>
    `;
    return;
  }

  const html = filtered.map((img, index) => `
      <div class="gallery-item" data-index="${index}" data-aos="zoom-in">
        <img src="${img.url}" alt="${img.title}">
        <div class="gallery-overlay">
          <h4>${img.title}</h4>
          <p>${img.caption}</p>
        </div>
      </div>
    `).join('');

  container.innerHTML = html;

  const items = container.querySelectorAll('.gallery-item');
  items.forEach(item => {
    const overlay = item.querySelector('.gallery-overlay');
    const img = item.querySelector('img');
    const index = Number(item.dataset.index);

    item.addEventListener('click', () => {
      openLightbox(index);
    });

    item.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1';
      img.style.transform = 'scale(1.08)';
    });
    item.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
      img.style.transform = 'scale(1)';
    });

    // AOS-like reveals disabled: do not add 'aos-animate'
  });
}

function filterGalleryCategory(cat, btnEl) {
  activeGalleryCategory = cat;
  currentLightboxIndex = 0;

  const pills = document.querySelectorAll('.gallery-pill');
  pills.forEach(p => {
    const isActive = p.dataset.cat === cat;
    p.classList.toggle('active', isActive);
    p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  renderGalleryGrid();
}

function openLightbox(index) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  currentLightboxIndex = index;
  updateLightboxContent();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function navigateLightbox(dir) {
  const filtered = getFilteredGalleryImages();
  if (filtered.length === 0) return;

  currentLightboxIndex = (currentLightboxIndex + dir + filtered.length) % filtered.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');

  const filtered = getFilteredGalleryImages();
  if (filtered.length === 0) return;

  const current = filtered[currentLightboxIndex] || filtered[0];

  if (current) {
    if (imgEl) imgEl.src = current.url;
    if (titleEl) titleEl.textContent = current.title;
    if (captionEl) captionEl.textContent = current.caption;
  }
}

