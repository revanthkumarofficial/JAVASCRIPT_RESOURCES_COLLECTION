
// ES6

const shoppingList = ['Milk', 'Cow', 'Eggs', 'Bananas'];

// foreach

// shoppingList.forEach(normal function passing);

// here we do with arrow function
shoppingList.forEach(product => {
    console.log(`the product is ${product}`);

});
/**
 the product is Milk
the product is Cow
the product is Eggs
the product is Bananas

 */

shoppingList.forEach((product,index) => {
    console.log(`the index is ${index} and product is ${product}`);

});

/**
 the index is 0 and product is Milk
the index is 1 and product is Cow
the index is 2 and product is Eggs
the index is 3 and product is Bananas
 * 
 */



// MAP
// modifying

const newList = shoppingList.map(item => {
    return item+"new";
});

console.log(newList);  // [ 'Milknew', 'Cownew', 'Eggsnew', 'Bananasnew' ]

// filter

const filterList = shoppingList.filter(item => {
    return item === "Eggs";
});

console.log(filterList);  // [ 'Eggs' ]

const filterList2 = shoppingList.filter(item => {
    return item !== "Eggs";
});

console.log(filterList2);  // [ 'Milk', 'Cow', 'Bananas' ]



