require("dotenv").config(); 
// get .env variables for easy dev AND later online deployment

require("./config/dbconnect"); // database connection

const express = require("express"); // include express function
const app = express(); // execute express function
const hbs = require("hbs"); // include hbs templating engine (HTML++)

//********************************/
// APP CONFIG
//********************************/
app.use(express.static(__dirname + "/public")); // "public" folder (allow to download files contained in this specific folder)
app.set("views", __dirname + "/views"); // where are my VIEWS located ? inside "views" folder (check the MVC pattern)
app.set("view engine", "hbs"); // wich program should render my views ? HBS !!!
hbs.registerPartials(__dirname + "/views/partials"); // where my view-partials are located ?

// setup express to parse posted values as string OR json
app.use(express.json()); // parse posted json objects
app.use(express.urlencoded()); // parse posted strings

//********************************/
// MODEL IMPORTS
//********************************/

const Student = require("./models/student");

// SMALL TEMPORARY UTIL FUNCTION
function createStudent() {
  Student.create({
    age: 23,
    cohort: 137,
    email: "foo@baz.com",
    firstname: "inga",
    lastname: "bar",
  }).then(createdUser => {

    console.log("student created", createdUser);

    setTimeout(() => {
      updateUser(createdUser._id);

      setTimeout(() => {
        deleteUser(createdUser._id);
      }, 4000);
    }, 3000);
  })
}

// createStudent();

function updateUser(id) {
  Student.findByIdAndUpdate(id, { email: "updated@mail.com" })
  .then(res => {
    console.log("user updated", res);
  })
  .catch(err => {
    console.error(err);
  });
}

function deleteUser(id) {
  Student.findByIdAndRemove(id)
  .then(res => {
    console.log("user removed from db", res);
  })
  .catch(err => {
    console.error(err);
  });
}

//********************************/
// ROUTING
//********************************/

app.get("/", (req, res) => {
  // wait for client requests on this route
  const title = "Server-side rendering is awesome ;)";
  res.render("home", { title }); // when it happens, render this view file as HTML and send it back to the client
});

app.get("/students", (req, res) => {

  Student.find({}).then(students => { 
    // db response contains a array of objects containing all the students
    res.render("students", { students }); // render students page and pass it the db response
  })
  .catch(err => {
    res.render("students", { err: "an error occured" });
  })
});

app.get("/create-student", (req, res) => { // display the page
  res.render("formStudent");
});

app.post("/create-student", (req, res) => { // use posted data to feed db
  console.log("@post");
  console.log(req.body);
  // req.body holds the posted values ...
  const { age, cohort, email, firstname, lastname } = req.body;
  // above : destructuring req.body properties into sperated vars ...
  // now we can use our model to insert a new student !!!
  Student.create({ // Mongoose.create returns a promise !!!
    age,
    cohort,
    email,
    firstname,
    lastname
  })
  .then(res => { // if insertion succeeds, we end up in the "then" block
    res.redirect("/students"); // let's redirect to the students page
  })
  .catch(err => { // else if insertion failed, we end up in the "catch" block
    res.redirect("/students"); // let's redirect to the students page
  });
});

app.get("/students/:id", (req, res) => {
  // wait for client requests on this route
  res.send("@todo");
});


//********************************/
// KICKSTART
//********************************/
app.listen(9998, () => {
  console.log("server is ready to serve content @: http://localhost:9998");
});
