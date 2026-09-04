let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");
let fois = prompt("Donner le nombre de fois : ");

function repeterChaine(chaine , fois){
    let str = chaine;
    for (let i = 1; i < fois; i++) {
        str = chaine + str
    }
    return str
}
console.log(repeterChaine(chaine , fois))