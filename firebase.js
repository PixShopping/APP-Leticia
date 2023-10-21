const firebaseConfig = {
    apiKey: "AIzaSyC6aMNEjsgeGK-rw4hzLUximzh1YQ6OEII",
    authDomain: "banco-de-dados-32cac.firebaseapp.com",
    projectId: "banco-de-dados-32cac",
    storageBucket: "banco-de-dados-32cac.appspot.com",
    messagingSenderId: "1001209948956",
    appId: "1:1001209948956:web:e28198053d747377aee8d9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = firebase.firestore();
