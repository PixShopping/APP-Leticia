importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js");

// Configuração do OneSignal
var OneSignal = self.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "7f7ebe08-4826-4b89-a30e-2232f5fd59b5",
    // Outras configurações do OneSignal
  });
});

// Lida com a recepção de notificações push
self.addEventListener('push', function(event) {
  // Decodifique os dados da notificação push
  var notificationData = event.data.json();

  // Exiba a notificação
  self.registration.showNotification(notificationData.title, {
    body: notificationData.body,
    icon: notificationData.icon,
    // Outras opções de notificação
  });
});

// Lida com o evento de clique na notificação
self.addEventListener('notificationclick', function(event) {
  // Lida com o evento de clique na notificação, por exemplo, redirecionando para uma página específica
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://example.com/link-da-notificacao')
  );
});
