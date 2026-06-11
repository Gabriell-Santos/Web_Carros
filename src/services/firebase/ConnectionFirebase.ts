import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKmldkLSma1umi_Av2cqBqoInwkve9988",
  authDomain: "webcarros-e6532.firebaseapp.com",
  projectId: "webcarros-e6532",
  storageBucket: "webcarros-e6532.firebasestorage.app",
  messagingSenderId: "426586400586",
  appId: "1:426586400586:web:130edca1b9a59f36f203b3",
  measurementId: "G-X1CV72YXQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
