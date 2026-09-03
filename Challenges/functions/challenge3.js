let prompt = require("prompt-sync")();

function genererEmail(prenom , nom) {
    let email = prenom.toLowerCase() + "." + nom.toLowerCase() + "@entreprise.com"
    return email
}

let prenom = prompt("Entrez votre prénom : ");
let nom = prompt("Entrez votre nom : ");
console.log(genererEmail(prenom, nom));
