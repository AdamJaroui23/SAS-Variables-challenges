let prompt = require("prompt-sync")();
let Montant = prompt("Donner la montant du commande ")
Montant = parseInt(Montant)
console.log("Montant de la commande :" + Montant)
if (Montant >= 500) {
    console.log("Livraison : Gratuite")
    console.log("Total à payer : " + Montant)
} else {
    console.log("Livraison : 40 DH");
    Montant = Montant + 40
    console.log("Total à payer : " + Montant + "DH");
}