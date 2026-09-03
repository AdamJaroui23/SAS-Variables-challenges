let prompt = require("prompt-sync")();

function additionnerTout(...nums) {
    let sum = 0;
    for (let num of nums) sum += num
    return sum
}

let nombreDeNombres = Number(prompt("Combien de nombres voulez-vous additionner ? "));
let nombres = [];

for (let i = 0; i < nombreDeNombres; i++) {
    nombres.push(Number(prompt(`Entrez le nombre ${i + 1} : `)));
}

console.log(additionnerTout(...nombres));