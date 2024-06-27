const leia = require("readline-sync");

let nome = leia.question("Digite seu nome: ");
console.log("-----------Código do Cargo-----------");
console.log("\n1  -  Gerente");
console.log("\n2  -  Vendedor");
console.log("\n3  -  Supervisor");
console.log("\n4  -  Motorista");
console.log("\n5  -  Estoquista");
console.log("\n6  -  Técnico de TI");
let opcao = leia.questionInt("\nDigite o codigo do cargo: ");
let salario = leia.questionFloat("\nDigite seu salario: R$"),
  reajuste,
  cargo;

switch (opcao) {
  case 1:
    reajuste = salario * 0.1;
    cargo = "Gerente";
    break;

  case 2:
    reajuste = salario * 0.07;
    cargo = "Vendedor";
    break;

  case 3:
    reajuste = salario * 0.09;
    cargo = "Supervisor";
    break;

  case 4:
    reajuste = salario * 0.06;
    cargo = "Motorista";
    break;

  case 5:
    reajuste = salario * 0.05;
    cargo = "Estoquista";
    break;

  case 6:
    reajuste = salario * 0.08;
    cargo = "Técnico de TI";
    break;

  default:
    console.log("Digite uma opção válida!");
    break;
}

console.log(
  `\nNome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$${(
    salario + reajuste
  ).toFixed(2)}`
);
