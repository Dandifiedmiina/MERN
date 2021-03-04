
var axios = require("axios");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

if (request.url === "/movies") {
// Luodaan AJAX-kysely ja lähetetään pyyntö
const promise = axios
  .get("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
  // Käsitellään vastaus kun se saapuu
  .then((response) => {
    const data = response.data;
    for (var i = 0; i < movies.Search.length; i++) {
      response.write
        (movies.Search[i].Title);
    }

    console.log(data);
  });
    };
// Tulostetaan konsoliin promise-olion tilatietoja AJAX-pyynnön käsittelyn aikana
console.log(promise);
  });
  .listen(PORT);