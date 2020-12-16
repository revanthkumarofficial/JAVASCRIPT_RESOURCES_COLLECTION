// NAMED FUNCTION EXPRESSION

var b = function xyz() {
    console.log("a is called");
}

console.log(b);  // [Function: xyz]

b();   //  a is called

// xyz();  // ERROR: xyz is not defined

// xyz is not created in global scope

var c = function abc() {

    // access the function inside it works
    console.log(abc);
}

console.log(c);  // [Function: abc]

c(); // [Function: abc]

// abc() // error: you cannot the function outside as it is not in global scope it is inside c variable