// Destructuring : take in object or array and convert into smaller objects / variables / elements

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

const numbers = ['1', '2', '3', '4', '5', '6'];

// destructing

// Accesing through Destructuring

/** array destructuring is based on element positions */

const [a, b, c,,e] = alphabet;

console.log(a); // A

console.log(b); // B

console.log(c); // C

// console.log(d); // not defined

console.log(e); // E
