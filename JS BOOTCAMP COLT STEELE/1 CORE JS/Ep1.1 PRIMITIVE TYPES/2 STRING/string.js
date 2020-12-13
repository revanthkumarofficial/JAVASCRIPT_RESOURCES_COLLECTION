/**
 * String represents group of characters
 * Strings are indexed, each character inside string has index number
 * String is a "THING" i.e. here thing means group of characters
 * 
 * String ESCAPES
 * --------------
 * \n  ->  new line
 * \'  ->  single quoate
 * \"  ->  double quoate
 * \\  ->  backslash
 */


let firstName = "revanth";

var secondName = 'kumar';

const id = 'DREQW123';

/** length */
console.log(firstName.length);  // 7

/** [] */
console.log(firstName[0]);  // r

console.log(firstName[4]);  // n

console.log(firstName[7]);  // undefined

/**
 * some string method accept parameters
 */

console.log(firstName.indexOf('rev'));  // 0
console.log(firstName.indexOf('nth'));  // 4
console.log(firstName.indexOf('z'));  // -1 not found

console.log(firstName.slice(0,3)); // 'rev'
console.log(firstName.slice(3));  // 'anth'