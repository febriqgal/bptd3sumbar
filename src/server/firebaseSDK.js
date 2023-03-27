import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeUslNhk0lij0ZeFNhYJbgCSeApjJxeoQ",
  authDomain: "bptd3sumbar-8e26d.firebaseapp.com",
  projectId: "bptd3sumbar-8e26d",
  storageBucket: "bptd3sumbar-8e26d.appspot.com",
  messagingSenderId: "301200330502",
  appId: "1:301200330502:web:d46500cbaf5f584e309887",
  measurementId: "G-JVTSMBQQ83",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const FirebaseStorage = getStorage(app);
const auth = getAuth(app);
export { db, FirebaseStorage, auth };
export const Authentication = () => {
  return auth;
};
export default app;
