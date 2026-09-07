let prompt = require("prompt-sync")();
let firstName = prompt("Donner votre prénom : ")
let lastName = prompt("Donner votre nom : ")
let age = prompt("Donner votre age : ")
let city = prompt("Donner votre ville : ")
let school = prompt("Donner votre école : ")

let student = {firstName : firstName,
    lastName : lastName,
    age : age,
    city : city,
    school : school
}
console.log("Prénom : " + student.firstName);
console.log("Nom : " + student.lastName);
console.log("Age : " + student.age);
console.log("Ville : " + student.city);
console.log(student.firstName + student.lastName + " a " + student.age + " ans et habite à " + student.city);