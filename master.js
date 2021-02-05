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
