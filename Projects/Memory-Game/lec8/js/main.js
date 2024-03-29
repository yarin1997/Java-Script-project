import { createGameImageArray } from "./cards.js";

const grid = document.getElementById('grid-container');

let card1 = null;

function flip(event) {
    const card = event.currentTarget; //div
    if (card === card1) {
        //        card.classList.add('wobble');
        return; //ignore 
    }
    card.classList.toggle('flip');
    if (card1 == null) {
        console.log("1st time");
        card1 = card;
    } else {
        console.log("2nd time")
        
        //check for match!
        if (card1.dataset.id == card.dataset.id) {
            card.removeEventListener('click', flip);
            card1.removeEventListener('click', flip);
            card1 = null;
      count++;
        } else {
            setTimeout(() => {
                card.classList.remove('flip');
                card1.classList.remove('flip');
                card1 = null;  
            }, 1000)
        }
    }
}
    let count=0;  
let sec=0;
let min=0;
let p=document.getElementById('timer');

function timer(count){
p.innerHTML=`Timer: ${min}:${sec}`
sec++;
if(sec==60){
    min++;
    sec=0;
}
if(min==10){
    clearInterval();
    alert(`Game Over! Time: ${min}:${sec}`);
    return;
}
if(sec<10){
    p.innerHTML=`Timer: ${min}:0${sec}`
}}
const btn=document.getElementById('btn');

btn.addEventListener('click', ()=>{
  btn.disabled=true;
    let input=document.getElementById('input');
    if(input.value<4){
        alert("please enter at least 4");
        return;
    }
      grid.innerHTML=''
    const images = createGameImageArray(input.value);
console.log(images);
    const interval=setInterval(()=>{
          if(count>=images.length/2 ){
            btn.disabled=false;
          checkBestTime(min,sec,images.length);
        count=0;
        sec=0;
        min=0;
        clearInterval(interval);
        return;
    }
timer(count);
},1000);
  
images.forEach(s => {
    const div = document.createElement('div');
    div.classList.add('card')
    div.addEventListener('click', flip);
    const back = document.createElement('img');
    back.classList.add('back')
    back.src = 'images/dalle_back.webp';
    back.alt = 'card-back';

    const front = document.createElement('img');
    front.classList.add('front');
    front.src = s;
    front.alt = s
        .replace('images/', '')
        .replace('.webp', '');
    //div.setAttribute('data-id', front.alt);
    div.dataset.id = front.alt;

    div.appendChild(back);
    div.appendChild(front);

    grid.appendChild(div);
});

})
 
 
  for(let i=4; i<=22; i+=2){
    localStorage.setItem(`bestScore${i}`, `${10}:${0}`);
let bestTime = localStorage.getItem('bestScore');
let bestMin, bestSec;
if (bestTime) {
     [bestMin, bestSec] = bestTime.split(':').map(Number);
} else {
    // Initialize best time if not present in localStorage
    updateBestTime(10, 0, i); // Set an initial best time, e.g., 10 minutes and 0 seconds
}
  }
// Function to update best time in localStorage
function updateBestTime(min, sec,numPairs) {
    if(sec<10)
    localStorage.setItem(`bestScore${numPairs}`, `${min}:0${sec}`);
else
    localStorage.setItem(`bestScore${numPairs}`, `${min}:${sec}`);
    bestMin = min;
    bestSec = sec;
}

function checkBestTime(min,sec,numPairs){
let bestTime = localStorage.getItem(`bestScore${numPairs}`);
let bestMin, bestSec;
     [bestMin, bestSec] = bestTime.split(':').map(Number);
       if (Number(min) <Number (bestMin) || (Number (min) === Number (bestMin) &&Number (sec) <Number (bestSec))) {
         p.innerHTML+=`you breaked records of ${numPairs/2} pairs! `;
    updateBestTime(min, sec,numPairs);
}
}


