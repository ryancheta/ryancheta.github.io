var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;
  var navHeight = (-1) * document.getElementsByClassName('nav')[0].offsetHeight;

  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav")[0].style.top = "0";
  } else {
    document.getElementsByClassName("nav")[0].style.top = navHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}
