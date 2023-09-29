importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging-compat.js');

 const firebaseConfig = {
    apiKey: "AIzaSyA4cOoq5HzXl8Exbx3zZJb_4MBj7pbDJSU",
    authDomain: "escola-leticia.firebaseapp.com",
    projectId: "escola-leticia",
    storageBucket: "escola-leticia.appspot.com",
    messagingSenderId: "782148597563",
    appId: "1:782148597563:web:d31d9ecb10790855bb691e"
  };

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const notification = JSON.parse(payload.data.notification);
  const title = notification.title;
  const options = {
    body: notification.body,
    icon: notification.icon,
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('install', function (event) {
  // O escopo é definido durante a instalação do Service Worker
  event.waitUntil(
    self.skipWaiting()
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    self.clients.claim()
  );
});
