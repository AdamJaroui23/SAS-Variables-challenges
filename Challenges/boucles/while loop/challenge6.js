let prompt = require("prompt-sync")();
let n = prompt("Donner un nombre : ");

while (n !== -1) {
    console.log(n);
    n -= 1
}