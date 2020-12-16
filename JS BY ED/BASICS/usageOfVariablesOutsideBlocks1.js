
// FUNCTION SCOPE

function store(){
    var a = 5;
    let b = 'apple';

}

// USAGE OF VARIABLES OUTSIDE FUNCTION

// console.log(a); // error : a is not defined
// console.log(b); // error : b is not defined

// BLOCK SCOPE

if(true){

    // USAGE OF VARIABLES INSIDE BLOCK

   // console.log(a); // error : a is not defined
   // console.log(b); // error : a is not defined
}