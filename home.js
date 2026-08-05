import { db } from "./firebase.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const lang = localStorage.getItem("language") || "ar";


const photo = document.getElementById("photo");
const name = document.getElementById("name");
const status = document.getElementById("status");
const appId = document.getElementById("appId");
const adminBadge = document.getElementById("adminBadge");


const createRoom = document.getElementById("createRoom");
const joinRoom = document.getElementById("joinRoom");
const publicRooms = document.getElementById("publicRooms");
const friends = document.getElementById("friends");
const settings = document.getElementById("settings");
const logout = document.getElementById("logout");


const searchInput = document.getElementById("searchId");
const searchBtn = document.getElementById("searchBtn");


// عرض بيانات المستخدم

photo.src = localStorage.getItem("userPhoto") || "default.png";

name.textContent = localStorage.getItem("userName") || "User";

appId.textContent =
"🆔 " + (localStorage.getItem("appId") || "غير موجود");


// فحص الأدمن

const uid = localStorage.getItem("userId");

if (uid) {

  const userDoc = await getDoc(doc(db, "users", uid));

  if (userDoc.exists()) {

    const user = userDoc.data();

    if (user.admin === true) {

      adminBadge.textContent = "👑 ADMIN";
      adminBadge.style.color = "gold";
      adminBadge.style.fontWeight = "bold";

    }

  }

}


// اللغة

if (lang === "ar") {

  status.textContent = "🟢 متصل الآن";

  createRoom.textContent = "🎙️ إنشاء غرفة";

  joinRoom.textContent = "🚪 دخول غرفة";

  publicRooms.textContent = "🌍 الغرف العامة";

  friends.textContent = "👥 الأصدقاء";

  settings.textContent = "⚙️ الإعدادات";

  logout.textContent = "🚪 تسجيل الخروج";

  searchInput.placeholder = "🆔 اكتب ID المستخدم";

  searchBtn.textContent = "🔍 بحث عن صديق";


} else {


  status.textContent = "🟢 Çevrimiçi";

  createRoom.textContent = "🎙️ Oda Oluştur";

  joinRoom.textContent = "🚪 Odaya Katıl";

  publicRooms.textContent = "🌍 Genel Odalar";

  friends.textContent = "👥 Arkadaşlar";

  settings.textContent = "⚙️ Ayarlar";

  logout.textContent = "🚪 Çıkış Yap";

  searchInput.placeholder = "🆔 Kullanıcı ID yaz";

  searchBtn.textContent = "🔍 Arkadaş Ara";

}


// تسجيل الخروج

logout.onclick = () => {

  localStorage.clear();

  window.location.href = "index.html";

};


// أزرار مؤقتة

createRoom.onclick = () => {
  window.location.href = "create-room.html";
};

joinRoom.onclick = () => alert("قريباً: دخول غرفة");

publicRooms.onclick = () => alert("قريباً: الغرف العامة");

settings.onclick = () => alert("قريباً: الإعدادات");



