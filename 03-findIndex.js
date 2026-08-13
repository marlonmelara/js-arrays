// .findIndex()
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])
// Descripción: Devuelve el índice del primer elemento que cumple con la condición. Si no encuentra, devuelve -1.
// Notas: Si necesitas el índice en lugar del valor, usa findIndex. Se detiene en el primer elemento que cumple la condición, aunque haya otros después que también la cumplan.
// Igual que find(), sí visita índices vacíos en arrays dispersos (sparse arrays) — no los omite como forEach, map o filter.


// 1. Uso general
const numbers = [1, 2, 3, 4];
const index = numbers.findIndex(n => n > 2);
console.log(index); //Output: 2

const index2 = numbers.findIndex((n) => {
  return n % 2 === 0;
});
console.log(index2); // Output: 1

// 2. Uso de 'index'
const IDNumbers = [8, 5, 2, 9, 4];
const matchingIndex = IDNumbers.findIndex((id, index) => {
  // Comparamos si el valor del elemento es igual a la posición en la que está
  return id === index;
});
console.log(matchingIndex);
// Output: 2 (porque en el índice 2, el valor también es 2)

// 3. Uso de 'array'
const dailyTemperatures = [22, 24, 25, 21, 26];
const dropIndex = dailyTemperatures.findIndex((temp, index, array) => {
  // Omitimos el primer día porque no tiene un día anterior para comparar
  if (index === 0) return false;
  const previousTemp = array[index - 1];
  // Retorna true si la temperatura actual es menor que la del día de ayer
  return temp < previousTemp;
});

console.log(dropIndex);
// Output: 3 (En el índice 3, la temperatura bajó de 25 a 21)

// 4. Uso de 'thisArg'
const speedLimits = {
  maxAllowed: 120
};
const recordedSpeeds = [95, 110, 135, 105];

// Usamos una función tradicional para que 'this' haga referencia a 'speedLimits'
const violationIndex = recordedSpeeds.findIndex(function(speed) {
  return speed > this.maxAllowed;
}, speedLimits);

console.log(violationIndex);
// Output: 2 (El vehículo a 135 superó el límite establecido en el thisArg)
