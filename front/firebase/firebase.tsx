
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt2zUvmuweoa_AOtCIaSaul8EBmaldjVw",
  authDomain: "fukuro-94686.firebaseapp.com",
  projectId: "fukuro-94686",
  storageBucket: "fukuro-94686.appspot.com",
  messagingSenderId: "750693144105",
  appId: "1:750693144105:web:f0672508d66f2836a12e38",
  measurementId: "G-7XSEGCBCMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);