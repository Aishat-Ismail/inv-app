// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjEkcdo6yn8tJm9_pXRzxGcBj1dujIphU",
  authDomain: "inventory-ad930.firebaseapp.com",
  projectId: "inventory-ad930",
  storageBucket: "inventory-ad930.appspot.com",
  messagingSenderId: "216415297191",
  appId: "1:216415297191:web:4f19b0db6cacb55b094582",
  measurementId: "G-M3CCLPERJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;