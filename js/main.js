/* ==========================================================================
   NgopiDuluu - Master Application Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initNavbar();
  initIconTooltips();
  initTypingEffect();
  initStatsCounter();
  initScrollProgressBar();
  initBackToTop();
  initFAQAccordion();
  initForms();
  initCarousels();
  highlightActiveNavLink();
  initHeroParallax();
});

/* Page transitions: class-based enter/exit animations */
function initPageTransitions() {
  // Smooth page enter/exit via classes on <html>
  // Durasi lebih singkat di layar kecil agar terasa ringan di HP
  const DURATION = window.innerWidth <= 768 ? 300 : 700; // ms - match CSS

  const docEl = document.documentElement;
  docEl.classList.add('page-transition');

  // Remove enter state after initial paint so fade-in is seamless
  requestAnimationFrame(() => requestAnimationFrame(() => {
    docEl.classList.remove('page-enter');
  }));

  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;

    // Ignore special links
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    // Only handle same-origin navigation
    let url;
    try { url = new URL(href, location.href); } catch (err) { return; }
    if (url.origin !== location.origin) return;

    e.preventDefault();

    // Trigger exit animation then navigate
    docEl.classList.add('page-exit');
    setTimeout(() => { window.location.href = url.href; }, DURATION);
  });
}

/* Navbar & Mobile Drawer */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  function toggleMobileNav() {
    hamburgerBtn.classList.toggle('active');
    mobileDrawer.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileDrawer.classList.contains('active') ? 'hidden' : '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMobileNav);

  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('active')) toggleMobileNav();
    });
  });
}

function initIconTooltips() {
  const iconButtons = document.querySelectorAll('.icon-btn');

  iconButtons.forEach((button) => {
    const tooltipText = button.getAttribute('title');
    if (!tooltipText) return;

    const label = tooltipText.trim();
    button.setAttribute('data-tooltip', label);
    button.removeAttribute('title');

    if (!button.getAttribute('aria-label')) {
      button.setAttribute('aria-label', label);
    }
  });
}

/* Typing Effect */
function initTypingEffect() {
  const typingEl = document.getElementById('typing-element');
  if (!typingEl) return;

  const phrases = [
    "Ngopi Dulu, Baru Lanjut Cerita.",
    "Nikmati Setiap Tetes Kebahagiaan.",
    "Aroma Kopi Murni Pilihan Terbaik.",
    "Tempat Nyaman Inspirasi Tiada Henti."
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      typingEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 45;
    } else {
      typingEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typeSpeed = 2200; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* Statistics Counter Animation */
function initStatsCounter() {
  const statsSection = document.getElementById('stats-section');
  if (!statsSection) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);

  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      const prefix = counter.getAttribute('data-prefix') || '';
      let count = 0;
      const step = Math.max(1, Math.ceil(target / 60));

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = prefix + target.toLocaleString('id-ID') + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = prefix + count.toLocaleString('id-ID') + suffix;
        }
      }, 25);
    });
  }
}

/* Scroll Progress Bar */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

/* Back To Top */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Scroll Reveal animations (data-aos) */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* FAQ Accordion */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

/* Forms (Reservation, Newsletter, & Testimonial) */
function initForms() {
  const resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('res-name').value;
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;
      
      showToast(`🎉 Reservasi berhasil untuk ${name} pada ${date} pukul ${time}! Kami tunggu kedatangannya.`);
      resForm.reset();
    });
  }

  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsForm.querySelector('input[type="email"]').value;
      showToast(`📧 Terima kasih! ${email} telah terdaftar dalam buletin promo NgopiDuluu.`);
      newsForm.reset();
    });
  }

  const testiForm = document.getElementById('testimonial-form');
  if (testiForm) {
    testiForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('testi-name').value;
      const role = document.getElementById('testi-role').value;
      const ratingVal = parseInt(document.getElementById('testi-rating').value, 10);
      const message = document.getElementById('testi-message').value;

      const stars = '★'.repeat(ratingVal) + '☆'.repeat(5 - ratingVal);

      const grid = document.getElementById('testimonials-grid');
      if (grid) {
        const newCard = document.createElement('div');
        newCard.className = 'why-card';
        newCard.setAttribute('data-aos', 'fade-up');
        newCard.innerHTML = `
          <div class="testimonial-stars">${stars}</div>
          <p style="font-style:italic; color:var(--text-muted); margin-bottom:1.2rem;">"${message}"</p>
          <h4 style="font-family:var(--font-body); font-weight:700;">${name}</h4>
          <span style="font-size:0.8rem; color:var(--text-light);">${role}</span>
        `;
        grid.prepend(newCard);
      }

      showToast(`⭐ Terima kasih ${name}! Testimoni Anda berhasil dikirim dan tampil di atas.`);
      testiForm.reset();
    });
  }
}

