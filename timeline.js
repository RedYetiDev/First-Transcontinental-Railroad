window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);
  const leftboxes = document.querySelectorAll('.left');

  leftboxes.forEach((leftboxes) => {
    gsap.to(leftboxes, {
      scrollTrigger: {
        trigger: leftboxes,
        toggleActions: "restart reset restart reset",
        markers: true,
      },
      start: "center center",
      left: 0,
      opacity: "100%"
    });
  });
  gsap.registerPlugin(ScrollTrigger);
  const rightboxes = document.querySelectorAll('.right');

  rightboxes.forEach((rightboxes) => {
    gsap.to(rightboxes, {
      scrollTrigger: {
        trigger: rightboxes,
        toggleActions: "restart reset restart reset",
        markers: true,
      },
      start: "center center",
      left: "50%",
      opacity: "100%"
    });
  });
}
