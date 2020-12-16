function sumAndMultiply(a,b){
  return [a+b, a*b];
}

const array = sumAndMultiply(2,3);

console.log(array); // [ 5, 9 ]

const [sum, multiply, division = 'No Division'] = sumAndMultiply(2,3);
// here there is no division element in that return array but we can set a default value to the division element

console.log(sum); // 3

console.log(multiply); // 9

console.log(division); // No Division

