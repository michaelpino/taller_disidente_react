// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHsi05rUGygX5t0Df0SORF0vHnYXpitI0",
  authDomain: "taller-disidente-react.firebaseapp.com",
  projectId: "taller-disidente-react",
  storageBucket: "taller-disidente-react.appspot.com",
  messagingSenderId: "522297108394",
  appId: "1:522297108394:web:1905eca4327b4f355d2dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);