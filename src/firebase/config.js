// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfpYo147r00oIGliVpJ9wBwgO86jWmcJ8",
    authDomain: "lena-d6efd.firebaseapp.com",
    projectId: "lena-d6efd",
    storageBucket: "lena-d6efd.appspot.com",
    messagingSenderId: "659568320670",
    appId: "1:659568320670:web:5ac6b957bba019ec011b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);