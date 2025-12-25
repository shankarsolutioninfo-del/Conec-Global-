import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDvXsBfv1vE84OTy3JScdMnIhfCQVsc7RQ",
  authDomain: "conec-solutions.firebaseapp.com",
  projectId: "conec-solutions",
  storageBucket: "conec-solutions.firebasestorage.app",
  messagingSenderId: "926411436680",
  appId: "1:926411436680:web:49a380e117cc9c8270e53d",
  measurementId: "G-0LFH75QPWD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
