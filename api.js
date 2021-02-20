
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

var counter = 0;
var images = [ 
    {src: "curry.jpg"}, 
    {src: "oubre.jpg"}, 
    {src: "wiggins.jpeg"}, 
    {src: "green.jpg"}, 
    {src: "wiseman.jpg"} 
];
var loaded = 0;


button.addEventListener('click', () => {
    addOne();
    loadImages();
    nextStep();
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
        var tmp = new Image;
        tmp.onload = function() {
            loaded++;if(loaded == images.length){nextStep();}};
        }
        image.src = images[i]
        i++;
    }

function nextStep() {
    console.log("everything loaded");
}





// james wiseman picture doesn't show up first time
    // - It's not the picture's fault
// button doesn't work on first click and doesn't match with the images
// Install API
// Make sure grey boxes correspond with change in image
// Make colors and design nice
// Center everything
// Make responsive






