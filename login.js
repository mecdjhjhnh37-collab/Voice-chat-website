import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// زر تسجيل الدخول
const googleLogin = document.getElementById("googleLogin");


// عند الضغط على زر جوجل
googleLogin.onclick = async () => {

  try {

    const provider = new GoogleAuthProvider();


    const result = await signInWithPopup(
      auth,
      provider
    );


    const user = result.user;


    // حفظ بيانات المستخدم

    localStorage.setItem(
      "userName",
      user.displayName || ""
    );

    localStorage.setItem(
      "userPhoto",
      user.photoURL || ""
    );

    localStorage.setItem(
      "userEmail",
      user.email || ""
    );

    localStorage.setItem(
      "userId",
      user.uid
    );


    // الذهاب للصفحة الرئيسية

    window.location.href = "home.html";


  } catch(error) {


    console.error(error);


    alert(
      "فشل تسجيل الدخول: " + error.message
    );


  }

};
