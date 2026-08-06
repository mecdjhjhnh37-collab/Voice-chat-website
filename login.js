import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const googleLogin = document.getElementById("googleLogin");


googleLogin.onclick = async function(){

try{

const provider = new GoogleAuthProvider();


const result = await signInWithPopup(
    auth,
    provider
);


const user = result.user;


// حفظ معلومات المستخدم

localStorage.setItem("userName", user.displayName || "");

localStorage.setItem("userPhoto", user.photoURL || "");

localStorage.setItem("userEmail", user.email || "");

localStorage.setItem("userId", user.uid);


// الانتقال للصفحة الرئيسية

window.location.href = "home.html";


}

catch(error){

console.error(error);

alert("خطأ في تسجيل الدخول: " + error.message);

}


};
