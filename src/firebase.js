import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ7BT9T1966IdajUtprFpuoikjjBHDN98",
  authDomain: "chatapp-7f5c8.firebaseapp.com",
  databaseURL: "https://chatapp-7f5c8-default-rtdb.firebaseio.com",
  projectId: "chatapp-7f5c8",
  storageBucket: "chatapp-7f5c8.appspot.com",
  messagingSenderId: "714852084694",
  appId: "1:714852084694:web:58de488419894182439277",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
