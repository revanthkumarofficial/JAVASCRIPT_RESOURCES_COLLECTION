// ANONYMOUS FUNCTIONS

// FUNCTION WITHOUT NAME

// doesnot have thier own identity

/** 
function () {

}

// error: require function name
// you cannot declare anonymous function alone

// Anonymous functions are used when the functions are used as values

// you can use it to, assign it a variable

*/

var b = function () {
    console.log("a is called");
}

console.log(b);  // [Function: b]
b();   //  a is called