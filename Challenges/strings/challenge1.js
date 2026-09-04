let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ")

function compterCaracteres(str){
    let count = 0;
    for (let char of str){
        count ++;
    }
    return count
}
console.log(compterCaracteres(chaine))