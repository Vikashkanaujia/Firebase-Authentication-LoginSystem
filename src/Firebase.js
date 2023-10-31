// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaTwtjnq7Ob3-VyDmjW7nOqg_VDaDPKcY",
  authDomain: "relu-consultancy-task.firebaseapp.com",
  projectId: "relu-consultancy-task",
  storageBucket: "relu-consultancy-task.appspot.com",
  messagingSenderId: "153366533485",
  appId: "1:153366533485:web:c646122f27db2e6ff23664",
  measurementId: "G-6R769PG33F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export  {app ,auth};