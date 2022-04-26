// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAo1qJS81Cr1LpwMoVRwJMsbGpGE1j6vE",
    authDomain: "getplanted-cc7ce.firebaseapp.com",
    projectId: "getplanted-cc7ce",
    storageBucket: "getplanted-cc7ce.appspot.com",
    messagingSenderId: "38191716081",
    appId: "1:38191716081:web:13d5b75c8f65ec2edcbb50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);


export default app;