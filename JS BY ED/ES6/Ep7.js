// old js

var user = {
    name : 'rev',
    age : 25,
    sayName : function(){
        console.log('my name is '+ this.name); // my name is rev

     var fullName=  function() {
         var that = this;
         // if you dont declare, var that = this; then you will get not defined values
        console.log("my name is "+ this.name + "and my age is "+ this.age);  // my name is undefinedand my age is undefined
     };
     fullName();

    }

};

user.sayName();

// whenever is you call the function you just see your left side of the function


// ES6

const user2 = {
    name : 'rev',
    age : 25,
    sayName2 : function(){
        console.log(`My name is ${this.name}`); // My name is rev

     const fullName2 = () => {
        
        // arrow functions are smart enough they know you want user object not window object

        console.log(`My name is ${this.name} and my age is ${this.age}`); // My name is rev and my age is 25

     };
     fullName2();

    }

};

user2.sayName2();



// PRACTICAL EXAMPLE YOU HAVE A ELEMENT ON A PAGE AND YOU HAVE A BUTTON AND YOU ADD EVENT LISTNER AND CLICK

/** 

button.addEventListner('click', function(){

    var addFade = function (){

      //   this.style.dispay = "none";
      // this not gonna work
      // if you want to work with it you should declare var that=this;
    };

});

*/
