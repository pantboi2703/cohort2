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

// -------------------------------------------- Day 15 JS -------------------------------------------------------------

// Write a higher-order function runTwice(fn) that takes another function and executes it iwo times.

function runTwice(fn) {
    fn();
    fn();
}

runTwice(function() {
    console.log("Hello");
})
// Create one pure function that always returns the same output for given input, and one impure function using a global variable.
function pure(a,b) {
    console.log(a+b);
}

let global = 0;
function impure(a) {
    global++;    // bahar ke variable ke value bad rahi hai.
    console.log(a+global);
}

pure(1,2);  // 3
pure(1,2);  // 3

impure(2);   // 3
impure(2);   // 4

// Write a function that uses object destructuring inside parameters to extract and print name and age.

// function abcd(obj) {
//     console.log(obj.name);
// }

function abcd({name, age}) {
    console.log(name, age);
}

abcd({name: "mayank", age: 22});

// demonstrate the difference between normal function and arrow function when used as object methods (this issue).

console.log(this);
function abcd1() {
    console.log(this);
}
abcd1();

let obj = {
    name: "harsh",
    fnc: function() {
        console.log(this);  // object -> here in the normal function this value is object
    },
    fnc2: () => {
        console.log(this);  // window -> arrow function apne parent se value leta hai.
    }
};
obj.fnc();
obj.fnc2();

// Given an array of numbers, use map() to create a new array where ecah number is squared.
let arr12 = [1,2,3,4,5];
let newArr = arr12.map((val) => {
    return val * val; // map mai jo bhi return karte hai wo new Array mai chale jaata hai
})
console.log(newArr);

// Use filter() to get only even numbers from an array.
let arr21 = [1,2,3,4,5,6,7,8,9,10];
let newArr1 = arr21.filter((val) => {
    return val%2 === 0; // for 1 -> false, 2 -> true so this value goes to newArr. 
})
console.log(newArr1);

// Use reduce() to find the total salary from an array of numbers [1000,2000,3000].
let salary = [1000,2000,3000];
let ans1 = salary.reduce((acc,val) => {
    return acc+val;
}, 0);
console.log(ans1);

// Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).
// some(): at least one follow
// every(): everyone follow the condition.
let names = ["dhaneshwar", "om", "shanti", "ali"];
let ans2 = names.some((val) => {
    return val.length > 3;
});
console.log(ans2);

let ans3 = names.every((val) => {
    return val.length > 3;
});
console.log(ans3);

// Create an object user and test the behaviour of Object. freeze() and Object.seal() by adding/changes keys.

let user = {
    name: "harsh",
    age: 27,
    email: "h@gmail.com"
}
Object.freeze(user);
user.name = "harshita" // not able to do changes by using freeze. Not able to edit and not able to add new value.

// In seal you can edit the value but not able to add the new value.

let user1 = {
    name: "harsh",
    age: 27,
    email: "h@gmail.com"
}
Object.seal(user1);
user1.name = "harshita"



// Create a nested object (user -> address -> city) and access the city name inside it.
let obj1 = {
    user: {
        name:"harsh",
        address: {
            city: "Bhopal",
        },
    },
};

let { city } = obj1.user.address;



