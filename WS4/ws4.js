// Otetaan axios-moduuli käyttöön
var axios = require("axios");
// Luodaan AJAX-kysely ja lähetetään pyyntö
const promise = axios
 .get("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
 // Käsitellään vastaus kun se saapuu
  .then(response => {
    const data = response.data;
    console.log(data);
  });
// Tulostetaan konsoliin promise-olion tilatietoja AJAX-pyynnön käsittelyn aikana  
console.log(promise);

// Tehdään silmukka joka käsittelee tulosjoukkona saadun tauluko
for (var i = 0; i < movies.Search.length; i++) {
        console.log(movies.Search[i].Title);
    }