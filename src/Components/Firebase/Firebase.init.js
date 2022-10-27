// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN4qTjeEgSLJFAPVRfpgQQX2k0VBxbgf4",
  authDomain: "master-study-authentication.firebaseapp.com",
  projectId: "master-study-authentication",
  storageBucket: "master-study-authentication.appspot.com",
  messagingSenderId: "910471523792",
  appId: "1:910471523792:web:77fa2ae4f0bcd3bf7b1dd5",
  measurementId: "G-Y90QDYLZ66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;