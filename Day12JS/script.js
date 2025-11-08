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


// --------------------------------------------
// 🌟 REST OPERATOR Example
// --------------------------------------------

// The rest operator (...) is used in function parameters 
// to collect all remaining arguments into a single array.
// It helps when the number of arguments is unknown.

let add = 0;

function sum(...arr) {    // <-- '...arr' collects all arguments into an array
    console.log(arr);     // Output: [1, 2, 3, 4, 5]
    for (let i = 0; i < arr.length; i++) {
        add += arr[i];    // Add each value from the array
    }
    return add;           // Return the total sum
}

let result = sum(1, 2, 3, 4, 5); // Passing multiple arguments
console.log(result);              // Output: 15


// --------------------------------------------
// 🌟 SPREAD OPERATOR Example
// --------------------------------------------

// The spread operator (...) is used to expand (unpack) 
// elements of an array or object into individual values.
// It’s often used when passing array elements as arguments
// to a function that expects separate parameters.

function sum(a, b, c) {
    console.log(a + b + c);
}

let arr2 = [1, 2, 3];

// Here, '...arr' spreads the array into individual elements,
// so it’s equivalent to calling sum(1, 2, 3)
sum(...arr2); // Output: 6


// -----------------Day 13------------------------  //

// pure function ek aisha function
// -> same input = same output
// -> koi side effect naho hoga

let abc = 12;
function abcdef(val) {
    console.log(val+2);
}
abcdef(12);
abcdef(12);
abcdef(12);
abcdef(12);


// impure function 
// -> same input = different output ho sakta hai
// -> Koi na koi side effect ho sakta hai.
let ip = 12;
function abcde(val) {
    ip = Math.random() + val;
    console.log(ip);
}
abcde(12);
abcde(12);
abcde(12);
abcde(12);
abcde(12);

// Understanding Scoping in JS - ['Global scope', 'Function Scope']

let ef = 12;  // global scope
function understandScope() {
    let df = 134;
}
// console.log(df); // error because of functional scope


// Understanding 'Closures' and 'Scoping Rule':

// closure: ek function hai jo return karta hai function but returning function jo hai wo parent  function ka koi variable use karega.
// Note: Closure also a HOF.

function closure() {
    let ca = 12;
    return function() {
        console.log(ca);
    }
}


// Arrays in JS and how to create an Array.
// Understand how to accessing elements in Array.
// Functions on Arrays - ['push', 'pop', 'shift', 'unshift', 'indexOf', 'array destructuring', 'filter', 'some', 'map', 'reduce', 'spread operator', 'slice', 'revrese', 'sort', 'join', 'toString' ].

// arrays: 0 based indexing.
let arr1 = [671, 902, 3534, 4534, 5675, 8996];

// How to create an Array. 2 ways:
let arr3 = [1,2,3,4];
let arr4 = new Array();
console.log(arr1);

// push: push at last

arr1.push(5);
console.log(arr1);

// pop: pop at last
arr1.pop();
console.log(arr1);

// shift: remove one value at start
arr1.shift();
console.log(arr1);

// unshift: add one value at start.
arr1.unshift();
console.log(arr1);

// indexOf: give index of the element
arr1.indexOf(4);

// destructuring: 
let [as, bs] = arr // if you give space after as so it skips index 1.


// filter: used when you want to make a new Array from the old array which have some filter condition.

let brr = [1,2,3,4];
let brr2 = brr.filter(function(val) {
    return val < 3;
})

// spread opeartor
let brr3 = [1,2,3,4];
let brr4 = [...brr3];

// Iterating over Array using - ['For Loop', 'ForEach'].
let crr = [1,2,3,4];
crr.forEach(function(val) {
    console.log(val);
})

// Understanding what are objects in JS - ['Key-value pair'].
let obj = {
    name: "Matre",
    age: 23,
    email: "matre123@male.com"
};

let obj2 = new Object();
obj2 = {
    name: "Maria",
    age: 32
}

// Accessing
console.log(obj.name);
console.log(obj2['name']);

// delete property of object.
delete obj2.name;

let obj3 = {
    name: "Sourav",
    socials: {
        instagram: "mahem123",
        facebook: "messy123"
    }
}



