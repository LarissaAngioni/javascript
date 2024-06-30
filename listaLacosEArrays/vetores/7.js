const leia = require('readline-sync');

let nums = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let procurado, encontrado;

procurado = leia.questionInt("Digite o numero que voce deseja encontrar: ")

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] === procurado){
//         encontrado = i;
//     }
// }

encontrado = nums.indexOf(procurado);

if (encontrado >= 0){
    console.log(`O número ${procurado} está localizado na posição: ${encontrado}`);
} else {
    console.log(`O número ${procurado} não foi encontrado!`);
}
