window.onload = function() {
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
}
