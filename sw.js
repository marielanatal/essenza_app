// Guarda o app no aparelho para funcionar sem internet.
const CACHE = "rumbo-v19";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Rede primeiro (pega atualizações), cache quando estiver offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const u = e.request.url;
        if (res.ok && (new URL(u).origin === location.origin || u.includes("fonts.") || u.includes("upload.wikimedia.org") || u.includes("wikipedia.org/api/rest_v1/page/") || u.includes("wikipedia.org/w/api.php"))) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
