// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsMEzf6My6eJ9fdOJjGC83X0toyhW09Iw",
  authDomain: "brand-shop-client-1a3b1.firebaseapp.com",
  projectId: "brand-shop-client-1a3b1",
  storageBucket: "brand-shop-client-1a3b1.appspot.com",
  messagingSenderId: "43021280213",
  appId: "1:43021280213:web:bb1c1af785b5ecf74c935c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;