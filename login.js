import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const lang = localStorage.getItem("language") || "ar";

const title = document.getElementById("title");
const text = document.getElementById("text");
const google = document.getElementById("google");
const back = document.getElementById("back");

if (lang === "ar") {
  title.textContent = "تسجيل الدخول";
  text.textContent = "سجل الدخول باستخدام Google";
  google.textContent = "🔐 تسجيل الدخول بواسطة Google";
  back.textContent = "⬅️ رجوع";
} else {
  title.textContent = "Giriş Yap";
  text.textContent = "Google hesabınızla giriş yapın";
  google.textContent = "🔐 Google ile giriş yap";
  back.textContent = "⬅️ Geri";
}

back.onclick = () => {
  window.location.href = "index.html";
};

google.onclick = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    localStorage.setItem("userName", result.user.displayName || "");
    localStorage.setItem("userPhoto", result.user.photoURL || "");
    localStorage.setItem("userEmail", result.user.email || "");

    window.location.href = "home.html";

  } catch (error) {
    console.error(error);
    alert("فشل تسجيل الدخول: " + error.message);
  }
};
