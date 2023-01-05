//Copy the code above, to a structured HTML file.
//In your Javascript file add the functionality which will allow you to drag the
//box and drop it into the target
//====================================================================


//  Allows us to drop.
function allowDrop(event) {
    event.preventDefault();
}


//set the data to be dragged
function dragStart(event) {
    console.log("target:", event.target)
    console.log("id: ", event.target.id)
    event.dataTransfer.setData("text", event.target.id);
}

// retrieve the data dragged
function dragDrop(event) {
    console.log("event.target:", event.target)
    event.preventDefault();


    let data = event.dataTransfer.getData("drop");
    console.log("data: ", data)

    let box = document.getElementById(data)
    event.target.appendChild(box);
}