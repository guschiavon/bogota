// Scramble words 

let lineOneDefault = document.getElementById('line-1')
let lineTwoDefault = document.getElementById('line-2')
let lineThreeDefault = document.getElementById('line-3')
let lineFourDefault = document.getElementById('line-4')
let lineFiveDefault = document.getElementById('line-5')
let lineSixDefault = document.getElementById('line-6')

const lineOneArray = [
  'coletivo',
  'bando',
  'monastério',
  'grupo musical',
  'forno'
]
const lineTwoArray = [
  'animação',
  'publicidade',
  'pós-produção',
  'idéias',
  'criatividade',
  'pizzas'
]
const lineThreeArray = [
  'no Brasil',
  'no multiverso',
  'na quinta dimensão',
  'em Atlantis, o continente perdido',
  'na pizzaria'
]
const lineFourArray = [
  'substâncias',
  'ritmos',
  'cores',
  'palavras',
  'formas',
  'orégano'
]

const lineFiveArray = [
  'o espaço',
  'planetas',
  'dimensões',
  'hipóteses',
  'azeitonas'
]
const lineSixArray = [
  'pizza.'
  
]
// Generates a random index number from the array items
const randomArrIndex = function(a) {
  return Math.floor(Math.random() * a.length);
}
// Pulls a random string from the array corresponding to the index position of the array item
const randomString = function(a) {
  return a[randomArrIndex(a)]
}
// takes the default text content (o) and the array (a) as attributes and sets the textContent of the DOM element
const setString = function(o, a) {
  return o.textContent = randomString(a)
}
// renders the default text declared on the data-default-text HTML attribute
const defaultText = function (i) {
  i.textContent = i.dataset.defaultText;
};

// ticker on scroll
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, CSSPlugin);
// Each of these tweens animates the lines by class right to left and left to right
gsap.to('.r-to-l', {
  scrollTrigger: {
    // markers: true,
    scrub: 0.3,
    end: "bottom 10%",
    trigger: ".tickers",
    toggleActions: "restart none reverse pause"
  },
  x: 150,
  duration: 1,
  
});
gsap.to(".l-to-r", {
  scrollTrigger: {
    // markers: true,
    scrub: 0.3,
    end: "bottom 10%",
    trigger: ".tickers",
    toggleActions: "restart none reverse pause",
  },
  x: -150,
  duration: 1,
  
});

// Above-the-fold items
let bogotaBubble = CSSRulePlugin.getRule(".atf-content:before");
let menuNav = CSSRulePlugin.getRule(".desktop-nav");

  
// Makes the bubble go to the outside left of screen
gsap.to(bogotaBubble, {
  scrollTrigger: {
    trigger: ".atf-content",
    // markers: true,
    scrub: 0.3,
    anticipatePin: 1,
    start: "top 20%",
    end: "bottom 25%",
    toggleActions: "restart none reverse pause",
    pin: true,
  },
  // ease: "elastic.out(1, 0.3)",
  cssRule: {
    translateX: "-25%",
    height: 200,
    width: 200,
  },
});
// Makes the menu disappear to the right of the screen
gsap.to(menuNav, {
  scrollTrigger: {
    trigger: ".atf-content",
    
    // markers: true,
    scrub: 0.3,
    start: "top 20%",
    end: "bottom 25%",
    toggleActions: "restart none reverse pause",
    pin: true,
  },
  // ease: "bounce",
  cssRule: {
    translateX: "100%", 
  },
});

let backButton = CSSRulePlugin.getRule(".back-to-top");

gsap.to(backButton, {
  scrollTrigger: {
    // markers: true,
    trigger: "#scramble",
    scrub: 0.3,
    start: "top 90%",
    end: "bottom 80%",
    toggleActions: "restart none reverse pause",
  },
  cssRule: {
    translateY: "0",
  },
});