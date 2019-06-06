// nodemon is a deamon : a program that runs in the background
// sudo npm install -g nodemon
// stands for : npm, install nodemon utility program globally on my machine

// now you can run your js code directly in the terminal !!!
// but ... you won't have access so window/document objects ...
// node is server-side ... there is no document here !

/////////////////////////////////////////////////////////////
// setTimeout : execute the callback at a given delay time //
////////////////////////////////////////////////////////////

setTimeout(() => { // 1st arg is a callback
    console.log("this is asynchronous !!!");
    // so this callback will be executed in 5secs
}, 5000); // delay expressed in milliseconds;
// 1000 => 1sec
// 10000 => 10sec, etc.

// hint : setTimeout may be usefull to finish your memory lab ;)


////////////////////////////////////////////////////////////
//    setInterval : execute the callback over time        //
////////////////////////////////////////////////////////////

var count  = 0;
const intervalId = setInterval(() => {
    console.log("hello world !!!", count);
    count++; // increment the counter
    if (count === 10) clearInterval(intervalId); // stop the interval
}, 1000);



