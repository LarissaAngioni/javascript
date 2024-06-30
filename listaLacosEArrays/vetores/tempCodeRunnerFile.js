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
console.log(`Elementos pares: ${pares}\n Soma: ${soma}\n Média: ${media.toFixed(2)}`);