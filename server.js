var express = require("express");
require("dotenv").config();
const path = require("path");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const viewsDir = path.join(__dirname, "views");
app.use(express.static(viewsDir));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/css")));
app.use(express.static(path.join(__dirname, "./public/js")));
app.use(express.static(path.join(__dirname, "./public/images")));

// app.set("views", "./views");
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log(cv);
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT);

console.log("Server started at http://localhost:" + process.env.PORT);
