/* 
    Day 18 JS
    1. create an element.
    2. append a child.
*/

// create element using button click.

// var btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     var h1 = document.createElement('h1');
//     h1.innerHTML = 'Hello from JS'
//     console.log(h1);
// })


// append 
// var btn = document.querySelector('button');
// btn.innerHTML = 'download'

// var main = document.querySelector('main')
// main.appendChild(btn);


// Basic program to add random divs in position 

var btn = document.querySelector('button');
var main = document.querySelector('main');

btn.addEventListener('click', () => {
    var div = document.createElement('div');
    var x = Math.random()*100;
    var y = Math.random()*100;
    // console.log(x);
    var r = Math.random()*360;
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    div.style.height = '50px';
    div.style.width = '50px';
    div.style.position = 'absolute';
    div.style.backgroundColor = `rgb(${c1},${c2}, ${c3})`;

    div.style.left = x+'%';
    div.style.top = y+'%';
    div.style.rotate = r+'deg';
    main.appendChild(div);
})

// some advanced: 

// var btn = document.querySelector('button');
// var main = document.querySelector('main');

// var arr = ['Hey! I am Mayank','I love to play Cricket', 'Love to watch WWE fights', 'Roman Reigns is my favourite Wrestler', 'Learning DOM in JS', ];

// btn.addEventListener('click', () => {
//     var h1 = document.createElement('h1');

//     var x = Math.random()*80;
//     var y = Math.random()*80;
//     var r = Math.random()*360;
//     var scl = Math.random()*3;
//     var a = Math.floor(Math.random()*arr.length);

//     h1.innerHTML = arr[a];

//     h1.style.position = 'absolute';
//     h1.style.color = 'white';
//     h1.style.left = x+'%';
//     h1.style.top = y+'%';
//     h1.style.rotate = r+'deg';
//     h1.style.scale = scl;

//     console.log(h1);

//     main.appendChild(h1);

// })


