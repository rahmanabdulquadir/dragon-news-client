// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjqQPCuFTxJQB-lZkCioAkuFI-lYo1dWE",
  authDomain: "dragon-news-7fb0b.firebaseapp.com",
  projectId: "dragon-news-7fb0b",
  storageBucket: "dragon-news-7fb0b.appspot.com",
  messagingSenderId: "1055016616343",
  appId: "1:1055016616343:web:08805035829cf1887d04d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;