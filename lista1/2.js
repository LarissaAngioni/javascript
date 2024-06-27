const leia = require('readline-sync');

let nota1 = leia.questionFloat("Digite a primeira nota: ", {limitMessage: 'Digite um numero float'});
let nota2 = leia.questionFloat("Digite a segunda nota: ", {limitMessage: 'Digite um numero float'});
let nota3 = leia.questionFloat("Digite a terceira nota: ", {limitMessage: 'Digite um numero float'});
let nota4 = leia.questionFloat("Digite a quarta nota: ", {limitMessage: 'Digite um numero float'});

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média final é ${media.toFixed(1)}`);
