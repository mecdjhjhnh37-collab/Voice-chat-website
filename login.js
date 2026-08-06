import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const googleLogin = document.getElementById("google");


googleLogin.onclick = async () => {

  try {

    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    localStorage.setItem("userName", user.displayName || "");
    localStorage.setItem("userPhoto", user.photoURL || "");
    localStorage.setItem("userEmail", user.email || "");
    localStorage.setItem("userId", user.uid);

    window.location.href = "home.html";

  } catch (error) {

    console.error(error);

    alert("خطأ في تسجيل الدخول: " + error.message);

  }

};
