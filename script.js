(function () {
  'use strict';

  /* ── Mobile nav ─────────────────────────────────────────── */
  var navToggle = document.getElementById('navToggle');
  var navMobile = document.getElementById('navMobile');
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      var open = navMobile.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
      navMobile.setAttribute('aria-hidden', !open);
    });
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navMobile.contains(e.target)) {
        navMobile.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ── Cookie banner ──────────────────────────────────────── */
  var banner = document.getElementById('cookieBanner');
  var accept = document.getElementById('cookieAccept');
  var reject = document.getElementById('cookieReject');
  var KEY = 'cf_consent';
  function closeBanner() {
    if (banner) { banner.classList.remove('is-visible'); banner.setAttribute('aria-hidden','true'); }
  }
  if (banner && !localStorage.getItem(KEY)) {
    setTimeout(function () { banner.classList.add('is-visible'); banner.setAttribute('aria-hidden','false'); }, 1000);
  }
  if (accept) accept.addEventListener('click', function () { localStorage.setItem(KEY,'accepted'); closeBanner(); });
  if (reject) reject.addEventListener('click', function () { localStorage.setItem(KEY,'rejected'); closeBanner(); });

  /* ── FAQ accordion ──────────────────────────────────────── */
  document.querySelectorAll('.faq__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq__item');
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq__item.is-open').forEach(function (el) {
        el.classList.remove('is-open');
        el.querySelector('.faq__q').setAttribute('aria-expanded','false');
      });
      if (!isOpen) { item.classList.add('is-open'); btn.setAttribute('aria-expanded','true'); }
    });
  });

  /* ── Contact form ────────────────────────────────────────── */
  var form    = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    });
  }

  /* ── Blog filter buttons ─────────────────────────────────── */
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var cat = btn.dataset.filter;
      document.querySelectorAll('.article-card[data-category]').forEach(function (card) {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
      });
    });
  });

  /* ── Smooth scroll ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── Year ────────────────────────────────────────────────── */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

})();