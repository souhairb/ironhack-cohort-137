console.log("ready to rock !");

// IIFE => Immediatly Invoked Function Expression
// these functions are called right away
// we use them to protect the global scope
// all our values and function are tighted to this iife's scope
// it's a far more realiable pattern ... so please use it ^^

(function () {

    var user = "Inga";

    // FUNCTION DECLARATIONS

    function doStuff() {
        console.log("WE GOT A LOT TO DO !");
    }

    function sayHello(who) {
        if (typeof who === "string") {
            console.log("hello " + who);
        } else {
            console.log("hello");
        }
    }

    sayHello(user);
    sayHello("Ismaël");
    sayHello("Elin");
    sayHello("Camille J");
    sayHello(42);
    sayHello();

    // doStuff();

    // function multiplyBasic(a, b) {
    //     var result = a * b;
    //     return result;
    // }

    function multiplyLong(a, b) {
        var result = a * b;
        if (isNaN(result)) {
            return "no good";
        } else {
            return result;
        }
    }

    function multiplyBetter(a, b) {
        var result = a * b;
        return isNaN(result) ? "no good" : result;
    }

    function add(a, b) {
        var result = Number(a) + Number(b);
        return isNaN(result) ? "no good" : result;
    }

    console.log("----------- mult ---------------");
    console.log(multiplyBetter());
    console.log(multiplyBetter(2, 2));
    console.log(multiplyBetter("23", "100"));
    console.log("----------- add ---------------");
    console.log(add());
    console.log(add(2, 2));
    console.log(add("23", "100"));

    // this wil throw an error !!!
    // console.log(getStringLength("abcd"));

    // FUNCTION EXPRESSIONS

    var getStringLength = function (str) {
        return str.length;
    };

    var longestFrWordLength = getStringLength("anticonstitutionnellement");
    console.log(longestFrWordLength);

    console.log("---------------------------------");

    // CALLBACKS MIND BLOW !!!!
    // functions in JS are objects, meaning they can be passed around
    // your program as values, and executed later ...

    function a(clbk) {
        return clbk("hey")
    }

    function b(val) {
        return val + " Stephano :)";
    }

    function c(res) {
        console.log(res);
    }

    c(a(b)); // prints "hey"


    // ES6 sneakpeak =>

    // var / let / const 

    var age = 38;
    // ... time passes ^^
    age = 39;

    // const herAge = 33;
    // herAge = 34; // this will crash your program : Assignment to constant 

    const students = [];
    const student3 = { name: "Grégoire", age: 19 };
    console.log(students);
    students.push({ name: "Majdi", age: 35 });
    students.push({ name: "Souhair", age: 30 });
    students.push(student3);
    console.log(students);
    student3.favColor = "blue";
    // students = []; // this will crash ... you can't reassign a to a constant

    // var i = 123;

    for (let i = 0; i < 10; i += 1) {
        console.log(i);
    }

    if (true) {
        let message = "hey, i only exists inside the previous loop.... let is block scoped";
        console.log(message);
    }



}());

const name = "toto";

console.log(name + "'s length is " + name.length);
console.log(`${name}'s length is ${name.length}`); // template litterals are wrapped inside backticks ....

// create a music instrument object
const guitar = {type: "guitar", brand: "Fender", price: 600};
const piano = {type: "piano", brand: "Yamaha", price: 4000};
const drumBox = {type: "rythm box", brand: "Electron", price: 1200};
const bongo = {type: "drums", brand: null, price: 55};

// console.log(guitar, typeof guitar);
// console.log(piano, typeof piano);

const instruments = [guitar, bongo, drumBox, piano];

console.log(instruments);

// pick a loop to parse each instrument and display it's type in the console
// if the brand is missing, print:  "sorry no brand is set".
for (let i = 0; i < instruments.length; i += 1) {
    // console.log(i); // 1 - this is the index
    // 2 - try to access each instrument in the loop ...
    // 3 - finaly the type of each instrument
    console.log(instruments[i].type);

    // if (instruments[i].brand === null) {
    if (!instruments[i].brand) {
        console.log("sorry, no brand is set... yet !");
    }
}