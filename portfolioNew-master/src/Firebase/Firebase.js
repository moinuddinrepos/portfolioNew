// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDshh5nWyC_F13kkuKnby-f1sAx9hA-cMo",
  authDomain: "portfolio-b7796.firebaseapp.com",
  projectId: "portfolio-b7796",
  storageBucket: "portfolio-b7796.firebasestorage.app",
  messagingSenderId: "141659361376",
  appId: "1:141659361376:web:563a53279fb9a7ec147305",
  measurementId: "G-RH4YX1MQ6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);