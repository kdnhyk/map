// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFtet_I8r4jCljrRdQGgg2HAVaXwTS_rc",
  authDomain: "golmok-b05b7.firebaseapp.com",
  projectId: "golmok-b05b7",
  storageBucket: "golmok-b05b7.appspot.com",
  messagingSenderId: "913712542918",
  appId: "1:913712542918:web:4f6e2849415ce34ec853c7",
  measurementId: "G-HLN1RT5CJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
