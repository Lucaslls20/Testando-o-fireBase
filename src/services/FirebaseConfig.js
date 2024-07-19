// services/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9yzBD0KFIWlTlPRj1SAIgG8iCtVRQQRI",
  authDomain: "fir-c6857.firebaseapp.com",
  projectId: "fir-c6857",
  storageBucket: "fir-c6857.appspot.com",
  messagingSenderId: "396329451438",
  appId: "1:396329451438:web:ff90866fee81cd9f84523f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
