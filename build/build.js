// Builds the installable Peanut Gallery app from the canvas screens.
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const SRC = process.argv[2] || path.join(__dirname, '..', 'design');
const DIST = path.join(__dirname, '..', 'dist');
const NAMES = ['Main', 'Arena', 'Verdict', 'Builder', 'Media', 'Pic'];
const VERSION = 'pg-' + Date.now();

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'data'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'fonts'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'icons'), { recursive: true });

// ---- CSS scoping: each screen's styles only apply inside [data-dc="Name"] ----
function splitBlocks(css) {
  const out = []; let i = 0;
  while (i < css.length) {
    const open = css.indexOf('{', i);
    if (open < 0) break;
    const prelude = css.slice(i, open).trim();
    let depth = 1, j = open + 1;
    while (j < css.length && depth) { if (css[j] === '{') depth++; else if (css[j] === '}') depth--; j++; }
    out.push({ prelude, body: css.slice(open + 1, j - 1) });
    i = j;
  }
  return out;
}
function scopeCss(css, name) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const kf = {};
  splitBlocks(css).forEach((b) => { const m = b.prelude.match(/^@keyframes\s+([\w-]+)/); if (m) kf[m[1]] = name + '-' + m[1]; });
  const renameAnims = (body) => body.replace(/(animation(?:-name)?\s*:\s*)([^;}]+)/g, (all, pre, val) =>
    pre + val.split(',').map((part) => part.replace(/[\w-]+/g, (w) => kf[w] || w)).join(','));
  const scope = (blocks) => blocks.map((b) => {
    if (/^@keyframes/.test(b.prelude)) return '@keyframes ' + kf[b.prelude.split(/\s+/)[1]] + '{' + b.body + '}';
    if (/^@media|^@supports/.test(b.prelude)) return b.prelude + '{' + scope(splitBlocks(b.body)) + '}';
    if (/^@/.test(b.prelude)) return b.prelude + '{' + b.body + '}';
    const sels = b.prelude.split(',').map((s) => s.trim()).filter(Boolean).map((s) => {
      if (/^(html|body|\*)/.test(s)) return s;
      return '[data-dc="' + name + '"] ' + s;
    });
    return sels.join(',') + '{' + renameAnims(b.body) + '}';
  }).join('\n');
  return scope(splitBlocks(css));
}

// ---- Screens ----
let gen = "import { define } from './runtime.js';\n";
let styles = '';
for (const n of NAMES) {
  const s = fs.readFileSync(path.join(SRC, n + '.dc.html'), 'utf8');
  const xdc = s.match(/<x-dc>([\s\S]*)<\/x-dc>/)[1];
  const helmet = (xdc.match(/<helmet>([\s\S]*?)<\/helmet>/) || ['', ''])[1];
  const template = xdc.replace(/<helmet>[\s\S]*?<\/helmet>/, '');
  const css = (helmet.match(/<style>([\s\S]*?)<\/style>/g) || []).map((x) => x.replace(/<\/?style>/g, '')).join('\n');
  const logic = s.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/)[1];
  styles += '\n/* ' + n + ' */\n' + scopeCss(css, n);
  gen += 'define(' + JSON.stringify(n) + ', { template: ' + JSON.stringify(template) + ', logic: function (DCLogic) {\n' + logic + '\nreturn Component;\n} });\n';
}
fs.writeFileSync(path.join(__dirname, 'src', 'screens.gen.js'), gen);

// ---- Fonts (self-hosted, so the app works offline) ----
const nm = path.join(__dirname, 'node_modules');
const fontFiles = [
  ['@fontsource-variable/roboto-flex/files/roboto-flex-latin-standard-normal.woff2', 'roboto-flex.woff2'],
  ['@fontsource/anton/files/anton-latin-400-normal.woff2', 'anton.woff2']
];
[400, 600, 700, 800].forEach((w) => fontFiles.push(['@fontsource/figtree/files/figtree-latin-' + w + '-normal.woff2', 'figtree-' + w + '.woff2']));
fontFiles.forEach(([from, to]) => fs.copyFileSync(path.join(nm, from), path.join(DIST, 'fonts', to)));
let fontCss = "@font-face{font-family:'Roboto Flex';src:url(fonts/roboto-flex.woff2) format('woff2');font-weight:100 1000;font-stretch:25% 151%;font-style:normal;font-display:swap}\n" +
  "@font-face{font-family:'Anton';src:url(fonts/anton.woff2) format('woff2');font-weight:400;font-display:swap}\n";
[400, 600, 700, 800].forEach((w) => { fontCss += "@font-face{font-family:'Figtree';src:url(fonts/figtree-" + w + ".woff2) format('woff2');font-weight:" + w + ";font-display:swap}\n"; });

