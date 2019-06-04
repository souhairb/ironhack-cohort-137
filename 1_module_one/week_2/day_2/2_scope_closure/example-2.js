console.log("********************************");
console.log("********* example-2.js *********");
console.log("********************************");

(function () { // this iife is executed right away
    "use strict";
    // in strict mode, default value of this is undefined ...
    // strict mode prevents you to write in the global object (window)

    console.log("this ???", this); // undefined

    function action1(evt) {
        // console.log(this === evt.target);
        // console.log(this === evt.srcElement);
        // console.log(evt.target === evt.srcElement);
        console.log("this ???", this); // this is the button
    }

    function start() {
        console.log("this @start => ", this); // window
        document.getElementById("action_1").onclick = action1; // action1 is executed every time the button is clicked
    }

    window.addEventListener("DOMContentLoaded", start); // start is executed on DOMLoad

}());
