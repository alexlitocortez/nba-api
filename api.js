
const slides = document.getElementsByClassName("mySlides");
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const textAlign = document.getElementById('text-align');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

// Array of NBA player images
const images = ["/Users/l/Desktop/Frontendmentor.io/NBA API/curry.jpg", "/Users/l/Desktop/Frontendmentor.io/NBA API/oubre.jpg", 
"/Users/l/Desktop/Frontendmentor.io/NBA API/wiggins.jpeg", "/Users/l/Desktop/Frontendmentor.io/NBA API/green.jpg", 
"/Users/l/Desktop/Frontendmentor.io/NBA API/wiseman.jpg"];

// Array of individual NBA player images
const curry = "/Users/l/Desktop/Frontendmentor.io/NBA API/curry.jpg";
const oubre = "/Users/l/Desktop/Frontendmentor.io/NBA API/oubre.jpg";
const wiggins = "/Users/l/Desktop/Frontendmentor.io/NBA API/wiggins.jpeg";
const green = "/Users/l/Desktop/Frontendmentor.io/NBA API/green.jpg";
const wiseman = "/Users/l/Desktop/Frontendmentor.io/NBA API/wiseman.jpg";

const btns = document.querySelectorAll('.dot');

var counter = 0;

// Event listener which triggers functions when I click the button
button.addEventListener('click', () => {
    addOne();
    dotsColor();
})

// Function which triggers different images and text when button clicked
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
    if(header.innerHTML == "Stephen Curry") {
        dotFive.classList.remove('greyout');
        dotOne.classList.toggle('greyout');
    } else if(header.innerHTML == "Kelly Oubre") {
        dotOne.classList.remove('greyout');
        dotTwo.classList.toggle('greyout');
    } else if(header.innerHTML == "Andrew Wiggins") {
        dotTwo.classList.remove('greyout');
        dotThree.classList.toggle('greyout');
    } else if(header.innerHTML == "Draymond Green") {
        dotThree.classList.remove('greyout');
        dotFour.classList.toggle('greyout');
    } else {
        dotFour.classList.remove('greyout');
        dotFive.classList.toggle('greyout');
    }
}

function fetchPlayerStats() {
    // GET API
    let request = new XMLHttpRequest();
    request.open("GET", "https://www.balldontlie.io/api/v1/players");
    request.send();
    request.onload = () => {
        console.log(request);
        if(request.status === 200) {
            console.log(JSON.parse(request.response));
        } else {
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}


// button doesn't work on first click
// Install API
// Make colors and design nice
// Center everything
    //Make sure player name is centered
// Make responsive






