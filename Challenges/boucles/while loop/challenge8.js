let prompt = require("prompt-sync")();
let missions = +prompt("Donner le nombre des missions : ");
let points = 0;
console.log("Nombre de missions : " + missions);

while (points < missions * 100) {
    points += 100
    console.log("Mission n° " + missions + " → Score : " + points);
}