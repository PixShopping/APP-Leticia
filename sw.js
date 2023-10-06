/*// FIRESTORE FIREBASE
importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore-compat.js");

// APP FIREBASE
importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-app-compat.js");
*/

self.addEventListener('activate', function(event) {
    console.log('Service Worker Ativado!');
});

// Inicialize o Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDycp-UivNqvo5h5PdjYwL0UyCzCvKGgNw",
    authDomain: "banco-de-dados-leticia.firebaseapp.com",
    projectId: "banco-de-dados-leticia",
    storageBucket: "banco-de-dados-leticia.appspot.com",
    messagingSenderId: "230701596733",
    appId: "1:230701596733:web:4c52051fd1e7290e282a54"
  };

const db = firebase.firestore();
const RESPONSAVEL = localStorage.getItem('responsavel');

// Pegar o ANO LETICO ATUAL
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
localStorage.setItem('ano', anoAtual);
const ANO = localStorage.getItem('ano');

// Função para verificar a existência da coleção no Firebase
function verificaColecao() {
  // Substitua 'nomeDaSuaColecao' pelo nome da coleção que você deseja verificar
  db.collection(ANO)
  .doc("mensagens")
  .collection(RESPONSAVEL)
  .get().then((existe) => {
    const tamanho = existe.size;
    console.log(tamanho);
    if (tamanho > 0) {
        self.registration.showNotification("Coleção encontrada", {
            body: "A coleção foi encontrada no Firebase!",
            icon: "./src/img/icon.png"
        });
    }
  });
  
}
  
// Configurar o intervalo de verificação (5 segundos)
setInterval(verificaColecao, 5000);
/*// FIRESTORE FIREBASE
importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore-compat.js");

// APP FIREBASE
importScripts("https://www.gstatic.com/firebasejs/10.3.0/firebase-app-compat.js");
*/

// Inicialize o Firebase
/*const firebaseConfig = {
    apiKey: "AIzaSyDycp-UivNqvo5h5PdjYwL0UyCzCvKGgNw",
    authDomain: "banco-de-dados-leticia.firebaseapp.com",
    projectId: "banco-de-dados-leticia",
    storageBucket: "banco-de-dados-leticia.appspot.com",
    messagingSenderId: "230701596733",
    appId: "1:230701596733:web:4c52051fd1e7290e282a54"
  };

const db = firebase.firestore();
const RESPONSAVEL = localStorage.getItem('responsavel');

// Pegar o ANO LETICO ATUAL
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
localStorage.setItem('ano', anoAtual);
const ANO = localStorage.getItem('ano');

// Função para verificar a existência da coleção no Firebase
function verificaColecao() {
  // Substitua 'nomeDaSuaColecao' pelo nome da coleção que você deseja verificar
  db.collection(ANO)
  .doc("mensagens")
  .collection(RESPONSAVEL)
  .get().then((existe) => {
    const tamanho = existe.size;
    console.log(tamanho);
    if (tamanho > 0) {
        self.registration.showNotification("Coleção encontrada", {
            body: "A coleção foi encontrada no Firebase!",
            icon: "./src/img/icon.png"
        });
    }
  });
  
}
  
// Configurar o intervalo de verificação (5 segundos)
setInterval(verificaColecao, 5000);*/
