// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkItZGpDZ5LGDKbgo8Anw6JSAf2VDrTHQ",
  authDomain: "authentication-ca486.firebaseapp.com",
  projectId: "authentication-ca486",
  storageBucket: "authentication-ca486.appspot.com",
  messagingSenderId: "475789289405",
  appId: "1:475789289405:web:2ae4e4ecb3dbcea10694d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}