// Ejercicio 3:
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
