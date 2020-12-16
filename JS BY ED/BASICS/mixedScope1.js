var a = 1;
var b = 'apple';
var c = true;
let d = 2;
let e = 'banana';
let f = false;

console.log('Global SCOPE BEFORE FUNCTION EXECUTION : '+ a, b, c, d, e, f);
// Global SCOPE BEFORE FUNCTION EXECUTION : 1 apple true 2 banana false

// BLOCK SCOPE
function store(){
    var a = 2;
    var b = 'coconut';
    var c = false;
    let d = 3;
    let e = 'strawberry';
    let f = true;
    console.log('FUNCTION EXECUTION : '+ a, b, c, d, e, f);
}

store();
// FUNCTION EXECUTION : 2 coconut false 3 strawberry true

console.log('Global SCOPE AFTER FUNCTION EXECUTION : '+ a, b, c, d, e, f);
// 1 apple true 2 banana false
// you can see var values after function execution has not changed yet.

// BLOCK SCOPE
for(var a=1; a<6; a++){
    console.log(a);
}

console.log('Global SCOPE AFTER FOR BLOCK EXECUTION : '+ a);
// Global SCOPE AFTER FUNCTION EXECUTION : 6

if(x=6){
    var a = 22;
    var b = 'dates'
    var c = false;
    let d = 26;
    let e = 'grapes';
    let f = true;
    console.log('INSIDE IF BLOCK EXECUTION : '+ a,b,c,d,e,f);
    // INSIDE IF BLOCK EXECUTION : 22 dates false 26 grapes true
  }
  
  console.log('Global SCOPE AFTER IF BLOCK EXECUTION : '+ a,b,c,d,e,f);
  // Global SCOPE AFTER IF BLOCK EXECUTION : 22 dates false 2 banana false