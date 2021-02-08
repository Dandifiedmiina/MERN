var fs = require("fs");

console.log("Program started");

fs.readFile('example.txt', results);
for (var i=0; i<15; i++){
    console.log("Node just keeps on going..");
}

function results(err, data){
    if (err) return console.error(err);
    console.log("results of fileread:");
    console.log(data.toString());
}