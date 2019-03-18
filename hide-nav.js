var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;
  var navHeight = (-1) * document.getElementsByClassName('nav')[0].offsetHeight;

  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav")[0].style.top = "0";
  } else {
    document.getElementsByClassName("nav")[0].style.top = navHeight + "px";
  }
  if( window.pageYOffset <= 16 ){
    document.getElementsByClassName("nav")[0].style.top = "0";
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

var request = new XMLHttpRequest()
var base_url = 'https://swapi.co/api/'

function baseContextUrl( context ){
  return base_url + context
}

console.log( baseContextUrl('films'))

var filmsUrl = baseContextUrl('films')

request.open('GET', filmsUrl, true)
request.setRequestHeader("Content-Type", "application/json")
request.withCredentials = true
request.onload = function() {
  var starWars = JSON.parse(this.response);
  
    console.log(starWars.results[0].title)
    console.log("I'm in the function")
    // starWars.forEach( movie => {
    //   console.log(movie.results.title);
    // })
}

request.send()
console.log("fudge you!!");
