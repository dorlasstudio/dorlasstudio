// Keep your existing namespace (safe even if you don't use it yet)
window.DS = window.DS || {};
window.DS.fakeSubmit = (e) => {
  e.preventDefault();
  const note = document.getElementById('form-note');
  if (note) note.textContent = "Saved locally (demo). Later connect a real form backend.";
  return false;
};

(() => {
  // 1) Year (only if you have <span id="year"></span> somewhere)
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // 2) Mobile nav toggle (only if you have a .nav-toggle button)
  const btn = document.querySelector('.nav-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 3) Smooth scroll for #anchors + fixed-header offset
  // Note: scrollIntoView has no offset option, so we adjust after scrolling. :contentReference[oaicite:1]{index=1}
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
    setTimeout(() => window.scrollBy(0, -headerOffset()), 0);
  });
})();
