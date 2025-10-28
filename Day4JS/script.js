// assignment 1 practice.

// Section-1 Introduction to JavaScript
// 1. Open any website → right-click → Inspect → Console → type: document.title
// 2. Try: alert(“Hello from Sheryians!”)
// 3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what
// is JS?”
// 4. Write one example of where you’ve seen JS being used (like popup,
// animation, etc.)
// Goal: Observe what JS does on a webpage.

// Solution of 1st section: 
    // document.title;
    // 'ChatGPT'
    // alert("Hello from GPT");
    // undefined
    // let message = prompt('Message');
    // undefined
    // message;
    // 'If HTML is skeleton, CSS is clothes'

//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section-2: Linking JavaScript Files
// 1. Create an HTML file and link JS file like this:
// 2. In app.js, write: console.log(“Connected!”)
// 3. Move the script tag to the section and see what happens.
// 4. Try using defer:
// <script defer src="script1.js"></script>
// <script defer src="script2.js"></script>
// Goal: Understand how to connect JS with HTML.

// Solution of Section:2 

// Step-by-Step: Linking JavaScript to HTML
// 1. Basic Setup
// Create two files: index.html, app.js

// index.html: 
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JS Linking Demo</title>
// </head>
// <body>
//   <h1>Hello, JavaScript!</h1>
//   <script src="app.js"></script>
// </body>
// </html>

// app.js: 
// console.log("Connected!");

// What happens? When the browser loads the HTML, it finds the <script> tag and runs app.js. You’ll see “Connected!” in the browser console.

// 2. Move <script> to <head>
//    html file:
//    <head>
//      <title>JS Linking Demo</title>
//      <script src="app.js"></script>
//    </head>

// What happens? If app.js tries to access DOM elements (like document.getElementById), it may fail because the DOM hasn't fully loaded yet. But console.log will still work because it doesn’t depend on the DOM.

// 3. Use defer: 
//    html file:
//    <head>
//      <script defer src="script1.js"></script>
//      <script defer src="script2.js"></script>
//     </head>

//     What happens?
    //  defer tells the browser: “Download this script now, but don’t run it until the HTML is fully parsed.”

    //  Scripts with defer run in order and after the DOM is ready.

    //  Perfect for scripts that interact with the DOM.

//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 3: Running JS in Browser console.

// Solution of Section:3
// 1. Open console and type: 2 + 2
// 2. Type: alert(“Hi”)
// 3. Try: prompt(“Your name?”)
// 4. Type: let city = “Bhopal”; city

// 1.  2+2
// 4

// 2. alert("Hi");
//    undefined

// 3. let myName = prompt("Enter Name");
//    undefined
//    myName
//    'Harry'

// 4. let city = "Haryana"
//    undefined
//    city
//    'Haryana'

//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 4: Variables and Keywords (var, let, const)

// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c
// = “School”
// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// 3. Create a variable inside curly braces using let and log it outside.
// 4. Predict output before running.
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)

// Solution of Section:4
//    1. var a = "Harsh";
//       let b = "Sheryians";
//       const c = "School";

//    2. a = "updated";
//       b = "updated";
//       c = "updated";  // error: Uncaught TypeError: Assignment to    constant variable.Understand this error

//    3. {
//       let age = 12;
//       }
//       console.log(age);  // error: because let is a block scope.

//    4. already predicted.
//    5. discount is fix, value of pi, urls (all are constants)

//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 5: Logging and interaction.
// Logging and Interaction (console, alert, prompt)
// 1. Log name, age, and city using console.log, console.info, console.warn.
// 2. Use prompt to take user’s name → alert a welcome message.
// 3. Log typeof of user’s input.
// 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what

//    Solution of Section 5: 
    // 1. console.log({Name: "Sam"});
    //    console.info({age: 23});
    //    console.error({city: "Bhopal"});
    //    console.warn({price: 100});

    // 2.    let userName = prompt("Enter Name:");
    //       console.log(alert(`Hello ${userName}`));

    // 3.    let userName = prompt("Enter Name:");
    //       console.log(typeof userName);   // string.

    //       let age = prompt("Enter age:");
    //       console.log(typeof age);   // string -> use Number() and ParseInt()
    //       console.log(typeof Number(age)); // number
    //       console.log(typeof parseInt(age)); // number

    // 4.    let age = prompt("Enter age:");  //34
    //       console.log(age);  // 34
    //       console.log(age+5); // 345

//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 6: Working with Strings.

// 1. let msg = “I love Sheryians”;
// 2. Try msg.slice(2, 6) and predict the result.
// 3. Try msg.split(” “) and count words.
// 4. Try msg.replace(“love”, “study at”).
// 5. Template string example: let name = “Harsh”; console.log(Hey ${name},
// welcome to JS!)
// 6. Check if msg.includes(“love”)

// Solution Section 6: 
//    1. let msg = "I love Sheryians";
//    2. console.log(msg.slice(2,6)); // love
//    3. console.log(msg.split(" ")); // ['I', 'love', 'Sheryians'].
//    4. console.log(msg.replace("love", "study at")); // I study at Sheryians
//       console.log(msg);  // I love Sheryians.
//    5. let name = "Sam"
//       console.log(`Hello ${name}`);
//    6. console.log(msg.includes('love')); // true


//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 7: Statements and Semicolons
// 1. Remove semicolon and check if code still runs.
// 2. Combine two statements in one line and see if it breaks.
// 3. Write 3 console.log statements without semicolons and predict output.

