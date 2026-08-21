// CONCEPT: .findLastIndex() Devuelve el índice del último elemento que cumpla con la función proporcionada. Si no encuentra, devuelve -1.
// Sintaxis: array.findLastIndex(callback(element[, index[, array]])[, thisArg])
// NOTE: ES2023. Similar a findIndex(), pero busca de derecha a izquierda. El índice retornado es la posición real en el array (no cuenta desde el final).
// Se detiene en la primera coincidencia (recorriendo desde el final). Es ES2023, junto con findLast(). A diferencia de findIndex(), sí visita huecos en arrays dispersos igual que su contraparte.


// 1. Uso básico: Encontrar el índice del último número par
const numbers = [1, 3, 5, 8, 12, 7, 4];

const lastEvenIndex = numbers.findLastIndex((num) => num % 2 === 0);

console.log(lastEvenIndex);
// Output: 6 (el índice del 4, último par)

// Comparación con .findIndex() que busca desde el inicio:
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex);
// Output: 3 (el índice del 8, primer par)

// 2. Retorno de -1 cuando no hay coincidencias
const scores = [85, 92, 78, 95];

const perfectIndex = scores.findLastIndex((score) => score === 100);

console.log(perfectIndex);
// Output: -1 (NO es undefined, es -1)

// Patrón seguro para verificar si se encontró algo:
if (perfectIndex !== -1) {
console.log(`Puntaje perfecto en posición: ${perfectIndex}`);
} else {
console.log('No se encontró ningún puntaje perfecto.');
}

// 3. Uso de 'index' y 'array' en el callback
const measurements = [10, 25, 30, 15, 40, 20];

// Encontrar el último elemento que sea mayor que el promedio
const average = measurements.reduce((sum, n) => sum + n, 0) / measurements.length;

const lastIndexAboveAvg = measurements.findLastIndex((value, index, array) => {
// Podemos calcular el promedio dentro del callback usando 'array'
const avg = array.reduce((s, n) => s + n, 0) / array.length;
return value > avg;
});

console.log(lastIndexAboveAvg);
// Output: 4 (el índice del 40, último valor arriba del promedio de 23.33)
