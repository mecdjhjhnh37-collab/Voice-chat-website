<!DOCTYPE html>
<html lang="ar">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Mecd Voice Room</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}


body{

min-height:100vh;

background:
linear-gradient(135deg,#020617,#1e3a8a,#111827);

color:white;

padding:15px;

}


/* رأس الغرفة */

.header{

display:flex;

justify-content:space-between;

align-items:center;

background:rgba(255,255,255,.12);

backdrop-filter:blur(15px);

padding:15px;

border-radius:25px;

}


.room-title{

font-size:22px;

font-weight:bold;

}


/* الأعضاء */

.members{

margin-top:20px;

background:rgba(255,255,255,.1);

border-radius:25px;

padding:20px;

}


.member{

display:flex;

align-items:center;

gap:15px;

padding:12px;

margin-top:10px;

background:rgba(255,255,255,.08);

border-radius:20px;

}


.avatar{

width:45px;

height:45px;

border-radius:50%;

background:#2563eb;

display:flex;

align-items:center;

justify-content:center;

font-size:22px;

}


/* زر الكلام */

.voice-area{

height:300px;

display:flex;

justify-content:center;

align-items:center;

}


.push{

width:180px;

height:180px;

border-radius:50%;

border:none;

background:#22c55e;

color:white;

font-size:25px;

font-weight:bold;

box-shadow:0 0 40px #22c55e;

}


.push:active{

transform:scale(.9);

}


/* الدردشة */

.chat{

background:rgba(255,255,255,.12);

border-radius:25px;

padding:15px;

}


.messages{

height:120px;

overflow:auto;

}


.send{

display:flex;

gap:10px;

}


input{

flex:1;

padding:14px;

border-radius:20px;

border:none;

}


button{

border:none;

border-radius:20px;

padding:12px;

font-weight:bold;

cursor:pointer;

}


.send button{

background:#2563eb;

color:white;

}


.buttons{

display:flex;

justify-content:space-around;

margin-top:15px;

}


.icon{

font-size:28px;

background:rgba(255,255,255,.15);

padding:10px;

border-radius:50%;

}


</style>


</head>


<body>


<div class="header">

<div class="room-title">

🎙️ Mecd Voice Room

</div>

<div>

🟢 Online

</div>

</div>



<div class="members">


<h2>👥 الأعضاء</h2>


<div class="member">

<div class="avatar">
👤
</div>

<div>
Mecd
<br>
🟢 يتكلم
</div>

</div>



</div>



<div class="voice-area">

<button class="push">

🎙️

<br>

اضغط للكلام

</button>


</div>




<div class="buttons">

<div class="icon">📞</div>

<div class="icon">🎥</div>

<div class="icon">😀</div>

<div class="icon">📎</div>

</div>




<div class="chat">


<div class="messages">

<p>مرحبا 👋</p>

</div>



<div class="send">

<input placeholder="اكتب رسالة...">

<button>
إرسال
</button>


</div>


</div>



</body>

</html>
