
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, TextPlugin, MotionPathPlugin);

// Scramble words 


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
    x: 250,
    duration: 1,  
  })
  .to(".l-to-r", {
    x: -250,
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

  // Animate image on scroll
  const canvas = document.getElementById("shaka");
  const context = canvas.getContext("2d");
  
  canvas.width = 1200;
  canvas.height = 1350;

  const frameCount = 40;
  const currentFrame = (index) =>
    `/assets/stopmotion/${(index + 1).toString().padStart(4, "0")}.jpg`;

  const images = [];
  const gesture = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap.to(gesture, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
      // markers: true,
      trigger: ".atf-content",
      duration: 1,
      scrub: 0.5,
      start: "top 20%"
    },
    onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
  });

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[gesture.frame], 0, 0);
  }