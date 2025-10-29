// operators in js

// 1. Arithmetic Operators: +,-,*,/,%,**
console.log(2+3);    // 5
console.log(12-10);  // 2
console.log(12*13);  // 156
console.log(12/13);  // 0.9230..........
console.log(12%13);  // 12
console.log(2**3); // 2 ki power 3 -> 8


// 2. Assignment Operators: =, +=, -=, */, /=, %=
let a = 13;
a += 12;   
console.log(a);  // 25
a -= 10;
console.log(a);  // 15
a *= 20;
console.log(a);  // 300
a /= 2;
console.log(a);  // 150
a %= 5;
console.log(a);  // 0

// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <= 

// == not strict compare NEVER use this.
// === strict compare Always use this.
// != NEVER Use this.  12 != '12'  // false
// !== Always use this. 12 !== '12'  // 
// > 
// <
// >=
// <=

/*
4. Logical Opeartors: &&, ||, !
    && -> true && true -> true
          false && true -> false
          true && false -> false
          false && false -> false
          
    && -> true && true -> true
          false && true -> true
          true && false -> true
          false && false -> false

    ! -> not
         if(!(12>13)) {  // !(false) -> true -> if condition runs.
           console.log("Hello")  // Hello
         }

*/
if(12>13 && 13>11) {  // false && true -> false if not run.
    console.log("hello");
}

if(!(12>13)) {  // !(false) -> true -> if condition runs.
    console.log("Hello")  // Hello
}

/*
  Ternary operators: consition ? doThis : doThat.
*/
(112>13) ? console.log("Hey") : console.log("Hello");

/*
    TypeChecking operators: typeof, instanceof.
    instanceof: kuch bhi banaoge wo top level ki cheezo se aata hai.

*/
let arr= [];  // arr instanceof Array -> true
console.log(arr instanceof Array);

/*
    String Opeartors: +(for concatenation), 
*/
    let str1 = "Sam";
    let str2 = "Manuel";
    console.log(str1 + " " + str2);

/*
    Spread operator and Rest operator
    1. spread: ...
    2. rest: ...
*/
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];
console.log(arr1);
console.log(arr2);


function abcd (a,b,c,...rest) {
    console.log(a+b+c+rest.reduce((acc,val) => acc+val,0));
}
abcd(1,2,3,34,4,5,5);



/*
    Nullish Coalescing Opeartor: The nullish coalescing operator (??) returns the right-hand value only when the left-hand value is null or undefined. Otherwise, it returns the left-hand value.
    ?? (fallback only when null / undefined)
*/
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"

/*
    Optional Chaining: 
    ?. (safe access to nested values)
*/

let obj = {
    name: {
        first: "harsh",
        second: {
            sf: "singh",
            df: "harman"
        }
    }
}

let obj1 = {};
// console.log(obj1.name.first); // gives error if want to safe from this error use chaining.
console.log(obj1?.name?.first); // not gives error gives undefined.


/*
   variable hoisting in js:
   // variable ko banane se pehle bhi use kiya jaa sakta hai.
   // var d = 12 => In Hoisting variable breaks into two parts. var d(declaration), d = 12(initialization)
   // declaration wala part top par chala jayega and initialization wahi rahega.
*/

console.log(d);
var d = 12;  // d = 12, and var d goes to top so console.log(d) not gives error because var d declaration goes to top.

console.log(e);
let e = 21;   // line no. 1 to 128 is temporal dead zone. not use there.
