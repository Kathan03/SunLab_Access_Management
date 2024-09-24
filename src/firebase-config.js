import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

var APIKey = "AIzaSyA-EZGvHzOeZTLJ2FGl3M1UxVzhjxv0ouk" 

// forming connection with the firestore database
const firebaseConfig = {
    apiKey: APIKey,
    authDomain: "cmpsc487-project-1.firebaseapp.com",
    projectId: "cmpsc487-project-1",
    storageBucket: "cmpsc487-project-1.appspot.com",
    messagingSenderId: "234954614874",
    appId: "1:234954614874:web:3fbe5c0980d36755fc9063",
    measurementId: "G-72FFHR2KSR"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore()