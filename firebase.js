// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJWZ11px3bbG-o69_cVc_b-faMmHjkF1s",
  authDomain: "insta-next-edd36.firebaseapp.com",
  projectId: "insta-next-edd36",
  storageBucket: "insta-next-edd36.appspot.com",
  messagingSenderId: "729854532271",
  appId: "1:729854532271:web:ac1434ddb418e45ea1125a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// if getApps().length is 0, initializeApp will create a new app
// if getApps().length is not 0, getApp will return the first app

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
