let prompt = require("prompt-sync")()
let n = prompt("Entrez un nombre entier: ")
console.log("Nombre : " + n)
if (n < 0){
    console.log("Le nombre est négatif.")
}
else if (n > 0){
    console.log("Le nombre est positif")
}
else {
    console.log("Le nombre est égal à zéro")
}