
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const header = document.getElementById('thisone');

const input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
const arrayLength = input.innerHTML;
const end = input.length - 1;

var text1 = new innerHTML();
var textTag = document.text1;


button.addEventListener('click', addOne);

function addOne() {
    var counter = 0;
    if (counter == end) {
        counter = 0;
    }
    else {
        counter++;
    }
    header.innerHTML = input[counter];
};









// Use array to store text and filter through them
// How to get button click to correspond with change of image
