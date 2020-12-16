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

const {name:firstname, ...rest} = personTwo;

console.log(firstname);  // rev

console.log(rest); // { age: 32, email: '', address: { city: 'vijayawada', state: 'AP' } }

const {address:{city,town}} = personTwo;

console.log(city); // vijayawada
console.log(town); // undefined


 // Combining two objects will lead to over riding of values for common keys between those objects

 const personThree = {...personOne, ...personTwo};  

 console.log(personThree);
 
 /**
  * {
  sirName: 'kad',
  age: 32,
  email: '',
  name: 'rev',
  address: { city: 'vijayawada', state: 'AP' }
}
  */