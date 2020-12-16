// pure function : it should not effect the other things(objects) outside that function
// exs : Math.random()
// 99 PERCENT OF THE TIMES TRY TO CREATE PURE FUNCTIONS

const array =[1,2,3];

function addElementToArray(arr, element){
   
    return [...array, element, Math.random];
}

console.log(array);  //  [ 1, 2, 3 ]

console.log(array, addElementToArray(array, 4));  //  [ 1, 2, 3 ] [ 1, 2, 3, 4, [Function: random] ]

console.log(array, addElementToArray(array, 4));  //  [ 1, 2, 3 ] [ 1, 2, 3, 4, [Function: random] ]

// You can see no object outside is changing or effecting this is pure function