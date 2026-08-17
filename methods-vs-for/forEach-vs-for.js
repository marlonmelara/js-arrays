// Ejercicios de comparación entre ciclo for y .forEach()

// Ejercicio 1: Imprimir las frutas dentro del array una por una
const fruits = ["apple", "banana", "cherry"];

console.log("-- Con ciclo for --");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// Output:
// apple
// banana
// cherry

console.log("-- Con método .forEach() --");
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// cherry

fruits.forEach((fruit, i) => {
  console.log(`${i + 1}: ${fruit}`)
}
);
// Output:
// 1: apple
// 2: banana
// 3: cherry

// Ejercicio 2: Imprimir el doble de los números
const nums = [ 1, 2, 3]

console.log("-- Con ciclo for --");
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2)
}
// Output: 2 4 6

console.log("-- Con método .forEach() --");
nums.forEach(n => console.log(n * 2));
// Output: 2 4 6

nums.forEach((n, index) => {
  console.log(`${index}: ${n * 2}`)
}
);
// Output:
// 0: 2
// 1: 4
// 2: 6

// Ejercicio 3: Saludar con los nombres en mayúsculas
const names = ["ana", "pedro", "lucia", "juan"];

console.log("-- Con ciclo for --");
for (let i = 0; i < names.length; i++) {
  console.log(`Hola, ${names[i].toUpperCase()}`);
}
// Output:
// "Hola, ANA"
// "Hola, PEDRO"
// "Hola, LUCIA"
// "Hola, JUAN"

console.log("-- Con método .forEach() --");
names.forEach(name => {
  console.log(`Hola, ${name.toUpperCase()}`);
});
// Output:
// "Hola, ANA"
// "Hola, PEDRO"
// "Hola, LUCIA"
// "Hola, JUAN"

// Ejercicio 4: Obtener el promedio de las notas
const grades = [8, 9, 10, 7, 6];

console.log("-- Con ciclo for --");
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum= grades[i] + sum;
}
let avgGrade= sum/grades.length;
console.log(`La nota promedio es ${avgGrade}`);
// Output: La nota promedio es 8

console.log("-- Con método .forEach() --");
let sumForEach = 0
grades.forEach(grade => {
  sumForEach+=grade
});
console.log(sumForEach/grades.length);
// Output: 8

// Ejercicio 5: Obtener la nota mínima y máxima
const mathGrades = [ 6.5, 8, 9, 10, 7.5 ];

console.log("-- Con ciclo for --");
let min = mathGrades[0];
let max = mathGrades[0];

for (let i = 1; i < mathGrades.length; i++) {
  if( mathGrades[i] < min ){ min = mathGrades[i] }
  if( mathGrades[i] > max ){ max = mathGrades[i] }
}

console.log({min},{max});
// Output: { min: 6.5 } { max: 10 }

console.log("-- Con método .forEach() --");
let minForEach = mathGrades[0];
let maxForEach = mathGrades[0];

mathGrades.forEach( grade =>{
  if( grade < minForEach ){ minForEach = grade }
  if( grade > maxForEach ){ maxForEach = grade }
});

console.log({minForEach},{maxForEach});
// Output: { minForEach: 6.5 } { maxForEach: 10 }
