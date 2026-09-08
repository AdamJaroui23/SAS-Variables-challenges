let prompt = require("prompt-sync")();
let nombres = [4, 8, 15, 16, 23, 42];
function recherche(array) {
    let n = +prompt("Donner un nombre à rechercher")
    for (let no of array){
        if (n === no){
            return true
        }
    }
    return false
}
console.log(recherche(nombres));
