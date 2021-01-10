window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.set('.a', {
  opacity: 0,
});
  gsap.to(".a", {
    scrollTrigger: {
      trigger: ".a",
      markers: true,
      toggleActions: "restart reverse restart reset"
    },
    y: 100,
    opacity: 1,
    duration: 3,
  });
  gsap.to("body", {
    scrollTrigger: {
      trigger: ".colorchangeA",
      markers: true,
      toggleActions: "restart reverse restart reset"
    },
    color: "black",
    duration: 1,

  });
}
