function obtenirHeureActuelle(){
    let time = new Date();
    return time.toTimeString().split(' ')[0];
}
console.log(obtenirHeureActuelle());
