import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbKyNmOhw-vR1oRV3vdAHv2kHdXjdbyy4",
  authDomain: "around-the-block-6accb.firebaseapp.com",
  projectId: "around-the-block-6accb",
  storageBucket: "around-the-block-6accb.firebasestorage.app",
  messagingSenderId: "1089814184094",
  appId: "1:1089814184094:web:21687889bddc47a23abb8f",
  measurementId: "G-C8XGWBS8BG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in other parts of your app
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;
