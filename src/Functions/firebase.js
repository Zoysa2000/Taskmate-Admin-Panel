import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqLgmAb5jdvxrD-kl6eZKeB2nq6A-rpro",
  authDomain: "taskmateb1.firebaseapp.com",
  projectId: "taskmateb1",
  storageBucket: "taskmateb1.appspot.com",
  messagingSenderId: "764966431946",
  appId: "1:764966431946:web:66e978035aa9c93f9d9833",
  measurementId: "G-6CVBPV1L62"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();
export {auth};
export{provider};
export const db=getFirestore(app)