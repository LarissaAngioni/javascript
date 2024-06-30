const leia = require("readline-sync");

let idade = 0,
  menor = 0,
  maior = 0;

while (idade >= 0) {
  idade = leia.questionInt("Digite uma idade: ");
  if (idade < 21 && idade > 0) {
    menor++;
  } else if (idade > 50) {
    maior++;
  }
}

console.log(
  `Total de pessoas menores de 21 anos: ${menor}\nTotal de pessoas maiores que 50 anos: ${maior}`
);
