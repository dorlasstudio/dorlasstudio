window.DS = {
  fakeSubmit: (e) => {
    e.preventDefault();
    const note = document.getElementById('form-note');
    if (note) note.textContent = "Saved locally (demo). Later connect a real form backend.";
    return false;
  }
};

(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  const btn = document.querySelector('.nav-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
