// HOISTING



var x=7;

function getName(){
    console.log("LEARN JS");
}


getName(); // LEARN JS

console.log(x); // 7

console.log(getName); // [Function: getName]