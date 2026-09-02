let prompt = require("prompt-sync")();
let nombre1 = +prompt("Donner le premier nombre : ");
let op = prompt("Donner un opérateur : ");
let nombre2 = +prompt("Donner le deuxième nombre : ");

switch (op) {
    case "+":
        console.log(nombre1 + nombre2);
        break;

    case "-":
        console.log(nombre1 - nombre2);
        break;

    case "*":
        console.log(nombre1 * nombre2);
        break;

    case "/":
        if (nombre2 === 0) {
            console.log("Impossible de diviser sur 0");
        } else {
            console.log(nombre1 / nombre2);
        }
        break;

    default:
        console.log("Opérateur invalide");
        break;
}