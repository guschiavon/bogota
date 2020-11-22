
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, TextPlugin, MotionPathPlugin);
// Scramble words 
// How to put this on a JSON file for easier UI?
const scrambleEls = [
  {
    id: "line-1",
    defaultString: "estúdio",
    array: [
      "coletivo",
      "bando",
      "monastério",
      "grupo musical",
      "forno"
    ],
  },
  {
    id: "line-2",
    defaultString: "imagens em movimento",
    array: [
      "animação",
      "publicidade",
      "pós-produção",
      "idéias",
      "criatividade",
      "pizzas",
    ],
  },
  {
    id: "line-3",
    defaultString: "no meio de tudo e mais",
    array: [
      "no Brasil",
      "no multiverso",
      "na quinta dimensão",
      "em Atlantis, o continente perdido",
      "na pizzaria",
    ],
  },
  {
    id: "line-4",
    defaultString: "linguagens",
    array: [
      "substâncias",
      "ritmos",
      "cores",
      "palavras",
      "formas",
      "orégano"],
  },
  {
    id: "line-5",
    defaultString: "caminhos",
    array: [
      "o espaço",
      "planetas",
      "dimensões",
      "hipóteses",
      "azeitonas"
    ],
  },
  {
    id: "line-6",
    defaultString: "no prazo.",
    array: [
      "pizza.",
    ]
  },
];

// Generates a random index number from the array items
const randomArrIndex = function(a) {
  return Math.floor(Math.random() * a.length);
}
// Pulls a random string from the array corresponding to the index position of the array item
const randomString = function(a) {
  return a[randomArrIndex(a)]
}
// renders the default text declared on the data-default-text HTML attribute
const defaultText = function (el) {
  // gsap.from(el, {
  //   duration: 1,
  //   text: {
  //     value: ""
  //   },
  //   ease: "none",
  //   start: ""
  // });
  el.textContent = el.dataset.defaultText;
};
// takes the default text content (o) and the array (a) as attributes and sets the textContent of the DOM element
const setString = function(o, a) {
  o.textContent = " " // sets the content to empty
  gsap.to(o, {   
    duration: 0.75,
    text: {
      value: randomString(a), // replaces the content with a random string
    },
    ease: "none"
  })
}


// mouse events
const scrambleText = function (o, a) {
  o.addEventListener('mouseover', function() {
    setString(o, a)
  })
  o.addEventListener('mouseleave', function() {
    defaultText(o)
  });
};

// call the function to iterate on the array
scrambleEls.forEach(function (el) {
  let target = document.getElementById(el.id);
  let array = el.array
  scrambleText(target, array)
});

// Ticker on scroll
// Each of these tweens animates the lines by class right to left and left to right
const tlOne = gsap
  .timeline({
    scrollTrigger: {
      scrub: 0.3,
      end: "bottom 10%",
      trigger: ".tickers",
      toggleActions: "restart none reverse pause"
    },
  })
  .to('.r-to-l', {
    x: 150,
    duration: 1,  
  })
  .to(".l-to-r", {
    x: -150,
    duration: 1,
  },
  "<"
);

// Above-the-fold items
const bogotaBubble = CSSRulePlugin.getRule(".atf-content:before");
const headerText = document.getElementById("header-content")
const menuNav = document.getElementById("nav");
const backButton = document.getElementById("back-to-top");

const tlTwo = gsap
  .timeline({
    scrollTrigger: {
      // markers: true,
      trigger: ".atf-content",
      scrub: 0.2,
      duration: 4,
      start: "top 25%",
      end: "bottom 35%",
      toggleActions: "restart none reverse pause",
    },
  });

  tlTwo.to(bogotaBubble, {
    cssRule: {
      xPercent: 500,
      height: 230,
      width: 230
    },
  })
  .to(menuNav, {
    x: 500
  }, "<");

  const halo = document.getElementsByClassName('team-avatar-halo');
  // const halo = CSSRulePlugin.getRule('.team-avatar::before')
 gsap.set(halo, {
   transformOrigin: "50% 50%",
 });
  const tlThree = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: "#team",
      start: "top 80%",
      toggleActions: "restart none reverse pause",
      scrub: true
    }
  });

  tlThree.to(halo, {
    motionPath: {
      path: "M25,50a25,25 0 1,0 50,0a25,25 0 1,0 -50,0",
      duration: 1000,
    },
  });