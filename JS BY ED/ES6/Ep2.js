// global scoping
// functional scoping
// block scoping


const list1 = [1,2,3,4,5];

for(var i=0;i<list1.length;i++){
    console.log(i);
}

console.log(i);




console.log("*****************")

// USING LET problem solved

const list2 = [1,2,3,4,5];

for(let i=0;i<list2.length;i++){
    console.log(i);
}

// console.log(i);
// not defined because let is block scoped