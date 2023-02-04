import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_03yU9NGkKwyxdbIgMv1HMGvHJ5Wr1fg",
  authDomain: "fir-react-course-bdfb1.firebaseapp.com",
  projectId: "fir-react-course-bdfb1",
  storageBucket: "fir-react-course-bdfb1.appspot.com",
  messagingSenderId: "112427864589",
  appId: "1:112427864589:web:7e24d6fd9a8e8cad1abb44",
  measurementId: "G-ZYSHF1KZTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
