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


const {name: firstname = 'john', age, email ='rev@gmail.com', favouriteFood = 'Rice'} = personTwo;

console.log(firstname); // rev

console.log(age); // 32

console.log(email+'value not specified'); // value not specified

console.log(favouriteFood); // Rice
