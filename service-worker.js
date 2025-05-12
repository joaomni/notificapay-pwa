self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Notificação Push
self.addEventListener('push', (event) => {
  const data = event.data.json();
  const title = data.title || 'Venda aprovada!';
  const options = {
    body: data.body || 'Sua comissão: R$ 147,00',
    icon: data.icon || '/icons/ic_kirvano.jpg'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
