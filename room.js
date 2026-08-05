import { db } from "./firebase.js";


import {

doc,
getDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const roomName = document.getElementById("roomName");

const roomId = document.getElementById("roomId");

const membersList = document.getElementById("membersList");

const messageInput = document.getElementById("messageInput");

const send = document.getElementById("send");

const messages = document.getElementById("messages");




// جلب رقم الغرفة

const id = localStorage.getItem("roomId");



if(id){


const snap = await getDoc(
doc(db,"rooms",id)
);



if(snap.exists()){


const data = snap.data();


roomName.textContent =
"🎙️ " + data.name;


roomId.textContent =
"ID: " + id;



membersList.innerHTML = `

<div>

👤 ${data.ownerName || "User"}

</div>

`;


}


}else{


roomName.textContent =
"🎙️ غرفة غير موجودة";


}



// إرسال رسالة (تجريبي)

send.onclick = ()=>{


let text = messageInput.value;


if(text.trim()=="") return;



messages.innerHTML += `

<p>
👤 ${text}
</p>

`;



messageInput.value="";


};
