const lang = localStorage.getItem("language") || "ar";

const text = document.getElementById("loginText");
const google = document.getElementById("googleLogin");
const back = document.getElementById("backBtn");


if(lang === "tr"){

    text.textContent = "Giriş Yap";

    google.textContent = "🔐 Google ile giriş yap";

    back.textContent = "⬅️ Geri";


}else{

    text.textContent = "تسجيل الدخول";

    google.textContent = "🔐 تسجيل الدخول بواسطة Google";

    back.textContent = "⬅️ رجوع";

}


back.onclick = function(){

    window.location.href = "index.html";

};
