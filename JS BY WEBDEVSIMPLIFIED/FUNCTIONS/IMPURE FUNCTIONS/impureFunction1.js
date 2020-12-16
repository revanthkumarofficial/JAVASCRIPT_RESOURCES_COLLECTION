// impure function 
// i.e you should not change the thing outside the function
// ex : array is the thing(object) outside the function and you are changing its value inside the function 
// as it gives different output whenever you pass a value it will give different output by adding that element
// IN VERY FEW CASES WE REQUIRE CREATING IMPURE FUNCTIONS for example, dealing with DATABASE as we need to update 
// the records everytime so in such scenerios we go for impure functions.


const array =[1,2,3];

function addElement(arr, element){
    array.push(element);
   
}

console.log(array);  //  [ 1, 2, 3 ]

addElement(array, 4)

console.log(array);  //  [ 1, 2, 3, 4 ]

addElement(array, 5)

console.log(array);  //  [ 1, 2, 3, 4, 5]

addElement(array, 6)

console.log(array);  //  [ 1, 2, 3, 4, 5, 6 ]


// you can observe array object is changing outside the function so it impure function