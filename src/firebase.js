// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2EX8iS-pKkX9K4cDzZb9zbfRC7mXcAfw',
  authDomain: 'reactproj-3ea63.firebaseapp.com',
  projectId: 'reactproj-3ea63',
  storageBucket: 'reactproj-3ea63.appspot.com',
  messagingSenderId: '907491810608',
  appId: '1:907491810608:web:eafc33ce716c47a00ebcf5',
  measurementId: 'G-NBPCPYFH27'
};

/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: 'G-NBPCPYFH27'
};

 */

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
