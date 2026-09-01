let prompt = require("prompt-sync" )();
let V = prompt("What is the voltage?" );
let I = prompt("What is the intensity?" );
let t = prompt("What is the time?" );
let Energie = V * I * t
console.log("Tension : " + V)
console.log("Intensité : " + I)
console.log("temps : " + t)
console.log("Energie : " + Energie + "Wh") 