const leia = require("readline-sync");

let nota1, nota2, media;

nota1 = leia.questionFloat("Digie a primeira nota: ");
nota2 = leia.questionFloat("Digie a segunda nota: ");

media = (nota1 + nota2) / 2;

console.log((media >= 6) ? "Aprovado!" : "Reprovado!");