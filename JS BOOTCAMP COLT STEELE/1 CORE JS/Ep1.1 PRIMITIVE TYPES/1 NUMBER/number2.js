let num = 100;

let oct = 060; // octal for 48

let d = 090; // intepreted as 90

let v = 0o45;
console.log(v); // 37

let h = 0xf; // same as 0xF hexadecimal for 15

let f1 = 12.5; 
let f2 = .3;   // same as 0.3, also valid but not recommended

let f3 = 200.00; // interpreted as integer 200

let f4 = 2.17e6; // ~ 2170000

// JavaScript uses Infinity and -Infinity to represent the finite numbers, both positive and negative.

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

// NaN

console.log('a'/2); // NaN;

console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
