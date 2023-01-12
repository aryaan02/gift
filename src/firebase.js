// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMJQhrsgPYNA4QtQvQSByvErryZacKYKw",
  authDomain: "happy-birthday-ethan.firebaseapp.com",
  projectId: "happy-birthday-ethan",
  storageBucket: "happy-birthday-ethan.appspot.com",
  messagingSenderId: "874634312474",
  appId: "1:874634312474:web:52c259af8ab0db29824aa3",
  measurementId: "G-G2ZHLG2MS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);