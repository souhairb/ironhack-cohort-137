console.log("DOM loaded, client is ready to rock !!!");

const body = document.querySelector("body");

console.log(body);

window.onclick = function(evt) {
    console.log("hey ya clicked me !!!");
    body.classList.toggle("is-dark");
};