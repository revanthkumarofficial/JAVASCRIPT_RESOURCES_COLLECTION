// lot of programmers use parameters and arguments as interchangably one
// these two parameters and arguments are different

// these identifiers or local variables or labels  param1, param2 are called as parameters
// these param1, param2 are not arguments they are strictly parameters
var b = function (param1,param2){
    console.log(param1+param2);

}

console.log(b); // [Function: b]

// here 5,7 are called as arguments
// passing values inside to a function, here 5,7 are values
b(5,7); // 12