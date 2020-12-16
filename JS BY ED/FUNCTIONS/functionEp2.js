function greet(){

    let name = prompt("WHAT IS YOUR NAME");
    console.log("WELCOME TO OUR WESBITE :" + name)
}

console.log("rest of the code");

function signup(){
    let name = prompt("WHAT IS YOUR NAME");
    greet();
}


signup();