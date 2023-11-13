// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXUltytRfDzWJHYFJL75Dg_WQTQS9cNiI",
  authDomain: "iths-crossplatform-90b8d.firebaseapp.com",
  projectId: "iths-crossplatform-90b8d",
  storageBucket: "iths-crossplatform-90b8d.appspot.com",
  messagingSenderId: "503967350746",
  appId: "1:503967350746:web:f5c778bfd594533d590ae3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
