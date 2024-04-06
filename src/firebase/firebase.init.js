// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDgGbnzbKnW3hbpBm50bPGYzIWPR71bIY",
  authDomain: "travel-guru-1cc26.firebaseapp.com",
  projectId: "travel-guru-1cc26",
  storageBucket: "travel-guru-1cc26.appspot.com",
  messagingSenderId: "706254407651",
  appId: "1:706254407651:web:ea37bb543b724b878642d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;