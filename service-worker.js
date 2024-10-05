
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
// Workbox vorlaeufig als CDN https://developer.chrome.com/docs/workbox/modules/workbox-sw
  
// Enabling caching
// Matches routes to images in project
workbox.routing.registerRoute(
({request}) => request.destination === 'image',
// Sind sie einmal gematcht, dann Strategiewahl
// Prio Cache vor online, gut fuer Images, die sich nicht aendern // Alternative new workbox.strategies.NetworkFirst()
new workbox.strategies.CacheFirst()
);

