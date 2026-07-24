let mission = 0;


// дата миссии
let target = new Date("August 8, 2026 00:00:00").getTime();



let timer = setInterval(function(){


let now = new Date().getTime();

let distance = target - now;


let days = Math.floor(
distance / (1000*60*60*24)
);


let hours = Math.floor(
(distance % (1000*60*60*24))
/(1000*60*60)
);


let minutes = Math.floor(
(distance % (1000*60*60))
/(1000*60)
);


let seconds = Math.floor(
(distance % (1000*60))
/1000
);



document.getElementById("timer").innerHTML =
days+"д "+hours+"ч "+minutes+"м "+seconds+"с";



if(distance <=0){

clearInterval(timer);

document.getElementById("screen1").style.display="none";

document.getElementById("screen2").style.display="block";

}


},1000);



function startMission(){

document.getElementById("screen2").style.display="none";

document.getElementById("mission1").style.display="block";

mission=1;

updateProgress();

}



function answer(photo){


// пока правильный ответ фото 2

if(photo===2){


document.getElementById("mission1").style.display="none";

document.getElementById("success").style.display="block";


mission=1;

updateProgress();


}

else{

alert("❌ Неверно. Попробуй ещё раз");

}


}



function nextMission(){

alert("Следующий уровень добавим дальше 🎮");

}



function updateProgress(){

document.getElementById("missionNumber").innerHTML=mission;


document.getElementById("barFill").style.width=
(mission/4*100)+"%";

}
