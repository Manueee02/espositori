// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW-ub23KMLo9G6dToH9UFuay65Egt6Cv0",
  authDomain: "espositori-b29a6.firebaseapp.com",
  databaseURL: "https://espositori-b29a6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "espositori-b29a6",
  storageBucket: "espositori-b29a6.appspot.com",
  messagingSenderId: "878167947338",
  appId: "1:878167947338:web:11ce88dcb762a087314eb3",
  measurementId: "G-EW6H7SD7MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);