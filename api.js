
const arrows = document.getElementById('arrows');

arrows.addEventListener('click', () => {
    expand();
})

 function expand() {
     arrows.style.transform = "scale(1.2)";
     arrows.style.transition = "0.5s";
 }


