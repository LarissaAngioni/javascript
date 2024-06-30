const leia = require("readline-sync");

let num1, num2;

num1 = leia.questionInt("Digite o primeiro numero: ");
num2 = leia.questionInt("Digite o segundo numero: ");

if (num1 >= num2) {
  while (num1 >= num2) {
    console.log(
      "Intervalo inválido! O segundo número deve ser maior que o primeiro"
    );
    num1 = leia.questionInt("Digite o primeiro numero: ");
    num2 = leia.questionInt("Digite o segundo numero: ");
  }
}

for (num1; num1 <= num2; num1++) {
  if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log(`${num1} é multiplo de 3 e 5`);
  }
}
