let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");
let ancien = prompt("Donner un lettre pour le changer : ");
let nouveau = prompt("Donner un lettre de changement : ");

function remplacerCaractere(chaine, ancien, nouveau) {
    let i = 0;
    let fin = chaine.length;
    let resultat = "";
    while (i < fin) {
        if (chaine[i] !== ancien) {
            resultat = resultat + chaine[i];
        } else {
            resultat = resultat + nouveau;
        }
        i++;
    }
    return resultat;
}
console.log(remplacerCaractere(chaine , ancien , nouveau));