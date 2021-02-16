var fs = require("fs");

console.log("Program started");

fs.readFileSync("example.txt", results);

fs.readFileSync("example2.txt", results);

function results(err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
}
