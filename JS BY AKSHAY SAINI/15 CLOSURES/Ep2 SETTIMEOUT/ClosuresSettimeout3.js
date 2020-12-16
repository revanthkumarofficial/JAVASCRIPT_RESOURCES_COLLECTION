function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        // reference to i not value of i
        console.log(x);
      }, x * 1000);
    }

    close(i);
  }
  console.log("Hi JavaScript");
}

x();

/***
 * Hi JavaScript
1
2
3
4
5
 */
