let progress = 0;


// правильное фото пока поставим №2
let correctPhoto = 2;


function startGame(){

document.getElementById("start").style.display="none";
document.getElementById("timer").style.display="block";

startTimer();

}


function startTimer(){

let date = new Date("August 8, 2026 00:00:00").getTime();


let x=setInterval(function(){

let now=new Date().getTime();

let distance=date-now;


let days=Math.floor(distance/(1000*60*60*24));


document.getElementById("countdown").innerHTML=
days+" дней";


},1000);

}



function nextMission(){

document.querySelectorAll(".hidden").forEach(x=>x.style.display="none");

document.getElementById("mission1").style.display="block";

}



function checkAnswer(photo){

if(photo===correctPhoto){

progress=20;

document.getElementById("percent").innerHTML=progress;

document.getElementById("barFill").style.width=progress+"%";


document.getElementById("mission1").style.display="none";

document.getElementById("result").style.display="block";

document.getElementById("resultText").innerHTML=
"✅ Воспоминание восстановлено ❤️";

}
else{

alert("❌ Не то фото. Попробуй ещё раз");

}

}
