
const slides = document.getElementsByClassName("mySlides");
const numbers = document.getElementById('numbertext');
const textAlign = document.getElementById('text-align');
const button = document.getElementById('button');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

var counter = 0;


button.addEventListener('click', () => {
    addOne();
    dotsColor();
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
    const dots = document.getElementById('dot');
    for(let i = 0; i < dots.length; i++) {
        const item = dots[i];
        item.classList.toggle('greyout');
        item.classList.remove('greyout');
    }
};


if(first == true) {
    second.classList.toggle('greyout');
} else if(second == false) {
    third.classList.toggle('greyout');
} else {
    first.classList.remove('greyout');
    fourth.classList.toggle('greyout');





// Make sure grey boxes correspond with change in image
// button doesn't work on first click
// Install API
// Make colors and design nice
// Center everything
    //Make sure player name is centered
// Make responsive






