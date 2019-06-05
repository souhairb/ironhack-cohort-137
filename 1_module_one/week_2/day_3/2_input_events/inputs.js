function displayPlayerCount(count) {
    const displayer = document.getElementById("player_count");
    displayer.textContent = count;
}

function changeColor(value) {
    document.getElementById("selected_color").textContent = value; // display color value
    document.querySelector("body").style.background = value; // change body bg color
}

function listenRange(evt) {
    const target = evt.target || evt.srcElement;
    displayPlayerCount(target.value);
}


function listenColor(evt) {
    const target = evt.target || evt.srcElement; // get current input
    changeColor(target.value); // pass it's value to a changeColor function
}

function start() {
    const range = document.getElementById("my_first_range"); // select html element
    const number = document.getElementById("my_first_number"); // select html element
    const color = document.getElementById("my_first_color"); // select html element
    range.oninput = listenRange; // set event listeners
    number.oninput = listenRange; // set event listeners
    color.oninput = listenColor; // set event listeners
}

window.addEventListener("DOMContentLoaded", start);