let temperatures = [22, 19, 30, 15, 28, 17, 25];

function sort(array) {
    return array.sort((a, b) => b - a);
}

console.log(sort(temperatures));
