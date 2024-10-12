import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRUw7ykgtpmtNfaPbLrPR8zAicA3u-QgU",
  authDomain: "netflixgpt-f4c61.firebaseapp.com",
  projectId: "netflixgpt-f4c61",
  storageBucket: "netflixgpt-f4c61.appspot.com",
  messagingSenderId: "531142309942",
  appId: "1:531142309942:web:29e56691732c84abc74097",
  measurementId: "G-RW5D3B4FDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();

