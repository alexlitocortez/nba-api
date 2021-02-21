
const slides = document.getElementsByClassName("mySlides");
const numbers = document.getElementById('numbertext');
const textAlign = document.getElementById('text-align');
const dots = document.getElementById('dot');
const button = document.getElementById('button');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

var counter = 0;

// variables for going back and forth between span siblings
var prev = dots.previousElementSibling;
var next = dots.nextElementSibling;

button.addEventListener('click', () => {
    addOne();
    dotsColor();
    nextColor();
})


function addOne() {
    var input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
    var images = ["/Users/l/Desktop/Frontendmentor.io/NBA API/curry.jpg", "/Users/l/Desktop/Frontendmentor.io/NBA API/oubre.jpg",
    "/Users/l/Desktop/Frontendmentor.io/NBA API/wiggins.jpeg", "/Users/l/Desktop/Frontendmentor.io/NBA API/green.jpg",
    "/Users/l/Desktop/Frontendmentor.io/NBA API/wiseman.jpg"];
    if(counter == input.length)
    if(counter == images.length)
    counter = 0;
    header.innerHTML = input[counter];
    image.src = images[counter];
    counter++;
}

function dotsColor() {
    dots.classList.toggle('greyout');
    for(var i = 0; i < dots.length; i++) {
        if(dots[i] = textAlign) {
            
        }
    }
}


function nextColor() {
    for(var i = 0; i < textAlign.length; i++) {
        
        }
    }
}



// Make sure grey boxes correspond with change in image
// button doesn't work on first click
// Install API
// Make colors and design nice
// Center everything
    //Make sure player name is 
// Make responsive






