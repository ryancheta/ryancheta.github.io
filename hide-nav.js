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

function showNav(e){
  var bottom = document.getElementsByClassName("nav")[0].clientHeight;
  var y = e.clientY;
  console.log(y);
  console.log("I'm printing!!");

  if(( e.clientY <= bottom)) {
    document.getElementsByClassName("nav")[0].style.top = "0";
  }
}

function mouseOut( e ){
  var navHeight = (-1) * document.getElementsByClassName('nav')[0].offsetHeight;  
  
  if( e.clientY >= navHeight && window.pageYOffset != 0 ){
    document.getElementsByClassName('nav')[0].style.top = navHeight + "px";
  } 
  else if(window.pageYOffset == 0){
    document.getElementsByClassName("nav")[0].style.top = "0";
  }
}

console.log("fudge you!!");