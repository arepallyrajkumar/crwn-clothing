import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0mYTywA_UprU0TFrumm3o2JPOx7WGng4",
    authDomain: "crwn-db-e2065.firebaseapp.com",
    projectId: "crwn-db-e2065",
    storageBucket: "crwn-db-e2065.appspot.com",
    messagingSenderId: "394842096693",
    appId: "1:394842096693:web:7606df1f75a476f6991d7c",
    measurementId: "G-SF2HC7EE0E"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot);

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


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () =>(auth.signInWithPopup(provider)) 

  export default firebase;