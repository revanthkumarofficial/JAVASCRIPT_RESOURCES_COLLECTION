/**
 * STRING TEMPLATE LITERALS
 * 
 */

let str = `Template literal in ES6`;

console.log(str);  // Template literal in ES6
console.log(str.length);  // 23
console.log(typeof str);  // string

/**
 * By using the backticks, you can freely use the single or double quotes 
 * in the template literal without escaping.
 */

let anotherStr = `Here's a template literal`;

console.log(anotherStr);  // Here's a template literal

/**
 * If a string contains a backtick, you must escape it using a backslash ( \) :
 */
let strWithBacktick = `Template literals use backticks \` insead of quotes`;

console.log(strWithBacktick);  // Template literals use backticks ` insead of quotes

/**
 * MULTILINE STRINGS
 */


/**
 * Note that the backslash ( \) placed after the newline character ( \n) 
 * indicates the continuation of the string rather than a new line.
 */

var msg = 'Multiline \n\
string';

console.log(msg);
/**
 * output :  Multiline
 *           string
 */

var msg1 = `Multiline \n\
string`;

console.log(msg1);

/**
 * Expression Interpolation
 */


const name = 'Jack';
console.log(`Hello ${name}`);  // Hello Jack

// template literals used with expressions

const result = `The sum of  4 + 5 is ${4 + 5}`;
console.log(result);   // The sum of  4 + 5 is 9

console.log(`${result < 10 ? 'Too low': 'Very high'}`);   // Very high

/**
 * TAGGED TEMPLATES
 */

/**
 * NORMAL FUNCTION
 */

function tagExample(strings) {
    return strings;
}

// passing argument
const result1 = tagExample('Hello Jack');

console.log(result1); // Hello Jack

// creating tagged template
const result2 = tagExample`Hello Jack`;

console.log(result2);  // Hello Jack



const name2 = 'Jill';
const sign = true;

function tagExample2(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    
    if(sign) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal
// passing argument name
const result3 = tagExample2`Hello ${name2}, How are you?`;

console.log(result3); // 