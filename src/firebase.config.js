
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOLqTuwaudwaACY8pgmgEo3giHh_jdN_A",
  authDomain: "house-marketplace-4ec64.firebaseapp.com",
  projectId: "house-marketplace-4ec64",
  storageBucket: "house-marketplace-4ec64.appspot.com",
  messagingSenderId: "474503530588",
  appId: "1:474503530588:web:5b4f54d3d8e733f7fdfe99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()