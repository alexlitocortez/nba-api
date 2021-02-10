
const arrows = document.getElementById('arrows');
const imageArrow = document.getElementById('image-arrow');
const arrowsTwo = document.getElementById('arrows-2');


arrows.addEventListener('click', () => {
    work();
});

arrows.addEventListener('click', () => {
    works();
})

function work() {
    arrows.style.transform = "scale(1.2)";
    arrows.style.transition = "0.5s";
}

function works() {
    arrowsTwo.style.transform = "scale(1.2)";
    arrowsTwo.style.transition = "0.5s";
}

// Do clicked