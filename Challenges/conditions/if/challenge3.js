let prompt = require("prompt-sync")();
let note = Number(prompt("Donnez la note"));
console.log("Note : " + note)
if (note < 0 || note > 20) {
    console.log("Le nombre est invalide");
} else if (note >= 10) {
    console.log("Admis");
} else {
    console.log("Non admis");
}