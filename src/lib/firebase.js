import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBuaxjK2ItSvN2D-H7rxi5J45ReWBZscG8',
  authDomain: 'svelte-todos-f8c8f.firebaseapp.com',
  databaseURL: 'https://svelte-todos-f8c8f.firebaseio.com',
  projectId: 'svelte-todos-f8c8f',
  storageBucket: 'svelte-todos-f8c8f.appspot.com',
  messagingSenderId: '586312041582',
  appId: '1:586312041582:web:c878e7fef6b0f2f2',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
