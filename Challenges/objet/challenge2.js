let prompt = require("prompt-sync")();

let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
};
console.log(user.username);
console.log(user.age);
user.age = prompt("Donner le nouveau age : ")
user.city = prompt("Donner la nouvelle ville : ")
user.status = prompt("Donner la nouvelle status : ")
user.email = prompt("Donner votre email : ")
for(let info in user){
    console.log(user[info]);
}


