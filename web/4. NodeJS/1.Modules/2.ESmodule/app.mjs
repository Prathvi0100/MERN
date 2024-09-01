
console.log("App started...");

//! Default export

// import greet from "./utils.mjs"

// console.log(greet("Erwin"));


//! Named export 

// import func from "./utils.mjs" // wrong method

// import {add} from './utils.mjs' 

// console.log(add(10,9));


//! Mixed export 

// import greet, {add} from "./utils.mjs"

// console.log(greet("Levi"));
// console.log(add(10,9));


//! Export everything

import * as all from "./utils.mjs"

console.log(all.add(10,9));
