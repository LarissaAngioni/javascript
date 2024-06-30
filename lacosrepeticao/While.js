const leia = require('readline-sync');

let num1, num2, resultado, continua;

console.log("\n+++++++++++++++++++++MENU++++++++++++++++++++");
continua = leia.keyInYNStrict("\nDeseja usar nossa calculadora de soma? ");
console.log("\n++++++++++++++++++++++++++++++++++++");

while(continua){
    num1 = leia.questionInt("Digite o primeiro valor: ");
    num2 = leia.questionInt("Digite o segundo valor: ");

    resultado = num1 + num2;
    console.log(`O resultado da soma é: ${resultado}`);

    continua = leia.keyInYNStrict("\nDeseja usar nossa calculadora de soma de novo? ");
}
