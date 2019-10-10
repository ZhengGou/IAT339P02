//Create a function to easily select our elements
const toBeSlected = (s) => document.querySelector(s);

//Hide and show the navigation on click
toBeSlected('.menu-toggle').addEventListener('click', () => {
    toBeSlected('header').classList.toggle('nav-open');
});
//Hide and show dropdown on click
toBeSlected('.dropdown-toggle').addEventListener('click',(e)=>{
    e.preventDefault();
    toBeSlected('#myDropdown').classList.toggle('show-dropdown');
});