const base = `
html,body{margin:0;padding:0;height:100%;overflow:hidden;background:#111418;overscroll-behavior:none;-webkit-text-size-adjust:100%}
*{scrollbar-width:none;-ms-overflow-style:none;-webkit-tap-highlight-color:transparent}
*::-webkit-scrollbar{display:none;width:0;height:0}
#app,.pg-app{position:fixed;inset:0;overflow:hidden}
.pg-screen{position:absolute;inset:0;overflow:hidden}
.pg-screen>[data-dc]>div{height:100% !important}
.pg-install{position:fixed;left:16px;right:16px;top:calc(12px + env(safe-area-inset-top));z-index:50;display:none;align-items:center;gap:12px;padding:12px 12px 12px 18px;border-radius:28px;background:#1F2F2A;color:#ECEEF0;font:600 14px 'Roboto Flex',sans-serif;box-shadow:0 12px 32px rgba(0,0,0,.35)}
.pg-install.show{display:flex}
.pg-install span{flex:1}
.pg-install button{height:44px;padding:0 18px;border:none;border-radius:22px;font:750 14px 'Roboto Flex',sans-serif;cursor:pointer}
.pg-install .yes{background:#9CCFBE;color:#0F1D19}
.pg-install .no{background:transparent;color:#9BA4AE;padding:0 10px}
`;
fs.writeFileSync(path.join(DIST, 'styles.css'), fontCss + base + styles);

// ---- Data ----
for (const f of fs.readdirSync(path.join(SRC, 'data'))) fs.copyFileSync(path.join(SRC, 'data', f), path.join(DIST, 'data', f));

// ---- Icons (made by icons.py) ----
for (const f of fs.readdirSync(path.join(__dirname, 'icons'))) fs.copyFileSync(path.join(__dirname, 'icons', f), path.join(DIST, 'icons', f));

// ---- Manifest ----
fs.writeFileSync(path.join(DIST, 'manifest.webmanifest'), JSON.stringify({
  name: 'Peanut Gallery',
  short_name: 'Peanut Gallery',
  description: 'Be a fly on the wall in group chats full of satire, dark humor and very petty people.',
  start_url: './#/Main',
  scope: './',
  id: './',
  display: 'standalone',
  orientation: 'portrait',
  background_color: '#111418',
  theme_color: '#111418',
  categories: ['entertainment'],
  icons: [
    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    { src: 'icons/monochrome-512.png', sizes: '512x512', type: 'image/png', purpose: 'monochrome' }
  ]
}, null, 2));

// ---- Page ----
fs.writeFileSync(path.join(DIST, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content">
<meta name="theme-color" content="#111418">
<meta name="description" content="Be a fly on the wall in group chats full of satire and dark humor.">
<title>Peanut Gallery</title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/icon-192.png">
<link rel="preload" href="fonts/roboto-flex.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div id="app"></div>
<div class="pg-install" role="dialog" aria-label="Install the app"><span>Put Peanut Gallery on your home screen?</span><button class="no" type="button">Not now</button><button class="yes" type="button">Install</button></div>
<script src="app.js"></script>
<script>
if ('serviceWorker' in navigator) {
  var hadController = !!navigator.serviceWorker.controller, reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', function () { if (hadController && !reloaded) { reloaded = true; location.reload(); } });
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').then(function (r) { r.update(); }); });
}
(function () {
  var bar = document.querySelector('.pg-install'), ev = null;
  function onHome() { return !location.hash || /Main/.test(location.hash); }
  function sync() { bar.classList.toggle('show', !!ev && onHome()); }
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); ev = e; sync(); });
  window.addEventListener('hashchange', sync);
  bar.querySelector('.yes').addEventListener('click', function () { bar.classList.remove('show'); if (ev) { ev.prompt(); ev = null; } });
  bar.querySelector('.no').addEventListener('click', function () { ev = null; bar.classList.remove('show'); });
  window.addEventListener('appinstalled', function () { ev = null; bar.classList.remove('show'); });
})();
</script>
</body>
</html>
`);

// ---- Bundle ----
esbuild.buildSync({ entryPoints: [path.join(__dirname, 'src', 'main.js')], bundle: true, minify: true, format: 'iife', target: ['chrome100'], outfile: path.join(DIST, 'app.js'), legalComments: 'none' });

// ---- Offline cache (service worker) ----
const files = [];
(function walk(dir, rel) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f), r = rel ? rel + '/' + f : f;
    if (fs.statSync(p).isDirectory()) walk(p, r); else if (f !== 'sw.js') files.push(r);
  }
})(DIST, '');
fs.writeFileSync(path.join(DIST, 'sw.js'), `const CACHE = ${JSON.stringify(VERSION)};
const FILES = ${JSON.stringify(['./'].concat(files))};
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
// Network first, so edits show up as soon as you're online; cache as the offline fallback.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || caches.match('./'))));
});
`);
console.log('built', files.length + 1, 'files ->', DIST);
