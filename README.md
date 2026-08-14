# JavaScript Array Methods — Practice Exercises

A collection of hands-on coding exercises to practice the most commonly used
JavaScript array methods. Each challenge focuses on a single method and
encourages the use of **arrow functions** and optional callback parameters
(`index`, `array`) to solve problems that require awareness of element
positions.

## Methods Covered

| #   | Method                        | Challenge                                                                                |
| --- | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 1   | `Array.prototype.forEach()`   | Check whether a sequence is strictly ascending.                                          |
| 2   | `Array.prototype.map()`       | Transform elements based on their position (uppercase even indices, lowercase odd ones). |
| 3   | `Array.prototype.findIndex()` | Find the position of the first word shorter than the next one.                           |
| 4   | `Array.prototype.some()`      | Determine if any word is shorter than the word preceding it.                             |
| 5   | `Array.prototype.every()`     | Verify that all numbers are strictly ascending.                                          |
| 6   | `Array.prototype.reduce()`    | Flatten a nested array of arrays into a single-level array.                              |
| 7   | `Array.prototype.find()`      | Find the first element that shares its initial letter with the previous one.             |
| 8   | `Array.prototype.filter()`    | Extract only the numbers greater than the number that precedes them.                     |

## methods-vs-for

Side-by-side comparisons between each array method and the traditional `for`
loop, to understand when a method is equivalent (or not) to a loop.

| #   | File                | Comparison                                 |
| --- | ------------------- | ------------------------------------------ |
| 1   | `forEach-vs-for.js` | `Array.prototype.forEach()` vs `for` loop. |
| 2   | `forOf-vs-for.js`   | `for...of` loop vs `for` loop.             |

## Getting Started

1. Make sure you have [Node.js](https://nodejs.org) installed (v18 or later recommended).
2. Clone the repository and open it in your editor.
3. Open `exercises/array-exercises.js`, read each challenge, and replace `/* Tu código aquí */`
   with your own implementation.

## Project Structure

```
js-arrays/
├── 01-forEach.js          # Method reference files
├── 02-map.js
├── 03-findIndex.js
├── methods-vs-for/        # array methods vs for loop comparisons
│   ├── forEach-vs-for.js
│   └── forOf-vs-for.js
├── exercises/             # Exercise sheets
│   └── array-exercises.js
└── README.md
```

## How to Verify Your Solutions

The file is plain JavaScript, so you can run your code at any time:

```bash
node exercises/array-exercises.js
```

Each exercise includes a comment showing the **expected result** below it. Compare
your output against it to confirm your solution works.

## Suggested Workflow

- Solve each exercise using an **arrow function** and make use of the optional
  `index` and `array` parameters when the challenge depends on neighboring
  elements.
- Start with the simpler methods (`map`, `filter`) before moving to the ones
  that require carrying state or inspecting order (`reduce`, `some`, `every`).
- After solving, try refactoring your solution using a different method to
  deepen your understanding.

## Tips

- `find`, `findIndex`, `some`, and `every` stop early once their condition is
  met, so keep the return value of the callback strictly boolean where needed.
- `reduce` is the most flexible method — a flat array can be built by starting
  with an empty `[]` accumulator and concatenating each nested array.

## License

This project is for personal practice. Feel free to use, modify, and share it.
