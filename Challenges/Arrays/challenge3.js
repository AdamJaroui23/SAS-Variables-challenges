let prompt = require("prompt-sync")();

function trouverMax(tab) {
    let index = 0;
    while (true){
        let item = prompt("Enter a number to add to the array (or type 'stop' to finish): ");
        if (item === null || item === "" || item.toLowerCase() === "stop"){
            break;
        } else {
            tab[index] = +item;
            index++
        }
    }
    let max = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i]
        }
    }
    return max;
}
console.log(trouverMax([]));
