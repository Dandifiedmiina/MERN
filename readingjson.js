var http = require("http");
var fs = require("fs");

// Luetaan JSON tiedosto sisään muuttujaan käyttäen require-komentoa
var json = require("./data.json");

// Tulostetaan koko muuttujan sisältö
console.log(json);

// Esitellään uusi JS-olio
var newitem = {
    name: "John Doe",
    age: "52",
    company: "Laurea",
    address: "Ratatie 22"
  };
  // Lisätään olio taulukon loppuun push()-funktiolla
  json.push(newitem);

var data = JSON.stringify(json, "", 1); // Parametreilla "" ja 1 saadaan kaunis tulostus

  // Kirjoitetaan lopuksi tiedosto levylle JSON-muodossa, eli sellaisenaan
  fs.writeFileSync("./data.json", data);