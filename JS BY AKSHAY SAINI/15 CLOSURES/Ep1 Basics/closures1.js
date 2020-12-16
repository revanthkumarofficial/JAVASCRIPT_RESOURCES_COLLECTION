/**
 * closure : function along with its lexical scope
 * combination of function bundled together with lexical environement(closure)
 */



function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
y();
}

x();