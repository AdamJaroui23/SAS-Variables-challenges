let prompt = require("prompt-sync")();
let n = +prompt("Donner un nombre : ")

for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) {
        console.log(i)
    };
}