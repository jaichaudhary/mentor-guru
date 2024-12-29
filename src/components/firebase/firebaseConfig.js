import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqRqfl04RjPrKzzS9OLy8FF-tUZJwNW8o",
    authDomain: "contactform-csat2025.firebaseapp.com",
    databaseURL: "https://contactform-csat2025-default-rtdb.firebaseio.com",
    projectId: "contactform-csat2025",
    storageBucket: "contactform-csat2025.firebasestorage.app",
    messagingSenderId: "582164096514",
    appId: "1:582164096514:web:7062ebc7a97185711fa91b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);  // Initialize Realtime Database

export { db };
