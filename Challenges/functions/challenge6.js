function verifierMotDePasse(motDePasse) {
  return motDePasse.length >= 8 && motDePasse.includes('@');
}
console.log(verifierMotDePasse("code@1234"));