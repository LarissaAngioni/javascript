const leia = require('readline-sync');

// let vetorStrings = [
//   "Boxer",
//   "Pastor Alemão",
//   "Pinscher",
//   "Husky Siberiano",
//   "Corgi",
// ];

let numeros = new Array(5)

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = leia.questionInt("Digite um numero: ");

}

// for (let i = 0; i < vetorStrings.length; i++) {
//     console.log(`Posição [${i}] = ${vetorStrings[i]}`);
// }

function compareAsc(a, b) {
    return a - b;
}

console.table(numeros.sort(compareAsc));
console.table(numeros.sort(compareAsc).reverse());
// console.table(vetorStrings.sort());
