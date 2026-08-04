import { auth, provider } from "./firebase.js";

import {
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// زر تسجيل الدخول
const googleLogin = document.getElementById("googleLogin");


googleLogin.innerHTML = `
<button id="loginBtn">
🔵 تسجيل الدخول بواسطة Google
</button>
`;



const loginBtn = document.getElementById("loginBtn");



loginBtn.onclick = async () => {

  try {

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    alert("مرحبا " + user.displayName);


    // حفظ معلومات المستخدم
    localStorage.setItem("userName", user.displayName);
    localStorage.setItem("userPhoto", user.photoURL);


  } catch(error) {

    console.log(error);

    alert("حدث خطأ في تسجيل الدخول");

  }

};



// زر تغيير اللغة
const langBtn = document.getElementById("langToggleBtn");


langBtn.onclick = () => {

  let lang = localStorage.getItem("language") || "ar";


  if(lang === "ar") {
    localStorage.setItem("language","tr");
  } else {
    localStorage.setItem("language","ar");
  }


  location.reload();

};
