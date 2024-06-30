const leia = require("readline-sync");

let continua = true,
  idade,
  genero,
  stack;
let nBFull = 0,
  back = 0,
  mFront = 0,
  hMobile = 0,
  total = 0,
  totalIdade = 0;

while (continua) {
  console.log("---------Pesquisa Interna---------");

  idade = leia.questionInt("Digite a idade: ");

  console.log("---------Identidade de Gênero---------");
  console.log("1 - Mulher Cis");
  console.log("2 - Homem Cis");
  console.log("3 - Não Binário");
  console.log("4 - Mulher Trans");
  console.log("5 - Homem Trans");
  console.log("6 - Outros");
  genero = leia.questionInt("Digite o codigo do genero: ");

  console.log("---------Qual a Stack?---------");
  console.log("1 - Backend");
  console.log("2 - Frontend");
  console.log("3 - Mobile");
  console.log("4 - FullStack");
  stack = leia.questionInt("Digite o codigo da stack: ");

  if (stack === 1) {
    back++;
  } else if ((genero == 1 || genero == 4) && stack == 2) {
    mFront++;
  } else if ((genero == 2 || genero == 5) && stack == 3 && idade > 40) {
    hMobile++;
  } else if (genero == 3 && idade < 30 && stack == 4) {
    nBFull++;
  }
  total++;
  totalIdade += idade;

  console.log(
    "--Deseja continuar a leitura dos dados de um novo colaborador? (Y)SIM (N)NÃO"
  );
  continua = leia.keyInYNStrict(" ");
}

console.log(`Total de pessoas desenvolvedoras Backend: ${back}`);
console.log(
  `Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mFront}`
);
console.log(
  `Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${hMobile}`
);
console.log(
  `Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${nBFull}`
);
console.log(`O número total de pessoas que responderam à pesquisa: ${total}`);
console.log(
  `A média de idade das pessoas que responderam à pesquisa: ${(
    totalIdade / total
  ).toFixed(2)}`
);
