import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBwU04o5eyWl5NR97T0NxMUE0OnOFsW-hw",
  authDomain: "online-clothing-shop-db.firebaseapp.com",
  projectId: "online-clothing-shop-db",
  storageBucket: "online-clothing-shop-db.appspot.com",
  messagingSenderId: "298913017576",
  appId: "1:298913017576:web:937ded63b03f8877ed235d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
