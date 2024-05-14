// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqE2gLdmhMSAs-iLLK1dElu_5k4cW4V7I",
  authDomain: "utn-react-auth.firebaseapp.com",
  projectId: "utn-react-auth",
  storageBucket: "utn-react-auth.appspot.com",
  messagingSenderId: "55625763665",
  appId: "1:55625763665:web:518eb8ad79416ba4d5a170",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Set persistence to Local Storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to LocalStorage.");
  })
  .catch((err) => {
    console.error("Error setting auth persistence:", err);
  });