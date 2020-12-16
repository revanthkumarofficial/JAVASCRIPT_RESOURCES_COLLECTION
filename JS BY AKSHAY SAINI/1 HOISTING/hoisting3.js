
// console.log(x); // error: NOT DEFINED


// getName(); // error : getName is not a function
// here arrow function behaves like another variable not a function 

console.log(getName); // undefined

var x=7;

// Arrow Function
var getName = () => {
    console.log("LEARN JS");
}