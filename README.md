# Mustafa Amer — Portfolio desktop

A responsive, macOS-inspired portfolio with a dark glass desktop, six emoji work folders, a featured-work slideshow, and a four-app dock. Built with HTML, CSS, and JavaScript. No build step or dependencies.

## Preview 

Run a static web server from this folder, for example `python3 -m http.server 3000`, and open http://localhost:3000.

## Current scope 

- One bold name-and-title line and a medium-weight description, aligned beside the portrait placeholder.
- Screen-fitting layout without page scrolling, including compact mobile layouts.
- Supplied Notes, Mail, Photos, and Folder PNG assets; folder emoji overlays retained.
- Highlighted Projects, Branding, OOH, Music Ads, Social Media, and 24 FPS folders. Clicking opens a large Finder-style window with a caption-free artwork mosaic, sidebar navigation, history, and search. The gallery uses original PNGs with a scrollable filmstrip. 24 FPS contains eight original videos, Music Ads contains three, and Branding contains three case studies. Highlighted Projects contains SHOWNIC MOOD; OOH is empty.
- Three selections of the supplied static artwork in an automatic slideshow (paused on hover/focus and when an app is open). View opens the matching project detail. The bottom slideshow control strip is removed.
- Notes opens a two-pane reader with three original articles and search. Photos opens a view-only gallery with 13 gallery photos in a continuous gallery without date labels, with full-resolution viewing.
- App windows support close, minimize/restore, maximize, sidebar toggle, title-bar dragging on desktop, and Escape to close. Internal article/photo scrolling is allowed; the desktop itself does not scroll.
- Photos are curated by the site owner in `gallery.js`; visitors cannot upload photos or change favorites. Add image files to `assets/photos/` and update the gallery entries when replacing the samples. Sample credits and original links are in `assets/photos/CREDITS.md`; year groupings are illustrative.
- Dock icons magnify smoothly with neighbouring icons, without dimming on press. Folder buttons do not retain a selection box after opening.
- Responsive mobile layout, keyboard focus, reduced-motion support, and local-time menu-bar clock.

## Portfolio content

Social Media contains the 19 supplied original PNGs, copied without resizing or recompression. 24 FPS contains eight videos, Music Ads contains three, and Branding contains three case studies. Highlighted Projects contains SHOWNIC MOOD; OOH is empty. The previous PDF import is removed from the site.

The caption-free mosaic uses larger portraits and two-column landscape tiles. Opening an image shows the full-resolution original with all 19 thumbnails below. Use arrows, the keyboard, a swipe, or scroll over the image to move through the gallery. Scroll the filmstrip to browse thumbnails.

## Deploy later

Put this folder's contents at the root of a GitHub repository. Import it into Vercel with the **Other** framework preset. No install or build command is needed; serve the repository root. No deployment has been made.

After changing CSS or JavaScript, update the corresponding `?v=` file hash in `index.html` so existing browser previews load the latest files.

Media opens inside the existing app window with a thumbnail strip and scroll/arrow navigation. Photos show their complete frame. Motion files live in assets/motion and use native playback controls.

Music Ads contains three original videos: I AM ACHIEVE, SoloTraveler, and YTFS. They use the same caption-free layout and inline player with thumbnails as 24 FPS.

24 FPS and Music Ads use uniform 4:5 thumbnail crops with large centered play buttons. Original video proportions are preserved during playback.

24 FPS order: Orders Sorted, Achievements Video, Fans Video 2, Here’s a tip, High Tolerance, Eid Sales Announcement, Creative team 02, Visa Your Way. Photos uses a curated sequence, with the previous last two images now second and fourth. The former first photo is the landing-page portrait and is excluded from Photos.


## Synth app

The Synth dock icon replaces Guitar. `synth.js` generates bass, chords, melody, and percussion locally with Web Audio; no samples, account, microphone, or backend are required. Start sound begins a synchronized minor-key progression. Drag an output socket onto an effect socket, or click the two sockets in sequence. Click a cable or the voice’s × button to unplug it. Pure, Echo, Cloud, and Orbit change the audio routing. Three scenes, individual tone sliders, tempo, volume, and Surprise me are included. Closing, minimizing, switching apps, or hiding the browser tab stops sound. The current patch survives reopening during the same page visit. Styles are in `synth.css`.


## Branding case studies

Branding now contains LORO, NAS Baghdad, and Watsell, configured in `branding.js`. Each has a short brief and idea plus selected 2400-pixel WebP page renders from the supplied brand book (6, 7, and 6 visuals respectively). The LORO and NAS copy uses the supplied project notes; Watsell is grounded in its brand strategy and visual identity. Case studies open in the existing Finder window and scroll internally. Folder navigation, search, back/forward, and next-project links are supported. Original PDFs remain unchanged in the source Branding folder; they are not bundled into the website.

SHOWNIC MOOD is configured in campaigns.js with three original 1080p films, three original supporting PNGs, the supplied cover, and a concise case study rendered inside the Finder window.

Your Future Is Yours is the second Highlighted Project, with three original MOV films and three supporting PNGs. Both campaign covers appear only on folder cards. Campaign copy and media are configured in campaigns.js.
