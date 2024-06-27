const leia = require("readline-sync");

let nome, idade, primeiraVez;

nome = leia.question("Digite seu nome: ");
idade = leia.questionInt("Digite sua idade: ");
primeiraVez = leia.keyInYNStrict("Primeira doacao de sangue? \n(Y)SIM (N)NAO");

if (idade >= 18 && idade <= 69) {
  if (idade < 60) {
    console.log(`${nome} está apto para doar sangue!`);
  } else if (idade >= 60 && !primeiraVez) {
    console.log(`${nome} está apto para doar sangue!`);
  } else {
    console.log(`${nome} não está apto para doar sangue!`);
  }
} else {
  console.log(`${nome} não está apto para doar sangue!`);
}
