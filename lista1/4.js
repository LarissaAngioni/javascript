const leia = require('readline-sync');

let num1 = leia.questionFloat("Digite um numero: ", {limitMessage: 'Digite um numero float'});
let num2 = leia.questionFloat("Digite um numero: ", {limitMessage: 'Digite um numero float'});
let num3 = leia.questionFloat("Digite um numero: ", {limitMessage: 'Digite um numero float'});
let num4 = leia.questionFloat("Digite um numero: ", {limitMessage: 'Digite um numero float'});

let resultado = (num1 * num2) - (num3 * num4);

console.log(`A diferença do produto entre n1 e n2 pelo produto entre n3 e o n4 é ${resultado.toFixed(1)}`);
