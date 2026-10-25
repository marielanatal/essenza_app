// Guarda o app no aparelho para funcionar sem internet.
const CACHE = "rumbo-v43";
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
  const isPage = e.request.mode === "navigate" || /\/(index\.html)?(\?.*)?$/.test(new URL(e.request.url).pathname) && new URL(e.request.url).origin === location.origin;
  e.respondWith(
    fetch(isPage ? new Request(e.request, { cache: "no-store" }) : e.request)
      .then(res => {
        const u = e.request.url;
        if (res.ok && (new URL(u).origin === location.origin || u.includes("fonts.") || u.includes("upload.wikimedia.org") || u.includes("thumb.wikimedia.org") || u.includes("wikimedia.org/wiki/Special:FilePath") || u.includes("wikipedia.org/wiki/Special:FilePath") || u.includes("wikipedia.org/api/rest_v1/page/") || u.includes("wikipedia.org/w/api.php") || u.includes("wikivoyage.org/w/api.php"))) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
