import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs-KK8MC2kxBQtGnRIlvzXCaou8MpHPO4",
  authDomain: "application-cda58.firebaseapp.com",
  projectId: "application-cda58",
  storageBucket: "application-cda58.appspot.com",
  messagingSenderId: "673962670858",
  appId: "1:673962670858:web:e0244844efed2f2fff18f3",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
