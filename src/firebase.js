// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcTPS9mkP4m37fGVXNPKz0nO0plHPzIyU",
  authDomain: "players-45ab5.firebaseapp.com",
  projectId: "players-45ab5",
  storageBucket: "players-45ab5.appspot.com",
  messagingSenderId: "1053643628103",
  appId: "1:1053643628103:web:deccadd57396bfb79e1b62",
  measurementId: "G-FHQE02KBJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();