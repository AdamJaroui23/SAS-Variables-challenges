function creerCompteur(valeurInitiale = 0) {
    return function() {
        valeurInitiale += 1;
        return valeurInitiale;
    };
}

let MonCompteur = creerCompteur(2);

for (let i = 0; i < 10; i++) {
    console.log(MonCompteur());
}