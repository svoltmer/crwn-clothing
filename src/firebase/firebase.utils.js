import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBMJY4HPn8w4S2G49PtphiivSf_ncb8kuU",
  authDomain: "crwn-db-c5e2f.firebaseapp.com",
  databaseURL: "https://crwn-db-c5e2f.firebaseio.com",
  projectId: "crwn-db-c5e2f",
  storageBucket: "crwn-db-c5e2f.appspot.com",
  messagingSenderId: "745264946592",
  appId: "1:745264946592:web:c43cc99e8e05e34fc758c5",
  measurementId: "G-NGSC0D0P1V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
