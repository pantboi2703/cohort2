// DOM -> Document Object Model.
// DOM -> Frontend ki JS.
// DOM -> Four Pillars of DOM. (Just Basics Right now).
//        1. Selection of an element.
//        2. Changing HTML
//        3. Changing CSS.
//        4. Event Listeners.

// Selection of HTML:

// var h1 = document.querySelector('h1');
// var h2 = document.querySelector("h2") 
// console.log(h1);
// console.log(h2);
// document.addEventListener('DOMContentLoaded', () => {
//     // Selection of HTML:
//     var h1 = document.querySelector('h1');
//     var h2 = document.querySelector("h2")
//     console.log(h1);
//     console.log(h2);

// // Change the HTML
// h1.innerHTML = "Learn about the DOM";
//     // Change the HTML
//     h1.innerHTML = "Learn about the DOM";

// // Change the CSS: .style is necessary to change the property of CSS.
// h1.style.color = 'red';
// h1.style.backgroundColor = "pink"
//     // Change the CSS: .style is necessary to change the property of CSS.
//     h1.style.color = 'red';
//     h1.style.backgroundColor = "pink"

// var box = document.querySelector('#box');
// box.innerHTML = 'hey hey';
//     var box = document.querySelector('#box');
//     box.innerHTML = 'hey hey';

// box.style.backgroundColor = 'royalblue'
//     box.style.backgroundColor = 'royalblue'

//     // Event Listeners: User do activity in the websites and you have to track it using event listeners. Everything and Anythings user do with the webisted is called an event. like keydown, keyup

// // Event Listeners: User do activity in the websites and you have to track it using event listeners. Everything and Anythings user do with the webisted is called an event. like keydown, keyup

// h1.addEventListener('click',() => { // click is written in small letter.
//     console.log('hello');
// })

//     h1.addEventListener('click',() => { // click is written in small letter.
//         console.log('hello');
//     })
// });


// var inc = document.querySelector('#inc');
// var dec = document.querySelector('#dec');
// var h2 = document.querySelector('h2');

// var a = 0;
// inc.addEventListener('click', () => {
//     a++;
//     h2.innerHTML = a;
// })

// dec.addEventListener('click', () => {
//     a--;
//     h2.innerHTML = a;
// })

var changeButton = document.getElementById('change');
var image = document.querySelector('#card img'); // Corrected selector

changeButton.addEventListener('click', () => {
    image.src = "../Day4CSS/images/tomiaka.jpg";
});
