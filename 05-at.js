// CONCEPT: .at() Devuelve el elemento en la posición especificada. Soporta índices negativos para contar desde el final.
// Sintaxis: array.at(index)
// NOTE: Más legible que arr[arr.length - 1] para el último elemento. A diferencia de arr[-1] (que da undefined, ya que -1 no es un índice válido en notación de corchetes), arr.at(-1) sí funciona correctamente.
// Si index está fuera de rango (positivo o negativo), retorna undefined sin lanzar error. Funciona igual en Strings (str.at(-1)) y TypedArrays.


// 1. Uso general
const arr = [1, 2, 3];
const result = arr.at(-1);
console.log(result);
// Output: 3

// 2. Acceso desde el final: El adiós definitivo a "array.length - 1"
const systemLogs = ['INIT', 'AUTH_SUCCESS', 'DATA_FETCH', 'CONNECTION_CLOSED'];

// Forma tradicional (verbosa)
const lastLogClassic = systemLogs[systemLogs.length - 1];

// Forma moderna con .at()
const lastLogModern = systemLogs.at(-1);

console.log(lastLogModern);
// Output: 'CONNECTION_CLOSED'

// 3. Accediendo a elementos intermedios desde el final
const topScores = [100, 95, 80, 75, 60];
// Obteniendo el penúltimo lugar (el segundo contando desde el final)
const runnerUpScore = topScores.at(-2);

console.log(runnerUpScore);
// Output: 75

// 4. Manejo de índices fuera de rango (Out of bounds)
const activeUsers = ['Alice', 'Bob'];

// Si intentamos buscar un índice que no existe, no arroja error, devuelve undefined
const missingUser = activeUsers.at(5);
const outOfBoundsNegative = activeUsers.at(-5);

console.log(missingUser); // Output: undefined
console.log(outOfBoundsNegative); // Output: undefined
