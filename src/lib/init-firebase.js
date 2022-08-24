import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNUMmEAUkpIbtF7CKVD5Kbz3mAL-uzGNc",
  authDomain: "npl-s3.firebaseapp.com",
  databaseURL: "https://npl-s3-default-rtdb.firebaseio.com",
  projectId: "npl-s3",
  storageBucket: "npl-s3.appspot.com",
  messagingSenderId: "1006251517289",
  appId: "1:1006251517289:web:346108c2b482355d6949f8",
  measurementId: "G-W5DK1J9YS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
