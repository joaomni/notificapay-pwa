if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registrado com sucesso:", registration);
    })
    .catch((error) => {
      console.error("Erro ao registrar o Service Worker:", error);
    });
}

// Solicitar permissão para enviar notificações
Notification.requestPermission().then((permission) => {
  console.log("Permissão para notificações:", permission);
});
