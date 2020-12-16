// FIRST CLASS FUNCTIONS

// heavy term

// function as argument we pass function as argument to another function

// Scenerio 1 : Passing Anonymous Function as Argument

var a = function (param1){

    console.log(param1); // [Function]
    param1(); // Passing Anonymous function inside to a
}

a(function () {
    console.log("Passing Anonymous function inside to a");
});


// Scenerio 2 : Passing Named Function as Argument

var b = function (param2) {

    console.log(param2);  // [Function: xyz]
    param2(); // Passing Named function inside to b, without declaring xyz as function expression
}

b(function xyz(){
console.log("Passing Named function inside to b, without declaring xyz as function expression");
});

// Scenerio 3 : Passing Named Function declaring it as Expression as Argument 

var c = function (param3) {

    console.log(param3); // Passing Named function inside to b, declaring xyz as function expression
    param3();
}


function abc() {
console.log("Passing Named function inside to b, declaring xyz as function expression");
}

c(abc); // [Function: abc]


