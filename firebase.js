// Import the functions you need from the SDKs you need
// import { initializeApp, createUserWithEmailAndPassword,  } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // Fire base API key, authdomain, projectID, storageBucket, messagingSenderId, appId.
};

// Initialize Firebase
// Use this to initialize the firebase App

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
