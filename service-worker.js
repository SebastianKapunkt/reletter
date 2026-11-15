var version = '1'
var cacheName = 'reletter-pwa';
var filesToCache = [
  '/reletter/',
  '/reletter/index.html',
  '/reletter/css/main.css',
  '/reletter/js/index.js',
  '/reletter/js/letters.js',
  '/reletter/js/letter-renderer.js',
  '/reletter/alphabet.html',
  '/reletter/css/alphabet.css',
  '/reletter/js/alphabet.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});