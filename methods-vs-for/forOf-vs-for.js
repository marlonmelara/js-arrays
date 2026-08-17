// Ejercicios de comparación entre ciclo for y for..of

// Ejercicio 3: Saludar con los nombres en mayúsculas
const names = ["ana", "pedro", "lucia", "juan"];

console.log("-- Con ciclo for --");
for (let i = 0; i < names.length; i++) {
  // if(names[i]=== "juana") return
  console.log(`Hola, ${names[i].toUpperCase()}`);
}
// Output:
// "Hola, ANA"
// "Hola, PEDRO"
// "Hola, LUCIA"
// "Hola, JUAN"

console.log("-- Con ciclo for...of --");

for (const name of names) {
// if(name === "pedro") continue
  console.log(`Hola, ${name.toUpperCase()}`);
}
// Output:
// "Hola, ANA"
// "Hola, PEDRO"
// "Hola, LUCIA"
// "Hola, JUAN"

console.log("-- Con método .forEach() --");
names.forEach(name => {
// if(name === "juana") return
  console.log(`Hola, ${name.toUpperCase()}`);
});
// Output:
// "Hola, ANA"
// "Hola, PEDRO"
// "Hola, LUCIA"
// "Hola, JUAN"

// Ejercicio 4: Obtener el promedio de las notas
const grades = [8, 9, 10, 7, 6]

console.log("-- Con ciclo for --");
let sum = 0;

for (let i = 0; i < grades.length; i++) {
  sum= grades[i] + sum;
}
let avgGrade= sum/grades.length;
console.log(`La nota promedio es ${avgGrade}`);
// Output: La nota promedio es 8

console.log("-- Con ciclo for...of --");
let sumForOf = 0;
for (const grade of grades) {
  sumForOf+= grade;
}
console.log(sumForOf/grades.length);
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

console.log("-- Con ciclo for...of --");
let minForOf = mathGrades[0];
let maxForOf = mathGrades[0];

for (const grade of mathGrades) {
  if( grade < minForOf ){ minForOf = grade }
  if( grade > maxForOf ){ maxForOf = grade }
}

console.log( {minForOf} , {maxForOf} );
// { minForOf: 6.5 } { maxForOf: 10 }

// Con spread (...) y Math.min / Math.max
console.log("-- Con spread y Math --");
const minMath = Math.min(...mathGrades);
const maxMath = Math.max(...mathGrades);
console.log({ minMath }, { maxMath });
// { minMath: 6.5 } { maxMath: 10 }
