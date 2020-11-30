const scrambleEls = [
  {
    id: "line-1",
    defaultString: "estúdio",
    array: ["coletivo", "bando", "monastério", "grupo musical", "forno"],
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
    array: ["substâncias", "ritmos", "cores", "palavras", "formas", "orégano"],
  },
  {
    id: "line-5",
    defaultString: "caminhos",
    array: ["o espaço", "planetas", "dimensões", "hipóteses", "azeitonas"],
  },
  {
    id: "line-6",
    defaultString: "no prazo.",
    array: ["pizza."],
  },
];

// Generates a random index number from the array items
const randomArrIndex = function (a) {
  return Math.floor(Math.random() * a.length);
};
// Pulls a random string from the array corresponding to the index position of the array item
const randomString = function (a) {
  return a[randomArrIndex(a)];
};
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
    opacity: 1,
  });
  gsap.from(o, {
    delay: 1.2,
    text: {
      value: o.dataset.defaultText,
    },
    opacity: 0,
  });
};

// mouse events
const scrambleText = function (o, a) {
  o.addEventListener("mouseover", function () {
    setString(o, a);
  });
};

// call the function to iterate on the array
scrambleEls.forEach(function (el) {
  let target = document.getElementById(el.id);
  let array = el.array;
  scrambleText(target, array);
});
