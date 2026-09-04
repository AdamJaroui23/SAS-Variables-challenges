
let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");
let lettre = prompt("Donner une lettre : ");

function compterLettre(chaine, lettre) {
    let count = 0;

    for (let caractere of chaine) {
        if (caractere === lettre) {
            count++;
        }
    }

    return count;
}

console.log(compterLettre(chaine, lettre));