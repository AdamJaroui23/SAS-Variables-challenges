let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");

function inverserChaine(chaine) {
    let chaineInverse = "";
    
    for (let i = chaine.length - 1; i >= 0; i--) {
        chaineInverse += chaine[i];
    }

    return chaineInverse;
}

console.log(inverserChaine(chaine));
