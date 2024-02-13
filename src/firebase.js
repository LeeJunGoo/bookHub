import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA2EX8iS-pKkX9K4cDzZb9zbfRC7mXcAfw',
  authDomain: 'reactproj-3ea63.firebaseapp.com',
  projectId: 'reactproj-3ea63',
  storageBucket: 'reactproj-3ea63.appspot.com',
  messagingSenderId: '907491810608',
  appId: '1:907491810608:web:eafc33ce716c47a00ebcf5',
  measurementId: 'G-NBPCPYFH27'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
