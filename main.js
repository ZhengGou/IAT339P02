

//carousel slideshow in homepage
sliderPrev = function () {
  next = current;
  --current;
  if (current == -1) current = 1
  displayPrev(next, current);
}

sliderNext = function () {
  prev = current;
  current = (++current) % n;
  displayNext(prev, current);
}

function displayPrev(next, current) {
  $($(".top-slider-1")[current]).css({ "left": "-100%" });
  $($(".top-slider-1")[current]).animate({ "left": "0%" }, 800);
  $($(".top-slider-1")[next]).animate({ "left": "100%" }, 800);
}

function displayNext(prev, current) {
  $($(".top-slider-1")[current]).css({ "left": "100%" });
  $($(".top-slider-1")[current]).animate({ "left": "0%" }, 800);
  $($(".top-slider-1")[prev]).animate({ "left": "-100%" }, 800);
}

stop = function(){
  clearTimeout(myVar);
}

go = function(){
  myVar = setInterval(sliderNext, 5000);
}

function unScroll(){
  var top = $(document).scrollTop();
  $(document).on('scroll.unable', function(e){
    $(document).scrollTop(top);
  })
}

function removeUnScroll(){
  $(document).unbind("scroll.unable");
}

showMenu = function(){
  $('#top_nav').animate({"left":"0"}, 1000);
  $('html').css({"scroll-behavior":"auto"});
  unScroll();
}

hideMenu = function(){
  $('#top_nav').animate({'left':'-25rem'}, 1000);
  $('html').css({"scroll-behavior":"smooth"});
  removeUnScroll();
}

var n = 0;
var current = 0;
var next = 0;
var prev = -1;
var myVar;
setup = function () {
  $(".prevSlide").click(sliderPrev);
  $(".nextSlide").click(sliderNext);
  n = $(".top-slider-1").length;

  for (i = 0; i < n; i++) {
    $($(".top-slider-1")[i]).css({"left":"100%"});
  }
  $($(".top-slider-1")[0]).css({ "left": "0%" });

  $(".top-slider").mouseover(stop);
  $(".top-slider").mouseleave(go);

  myVar = setInterval(sliderNext, 5000);

  $('.toggleA').click(showMenu);
  $('.toggleB').click(hideMenu);
  $('#top_nav').mouseleave(hideMenu);
}

$(document).ready(setup);