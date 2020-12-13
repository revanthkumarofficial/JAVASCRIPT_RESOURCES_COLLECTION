/**
 * Null
 */


let loggedInUser = null;  // value is explicitly declared as nothing

console.log(loggedInUser);  // null

loggedInUser = 'revanth';

console.log(loggedInUser); // revanth

var loggedInUser2 = null;  // value is explicitly declared as nothing

console.log(loggedInUser2); // null

loggedInUser2 = 'kumar';

console.log(loggedInUser2); // kumar

let obj = null;
console.log(typeof obj); // object

if(obj != null) {
    // call method of the object
 }


 console.log(null == undefined); // true