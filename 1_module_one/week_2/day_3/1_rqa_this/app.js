const myModule = (function () {
    "use strict";

    var a = 1, b = 23, c = 66;

    console.log(this); // undefined
    console.log(window); // defined (still accessible)
    
    function myPrivateFunction() {
        console.log(a); // 1
        var x = 3333;

        function insider() {
            console.log(x); // 3333
            const secret = "foobarbaz";
        }

        console.log(secret); // undefined 

        return "im only accessible INSIDE the scope of the iife";
    }

    console.log(x); // undefined

    function setLocalStore(key, data) {
        var b = 99;
        console.log(b);
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    function getLocalStore(key) {
        return JSON.parse(window.localStorage.getItem(key))
    }

    return { // exposing the public API of myModule
        setLocalStore,
        getLocalStore
    }
}());

myModule.setLocalStore("aUser", {name: "bar", age: 22});

const converted = myModule.getLocalStore("aUser");

console.log("converted JSON string", converted);