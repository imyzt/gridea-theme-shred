/* author: imyzt */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.body;

  // section rail active state
  var railLinks = document.querySelectorAll('.pf-rail__item[href^="#"]');
  if (railLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    railLinks.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      if (id) map[id] = a;
    });
    var ioRail = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = map[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          railLinks.forEach(function (el) { el.classList.remove('is-active'); });
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) ioRail.observe(el);
    });
  }

  if (!body || !body.classList.contains('shred-motion') || reduce) {
    if (body) body.classList.add('is-ready');
    return;
  }

  function reveal(el) {
    el.classList.add('is-in');
  }

  function boot() {
    body.classList.add('is-ready');
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-shred-item]'));
    if (!('IntersectionObserver' in window)) {
      items.forEach(reveal);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el, idx) {
      if (!el.style.getPropertyValue('--i')) {
        el.style.setProperty('--i', String(Math.min(idx, 12)));
      }
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
