import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy8J_G1XwnnSBLgtfhw8hanpoXABaYZxw",
  authDomain: "dream-diary-2b45a.firebaseapp.com",
  projectId: "dream-diary-2b45a",
  storageBucket: "dream-diary-2b45a.firebasestorage.app",
  messagingSenderId: "92733621261",
  appId: "1:92733621261:web:7ef8bf02c94d14a0c68144",
  measurementId: "G-W32GQ62LDG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);