// CONCEPT: .reduce() Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.
// Sintaxis: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// NOTE: Muy potente para sumatorias, concatenaciones o transformaciones. Si se omite initialValue, usa el primer elemento como acumulador inicial y puede lanzar error si el array está vacío.
// Detalles técnicos: Con initialValue, itera todos los elementos incluyendo el índice 0. Sin initialValue, itera desde el índice 1. Omite huecos en arrays dispersos, igual que map, filter y forEach.


// 1. Uso básico
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);
// Output: 10

// 2. Uso de 'initialValue': Contar la frecuencia de elementos usando un objeto inicial vacío {}
const inventory = ['laptop', 'mouse', 'laptop', 'keyboard', 'mouse'];
const itemCounts = inventory.reduce((acc, item) => {
  // Si el artículo ya existe en el acumulador, sumamos 1. Si no, lo inicializamos en 1.
  acc[item] = (acc[item] || 0) + 1;
  return acc; // Siempre debemos retornar el acumulador para la siguiente iteración
}, {}); // Nuestro initialValue es un objeto vacío
console.log(itemCounts);
// Output: { laptop: 2, mouse: 2, keyboard: 1 }

// 3. Uso de 'index' y 'array': Calcular el promedio exacto en un solo recorrido
const testScores = [85, 90, 92, 88];
const averageScore = testScores.reduce((acc, score, index, array) => {
  const currentSum = acc + score;
  // Si estamos en el último elemento (index === array.length - 1), calculamos el promedio final
  if (index === array.length - 1) {
    return currentSum / array.length;
  }
  // Si no es el último, simplemente pasamos la suma actual a la siguiente iteración
  return currentSum;
}, 0); // initialValue es 0
console.log(averageScore);
// Output: 88.75
