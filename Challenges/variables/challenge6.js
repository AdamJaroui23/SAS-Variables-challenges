const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let totalScore;

rl.question('What is the score of the first part? ', (firstPartScore) => {
    rl.question('What is the score of the second part? ', (secondPartScore) => {
        rl.question('What is the score of the third part? ', (thirdPartScore) => {
            rl.question('What is the score of the fourth part? ', (fourthPartScore) => {
                totalScore = firstPartScore + secondPartScore + thirdPartScore + fourthPartScore;
                Moyenne = totalScore/4
                console.log("Partie 1 : " + firstPartScore)
                console.log("Partie 2 : " + secondPartScore)
                console.log("Parie 3 : " + thirdPartScore)
                console.log("Partie 4 : " + fourthPartScore)
                console.log("Score total : " + totalScore)
                console.log("Moyenne : " + Moyenne)
            })
        })
    })
})