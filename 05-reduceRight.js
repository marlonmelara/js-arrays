// CONCEPT: .reduceRight() Ejecuta una función reductora sobre los elementos del array de derecha a izquierda, reduciendo a un único valor.
// Sintaxis: array.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// NOTE: Similar a reduce(), pero recorre de derecha a izquierda. Si se omite initialValue, usa el último elemento como acumulador inicial y puede lanzar error si el array está vacío.
// Detalles técnicos: El orden de recorrido es la única diferencia real con reduce() — la lógica del acumulador es idéntica. Poco usado en la práctica; la mayoría de casos donde "importa el orden" se resuelven más claro invirtiendo el array antes de usar reduce().


// 1. Uso general
const arr = [1, 2, 3];
const result = arr.reduceRight((acc, n) => acc + n, '');
console.log(result);
// Output: '321'

// 2. Demostración básica: El orden de iteración altera el resultado
const words = ['JavaScript', ' ', 'Vanilla', ' ', 'es', ' ', 'genial'];

// reduce() lee de izquierda a derecha (0 -> final)
const leftToRight = words.reduce((acc, word) => acc + word, '');
console.log(leftToRight);
// Output: 'JavaScript Vanilla es genial'

// reduceRight() lee de derecha a izquierda (final -> 0)
const rightToLeft = words.reduceRight((acc, word) => acc + word, '');
console.log(rightToLeft);
// Output: 'genial es Vanilla JavaScript'

// 3. Comprobando el descenso del índice
const letters = ['A', 'B', 'C'];

letters.reduceRight((acc, letter, index) => {
  console.log(`Processing letter ${letter} at index ${index}`);
  return acc + letter;
}, '');
// Output:
// Processing letter C at index 2
// Processing letter B at index 1
// Processing letter A at index 0

// 4. Patrón Avanzado (Senior): Composición de funciones matemáticas
const double = (x) => x * 2;
const addFive = (x) => x + 5;
const square = (x) => x * x;

// Queremos aplicar las funciones a un número desde la última hasta la primera
// Matemáticamente: double(addFive(square(3)))
const mathOperations = [double, addFive, square];
const startingValue = 3;

const finalResult = mathOperations.reduceRight((currentValue, operation) => {
  // operation es la función actual, le pasamos el valor acumulado
  return operation(currentValue);
}, startingValue);

// Paso 1: square(3) = 9
// Paso 2: addFive(9) = 14
// Paso 3: double(14) = 28
console.log(finalResult);
// Output: 28
