window.onload = function() {
  var span = document.getElementsByClassName("close")[0];
  var modal = document.getElementById("myModal");
  g1 = document.getElementById("game1")
  g2 = document.getElementById("game2")
  games = document.getElementsByClassName("games")[0]
  window.onresize = function() {
    if (window.innerWidth < 875 & games.style.display != "none") {
      console.log("RESIZE")
      $(".games").fadeOut()
    }
    else if (window.innerWidth > 874 & games.style.display == "none") {
      console.log("RESIZE (2)")
      $(".games").fadeIn()
    }
  }

  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  g1.onwebkitfullscreenchange = function() {g1.src = g1.src}
  g2.onwebkitfullscreenchange = function() {g2.src = g2.src}
}
function full(elem) {
  if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) { /* Safari */
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE11 */
  elem.msRequestFullscreen();
}
}
