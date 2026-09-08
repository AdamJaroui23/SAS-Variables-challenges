let prompt = require("prompt-sync")();
let notes = [12, 5, 19, 3, 27, 8, 14];
function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let n = 0; n < array.length - 1 - i; n++) {
            if (array[n] > array[n + 1]) {
                let temp = array[n]
                array[n] = array[n + 1]
                array[n + 1] = temp
            }
        }
    }
    return array
}
console.log(sort(notes));
