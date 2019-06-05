function displayPlayerCount(count) {
    const displayer = document.getElementById("player_count");
    displayer.textContent = count;
}

function listenRange(evt) {
    const target = evt.target || evt.srcElement;
    displayPlayerCount(target.value);
}

function start() {
    const range = document.getElementById("my_first_range");
    const number = document.getElementById("my_first_number");
    range.oninput = listenRange;
    number.oninput = listenRange;
}

window.addEventListener("DOMContentLoaded", start);