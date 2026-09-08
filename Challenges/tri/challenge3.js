let prompt = require("prompt-sync")();
let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];

function index(array) {
    let n = +prompt("Donner le nombre à rechercher son index : ")
    for (let i = 0; i < array.length; i++) {
        if (n === array[i]) {
            return i
        }
    }
    return -1
}
console.log(index(ids))