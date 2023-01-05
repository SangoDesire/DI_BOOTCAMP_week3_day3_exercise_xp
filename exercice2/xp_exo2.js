//Copy the code above, to a structured HTML file.
//In your Javascript file, use setInterval to move the <div id="animate"> to
//the right side of the <div id="container">, when the button is clicked on.
//The <div id="animate"> should move 1px to the right every milisecond, until it
//reaches the end of the <div id="container">.
//Hint : use clearInterval as soon as the box reaches the right end side of the
//container
let x = document.getElementById("container");
let y = document.getElementById("animate");

let distance = x.offsetWidth - y.offsetWidth;
let firstPosition = 0;

let animation;

function myMove() {
    animation = setInterval(move, 1)
}

function move() {
    firstPosition++
    if (firstPosition <= distance) {

        y.style.left = firstPosition + "px"
    } else {
        clearInterval(animation)

    }

}