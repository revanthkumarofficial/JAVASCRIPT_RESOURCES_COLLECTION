let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];

people.sort();

console.log(people);  // ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [ 34, 10, 100000, 67, 99 ];

nums.sort();

console.log(nums);  // [10, 100000, 34, 67, 99]  i.e. It is not numeric sort it is string based sort

//Sorts by converting values to strings and comparing their UTF-16 character codes.

//We will learn how to change this behavior later on!
