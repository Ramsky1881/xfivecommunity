// Simple service worker for caching
const CACHE_NAME = 'xfive-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'assets/style.css',
    'assets/script.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});