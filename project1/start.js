var express = require("express");
var app = express();

console.log("Program started");

app.get("/", function (req, res) {
  res.send(__dirname + "/public/index.html");
});

app.get("/newmessage", function (req, res) {
  res.sendFile(__dirname + "/public/newmessage.html");
});

// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function (req, res) {
  res.send("Cant find the requested page", 404);
});

// Web-palvelimen luonti Expressin avulla
app.listen(3003, function () {
  console.log("Example app listening on port 3003!");
});

function results(err, data) {
  if (err) return console.error(err);
  console.log("log");
}
