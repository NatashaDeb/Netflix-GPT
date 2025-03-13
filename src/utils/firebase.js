// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdyhmeMzLFgFBG51EcqS0VsCFxq8nt1sQ",
  authDomain: "netflix-gpt-a3636.firebaseapp.com",
  projectId: "netflix-gpt-a3636",
  storageBucket: "netflix-gpt-a3636.firebasestorage.app",
  messagingSenderId: "383061827322",
  appId: "1:383061827322:web:0074c049658c5309523343",
  measurementId: "G-WCZRR0FYR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);