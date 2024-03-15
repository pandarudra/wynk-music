let scroll = document.querySelector(".auto-scroll");
let  l = document.querySelector(".l");
let  m = document.querySelector(".m");
let  r = document.querySelector(".r");
let rep;
const repeat=()=>{
  rep=Math.floor(Math.random()*10);
  if(rep<3){
    l.style.backgroundImage="url(sone.png)";
    m.style.backgroundImage="url(stwo.png)";
    r.style.backgroundImage="url(stre.png)";
    console.log("3");
  }
  else if(rep>3 && rep<6){
      l.style.backgroundImage="url(stre.png)";
      m.style.backgroundImage="url(sone.png)";
      r.style.backgroundImage="url(stwo.png)";
     console.log("4");
    }
  else{
    l.style.backgroundImage="url(stwo.png)";
    m.style.backgroundImage="url(stre.png)";
    r.style.backgroundImage="url(sone.png)";
     console.log("5");
  }
}
var check = 0;
let  o = document.querySelector(".o");
let  t = document.querySelector(".t");
let  tr = document.querySelector(".tr");
let  f = document.querySelector(".f");
let  fi = document.querySelector(".fi");

o.onclick=()=>{
  if(check==1){
    play.style.backgroundImage="url(pause.png)";
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
     audio2.pause();
    check=0;
  }
  else if(check==0){
    check=1;
    play.style.backgroundImage="url(play.png)";
    
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio1.play();
  }
}

t.onclick=()=>{
  if(check==1){
    play.style.backgroundImage="url(pause.png)";
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
     audio2.pause();
    check=0;
  }
  else if(check==0){
    check=1;
  
  audio1.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
   audio2.play();
  }
}
tr.onclick=()=>{
  if(check==1){
    play.style.backgroundImage="url(pause.png)";
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
     audio2.pause();
    check=0;
  }
  else if(check==0){
    check=1;
  audio2.pause();
  audio1.pause();
  audio4.pause();
  audio5.pause();
  audio3.play();
  }
}
f.onclick=()=>{
  if(check==1){
    play.style.backgroundImage="url(pause.png)";
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
     audio2.pause();
    check=0;
  }
  else if(check==0){
    check=1;
  audio2.pause();
  audio3.pause();
  audio1.pause();
  audio5.pause();
  audio4.play();
  }
}
fi.onclick=()=>{
  if(check==1){
    play.style.backgroundImage="url(pause.png)";
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
     audio2.pause();
    check=0;
  }
  else if(check==0){
    check=1;
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio1.pause();
  audio5.play();
  }
}

let  play = document.querySelector(".play");
let  back = document.querySelector(".back");
let  front = document.querySelector(".front");

let music;

var audio1 = new Audio('khamoshiyan.mp3');
var audio2 = new Audio('ashique.mp4');
var audio3 = new Audio('animal.mp4');
var audio4 = new Audio('husn.mp4');
var audio5 = new Audio('heriye.mp4');


play.onclick=()=>{
  if(check==1){
    play.style.backgroundImage="url(pause.png)";
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
     audio2.pause();
    check=0;
  }
  
  else if(check==0){
    
    play.style.backgroundImage="url(play.png)";
  music=Math.floor(Math.random()*10);
   
  if(music>0 && music<=2){
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio1.play();
    
  }
  else if(music>2 && music<=4){
    
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
     audio2.play();
    }
    else if(music>4 && music<=6){
     
      audio2.pause();
      audio1.pause();
      audio4.pause();
      audio5.pause();
      audio3.play();
    }
      else if(music>6 && music<=8){
      
        audio2.pause();
        audio3.pause();
        audio1.pause();
        audio5.pause();
        audio4.play();
      }
  else{
    
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio1.pause();
    audio5.play();
  }
    check=1;
  }
}




setInterval(repeat,1500);