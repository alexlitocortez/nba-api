
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
    pointStats();
    reboundStats();
    assistStats();
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

// Gives backgroundcolor to each dot when button is clicked
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

// Changes points to match player's stats
function pointStats() {
    var stats = ["29.5", "15.5", "17.1", "5.7", "12.0"];
    for (var i = 0; i < stats.length; i++)
    if(header.innerHTML == "Stephen Curry") {
        document.getElementById('ppg').innerHTML = stats[0];
    }
    else if(header.innerHTML == "Kelly Oubre") {
        document.getElementById('ppg').innerHTML = stats[1];
    }
    else if(header.innerHTML == "Andrew Wiggins") {
        document.getElementById('ppg').innerHTML = stats[2];
    }
    else if(header.innerHTML == "Draymond Green") {
        document.getElementById('ppg').innerHTML = stats[3];
    } else {
        document.getElementById('ppg').innerHTML = stats[4];
    }
}

// Changes rebounds to match player's stats
function reboundStats() {
    var reboundStats = ["5.4", "5.9", "4.5", "6.0", "5.9"];
    for (var i = 0; i < reboundStats.length; i++)
    if(header.innerHTML == "Stephen Curry") {
        document.getElementById('rpg').innerHTML = reboundStats[0];
    }
    else if(header.innerHTML == "Kelly Oubre") {
        document.getElementById('rpg').innerHTML = reboundStats[1];
    }
    else if(header.innerHTML == "Andrew Wiggins") {
        document.getElementById('rpg').innerHTML = reboundStats[2];
    }
    else if(header.innerHTML == "Draymond Green") {
        document.getElementById('rpg').innerHTML = reboundStats[3];
    } else {
        document.getElementById('rpg').innerHTML = reboundStats[4];
    }
}

// Changes assists to match player's stats
function assistStats() {
    var assistStats = ["6.4", "1.4", "2.1", "8.5", "0.6"];
    for (var i = 0; i < assistStats.length; i++)
    if(header.innerHTML == "Stephen Curry") {
        document.getElementById('apg').innerHTML = assistStats[0];
    }
    else if(header.innerHTML == "Kelly Oubre") {
        document.getElementById('apg').innerHTML = assistStats[1];
    }
    else if(header.innerHTML == "Andrew Wiggins") {
        document.getElementById('apg').innerHTML = assistStats[2];
    }
    else if(header.innerHTML == "Draymond Green") {
       document.getElementById('apg').innerHTML = assistStats[3]; 
    } else {
        document.getElementById('apg').innerHTML = assistStats[4];
    }
}











