// Level-1 Pure Beginner Practice.
// 1. Print numbers from 1 to 10.
//    Hint: Loop from 1 to 10 and print each number.
for(let i=1; i<=10; i++) {
    console.log(i);
}

// 2. Print only even numbers from 1 to 20.
//    Hint: Use a loop and condition to print only even ones.
for(let i=1; i<=20; i++) {
    // if(i%2 === 0) {
    //     console.log(i);
    // } else {}
    (i%2===0) ? console.log(i) : {}
}

// 3. Print numbers from 10 to 1.
//    Hint: Use a loop but with decrement.
for (let i=10; i>0; i--) {
    console.log(i);
}

// 4. Print the word "Yes" 5 times.
//    Hint: Repeat using a loop.
for(let i=106; i<=110; i++) {
    console.log("Yes");
}

// 5. Print whether numbers from 1 to 10 are even or odd.
//    Hint: For each number, check: even -> "Even", else -> "Odd"
for(let i = 1; i<=10; i++) {
    (i%2===0) ? console.log(`${i} -> Even`) : console.log(`${i} -> Odd`);
} 

// 6. Ask user for a number and say if it's positive or negative.
//    Hint: Use prompt() and conditions. 
let number = prompt("Enter number: ");   // Note: if take input from propmt 12 it considers it '12' -> string.(always give string).
if(number<0) {
    console.log(`${parseInt(number)} is negative`);
} else if(number>0) {
    console.log(`${parseInt(number)} is positive`);
} else {
    console.log("Either nor negative or positive");
}

// 7. Ask user's age and check if eligible to vote.
// Hint: if age >= 18 "eligible" otherwise "not eligible".

// let age = +prompt("Enter age");  // by using + whatever you write in input convert to number and if press cancel it goes to not eligible to vote so handle each cases.
// if(age>=18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible to vote");  
// }

// trim():trim() remove spaces from first and last "    h  a    " ----> "h  a".(after trim)

// let age1 = prompt("Enter age:");
// if(age1 === null) {
//     console.error("You pressed cancel"); 
// } else {  // Take 35 space come this else if and trim so it is "" 
//     if((age1.trim()==="")) {
//     console.error("Please enter the age in the right way");
//     }
//     else {
//         age1 = Number(age1.trim());
//         if(isNaN(age1)) {
//             console.log("Please enter number");
//         }
//         else {
//             console.log("Confirm it is a number");
//         }
//     }
// } 

// 7. Ask user's age and check if eligible to vote.
// Hint: if age >= 18 "eligible" otherwise "not eligible".
let age = prompt("Enter age: ");
if(age === null) console.error("You cancelled it.");
else {
    if(age.trim() === "") {
        console.error("Please write something.");
    }
    else {
        age = Number(age);     // Number(harsh) => NaN.
        if(isNaN(age)) {
            console.error("Please enter a number.");
        }
        else {
            // console.log(`your age is ${age}`);
            if(age<=0) {
                console.log("Invalid age");
            }
            else if(age>=18) {
                console.log("You can vote.");
            } else {
                console.log("You can't vote.");
            }
        }
    }
} 

// 8. Print multiplication table of 5.
// Use loop to print 5 X 1 to 5 X 10.
for(let i=1; i<=10; i++) {
    console.log(`5 X ${i} = ${5*i}`);
}

// Print table of 38
for(let i=1; i<=10; i++) {
    console.log(`38 X ${i} = ${38*i}`)
}

// 9. Count how many numbers between 1 to 15 are greater than 8.
//    Loop and count conditionally.
let count = 0;
for(let i=1; i<15; i++) {
    if(i>8) count++;
}
console.log(count);

// 10. Ask user for the password and tell that user get the access or not.
let password = "123490";
let pass = prompt("Enter the password: ");
if(pass === null) {
    console.log("You cancelled it");
} else {
    if(pass === password || pass.trim() === password) {
        console.log("matched");
    } else {
        console.log("not matched");
    }
}

// while loop: tab tak chalo jab tak condition true hai.
/*
     syntax of while: 
     start 
     while() {
     .... /// your code 
     change
     }

     Example: 
     let i = 1;
     while(i<11) {
        console.log("Hello");
        i++;
     }
*/

// let password1 = "harsh";
let pass1 = prompt("Enter the password:");
while(pass1 != "stop") {
    console.log(pass1);
    pass1 = prompt("Enter the password:");
}

// -----------------------------  Level 2 ------------------------   // 
// 11. Allow only 3 attempts to enter correct passowrds. 
//     If user gets it right enter stop. If not -> "Account Locked".
let attempts = 0;
let khulgaya = false;
let password1 = "mayank";

let pass2 = prompt('Enter password:');
attempts++;

if (password1 === pass2) khulgaya = true;

while(password1 != pass2) {
    if(attempts === 3) {
        console.error("Account locked");
        break;
    }
    password1 = prompt("Enter password");
    if(password1 === pass2) khulgaya = true;
    attempts++;
}

if (khulgaya === true) console.log("account opened");
