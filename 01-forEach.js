// .forEach
// Sintaxis: arr.forEach(callback(currentValue[, index[, array]])[, thisArg])
// Descripción: Ejecuta una función proporcionada una vez por cada elemento del array.  Siempre retorna undefined, por lo que no permite encadenar (chaining).
// Notas: No se debe usar forEach si se quiere crear un nuevo array; para eso es mejor map.
// Es genérico: puede usarse con objetos array-like, no solo con instancias de Array. El thisArg no aplica si el callback es una arrow function (usa el this léxico).


// 1.
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
// Output: apple banana cherry

// 2. Uso de 'index'
const tasks = ['Learn variables', 'Master loops', 'Understand DOM'];

tasks.forEach((task, index) => {
  // El índice comienza en 0, sumamos 1 para una lectura humana natural
  console.log(`Step ${index + 1}: ${task}`);
});
// Output:
// Step 1: Learn variables
// Step 2: Master loops
// Step 3: Understand DOM

// 2. Uso de 'array'
const dailyTemperatures = [22, 25, 21, 23];

dailyTemperatures.forEach((temp, index, array) => {
  // Ignoramos el primer día porque no hay un día anterior para comparar
  if (index > 0) {
    const previousTemp = array[index - 1];
    const difference = temp - previousTemp;
    const trend = difference > 0 ? 'warmer' : 'cooler';

    console.log(`Day ${index + 1} is ${Math.abs(difference)} degrees ${trend} than yesterday.`);
  }
});
// Output:
// Day 2 is 3 degrees warmer than yesterday.
// Day 3 is 4 degrees cooler than yesterday.
// Day 4 is 2 degrees warmer than yesterday.


// 3. Uso de 'thisArg'
const analyticsConfig = {
  appName: 'VanillaApp',
  eventCount: 0
};

const userActions = ['click', 'scroll', 'submit'];

// Es OBLIGATORIO usar 'function' tradicional para que 'this' apunte a analyticsConfig
userActions.forEach(function(action) {
  this.eventCount++;
  console.log(`[${this.appName}] Action tracked: ${action} | Total: ${this.eventCount}`);
}, analyticsConfig); // Pasamos el objeto como segundo parámetro de forEach

// Output:
// [VanillaApp] Action tracked: click | Total: 1
// [VanillaApp] Action tracked: scroll | Total: 2
// [VanillaApp] Action tracked: submit | Total: 3