/* Carousels */
function initCarousels() {
  // Best Seller Track
  const track = document.getElementById('bestseller-track');
  const prevBtn = document.getElementById('bs-prev-btn');
  const nextBtn = document.getElementById('bs-next-btn');

  if (track && prevBtn && nextBtn) {
    let scrollPos = 0;
    const cardWidth = 320;

    nextBtn.addEventListener('click', () => {
      scrollPos = Math.min(scrollPos + cardWidth, track.scrollWidth - track.clientWidth);
      track.scrollTo({ left: scrollPos, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      scrollPos = Math.max(scrollPos - cardWidth, 0);
      track.scrollTo({ left: scrollPos, behavior: 'smooth' });
    });
  }
}

/* Toast System */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* Order Success Toast - Tampilan khusus untuk konfirmasi pesanan */
function showOrderSuccessToast(itemCount, orderTotal) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const formattedTotal = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(orderTotal);

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `
    border-left-color: #27AE60;
    max-width: 340px;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  `;
  toast.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.6rem; font-size:1rem; font-weight:700;">
      <span>✅</span>
      <span>Pesanan Berhasil Dibuat!</span>
    </div>
    <div style="font-size:0.85rem; opacity:0.88; line-height:1.5; padding-left:1.6rem;">
      ${itemCount} item · ${formattedTotal}<br>
      <span style="font-size:0.8rem;">Terima kasih sudah memesan di NgopiDuluu ☕</span>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

/* Highlight Active Nav Link */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
  
  // Set initial active state based on current page
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else if (!linkHref.startsWith('#')) {
      link.classList.remove('active');
    }
  });

  // For same-page hash links (e.g. #testimonials), use IntersectionObserver
  const hashLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav-links a[href^="#"]');
  if (hashLinks.length === 0) return;

  const sections = [];
  hashLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) sections.push({ id: targetId, el: section });
  });

  if (sections.length === 0) return;

  // Track which section is currently in view
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === '#' + activeId) {
            link.classList.add('active');
          } else if (href.startsWith('#')) {
            link.classList.remove('active');
          }
          // Also remove 'active' from the Home/index link when a hash section is active
          if (href === 'index.html' || href === currentPath) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });

  sections.forEach(s => sectionObserver.observe(s.el));

  // Re-activate Home link when scrolled to top
  window.addEventListener('scroll', () => {
    const isAtTop = window.scrollY < 300;
    const anyHashActive = Array.from(document.querySelectorAll('.nav-links a[href^="#"]')).some(l => l.classList.contains('active'));
    
    if (isAtTop && !anyHashActive) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html' || (currentPath === '' && href === 'index.html')) {
          link.classList.add('active');
        }
      });
    }
  });
}

/* Hero Image Parallax - subtle mouse-tracking depth effect (desktop only) */
function initHeroParallax() {
  const wrapper = document.getElementById('hero-parallax');
  if (!wrapper) return;

  const img = wrapper.querySelector('.hero-img');
  const backdrop = wrapper.querySelector('.hero-image-backdrop');
  if (!img) return;

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) return;

  // Skip on touch devices (no cursor)
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (isTouchDevice) return;

  // Also skip on small screens (mobile width)
  if (window.innerWidth <= 768) return;

  const MAX_OFFSET = 12; // px - very subtle movement
  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  let rafId = null;

  // Smooth lerp animation loop
  function animate() {
    // Ease towards target (lerp factor 0.08 = very smooth)
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    // Apply transform to image
    img.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;

    // Apply a very slight counter-movement to backdrop for depth
    if (backdrop) {
      backdrop.style.transform = `rotate(4deg) translate(${(currentX * -0.3).toFixed(2)}px, ${(currentY * -0.3).toFixed(2)}px)`;
    }

    // Keep animating if not at rest
    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      rafId = requestAnimationFrame(animate);
    } else {
      rafId = null;
    }
  }

  function startAnimation() {
    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  }

  // Track mouse over the hero section (not just the image, for wider detection)
  const heroSection = wrapper.closest('.hero') || wrapper;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    // Calculate mouse position relative to center of hero (range: -1 to 1)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relX = (e.clientX - centerX) / (rect.width / 2);
    const relY = (e.clientY - centerY) / (rect.height / 2);

    // Clamp and apply max offset
    targetX = Math.max(-1, Math.min(1, relX)) * MAX_OFFSET;
    targetY = Math.max(-1, Math.min(1, relY)) * MAX_OFFSET;

    startAnimation();
  });

  // Reset to center when mouse leaves the hero
  heroSection.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    startAnimation();
  });

  // Handle resize — disable if window shrinks to mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      targetX = 0;
      targetY = 0;
      img.style.transform = '';
      if (backdrop) backdrop.style.transform = 'rotate(4deg)';
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
  });
}
