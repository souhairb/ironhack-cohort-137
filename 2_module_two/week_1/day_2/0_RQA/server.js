const log = require("./utils");
require("./fat-arrows");
require("./callbacks");
const express = require("express");
const app = express();
var count = 0;
app.get("/", (req, res) => {
    console()
    res.send("hello, i've been delivered by server.js");
});

app.get("/foo", (req, res) => {
    res.send("hello, i'm content of foo route !!!");
});

app.get("/api/users", (req, res) => {
    res.json([{name: "foo"}, {name: "bar"}])
});


app.listen(5555); // started !!!