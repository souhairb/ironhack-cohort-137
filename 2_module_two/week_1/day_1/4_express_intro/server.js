// to start coding with express, we must require it !!!
const express = require("express"); // express is a external lib
// hence, to use it, we must install it !!!
// $ npm init -y
// $ npm install --save express
// now we are ready to start using express
const app = express(); // this execution will return an object
// we can use this object to create a simple app ;)

// this app is already a http server !!!
// so we can serve contents over the network through http protocol

app.use(express.static("public")); 
// the public folder's content is available to download

console.log("current working folder path", __dirname);
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

// nodemon server.js
app.listen(9998); // in your browser, go to localhost:9998 
console.log("server is running @: http://localhost:9998");