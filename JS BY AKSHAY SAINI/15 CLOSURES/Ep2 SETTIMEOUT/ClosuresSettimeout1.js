function x() {
  var i = 1;

  setTimeout(function () {
    console.log(i);
  }, 3000);

  console.log("Hi JavaScript");
}

x();

/**
 * Hi JavaScript
1
 */
