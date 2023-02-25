// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOdaHaQGgiEhtBf1yUDswNB-BUbURtjDw",
  authDomain: "auth-router-app-75b4f.firebaseapp.com",
  projectId: "auth-router-app-75b4f",
  storageBucket: "auth-router-app-75b4f.appspot.com",
  messagingSenderId: "257663295705",
  appId: "1:257663295705:web:13cd4556980d4733e39ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;