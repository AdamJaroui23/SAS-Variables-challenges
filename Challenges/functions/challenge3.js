function genererEmail(prenom , nom) {
    let email = prenom.toLowerCase() + "." + nom.toLowerCase() + "@entreprise.com"
    return email
}
console.log(genererEmail("Adam", "Jaroui"));
