//Part I
//In your Javascript file, using setTimeout, call a
//function after 2 seconds.
//The function will alert“ Hello World”.
setTimeout(function() {
    alert("Hello word!")
}, 2000)

//Part II
//In your Javascript file, using setTimeout, call a
//function after 2 seconds The
//function will add a new paragraph < p > Hello World < /p> to the <div id="container">.
let x = document.getElementById('container');
setTimeout(function() {
    let p = document.createElement("p")
    p.innerHTML = "Hello World";
    x.appendChild(p)
}, 2000);

//Part III In your Javascript file, using setInterval, call a function every 2 seconds.
//The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//The interval will be cleared (ie. clearInterval), when the user will click on the button.
//Instead of clicking on the button, the interval will be cleared (ie.
//clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">
let y = document.getElementById('container');

let autopara = setInterval(para, 2000);
let compt = 0;

function para() {
    compt++
    if (compt <= 5) {
        let para = document.createElement("p")
        para.innerHTML = "Hello World";
        y.appendChild(para)

    } else {
        clearInterval(autopara)
    }
}

function stop() {
    clearInterval(autopara)
}