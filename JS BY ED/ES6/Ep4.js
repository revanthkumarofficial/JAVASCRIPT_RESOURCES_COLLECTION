// old js

function showBook(title, author){
    return {
        title : title,
        author: author
    }
}

var book = showBook('Harry Potter', 'JK');

console.log(book); // { title: 'Harry Potter', author: 'JK' }

// ES6

function showBook2(title,author){
    return {
        title,
        author
    }
}

var book2 = showBook2('Harry Potter', 'JK');

console.log(book2); // { title: 'Harry Potter', author: 'JK' }