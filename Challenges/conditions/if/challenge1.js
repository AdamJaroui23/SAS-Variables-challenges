let prompt = require("prompt-sync")();
let age = prompt("Please enter your age: ");
if (age >= 18) {
    console.log("Accès autorisé");
}
else
    console.log("Accès refusé")
