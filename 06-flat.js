// CONCEPT: .flat() Crea un nuevo array con todos los elementos de sub-arrays concatenados hasta la profundidad especificada.
// Sintaxis: array.flat([depth])
// NOTE: Por defecto depth es 1. Muy útil para aplanar arrays anidados. Usa Infinity como depth para aplanar niveles de profundidad desconocida.
// Detalles técnicos: También elimina huecos (slots vacíos) del array, incluso en niveles sin anidamiento: [1, , 3].flat() da [1, 3]. Es equivalente a arr.reduce((acc, val) => acc.concat(val), []) con depth 1.


// 1. Uso básico
// Tenemos un array con tres niveles de profundidad:
// Nivel 0: el array exterior
// Nivel 1: [3, 4, [...]]
// Nivel 2: [5, 6]
const arr = [1, 2, [3, 4, [5, 6]]];

// Al pasar un depth de 2, le decimos a JavaScript que abra
// y extraiga los elementos hasta el segundo nivel de anidación.
const flattenedArr = arr.flat(2);

console.log(flattenedArr);
// Output: [1, 2, 3, 4, 5, 6]

// Demostración de inmutabilidad:
console.log(arr);
// Output: [1, 2, [3, 4, [5, 6]]]

// 2. Comportamiento por defecto (depth = 1)
const slightlyNested = ['a', 'b', ['c', 'd'], 'e'];
const flatLevelOne = slightlyNested.flat();
console.log(flatLevelOne);
// Output: ['a', 'b', 'c', 'd', 'e']

// 3. El truco de Infinity: Aplanar todo sin importar la profundidad
const crazyNested = [1, [2, [3, [4, [5, [6]]]]]];
// Infinity garantiza que el arreglo quede 100% plano
const completelyFlat = crazyNested.flat(Infinity);
console.log(completelyFlat);
// Output: [1, 2, 3, 4, 5, 6]

// 4. Beneficio oculto: Limpieza de huecos (Empty slots)
const arrayWithHoles = [1, 2, , 4, 5];
const cleanedArray = arrayWithHoles.flat();
console.log(cleanedArray);
// Output: [1, 2, 4, 5] (El hueco desapareció)
