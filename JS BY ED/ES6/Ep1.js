 // old js issues
var names =["ed","john","Mike"];

var counter =10;

var counter =5;

console.log(counter); // 5

function sayName(){
    var name = "rev"
    console.log(counter); // 5
    console.log(name); // rev
}
sayName(); 

// console.log(name);
// not defined

// ES6

const todoList = ["milk","tea"];

// todoList = ["rev"];
// no redeclare or modify using const

let todoList2 = ["milk","tea"];

todoList2 = ["rev"];

console.log(todoList2); // [ 'rev' ]

// generally we use const more than let if you want to redeclare it and modify it then go for let


let counter2 = 10;

// let counter2 = 20;
// error you should not redeclare using let and const

counter2 = 20;

console.log(counter2); // 20