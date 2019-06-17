// dependencies : a third-party program loaded in your own code
// in node, we import dependencies with the require function
const http = require("http"); // part of node's core API

const home = "<h1>Hello home</h1>";
const foo = "<h1>Hello foo</h1>";

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.write(home);
    } else if (request.url === "/foo") {
        response.write(foo);
    }
    response.end();
});

server.listen(9999); // starts here !!!













// const http = require("http");

// console.log(http);
// console.log(typeof http);

// const res1 = "hello world of node !";
// const res2 = "<p>some html !!!</p>";

// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     response.write(res2);
//     response.end();
// });

// server.listen(9999);