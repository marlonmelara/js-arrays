// 1.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); //Output: [2, 4, 6, 8]

// 2. Uso de 'index': Creando una lista numerada
const users = ['Alice', 'Bob', 'Charlie'];
const userRankings = users.map((user, index) => {
return `${index + 1}. ${user}`;
});
console.log(userRankings);
// Output: ["1. Alice", "2. Bob", "3. Charlie"]

// 3. Uso de 'array': Calculando el porcentaje de cada nota basado en el total de evaluaciones
const scores = [10, 20, 30];
const scoreReports = scores.map((score, index, array) => {
  const isLastElement = index === array.length - 1;
  const status = isLastElement ? 'Final' : 'Partial';
return `Score: ${score} (${status})`; });
console.log(scoreReports);
// Output: ["Score: 10 (Partial)", "Score: 20 (Partial)", "Score: 30 (Final)"]

// 4. Uso de 'thisArg': Inyectando un contexto externo
const taxConfig = {
  multiplier: 1.15
};
const productPrices = [100, 200, 300];

// Usamos una función tradicional para que 'this' apunte a 'taxConfig'
const pricesWithTax = productPrices.map(function(price) {
  // 'this' ahora hace referencia al objeto taxConfig gracias al segundo parámetro
  return price * this.multiplier;
}, taxConfig);

console.log(pricesWithTax);
// Output: [115, 230, 345]
