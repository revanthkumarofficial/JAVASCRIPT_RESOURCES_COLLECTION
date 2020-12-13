/**
 * Boolean represents True or False
 */


let  gameover = true;

var workdone = false;

const godexists = true;

let inProgress = true;
let completed = false;

console.log(typeof done); // boolean

/**
 * JavaScript allows values of other types to be converted into boolean values of true or false.

To convert a value of another data type into a boolean value, you use the Boolean function. 
The following table shows the conversion rules:

Type	   true	                             false
------------------------------------------------------------
string	   non-empty string	                 empty string
number     non-zero number and Infinity	     0, NaN
object	   non-null object	                 null
undefined	 	                             undefined

 */

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null)); // false