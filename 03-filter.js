// CONCEPT: .filter() Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función que le proporcionamos.
// Sintaxis: array.filter(callback(element[, index[, array]])[, thisArg])
// NOTE: No modifica el array original. Retorna un array nuevo (vacío si ningún elemento cumple la condición).
// Detalles técnicos: Omite huecos en arrays dispersos (sparse arrays). Es genérico: funciona con objetos array-like. El callback no se invoca si el array está vacío o si los elementos fueron eliminados antes de que filter() los visite.


// 1.  Uso básico
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(n => n % 2 === 0);
console.log(even);
// Output: [2, 4, 6]

// 2. Uso de 'index': Filtrar elementos para mantener solo los que están en posiciones pares
const tasks = ['Setup DB', 'Write Tests', 'Deploy App', 'Monitor Logs'];
const evenIndexedTasks = tasks.filter((task, index) => {
  // Retornamos true solo si el índice es divisible entre 2 de forma exacta
  return index % 2 === 0;
});
console.log(evenIndexedTasks);
// Output: ["Setup DB", "Deploy App"]

// 3. Uso de 'array': Un patrón clásico para eliminar elementos duplicados
const rawTags = ['javascript', 'html', 'javascript', 'css', 'html'];
const uniqueTags = rawTags.filter((tag, index, array) => {
  // array.indexOf(tag) busca la PRIMERA aparición de la etiqueta.
  // Si el índice actual coincide con esa primera aparición, lo conservamos.
  return array.indexOf(tag) === index;
});
console.log(uniqueTags);
// Output: ["javascript", "html", "css"]

// 4. Uso de 'thisArg': Filtrar usuarios basándose en un objeto de configuración de roles
const securityConfig = {
  requiredRole: 'admin'
};
const systemUsers = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'editor' },
  { name: 'Charlie', role: 'admin' }
];
// Usamos function tradicional para enlazar 'this' a securityConfig
const adminUsers = systemUsers.filter(function(user) {
  return user.role === this.requiredRole;
}, securityConfig);
console.log(adminUsers);
// Output: [{ name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' }]
