const leia = require("readline-sync");

console.log("--------------Lanchonete--------------");
console.log("\n1  -  Cachorro Quente - R$10,00");
console.log("\n2  -  X-Salada - R$15,00");
console.log("\n3  -  X-Bacon - R$18,00");
console.log("\n4  -  Bauru - R$12,00");
console.log("\n5  -  Refrigerante - R$8,00");
console.log("\n6  -  Suco de laranja - R$13,00");

let opcao = leia.questionInt("Digite o numero do produto desejado: ");
let quantidade = leia.questionInt(
  "Digite a quantidade de produtos desejados: "
);
let preco, nome;

switch (opcao) {
  case 1:
    preco = 10;
    nome = "Cachorro quente";
    break;

  case 2:
    preco = 15;
    nome = "X-Salada";
    break;

  case 3:
    preco = 18;
    nome = "X-Bacon";
    break;

  case 4:
    preco = 12;
    nome = "Bauru";
    break;

  case 5:
    preco = 8;
    nome = "Refrigerante";
    break;

  case 6:
    preco = 13;
    nome = "Suco de laranja";
    break;

  default:
    console.log("Digite uma opção válida!");
    break;
}

console.log(
  `Produto: ${nome}\nValor total: R$${(preco * quantidade).toFixed(2)}`
);
