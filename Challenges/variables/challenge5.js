const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let catégorie;

rl.question("What is the duration of the film? " , (durée) => {
    if (durée < 60){
        catégorie = "Court métrage"
    }
    else if (durée > 60 && durée < 120){
        catégorie = "Film standard"
    }
    else {
        catégorie ="Film long" 
    }
    console.log("Durée : " + durée + "minutes")
    console.log("Catégorie : " + catégorie)
});