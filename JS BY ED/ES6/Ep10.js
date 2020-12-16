// old js

// class

function Person(name, age, hairColor) {

    this.name = name;
    this.age = age;
    this.hairColor = hairColor;

}

var rev = new Person("REV", 25, "black");

console.log(rev); // Person { name: 'REV', age: 25, hairColor: 'black' }


// corret way of doing thngs too much in depth

Person.prototype.sayName = function() {
    console.log("My name is " + this.name); // older way
};

rev.sayName(); // My name is REV

// constructor function

function Rev(occupation, hobbies, name, age, hairColor){
    // INHERITANCE
    Person.call(this, name, age, hairColor);
    this.occupation = occupation;
    this.hobbies = hobbies;
}

// how to use all functionality of the person object inside rev  object

Rev.prototype = Object.create(Person.prototype);

const person = new Rev("Software","Dancing", "Rev", 25, "Black");

console.log(person);
/**
 Rev {
  name: 'Rev',
  age: 25,
  hairColor: 'Black',
  occupation: 'Software',
  hobbies: 'Dancing'
}


 */

person.sayName(); // My name is Rev



// ES6

// es6 way of doing things

class ShoppingList{
    constructor(items, nr){
        this.items = items;
        this.nr = nr;
    }
    sayList(){
        console.log(this.items);
    }
}

const myList = new ShoppingList(["Milk, Choco, RedBull"], 3);

class Product extends ShoppingList{
    constructor(items, nr, amount, cost){
        super(items, nr);
        this.amount = amount;
        this.cost = cost;

    }
}

const product  = new Product(['Redbull, Chocolate, Candy'], 3,2,20);

console.log(product);
/**
 Product {
  items: [ 'Redbull, Chocolate, Candy' ],
  nr: 3,
  amount: 2,
  cost: 20
}

 * 
 */

product.sayList(); // [ 'Redbull, Chocolate, Candy' ]