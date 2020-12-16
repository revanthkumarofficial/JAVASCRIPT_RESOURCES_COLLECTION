// old js

var user ={
    name : 'rev',
    age: 25
}

var myName = user.name;

console.log(myName); // rev


// ES6
// Object deconstructuring

const list = {
    name : 'shopping List',
    items : ['Milk', 'Cow']
}

const {name,items} = list; 

console.log(name,items); // [ 'Milk', 'Cow' ]