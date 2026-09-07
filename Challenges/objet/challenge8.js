let prompt = require("prompt-sync")();

let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];
function rechercherEtudiant(id) {
    id = +prompt("Donner l'ID d'etudient : ")
    for (let etudiant in students) {
        if (id === students[etudiant].id) {
            return ("Etudiant trouvé !", '\n', students[etudiant]);
        }
    }
    return ("Aucun étudiant trouvé avec cget ID.");
}
console.log(rechercherEtudiant());