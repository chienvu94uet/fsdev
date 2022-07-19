// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCt8SA2b6lLvYJt54j44OvlcTeGhM_2c8o",
  authDomain: "fsdev-f73fc.firebaseapp.com",
  projectId: "fsdev-f73fc",
  storageBucket: "fsdev-f73fc.appspot.com",
  messagingSenderId: "1075108464050",
  appId: "1:1075108464050:web:8be2be2b58546ca770d0ab",
  measurementId: "G-MX3N5PRHJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
