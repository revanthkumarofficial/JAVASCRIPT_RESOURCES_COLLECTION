function x() {

    for(var i=1; i<=5;i++){
        setTimeout(function () {
            // reference to i not value of i
            console.log(i);
          }, i* 1000);
        
         
        }
        console.log("Hi JavaScript");
    }

  x();

  /**
   * Hi JavaScript
6
6
6
6
6
   */

   /**
    * there is problemw this
    */

    /**
     * solution is change var with let
     */