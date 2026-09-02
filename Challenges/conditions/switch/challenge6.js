let prompt = require("prompt-sync")();
console.log("1 → Afficher le profil \ 2 → Afficher les paramètres \ 3 → Afficher les notifications \ 4 → Se déconnecter")
let choix = +prompt("Entrez votre choix : ")
switch (choix) {
    case 1:
        console.log("Affichage de profile ...")
        break;
    
    case 2:
        console.log("Affichage des paramètres ...")
        break;

    case 3:
        console.log("Affichage des notifications ...");
        break;

    case 4:
        console.log("Déconnexion ...")
        break;

    default:
        console.log("Choix invalide")
        break;
}