
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

var counter = 0;

var images = [
    "curry.jpg",
    "oubre.jpg",
    "wiggins.jpeg",
    "green.jpg",
    "wiseman.jpg"
];

button.addEventListener('click', () => {
    addOne();
    loadImages();
})


function addOne() {
    var input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
    if(counter == input.length)
    counter = 0; //reset index once end of array is reached
    header.innerHTML = input[counter];
    counter++;
};

function loadImages() {
    for(var i = 0; i < images.length; i++) {
        image.src = images[i];
        i++;
    }
}


// Button doesn't work on first click and doesn't match with the images // james wiseman picture doesn't show up first time
// Install API
// Make sure grey boxes correspond with change in image
// Make colors and design nice
// Center everything
// Make responsive






