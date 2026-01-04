// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnGV8HLkRhcd9aG1HqH8RzVaYRI3dW9vs",
  authDomain: "one-stop-personalized-ca-4f4dc.firebaseapp.com",
  projectId: "one-stop-personalized-ca-4f4dc",
  storageBucket: "one-stop-personalized-ca-4f4dc.firebasestorage.app",
  messagingSenderId: "1076589338040",
  appId: "1:1076589338040:web:5db3cda250d565e1ba034d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;