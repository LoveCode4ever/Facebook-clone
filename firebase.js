import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDaMyhsz_nwz0R6hTSsWX7cPFOTT8uR6RQ",
  authDomain: "facebook-clone-d2c0e.firebaseapp.com",
  projectId: "facebook-clone-d2c0e",
  storageBucket: "facebook-clone-d2c0e.appspot.com",
  messagingSenderId: "739645344214",
  appId: "1:739645344214:web:e86897c84a747062c1bc77"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)








