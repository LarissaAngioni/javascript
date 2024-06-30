const leia = require('readline-sync');

let nums = new Array(10);
let pares = new Array, iImpares = new Array;
let soma = 0, media;

for (let i = 0; i < 10; i++){
    nums[i] = leia.questionInt("Digite um numero: ");
}

for(let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){
        pares.push(nums[i]);
    }
    if (i % 2 !== 0) {
        iImpares.push(nums[i]);
    }
    soma += nums[i];
}

media = soma / nums.length;

console.log(`Elementos nos índices ímpares: ${iImpares}`);
console.log(`Elementos pares: ${pares}\nSoma: ${soma}\nMédia: ${media.toFixed(2)}`);
