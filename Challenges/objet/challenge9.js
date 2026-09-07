let prompt = require("prompt-sync")();

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];
function rechercherParId(id) {
    for (let p in products) {
        if (id === products[p].id) {
            return (products[p])
        }
    }
    return ("No product with this id.")
}
function rechercherParNom(name) {
    for (let p in products) {
        if ( name === products[p].name) {
            return (products[p])
        }
    }
    return ("No product with this name.")
}
function rechercherParCategorie(category) {
    let matchingProducts = products.filter(function(product) {
        return category === product.category
    })
    if (matchingProducts.length > 0) {
        return matchingProducts
    }
    return ("No products with this category.")
}
function rechercherParPrix(price) {
    for (let p in products) {
        if ( price <= products[p].price) {
            return (products[p])
        }
    }
    return ("No products bellow this price.")
}

let id = +prompt("Enter the product ID: ");
console.log(rechercherParId(id));

let name = prompt("Enter the product name: ");
console.log(rechercherParNom(name));

let category = prompt("Enter the product category: ");
console.log(rechercherParCategorie(category));

let price = +prompt("Enter the maximum price: ");
console.log(rechercherParPrix(price));