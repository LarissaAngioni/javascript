const leia = require("readline-sync");

let nome, faixaEtaria;
var valor = 0;

nome = leia.question("Digite seu nome: ");

console.log("Faixas Etárias: ");
console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");
faixaEtaria = leia.questionInt("Digite sua faixa etaria: ");

switch (faixaEtaria) {
  case 1:
    valor = 100.0;
    break;

  case 2:
    valor = 200.0;
    break;

  case 3:
    valor = 300.0;
    break;

  case 4:
    valor = 500.0;
    break;

  case 5:
    valor = 600.0;
    break;

  case 6:
    valor = 1000.0;
    break;

  default:
    console.log("Digite uma opção válida!");
    break;
}

const msg = `O seu plano vai custar R$${valor}`;

console.log(msg);
