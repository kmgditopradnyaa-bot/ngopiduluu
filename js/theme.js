/* ==========================================================================
   NgopiDuluu - Dark Mode Controller
   Menangani sakelar tema, penyimpanan preferensi, dan animasi transisi.
   ========================================================================== */

(function () {
  const THEME_KEY = 'ngopiduluu_theme';
  const root = document.documentElement;

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || 'light';
    } catch (e) {
      return 'light';
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
      if (typeof StorageService !== 'undefined' && StorageService.setTheme) {
        StorageService.setTheme(theme);
      }
    } catch (e) { /* localStorage tidak tersedia */ }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.classList.toggle('is-dark', isDark);
    });
  }

  function triggerTransition() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.body.classList.remove('theme-transition');
    void document.body.offsetWidth; // restart animation
    document.body.classList.add('theme-transition');
  }

  function initThemeToggle() {
    const buttons = document.querySelectorAll('[data-theme-toggle]');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        saveTheme(next);
        triggerTransition();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getSavedTheme());
    initThemeToggle();
  });
})();