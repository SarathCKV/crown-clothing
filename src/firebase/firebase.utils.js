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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
