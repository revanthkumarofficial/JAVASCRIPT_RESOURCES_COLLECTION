// old js

function sayName(){
    console.log('hello i am rev');
}


var sayAge = function(){
    console.log("my age is i dont want to tell you");
};


sayName(); // hello i am rev
sayAge(); // my age is i dont want to tell you


// ES6

const sayLocation = (location) => {
    // you can get rid of brackets around location where it has single parameter
    console.log(`my location is ${location}`);
    // you can also remove angular brackets when you have only single statement
    //const sayLocation = location => console.log(`my location is ${location}`);

};


sayLocation("paris"); // my location is paris