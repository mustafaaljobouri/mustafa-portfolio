(() => {
  const categoryNames = ['Highlighted Projects', 'Branding', 'OOH', 'Music Ads', 'Social Media', '24 FPS'];
  const paths = {
    folder: '<path d="M3 7V5a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
    sidebar: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    list: '<path d="M8 5h13M8 12h13M8 19h13M3 5h1M3 12h1M3 19h1"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    photos: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="m3 16 5-5 5 5 3-3 5 5M7 2h10"/><circle cx="16" cy="10" r="1"/>',
    album: '<rect x="4" y="6" width="16" height="15" rx="3"/><path d="M7 3h10M9 10h6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    note: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M4 8h16M8 12h8M8 16h6"/>',
    back: '<path d="m15 5-7 7 7 7"/>',
    forward: '<path d="m9 5 7 7-7 7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    cloud: '<path d="M7 18H6a4 4 0 1 1 .8-7.9A6 6 0 0 1 18 8a5 5 0 0 1 0 10h-1M9 18h6"/>',
    pin: '<path d="m9 3 6 0 1 7 3 3H5l3-3ZM12 13v8"/>',
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.folder}</svg>`;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const notes = [
    { id: 'unexpected', title: 'Leave room for the unexpected', subtitle: 'A small argument for creative detours.', tag: 'On creativity', time: '4 min read', paragraphs: [
      'A good brief gives a project a direction. It does not need to give it every answer. Some of the most interesting decisions happen in the space between what was requested and what was noticed along the way: an awkward crop, a strange colour pairing, a sentence that sounds a little too honest.',
      'That space is easy to remove. A reference board becomes a rulebook. An early sketch becomes the final composition before anyone has asked what else it could be. The work grows more polished, but also more predictable. Every decision is defensible, and nothing feels surprising.',
      'One useful habit is to keep a small part of the process deliberately unresolved. Try one version with the wrong typeface. Make the image uncomfortably large. Remove the element everyone assumes must be there. Most of these experiments will fail. Their job is to reveal a possibility that the sensible version could not show.',
      'Of course, surprise is not a substitute for clarity. The final piece still has to communicate. The question is whether the unexpected choice makes the idea more memorable, more specific, or more alive. If it only adds noise, let it go.',
      'Creative freedom does not always require a bigger budget or a completely open brief. Sometimes it starts with a spare half hour and permission to make one version that might not work.'
    ] },
    { id: 'rhythm', title: 'Design has a rhythm', subtitle: 'What a composition can learn from a song.', tag: 'Design × music', time: '3 min read', paragraphs: [
      'A page does not make a sound, but it can still have a rhythm. Large and small. Dense and open. A repeated shape, then a break. The eye moves through those changes in much the same way attention moves through a piece of music.',
      'A chorus works because it returns. Repetition in design can do the same thing: a colour, a type treatment, or a familiar alignment gives the viewer something to recognise. But repetition without variation becomes wallpaper. A pause or an unexpected shift brings attention back.',
      'Whitespace is often described as empty space. It is more useful to think of it as timing. A little distance can separate two ideas. More distance can make a headline feel important before a single word is read. Filling every gap is like asking every instrument to play at once.',
      'This is especially useful when moving between static work and motion. An animation should not simply make every element move. It should decide what happens first, what waits, and what deserves a moment on its own. Timing is part of the message.',
      'The next time a layout feels busy, do not immediately make everything smaller. Look for the beat. Choose the main voice, give the supporting elements a quieter role, and leave enough silence for the idea to land.'
    ] },
    { id: 'details', title: 'The last ten percent', subtitle: 'Small decisions that make the whole thing feel right.', tag: 'On craft', time: '3 min read', paragraphs: [
      'The first version usually solves the obvious problems. There is a headline, an image, a hierarchy, and a direction. The last part of the work is less visible: a line break, a warmer grey, a slightly slower transition, a margin that finally feels comfortable.',
      'These changes are small in isolation. Together, they determine whether the work feels considered. A button that responds at the right moment makes an interface feel attentive. A consistent edge makes a complicated composition easier to understand. A carefully chosen crop can change the entire mood of an image.',
      'Craft does not mean polishing forever. There is a point where adjustment becomes avoidance. The useful distinction is whether a change solves something you can name. Is the text easier to read? Does the image support the idea? Does the interaction explain what just happened?',
      'Looking at the work in its real setting helps. A poster should be judged from a distance. A phone interface should be held in a hand. A film should be watched without stopping every three seconds. The context quickly reveals which details matter and which were only visible at two hundred percent zoom.',
      'The last ten percent is not about making the work flawless. It is about making the important choices feel intentional, then recognising when the piece is ready to leave the desk.'
    ] }
  ];
  const state = { app: null, folder: categoryNames[0], folderHistory: [], historyIndex: -1, finderView: 'grid', finderQuery: '', project: null, note: notes[0].id, noteQuery: '', photoSection: 'Library', photos: window.PORTFOLIO_PHOTOS.map(photo => ({ ...photo, date: photo.date ? new Date(photo.date + 'T12:00:00') : null })), viewer: null, max: false, sidebar: true, opener: null };
  const app = document.createElement('section');
  app.className = 'desktop-app';
  app.hidden = true;
  app.setAttribute('role', 'dialog');
  app.setAttribute('aria-labelledby', 'app-window-title');
  app.innerHTML = `<header class="app-titlebar"><div class="window-controls"><button class="window-close" aria-label="Close window" title="Close">×</button><button class="window-minimize" aria-label="Minimize window" title="Minimize">−</button><button class="window-maximize" aria-label="Maximize window" title="Maximize">↗</button></div><button class="chrome-button sidebar-toggle" aria-label="Toggle sidebar" title="Toggle sidebar">${icon('sidebar')}</button><span id="app-window-title"></span><span class="app-window-subtitle"></span></header><div class="app-body"></div>`;
  document.body.append(app);
  const body = app.querySelector('.app-body');
  const restore = document.createElement('button');
  restore.className = 'minimized-window glass';
  restore.hidden = true;
  document.body.append(restore);
  const notify = () => document.dispatchEvent(new Event('desktop-app-change'));
  const dockState = () => document.querySelectorAll('[data-app="Notes"], [data-app="Photos"], [data-app="Synth"]').forEach(button => button.classList.toggle('active', button.dataset.app.toLowerCase() === state.app));
  function title(text, sub = '') { app.querySelector('#app-window-title').textContent = text; app.querySelector('.app-window-subtitle').textContent = sub; }
  function resetPosition() { app.style.removeProperty('translate'); app.dataset.dx = '0'; app.dataset.dy = '0'; }
  function show() {
    app.hidden = false; restore.hidden = true;
    app.dataset.app = state.app;
    app.classList.toggle('maximized', state.max);
    app.classList.toggle('sidebar-hidden', !state.sidebar);
    app.querySelector('.sidebar-toggle').setAttribute('aria-expanded', String(state.sidebar));
    dockState(); notify();
  }
  function close() {
    window.PortfolioSynth?.unmount();
    body.querySelectorAll('video').forEach(video=>video.pause());
    app.hidden = true; restore.hidden = true; state.app = null; state.viewer = null;
    dockState(); notify(); state.opener?.focus({preventScroll:true});
  }
  window.openDesktopApp = (type, folder, opener) => {
    window.PortfolioSynth?.unmount();
    const changed = state.app !== type;
    state.app = type; state.opener = opener || document.activeElement;
    if (changed) { state.sidebar = innerWidth > 760; resetPosition(); }
    if (type === 'finder' && folder) visitFolder(folder);
    else render();
    show();
    app.querySelector('.window-close').focus({preventScroll:true});
  };
  app.querySelector('.window-close').addEventListener('click', close);
  app.querySelector('.window-minimize').addEventListener('click', () => {
    window.PortfolioSynth?.stop();
    body.querySelectorAll('video').forEach(video=>video.pause());
    app.hidden = true;
    restore.innerHTML = `${icon(state.app === 'finder' ? 'folder' : state.app === 'notes' ? 'note' : 'photos')}<span>${escape(app.querySelector('#app-window-title').textContent)}</span><span>↗</span>`;
    restore.setAttribute('aria-label', `Restore ${app.querySelector('#app-window-title').textContent} window`);
    restore.hidden = false; restore.focus({preventScroll:true}); notify();
  });
  restore.addEventListener('click', () => { show(); app.querySelector('.window-close').focus({preventScroll:true}); });
  function maximize() {
    state.max = !state.max; app.classList.toggle('maximized', state.max); resetPosition();
    const button = app.querySelector('.window-maximize');
    button.setAttribute('aria-label', state.max ? 'Restore window size' : 'Maximize window');
    button.title = state.max ? 'Restore' : 'Maximize';
  }
  app.querySelector('.window-maximize').addEventListener('click', maximize);
  app.querySelector('.sidebar-toggle').addEventListener('click', () => { state.sidebar = !state.sidebar; app.classList.toggle('sidebar-hidden', !state.sidebar); app.querySelector('.sidebar-toggle').setAttribute('aria-expanded', String(state.sidebar)); });
  app.querySelector('.app-titlebar').addEventListener('dblclick', event => { if (!event.target.closest('button')) maximize(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !app.hidden && !document.querySelector('dialog[open]')) { if (state.app === 'finder' && state.project) returnToFolder(); else if (state.app === 'photos' && state.viewer) { state.viewer = null; renderPhotoContent(); } else close(); } });
  // Keep the title-bar drag within the visible desktop. Resizing resets its position.
  let drag = null;
  const titlebar = app.querySelector('.app-titlebar');
  titlebar.addEventListener('pointerdown', event => {
    if (state.max || innerWidth < 761 || event.target.closest('button') || event.button !== 0) return;
    const rect = app.getBoundingClientRect();
    drag = { x: event.clientX, y: event.clientY, left: rect.left, top: rect.top, width:rect.width, height:rect.height, baseX:parseFloat(app.dataset.dx || 0), baseY:parseFloat(app.dataset.dy || 0) };
    titlebar.setPointerCapture(event.pointerId);
  });
  titlebar.addEventListener('pointermove', event => {
    if (!drag) return;
    const dx = Math.min(innerWidth - drag.left - drag.width, Math.max(-drag.left, event.clientX - drag.x));
    const dy = Math.min(innerHeight - 80 - drag.top - drag.height, Math.max(40 - drag.top, event.clientY - drag.y));
    app.style.translate = `${drag.baseX + dx}px ${drag.baseY + dy}px`;
  });
  titlebar.addEventListener('pointerup', () => { if (!drag) return; const values = app.style.translate.split(' '); app.dataset.dx = parseFloat(values[0]) || 0; app.dataset.dy = parseFloat(values[1]) || 0; drag = null; });
  titlebar.addEventListener('lostpointercapture', () => { drag = null; });
  window.addEventListener('resize', () => { resetPosition(); app.dataset.dx = '0'; app.dataset.dy = '0'; });
  function render() { if (state.app === 'finder') renderFinder(); if (state.app === 'notes') renderNotes(); if (state.app === 'photos') renderPhotos(); if (state.app === 'synth') { title('Synth', 'A little room for sound'); window.PortfolioSynth.mount(body); } }
  const catalogue = window.PORTFOLIO_PROJECTS;
  const folderProjects = name => catalogue.filter(project => project.categories.includes(name));
  function visitFolder(name, project = null) {
    state.folder = name; state.project = project; state.finderQuery = '';
    state.folderHistory = state.folderHistory.slice(0, state.historyIndex + 1);
    state.folderHistory.push({folder:name, project}); state.historyIndex = state.folderHistory.length - 1;
    renderFinder();
  }
  function navigateHistory(direction) {
    const index = state.historyIndex + direction;
    if (index < 0 || index >= state.folderHistory.length) return;
    state.historyIndex = index;
    const entry = state.folderHistory[index];
    state.folder = entry.folder; state.project = entry.project; state.finderQuery = '';
    renderFinder();
  }
  function returnToFolder() {
    const previous = state.folderHistory[state.historyIndex - 1];
    if (previous?.folder === state.folder && !previous.project) navigateHistory(-1);
    else visitFolder(state.folder);
  }
  window.openPortfolioProject = (id, opener) => {
    const project = catalogue.find(item => item.id === id);
    if (!project) return;
    window.openDesktopApp('finder', project.categories[0], opener);
    if (project.caseStudy) visitFolder(project.categories[0], id);
    else openArtGallery(id);
  };
  function renderFinder() {
    const project = catalogue.find(item => item.id === state.project);
    title(project?.title || state.folder, 'Finder');
    body.innerHTML = `<aside class="app-sidebar finder-sidebar"><p class="sidebar-label">Favorites</p><div class="sidebar-owner">${icon('cloud')}<span>Mustafa’s desktop</span></div><p class="sidebar-label sidebar-space">Portfolio</p>${categoryNames.map(name => `<button class="sidebar-row ${name === state.folder ? 'current' : ''}" data-folder="${escape(name)}" ${name === state.folder ? 'aria-current="page"' : ''}>${icon('folder')}<span>${escape(name)}</span><small>${folderProjects(name).length}</small></button>`).join('')}</aside><section class="finder-main"><div class="finder-toolbar"><div class="toolbar-group"><button class="chrome-button" id="finder-back" aria-label="Go back" ${state.historyIndex <= 0 ? 'disabled' : ''}>${icon('back')}</button><button class="chrome-button" id="finder-forward" aria-label="Go forward" ${state.historyIndex >= state.folderHistory.length - 1 ? 'disabled' : ''}>${icon('forward')}</button></div><button class="finder-breadcrumb" id="folder-home" title="Back to ${escape(state.folder)}">${icon('folder')}<strong>${escape(state.folder)}</strong></button>${project ? `<span class="finder-current-project">${escape(project.title)}</span>` : `<div class="toolbar-group view-switch"><button class="chrome-button ${state.finderView === 'grid' ? 'chosen' : ''}" data-view="grid" aria-label="Icon view" aria-pressed="${state.finderView === 'grid'}">${icon('grid')}</button><button class="chrome-button ${state.finderView === 'list' ? 'chosen' : ''}" data-view="list" aria-label="List view" aria-pressed="${state.finderView === 'list'}">${icon('list')}</button></div><label class="app-search finder-search">${icon('search')}<input type="search" placeholder="Search" aria-label="Search folder" value="${escape(state.finderQuery)}"></label>`}</div><div class="finder-content"></div><footer class="finder-status"><span>Mustafa’s desktop <span class="path-chevron">›</span> ${escape(state.folder)}</span><span id="finder-count"></span></footer></section>`;
    body.querySelectorAll('[data-folder]').forEach(button => button.addEventListener('click', () => {
      visitFolder(button.dataset.folder);
      if (innerWidth <= 760) { state.sidebar = false; show(); }
    }));
    body.querySelector('#finder-back').addEventListener('click', () => navigateHistory(-1));
    body.querySelector('#finder-forward').addEventListener('click', () => navigateHistory(1));
    body.querySelector('#folder-home').addEventListener('click', () => { if (state.project) returnToFolder(); });
    body.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => { state.finderView = button.dataset.view; renderFinder(); }));
    body.querySelector('input')?.addEventListener('input', event => { state.finderQuery = event.target.value; renderProjectGrid(); });
    renderProjectGrid();
  }
  function renderProjectGrid() {
    const content = body.querySelector('.finder-content');
    const study = catalogue.find(p => p.id === state.project && p.caseStudy);
    if (study) { if(study.productDesign) renderProductStudy(content,study); else if(study.campaign) renderCampaign(content,study); else renderBrandStudy(content, study); return; }
    const order = [0,1,2,15,3,4,5,6,17,7,8,9,10,18,11,12,13,14,16];
    const all = folderProjects(state.folder);
    const items = (state.folder === 'Social Media' ? order.map(i => all[i]).filter(Boolean) : all).filter(p => p.title.toLowerCase().includes(state.finderQuery.trim().toLowerCase()));
    body.querySelector('#finder-count').textContent = `${items.length} ${items.some(item => item.video) ? (items.length === 1 ? 'video' : 'videos') : (items.length === 1 ? 'image' : 'images')}`;
    content.className = 'finder-content';
    if (!items.length) {
      content.innerHTML = `<div class="finder-empty"><img src="assets/folder.png" alt=""><h3>${state.finderQuery ? 'No matching artwork' : 'This folder is empty'}</h3><p>${state.finderQuery ? 'Try another search.' : 'New work will appear here.'}</p></div>`;
      return;
    }
    if (items.every(p => p.caseStudy)) { renderBrandProjects(content, items); return; }
    if (state.folder === 'OOH') {
      mosaicObserver?.disconnect();
      content.innerHTML = `<div class="ooh-grid">${items.map(p=>`<button class="art-tile ${p.oohLayout === 'half' ? 'ooh-half' : 'ooh-full'}" data-art="${p.id}" aria-label="Open ${escape(p.title)}"><img src="${window.portfolioThumbnail(p.cover)}" alt="${escape(p.title)}" width="${p.width}" height="${p.height}" loading="lazy" draggable="false"></button>`).join('')}</div>`;
      content.querySelectorAll('[data-art]').forEach(button=>button.addEventListener('click',()=>openArtGallery(button.dataset.art,items)));
      return;
    }

    content.innerHTML = `<div class="art-mosaic">${items.map(p=>`<button class="art-tile ${p.width > p.height*1.5 ? 'wide' : ''}" data-art="${p.id}" aria-label="Open ${escape(p.title)}"><img src="${window.portfolioThumbnail(p.cover)}" alt="${escape(p.title)}" width="${p.width}" height="${p.height}" loading="lazy" draggable="false">${p.video?'<span class="file-play">▶</span>':''}</button>`).join('')}</div>`;
    const grid = content.querySelector('.art-mosaic');
    if (items.every(p => p.video)) {
      mosaicObserver?.disconnect();
      grid.classList.add('video-mosaic');
      grid.querySelectorAll('[data-art]').forEach(button=>button.addEventListener('click',()=>openArtGallery(button.dataset.art,items)));
      return;
    }
    // Justified rows preserve every image's aspect ratio and exactly equal gutters.
    const layout = () => {
      const pad = parseFloat(getComputedStyle(grid).paddingLeft), gap = 8;
      const width = grid.clientWidth - pad * 2;
      if (width <= 0) return;
      const target = Math.min(340, width / (width < 500 ? 1.6 : 2.4));
      const cost = Array(items.length + 1).fill(Infinity), end = [];
      cost[items.length] = 0;
      for (let i = items.length - 1; i >= 0; i--) {
        let ratio = 0;
        for (let j = i; j < Math.min(items.length, i + 5); j++) {
          ratio += items[j].width / items[j].height;
          const height = (width - gap * (j - i)) / ratio;
          const score = (height - target) ** 2 + cost[j + 1];
          if (score < cost[i]) { cost[i] = score; end[i] = j + 1; }
        }
      }
      const tiles = [...grid.children];
      let top = pad;
      for (let i = 0; i < items.length;) {
        const next = end[i];
        const ratio = items.slice(i, next).reduce((sum,p)=>sum + p.width/p.height,0);
        const height = (width - gap * (next - i - 1)) / ratio;
        let left = pad;
        for (let j = i; j < next; j++) {
          const tileWidth = height * items[j].width/items[j].height;
          Object.assign(tiles[j].style,{left:left+'px',top:top+'px',width:tileWidth+'px',height:height+'px'});
          left += tileWidth + gap;
        }
        top += height + gap; i = next;
      }
      grid.style.height = (top - gap + pad) + 'px';
    };
    mosaicObserver?.disconnect(); mosaicObserver = new ResizeObserver(layout); mosaicObserver.observe(grid); layout();
    grid.querySelectorAll('[data-art]').forEach(button=>button.addEventListener('click',()=>openArtGallery(button.dataset.art,items)));
  }
  function renderBrandProjects(content, items) {
    mosaicObserver?.disconnect();
    body.querySelector('#finder-count').textContent = `${items.length} ${items.length === 1 ? 'project' : 'projects'}`;
    content.innerHTML = `<div class="brand-projects">${items.map(p => `<button class="brand-project" data-brand="${p.id}" aria-label="Open ${escape(p.title)} case study"><img src="${window.portfolioThumbnail(p.cover)}" alt="${escape(p.images[0].alt)}" width="${p.width}" height="${p.height}"><span class="brand-card-caption"><span><strong>${escape(p.title)}</strong><small>${p.client ? escape(p.client) + " · " : ""}${p.productDesign ? "UI / UX design" : p.campaign ? "Campaign" : "Brand identity"}</small></span><span aria-hidden="true">↗</span></span></button>`).join('')}</div>`;
    content.querySelectorAll('[data-brand]').forEach(button => button.addEventListener('click', () => visitFolder(state.folder, button.dataset.brand)));
  }
  function renderProductStudy(content, project) {
    mosaicObserver?.disconnect();
    content.className = 'finder-content brand-case-content';
    body.querySelector('#finder-count').textContent = 'UI / UX design';
    const picture = p => `<figure class="pro-tile pro-${p.layout}"><img src="${p.src}" alt="${escape(p.alt)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async"></figure>`;
    content.innerHTML = `<article class="brand-case pro-case"><header class="brand-case-header"><button class="brand-back">← Highlighted Projects</button><span>UI / UX design</span></header><div class="brand-case-title"><h1 tabindex="-1">${escape(project.title)}</h1><p>${escape(project.client || project.tagline)}</p></div><div class="brand-case-copy"><section><h2>The brief</h2><p>${escape(project.intro)}</p></section><section><h2>The approach</h2><p>${escape(project.idea)}</p></section></div>${picture(project.images[0])}<div class="pro-bento">${project.images.slice(1).map(picture).join('')}</div><footer class="brand-case-footer"><button class="brand-back">← Highlighted Projects</button></footer></article>`;
    content.querySelectorAll('.brand-back').forEach(button => button.addEventListener('click', returnToFolder));
    content.scrollTop = 0;
    content.querySelector('h1').focus({preventScroll:true});
  }
  function renderCampaign(content, project) {
    const film = f => f.vimeo ? `<figure><iframe src="https://player.vimeo.com/video/${f.vimeo}" title="${escape(f.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe><figcaption>${escape(f.title)}</figcaption></figure>` : `<figure><video src="${f.src}" poster="${f.poster}" controls playsinline preload="none" aria-label="${escape(f.title)}"></video><figcaption>${escape(f.title)}</figcaption></figure>`;
    mosaicObserver?.disconnect();
    content.className='finder-content brand-case-content';
    body.querySelector('#finder-count').textContent=project.mediaSummary || (project.caseFilm ? 'Anthem · Case study' : '3 films · 3 supporting visuals');
    content.innerHTML=`<article class="brand-case mood-case ${project.caseFilm ? 'anthem-case' : ''}"><header class="brand-case-header"><button class="brand-back">← Highlighted Projects</button><span>Campaign</span></header><div class="brand-case-title"><h1 tabindex="-1">${escape(project.title)}</h1><p>${escape(project.client || project.tagline)}</p></div><p class="mood-intro">${escape(project.intro)}</p>${project.line ? `<blockquote lang="ar" dir="rtl">${escape(project.line)}</blockquote>` : ""}<section class="mood-section">${project.filmHeading ? `<h2>${escape(project.filmHeading)}</h2><p>${escape(project.filmText)}</p>` : ""}<div class="mood-films ${project.id === 'your-future-is-yours' ? 'portrait-films' : ''}">${project.films.map(film).join('')}</div></section><section class="mood-section"><h2>${escape(project.supportHeading)}</h2><p>${escape(project.supportText)}</p>${project.caseFilm ? `<div class="mood-films case-film">${film(project.caseFilm)}</div>` : `<div class="mood-support">${project.support.map(p=>`<img src="${p.src}" alt="${escape(p.alt)}" width="1200" height="1500" loading="lazy">`).join('')}</div>`}</section><footer class="brand-case-footer"><button class="brand-back">← Highlighted Projects</button></footer></article>`;
    content.querySelectorAll('.brand-back').forEach(b=>b.onclick=returnToFolder);
    content.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>content.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
    content.scrollTop=0;content.querySelector('h1').focus({preventScroll:true});
  }
  function renderBrandStudy(content, project) {
    mosaicObserver?.disconnect();
    content.className = 'finder-content brand-case-content';
    body.querySelector('#finder-count').textContent = 'Brand identity';
    const siblings = folderProjects('Branding'), next = siblings[(siblings.indexOf(project) + 1) % siblings.length];
    const picture = (p, index) => `<figure class="brand-visual ${index === 0 || index === project.images.length - 1 ? 'brand-visual-wide' : ''}"><img src="${p.src}" alt="${escape(p.alt)}" width="${p.width}" height="${p.height}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async"></figure>`;
    content.innerHTML = `<article class="brand-case"><header class="brand-case-header"><button class="brand-back">← All branding</button><span>Brand identity</span></header><div class="brand-case-title"><h1 tabindex="-1">${escape(project.title)}</h1><p>${escape(project.client || project.tagline)}</p></div><div class="brand-case-copy"><section><h2>The brief</h2><p>${escape(project.intro)}</p></section><section><h2>The idea</h2><p>${escape(project.idea)}</p></section></div>${picture(project.images[0], 0)}<div class="brand-case-visuals">${project.images.slice(1).map((p,i) => picture(p,i+1)).join('')}</div><footer class="brand-case-footer"><button class="brand-back">← All branding</button><button class="brand-next" data-next="${next.id}">Next project <strong>${escape(next.title)} ↗</strong></button></footer></article>`;
    content.querySelectorAll('.brand-back').forEach(button => button.addEventListener('click', returnToFolder));
    content.querySelector('.brand-next').addEventListener('click', () => visitFolder('Branding', next.id));
    content.scrollTop = 0;
    content.querySelector('h1').focus({preventScroll:true});
  }
  let mosaicObserver;
  function openArtGallery(id,items=folderProjects(state.folder)) {
    const content=body.querySelector('.finder-content');
    const scroll=content.scrollTop;
    state.project=id;
    renderMediaViewer(content,items,id,()=>{
      state.project=null; renderProjectGrid(); content.scrollTop=scroll;
      content.querySelector(`[data-art="${id}"]`)?.focus({preventScroll:true});
    }, selected=>{state.project=selected;});
  }
  function renderMediaViewer(content,items,id,onBack,onSelect) {
    let index=Math.max(0,items.findIndex(p=>p.id===id)), wheelTime=0;
    content.classList.add('viewing-media');
    content.innerHTML=`<section class="inline-gallery" aria-label="Media gallery"><header><button class="chrome-button media-back" aria-label="Back to gallery">${icon('back')}</button><span class="gallery-count" aria-live="polite"></span></header><div class="gallery-stage"><button class="gallery-prev" aria-label="Previous item">‹</button><div class="gallery-media"></div><button class="gallery-next" aria-label="Next item">›</button></div><div class="gallery-filmstrip" aria-label="All items">${items.map((p,i)=>`<button class="${p.video ? 'video-thumbnail' : ''}" data-index="${i}" aria-label="View ${escape(p.title)}"><img src="${window.portfolioThumbnail(p.cover)}" alt="" loading="lazy" draggable="false">${p.video?'<span class="film-play">▶</span>':''}</button>`).join('')}</div></section>`;
    const viewer=content.querySelector('.inline-gallery'),media=viewer.querySelector('.gallery-media'),strip=viewer.querySelector('.gallery-filmstrip');
    function select(next) {
      media.querySelector('video')?.pause();
      index=(next+items.length)%items.length; const p=items[index];onSelect(p.id);
      media.innerHTML=p.video?`<video src="${p.video}" poster="${p.cover}" controls playsinline preload="metadata" aria-label="${escape(p.title)}"></video>`:`<img src="${p.images[0].src}" alt="${escape(p.title)}" draggable="false">`;
      viewer.querySelector('.gallery-count').textContent=`${index+1} / ${items.length}`;
      strip.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-current',String(i===index)));
      const active=strip.children[index];strip.scrollTo({left:active.offsetLeft-strip.offsetLeft-strip.clientWidth/2+active.clientWidth/2,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    }
    viewer.querySelector('.media-back').onclick=()=>{media.querySelector('video')?.pause();content.classList.remove('viewing-media');onBack();};
    viewer.querySelector('.gallery-prev').onclick=()=>select(index-1);
    viewer.querySelector('.gallery-next').onclick=()=>select(index+1);
    strip.querySelectorAll('[data-index]').forEach(b=>b.onclick=()=>select(Number(b.dataset.index)));
    viewer.addEventListener('keydown',e=>{if(e.target.tagName==='VIDEO')return;if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();select(index+(e.key==='ArrowRight'?1:-1));}});
    viewer.querySelector('.gallery-stage').addEventListener('wheel',e=>{if(e.ctrlKey)return;e.preventDefault();const delta=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;if(Math.abs(delta)>8&&Date.now()-wheelTime>350){wheelTime=Date.now();select(index+(delta>0?1:-1));}},{passive:false});
    strip.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();strip.scrollLeft+=e.deltaY;}},{passive:false});
    let start=null;media.addEventListener('touchstart',e=>{if(e.target.tagName!=='VIDEO')start=e.touches[0].clientX;},{passive:true});media.addEventListener('touchend',e=>{if(start!==null){const delta=start-e.changedTouches[0].clientX;if(Math.abs(delta)>45)select(index+(delta>0?1:-1));start=null;}},{passive:true});
    select(index);viewer.querySelector('.media-back').focus({preventScroll:true});
  }
  function renderNotes() {
    title('Notes', 'Thoughts and observations');
    body.innerHTML = `<section class="notes-list-pane"><div class="notes-list-header"><h3>All Notes <span>3</span></h3><label class="app-search">${icon('search')}<input type="search" placeholder="Search notes" aria-label="Search notes" value="${escape(state.noteQuery)}"></label></div><div class="note-list"></div></section><section class="note-reader" aria-label="Article"><article class="note-article"></article></section>`;
    renderNoteList(); renderArticle();
    body.querySelector('input').addEventListener('input', event => { state.noteQuery = event.target.value; renderNoteList(); });
  }
  function renderNoteList() {
    const matches = notes.filter(note => [note.title, note.subtitle, ...note.paragraphs].join(' ').toLowerCase().includes(state.noteQuery.toLowerCase().trim()));
    body.querySelector('.note-list').innerHTML = `${matches.map(note => `<button class="note-card ${note.id === state.note ? 'selected' : ''}" data-note="${note.id}" aria-pressed="${note.id === state.note}"><span class="note-card-title">${note.title}</span><span class="note-card-subtitle">${note.subtitle}</span></button>`).join('')}${matches.length ? '' : '<p class="notes-no-results">No notes found.</p>'}`;
    body.querySelectorAll('[data-note]').forEach(button => button.addEventListener('click', () => { state.note = button.dataset.note; renderNoteList(); renderArticle(); }));
  }
  function renderArticle() {
    const note = notes.find(item => item.id === state.note);
    const reader = body.querySelector('.note-article');
    reader.innerHTML = `<h2>${note.title}</h2><p class="note-deck">${note.subtitle}</p>${note.paragraphs.map(text => `<p>${text}</p>`).join('')}`;
    reader.scrollTop = 0;
  }
  function renderPhotos() {
    title('Photos');
    const row = (name, symbol) => `<button class="sidebar-row ${state.photoSection === name ? 'current' : ''}" data-section="${name}" ${state.photoSection === name ? 'aria-current="page"' : ''}>${icon(symbol)}<span>${name}</span></button>`;
    body.innerHTML = `<aside class="app-sidebar photos-sidebar">${row('Library', 'photos')}${row('Favorites', 'heart')}<div class="sidebar-bottom">${state.photos.length} photos</div></aside><section class="photos-main"><div class="photos-content" aria-label="Photo gallery"></div><footer class="photos-status"></footer></section>`;
    renderPhotoContent();
    body.querySelectorAll('[data-section]').forEach(button => button.addEventListener('click', () => {
      state.photoSection = button.dataset.section; state.viewer = null; renderPhotos();
      if (innerWidth <= 760) { state.sidebar = false; show(); }
    }));
  }
  function visiblePhotos() {
    return state.photos.filter(photo => state.photoSection === 'Library' ||
      (state.photoSection === 'Favorites' && photo.favorite));
  }
  function renderPhotoContent() {
    const photos = visiblePhotos();
    const content = body.querySelector('.photos-content');
    body.querySelector('.photos-status').textContent = `${photos.length} ${photos.length === 1 ? 'photo' : 'photos'}`;
    content.classList.remove('viewing-media');
    if (state.viewer) {
      const items=photos.map(p=>({id:p.id,title:p.name,cover:p.thumb||p.url,images:[{src:p.url}]}));
      if (!items.some(p=>p.id===state.viewer)){state.viewer=null;return renderPhotoContent();}
      renderMediaViewer(content,items,state.viewer,()=>{state.viewer=null;renderPhotoContent();},id=>{state.viewer=id;});
      return;
    }
    content.innerHTML = `<div class="photo-grid">${photos.map(photo => `<button class="photo-tile" data-photo="${photo.id}" aria-label="Open ${escape(photo.name)}"><img src="${window.portfolioThumbnail(photo.thumb || photo.url)}" alt="${escape(photo.name)}" loading="lazy">${photo.favorite ? `<span class="photo-heart">${icon('heart')}</span>` : ''}</button>`).join('')}</div>`;
    content.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => { state.viewer = button.dataset.photo; renderPhotoContent(); }));
  }
})();
