// if you are tired of writing document.getElementById ...
// you may always create shortcut functions ... ^^
function byId(id) { // takes a string (id) as argument
    return document.getElementById(id); // returns the wanted element
}

function init() {
    var climber = byId("start"); // now we have a starting point ...
    // let's climb up the tree !
    // ... loop, check, go up OR stop !
    while (climber.id !== "goal") climber = climber.parentElement;
    console.log(climber.id + " !!!!!!!");
    
}

window.addEventListener("DOMContentLoaded", init); // don't forget