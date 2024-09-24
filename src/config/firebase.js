// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMYDDo2pbzZcwXTfFVQ0mVWi7kg92ppaA",
  authDomain: "koifishdelivery.firebaseapp.com",
  projectId: "koifishdelivery",
  storageBucket: "koifishdelivery.appspot.com",
  messagingSenderId: "1037855203729",
  appId: "1:1037855203729:web:ba4f6aab147336af64fa30",
  measurementId: "G-RVB52VGQKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
export { googleProvider, auth };
