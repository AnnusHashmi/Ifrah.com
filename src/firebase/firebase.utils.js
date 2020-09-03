import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDFbDfZeVWd5tPvqPniImoCMKYzuBcSuhI",
    authDomain: "ifrahcollections.firebaseapp.com",
    databaseURL: "https://ifrahcollections.firebaseio.com",
    projectId: "ifrahcollections",
    storageBucket: "ifrahcollections.appspot.com",
    messagingSenderId: "354772091511",
    appId: "1:354772091511:web:342a288054baa77440bc72",
    measurementId: "G-9H9PHWGVLC"
  };

var fireDB = firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const db = fireDB.database().ref();

export default firebase;

