let prompt = require("prompt-sync")();
let n = +prompt("Donner le nombre des participants : ");
for (let i = 1; i < n+1; i++) {
    console.log("Participant " + i);
}