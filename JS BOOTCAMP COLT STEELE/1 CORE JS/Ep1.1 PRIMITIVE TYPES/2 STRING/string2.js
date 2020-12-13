let greeting = 'Hi';
let s = "It's a valid string"; // It's a valid string
let str = 'I\'m also a string'; // use \ to escape the single quote (')

let str = 'JavaScript';
str = str + ' String'; // Javascript String
/**  
Behind the scene, JavaScript engine creates a new string that holds the new string 'JavaScript String' 
and destroys two other original strings 'JavaScript' and ' String'
*/