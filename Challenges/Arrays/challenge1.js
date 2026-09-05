let prompt = require("prompt-sync")();

function afficherElements(tab) {
    let index = 0;
    while (true) {
        let item = prompt("Enter an item to add to the array (or type 'stop' to finish): ");
        if (item === null || item === "" || item.toLowerCase() === "stop") {
            break;
        } else {
            tab[index] = item;
            index++;
        }
    }
    return tab;
}

console.log(afficherElements([]));