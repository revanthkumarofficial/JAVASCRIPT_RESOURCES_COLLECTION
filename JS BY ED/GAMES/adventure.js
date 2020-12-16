// GENERATE A NUMBER
// GIVE THE USER THE ABILITY TO GUESS
// IF THEY GUESS AND THEY ARE WRONG, ASK THEM AGAIN (HINT)
// IF THEY WIN, SAY THAT THEY WON

function guessGame(){

     let randomNr = Math.floor(MATH.random()*11);

     let guess;

     do {
         guess = prompt("guess  a number between 1-10"); //  if you declare let guess here you cannot use inside while

        console.log(guess, randomNr);

        if(randomNr > guess){
            console.log("you guessed too low");
        } else if (randomNr < guess){
            console.log("guess was too high");
        }



     }while(guess != randomNr){
         console.log("you won");
     }

}

guessGame();