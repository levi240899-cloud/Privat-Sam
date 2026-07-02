const CACHE_NAME = 'privat-sam-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './sam.png'
];

// Tahap Install: Menyimpan aset ke cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Tahap Fetch: Mengambil aset dari cache jika offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
