import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "roomora.firebaseapp.com",
  projectId: "roomora",
  storageBucket: "roomora.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeKLSXeu0lNsqRDjpGLjixNCbfvt5x1Jc",
  authDomain: "roomora-767e0.firebaseapp.com",
  projectId: "roomora-767e0",
  storageBucket: "roomora-767e0.firebasestorage.app",
  messagingSenderId: "191627130700",
  appId: "1:191627130700:web:b010ef065e9fdd522f01e9",
  measurementId: "G-JJHFLW1LBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);

export default app;