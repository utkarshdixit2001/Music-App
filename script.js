document.querySelector("body").style.backgroundColor = "#60b347";
let imgTracker = [];
let songs = [
  {
    src: "Badhaai Do Title Track Nakash Aziz 320 Kbps.mp3",
    type: "audio/mpeg",
  },
  { src: "Meri Jaan Gangubai Kathiawadi 320 Kbps.mp3", type: "audio/mpeg" },
  {
    src: "09 - Tujhe Kitna Chahein Aur - Kabir Singh (2019).mp3",
    type: "audio/mpeg",
  },
  { src: "01 Sooraj Dooba Hain Yaaron - Roy (2015).mp3", type: "audio/mpeg" },
  { src: "JJ 2017 - Galti Se Mistake.mp3", type: "audio/mpeg" },
  { src: "Namaste England 2018 - Proper Patola.mp3", type: "audio/mpeg" },
  { src: "BBD - Kala Chashma.mp3", type: "audio/mpeg" },
  { src: "Naacho Naacho Song RRR.mp3", type: "audio/mpeg" },
  {
    src: "Main Dhoondne Ko Zamaane Mein Song Heartless.mp3",
    type: "audio/mpeg",
  },
];
   for(let i=1; i<=9; i++){
    var controll = document.getElementById(`play${i}`);
   // controll.controls= false;
   // controll.load();
   }
let audio_next = [];

let src_next = 0;
let n = 0;
let img_next = 1;
let i = 0;
let play = 1;
let curr_block = 1;
let prev_block = curr_block;
let Pause = document.getElementById("pause");

let aud;
function display_next() {
    if(play > 1) {
         let audPrev = document.getElementById(`play${play - 1}`);
         function pausePrev() {
            audPrev.pause();
         }
         pausePrev();
     }
  document.getElementById("img1").src = document.getElementById(`i${img_next}`).src;
  aud = document.getElementById(`play${play}`);

  function playVid() {
    aud.play();
  }
  function pauseVid() {
    aud.pause();
  }
  document.getElementById("pause").addEventListener('click', playVid);
  document.getElementById("pause").addEventListener('dblclick', pauseVid);
  play++;
  img_next++;
  document.querySelector(`#s${curr_block}`).style.backgroundColor = "yellow";
  curr_block++;
  document.querySelector(`#s${curr_block - 2}`).style.backgroundColor = "#60b347";

}
let n1 = document.getElementById("next");
n1.addEventListener("click", display_next);
let m = 9;
let m1 = 0;
let img_prev = 9;
let audio_prev = [];
let src_prev = 8;

function display_prev() {
  document.getElementById("img1").src = document.getElementById(
    `i${img_prev}`
  ).src;
  audio_prev[m1] = `<div class="media">
  <div class="audio audio1" id="s1">
    <audio controls>
      <source src="horse.mp3" type="audio/mpeg">
      <source src= "${songs[src_prev].src}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>`;
  let songBlock = document.getElementById("mediaa");
  songBlock.innerHTML = audio_prev[m1];
  m1++;
  src_prev--;
  img_prev--;
}
let n2 = document.getElementById("previous");
n2.addEventListener("click", display_prev);

function search() {
  let text = document.getElementById("search").value;
  if (text.length >= 4) {
    for (let k1 = 0; k1 < songs.length; k1++) {
      if (songs[k1].src.includes(text)) {
        let j1 = k1;
        let displayBlock = document.getElementById("mediaa");
        displayBlock.innerHTML = `<div class="media">
  <div class="audio audio1" id="s${j1++}">
    <audio controls>
      <source src="horse.mp3" type="audio/mpeg">
      <source src= "${songs[k1].src}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>`;
        document.getElementById("img1").src = document.getElementById(
          `i${k1 + 1}`
        ).src;
        img_next++;
        break;
      }
    }
  }
}

let Search = document.getElementById("searchBtn");
Search.addEventListener("click", search);
/*
let y = document.getElementById("play1");
let Pause = document.getElementById("pause");
Pause.addEventListener("click", pause);

function pause(){
   y.pause(); 
}
/*
function play() {
 // let audio=``;
  audio += `<div class="media">
  <div class="audio audio1" id="s1">
    <audio controls>
      <source src="horse.mp3" type="audio/mpeg">
      <source src= "${songs[i1].src}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>`;
  i1++;
  let songBlock = document.getElementById('mediaa');
  songBlock.innerHTML=audio;
  // audio=``;
}
let display = document.getElementById("pause");
display.addEventListener('click', play);
*/
