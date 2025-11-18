/*
    JS is a synchronous language.
*/

// console.log("Hello 1 -> First Exercise");
// console.log("Hello 2 -> First Exercise");
// console.log("Hello 3 -> First Exercise");
// console.log("Hello 4 -> First Exercise");

// // setTimeout -> is used to perform delay in the code.
// // setTimeout -> also a higher order function. because it takes a function in an argument 
// console.log("Hello 1 -> Second Exercise")
// setTimeout(() => {
//     console.log("Hello 2 -> Second Exercise");
// }, 10000);
// console.log("Hello 3 -> Second Exercise");

// // Another exercise
// setTimeout(() => {
//     console.log("Hello 1 -> Third Exercise");
// },5000);

// setTimeout(() => {
//     console.log("Hello 2 -> Third Exercise");
// },2000);

// setTimeout(() => {
//     console.log("Hello 3 -> Third Exercise");
// },4000);


// setInterval: used as a controlled loop 

// var a = setInterval(() => {
//     console.log("Hello guys");
// },1000);

// setTimeout(() => {
//     clearInterval(a);
// },5000);

var grow = 0;
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('.inner');

btn.addEventListener('click', () => {
    // console.log('hello');
    btn.style.pointerEvents = 'none'; // Just after click there is no event perform.

    var num = 50 + Math.floor(Math.random()*50);

    var int = setInterval(() => {
        grow++;
        h2.innerHTML = grow+'%';
        inner.style.width = grow+'%';
    },num);

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
    },num*100);
})
