// Write a function sayHello() that prints "Hello Javascript"
function sayHello() {
    console.log("Hello Javascript");
}
sayHello();

// Create a function add(a,b) that returns their sum and log the result.
function add(a,b) {
    return a+b;
}
let ans = add(1,2);
console.log(ans);

// Write a function with a default parameter name = "Guest" that prints "Hi <name>".
function greeting(guest = "Guest") {
    console.log(`Hi ${guest}`);
}

greeting("Tom Holland");
greeting();

// Use rest parameters to make a function that adds unlimited numbers

// use forEach
let sum=0;
function addUnlimited(...nums) {
    // console.log(nums);
    nums.forEach((val) => {
        sum += val;
    })
    return sum;
}
let result = addUnlimited(1,2,3,4,5,6,7,8,9,10);
console.log(result);

// use for loop.
let sum1=0;
function addUnlimited1(...nums) {
    // console.log(nums);
    for(let i=0; i<nums.length; i++) {
        sum1 += nums[i];
    }
    return sum1;
}
let result1 = addUnlimited1(1,2,3,4,5,6,7,8,9);
console.log(result1);

// use reduce
function addUnlimited2(...nums) {
    let ans = nums.reduce((val,acc) => {
        return acc+val;
    }, 0);
    console.log(ans);
}
let result2 = addUnlimited2(1,2,3,4);
console.log(result2);

// create an IIFE that prints "I run instantly!"
(function() {
    console.log("I run instantly!");
})();

// Make a nested function where the inner one prints a variable from the outer one.
function parent() {
    let a = 12;
    function child() {
        console.log(a);
    }
    child();
}
parent();

// Create an array of 5 fruits. Add one at the end and remove one from the beginnings.
let arr = ["apple","banana","grape","mango","pear"];
console.log(arr);
arr.push("guava");
console.log(arr);
arr.shift();
console.log(arr);

// Use a for loop to print all elements of an array.
let arr1 = [1,2,3,4,5,6];
for(let i=0; i<arr1.length; i++) {
    console.log(arr1[i]);
}

// Create an object person with keys name, age and city and print each key's value.
let person = {
    name: "Tom",
    age: 27,
    city: "Australia",
};

for(let key in person) {
    console.log(person[key]);
}

// Use setTimeout() to log "Time's up!" after 2 seconds.
setTimeout( () => {
    console.log("Time's up!");
},2000)