import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxEkEEKSwoAdlmH8dRrRyhygcG-apUWE8",
    authDomain: "facebook-messenger-clone-44308.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-44308.firebaseio.com",
    projectId: "facebook-messenger-clone-44308",
    storageBucket: "facebook-messenger-clone-44308.appspot.com",
    messagingSenderId: "980006546828",
    appId: "1:980006546828:web:2ea5b5ae3b73ea02997aa9",
    measurementId: "G-72270J7VE1"
  });

  const db = firebaseApp.firestore();

  export default db;