import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBciOw1gGFpyiskcRpzerHCB4L1Xpu7X_4",
  authDomain: "react-maxti-land.firebaseapp.com",
  projectId: "react-maxti-land",
  storageBucket: "react-maxti-land.appspot.com",
  messagingSenderId: "1007907272996",
  appId: "1:1007907272996:web:2c48425319be8f82e29bb1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)