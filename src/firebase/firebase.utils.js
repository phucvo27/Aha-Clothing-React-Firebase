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

// firestore create user

export const createUserProfileDocument = async (userAuth, additionalData = {}) =>{
  if(!userAuth) return; // if user does not login !
  // 1. Point to the Document in Users collection on firestore -> and get documentRef for CRUD 

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // 2. Get Snapshot of that Document for checking that document is already exist or not

  const snapshot = await userRef.get();
  if(!snapshot.exists){
    // 3. if snapshot does not exist <=> create new user document

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(e){
      console.log('Error when creating new user', e);
    }
  }
  return userRef;
}


// Create provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Show pop-up for sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;