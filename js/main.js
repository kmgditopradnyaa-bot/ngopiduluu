/* ==========================================================================
   NgopiDuluu - Master Application Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initNavbar();
  initIconTooltips();
  initTypingEffect();
  initStatsCounter();
  initBackToTop();
  initFAQAccordion();
  initForms();
  initCarousels();
  initTestimonials();
  highlightActiveNavLink();
  initHeroParallax();
});

/* Page transitions: class-based enter/exit animations */
function initPageTransitions() {
  // Smooth page enter/exit via classes on <html>
  // Durasi lebih singkat di layar kecil agar terasa ringan di HP
  const DURATION = window.innerWidth <= 768 ? 260 : 400; // ms - match CSS

  const docEl = document.documentElement;
  docEl.classList.add('page-transition');

  // Remove enter state after initial paint so fade-in is seamless
  requestAnimationFrame(() => requestAnimationFrame(() => {
    docEl.classList.remove('page-enter');
    setTimeout(() => {
      docEl.classList.remove('page-transition');
    }, DURATION);
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
    docEl.classList.add('page-transition');
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

  const phrasesDict = {
    id: [
      "TENANG.",
      "FOKUS.",
      "KARYA.",
      "NIKMATI."
    ],
    en: [
      "CALM.",
      "FOCUS.",
      "CREATE.",
      "ENJOY."
    ]
  };

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function type() {
    const lang = (typeof LanguageService !== 'undefined' && LanguageService.getLang) ? LanguageService.getLang() : 'id';
    const phrases = phrasesDict[lang] || phrasesDict['id'];
    const currentPhrase = phrases[phraseIdx % phrases.length];
    
    if (isDeleting) {
      typingEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 45;
    } else {
      typingEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIdx >= currentPhrase.length) {
      typeSpeed = 2200; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx <= 0) {
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

/* Back To Top */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 150;
    backToTopBtn.classList.toggle('visible', nearBottom);
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

/* Forms (Reservation & Testimonial) */
function initForms() {
  // Reservasi form ditangani oleh js/animations.js (modal sukses + cek meja sudah dipesan)

  const emailContactForm = document.getElementById('contact-form');
  if (emailContactForm) {
    const status = document.getElementById('email-form-status');
    const submitButton = emailContactForm.querySelector('button[type="submit"]');
    const emailConfig = window.EMAILJS_CONFIG;

    emailContactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!window.emailjs || !emailConfig || Object.values(emailConfig).some(value => value.startsWith('YOUR_'))) {
        if (status) {
          status.textContent = 'EmailJS belum dikonfigurasi. Isi Service ID, Template ID, dan Public Key di js/emailjs-config.js.';
          status.className = 'show error';
        }
        return;
      }

      const originalLabel = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="btn-loader"></span><span class="btn-text">Mengirim...</span>';
      submitButton.classList.add('sending');
      if (status) { status.textContent = ''; status.className = ''; }

      try {
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
          name,
          email,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
          user_name: name,
          user_email: email
        }, {
          publicKey: emailConfig.publicKey
        });

        emailContactForm.reset();
        if (status) {
          status.textContent = 'Pesan berhasil dikirim — chat telah terkirim!';
          status.className = 'show success';
        }
      } catch (error) {
        if (status) {
          status.textContent = `Pesan belum terkirim: ${error.text || error.message || 'periksa koneksi internet lalu coba lagi.'}`;
          status.className = 'show error';
        }
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalLabel;
        submitButton.classList.remove('sending');
      }
    });
  }

}



const testimonials = [
  {
    name: "Andini Putri",
    message: "Tempat paling favorit buat nugas kelompok! Kopi Iced Spanish Latte-nya beneran nagih, tempatnya super cozy dan bersih.",
    mood: "😊"
  },
  {
    name: "Raka",
    message: "Suasananya cukup nyaman untuk nongkrong.",
    mood: "😐"
  },
  {
    name: "Bima Raga",
    message: "Pelayanan ramah banget, Butter Croissant hangatnya pas disajikan bareng Cappuccino panas.",
    mood: "😊"
  },
  {
    name: "Sinta",
    message: "Pilihan menu masih bisa ditambah.",
    mood: "😞"
  },
  {
    name: "Dimas Prasetyo",
    message: "Lumayan sering mampir ke sini kalau lagi pengen ngopi setelah pulang kerja. Tempatnya enak buat santai.",
    mood: "😊"
  },
  {
    name: "Lia Maharani",
    message: "Anehnya, hujan turun dan mau ke rumah, eh malah betah nganu pula. Rasanya kayak lagi di tempat lain, nyaman banget!",
    mood: "😍"
  },
  {
    name: "Fajar Nugroho",
    message: "Wifi-nya kenceng kenceng abis, bisa ngulik sambil ngopi tanpa lag. Highly recommended!",
    mood: "😊"
  },
  {
    name: "Maya Sisca",
    message: "Coba Tropical Smoothie Bowl di sini, segernya bikin ketagihan. Porsinya juah, worth it!",
    mood: "😋"
  },
  {
    name: "Iqbal Rizky",
    message: "Akhirnya nemu tempat ngantor remote yang asik. Stabilitas listrik mantap dan kopi tetap hangat.",
    mood: "😊"
  },
  {
    name: "Ayu Wulan",
    message: "Staffnya sering ngeluarin senyum manis, bikin customer service terasa hangat. Mau nggak mau aja betah datang lagi!",
    mood: "😊"
  }
];


function getMoodLabel(mood) {
  const isEnglish = typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en';
  switch (mood) {
    case '😊':
      return isEnglish ? 'Senang / Happy' : 'Senang';
    case '😐':
      return isEnglish ? 'Biasa Saja / Neutral' : 'Biasa Saja';
    case '😞':
      return isEnglish ? 'Kurang Puas / Disappointed' : 'Kurang Puas';
    case '😍':
      return isEnglish ? 'Cinta! / In Love' : 'Cinta!';
    case '😋':
      return isEnglish ? 'Nikmat! / Delicious' : 'Nikmat!';
    default:
      return '';
  }
}

/* Apa Kata Mereka? - Testimonials Controller */
function initTestimonials() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('testi-prev-btn');
  const nextBtn = document.getElementById('testi-next-btn');
  const form = document.getElementById('testimonial-form');

  // Handle sharing experience submission
  if (form) {
    const nameInput = form.querySelector('#testimonial-name');
    const input = form.querySelector('#testimonial-input');
    const picker = form.querySelector('#testimonial-mood-picker');

    // Pilih mood (radio behavior via tombol)
    let chosenMood = '';
    if (picker) {
      picker.querySelectorAll('.testimonial-mood-option').forEach((btn) => {
        btn.addEventListener('click', () => {
          picker.querySelectorAll('.testimonial-mood-option').forEach((b) => {
            b.classList.remove('selected');
            b.setAttribute('aria-checked', 'false');
          });
          btn.classList.add('selected');
          btn.setAttribute('aria-checked', 'true');
          chosenMood = btn.getAttribute('data-mood');
        });
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (form.querySelector('.testimonial-form-note')) {
        form.querySelector('.testimonial-form-note').remove();
      }

      const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : '';
      const msg  = (input && input.value.trim()) ? input.value.trim() : '';
      const isEn = typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en';

      const note = document.createElement('p');
      note.className = 'testimonial-form-note';
      note.setAttribute('role', 'status');

      if (!name || !chosenMood || !msg) {
        note.textContent = isEn
          ? 'Please fill in your name, reaction, and experience.'
          : 'Lengkapi nama, reaksi, dan pengalamanmu terlebih dahulu.';
        form.appendChild(note);
        return;
      }

      testimonials.unshift({ name: name, message: msg, mood: chosenMood });
      if (track && typeof renderTestimonialCards === 'function') {
        renderTestimonialCards();
      }
      if (input) input.value = '';
      if (nameInput) nameInput.value = '';
      if (picker) {
        chosenMood = '';
        picker.querySelectorAll('.testimonial-mood-option').forEach((b) => {
          b.classList.remove('selected');
          b.setAttribute('aria-checked', 'false');
        });
      }
      note.textContent = isEn
        ? 'Thank you! Your testimonial has been received.'
        : 'Terima kasih! Testimoni kamu sudah kami terima.';
      form.appendChild(note);
    });
  }

  if (!track) return;

  function renderTestimonialCards() {
    track.innerHTML = '';

    // Duplikat kartu 2x supaya animasi marquee bisa loop seamless
    testimonials.forEach((item, index) => {
      track.appendChild(createCard(item, index));
    });
    testimonials.forEach((item, index) => {
      track.appendChild(createCard(item, index));
    });

    // Re-observe kartu baru setelah di-render ulang
    window.dispatchEvent(new Event('refreshScrollReveal'));
  }

  function createCard(item, index) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.setAttribute('data-reveal', 'fade-up');
    card.setAttribute('data-reveal-delay', (index * 80).toString());

    const moodLabel = getMoodLabel(item.mood);
    const isEn = typeof LanguageService !== 'undefined' && LanguageService.getLang() === 'en';

    // Card Header
    const headerEl = document.createElement('div');
    headerEl.className = 'testimonial-card-header';

    // Mood Badge (Emoji + Mood Tag)
    const moodBadge = document.createElement('div');
    moodBadge.className = 'testimonial-mood-badge';

    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'testimonial-emoji';
    emojiSpan.setAttribute('role', 'img');
    emojiSpan.setAttribute('aria-label', moodLabel || 'Mood');
    emojiSpan.textContent = item.mood || '😊';

    const moodTag = document.createElement('span');
    moodTag.className = 'testimonial-mood-tag';
    moodTag.textContent = moodLabel;

    moodBadge.appendChild(emojiSpan);
    moodBadge.appendChild(moodTag);
    headerEl.appendChild(moodBadge);

    // Quote Decoration
    const quoteIcon = document.createElement('div');
    quoteIcon.className = 'testimonial-quote-icon';
    quoteIcon.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" opacity="0.35">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    `;
    headerEl.appendChild(quoteIcon);

    // Testimonial Message
    const messageEl = document.createElement('p');
    messageEl.className = 'testimonial-message';
    messageEl.textContent = `"${item.message}"`;

    // Author Name
    const authorEl = document.createElement('div');
    authorEl.className = 'testimonial-author';
    authorEl.textContent = `${isEn ? 'From' : 'Dari'} : ${item.name}`;

    card.appendChild(headerEl);
    card.appendChild(messageEl);
    card.appendChild(authorEl);

    return card;
  }

  renderTestimonialCards();

  // Re-render when language changes to update mood labels
  window.addEventListener('languageChange', () => {
    renderTestimonialCards();
  });

  // Carousel Next/Prev smooth scroll controls
  if (prevBtn && nextBtn) {
    let resumeTimer;
    nextBtn.addEventListener('click', () => {
      track.style.animationPlayState = 'paused';
      const card = track.querySelector('.testimonial-card');
      const cardWidth = card ? card.offsetWidth + 24 : 320;
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { track.style.animationPlayState = 'running'; }, 2000);
    });

    prevBtn.addEventListener('click', () => {
      track.style.animationPlayState = 'paused';
      const card = track.querySelector('.testimonial-card');
      const cardWidth = card ? card.offsetWidth + 24 : 320;
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { track.style.animationPlayState = 'running'; }, 2000);
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
      <span style="font-size:0.8rem;">Terima kasih sudah memesan di NgopiDuluu</span>
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
