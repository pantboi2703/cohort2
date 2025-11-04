// ---------------- LEVEL 1 ---------------- //
// Pure Beginner Practice

// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print only even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// 3. Print numbers from 10 to 1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 4. Print the word "Yes" 5 times
for (let i = 1; i <= 5; i++) {
  console.log("Yes");
}

// 5. Print whether numbers from 1 to 10 are even or odd
for (let i = 1; i <= 10; i++) {
  (i % 2 === 0)
    ? console.log(`${i} -> Even`)
    : console.log(`${i} -> Odd`);
}

// 6. Ask user for a number and say if it's positive or negative
let number = prompt("Enter a number:");
if (number === null) {
  console.error("You cancelled it.");
} else {
  number = Number(number);
  if (isNaN(number)) {
    console.error("Please enter a valid number.");
  } else if (number < 0) {
    console.log(`${number} is negative`);
  } else if (number > 0) {
    console.log(`${number} is positive`);
  } else {
    console.log("Number is zero.");
  }
}

// 7. Ask user's age and check if eligible to vote
let age = prompt("Enter age:");
if (age === null) {
  console.error("You cancelled it.");
} else if (age.trim() === "") {
  console.error("Please enter your age.");
} else {
  age = Number(age);
  if (isNaN(age)) {
    console.error("Please enter a valid number.");
  } else if (age <= 0) {
    console.error("Invalid age.");
  } else if (age >= 18) {
    console.log("You can vote.");
  } else {
    console.log("You cannot vote.");
  }
}

// 8. Print multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}

// Print table of 38
for (let i = 1; i <= 10; i++) {
  console.log(`38 X ${i} = ${38 * i}`);
}

// 9. Count how many numbers between 1 to 15 are greater than 8
let count = 0;
for (let i = 1; i <= 15; i++) {
  if (i > 8) count++;
}
console.log(`Count of numbers greater than 8: ${count}`);

// 10. Ask user for password and check access
let correctPassword = "123490";
let pass = prompt("Enter the password:");
if (pass === null) {
  console.log("You cancelled it.");
} else if (pass.trim() === correctPassword) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// While loop example
let pass1 = prompt("Enter something (type 'stop' to end):");
while (pass1 !== "stop") {
  console.log(pass1);
  pass1 = prompt("Enter something (type 'stop' to end):");
}

// ---------------- LEVEL 2 ---------------- //

// 11. Allow only 3 attempts to enter correct password
let attempts = 0;
let accountOpened = false;
const realPassword = "mayank";

while (attempts < 3) {
  let entered = prompt("Enter password:");
  if (entered === null) {
    console.log("Cancelled.");
    break;
  }
  if (entered === realPassword) {
    accountOpened = true;
    break;
  } else {
    console.log("Incorrect password.");
  }
  attempts++;
}

if (accountOpened) {
  console.log("Account opened successfully!");
} else if (attempts >= 3) {
  console.error("Account locked.");
}

// 12. Ask user for words until they type "stop". Count "yes".
let word = prompt("Type a word (type 'stop' to end):");
let yesCount = 0;
while (word !== "stop") {
  if (word === "yes") yesCount++;
  word = prompt("Type a word (type 'stop' to end):");
}
console.log(`The word "yes" was typed ${yesCount} times.`);

// 13. Print numbers divisible by 7 from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) console.log(i);
}

// 14. Sum of all odd numbers from 1 to 30
let sum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) sum += i;
}
console.log(`Sum of all odd numbers from 1 to 30 is: ${sum}`);

// 15. Keep asking number until user enters an even number
let num = Number(prompt("Enter a number:"));
while (num % 2 !== 0) {
  num = Number(prompt("Enter a number:"));
}
console.log("Even number entered.");

// 16. Print numbers between two user inputs
let start = +prompt("Enter start number:");
let end = +prompt("Enter end number:");
if (start > end) {
  console.error("Start cannot be greater than end.");
} else {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

// 17. Print only first 3 odd numbers from 1 to 20
let count1 = 0;
for (let i = 1; i <= 20; i++) {
  if (count1 === 3) break;
  if (i % 2 !== 0) {
    console.log(i);
    count1++;
  }
}
