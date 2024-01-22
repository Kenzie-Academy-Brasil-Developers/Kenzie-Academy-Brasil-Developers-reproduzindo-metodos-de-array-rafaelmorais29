/*
  -------------------
  Reprodução dos Métodos
  -------------------
*/

function newMap(array, callback) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    const mappedValue = callback(currentValue, index, array);
    result.push(mappedValue);
  }

  return result;
}

function newFilter(array, callback) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];

    if (callback(currentValue, index, array)) {
      result.push(currentValue);
    }
  }

  return result;
}

function newFind(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];

    if (callback(currentValue, index, array)) {
      return currentValue;
    }
  }

  return undefined;
}

function newReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let index = startIndex; index < array.length; index++) {
    const currentValue = array[index];
    accumulator = callback(accumulator, currentValue, index, array);
  }

  return accumulator;
}

export { newMap, newFilter, newFind, newReduce };
