let prompt = require("prompt-sync")();
let n = prompt("Donner un nombre : ")

for (let i = 1; i < 11; i++) {
    let r = n * i
    console.log(n + " x " + i + " = " + r);
}