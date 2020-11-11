const intro = document.querySelector('.shaka');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// SCROLL MAGIC

const controller = new ScrollMagic.Controller();

// Scenes
const scene = new ScrollMagic.Scene({
  duration: 0,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

// Video Animation

let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);

let lineOneDefault = document.getElementById('line-1')
let lineTwoDefault = document.getElementById('line-2')
let lineThreeDefault = document.getElementById('line-3')
let lineFourDefault = document.getElementById('line-4')
let lineFiveDefault = document.getElementById('line-5')

const lineOneArray = [
  'grupo de jovens',
  'bando de loucos',
  'coletivo de amigos',
  "coletivo criativo",
  "forno de pizza",
  "terreiro"
]

const lineTwoArray = [
  'pizza',
  'animações e pós-produção',
  'macumba',
  'desenvolvimento de idéias'
]
const lineThreeArray = [
  'entre a cruz e a espada',
  'no meio da pizzaria',
  'no espaço sideral',
  'em Curitiba'
]

const randomArrIndex = function(a) {
  return Math.floor(Math.random() * a.length);
}

const randomString = function(a) {
  return a[randomArrIndex(a)]
}

let setStringOne = function() {
  return lineOneDefault.textContent = randomString(lineOneArray)
}
let setStringTwo = function() {
  return lineTwoDefault.textContent = randomString(lineTwoArray)
}
let setStringThree = function() {
  return lineThreeDefault.textContent = randomString(lineThreeArray)
}

const defaultTextOne = function (i) {
  i.textContent = " "
  i.textContent = "estúdio";
};
const defaultTextTwo = function (i) {
  i.textContent = " "
  i.textContent = "imagens em movimento";
};
const defaultTextThree = function (i) {
  i.textContent = " "
  i.textContent = "no meio de tudo e mais um pouco";
};