
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBibVPFTaKWnH54ECXEtIC_CAri2GxpyOo",
    authDomain: "artgallary-6cbd6.firebaseapp.com",
    projectId: "artgallary-6cbd6",
    storageBucket: "artgallary-6cbd6.appspot.com",
    messagingSenderId: "519709325660",
    appId: "1:519709325660:web:15dd1cce52f8f65bcaa999",
    measurementId: "G-HB49N41TSQ"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export default app;
