let prompt = require("prompt-sync")();
let fruits = ["pomme", "banane", "cerise", "mangue", "kiwi"];
function fruit(array) {
    let fr = prompt("Donner une fruit à rechercher : ")
    for (let i = 0; i < array.length; i++) {
        if (fr == array[i]){
            return i
        }
    }
    return ("Il n y'a rien " + fr + " dans le tableau")
}
console.log(fruit(fruits));