function a() {

    var b = 10;

    c();

    function c() {
        console.log(e);
    }

};


var e = 10;

a();

console.log(b); // not defined

// lexical scope is nothing but hierarchy  ex: c has scope of c() along with a() scope  and global scopes