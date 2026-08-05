const lang = localStorage.getItem("language") || "ar";

const photo = document.getElementById("photo");
const name = document.getElementById("name");
const status = document.getElementById("status");

const createRoom = document.getElementById("createRoom");
const joinRoom = document.getElementById("joinRoom");
const publicRooms = document.getElementById("publicRooms");
const settings = document.getElementById("settings");
const logout = document.getElementById("logout");

// بيانات المستخدم
photo.src = localStorage.getItem("userPhoto") || "default.png";
name.textContent = localStorage.getItem("userName") || "User";

// اللغة
if (lang === "ar") {
  status.textContent = "🟢 متصل الآن";
  createRoom.textContent = "🎙️ إنشاء غرفة";
  joinRoom.textContent = "🚪 دخول غرفة";
  publicRooms.textContent = "🌍 الغرف العامة";
  settings.textContent = "⚙️ الإعدادات";
  logout.textContent = "🚪 تسجيل الخروج";
} else {
  status.textContent = "🟢 Çevrimiçi";
  createRoom.textContent = "🎙️ Oda Oluştur";
  joinRoom.textContent = "🚪 Odaya Katıl";
  publicRooms.textContent = "🌍 Genel Odalar";
  settings.textContent = "⚙️ Ayarlar";
  logout.textContent = "🚪 Çıkış Yap";
}

// تسجيل الخروج
logout.onclick = () => {
  localStorage.removeItem("userName");
  localStorage.removeItem("userPhoto");
  localStorage.removeItem("userEmail");
  window.location.href = "index.html";
};

// أزرار مؤقتة
createRoom.onclick = () => alert("قريبًا: إنشاء غرفة");
joinRoom.onclick = () => alert("قريبًا: دخول غرفة");
publicRooms.onclick = () => alert("قريبًا: الغرف العامة");
settings.onclick = () => alert("قريبًا: الإعدادات");
