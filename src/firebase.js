import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDjWIZ1lO_wYGer2Yrr82bprC2HQQGbMTk',
  authDomain: 'bookhub-fbb82.firebaseapp.com',
  projectId: 'bookhub-fbb82',
  storageBucket: 'bookhub-fbb82.appspot.com',
  messagingSenderId: '881370622172',
  appId: '1:881370622172:web:913fb62c971237adbdec19'
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
