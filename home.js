const input = document.getElementById("messageInput");
const sendBtn = document.querySelector(".send");
const messages = document.getElementById("messages");


// عرض ID الغرفة

const roomId = localStorage.getItem("roomId");

if(roomId){

document.getElementById("roomId").textContent =
"🆔 Room ID: " + roomId;

}



// إرسال رسالة داخل الغرفة

sendBtn.onclick = () => {

const text = input.value.trim();


if(text === "") return;


const msg = document.createElement("div");

msg.className = "message my-message";

msg.textContent = text;


messages.appendChild(msg);


input.value="";


messages.scrollTop = messages.scrollHeight;


};



// الإرسال بزر Enter

input.addEventListener("keypress",(e)=>{


if(e.key==="Enter"){

sendBtn.click();

}


});
