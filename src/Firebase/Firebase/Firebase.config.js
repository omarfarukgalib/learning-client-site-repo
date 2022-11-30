// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyBN4qTjeEgSLJFAPVRfpgQQX2k0VBxbgf4",
//   authDomain: "master-study-authentication.firebaseapp.com",
//   projectId: "master-study-authentication",
//   storageBucket: "master-study-authentication.appspot.com",
//   messagingSenderId: "910471523792",
//   appId: "1:910471523792:web:77fa2ae4f0bcd3bf7b1dd5",
//   measurementId: "G-Y90QDYLZ66"
// };


// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH5fcOCt4u4U_ZQof8zg2Bspt92_tJwpA",
  authDomain: "assignment-10-84d00.firebaseapp.com",
  projectId: "assignment-10-84d00",
  storageBucket: "assignment-10-84d00.appspot.com",
  messagingSenderId: "154099189240",
  appId: "1:154099189240:web:2d8333b8bb492cca65c20d",
  measurementId: "G-7WTXPZFDSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;