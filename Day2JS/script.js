var a = 12;
let b = 13;  // use this new js part and it fix something

{
    var c = 12;
}
console.log(c);

{
    let d = 23;
}
// console.log(d);

const name = "Sam";
// name = "Mario";  not able to to use assignment in const

console.log("hello");
console.info("world");
console.warn("system");
console.error("magic");
console.table({fullName: "Alexander Graham Bell"});

// prompt: ask something through a dialog box.
let nm = prompt("name ?");
console.log(nm);

// alert: tells you not ask.
alert("heyeheyeh");

// string: '', ""
let fullName = "Love to play Cricket and Football";
console.log(fullName);

// slice: extract particular part of the string.
console.log(fullName.slice(0,20));

// template literal: use backtick to perform calculations inside consoles.
let first = 200;
let second = 400;
console.log(`The addition of ${first} and ${second} is ${first+second}`);

// split -> The split() method in JavaScript is used to divide a string into an array of substrings based on a specified separator. This method returns the new array and does not change the original string. 
let string = "hello";
console.log(string.split()); // if split is blank output is ['hello'].
console.log(string.split('h'));  // ['', 'ello']

// replace and replaceAll: In replace only first occurence replace but in replaceAll replace all the occurences. 
let string1 = "apple orange apple";
console.log(string1.replace('apple', 'banana'));  // banana orange apple
console.log(string1.replaceAll('apple','grape')); // 

console.log(string1.includes('apple')); // true

// Expression: An expression is any valid unit of code that produces a value. Examples: 5+3, "hello", x = 10, myFunc()
// Statement: A statement is a complete instruction that performs an action. It does not necessarily return a value.  
//                         Examples: let x= 5, if(x>3) {...}, for(let i=0; i<5; i++) {...}, function greet() {...}                           

