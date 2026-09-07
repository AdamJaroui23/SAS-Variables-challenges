let prompt = require("prompt-sync")();

let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
function affSolde(balance) {
    return account.balance;
}
function deposer(argent) {
    argent = +prompt("Donner l'argent à déposer : ")
    if (argent <= 0) {
        return "Interdit de utiliser un montant négatife";
    } else {
        return account.balance += argent;
    }
}
function retirer(argent) {
    argent = +prompt("Donner l'argent à retirer : ")
    if (argent > account.balance) {
        return "Le solde est insuffisant";
    } else {
        return account.balance -= argent
    }
}
function siSuffisant(prix) {
    prix = +prompt("Donner le prix du produit à acheter : ")
    if (prix < account.balance) {
        return "Le solde est suffisant"
    } else {
        return "Le solde n'est pas suffisant";
    }
}
function affInfo(info) {
    for (let info in account){
        console.log(account[info]);
    }
}

console.log(affSolde(account.balance));
console.log(deposer(account.balance));
console.log(retirer(account.balance));
console.log(siSuffisant(account.balance));
affInfo(account.balance);