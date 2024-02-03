// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLM4U6T-VlRIXjlqHhpCZckjDXl-APPXo",
  authDomain: "chat-3767a.firebaseapp.com",
  projectId: "chat-3767a",
  storageBucket: "chat-3767a.appspot.com",
  messagingSenderId: "788915703953",
  appId: "1:788915703953:web:2619ab677a8a72ba646f30",
  measurementId: "G-RB0LBEKM26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);