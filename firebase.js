// Import the functions you need from the SDKs you need
// import { initializeApp, createUserWithEmailAndPassword,  } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6jnwi5vHR5hhTP8hrEmQnF1hivPu8hIs",
  authDomain: "recipe-app-78b7d.firebaseapp.com",
  projectId: "recipe-app-78b7d",
  storageBucket: "recipe-app-78b7d.appspot.com",
  messagingSenderId: "972286807942",
  appId: "1:972286807942:web:1ecc79294ea863fe092607"
};

// Initialize Firebase
// Use this to initialize the firebase App

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
