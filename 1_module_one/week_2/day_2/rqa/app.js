console.log("hello world");

// https://developer.mozilla.org/en-US/docs/Web/Events


function buttonAction(evt) { // implicit parameter
    const target = evt.target || evt.srcElement;
    target.classList.toggle("is-active");
    console.log("clicked !", evt, target);
}

window.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("my_btn");
    const btns = document.querySelectorAll("#top_buttons .btn");
    btn.textContent += " modified";
    console.log(btns);

    for (let i = 0; i < btns.length; i += 1) {
        btns[i].onclick = buttonAction; // the evt is attached here... onclick
    }

});
