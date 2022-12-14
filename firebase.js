// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfIjBFN4RcOr_O4kLkTvi8cmwhakzj4Oc",
  authDomain: "fir-auth-a354d.firebaseapp.com",
  projectId: "fir-auth-a354d",
  storageBucket: "fir-auth-a354d.appspot.com",
  messagingSenderId: "975118938736",
  appId: "1:975118938736:web:b5569887732cfc42f9bab5",
  measurementId: "G-V82ECXJ0D8",
  databaseURL: "https://fir-auth-a354d-default-rtdb.firebaseio.com",
};



// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

export const auth = firebase.auth()

export const db = firebase.database()