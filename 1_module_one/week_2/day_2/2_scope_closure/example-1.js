console.log("********************************");
console.log("********* example-1.js *********");
console.log("********************************");

(function() {
    "use strict"; //strict mode prevents use global variables

    var user = {name: "toto", age: 0};

    console.log("1 - ", this); // undefined
    console.log("2 - ", window); // you still can access to the global object through window

    function a() {
        return true;
    }

    function b() {
        console.log("---- function b exec  ----");
        const x = "toto"; // that x is scoped to b
        return typeof x === "number";
    }

    function c() {
        console.log("---- function c exec  ----");
        var x; // x that is scoped to c

        function getNow() {
            return Date.now(); // returns a UNIX timestamp
        }

        x = getNow();

        function getTypeOfX() {
            var y = "yo";
            console.log("x in getTypeOfX => " , x);
            console.log("y in getTypeOfX => " , y);
            return typeof x;
        }

        // console.log("y outside getTypeOfX => " , y); // undefined
        return getTypeOfX();
    }

    console.log(a()); // true
    console.log(b()); // false
    console.log(a() && b()); // false
    console.log(c());
}());