// Tuodaan filesystem-moduuli ohjelmaan
var fs = require("fs");

var data1 = fs.readFileSync("example.txt", results);
var data2 = fs.readFileSync("example2.txt", results);



// Kirjoitetaan data-muuttuja tiedostoon
fs.writeFileSync("uusiFile.txt", data1);

// Lisätään tiedoston perään tekstiä
fs.appendFileSync("uusiFile.txt", data2);

fs.readFile("uusiFile.txt", results);


function results(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
  }