// old Js

// promises
function getData(data, callback){

    setTimeout(() => {
       console.log("reading from the databse"); // reading from the databse
       callback({data:data});
    }, 2000);


}

getData(5, function(data){
    console.log(data);  // { data: 5 }
});

console.log("finish"); // finish

// ES6

const prom = new Promise((resolve, reject) => {

    // here is async

    setTimeout(() => {
    
       // resolve(200); // 200
        // resolve({user:'rev', pass:'123'});  //  { user: 'rev', pass: '123' }
        reject(new Error("something went wrong"));
    },2000);

});

/** -------- prom is one line and we can access it in another line ---------- */

prom
 .then(data => {
    console.log(data);  
})
.catch(err => console.log(err));

/**
Error: something went wrong
    at Timeout._onTimeout (D:\REV\WORKSPACE\VSCODE\JAVASCRIPT\JS BY ED\ES6\Ep11.js:30:16)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
 */