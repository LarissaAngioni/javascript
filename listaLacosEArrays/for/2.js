const leia = require("readline-sync");

let num,
  pares = 0,
  impares = 0;

for (let i = 1; i <= 10; i++) {
  console.log(`Digite o ${i}º número:`);
  num = leia.questionInt(" ");
  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(
  `Total de números pares: ${pares}\nTotal de números ímpares: ${impares}`
);
