// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiAI0Cmn_LnB64ZT7Tb2DGfKL-pYlky3I",
  authDomain: "code-mystique.firebaseapp.com",
  projectId: "code-mystique",
  storageBucket: "code-mystique.appspot.com",
  messagingSenderId: "82490317944",
  appId: "1:82490317944:web:bdd8087a7c721b5859618d",
  measurementId: "G-WLQ78QMXKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);