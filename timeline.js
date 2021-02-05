window.onload = function() {
  timeline = document.getElementsByClassName("timeline")[0]
  if (window.innerWidth < 605 & timeline.style.display != "none") {
    $(".timeline").fadeOut()
  }
  else if (window.innerWidth > 604 & timeline.style.display == "none") {
    $(".timeline").fadeIn()
  }
  gsap.registerPlugin(ScrollTrigger);
  const leftboxes = document.querySelectorAll('.left');

  leftboxes.forEach((leftboxes) => {
    gsap.to(leftboxes, {
      scrollTrigger: {
        trigger: leftboxes,
        toggleActions: "restart reset restart reset",
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
      },
      start: "center center",
      left: "50%",
      opacity: "100%"
    });
  });
}
window.onresize = function() {
  timeline = document.getElementsByClassName("timeline")[0]
  if (window.innerWidth < 605 & timeline.style.display != "none") {
    $(".timeline").fadeOut()
  }
  else if (window.innerWidth > 604 & timeline.style.display == "none") {
    $(".timeline").fadeIn()
  }
}
