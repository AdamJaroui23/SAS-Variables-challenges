let prompt = require("prompt-sync")();

function ajouterALaFin(tab, element){
    tab[tab.length] = element;
    return tab;
}

let tab = [];
let index = 0;
while (true) {
    let input = prompt("Enter an array number (or type 'stop' to finish): ");
    if (input === null || input === "" || input === "stop") {
        break;
    }

    let number = +input;
    if (!isNaN(number)) {
        tab[index] = number;
        index++;
    }
}

let element = +prompt("Enter a number to add to the end of the array: ");
console.log(ajouterALaFin(tab, element));