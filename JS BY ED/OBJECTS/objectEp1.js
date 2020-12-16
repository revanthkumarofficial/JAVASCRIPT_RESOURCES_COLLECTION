const name = 'rev';

const age = 25;

// there are people with same name as rev so it is an issue so here objects are useful

// OBJECT
const user = {
    name: 'rev',
    age: 25,
    married: false,
    greet: function(){
        console.log("hello world");
    }

};

// methods are basically functions inside object

//  name, age, married -> variables or properties

console.log(user.name);

user.greet();