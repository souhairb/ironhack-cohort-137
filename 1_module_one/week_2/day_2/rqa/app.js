// https://developer.mozilla.org/en-US/docs/Web/Events

function addBtnStyle(btn) { // implicit parameter
    const previous = document.querySelector("#top_buttons .btn.is-active");
    if (previous) previous.classList.remove("is-active");
    btn.classList.add("is-active");
}

function start() {
    const btns = document.querySelectorAll("#top_buttons .btn");
    const display = document.getElementById("display");

    for (let i = 0; i < btns.length; i += 1) {

        btns[i].onclick = function (evt) {

            const target = evt.target || evt.srcElement;

            addBtnStyle(target);

            if (target.id === "btn_joke") display.innerHTML = "Dentist: 'This will hurt a little.'<br> Patient: 'OK.'<br>Dentist: 'I’ve been having an affair with your wife for a while now.'";

            else if (target.id === "btn_fact") display.innerHTML = "In Switzerland it is illegal to own just one guinea pig. <br> This is because guinea pigs are social animals,<br> and they are considered victims of abuse if they are alone. <br>Why isn’t this a law everywhere?!";

            else display.innerHTML = '<img src="./cat.gif"/>';
        }
    }
}

window.addEventListener("DOMContentLoaded", start);
