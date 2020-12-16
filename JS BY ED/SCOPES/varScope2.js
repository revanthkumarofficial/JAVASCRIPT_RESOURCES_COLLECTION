// GLOBAL SCOPE
var w = 1;
var x = 2;
var y = 'rev';
var z = true;

console.log('Global SCOPE BEFORE FUNCTION EXECUTION : '+ w, x, y, z);
// Global SCOPE BEFORE FUNCTION EXECUTION : 1 2 rev true

function store(){

    // function scope 
    var w = 11;
    var x = "banana";
    var y = 50;
    var z = false;
    console.log('FUNCTION SCOPE : '+ w,x,y,z); 
}

store();  // FUNCTION SCOPE : 11 banana 50 false

console.log('Global SCOPE AFTER FUNCTION EXECUTION : '+ w, x, y, z);
// Global SCOPE AFTER FUNCTION EXECUTION : 1 2 rev true

// BLOCK SCOPE

for(var x=0; x<8; x++){
    console.log(x);
}

console.log('Global SCOPE AFTER FOR BLOCK EXECUTION : '+ w,x,y,z);  
// Global SCOPE AFTER FOR BLOCK EXECUTION : 1 8 rev true

if(x=8){
  var w = 2;
  var x = 9;
  var y = 'kum';
  var z = false;

}

console.log('Global SCOPE AFTER IF BLOCK EXECUTION : '+ w,x,y,z);
// Global SCOPE AFTER IF BLOCK EXECUTION : 2 9 kum false

/**
 * NOTE : Usage of var is dangerous var, values will be changed automatically inside loops 
 * If you are dealing with vars becareful while using inside block these may change global values of vars
 * present outside the blocks.
 */