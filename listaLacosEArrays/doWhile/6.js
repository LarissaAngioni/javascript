const leia = require("readline-sync");

let num,
  soma = 0,
  total = 0;

do {
  num = leia.questionInt("Digite um numero: ");

  if (num % 3 == 0 && num != 0) {
    soma += num;
    total++;
  }
} while (num != 0);

let media = soma / total;

console.log(
  `A média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`
);
