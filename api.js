
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const header = document.getElementById('thisone');


button.addEventListener('click', addOne);

function addOne() {
    var input = ["Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
    input.forEach(function(entry) {
        console.log(entry);
    }
};

function endOne() {
    
}




// Use array to store text and filter through them
// How to get button click to correspond with change of image
