/** DIFFERENCE BETWEEN FUNCTION STATEMENT AND FUNCTION EXPRESSION  IS HOISTING */

a(); // a is called

// b(); // b is not a function

// function statement

function a() {
    console.log("a is called");

}

a();

// function Expression

var b = function(){
    console.log("b is called");
}

b();