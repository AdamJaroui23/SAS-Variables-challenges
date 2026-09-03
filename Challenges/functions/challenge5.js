function additionnerTout(...nums) {
    let sum = 0;
    for (let num of nums) sum += num
    return sum
}
console.log(additionnerTout(10 , 20 , 30 , 40))