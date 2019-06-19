// console.log("hey hey !!!!");

const express = require("express"); // include express function
const app = express(); // execute express function
const hbs = require("hbs"); // include hbs templating engine (HTML++)
// there are many templating engines : pug, ejs, mustache, jade ...
// we picked hbs for this course (choisir c'est renoncer)

app.use(express.static(__dirname + "/public"));
// "public" folder (allow to download files contained in this specific folder)
app.set("views", __dirname + "/views");
// where my VIEWS are located ? inside "views" folder (check MVC)
app.set("view engine", "hbs"); // wich program should render my views ? HBS !!!
hbs.registerPartials(__dirname + "/views/partials"); // where my view-partials are located ?

app.get("/", (req, res) => {
  console.log("hey server, a page has been requested !!!", req.url);
  // wait for client requests on this route
  const bodyClass = "home";
  const user = "Inga";
  const cssSheets = ["home", "slider"];
  const msg = "wow awesome ; )";
  res.render("home", { user, msg, bodyClass, cssSheets }); // when it happens, send this view-file back to the client
});

app.get("/students", (req, res) => {
  // wait for client requests on this route
    const title = "Students Page";
    const bodyClass = "students";
    const cssSheets = ["students"];
    const students = [];
    res.render("students", { cssSheets, students, title, bodyClass}); // when it happens, send this file back to the client
});

app.listen(9999, () => {
  console.log("server is ready to serve content @: http://localhost:9999");
});
