let dishesToDo = [ 'large platter' ];

//to add to the start:
dishesToDo.unshift('plate');

console.log(dishesToDo);  //  [ 'plate', 'large platter' ]

//add to the start again:
dishesToDo.unshift('cereal bowl');

console.log(dishesToDo);  //  [ 'cereal bowl', 'plate', 'large platter' ]

dishesToDo.unshift('spoon');

console.log(dishesToDo);  //  [ 'spoon', 'cereal bowl', 'plate', 'large platter' ]

//remove from the start:
dishesToDo.shift();

console.log(dishesToDo);  //  [ 'cereal bowl', 'plate', 'large platter' ]