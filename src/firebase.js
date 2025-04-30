// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import GoogleAuthProvider
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAMgKpHC1XvfGs5KyPVhRpEmEPmdoRu9jk",
  authDomain: "codeblooded124.firebaseapp.com",
  projectId: "codeblooded124",
  storageBucket: "codeblooded124.appspot.com",
  messagingSenderId: "859797914595",
  appId: "1:859797914595:web:8f1c95216f294a66e1d6d6",
  measurementId: "G-MT7BBYJGXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Create and export GoogleAuthProvider
export const provider = new GoogleAuthProvider();
