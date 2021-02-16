var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/") {
      response.write("<h1>Nothing to see here</h1>");
    } else if (request.url === "/frontpage") {
      response.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync("./frontpage.html");
      response.write(html);
    } else if (request.url === "/json") {
            // Valitaan Content-type tarjoiltavan sisällön suhteen
            response.writeHead(200, { "Content-Type": "text/json" });
            
            // Luetaan JSON muotoinen tiedosto ja lähetetään se selaimelle
            var json = require('./data.json');      

            for (i=0; i<6; i++) {
                console.log(json[i].name);
                console.log(json[i].age);
                console.log(json[i].address);
                console.log(json[i].company);
            }
    }

    response.end("<h1>End world</h1>");
  })
  .listen(3000);
