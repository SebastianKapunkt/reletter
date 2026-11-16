const cacheName = 'reletter-v13';
const filesToCache = [
  './',
  './index.html',
  './css/main.css',
  './js/index.js',
  './js/drawing-store.js',
  './js/letters.js',
  './js/letter-renderer.js',
  './alphabet.html',
  './css/alphabet.css',
  './js/alphabet.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names
        .filter(name => name.startsWith('reletter-') && name !== cacheName)
        .map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.registration.scope)) return;
  event.respondWith(
    caches.open(cacheName).then(async cache => {
      const cached = await cache.match(event.request);
      return cached || fetch(event.request);
    })
  );
});
