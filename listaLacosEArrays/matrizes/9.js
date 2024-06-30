const leia = require('readline-sync');

let matriz = new Array(3), diagonal1 = [], diagonal2 = [];
let somaDiagonal1 = 0, somaDiagonal2 = 0;

for (let i = 0; i < matriz.length; i++){
    matriz[i] = new Array(3);
}

for (let linha of matriz){
    for (let coluna = 0; coluna < linha.length; coluna++){
        linha[coluna] = leia.questionInt("Digite um numero: ");
    }
}

diagonal1.push(matriz[0][0]);
diagonal1.push(matriz[1][1]);
diagonal1.push(matriz[2][2]);
diagonal2.push(matriz[0][2]);
diagonal2.push(matriz[1][1]);
diagonal2.push(matriz[2][0]);

diagonal1.map(x => somaDiagonal1 += x);
diagonal2.map(x => somaDiagonal2 += x);

console.log(`Elementos da Diagonal Principal: ${diagonal1}`);
console.log(`Elementos da Diagonal Secundária: ${diagonal2}`);
console.log(`Soma dos Elementos da Diagonal Principal: ${somaDiagonal1}`);
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaDiagonal2}`);
