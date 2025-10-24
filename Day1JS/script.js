// introduction to js
// why it is important
// what can it do for you?
// script tag use karke attach karna hai js ko
// js ko browser mein run karna
// var let const
// console... prompt alert
// strings kya hoti hai
// slice template strings split replace includes

var a = 10;
let b = 12;
const c = 26;

a = 35;
b = 24;
console.log(a+b);
// c = 21;   -- This gives error cannot use assignment operator for const.

// alert();
// prompt("name?");

let str = "Please eat the food";

// split is used to extract the particular part of the string.
console.log(str.slice(0,6));  // Please 

// template literal or template string
console.log(`Hello ${str}`);

// split around a particular char or word in the string
console.log(str.split('a'));  // ['Ple', 'se e', 't the food']

// Then we can also use join
console.log(str.split('a').join(''));  // Plese et the food

// replace -> replace a particular thing only the first occurence
// current str: Plese et the food.
// replace -> only for the first e.
console.log(str.replace('e','huihui'));  // Plhuihuiase eat the food.

// replaceAll -> replace a particular thing all the occurences.
// current str: Plhuihuiase eat the food.
// replaceAll -> for all the occurences.

const str1 = "apple banana apple";
console.log(str1.replaceAll('apple','orange')); // "orange banana orange"

// includes: return true or false
console.log(str1.includes('apple')); // true
console.log(str1.includes('grapes')); // false

