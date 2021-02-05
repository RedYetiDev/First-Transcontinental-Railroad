HTMLCollection.prototype.forEach = Array.prototype.forEach
$(document).ready(function(){
    $("body").hide(0).delay(200).fadeIn(1500)
});
function stp() {
    $("html, body").animate({ scrollTop: 0 }, 600);
};
function switchnav() {
  navbar = document.querySelector("ul")
  if (navbar.className == "topbar") {
    navbar.className = "sidebar"
    document.querySelector(".switchnav").className = "fas fa-angle-up switchnav"
  }
  else if (navbar.className == "sidebar") {
    navbar.className = "topbar"
    document.querySelector(".switchnav").className = "fas fa-angle-down switchnav"
  }
}
function hidemenu(self) {
  if (self.classList.contains('change')) {
    self.parentElement.parentElement.children.forEach(function(element) {
      if (!element.children[0].classList.contains("menucon")) {
        $(element).fadeOut(100)
      }
    })
    setTimeout(function () {
      $("ul")[0].style.backgroundColor = "transparent"
    }, 150);
    $(".menucon")[0].style.backgroundColor = "#333"
  } else {
    self.parentElement.parentElement.children.forEach(function(element) {
      if (!element.children[0].classList.contains("menucon")) {
        $(element).fadeIn(100)
      }
    })
    $("ul")[0].style.backgroundColor = "#333"
    $(".menucon")[0].style.backgroundColor = "transparent"
  }
  self.classList.toggle('change')
}
