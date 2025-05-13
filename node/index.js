// Synchronous: everything will fall one after other

// Aysnchronous: two jobs are done together just in case one takes long. If one takes a long time it will run in background adn lines below it will run 

// When you run node index.js you see line 1 and 3 print then line 2 
console.log('line 1'); 
setTimeout(() => {
    console.log('line 2');
}, 3000); 

console.log('line 3');``


// Callbacks: When a function takes another function as an argument
// Callback hell is the down turn 
// Be Careful that too many callbacks are not calling more callbacks. Get's slow and difficult to execute

function callback1(){
    console.log("I am a callback function");

}

function solve(n, callback){
    console.log("I am a solve function");
    callback();
    
}
// Pass the function as a name
solve(5, callback1)