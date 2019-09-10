import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import { collections } from '../pages/homepage/shop-data-dev'
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

// Add collections and items to firestore
export const addCollectionAndItems = async (collectionKey, objectToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // let firestore generate the id for us
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection)=>{
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
          } , {})
}
// async function addToFirebse(){
//   console.log()
//   try{
//     await addCollectionAndItems('collections', collections.map(({title, items}) => ({title, items})))
//     console.log('Added success')
//   }catch(e){
//     console.log('Something wrong')
//   }
// }
//addToFirebse()
// Create provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Show pop-up for sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;