let prompt = require("prompt-sync")();

let product = {
    name : "",
    price : 0,
    categorie : "",
    quantity : 0,
    available : true
}
product.name = prompt("Donner le nom du produits : ")
product.price = +prompt("Donner le prix du produits : ")
product.categorie = prompt("Donner la categorie du produits : ")
product.quantity = +prompt("Donner la quantité du produits : ")
let S = prompt("Le produit est available? 'Oui' ou 'Non' : ")
if (S == "Oui") {
    product.available = true
} else {
    product.available = false
}
console.log(product.name);
console.log(product.price);
console.log(product.categorie);
if (product.available == true) {
    console.log("Le produit est disponible");
} else {
    console.log("Le produit n'est pas disponible");
}
let Total = 0;
console.log(Total = product.price * product.quantity);
