// old js
// default parameters


function multiply(m,n){

    console.log(m*n);

}

multiply(); // NaN
multiply(5,10); // 50




function multiply2(x,y){
    var a = x || 1;
    var b = y || 1;

    console.log(a*b);

}

multiply2(); // 1


// ES6

const add = (c=1,d=2) => {
    console.log(c+d);
};

add(); // 3

add(10,20); // 30