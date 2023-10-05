import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9Q_wbGz30T_SUw_SdQp05Czf0D7_4AXc",
  authDomain: "laundry-2-51d31.firebaseapp.com",
  projectId: "laundry-2-51d31",
  storageBucket: "laundry-2-51d31.appspot.com",
  messagingSenderId: "207910540560",
  appId: "1:207910540560:web:6c7d784c9129fe0fd80195",
  measurementId: "G-ZSD3N9PTKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
