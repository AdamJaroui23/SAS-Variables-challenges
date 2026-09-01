const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Contrôle continu : " , (noteCC) => {
    rl.question("Note du projet : " , (noteProjet) => {
      rl.question("Exam : " , (noteExamen) => {
        let finalNote = (noteCC * 2 + noteProjet * 3 + noteExamen * 5)/10;
        console.log("Contrôle continu : " + noteCC);
        console.log("Projet : " + noteProjet);
        console.log("Examen : " + noteExamen);
        console.log("Note finale : " + finalNote);
      })
    })
})