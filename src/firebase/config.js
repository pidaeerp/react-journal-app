// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeiY5xPUtFz3im6u7LFYTHkizFHI06Rvc",
  authDomain: "react-cursos-orva.firebaseapp.com",
  projectId: "react-cursos-orva",
  storageBucket: "react-cursos-orva.firebasestorage.app",
  messagingSenderId: "612103095975",
  appId: "1:612103095975:web:390385e55d5fafd30efd82",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
