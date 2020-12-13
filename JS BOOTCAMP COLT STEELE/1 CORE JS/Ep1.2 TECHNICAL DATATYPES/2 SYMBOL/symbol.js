// Different from other primitive types, the symbol type does not have a literal form.

// To create a symbol, you call the Symbol function as follows:

let s1 = Symbol();

/** 
 Note that Symbol is a function, not an object constructor, therefore, you cannot use the new operator. 
 If you do so, you will get a TypeError

*/

console.log(Symbol() == Symbol()); // false

// You can pass a descriptive string into the Symbol function for the logging and debugging purposes.

let s2 = Symbol('event.save');

// When you call the toString() method on the symbol variable, it returns a more descriptive name as shown below:

console.log(s2.toString()); // Symbol(event.save)

/***
 * You can use symbols for many purposes. One of them is to create a string-like a constant 
 that can’t clash with any other values.
The following example creates a symbol that represents the click event.
 */

const click = Symbol('click');

// The string 'click' may be used for different purposes and not unique. 
// However, the click symbol is absolutely unique.