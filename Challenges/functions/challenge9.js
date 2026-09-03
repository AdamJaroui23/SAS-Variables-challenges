function creerCompteur(valeurInitiale = 0) {
    return function() {
        valeurInitiale += 1;
        return valeurInitiale;
    };
}

const MonCompteur = creerCompteur(2);

console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());