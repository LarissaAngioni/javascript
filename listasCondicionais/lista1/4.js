const leia = require("readline-sync");

let palavra1, palavra2, palavra3;

palavra1 = leia.question("Digite a primeira caracteristica: ");
palavra2 = leia.question("Digite a segunda caracteristica: ");
palavra3 = leia.question("Digite a terceira caracteristica: ");

if (palavra1.toUpperCase() === "VERTEBRADO") {

  if (palavra2.toUpperCase() === "AVE") {
    if (palavra3.toUpperCase() === "CARNIVORO") {
        console.log("Águia");
    } else if (palavra3.toUpperCase() === "ONIVORO") {
        console.log("Pomba");
    }

  } else if (palavra2.toUpperCase() === "MAMIFERO") {
    if (palavra3.toUpperCase() === "HERBIVORO") {
        console.log("Vaca");
    } else if (palavra3.toUpperCase() === "ONIVORO") {
        console.log("Homem");
    }
  }
} else if (palavra1.toLocaleUpperCase() === "INVERTEBRADO") {

  if (palavra2.toUpperCase() === "INSETO") {
    if (palavra3.toUpperCase() === "HEMATOFAGO") {
        console.log("Pulga");
    } else if (palavra3.toUpperCase() === "HERBIVORO") {
        console.log("Lagarta");
    }

  } else if (palavra2.toUpperCase() === "ANELIDEO") {

    if (palavra3.toUpperCase() === "HEMATOFAGO") {
        console.log("Sanguessuga");
    } else if (palavra3.toUpperCase() === "ONIVORO") {
        console.log("Minhoca");
    } 
  }
} else {
    console.log("Característica(s) inválida(s)!");
}
