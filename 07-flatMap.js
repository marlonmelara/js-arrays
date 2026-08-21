// CONCEPT: .flatMap() Primero aplica una función a cada elemento y luego aplana el resultado en un nuevo array. Equivale a map seguido de flat(1).
// Sintaxis: array.flatMap(callback(element[, index[, array]])[, thisArg])
// NOTE: Más eficiente que encadenar map().flat(1) por separado (una sola pasada). A diferencia de flat(), la profundidad de aplanado siempre es 1, sin poder ajustarla.
// Si el callback retorna un array, sus elementos se insertan aplanados; si retorna un valor simple, se inserta tal cual. Omite huecos en arrays dispersos igual que map, a diferencia de flat() que sí los elimina.


// 1. Uso básico
const arr = [1, 2, 3];
const result = arr.flatMap(n => [n, n * 2]);
console.log(result);
// Output  [1, 2, 2, 4, 3, 6]

// 2. Uso de 'index': Intercalar la posición con el elemento
const tasks = ['Code', 'Test', 'Deploy'];
const tasksWithOrder = tasks.flatMap((task, index) => {
  // Retornamos un arreglo con el número de paso y el nombre de la tarea
  return [index + 1, task];
});
console.log(tasksWithOrder);
// Output: [1, 'Code', 2, 'Test', 3, 'Deploy']

// 3. Uso avanzado (array): Extraer sub-propiedades condicionalmente (Map + Filter)
const systemUsers = [
  { name: 'Alice', active: true, roles: ['admin', 'editor'] },
  { name: 'Bob', active: false, roles: ['viewer'] },
  { name: 'Charlie', active: true, roles: ['editor'] }
];
const activeRoles = systemUsers.flatMap((user, index, array) => {
  // Si el usuario no está activo, retornamos un arreglo vacío
  // Al aplanar (flat), este arreglo vacío desaparecerá del resultado final
  if (!user.active) return [];
  // Si está activo, retornamos su arreglo de roles para que se integre al resultado plano
  return user.roles;
});
console.log(activeRoles);
// Output: ['admin', 'editor', 'editor'] (Bob fue filtrado silenciosamente)
