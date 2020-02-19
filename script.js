//Landing Page Description Switch
let descriptions = ['front-end developer','sports enthusiast', 'video-gamer'];
let count = 0;
const title = document.querySelector('#landingDesc');
const timer = setInterval(titleChange, 2000);

function titleChange (){
  title.innerHTML = descriptions[count];
  count++;
  if(count >= descriptions.length){
    count = 0;
  }
}

titleChange();


//View Project Buttons
var coffeeSite = document.getElementById('coffeeSite');
var coffeeCode = document.getElementById('coffeeCode');

var beautySite = document.getElementById('beautySite');
var beautyCode = document.getElementById('beautyCode');

var cakeSite = document.getElementById('cakeSite');
var cakeCode = document.getElementById('cakeCode');

var environSite = document.getElementById('environSite');
var environCode = document.getElementById('environCode');

var tutoringSite = document.getElementById('tutoringSite');
var tutoringCode = document.getElementById('tutoringCode');

//Coffee Project
function coffeePort(){
  window.open('http://www.google.com');
};

function coffeeSource(){
  window.open('http://www.google.com')
}

coffeeSite.addEventListener('click', coffeePort);
coffeeCode.addEventListener('click', coffeeSource);

//Beauty Store Project
function beautyPort(){
  window.open('http://www.google.com');
};
function beautySource(){
  window.open('http://www.google.com')
}

beautySite.addEventListener('click', beautyPort);
beautyCode.addEventListener('click', beautySource);

//Cake Project
function cakePort(){
  window.open('http://www.google.com');
};

function cakeSource(){
  window.open('http://www.google.com')
}

cakeSite.addEventListener('click', cakePort);
cakeCode.addEventListener('click', cakeSource);

// Environ Project
function environPort(){
  window.open('http://www.google.com');
};

function environSource(){
  window.open('http://www.google.com')
}

environSite.addEventListener('click', environPort);
environCode.addEventListener('click', environSource);

// //Tutoring Project
// function tutoringPort(){
//   window.open('http://www.google.com');
// };

// function tutoringSource(){
//   window.open('http://www.google.com')
// }

// tutoringSite.addEventListener('click', tutoringPort);
// tutoringCode.addEventListener('click', tutoringSource);