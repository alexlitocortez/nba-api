
const slides = document.getElementsByClassName("mySlides");
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const textAlign = document.getElementById('text-align');
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
    var btns = document.querySelectorAll(".dot");
    Array.from(btns).forEach(item => {
        item.addEventListener('click', () => {
            var selected = document.getElementsByClassName("greyout");
            selected[0].className = selected[0].className.replace("greyout");
            item.className += "greyout";
        })
    })
}






// Make sure grey boxes correspond with change in image
// button doesn't work on first click
// Install API
// Make colors and design nice
// Center everything
    //Make sure player name is centered
// Make responsive






