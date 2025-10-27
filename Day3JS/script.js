// add comments: 

// data types - data ka type hi hai datatype.
// float - 12.3
// number - 12
// string - h, hello.
// boolean - false, true

// null - jab aapke pass koi value na ho dene ke liye tab null use hota h.
// let character = null; -> aaghe jaakar value denge abhi data nahi hai.
// let data = null;
// let user = null;


// arrays - ek se jyada value hold karne ke liye.
// [1,2,3,4].
// ["harsh", "shyam", "ravi"].
// [1,2,"harsh", true,{},[],class Animal{}]


// objects - ek se jyada properties ek bande ki hold karne le liye.
// array ek se jaada bando k liye hota hai.
// object ek bande ki kai saari cheejo ke liye hota hai.

// ["harsh", "shyam". "ravi", "kumar"].
//  {
//       name: "Iphone";
//       version: "17 Pro";
//       price: 7000
//  }


// Symbol - will learn when we see object in details'
// let a;

// undefined - jab koi variable banaya but ussey value nahi di.


// NaN - koi number ke saath aisha operation kiya jo ho nahi sakta to NaN milta hai
// 12*"harry"

// Infinity - Infinity - 1/0.

// relative and primitive datatypes in js.
var a = [1,2,3,4];
var b = a;         // b takes the reference of a not a copy.
b.pop();

// reference type values: array objects functions (jinki value direct copy nahi kar sakte)
// primitives type values: number booleans strings null undefined NaN Infinity Symbol (jinki value direct copy kar sakte hai)

let x = 10;
let y = x;   // y gets a copy of x
y = 20;
console.log(x); // 10


//  Primitive Types — copy by value
let d = 10;
let e = x;
y = 20;
console.log(d); // 10

// Reference Types — copy by reference
var a = [1, 2, 3, 4];
var b = a;
b.pop();
console.log(a); // [1, 2, 3]

// Data Types
// number - 12
// float - 12.3
// string - "hello"
// boolean - true / false
// null - intentional empty value
// undefined - variable declared but not assigned
// NaN - invalid number operation (e.g., 12 * "harry")
// Infinity - result of dividing by zero
// Symbol - unique identifier (to be explored deeper)

// Arrays - multiple values
let names = ["harsh", "shyam", "ravi"];
let mixed = [1, "hello", true, {}, [], class Animal {}];

//  Objects - multiple properties of one entity
let phone = {
  name: "iPhone",
  version: "17 Pro",
  price: 7000
};

