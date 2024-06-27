const leia = require("readline-sync");

let numA, numB, numC, soma;

numA = leia.questionInt("Digite o primeiro numero: ");
numB = leia.questionInt("Digite o segundo numero: ");
numC = leia.questionInt("Digite o terceiro numero: ");

soma = numA + numB;

if (soma > numC) {
  console.log("A Soma de A + B é Maior do que C");
} else if (soma < numC) {
  console.log("A Soma de A + B é Menor do que C");
} else {
  console.log("A Soma de A + B é Igual a C");
}
