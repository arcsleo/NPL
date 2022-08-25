import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJteTgjegPyDgtgk_E-8rKmVXqxTsn46U",
  authDomain: "npl-season-3.firebaseapp.com",
  projectId: "npl-season-3",
  storageBucket: "npl-season-3.appspot.com",
  messagingSenderId: "53552587649",
  appId: "1:53552587649:web:f20be57cfd38b288b2be80",
  measurementId: "G-4H2386WF28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
