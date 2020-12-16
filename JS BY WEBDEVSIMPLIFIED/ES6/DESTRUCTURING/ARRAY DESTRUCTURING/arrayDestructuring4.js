const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

const numbers = ['1', '2', '3', '4', '5', '6'];

const newArray = [...alphabet, ...numbers];

console.log(newArray);
/**[
  'A', 'B', 'C', 'D',
  'E', 'F', '1', '2',
  '3', '4', '5', '6'
]
 * 
 */

const newArray2 = alphabet.concat(numbers);

console.log(newArray2);

/**
 * [
  'A', 'B', 'C', 'D',
  'E', 'F', '1', '2',
  '3', '4', '5', '6'
]
 */