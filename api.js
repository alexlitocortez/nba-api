
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');
const header = document.getElementById('thisone');

const input = ["Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
const arrayLength = input.length;


button.addEventListener('click', addOne);

function addOne() {
    this.inner = nextOne();
    for (var i = 0; i < arrayLength; i++) {
        header.innerHTML = arrayLength[i];
        console.log(input[i]);
    }
};

function nextOne() {
    input.forEach(entry) {
        console.log(entry);
    }
}




// Use array to store text and filter through them
// How to get button click to correspond with change of image
