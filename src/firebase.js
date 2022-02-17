import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhvYFzhXIfQxHAotfGfSX6P1WFjYQnnIo",
    authDomain: "clone-challenge-18402.firebaseapp.com",
    projectId: "clone-challenge-18402",
    storageBucket: "clone-challenge-18402.appspot.com",
    messagingSenderId: "523021184902",
    appId: "1:523021184902:web:3c8e633357339bfd540607",
    measurementId: "G-WB43QLJ06S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};