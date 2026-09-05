let prompt = require("prompt-sync")();
function calculerSomme(tab) {
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
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}
console.log(calculerSomme([]))