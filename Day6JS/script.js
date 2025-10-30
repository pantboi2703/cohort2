/*
Section 1:
1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
Comparison, Logical, Bitwise)
a. Create two numbers a = 10 and b = 3.
Perform and log: a + b, a - b, a * b, a / b, a % b.
b. Write: let x = 5; x = x + 3;
Now rewrite the same using +=.
Do the same for -=, *=, /=.
c. let count = 5;
Use count++ and log value before and after.
Repeat for count–.
d. Compare two values: 5 == “5” and 5 === “5”.
Observe difference.
e. Check if 10 is greater than 5, less than 20, and equal to 10.
f. Try logical AND and OR:
true && false
true || false
!(true)
g. Predict the result of:
(5 > 3 && 10 > 8),
(5 > 3 || 10 < 8)
h. Bitwise (light intro):
Evaluate 5 & 1 and 5 | 1.
Write result and your observation (no deep explanation needed now)
*/

// Solution for Section 1:

// 1.) a
let a = 10; 
let b = 3;
console.log(a+b); // 13
console.log(a-b); //  7
console.log(a*b); // 30
console.log(a/b); // 3.333
console.log(10%3); // 1

// 1.) b
let x = 5; 
x = x + 3; 
console.log(x); // 8

x += 3;  // 8+3 = 11
console.log(x); 
x -= 3;  // 11-3 = 8
console.log(x); 
x *= 3;  // 8*3 = 24
console.log(x); 
x /= 3;  // 24 / 3 = 8
console.log(x); 

// 1.) c
let count = 5;
console.log(count++); // 5
console.log(count); // 6

console.log(++count); // 7
console.log(count); // 7

let count1 = 10;
console.log(count1--); // 10
console.log(count1); // 9

console.log(--count1); // 8
console.log(count1); // 8

// 1.) d
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// 1.) e
if(10>5 && 10<20 && 10 === 10) {
    console.log("yes all three conditions are true");
}

// 1.) f
if(10>5 && 5>10) {   // true && false -> false not run whatever inside if
    console.log("Hi from Logical AND");  
}

if(10>5 || 5>10) {   // true || false -> true run whatever inside if
    console.log("Hi from Logical OR");  
}

if(!(10>5)) {             // !(true) -> false
    console.log("Hello from Logical NOT"); 
}

// 1.) g
let ans = (5>3 && 10>8);
console.log(ans);  // true

let ans1 = (5>3 || 10<8); 
console.log(ans1);  // true

// 1.) h
console.log(5&1);  // 1
console.log(5|1);  // 5

// --------------------------------------------------------------------------------------------------------//
// 2. Variable Hoisting in JavaScript
// a. Predict output of:
// console.log(d);
// var d = 10

// b. Predict output of:
// console.log(e);
// let e = 10
// c. Predict output of:
// test()
// function test() { console.log(“Hello”) }
// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why.
// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?

// Solution of Section 2: 

// 2.) a
console.log(d);  // undefined
var d = 10;  // This breakdown in two parts var d and d = 10, var d goes to top so it gives undefined not a error.

// 2.) b
// console.log(e);  // This gives error cannot access e before initialization if initialize e later and if e is not initialized in the next line so it shows undefined means if e initialized later it knows e is there so hoisting works slighty there in let but not fully due to TDZ(temporary dead zone lies from top to before initialization)
// let e = 10;
let e = 10;

// 2.) c
test();
function test() {
    console.log("hello");
}
/* 
    Explanation of 2.) c: 
    Before the code runs, JavaScript's engine hoists the function declaration to the top of the scope. So internally, it's like:
    // Hoisted version
    function test() {
      console.log("hello");
    }

    test(); // Now this works because test is already defined
*/

// 2.) d
hello();  // TypeError: hello is not a function
var hello = function() {
    console.log("hi");
}

/* 
    Explanation of 2.) d
    JavaScript hoists variable declarations, but not initializations. So this code is treated like:

    var hello; // hoisted declaration (undefined)

    hello();   // calling undefined as a function → TypeError

    hello = function() {
      console.log("hi");
    };

    At the time hello() is called, hello is just undefined, not a function yet.
 
*/

// 2.) e

//  One-sentence summary:
//  What gets hoisted: Function declarations and variable declarations (var, let, const) are hoisted.

//  What does not get hoisted fully: Function expressions and let/const initializations are not hoisted fully —    they remain inaccessible until their line of execution.

