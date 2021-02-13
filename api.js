
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementById('dot');
const numbers = document.getElementById('numbertext');
const button = document.getElementById('button');

button.addEventListener('click', addOne);

function addOne() {
    var foo = document.getElementById('thisone').innerHTML;
    if (foo >= 5) {
        return 1;
    } else {
    foo++;
    document.getElementById('thisone').innerHTML = foo;
    }
}



// How to get number to stop at 5 and reset
// How to get button click to correspond with change of image
