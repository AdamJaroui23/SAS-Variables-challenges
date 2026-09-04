let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");

function compterVoyelles(chaine) {
    let compteur = 0;
    
    for (let i = 0; i < chaine.length; i++) {
        let lettre = chaine[i];
        
        if (lettre === 'a' || lettre === 'e' || lettre === 'i' || 
            lettre === 'o' || lettre === 'u' || lettre === 'y') {
            compteur++;
        }
    }
    
    return compteur;
}

console.log(compterVoyelles(chaine));
