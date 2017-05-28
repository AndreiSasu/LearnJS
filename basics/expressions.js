// list comprehension
[
  for (i of[1, 2, 3]) i * i
];
[1, 4, 9]

var abc = ['A', 'B', 'C'];
[
  for (letters of abc) letters.toLowerCase()
];
// ["a", "b", "c"]

// spread operator
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

console.log(abc);
console.log(parts);
console.log(lyrics);
