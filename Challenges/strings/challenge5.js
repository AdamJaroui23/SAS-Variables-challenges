let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");

function estPalindrome(chaine) {
    let debut = 0;
    let fin = chaine.length - 1;
    while (debut < fin) {
        if (chaine[debut] !== chaine[fin]) {
            return false
        }else {
            return true
        }
        debut++;
        fin--;
    }
}
console.log(estPalindrome(chaine));
