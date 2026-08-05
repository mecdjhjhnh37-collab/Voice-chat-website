import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWbXT_sP3AE_YnYDiUf338MLPXpf2kk2s",
  authDomain: "mecd-voice-7beea.firebaseapp.com",
  projectId: "mecd-voice-7beea",
  storageBucket: "mecd-voice-7beea.firebasestorage.app",
  messagingSenderId: "203377764807",
  appId: "1:203377764807:web:63f65a4c24fc944a2951e2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
