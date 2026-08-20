/* ==========================================================================
   NgopiDuluu - Real-Time Promo Countdown Timer Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Store target end time in localStorage so it stays consistent across refreshes
  let promoEndTime = localStorage.getItem('ngopiduluu_promo_end');
  const now = Date.now();
  
  // Set promo end to 2 days 14 hours from first visit, or reset if expired
  if (!promoEndTime || parseInt(promoEndTime, 10) <= now) {
    promoEndTime = now + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (35 * 60 * 1000);
    localStorage.setItem('ngopiduluu_promo_end', promoEndTime.toString());
  } else {
    promoEndTime = parseInt(promoEndTime, 10);
  }

  function updateCountdowns() {
    const currentTime = Date.now();
    const distance = promoEndTime - currentTime;

    const daysEls = document.querySelectorAll('.timer-days, #timer-days');
    const hoursEls = document.querySelectorAll('.timer-hours, #timer-hours');
    const minutesEls = document.querySelectorAll('.timer-minutes, #timer-minutes');
    const secondsEls = document.querySelectorAll('.timer-seconds, #timer-seconds');

    if (distance <= 0) {
      daysEls.forEach(el => el.textContent = '00');
      hoursEls.forEach(el => el.textContent = '00');
      minutesEls.forEach(el => el.textContent = '00');
      secondsEls.forEach(el => el.textContent = '00');
      
      document.querySelectorAll('.promo-status-text').forEach(el => {
        el.textContent = 'PROMO BERAKHIR';
      });
      return;
    }

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

  updateCountdowns();
  setInterval(updateCountdowns, 1000);
});
