import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC19KXDdA2YDPs8Z8JRVCj2kFx2y-CxmRA",
    authDomain: "challenge-caafa.firebaseapp.com",
    projectId: "challenge-caafa",
    storageBucket: "challenge-caafa.appspot.com",
    messagingSenderId: "106560593132",
    appId: "1:106560593132:web:e56e2d57691bb129fcd9c9",
    measurementId: "G-4E6N6672X7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};
