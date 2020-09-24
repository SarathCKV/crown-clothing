import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDti8OKEIzN0580_02Ws78ypMmlQ7kLJyg',
  authDomain: 'crown-clothing-3070b.firebaseapp.com',
  databaseURL: 'https://crown-clothing-3070b.firebaseio.com',
  projectId: 'crown-clothing-3070b',
  storageBucket: 'crown-clothing-3070b.appspot.com',
  messagingSenderId: '976866244567',
  appId: '1:976866244567:web:cc73d8af2d72cb47bfbd92',
  measurementId: 'G-HQ4ZRHRCWX',
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  // console.log(firestore.doc('users/uadhdiahnk'));
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({ displayName, email, createAt, ...addtionalData });
    } catch (e) {
      console.log('Error creating user ', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
