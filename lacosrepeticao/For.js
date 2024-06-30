const leia = require('readline-sync');

let num, num2, contador;

num = leia.questionFloat("Tabuada do numero: ");

for(contador = 1; contador <= 10; contador++){
    
    console.log(`${num} X ${contador} = ${num * contador}`);
}
