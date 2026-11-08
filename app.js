const folders = [
  { name: 'Highlighted Projects', emoji: '✨' },
  { name: 'Branding', emoji: '🎨' },
  { name: 'OOH', emoji: '🏙️' },
  { name: 'Music Ads', emoji: '🎧' },
  { name: 'Social Media', emoji: '🖼️' },
  { name: '24 FPS', emoji: '🎬' },
];
const folderGrid = document.getElementById('folder-grid');
folders.forEach(({ name, emoji }) => {
  const button = document.createElement('button');
  button.className = 'folder-button';
  button.setAttribute('aria-label', `Open ${name} folder`);
  button.innerHTML = `<span class="folder-art" aria-hidden="true"><img src="assets/folder.png" alt="" draggable="false"><span class="folder-emoji">${emoji}</span></span><span class="folder-name">${name}</span>`;
  button.addEventListener('click', () => {
    openDesktopApp('finder', name, button);
  });
  folderGrid.append(button);
});
const projects = ['brand-watsell', 'your-future-is-yours', 'pro-enterprise'].map(id => {
  const p = window.PORTFOLIO_PROJECTS.find(project => project.id === id);
  return {id:p.id,title:p.title,category:p.categories[0],image:window.portfolioThumbnail(p.cover),alt:p.title};
});
let currentSlide = 0;
let paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let interval;
const art = document.getElementById('project-artwork');
function showSlide(index) {
  currentSlide = (index + projects.length) % projects.length;
  const project = projects[currentSlide];
  art.src = project.image;
  art.alt = project.alt;
  document.getElementById('project-name').textContent = project.title;
  document.getElementById('project-category').textContent = project.category;
}
function restartTimer() {
  clearInterval(interval);
  if (!paused && !document.hidden && !document.querySelector('.desktop-app:not([hidden])') && !document.querySelector('.featured-window').matches(':hover, :focus-within')) interval = setInterval(() => showSlide(currentSlide + 1), 6500);
}
const featured = document.querySelector('.featured-window');
featured.addEventListener('mouseenter', () => clearInterval(interval));
featured.addEventListener('mouseleave', restartTimer);
featured.addEventListener('focusin', () => clearInterval(interval));
featured.addEventListener('focusout', () => setTimeout(restartTimer, 0));
document.addEventListener('visibilitychange', restartTimer);
document.addEventListener('desktop-app-change', restartTimer);
document.getElementById('view-project').addEventListener('click', event => {
  openPortfolioProject(projects[currentSlide].id, event.currentTarget);
});
let toastTimeout;
document.querySelectorAll('.dock-item').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.app === 'Notes' || button.dataset.app === 'Photos' || button.dataset.app === 'Synth') {
      openDesktopApp(button.dataset.app.toLowerCase(), null, button);
      return;
    }
    document.querySelectorAll('.dock-item').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const toast = document.getElementById('toast');
    toast.textContent = `${button.dataset.app} — a little more of me, coming soon.`;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.classList.remove('show'); button.classList.remove('active'); }, 2800);
  });
});
function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.dateTime = now.toISOString();
  clock.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + '  ' + now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}
showSlide(0);
restartTimer();
updateClock();
setInterval(updateClock, 30000);

const aboutDialog = document.getElementById('about-dialog');
document.querySelector('.menu-left a[href="#about"]').addEventListener('click', event => {
  event.preventDefault();
  aboutDialog.showModal();
});
aboutDialog.querySelector('.about-close').addEventListener('click', () => aboutDialog.close());
aboutDialog.addEventListener('click', event => {
  if (event.target !== aboutDialog) return;
  const bounds = aboutDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) aboutDialog.close();
});

document.querySelector('.menu-left a[href="#work"]').addEventListener('click', event => {
  event.preventDefault();
  openDesktopApp('finder', 'Highlighted Projects', event.currentTarget);
});
