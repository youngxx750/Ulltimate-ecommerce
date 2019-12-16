import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHSp2eQfwIirlXe-vtQgwAlsjtWX_xXug",
    authDomain: "ecommerce-shop-41c8d.firebaseapp.com",
    databaseURL: "https://ecommerce-shop-41c8d.firebaseio.com",
    projectId: "ecommerce-shop-41c8d",
    storageBucket: "ecommerce-shop-41c8d.appspot.com",
    messagingSenderId: "1098166609846",
    appId: "1:1098166609846:web:10c05de3699df25f60c317",
    measurementId: "G-T9QDGQHNCJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;