const leia = require('readline-sync');

let matriz = new Array(10), media = [];

for (let i = 0; i < matriz.length; i++){
    matriz[i] = new Array(4);
}

for (let linha of matriz){
    for (let coluna = 0; coluna < linha.length; coluna++){
        linha[coluna] = leia.questionFloat(`Digite a nota ${coluna+1}: `);
    }
}

let soma = 0, calculoMedia = 0.0;

for (let aluno of matriz){
    for(let nota = 0; nota < aluno.length; nota++){
        soma += aluno[nota];
    }
    calculoMedia = soma / 4.0;
    media.push(calculoMedia.toFixed(1));
    soma = 0;
}

console.table(media);
