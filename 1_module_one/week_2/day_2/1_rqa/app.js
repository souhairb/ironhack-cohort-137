// https://developer.mozilla.org/en-US/docs/Web/Events

function addBtnStyle(btn) {
    const previous = document.querySelector("#top_buttons .btn.is-active");
    if (previous) previous.classList.remove("is-active");
    btn.classList.add("is-active");
}

function displayContent(evt) { // implicit parameter
    // evt is the object representing the click event itself
    const display = document.getElementById("display");
    const target = evt.target || evt.srcElement; // the clicked button

    addBtnStyle(target);

    if (target.id === "btn_joke") display.innerHTML = "Dentist: 'This will hurt a little.'<br> Patient: 'OK.'<br>Dentist: 'I’ve been having an affair with your wife for a while now.'";

    else if (target.id === "btn_fact") display.innerHTML = "In Switzerland it is illegal to own just one guinea pig. <br> This is because guinea pigs are social animals,<br> and they are considered victims of abuse if they are alone. <br>Why isn’t this a law everywhere?!";

    else display.innerHTML = '<img src="./cat.gif"/>';
}

function start() {
    const btns = document.querySelectorAll("#top_buttons .btn");

    for (let i = 0; i < btns.length; i += 1) {

        btns[i].onclick = displayContent;
    }
}

window.addEventListener("DOMContentLoaded", start);
