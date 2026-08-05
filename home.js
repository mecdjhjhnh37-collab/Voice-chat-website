import { db } from "./firebase.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const lang = localStorage.getItem("language") || "ar";

const photo = document.getElementById("photo");
const name = document.getElementById("name");
const status = document.getElementById("status");
const adminBadge = document.getElementById("adminBadge");

const createRoom = document.getElementById("createRoom");
const joinRoom = document.getElementById("joinRoom");
const publicRooms = document.getElementById("publicRooms");
const settings = document.getElementById("settings");
const logout = document.getElementById("logout");

// بيانات المستخدم
photo.src = localStorage.getItem("userPhoto") || "default.png";
name.textContent = localStorage.getItem("userName") || "User";

// التحقق من الأدمن
const uid = localStorage.getItem("userId");

if (uid) {
  const snap = await getDoc(doc(db, "users", uid));

  if (snap.exists() && snap.data().admin === true) {
    adminBadge.textContent = "👑 ADMIN";
    adminBadge.style.color = "gold";
    adminBadge.style.fontWeight = "bold";
  }
}

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
  localStorage.clear();
  window.location.href = "index.html";
};

// أزرار مؤقتة
createRoom.onclick = () => alert("قريبًا: إنشاء غرفة");
joinRoom.onclick = () => alert("قريبًا: دخول غرفة");
publicRooms.onclick = () => alert("قريبًا: الغرف العامة");
settings.onclick = () => alert("قريبًا: الإعدادات");
