let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let swimmers = animals.slice(0, 3);

console.log(swimmers);  // [ 'shark', 'salmon', 'whale' ]

let mammals = animals.slice(2, 4);

console.log(mammals);  // [ 'whale', 'bear' ]

//One option:
// let reptiles = animals.slice(4, 6);

// Another option:
let reptiles = animals.slice(4);

console.log(reptiles);  // [ 'lizard', 'tortoise' ]

let quadruped = animals.slice(-3);

console.log(quadruped); // [ 'bear', 'lizard', 'tortoise' ]
