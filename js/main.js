/* Zo-Hotel — small progressive enhancements, no dependencies */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mark the document as script-enabled. Until this runs, .reveal elements
     stay fully visible, so a JS failure can never blank the page. */
  document.documentElement.classList.add('js');

  /* --- sticky header ------------------------------------------------- */
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- mobile nav ---------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      if (!open) header.classList.add('is-stuck');
      else if (window.scrollY <= 40) header.classList.remove('is-stuck');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  /* --- reveal on scroll ---------------------------------------------- */
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* --- hero rain ------------------------------------------------------ */
  var rain = document.querySelector('.rain');
  if (rain && !reduced) {
    var drops = 60;
    var html = '';
    for (var i = 0; i < drops; i++) {
      var left = (Math.random() * 105).toFixed(2);
      var dur = (0.55 + Math.random() * 0.75).toFixed(2);
      var delay = (Math.random() * -3).toFixed(2);
      var op = (0.2 + Math.random() * 0.7).toFixed(2);
      var h = (7 + Math.random() * 13).toFixed(0);
      html += '<i style="left:' + left + '%;height:' + h + 'vh;animation-duration:' +
              dur + 's;animation-delay:' + delay + 's;opacity:' + op + '"></i>';
    }
    rain.innerHTML = html;
  }
}());
