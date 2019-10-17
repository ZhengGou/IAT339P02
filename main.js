//Create a function to easily select our elements
const toBeSlected = (s) => document.querySelector(s);

//Hide and show the navigation on click
// toBeSlected('.toggleA').addEventListener('click', () => {
//     toBeSlected('header').classList.toggle('nav-open');
// });
// toBeSlected('.special').addEventListener('click', () => {
//   toBeSlected('header').classList.toggle('nav-open');
// });

var menuWidth=$('#top_nav').width();
// $('window').click(function(){
//   if()
//   alert(menuWidth);
// });
var isSlidedOut=false;
$(document).ready(function(){
  $(".toggleA").click(function(){
    toBeSlected('header').classList.toggle('nav-open');
    isSlidedOut = true;
  });

  $(".toggleB").click(function(){
    toBeSlected('header').classList.toggle('nav-open');
    isSlidedOut = false;
  });

  $('.special').click(function(){
    if(isSlidedOut==true){
      toBeSlected('header').classList.toggle('nav-open');
    // toBeSlected('header').classList.hide('nav-open');
    // $('#top_nav').css('transform', 'translateX(-26em)');
    // $('#top_nav').animate({left:'-25rem'});
    // $('.menu-toggle').animate({left:'-25rem'});
    isSlidedOut=false;
    }
  });

});


//Hide and show dropdown on click
toBeSlected('.dropdown-toggle').addEventListener('click',(e)=>{
  e.preventDefault();
  toBeSlected('#myDropdown').classList.toggle('show-dropdown');
});


