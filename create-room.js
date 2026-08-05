import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// العناصر

const createBtn = document.getElementById("create");

const roomName = document.getElementById("roomName");
const type = document.getElementById("type");
const password = document.getElementById("password");
const people = document.getElementById("people");


// إنشاء الغرفة

createBtn.onclick = async () => {

  const name = roomName.value.trim();

  if(!name){

    alert("اكتب اسم الغرفة");
    return;

  }


  try {

    const room = await addDoc(collection(db,"rooms"),{

      name:name,

      type:type.value,

      password:password.value || "",

      people:Number(people.value) || 10,

      owner:localStorage.getItem("userId"),

      ownerName:localStorage.getItem("userName"),

      createdAt:Date.now()

    });


    localStorage.setItem("roomId", room.id);


    window.location.href = "room.html";


  } catch(error){

    console.error(error);

    alert("حدث خطأ: " + error.message);

  }


};