// Solution Section 7:
// 1. let same = 20 // it runs
// 2. let a = 20; b = 30; // not break
// 3. console.log("Hello") // Hello
//    console.log("Hello") // Hello 
//    console.log("Hello") // Hello


//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 8: Comments
// 1. Write your name as a single-line comment.
// 2. Write a 3-line comment explaining what your code does.
// 3. Hide one console.log using comment and check output.

// Solution Section 8:
// 1. Hello from my side

/*
2. Hello User
   How are 
   You?
*/

// 3. console.log("Connected");
//    console.log("Connection Done");


//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 9: Expressions VS Statements:
// 1. Type 5 + 10 (expression).
// 2. Type let x = 10; (statement).
// 3. Which one gives a value immediately?
// 4. Try: let y = (5 + 10) * 2; console.log(y)
// 5. Write one line explaining the difference between both.

// Solution of Section 9.
// 1. 5+10
//    This is an expression. It evaluates immediately to 15.

// 2. let x = 10
//    This is a statement. It declares a variable but doesn’t produce a visible value unless you log it.

// 3. Expression (5 + 10) gives a value right away.

// 4. let y = (5 + 10) * 2;
//    console.log(y); // Output: 30

// 5. Expressions return a value immediately, while statements perform an action like declaring a variable.


//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 10: Data Types
// 1. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“JS”,
// “HTML”]; let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
// 2. Log typeof each variable.
// 3. Change one value and recheck typeof.
// 4. Try adding a number and string together.

// Solution of Section 10:
   let age = 25;
   let name = "Harsh";
   let isStudent = true;
   let skills = ["JS", "HTML"];
   let user = { city: "Bhopal"};
   let x = null 
   let y;
   let z = Symbol("id");

   console.log(typeof age); // number
   console.log(typeof name); // string
   console.log(typeof isStudent); // boolean
   console.log(typeof skills); // object
   console.log(typeof user); // object
   console.log(typeof x); // object
   console.log(typeof y); // undefined
   console.log(typeof z); // symbol

//-------------------------------------------------------------------------------------------------------------------------------------------//

// Section 11: Special values.
// 1. Log 1 / 0, 0 / 0, Number(“abc”), undefined + 1
// 2. Write what appears (Infinity, NaN, etc.)
// 3. Write one line explaining when to use null vs undefined.

// Solution of Section 11:
// 1. console.log(1/0); // Infinity
//    console.log(0/0); // NaN
//    console.log(Number("abc")); // NaN
//    console.log(undefined+1); // NaN

/*
Explanation 1: Evaluate each expression
Expression	    Result	          Explanation
1 / 0	        Infinity	      Dividing any positive number by 0 gives Infinity in JavaScript. It doesn’t crash — it returns a special numeric    
                                  value Infinity
0 / 0	        NaN	              “0 divided by 0” is mathematically undefined, so JavaScript returns NaN (Not a Number).
Number("abc")	NaN	              JavaScript tries to convert the string "abc" to a number, but it fails — so the result is NaN.
undefined + 1	NaN	              undefined cannot be used in arithmetic operations, so adding 1 gives NaN.
*/

/*
  When to use null vs undefined
Keyword   | 	Meaning	When to Use
undefined |	    A variable has been declared but not assigned a value.	It’s automatically set by JavaScript (you rarely assign it manually).
null	  |     A variable has been explicitly assigned “no value”.	You use it intentionally to say “this variable should be empty right now.”
*/


//-------------------------------------------------------------------------------------------------------------------------------------------//


// Section 12: Primitive vs Reference
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;
// console.log(obj1.name)
// 3. Observe which one changes together.
// 4. Draw memory boxes on paper to visualise difference

// Solution of Section: 12
/*
1. let x1 = 5; let y1 = x1; y1 = 10; console.log(x1,y1); // 5,10 
   Explanation:
   x is assigned 5.
   y = x → a copy of the value of x (which is 5) is stored in y.
   Then y = 10 changes only y, not x.


2. let obj1 = {name: "Harsh"}; let obj2 = obj1; obj2.name = "Sheryians"; console.log(obj1.name); // Sheryians
   Explanation: 
   obj1 stores a reference (a pointer) to an object in memory.
   obj2 = obj1 → copies the reference, not the actual object.
   So both obj1 and obj2 point to the same memory location.
   When obj2.name changes, it’s like modifying the same object.

3. Summary: What Changes Together
    Type	     Example	         Copied By	            Changes Together?
  Primitive	   let y = x;	           Value	                   No
  Reference	  let obj2 = obj1;	  Reference (Address)              Yes

4. Memory Visyalization 

   let x1 = 5;    x1 ───► [ 5 ]
   let y1 = x;    y1 ───► [ 5 ]   (a separate copy)

   After y1 = 10
   x ───► [ 5 ]
   y ───► [10 ]   (changed only its own value)



   Object Example: let obj1 = {name: "Harsh"}; let obj2 = obj1; obj2.name = "Sheryians"; console.log(obj1.name);
   obj1 ──┐
          │
          ▼
     { name: "Harsh" }

     Then after let obj2 = obj1;

      obj1 ─┐
            │
            ▼
   { name: "Harsh" }   ← both point to the same object
            ▲
            │
      obj2 ─┘


      After obj2.name = "Sheryians":

    obj1 ─┐
          │
          ▼
   { name: "Sheryians" }
          ▲
          │
    obj2 ─┘
/*


 




















//-------------------------------------------------------------------------------------------------------------------------------------------//






