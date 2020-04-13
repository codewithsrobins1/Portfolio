//Landing Page Description Switch
let descriptions = ['front-end developer','sports enthusiast', 'lover of coffee'];
let count = 0;
const title = document.querySelector('#landingDesc');
const timer = setInterval(titleChange, 1500);

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

var trainingSite = document.getElementById('trainingSite');
var trainingCode = document.getElementById('trainingCode');

var techSite = document.getElementById('techSite');
var techCode = document.getElementById('techCode');

var tutoringSite = document.getElementById('tutoringSite');
var tutoringCode = document.getElementById('tutoringCode');

var paletteSite = document.getElementById('paletteSite');
var paletteCode = document.getElementById('paletteCode');

var kanyeSite = document.getElementById('kanyeSite');
var kanyeCode = document.getElementById('kanyeCode');

var cakesSite = document.getElementById('cakesSite');
var cakesCode = document.getElementById('cakesCode');

//Coffee Project
function coffeePort(){
  window.open('https://codewithsrobins1.github.io/LastDropCafe/');
};

function coffeeSource(){
  window.open('https://github.com/codewithsrobins1/LastDropCafe')
}

coffeeSite.addEventListener('click', coffeePort);
coffeeCode.addEventListener('click', coffeeSource);

// Environ Project
function environPort(){
  window.open('https://codewithsrobins1.github.io/EnvironRealEstate/');
};

function environSource(){
  window.open('https://github.com/codewithsrobins1/EnvironRealEstate')
}

environSite.addEventListener('click', environPort);
environCode.addEventListener('click', environSource);

//Tech Project
function techPort(){
  window.open('https://codewithsrobins1.github.io/Sysean-Tech/');
};

function techSource(){
  window.open('https://github.com/codewithsrobins1/Tech-Services')
}

techSite.addEventListener('click', techPort);
techCode.addEventListener('click', techSource);

// Seans Sports Training Project
function trainingPort(){
  window.open('https://codewithsrobins1.github.io/Seans-Skills-Training/');
};

function trainingSource(){
  window.open('https://github.com/codewithsrobins1/Seans-Skills-Training');
}

trainingSite.addEventListener('click', trainingPort);
trainingCode.addEventListener('click', trainingSource);

//Tutoring Project
function tutoringPort(){
  window.open('https://codewithsrobins1.github.io/PremTutoring/');
};

function tutoringSource(){
  window.open('https://github.com/codewithsrobins1/PremTutoring')
}

tutoringSite.addEventListener('click', tutoringPort);
tutoringCode.addEventListener('click', tutoringSource)

//PalettePicker Project
function palettePort(){
  window.open('https://palette-picker.netlify.com/');
};

function paletteSource(){
  window.open('https://github.com/codewithsrobins1/palette-picker')
}

paletteSite.addEventListener('click', palettePort);
paletteCode.addEventListener('click', paletteSource);

//KanyeSays Project
function kanyePort(){
  window.open('https://kanye-says.netlify.com/');
};

function kanyeSource(){
  window.open('https://github.com/codewithsrobins1/kanye-says')
}

kanyeSite.addEventListener('click', kanyePort);
kanyeCode.addEventListener('click', kanyeSource);

//LienCakes Project
function cakesPort(){
  window.open('https://codewithsrobins1.github.io/LienCakes/');
};

function cakesSource(){
  window.open('https://github.com/codewithsrobins1/LienCakes')
}

cakesSite.addEventListener('click', cakesPort);
cakesCode.addEventListener('click', cakesSource);