console.log("********************************");
console.log("********* example-3.js *********");
console.log("********************************");

var myWidget = (function () { // this function is executed right away (iife)
    "use strict";
    var total = 0; // total is accessible in the full iife's scope

    function setTotal(a, b) { // a classic function returning  the product of 2 number
        total = Number(a) * Number(b);
    }

    function getTotal() { // a simple getter that returns total's value
        return total;
    }

    return { // the iife returns an object
        setTotal: setTotal, // containing out "public methods"
        getTotal //
    }
    // all other values are private to this iife
}());

console.log(myWidget); // an object containg the public API of our widget
console.log(myWidget.total); // undefined, total is private !
console.log(myWidget.getTotal());
console.log(myWidget.setTotal(10, 1000));
console.log(myWidget.getTotal());
// this way you force anyone using your api to use YOUR business logic
// hence you can't modify the total as you like... you have to use the provided function
