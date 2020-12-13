// an object is a collection of properties, where each property is defined as a key-value pair.

// In JavaScript, all objects are derived from the Object type


// The following example defines an empty object using the object literal form:

let emptyObject = {};

// The following example defines the person object with two properties:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

/**
 * 
 If you have more than one property, you use a comma (,) to separate the pairs.

JavaScript allows you to nest object as shown in the following example:
 
 */

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

/**
 * The contact object consists of firstName, lastName, email, phone, and address properties.

The address property itself is also an object that consists of building,  street, city, state, 
and country properties.

You can access the properties of an object by using two notations: the dot notation (.) and 
array-like notation ( []).
 */

/**
 * The following example uses the dot notation (.) to access the firstName and 
 * lastName properties of the contact object.
 * 
 */

console.log(contact.firstName);
console.log(contact.lastName);

// To get property of a nested object, you use the following form:
console.log(contact.address.country);

// If you refer to a non-existent property, you’ll get an undefined value as follows:
console.log(contact.age);

// The following example uses the array-like notation to access the email and phone properties of the contact object.

console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'

// Besides the object literal form, you can use the new keyword to create a new object as follows:

let customer = new Object();

// And assign the property of the object a value:

customer.name = 'ABC Inc.';