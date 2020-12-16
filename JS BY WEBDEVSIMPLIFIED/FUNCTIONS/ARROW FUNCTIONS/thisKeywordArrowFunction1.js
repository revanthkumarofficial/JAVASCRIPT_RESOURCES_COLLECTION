class Person {
    constructor(name){
        this.name = name
    }

// ANNONYMOUS FUNCTION
 printNameArrow() {
 setTimeout(() => {
     console.log('Arrow: '+ this.name)
 }, 100)

 }

 // NORMAL FUNCTION
printNameFunction(){
    setTimeout(function() {
        console.log('Function: '+ this.name)
    }, 100)
}

}


let person = new Person('Bob');

person.printNameArrow(); // Arrow: Bob

person.printNameFunction(); // Function: undefined

console.log(this.name); // undefined

/**
 * JS DOESNOT REDINE THIS KEYWORD INSIDE ARROW FUNCTIONS
 * 
 * */ 