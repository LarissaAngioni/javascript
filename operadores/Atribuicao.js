const leia = require('readline-sync');

let idade, altura;

idade = leia.questionInt("Digite sua idade: ");

altura = leia.questionFloat("Digite sua altura: ", {limitMessage: "Digite um numero float"});

console.log(`A sua idade é: ${idade}`);
console.log(`A sua altura é: ${altura}`);

