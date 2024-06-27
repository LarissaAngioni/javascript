const leia = require('readline-sync');

let salarioBruto = leia.questionFloat("Digite o salario bruto: R$", {limitMessage: 'Digite um numero float'});
let adicionalNoturno = leia.questionFloat("Digite o adicional noturno: R$", {limitMessage: 'Digite um numero float'});
let horasExtras = leia.questionFloat("Digite as horas extras: ", {limitMessage: 'Digite um numero float'});
let descontos = leia.questionFloat("Digite os descontos: R$", {limitMessage: 'Digite um numero float'});

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`Salário líquido: R$${salarioLiquido.toFixed(2)}`);
