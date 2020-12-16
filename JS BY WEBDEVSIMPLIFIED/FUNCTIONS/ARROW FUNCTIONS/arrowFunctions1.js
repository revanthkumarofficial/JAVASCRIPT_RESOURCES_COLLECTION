// NORMAL FUNCTIONS

// NAMED FUNCTION WITH MULTIPLE PARAMETERS
function sum(a,b){
    return a+b;
}


// NAMED FUNCTION WITH ONE PARAMETER
function isPositive(number){
    return number>0;
}

// NAMED FUNCTION WITHOUT PARAMETER
function randomNumber(){
    return Math.random;
}

// ANNONYMOUS FUNCTION
document.addEventListener('click', function() {
 console.log('click');

})

// ARROW FUNCTION ARE USEFULL NARROWING AMOUNT OF CODE
// CONVERTING NORMAL FUNCTIONS TO ARROW FUNCTIONS

let sum2 = (a,b) => a+b; // no need to write return and brackets it defaultly returns value

let isPositive2 = number => number>0; // we no need to type bracket because there is no multiple parameters

let randomNumber2 = () => Math.random();

//ARROW FUNCTIONS ARE MORE USEFULL AND WORTH DURING ANONYMOUS FUNCTIONS

// ARROW ANNONYMOUS FUNCTION
document.addEventListener('click', () =>  console.log('click2'));
// document is browser object not node object node is a server


/**
 * THERE IS NO MUCH GREAT THING ABOUT ARROW FUNCTION DEALING WITH ANNONYMOUS FUNCTION.
 * THE REAL DEAL COMES WHILE USING 'this' KEYWORD INSIDE ANNONYMOUS FUNCTIONS
 */