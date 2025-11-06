// Understanding function in js and why its widely used - ['parameters', 'arguments', 'rest parameters', 'hoisting', 'Variable Hoisting', 'Function Hoisting'].

function aalooParatha() {
    console.log("🌕")
}
aalooParatha();

function abcd(age, name) { // age name are parameters
    console
}

abcd(12, "harsh");   // 12 and harsh are arguments

// rest parameters
function abcd1(a,b,...c) {  // c is a array
    console.log(a,b,c);      
}
abcd1(1,2,3,4,5,6)

// Hoisting: kisi cheez ke banne se pehle uska istemaal karna.
abcd();    // call it before 
function abcd2() {
    console.log("hey");
}

// if you use var
// console.log(abcd());   // this is undefined.
// abcd3();   // abcd is not defined.
var a = function abcd3() {
    console.log("hey");
}

// Parameters in JS  - ['required', destructured, rest ]

function parameters(a,b,c,d) {
    // agar aapne parameter banaye and aapne unme arguments nahi bheje to fir wo value parameter ki undefined ho jayegi.
    console.log(a,b,c,d);   // undefined undefined undefined undefined
}
parameters();


function topic({name, age}) {   
    // if you pass obj as a parameter you access it using obj.
    console.log(name, age);
}
topic({name: "mayank", age: 27});


// rest parameter use case with rest operator.
function rest(...val) {
    console.log(val);
}
rest(1,2,3,4,5,6);

// default parameter
function default1(a,b,c=0) {
    console.log(a,b,c);
}
default1(1,2);

// positional arguments
function positional(a,b,c,d) {
    console.log(a,b,c,d)
}
positional(1,2,3,4);

// spread arguments usecase with spread operator.
function spread(a,b,c,d) {
    console.log(a,b,c,d)
}
let arr = [1,2,3,4];
spread(...arr)


// Classic function and Nested function
function classic() {
    function nested() {
        console.log("nested chala");
    }
    nested();
}
classic();

// Scope chain in JS
let ab = 12;   // global scope of that variable 
function scopeChain() {
    let b = 13;  // It can used in the entire scope of scopeChain() function.
    function defg() {
        // This function can access 'b' from its parent's scope.
        console.log(b);
    }
    defg(); // Call the nested function to see the output.
}
scopeChain();

// Understanding Immediately Invoked Function Expression (IIFE).
(function() {
    let balance = 5000;   // This is private
})(); 

let balance1 = 5000;  // access it global


// Arrow Function.
let greet = (FullName) => {
    console.log(`Greetings from my side ${FullName}`);
}

console.log(greet("Kartik Patel"));  // function greet not return anything so its print after log statement undefined;

// Anonymous Function.
const d = function() {
    console.log("Hi");
}
console.log(d);

// Higher Order Function:
// -> ek aisha function jo ki return kar de ek aur function.
// -> or wo ek function accept karle ek aur function parameter main.
// Example 1: 
function HOF() {
    return function() {
        console.log("Hello, I am an inner function");
    }
}

const innerFunc = HOF();
innerFunc();

//                       OR Example 2: Understanding callback functions or Higher order function
function HOF1(callback) {
    console.log("Before executing callback");
    callback();   // call it with a parenthesis because callback() is a function
    console.log("After executing callback");
}
HOF1(function() {
    console.log("I am the callback function")
})



// First class Functions in JS: In JS functions are first class citizens. This means functions are treated just like another value such as number, strings or objects.

/*
    So you can, 1. Store a function in a variable.
                2. Pass a function as an argument.
                3. Return a function into another function.
                4. Stores functions in arrays or objects.
*/

// 1. Store a function in a variable.
const greet1 = () => {
    console.log("Hello!");
}
greet1();  // "Hello!"

// 2. Pass a function as an argument.
function sayMyName(FullName) {
    console.log(`My name is ${FullName}`);
}

function yourName(callback) {
    console.log("Before calling my name");
    callback("Michael Jackson");
    console.log("After calling my name");
}

yourName(sayMyName);

// 3. Return a function into another function.
function makeMultiplier(x) {
    return function (y) {
        return x*y;
    }
}
const double = makeMultiplier(6);
console.log(double(2));

// 4. Stores functions in arrays or objects or Assign functions to object properties.
const operations = {
    add: (a,b) => {
        return a+b;
    },
    multiply(a,b) {
        return a*b;
    }
}

console.log(operations.add(2,3)); // 5
console.log(operations.multiply(2,3)); // 6


const functions = [
    () => console.log("First"),
    () => console.log("Second"),
    () => console.log("Third"),
]

functions[0]();
functions[1]();
functions[2]();