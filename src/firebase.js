// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDc3jwaWyh1uMmfp5viku-bxpBX4MzgNx8",
  authDomain: "linkedin-clone-1b802.firebaseapp.com",
  projectId: "linkedin-clone-1b802",
  storageBucket: "linkedin-clone-1b802.appspot.com",
  messagingSenderId: "1042373461943",
  appId: "1:1042373461943:web:16c7365c01b76eb3c8ca32",
  measurementId: "G-L06CZXB3LF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
