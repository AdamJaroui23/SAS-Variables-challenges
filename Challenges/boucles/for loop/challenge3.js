let prompt = require("prompt-sync")();
let N = +prompt("Donner un nombre : ");
let sum = 0;
for (let i = 1; i < N + 1; i++) {
    sum = sum + i;
}
console.log(sum);