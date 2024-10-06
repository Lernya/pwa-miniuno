
// importScripts(
//     'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
// );
// // Workbox vorlaeufig als CDN https://developer.chrome.com/docs/workbox/modules/workbox-sw
  
// // Enabling caching
// // Matches routes to images in project
// workbox.routing.registerRoute(
// ({request}) => request.destination === 'image',
// // Sind sie einmal gematcht, dann Strategiewahl
// // Prio Cache vor online, gut fuer Images, die sich nicht aendern // Alternative new workbox.strategies.NetworkFirst()
// new workbox.strategies.CacheFirst()
// );

// Der Service Worker sorgt dafür, dass die PWA offline funktioniert und Daten cachen kann. 

const cacheName = 'app1-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Installationsprozess des Service Workers
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Anfragen abfangen und aus dem Cache laden
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
