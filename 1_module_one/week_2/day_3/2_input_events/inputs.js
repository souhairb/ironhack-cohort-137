function listenRange(evt) {
    // console.log(evt);
    const target = evt.target || evt.srcElement;
    console.log("input event", target.value);
}

function start() {
    const range = document.getElementById("my_first_range");
    console.log(range); // object HTML

    // range.addEventListener("input", listenRange); same as ...
    range.oninput = listenRange;
}

window.addEventListener("DOMContentLoaded", start);