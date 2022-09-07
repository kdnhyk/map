// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHIfmcxHZTcNhJ2QKTgpFy0RbY2u00nSU",
  authDomain: "golmok-754ee.firebaseapp.com",
  projectId: "golmok-754ee",
  storageBucket: "golmok-754ee.appspot.com",
  messagingSenderId: "26490698762",
  appId: "1:26490698762:web:c4565aa8397bc0114d73f3",
  measurementId: "G-KX40LJLZXG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
