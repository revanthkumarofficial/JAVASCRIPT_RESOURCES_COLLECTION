
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
return y;
}

var z=x();
// x completely gone after execution
console.log(z);

/**
 *  f y(){
 * console.log(a);
 * }
 */




// ... 1000 lines for example

// in our mind after execuiton of x() it is gone then how will z execute without x()

z(); // 7

// here comes the concept of closure, it remembers the x() and its lexical environement so output 7