(() => {
  // Smooth scroll with fixed-header offset
  const header = document.querySelector('.topbar');

  function headerOffset() {
    const h = header ? header.getBoundingClientRect().height : 0;
    return Math.round(h + 12);
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const hash = a.getAttribute('href');
    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // apply offset after the browser scrolls
    setTimeout(() => window.scrollBy(0, -headerOffset()), 0);
  });
})();
