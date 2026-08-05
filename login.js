import { auth, db } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        admin: user.email === "mecdjhjh37@gmail.com",
        online: true,
        createdAt: Date.now()
      });
    }

    localStorage.setItem("userName", user.displayName || "");
    localStorage.setItem("userPhoto", user.photoURL || "");
    localStorage.setItem("userEmail", user.email || "");
    localStorage.setItem("userId", user.uid);

    window.location.href = "home.html";

  } catch (error) {
    console.error(error);
    alert("فشل تسجيل الدخول: " + error.message);
  }
};
