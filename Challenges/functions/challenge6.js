let prompt = require("prompt-sync")();

function verifierMotDePasse(motDePasse) {
  return motDePasse.length >= 8 && motDePasse.includes('@');
}

let motDePasse = prompt("Entrez votre mot de passe : ");
console.log(verifierMotDePasse(motDePasse));