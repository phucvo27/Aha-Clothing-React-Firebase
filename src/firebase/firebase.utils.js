import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDp95wp8XfHtnY6-tvyFP03xmiYZlBP9mc",
    authDomain: "aha-clothing.firebaseapp.com",
    databaseURL: "https://aha-clothing.firebaseio.com",
    projectId: "aha-clothing",
    storageBucket: "",
    messagingSenderId: "261662997330",
    appId: "1:261662997330:web:84049ffacfa86477"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Show pop-up for sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;