// Scramble words 

let lineOneDefault = document.getElementById('line-1')
let lineTwoDefault = document.getElementById('line-2')
let lineThreeDefault = document.getElementById('line-3')
let lineFourDefault = document.getElementById('line-4')
let lineFiveDefault = document.getElementById('line-5')

const lineOneArray = [
  'grupo de jovens',
  'bando de loucos',
  'coletivo de amigos',
  'coletivo criativo',
  'forno de pizza',
  'terreiro'
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
const lineFourArray = [
  'ingredientes',
  'sabores',
  'tecnologias',
  'influências',
  'técnicas'
]
const lineFiveArray = [
  'de corpo e alma.',
  'quentinha em casa.',
  'algo digno de orgulho.',
  'sangue suor e lágrimas.'
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
    scrub: 0.8,
    end: "bottom 10%",
    trigger: ".tickers",
    toggleActions: "restart none reverse pause"
  },
  x: 200,
  duration: 3,
});
gsap.to('.l-to-r', {
  scrollTrigger: {
    // markers: true,
    scrub: 0.8,
    end: "bottom 10%",
    trigger: ".tickers",
    toggleActions: "restart none reverse pause"
  },
  x: -200,
  duration: 3
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
    start: "top 25%",
    end: "bottom 20%",
    toggleActions: "restart none reverse pause",
    pin: true,
  },
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
    start: "top 25%",
    end: "bottom 20%",
    toggleActions: "restart none reverse pause",
    pin: true,
  },
  cssRule: {
    translateX: "100%",
    
  },
});

// let elTeam = CSSRulePlugin.getRule("#team-title");

// gsap.from(elTeam, {
//   scrollTrigger: {
//     markers: true,
//     trigger: "#team",
//     start: "bottom 90%",
//     end: "bottom 80%"

//   },
//   cssRule: {
//     translateX: "-200%"
//   }
// })
