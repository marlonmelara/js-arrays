const arr = ['a', 'b', 'c'];
for (const [index,value] of arr.values()) {
    console.log(`${index}: ${value}`);
}
// Output:
// a: undefined
// b: undefined
// c: undefined

for (const [index,value] of arr.entries()) {
  console.log(`${index}: ${value}`);
}
// Output:
// 0: a
// 1: b
// 2: c
