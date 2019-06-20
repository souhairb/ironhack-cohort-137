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

//********************************/
// ROUTING
//********************************/

// GETS

app.get("/", (req, res) => {
  const title = "home page";
  res.render("home", { title });
});

app.get("/students", (req, res) => {
  Student.find()
    .then(students => {
      res.json(students); // render students page and pass it the db response
    })
    .catch(err => {
      // res.render("students", { err: "an error occured" });
    });
})

// app.get("/students", (req, res) => {
//   Student.find()
//     .then(students => {
//       res.render("students", { students }); // render students page and pass it the db response
//     })
//     .catch(err => {
//       res.render("students", { err: "an error occured" });
//     });
// });

app.get("/create-student", (req, res) => {
  res.render("formStudent");
});

app.get("/students/:id", (req, res) => {
  // we use the path to extract the id
  // each / determines
  // return console.log(req.params);
  Student.findById(req.params.id).then(dbRes => {
    // dbRes is a specific student fetched by id
    res.render("studentDetails", { student: dbRes });
  })
  .catch(dbErr => {
    console.log("deb res not ok", dbErr);
  })
});

app.get("/delete-student/:id", (req, res) => {
  // return console.log(req.params);
  Student.findByIdAndRemove(req.params.id)
    .then(dbRes => res.redirect("/students"))
    .catch(dbErr => res.redirect("/students"));
});

app.get("/search-results", (req, res) => {
  res.render("searchResults");
});

app.get("/search-student", (req, res) => {
  // return console.log(req.query);
  Student.find({ $or: [{ firstname: req.query.search }, { lastname: req.query.search }] })
    .then(searchResults => {
      console.log(searchResults);
      res.redirect("/search-results");
    })
    .catch(error => console.log(error));
});


// POSTS
app.post("/create-student", (req, res) => {
  // return console.log(req.body);
  // use posted data to feed db
  // req.body holds the posted values ...
  const { age, cohort, email, firstname, lastname } = req.body;
  // above : destructuring req.body properties into sperated vars ...
  // now we can use our model to insert a new student !!!
  Student.create({
    // Mongoose.create returns a promise !!!
    age,
    cohort,
    email,
    firstname,
    lastname
  })
    .then(dbRes => {
      console.log("create user ok", dbRes);
      // if insertion succeeds, we end up in the "then" block
      res.redirect("/students"); // let's redirect to the students page
    })
    .catch(err => {
      console.log("create user not ok", err);
      // else if insertion failed, we end up in the "catch" block
      res.redirect("/students"); // let's redirect to the students page
    });
});


//********************************/
// KICKSTART
//********************************/
app.listen(9999, () => {
  console.log("server is ready to serve content @: http://localhost:9999");
});
