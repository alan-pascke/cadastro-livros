import { getFirestore } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyApC70fgp1tNetaw3wUyNAmmLQjpMTpNlI",
  authDomain: "site-biblioteca-f2063.firebaseapp.com",
  projectId: "site-biblioteca-f2063",
  storageBucket: "site-biblioteca-f2063.appspot.com",
  messagingSenderId: "390875401436",
  appId: "1:390875401436:web:6ddf016c75bccf380df819"
};


const app = !getApps().length? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);
 
export  {db};