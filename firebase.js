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
  measurementId: "G-V82ECXJ0D8"
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  async signIn(email, password) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async register(email, password) {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  async getUserStatus() {
    const user = await this.auth.currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth};