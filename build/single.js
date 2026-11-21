const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'dist');
let css = fs.readFileSync(path.join(D, 'styles.css'), 'utf8');
css = css.replace(/url\(fonts\/([\w-]+\.woff2)\)/g, (_, f) => 'url(data:font/woff2;base64,' + fs.readFileSync(path.join(D, 'fonts', f)).toString('base64') + ')');
const data = {};
for (const f of fs.readdirSync(path.join(D, 'data'))) data[f.replace('.json', '')] = JSON.parse(fs.readFileSync(path.join(D, 'data', f), 'utf8'));
const js = fs.readFileSync(path.join(D, 'app.js'), 'utf8').replace(/<\/script/gi, '<\\/script');
const icon = 'data:image/png;base64,' + fs.readFileSync(path.join(D, 'icons', 'icon-192.png')).toString('base64');
const shim = 'window.__PG_DATA=' + JSON.stringify(data).replace(/<\//g, '<\\/') + ';(function(){var f=window.fetch;window.fetch=function(u){var m=String(u).match(/data\\/(\\w+)\\.json/);if(m&&window.__PG_DATA[m[1]]){return Promise.resolve(new Response(JSON.stringify(window.__PG_DATA[m[1]]),{headers:{"Content-Type":"application/json"}}));}return f.apply(this,arguments);};})();';
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content">
<meta name="theme-color" content="#111418">
<title>Peanut Gallery</title>
<link rel="icon" type="image/png" href="${icon}">
<style>${css}</style>
</head>
<body>
<div id="app"></div>
<script>${shim}</script>
<script>${js}</script>
</body>
</html>`;
fs.writeFileSync(path.join(D, 'PeanutGallery.html'), html);
console.log((html.length / 1024).toFixed(0) + ' KB');
