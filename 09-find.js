// CONCEPT: .find() Devuelve el primer elemento del array que cumpla con la condición dada en la función. Si no encuentra, devuelve undefined.
// Sintaxis: array.find(callback(element[, index[, array]])[, thisArg])
// NOTE: Devuelve solo el primer elemento que cumple la condición (no un array). Se detiene en cuanto lo encuentra, sin recorrer el resto.
// A diferencia de otros métodos de array, sí visita índices vacíos en arrays dispersos (sparse arrays) — los trata como undefined en lugar de omitirlos.


// 1. Uso básico
const numbers = [1, 2, 3, 4];
const found = numbers.find(n => n > 2);
console.log(found);
// Output: 3

// 2. Uso de 'index': Encontrar a la primera persona en la fila que no tenga el ticket correcto
const assignedTickets = [1, 2, 3, 99, 5];
const firstRuleBreaker = assignedTickets.find((ticket, index) => {
  // Las personas deberían tener un ticket que coincida con su posición + 1
  const expectedTicket = index + 1;
  return ticket !== expectedTicket;
});
console.log(firstRuleBreaker);
// Output: 99 (Nos devuelve el elemento problemático, no su posición)

// 3. Uso de 'array': Encontrar el primer día donde la temperatura bajó respecto al día anterior
const dailyTemperatures = [22, 24, 25, 21, 26];
const firstTemperatureDrop = dailyTemperatures.find((temp, index, array) => {
  // Ignoramos el primer día porque no hay registro previo
  if (index === 0) return false;
  const previousTemp = array[index - 1];
  return temp < previousTemp;
});
console.log(firstTemperatureDrop);
// Output: 21 (Nos devuelve la temperatura de la primera caída)

// 4. Uso de 'thisArg': Encontrar el primer producto que exceda el presupuesto configurado
const budgetConfig = {
  maxLimit: 150
};
const productPrices = [45, 120, 199, 85, 300];
// Usamos una función tradicional para enlazar 'this' a budgetConfig
const expensiveProduct = productPrices.find(function(price) {
  return price > this.maxLimit;
}, budgetConfig);
console.log(expensiveProduct);
// Output: 199 (El primer producto que superó los 150)
