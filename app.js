const chat = document.getElementById("chat");
const input = document.getElementById("message");


function addMessage(text,type){

let div=document.createElement("div");

div.className="msg "+type;

div.innerText=text;

chat.appendChild(div);

chat.scrollTop=chat.scrollHeight;

}



async function sendMessage(){

let question=input.value.trim();

if(!question)return;


addMessage(question,"user");

input.value="";


let response=await fetch(
"http://localhost:3000/ask",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

question:question

})

});


let data=await response.json();


addMessage(data.answer,"ai");


}
