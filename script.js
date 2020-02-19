//Landing Page Description Switch
let descriptions = ['front-end developer','sports enthusiast', 'lover of coffee'];
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

var environSite = document.getElementById('environSite');
var environCode = document.getElementById('environCode');

var beautySite = document.getElementById('beautySite');
var beautyCode = document.getElementById('beautyCode');

var techSite = document.getElementById('techSite');
var techCode = document.getElementById('techCode');

var tutoringSite = document.getElementById('tutoringSite');
var tutoringCode = document.getElementById('tutoringCode');

//Coffee Project
function coffeePort(){
  window.open('http://www.google.com');
};

function coffeeSource(){
  window.open('https://github.com/codewithsrobins1/LastDropCafe')
}

coffeeSite.addEventListener('click', coffeePort);
coffeeCode.addEventListener('click', coffeeSource);

// Environ Project
function environPort(){
  window.open('http://www.google.com');
};

function environSource(){
  window.open('https://github.com/codewithsrobins1/EnvironRealEstate')
}

environSite.addEventListener('click', environPort);
environCode.addEventListener('click', environSource);

//Tech Project
function techPort(){
  window.open('http://www.google.com');
};

function techSource(){
  window.open('https://github.com/codewithsrobins1/Tech-Services')
}

techSite.addEventListener('click', techPort);
techCode.addEventListener('click', techSource);

// //Tutoring Project
function tutoringPort(){
  window.open('http://www.google.com');
};

function tutoringSource(){
  window.open('https://github.com/codewithsrobins1/PremTutoring')
}

tutoringSite.addEventListener('click', tutoringPort);
tutoringCode.addEventListener('click', tutoringSource);