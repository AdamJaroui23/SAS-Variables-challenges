let prompt = require("prompt-sync")();
let ageHumain = prompt("Please enter the number of years in humain time");
function calculerAgeChien(ageHumain) {
    let AgeChien = 7 * ageHumain
    return (AgeChien)
}

console.log(calculerAgeChien(ageHumain));