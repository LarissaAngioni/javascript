const leia = require("readline-sync");

console.log("-----------Banco-----------");
console.log("\n1  -  Saldo");
console.log("\n2  -  Saque");
console.log("\n3  -  Depósito");

let opcao = leia.questionInt("Digite o codigo da operacao desejada: "),
  operacao,
  saldo = 1000,
  valor;

switch (opcao) {
  case 1:
    operacao = "Saldo";
    console.log(`Operação - ${operacao}\nSaldo: R$${saldo.toFixed(2)}`);
    break;

  case 2:
    operacao = "Saque";
    valor = leia.questionFloat(`Digite o valor do ${operacao}: R$`);
    console.log(`\nOperação - ${operacao}`);
    if (valor > saldo) {
      console.log("Saldo insuficiente!");
    } else {
      saldo -= valor;
      console.log(`\nNovo Saldo: R$${saldo.toFixed(2)}`);
    }
    break;

  case 3:
    operacao = "Deposito";
    valor = leia.questionFloat(`Digite o valor do ${operacao}: R$`);
    saldo += valor;
    console.log(`\nOperação - ${operacao}\nNovo Saldo: R$${saldo.toFixed(2)}`);
    break;
  default:
    console.log("Operação inválida!");
    break;
}
