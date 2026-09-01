
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the distance traveled in kilometres? " , (kilometres) => {

    rl.question("What is the amount of fuel consumed in liters? " , (litres) =>{
        let consommation = (litres / kilometres) * 100;
        consommation = Math.trunc(consommation)
        console.log("Distance : " + kilometres + " km")
        console.log("Carburant : " + litres + " litres")
        console.log("Consummation : " + consommation + " L/100km")
    })
})