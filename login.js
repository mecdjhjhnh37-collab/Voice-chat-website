import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const googleBtn = document.getElementById("googleLogin");
const backBtn = document.getElementById("backBtn");

backBtn.onclick = () => {
  window.location.href = "index.html";
};

googleBtn.onclick = async () => {

  try {

    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);

    window.location.href = "home.html";

  } catch (e) {

    alert("فشل تسجيل الدخول");

    console.error(e);

  }

};
