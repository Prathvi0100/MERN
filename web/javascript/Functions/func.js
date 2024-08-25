//----functions

function sayhello() {
    console.log("Hello Everyone");
}
sayhello();
const sayhey = function () {
    console.log("HEY");
}
sayhey();

//----Ananymous function
// function(){
//     console.log("Welcome");
// }
(() => console.log("Welcome"))();

//----IIFE - Immediate invoking function expression

(function () {
    console.log("Welcome");
})();

const greeting = function (name = "Ben", age = 24) {
    console.log(`Hey ${name} your age is ${age}.`);
}
greeting();
greeting('Vikrant', 23);


const multiply = function (a, b = a * 2) {
    const m = a * b;
    return m;
}
//return statement here
const l = multiply(2,3);
const o=multiply(4);
console.log(l);
console.log(o);


//-----------ES6-------------

//----Arrow function


//Normally
// function multiply(a,b){
//     return a*b;
// }

// const result=multiply(2,3);

//Arrow func
const multiply2 = (a, b) => a * b;
const result2 = multiply2(2, 3);
const greet = (name) => `Hello ${name}`
const result3 = greet("Bob");

//Single parameter, No parantheses

const sq = x => x * x;
const sqfn = sq(3);

const randomnum = () => Math.random();
console.log(randomnum());


//Objects

const getuser = () => {
    return {
        name: "NMIT",
        age: 20
    }
}

console.log(getuser());

// arrow func

const getuser2 = () => ({ name: "NMIT", age: 20 });
console.log(getuser2());

//----let and const in JavaScript


function hoistingIssue() {
    // console.log(a);
    let a = 10;
    // console.log(a);
} // if we use let in place of var it will show error else shows undefined
hoistingIssue();

//using var

for (var i = 0; i < 3; i++) { // if we use let then it will throw error for outer console.log line
    console.log(i);
}

console.log(`i=${i}`);

//----Destructors

const numbers = [1, 2, 3, 4];
const [q, w, e, r] = numbers;
console.log(r);

//swap variables

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a, b);

//using obj

const user = { name: "HTML", age: 6, email: "html@gmail.com" }
console.log(user.email);

//using destructors
const { name2, age2, email2 } = { name2: "HTML", age2: 16, email2: "css@gmail.com" }
console.log(age2);

//destructing in function parameters
//method 1
function greet2(user) {
    console.log(`Hello ${user.name}, your age is ${user.age}`);
}

greet2(user);

//method 2
function greet3({ name2, age2 }) {
    console.log(`Hello ${name2}, your age is ${age2}`);
}
greet3({ name2, age2 });
