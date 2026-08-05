<!DOCTYPE html>
<html lang="ar">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Mecd Voice Room</title>


<style>

*{
box-sizing:border-box;
font-family:Arial,sans-serif;
}


body{

margin:0;
height:100vh;
background:#081c24;
color:white;

}


.room{

height:100vh;
display:flex;
flex-direction:column;

}


/* رأس الغرفة */

.header{

height:75px;
background:#075e54;
display:flex;
align-items:center;
padding:15px;
gap:15px;

}


.room-logo{

width:50px;
height:50px;
border-radius:50%;
background:#00a884;

display:flex;
align-items:center;
justify-content:center;

font-size:25px;

}


.header h2{

margin:0;
font-size:20px;

}


.header p{

margin:5px 0;
font-size:13px;

}



/* الرسائل */

.messages{

flex:1;
padding:15px;
overflow:auto;

background:#101b22;

}



.message{

background:#202c33;
padding:10px 15px;
border-radius:15px;

width:max-content;
max-width:80%;

margin-bottom:10px;

}



.my{

background:#005c4b;

margin-left:auto;

}



/* زر الصوت */

.voice{

text-align:center;
padding:15px;

}


.talk{

width:90px;
height:90px;

border-radius:50%;

border:0;

background:#00a884;

color:white;

font-size:35px;

}



/* الأسفل */


.bottom{

display:flex;

gap:8px;

padding:10px;

background:#202c33;

}


input{

flex:1;

border:0;

outline:none;

border-radius:25px;

padding:12px;

background:#2a3942;

color:white;

}



button{

border:0;

cursor:pointer;

}



.send{

width:45px;

height:45px;

border-radius:50%;

background:#00a884;

color:white;

font-size:20px;

}



</style>

</head>


<body>


<div class="room">


<div class="header">


<div class="room-logo">
🎙️
</div>


<div>

<h2 id="title"></h2>

<p id="roomId"></p>

</div>


</div>




<div class="messages" id="messages">


<div class="message" id="welcome"></div>


</div>




<div class="voice">


<button class="talk">

🎙️

</button>


</div>




<div class="bottom">


<input id="messageInput">


<button class="send">

➤

</button>


</div>


</div>



<script type="module" src="room.js"></script>


</body>

</html>
