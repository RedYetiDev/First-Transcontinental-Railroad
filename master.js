var dropdownbtn = document.querySelector('.dropdownbtn');
dropdownbtn.addEventListener('mouseover', dropdowncontent);
dropdownbtn.addEventListener('mouseout', changeDefOut);

function dropdowncontent() {
  document.getElementById("dropdowncontent").style.display = "none";
}

function changeDefOut(e) {
  e.target.classList.toggle('opacity-toggle');
}
