// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8TNWcY_GIttT6v24_dca57jumL4W2dIw",
  authDomain: "creativeagency-c761e.firebaseapp.com",
  projectId: "creativeagency-c761e",
  storageBucket: "creativeagency-c761e.appspot.com",
  messagingSenderId: "991923382379",
  appId: "1:991923382379:web:c113ba137dcfadf375e92e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;