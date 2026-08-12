// Ejercicios de comparación entre ciclo for y .forEach()
// Ejercicio 1:
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
fruits.forEach(element => console.log(element))
// Output:
// apple
// banana
// cherry

fruits.forEach((element, index) => {
  console.log(`${index + 1}: ${element}`)
}
);
// Output:
// 1: apple
// 2: banana
//3: cherry

// Ejercicio 2:
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

// Ejercicio 3:
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
