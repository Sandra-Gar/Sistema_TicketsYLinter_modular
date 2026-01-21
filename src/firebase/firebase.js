// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC61nEllN-H22I9N94oCYYTdoAG7lpkt4E",
  authDomain: "practica5-c3871.firebaseapp.com",
  projectId: "practica5-c3871",
  storageBucket: "practica5-c3871.firebasestorage.app",
  messagingSenderId: "1074201866190",
  appId: "1:1074201866190:web:3274a0d0dae21936b6459f",
  measurementId: "G-B94QBP7KJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
