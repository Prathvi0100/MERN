//! Single function export 

const importing=require('./utils')
console.log("App started...");

// console.log(importing);

// console.log(importing("Raman"));


//! Object export

// console.log(importing.add(10,4));
// console.log(importing.subtract(19,9));


//! Named function export 

console.log(importing.sayhi("Viraj"));
 

//! Use export shorthand

console.log(importing.sayhi("Vikrant"));
