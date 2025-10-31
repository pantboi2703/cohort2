// ### Loops and Conditionals in JS

// - Understanding condition operator in JS - ['if', 'else', 'if else', 'else-if', 'ternary', 'switch-case'].

// conditionals: programming mein kai baar aisha phase aata hai jab choose karna hota hai ya toh option 1 choose 
//               karo ya option 2 choose karo 
// truthy and falsy means write anything inside the conditions which is convertable in true or false.
// inside if 0 "" false NaN null undefined document.all
// kuch bhi dikhe = true
// condition ? true: false
//

if(12>13) {
    console.log("Inside if");
} else {
    console.log("Inside else");
}

if(12) {
    console.log("hey");
}
else {
    console.log("hello");
}



if(12>13) {
    console.log("if runs");
} else if(13>14) {
    console.log("else if 1 runs");
} else if(14>15) {
    console.log("else if 2 runs");
} else {
    console.log("else runs");
}

// Ternary opeartors: 
12>13 ? console.log("if condition true this runs") : console.log("otherwise this runs");

// switch case: 
let day = 3;
switch (day) {
    case 1: 
      console.log("Monday");
      break;
    case 2: 
      console.log("Tuesday");
      break;
    case 3: 
      console.log("Wednesday");
      break;
    case 4: 
      console.log("Thursday");
      break;
    case 5: 
      console.log("Friday");
      break;
    case 6: 
      console.log("Saturday");
      break;
    case 7: 
      console.log("Sunday");
      break;
    default: 
      console.log("default case no day");
}

// loops: 
// There are two types of loops in term of use case:
   // 1 3 5 7 9 11 13 15 17 19
   // 0 1 1 2 3 5 8 13 21 34...

// straightforward loops: naa hi value badalti hai naa hi printing badalti hai.
// dynamic loop -> value badal sakti hai and printing bhi badal sakti hai.

// for loop.
for (let i=0; i<5; i++) {
    console.log("Sam");
}

// print fibonacci:
let a = 0;
let b = 1;
let n = prompt("Enter the number");
for(let i=0; i<n; i++) {
    console.log(a); // 0
    let c = a + b;  // 1
    a = b;  // 1
    b = c;  // 1
}

// print 11 to 20.
for(let i=1; i<=10; i++) {
    console.log(i+10);
}

// print 30 to 10.
for(let i=30; i>=10; i--) {
    console.log(i);
}

// print 12-1 (except 5 and 7).
for(let i = 12; i>0; i--) {
    if(i===5 || i===7) {}  // Bypass
    else console.log(i);
}


