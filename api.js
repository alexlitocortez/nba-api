
const slides = document.getElementsByClassName("mySlides");
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const textAlign = document.getElementById('text-align');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

const images = ["/Users/l/Desktop/Frontendmentor.io/NBA API/curry.jpg", "/Users/l/Desktop/Frontendmentor.io/NBA API/oubre.jpg",
"/Users/l/Desktop/Frontendmentor.io/NBA API/wiggins.jpeg", "/Users/l/Desktop/Frontendmentor.io/NBA API/green.jpg",
"/Users/l/Desktop/Frontendmentor.io/NBA API/wiseman.jpg"];

const btns = document.querySelectorAll('.dot');

var counter = 0;


button.addEventListener('click', () => {
    addOne();
    dotsColor();
})


function addOne() {
    var input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
    if(counter == input.length)
    if(counter == images.length)
    counter = 0;
    header.innerHTML = input[counter];
    image.src = images[counter];
    counter++;
}

function dotsColor() {
    var dotOne = document.getElementById('dotOne');
    var dotTwo = document.getElementById('dotTwo');
    var dotThree = document.getElementById('dotThree');
    var dotFour = document.getElementById('dotFour');
    var dotFive = document.getElementById('dotFive');
    var docViewBottom = document.querySelectorAll('.dot');
    if(textAlign == dotOne) {
        dotOne.classList.toggle('greyout');
    } else if(dotTwo = clicked) {
        dotTwo.classList.toggle('greyout');
    } else if {

    } else if {

    } else {

    }
    }
}


if (elemBottom < docViewBottom) {
    $elem.addClass('active');
  }

// 1. Click button and greyout class appears on span
//  - try for loops


// Make sure grey boxes correspond with change in image
// button doesn't work on first click
// Install API
// Make colors and design nice
// Center everything
    //Make sure player name is centered
// Make responsive






