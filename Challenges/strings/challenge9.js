let prompt = require("prompt-sync")();
let chaine = prompt("Donner une chaine de caracteres : ");

function nettoyerEspaces(chaine) {
	let resultat = "";
	let i = 0;
	let dernierEspaceAjoute = false;
	
	while (i < chaine.length && chaine[i] === " ") {
		i++;
	}
	
	while (i < chaine.length) {
		if (chaine[i] === " ") {
			if (!dernierEspaceAjoute) {
				resultat = resultat + " ";
				dernierEspaceAjoute = true;
			}
		} else {
			resultat = resultat + chaine[i];
			dernierEspaceAjoute = false;
		}
		i++;
	}
	
	if (resultat.length > 0 && resultat[resultat.length - 1] === " ") {
		let temp = "";
		let j = 0;
		while (j < resultat.length - 1) {
			temp = temp + resultat[j];
			j++;
		}
		resultat = temp;
	}
	
	return resultat;
}

console.log(nettoyerEspaces(chaine));