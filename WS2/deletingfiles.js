// Tuodaan filesystem-moduuli ohjelmaan
var fs = require("fs");

var data1 = fs.readFileSync("uusifile.txt", results);


fs.unlinkSync('uusifile.txt');
console.log('successfully deleted uusifile.txt');


function results(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
  }