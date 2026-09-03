let prompt = require("prompt-sync")();

function saluerClient(nom , titre = "Client ") {
    console.log("Bonjour " + titre + nom)
}

let nom = prompt("Entrez votre nom : ");
let titre = prompt("Entrez votre titre (facultatif) : ");
saluerClient(nom, titre + " " || undefined);