const leia = require("readline-sync");

let num,
  positivos = 0;

do {
  num = leia.questionInt("Digite um numero: ");

  if (num > 0) {
    positivos += num;
  }
} while (num != 0);

console.log(`A soma dos números positivos é: ${positivos}`);
