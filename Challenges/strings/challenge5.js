function estPalindrome(chaine) {
    let debut = 0;
    let fin = chaine.length - 1;
    while (debut < fin) {
        if (chaine[debut] !== chaine[fin]) {
            return false
        }else {
            return true
        }
        debut++;
        fin--;
    }
}
console.log(estPalindrome("kayak"));
console.log(estPalindrome("radar"));
console.log(estPalindrome("among"));
