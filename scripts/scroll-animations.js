(function(){
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.card, .bottom-cards, .hero-image, .image-wrap img');

  if (prefersReduced) {
    // Respect users who prefer reduced motion
    targets.forEach(el => el.classList.add('in'));
    return;
  }

  // Add base class
  targets.forEach(el => el.classList.add('aos'));

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  targets.forEach(el => io.observe(el));
})();