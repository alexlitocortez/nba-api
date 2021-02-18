
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

var counter = 0;
var counting = 0;


function dedicatedFunction() {
    addOne()
    imageOne()
};


function addOne() {
    var input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
    if(counter == input.length)
    counter = 0; //reset index once end of array is reached
    header.innerHTML = input[counter];
    counter++;
};

function imageOne() {
    var warriors = ["curry.jpg", "oubre.jpg", "wiggins.jpeg", "green.jpeg", "wiseman.jpg"];
    if(counter == warriors.length)
    counting = 0;
    image.src = warriors[counting];
    counting++;
}



// Button doesn't work on first click and doesn't match with the images // james wiseman picture doesn't show up first time
// Make sure grey boxes correspond with change in image
// Make colors and design nice
// Center everything
// Make responsive
