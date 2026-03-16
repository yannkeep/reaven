const CACHE = 'belgitude-v1';
const ASSETS = [
    "./belgitude-autopsie.html",    "./belgitude-cartoon-guide.html"
    "./belgitude-compteur.html",    "./belgitude-et-si.html"
    "./belgitude-fanclub.html",    "./belgitude-ligne-claire.html"
    "./belgitude-machine.html",    "./belgitude-matrix-exclus.html"
    "./belgitude-preuves.html",    "./belgitude-warroom.html"
    "./index.html",    "./manifest.json"
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
});
