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

  function printName(user){
    console.log(user);
  }

  printName(personTwo);  

/**
 * {
  name: 'rev',
  age: 32,
  email: '',
  address: { city: 'vijayawada', state: 'AP' }
}
 */
  
  function printUser(user){
      console.log(`Name is: ${user.name} Age is ${user.age}`);
    }
    
  printUser(personTwo); // Name is: rev Age is 32
  
  
  function printUser2({ name, age, favouriteFood = 'Rice' } ){
      console.log(`Name is: ${name}, Age is ${age}, favouriteFood is ${favouriteFood}`);
    }
    
  printUser2(personTwo); // Name is: rev, Age is 32, favouriteFood is Rice
