/*
  -------------------
  Dados e Callbacks
  -------------------
*/

export const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const arrString = [
  "batata",
  "pão",
  "coxinha",
  "churros",
  "carro",
  "tetris",
  "pessoa",
];
export const arrProd = [
  {
    nome: "prod a",
    categoria: "x",
    preço: 2,
  },
  {
    nome: "prod b",
    categoria: "y",
    preço: 2,
  },
  {
    nome: "prod c",
    categoria: "z",
    preço: 2,
  },
  {
    nome: "prod d",
    categoria: "x",
    preço: 2,
  },
];

export const mapCallback1 = (number) => {
  return number * 2;
};

export const mapCallback2 = (string) => {
  return string + " legal!";
};

export const filterCallback1 = (object) => {
  if (object.categoria === "x") {
    return true;
  } else {
    return false;
  }
};

export const filterCallback2 = (string) => {
  if (string.includes("o")) {
    return true;
  } else {
    return false;
  }
};

export const findCallback1 = (string) => {
  if (string.includes("s")) {
    return true;
  } else {
    return false;
  }
};

export const findCallback2 = (object) => {
  if (object.nome === "prod c") {
    return true;
  } else {
    return false;
  }
};

export const reduceCallback1 = (numberA, numberB) => {
  return numberA + numberB;
};

export const reduceCallback2 = (numberA, numberB) => {
  return numberA * numberB;
};
