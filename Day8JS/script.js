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
let age1 = prompt("Enter age:");
if(age1 === null) {
    console.error("You pressed cancel"); 
} else {  // Take 35 space come this else if and trim so it is "" 
    if((age1.trim()==="")) {
    console.error("Please enter the age in the right way");
    }
    else {
        age1 = Number(age1.trim());
        if(isNaN(age1)) {
            console.log("Please enter number");
        }
        else {
            console.log("Confirm it is a number");
        }
    }

} 