(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('[data-reveal]').forEach(function (item) {
      if (reduce || !('IntersectionObserver' in window)) {
        item.classList.add('is-visible');
        return;
      }
      var observer = new IntersectionObserver(function (entries, instance) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            instance.unobserve(entry.target);
          }
        });
      }, { threshold: .16, rootMargin: '0px 0px -40px' });
      observer.observe(item);
    });

    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      if (reduce) return;
      card.addEventListener('pointermove', function (event) {
        var r = card.getBoundingClientRect();
        var x = ((event.clientX - r.left) / r.width - .5) * 8;
        var y = ((event.clientY - r.top) / r.height - .5) * -8;
        card.style.transform = 'perspective(700px) rotateX(' + y + 'deg) rotateY(' + x + 'deg) translateY(-5px)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    });

    document.querySelectorAll('[data-magnetic]').forEach(function (button) {
      if (reduce) return;
      button.addEventListener('pointermove', function (event) {
        var r = button.getBoundingClientRect();
        var x = (event.clientX - r.left - r.width / 2) * .12;
        var y = (event.clientY - r.top - r.height / 2) * .12;
        button.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });
      button.addEventListener('pointerleave', function () { button.style.transform = ''; });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        var target = document.querySelector(link.getAttribute('href'));
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
        }
      });
    });
  });
})();
