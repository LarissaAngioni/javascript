const leia = require('readline-sync');

let matrizInteiros = Array(3);

for (let linha = 0; linha < matrizInteiros.length; linha++){
    matrizInteiros[linha] = Array(3);
}

for (let linha = 0; linha < matrizInteiros.length; linha++) {
    for (let coluna = 0; coluna < matrizInteiros[linha].length; coluna++){
        matrizInteiros[linha][coluna] = leia.questionInt("Digite um numero: ");
    }
}

console.table(matrizInteiros)
