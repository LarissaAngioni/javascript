const leia = require("readline-sync");

console.log("-----------Calculadora-----------");
let num1 = leia.questionFloat("\nDigite o primeiro numero: ");
let num2 = leia.questionFloat("\nDigite o segundo numero: "),
  calculo,
  operacao;

console.log("\n1  -  Soma");
console.log("\n2  -  Subtração");
console.log("\n3  -  Multiplicação");
console.log("\n4  -  Divisão");

let opcao = leia.questionInt("Digite o codigo de operacao: ");

switch (opcao) {
  case 1:
    calculo = num1 + num2;
    operacao = "+";
    break;

  case 2:
    calculo = num1 - num2;
    operacao = "-";
    break;

  case 3:
    calculo = num1 * num2;
    operacao = "x";
    break;

  case 4:
    calculo = num1 / num2;
    operacao = "/";
    break;
}

let msg = operacao
  ? `${num1} ${operacao} ${num2} = ${calculo.toFixed(1)}`
  : "Operação inválida!";
console.log(msg);
