let students = [
    {
        id: 1,
        name: "Ali",
        age: 21,
        city: "Youssoufia",
        note: 15
    },
    {
        id: 2,
        name: "Sara",
        age: 22,
        city: "Marrakech",
        note: 17
    },
    {
        id: 3,
        name: "Omar",
        age: 20,
        city: "Safi",
        note: 8
    },
    {
        id: 4,
        name: "Imane",
        age: 23,
        city: "Youssoufia",
        note: 12
    },
    {
        id: 5,
        name: "Yassine",
        age: 19,
        city: "Safi",
        note: 9
    }
];

let prompt = require("prompt-sync")();

function afficherEtudiant(student) {
    console.log(`${student.id}. ${student.name} - ${student.age} ans - ${student.city} - note : ${student.note}`);
}

function afficherEtudiants(studentsToDisplay) {
    if (studentsToDisplay.length === 0) {
        console.log("Aucun étudiant trouvé.");
        return;
    }

    for (let i = 0; i < studentsToDisplay.length; i++) {
        afficherEtudiant(studentsToDisplay[i]);
    }
}

function rechercherEtudiant(id) {
    return students.find(function(student) {
        return student.id === id;
    });
}

function rechercherParVille(city) {
    return students.filter(function(student) {
        return student.city.toLowerCase() === city.toLowerCase();
    });
}

function etudiantsAdmis() {
    return students.filter(function(student) {
        return student.note >= 10;
    });
}

function etudiantsNonAdmis() {
    return students.filter(function(student) {
        return student.note < 10;
    });
}

function meilleurEtudiant() {
    return students.reduce(function(bestStudent, student) {
        return student.note > bestStudent.note ? student : bestStudent;
    });
}

function calculerMoyenne() {
    let total = students.reduce(function(sum, student) {
        return sum + student.note;
    }, 0);

    return total / students.length;
}

function afficherMenu() {
    console.log("\n=============================");
    console.log("     STUDENT MANAGER");
    console.log("=============================");
    console.log("1. Afficher tous les étudiants");
    console.log("2. Rechercher un étudiant");
    console.log("3. Rechercher par ville");
    console.log("4. Afficher les étudiants admis");
    console.log("5. Afficher les étudiants non admis");
    console.log("6. Afficher le meilleur étudiant");
    console.log("7. Afficher la moyenne de la classe");
    console.log("8. Quitter");
}

let choice;

do {
    afficherMenu();
    choice = +(prompt("\nVotre choix : "));

    switch (choice) {
        case 1:
            afficherEtudiants(students);
            break;
        case 2: {
            let id = Number(prompt("Id de l'étudiant : "));
            let student = rechercherEtudiant(id);
            if (student) {
                afficherEtudiant(student);
            } else {
                console.log("Aucun étudiant trouvé.");
            }
            break;
        }
        case 3: {
            let city = prompt("Ville : ");
            afficherEtudiants(rechercherParVille(city));
            break;
        }
        case 4:
            afficherEtudiants(etudiantsAdmis());
            break;
        case 5:
            afficherEtudiants(etudiantsNonAdmis());
            break;
        case 6:
            afficherEtudiant(meilleurEtudiant());
            break;
        case 7:
            let moyenne = calculerMoyenne();
            console.log("Moyenne de la classe : " + moyenne);
            break;
        case 8:
            console.log("Au revoir.");
            break;
        default:
            console.log("Choix invalide.");
    }
} while (choice !== 8);