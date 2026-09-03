let prompt = require("prompt-sync")();
let Montant = +prompt("Donner le montant : ")
let taux = +prompt("Donner le taux : ")

function convertirMontant(Montant , taux , formatter){
    return formatter(Montant * taux)
}

function formatter(convertirMontant) {
    return (convertirMontant);
}
console.log(convertirMontant(Montant, taux, formatter));