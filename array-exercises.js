/**
 * =========================================================
 * 🚀 HOJA DE EJERCICIOS: MÉTODOS DE ARREGLOS EN JAVASCRIPT
 * =========================================================
 * Instrucciones: Completa cada reto utilizando la sintaxis de
 * Arrow Functions (=>) e implementando los parámetros
 * opcionales (index, array) cuando sea necesario.
 */

// ---------------------------------------------------------
// 1. Array.prototype.map()
// Reto: Transforma el arreglo para que los elementos en posiciones pares
// (índices 0, 2, 4...) queden en mayúsculas, y los impares en minúsculas.
const rawWords = ['java', 'script', 'rocks'];

const formattedWords = rawWords.map(/* Tu código aquí */);
// Resultado esperado: ['JAVA', 'script', 'ROCKS']


// ---------------------------------------------------------
// 2. Array.prototype.forEach()
// Reto: Verifica si el arreglo está ordenado de forma estrictamente
// ascendente (cada número es menor que el siguiente).
const sequenceNumbers = [10, 20, 30, 40];
let isStrictlyAscending = true;

sequenceNumbers.forEach(/* Tu código aquí */);
// Resultado esperado: isStrictlyAscending debe terminar siendo true


// ---------------------------------------------------------
// 3. Array.prototype.findIndex()
// Reto: Encuentra la POSICIÓN de la primera palabra que sea
// más corta que la palabra que le sigue inmediatamente.
const fruitList = ['apple', 'banana', 'cherry', 'date'];

const shorterWordIndex = fruitList.findIndex(/* Tu código aquí */);
// Resultado esperado: 2 (porque 'cherry' es más corto que 'date')


// ---------------------------------------------------------
// 4. Array.prototype.some()
// Reto: Determina si EXISTE alguna palabra que sea más corta que
// la palabra que la precede inmediatamente.
const animals = ['cat', 'dog', 'elephant', 'fox'];

const hasShorterThanPrevious = animals.some(/* Tu código aquí */);
// Resultado esperado: true (porque 'fox' es más corto que 'elephant')


// ---------------------------------------------------------
// 5. Array.prototype.every()
// Reto: Verifica si TODOS los números están ordenados de forma
// estrictamente ascendente (mayor que el número anterior).
const ascendingCheck = [10, 20, 30, 40];

const allAscending = ascendingCheck.every(/* Tu código aquí */);
// Resultado esperado: true


// ---------------------------------------------------------
// 6. Array.prototype.reduce()
// Reto: "Aplana" este arreglo de arreglos para convertirlo en un
// arreglo de un solo nivel. Usa un arreglo vacío [] como initialValue.
const nestedArrays = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArrays.reduce(/* Tu código aquí */);
// Resultado esperado: [1, 2, 3, 4, 5, 6]


// ---------------------------------------------------------
// 7. Array.prototype.find()
// Reto: Encuentra EL PRIMER ELEMENTO (la palabra) que comience exactamente
// con la misma letra que la palabra inmediatamente anterior.
const berries = ['apple', 'banana', 'blueberry', 'cherry'];

const consecutiveStartLetter = berries.find(/* Tu código aquí */);
// Resultado esperado: 'blueberry' (empieza con 'b' al igual que 'banana')


// ---------------------------------------------------------
// 8. Array.prototype.filter()
// Reto: Extrae ÚNICAMENTE los números que sean estrictamente mayores
// que el número que los precede inmediatamente.
const randomNumbers = [10, 20, 5, 30, 40];

const greaterThanPrevious = randomNumbers.filter(/* Tu código aquí */);
// Resultado esperado: [20, 30, 40]
