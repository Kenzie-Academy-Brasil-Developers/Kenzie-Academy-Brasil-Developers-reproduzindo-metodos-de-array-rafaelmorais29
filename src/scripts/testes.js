/*
  -------------------
  Testes das funções
  -------------------
*/

import {
  arrNumbers,
  arrProd,
  arrString,
  filterCallback1,
  filterCallback2,
  findCallback1,
  findCallback2,
  mapCallback1,
  mapCallback2,
  reduceCallback1,
  reduceCallback2,
} from "./callbacks.js";

console.log("----------newMap----------");

console.log("Deve retornar [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]");
console.log(newMap(arrNumbers, mapCallback1));

console.log(
  "Deve retornar ['batata legal!', 'pão legal!', 'coxinha legal!', 'churros legal!', 'carro legal!', 'tetris legal!', 'pessoa legal!']"
);
console.log(newMap(arrString, mapCallback2));

console.log("----------newFilter----------");

console.log(
  "Deve retornar [{nome: 'prod a', categoria: 'x', preço: 2}, {nome: 'prod d', categoria: 'x', preço: 2}]"
);
console.log(newFilter(arrProd, filterCallback1));

console.log("Deve retornar ['pão', 'coxinha', 'churros', 'carro', 'pessoa']");
console.log(newFilter(arrString, filterCallback2));

console.log("----------newFind----------");

console.log("Deve retornar churros");
console.log(newFind(arrString, findCallback1));

console.log("Deve retornar {nome: 'prod c', categoria: 'z', preço: 2}");
console.log(newFind(arrProd, findCallback2));

console.log("----------newReduce----------");

console.log("Deve retornar 60");
console.log(newReduce(arrNumbers, reduceCallback1, 5));

console.log("Deve retornar 3628800");
console.log(newReduce(arrNumbers, reduceCallback2));
