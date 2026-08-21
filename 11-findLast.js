// CONCEPT: .findLast() Devuelve el último elemento del array que cumpla con la función proporcionada. Si no encuentra, devuelve undefined.
// Sintaxis: array.findLast(callback(element[, index[, array]])[, thisArg])
// NOTE: ES2023. Similar a find(), pero busca de derecha a izquierda. El index en el callback sigue siendo la posición real en el array (no un índice invertido).
// Se detiene en cuanto encuentra la primera coincidencia (recorriendo desde el final). Es ES2023, junto con findLastIndex(). A diferencia de find(), sí visita huecos en arrays dispersos igual que su contraparte.


// 1. Uso básico: Encontrar el último número par
const numbers = [1, 3, 5, 8, 12, 7, 4];

const lastEven = numbers.findLast((num) => num % 2 === 0);

console.log(lastEven);
// Output: 4 (el último par, no el 8 ni el 12)

// Comparación con .find() que buscaría desde el inicio:
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven);
// Output: 8 (el primer par desde el inicio)

// 2. Uso de 'index': Encontrar el último elemento que cumple una condición de posición
const statuses = ['activo', 'inactivo', 'activo', 'pendiente', 'activo'];

// Encontrar el último 'activo' que esté en un índice mayor a 1
const lastActiveAfterFirst = statuses.findLast((status, index) => {
  return status === 'activo' && index > 1;
});

console.log(lastActiveAfterFirst);
// Output: 'activo' (el del índice 4)
