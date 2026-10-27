/**
 * service-worker.js - PWA Offline Caching & Performance
 * Portal Profesional Arturo Urbina Velasco & AjuscoFix
 */

const CACHE_NAME = "arturourbina-v1.0.3";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/app.js",
  "./js/data.js",
  "./manifest.json",
  "./favicon.ico",
  "./img/favicon-16.png",
  "./img/favicon-32.png",
  "./img/apple-touch-icon.png",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/icon-maskable-192.png",
  "./img/icon-maskable-512.png",
  "./img/og-preview.png"
];

// 1. INSTALACIÓN: Precargar shell de la aplicación
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. ACTIVACIÓN: Limpiar cachés antiguas y tomar control inmediato
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. ESTRATEGIA DE PETICIONES (FETCH)
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Filtrar únicamente peticiones GET
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // No cachear métricas analíticas ni llamadas dinámicas externas de visitas
  if (url.hostname.includes("hits.sh") || url.hostname.includes("api.countapi.xyz")) {
    return;
  }

  // A. Peticiones de navegación (HTML): Estrategia Network-First con fallback a caché offline
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match("./index.html").then((cached) => {
            return cached || caches.match("./");
          });
        })
    );
    return;
  }

  // B. Recursos estáticos locales: Stale-While-Revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // C. CDNs y recursos externos (Google Fonts, FontAwesome): Cache-First con Network Fallback
  if (
    url.hostname.includes("fonts.googleapis.com") ||
    url.hostname.includes("fonts.gstatic.com") ||
    url.hostname.includes("cdnjs.cloudflare.com")
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        }).catch(() => cached);
      })
    );
  }
});
