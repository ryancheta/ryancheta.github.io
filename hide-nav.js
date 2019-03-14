var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav")[0].style.top = "0";
  } else {
    document.getElementsByClassName("nav")[0].style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}
