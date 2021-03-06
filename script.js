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
var paletteSite = document.getElementById('paletteSite');
var paletteCode = document.getElementById('paletteCode');

var pokeSite = document.getElementById('pokeSite');
var pokeCode = document.getElementById('pokeCode');

var goldSite = document.getElementById('wowGoldSite');
var goldCode = document.getElementById('wowGoldCode');

var axiomSite = document.getElementById('axiomSite');
var axiomCode = document.getElementById('axiomCode');

var enmaSite = document.getElementById('enmaSite');
var enmaCode = document.getElementById('enmaCode');

var environSite = document.getElementById('environSite');
var environCode = document.getElementById('environCode');

var tutoringSite = document.getElementById('tutoringSite');
var tutoringCode = document.getElementById('tutoringCode');


//PalettePicker Project
function palettePort(){
  window.open('https://palette-picker.netlify.com/');
};

function paletteSource(){
  window.open('https://github.com/codewithsrobins1/palette-picker')
}

paletteSite.addEventListener('click', palettePort);
paletteCode.addEventListener('click', paletteSource);

//Pokemon Collector Project
function pokePort(){
  window.open('https://pokemon-collect.netlify.app');
};

function pokeSource(){
  window.open('https://github.com/codewithsrobins1/pokemon-collect')
}

pokeSite.addEventListener('click', pokePort);
pokeCode.addEventListener('click', pokeSource);

//Wow Gold Tracker Project
function wowGoldPort(){
  window.open('https://wowgoldtracker.netlify.app/');
};

function wowGoldSource(){
  window.open('https://github.com/codewithsrobins1/wow-gold-tracker')
}

goldSite.addEventListener('click', wowGoldPort);
goldCode.addEventListener('click', wowGoldSource);

//Last Drop Coffee Project
function coffeePort(){
  window.open('https://codewithsrobins1.github.io/LastDropCafe/');
};

function coffeeSource(){
  window.open('https://github.com/codewithsrobins1/LastDropCafe')
}

coffeeSite.addEventListener('click', coffeePort);
coffeeCode.addEventListener('click', coffeeSource);

//Axiom Academy Project
function axiomPort(){
  window.open('https://axiom-academy.netlify.app');
};

function axiomSource(){
  window.open('https://github.com/codewithsrobins1/axiom-academy')
}

axiomSite.addEventListener('click', axiomPort);
axiomCode.addEventListener('click', axiomSource);

//Enma Photography
function enmaPort(){
  window.open('https://enma-photography.netlify.app');
};

function enmaSource(){
  window.open('https://github.com/codewithsrobins1/enma-photography')
}

enmaSite.addEventListener('click', enmaPort);
enmaCode.addEventListener('click', enmaSource);

// Environ Project
function environPort(){
  window.open('https://codewithsrobins1.github.io/EnvironRealEstate/');
};

function environSource(){
  window.open('https://github.com/codewithsrobins1/EnvironRealEstate')
}

environSite.addEventListener('click', environPort);
environCode.addEventListener('click', environSource);

//Tutoring Project
function tutoringPort(){
  window.open('https://codewithsrobins1.github.io/PremTutoring/');
};

function tutoringSource(){
  window.open('https://github.com/codewithsrobins1/PremTutoring')
}

tutoringSite.addEventListener('click', tutoringPort);
tutoringCode.addEventListener('click', tutoringSource)


