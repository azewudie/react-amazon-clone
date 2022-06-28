import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOledR0ZgXuKs1IOWw-JFkH4dXnvUCiPk",
  authDomain: "clone-a38c4.firebaseapp.com",
  projectId: "clone-a38c4",
  storageBucket: "clone-a38c4.appspot.com",
  messagingSenderId: "335433687929",
  appId: "1:335433687929:web:a794204c8fcce96f7845a8",
  measurementId: "G-FYKW2DVTT7",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
