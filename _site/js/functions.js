
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
// renders the default text declared on the array
const defaultText = function (el) {
  el.textContent = el.defaultString;
};

// takes the default text content (o) and the array (a) as attributes and sets the textContent of the DOM element
const setString = function (o, a) {
  gsap.to(o, {
    duration: 0.75,
    text: {
      value: randomString(a), // replaces the content with a random string
    },
    ease: "none",
    opacity: 1
  });
  gsap.from(o, {
    delay: 2,
    text: {
      value: o.textContent,
    },
    opacity: 0
  });
  
};


// mouse events
const scrambleText = function (o, a) {
  o.addEventListener('mouseover', function() {
    setString(o, a)
  })
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
const highlight = document.querySelectorAll(".mobile-show .ticker-element strong");
const tlMobile = gsap
  .timeline({
    scrollTrigger: {
      // markers: true,
      scrub: 0.3,
      start: "top 80%",
      end: "bottom",
      trigger: highlight,
      toggleActions: "restart none reverse pause",
    },
  })
  .to(highlight, {
    stagger: 0.2,
    fontWeight: 700,
    color: "#6555ff",
  });

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
      end: "bottom -30%",
      toggleActions: "restart none reverse pause",
    },
  });

  tlTwo.to(bogotaBubble, {
    cssRule: {
      xPercent: 100,
    },
  })
  .to(menuNav, {
    x: 500
  }, "<");

  const halo = document.getElementsByClassName('team-avatar-halo');
  const tlThree = gsap.timeline({
    repeat: 5,
    scrollTrigger: {
      // markers: true,
      trigger: "#team",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "restart none reverse pause",
      scrub: true
    }
  });

  tlThree.to(halo, {
    motionPath: {
      path: "M-30,0a30,30 0 1,0 60,0a30,30 0 1,0 -60,0",
    },
  });

  const arrow = document.getElementById("arrow")
  const tlArrow = gsap.timeline ({
    duration: 0.1,
    repeat: -1,
    yoyo: true
  });
  tlArrow.from(arrow,{y: 8})