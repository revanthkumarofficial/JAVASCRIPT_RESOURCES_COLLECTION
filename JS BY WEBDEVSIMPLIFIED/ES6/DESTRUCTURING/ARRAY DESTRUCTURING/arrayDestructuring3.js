// Destructuring : take in object or array and convert into smaller objects / variables / elements

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

const numbers = ['1', '2', '3', '4', '5', '6'];

// what if you want rest of the elements so difficult know

// these 2 scenerios are not best

// here comes spread operator

const [a,,c, ...rest] = alphabet;

console.log(a); // A

// console.log(b); // not defined

console.log(rest); // [ 'D', 'E', 'F' ]
