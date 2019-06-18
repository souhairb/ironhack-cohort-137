
/**
 * @param {Function} goToB - a dummy callback function 
 * @throws will crash if first arg is not a function
 */
function a(clbk) {
    if (typeof clbk !== "function") throw new Error("hey pal, i need a function arguments (it's a callback usecase :)");

    console.log("so far so good...\n");

    clbk("this is the final value i passed ...");
}

function b(finalValue) {
    console.log(finalValue);
}

try {
    console.log("------SNEAKERS-------");
    // a(10); // this function call will throw an error :(
    a(b);

    a((val1) => { // callbacks can be defined a execution time
        console.log(val1);
    });

    a(function(val2) { // this is ok with regular function and fat-arrows 
        console.log(val2);
    });

} catch(err) {
    console.log(err.message);
}

console.log("OK : this program won't break !!!");

