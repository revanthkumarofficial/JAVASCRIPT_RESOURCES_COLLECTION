let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'brussel sprouts' ];
let meats = [ 'steak', 'chicken breast' ];

console.log(fruits.concat(veggies));  // [ 'apple', 'banana', 'asparagus', 'brussel sprouts' ]
console.log(veggies.concat(fruits));  // [ 'asparagus', 'brussel sprouts', 'apple', 'banana' ]

let allFoods = fruits.concat(veggies, meats);
