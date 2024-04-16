// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC41qP75hjyg87-tUtZvjgPXEzINk0zPes",
  authDomain: "netflixgpt-f9d35.firebaseapp.com",
  projectId: "netflixgpt-f9d35",
  storageBucket: "netflixgpt-f9d35.appspot.com",
  messagingSenderId: "22835585410",
  appId: "1:22835585410:web:acb844350cd37bcfda6f9b",
  measurementId: "G-QFF2B1DHC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();