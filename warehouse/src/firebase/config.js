import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBazUaSFVC9oTi_im5TML8qKndL3IeeIL4",
  authDomain: "warehouse-stock-01.firebaseapp.com",
  projectId: "warehouse-stock-01",
  storageBucket: "warehouse-stock-01.appspot.com",
  messagingSenderId: "706423822551",
  appId: "1:706423822551:web:297fff85bb7c7aecea3892",
  measurementId: "G-HXY2Q8S9N9"
};

const app = initializeApp(firebaseConfig);