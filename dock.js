// Smooth proximity magnification. Slots expand with their icons, keeping them apart.
(() => {
  const dock = document.querySelector('.dock');
  const buttons = [...dock.querySelectorAll('.dock-item')];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const scales = buttons.map(() => 1);
  let targets = [...scales];
  let frame = 0;
  let previousTime = 0;
  const size = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--app-size'));
  function animate(time) {
    const amount = reduceMotion.matches ? 1 : 1 - Math.exp(-Math.min(time - previousTime || 16, 50) / 65);
    previousTime = time;
    const base = size();
    let moving = false;
    buttons.forEach((button, i) => {
      scales[i] += (targets[i] - scales[i]) * amount;
      if (Math.abs(scales[i] - targets[i]) < .001) scales[i] = targets[i];
      else moving = true;
      button.style.setProperty('--dock-scale', scales[i].toFixed(4));
      button.style.width = `${base * scales[i]}px`;
    });
    frame = moving ? requestAnimationFrame(animate) : 0;
  }
  function schedule() { if (!frame) { previousTime = 0; frame = requestAnimationFrame(animate); } }
  function reset() { targets = buttons.map(() => 1); schedule(); }
  function magnify(x) {
    const base = size();
    const radius = base * 2.4;
    targets = buttons.map(button => {
      const rect = button.getBoundingClientRect();
      const distance = Math.min(Math.abs(x - (rect.left + rect.width / 2)) / radius, 1);
      return 1 + .62 * (1 + Math.cos(distance * Math.PI)) / 2;
    });
    schedule();
  }
  dock.addEventListener('pointermove', event => {
    if (event.pointerType === 'mouse' || event.pointerType === 'pen') magnify(event.clientX);
  });
  dock.addEventListener('pointerleave', reset);
  dock.addEventListener('pointercancel', reset);
  dock.addEventListener('focusin', event => {
    const button = event.target.closest('.dock-item');
    if (button?.matches(':focus-visible')) {
      const rect = button.getBoundingClientRect();
      magnify(rect.left + rect.width / 2);
    }
  });
  dock.addEventListener('focusout', () => { if (!dock.matches(':hover')) reset(); });
  window.addEventListener('blur', reset);
  window.addEventListener('resize', reset);
  document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
  reduceMotion.addEventListener('change', reset);
})();
