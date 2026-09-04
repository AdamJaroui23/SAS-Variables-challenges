let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");
let debut = +prompt("Donner l'indice de debut : ");
let fin = +prompt("Donner l'indice de fin : ");

function extraireChaine(chaine, debut, fin) {
    let resultat = "";
    while (debut < fin) {
        resultat = resultat + chaine[debut];
        debut++;
    }
    return resultat;
}

console.log(extraireChaine(chaine, debut, fin));