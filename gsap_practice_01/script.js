gsap.registerPlugin(ScrollTrigger);

var k = gsap.timeline();

k.from("#nav", {
  opacity: 0,
  delay: 0.5,
});

k.from("#nav h1, #nav h4, #nav h3", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});

k.from("#left h1", {
  x: -500,
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
});

k.from("#right img", {
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
});

gsap.from("#page2 .box", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    start: "top 70%",
    // markers: true,
  },
});
