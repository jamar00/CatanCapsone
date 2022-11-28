// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXIg9Z7eG2JhHu9Js36AawPAeFO-KuOiE",
  authDomain: "chat-app-2133d.firebaseapp.com",
  projectId: "chat-app-2133d",
  storageBucket: "chat-app-2133d.appspot.com",
  messagingSenderId: "104922481566",
  appId: "1:104922481566:web:3a43df467555a498b1cc8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)