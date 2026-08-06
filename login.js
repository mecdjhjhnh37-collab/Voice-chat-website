const lang = localStorage.getItem("language") || "ar";

const loginText = document.getElementById("loginText");
const googleLogin = document.getElementById("googleLogin");
const backBtn = document.getElementById("backBtn");


if (lang === "tr") {

    loginText.textContent = "Giriş Yap";

    googleLogin.textContent = "🔐 Google ile giriş yap";

    backBtn.textContent = "⬅️ Geri";


} else {

    loginText.textContent = "تسجيل الدخول";

    googleLogin.textContent = "🔐 تسجيل الدخول بواسطة Google";

    backBtn.textContent = "⬅️ رجوع";

}


backBtn.onclick = () => {

    window.location.href = "index.html";

};
