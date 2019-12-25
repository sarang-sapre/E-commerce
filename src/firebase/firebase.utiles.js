import firebase from 'firebase/app';
 import 'firebase/firebase-firestore';
 import 'firebase/firebase-auth';


 const my_config =  {
    apiKey: "AIzaSyCarmMp36hdQWPDfCjmCF16akWMETbXRZo",
    authDomain: "e-commerce-2924d.firebaseapp.com",
    databaseURL: "https://e-commerce-2924d.firebaseio.com",
    projectId: "e-commerce-2924d",
    storageBucket: "e-commerce-2924d.appspot.com",
    messagingSenderId: "626625220660",
    appId: "1:626625220660:web:6d967850e5b9680848fa61",
    measurementId: "G-H93EECN4ZS"
  };

  firebase.initializeApp(my_config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;


