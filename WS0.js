var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/helloworld") {
      response.write("<h1>Hello World</h1>");
      response.write(
        "<table border='1'><tr><th>Name</th><th>Address</th></tr><tr><td>Miina Pajunen</td><td>Keltamotie</td></table>"
      );
    } else if (request.url === "/anotherworld") {
      response.write("<h1>Wlcome to another world!</h1>");
    }
    response.end("<h1>End world</h1>");
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");

