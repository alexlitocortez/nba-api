
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const header = document.getElementById('thisone');

var counter = 0;


button.addEventListener('click', addOne);

function addOne() {
    var input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];

    if(counter == input.length)
    counter = 0; //reset index once end of array is reached
    header.innerHTML = input[counter];
    counter++;
};







// How to get button click to correspond with change of image
