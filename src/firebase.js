import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlaT1lEukWDE2RsRbSHhsGyjDLRqp-8tY",
    authDomain: "linkedin-clone-5609b.firebaseapp.com",
    projectId: "linkedin-clone-5609b",
    storageBucket: "linkedin-clone-5609b.appspot.com",
    messagingSenderId: "92728636319",
    appId: "1:92728636319:web:46221d3efd70b4128103aa",
    measurementId: "G-SDHHRFWCQ2"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

