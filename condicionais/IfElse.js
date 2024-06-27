const leia = require("readline-sync");
let nome, idade;
var valor = 0;

nome = leia.question("Digite seu nome: ");
idade = leia.questionInt("Digite sua idade: ");

if (idade >= 0 && idade <= 10) {
  valor = 100.0;
} else if (idade <= 29) {
  valor = 200.0;
} else if (idade <= 45) {
  valor = 300.0;
} else if (idade <= 59) {
  valor = 500.0;
} else if (idade <= 65) {
  valor = 600.0;
} else {
  valor = 1000.0;
}

const msg = `O seu plano vai custar R$${valor}`;

console.log(msg);
