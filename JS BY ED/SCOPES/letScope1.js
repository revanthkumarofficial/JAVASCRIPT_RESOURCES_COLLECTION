// GLOBAL SCOPE
let food = "apple";
let fruits = 5;


function store(){

    // function scope 

    let food = "banana";
    let fruits = 50;

    console.log(food,fruits);
}

store(); // banana 50

console.log(food,fruits);  //  apple 5


// BLOCK SCOPE

for(let fruits=0; fruits<10; fruits++){
    console.log(fruits);

}

console.log(food,fruits);  // apple 5