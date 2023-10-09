// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-mSdKFz_EUX1L_8x2tkF35SO-ky_5E2w",
  authDomain: "event-management-project-5b0da.firebaseapp.com",
  projectId: "event-management-project-5b0da",
  storageBucket: "event-management-project-5b0da.appspot.com",
  messagingSenderId: "624537423666",
  appId: "1:624537423666:web:f2947c0d7cce6e1cb6d12b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;