import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDeNtG2WgJR47khUpsq8aJz4r5VeN5saic",
  authDomain: "wendigo-db.firebaseapp.com",
  projectId: "wendigo-db",
  storageBucket: "wendigo-db.appspot.com",
  messagingSenderId: "675236691271",
  appId: "1:675236691271:web:12891d98849cfe84b12062",
  measurementId: "G-QFTWR4CNH4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const firestore = getFirestore(app);
export { app, auth }

export const doSignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const doSignOut = () => {
  return auth.signOut()
}