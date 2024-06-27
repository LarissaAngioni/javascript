const leia = require('readline-sync');

let salario = leia.questionFloat("Digite o salario: R$", {limitMessage: 'Digite um numero float'});
let abono = leia.questionFloat("Digite o abono: R$", {limitMessage: 'Digite um numero float'});

let novoSalario = salario + abono;

console.log(`Salário atualizado: R$${novoSalario.toFixed(2)}`);
