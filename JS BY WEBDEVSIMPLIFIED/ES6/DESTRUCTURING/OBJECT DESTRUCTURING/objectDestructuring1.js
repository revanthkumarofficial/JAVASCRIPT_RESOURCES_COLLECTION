const personOne = {
    sirName : 'kad',
    age : 42,
    email : 'rev@gmail.com'
}


const personTwo = {
    name: 'rev',
    age: 32,
    email:'',
    address: {
        city: 'vijayawada',
        state: 'AP'
    }
}

const {name,age} = personTwo;
/** object destructuring is based on key */

console.log(name); // rev

console.log(age); // 32

console.log(email); //not defined

