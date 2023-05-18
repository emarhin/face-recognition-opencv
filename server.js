var express = require("express");
require("dotenv").config();

var app = express();

// static files
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/images"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("my name is Emmanuel Arhin");
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT);

console.log("Server started at http://localhost:" + process.env.PORT);
