import { getFirestore } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD9aWtlkWmOkC1JQF_oh3K7rq5XU7OBDXM",
  authDomain: "projeto-biblioteca-18cf0.firebaseapp.com",
  projectId: "projeto-biblioteca-18cf0",
  storageBucket: "projeto-biblioteca-18cf0.appspot.com",
  messagingSenderId: "1078716132924",
  appId: "1:1078716132924:web:696233600342c334e49d39"
}


const app = !getApps().length? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);
 
export  {db};