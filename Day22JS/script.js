// var box = document.querySelector('#box');

// box.addEventListener('mouseenter', () => {
//     // console.log('Hello');
//     box.style.backgroundColor = 'green';
// })

// box.addEventListener('mouseleave', () => {
//     // console.log('Hello Left');
//     box.style.backgroundColor = 'crimson';
// })


// var chutki = document.querySelector('img')
// var msg = document.querySelector('h2 span')
// var body 
// // mouseenter, mouseleave
// chutki.addEventListener('mouseenter', () => {
//     msg.innerHTML = 'chutki se door ho jaaa'
// })

// chutki.addEventListener('mouseleave', () => {
//     msg.innerHTML = 'hn aishe hi door rah'
// })




// mousemove

// var cursor = document.querySelector('#cursor');

// window.addEventListener('mousemove', function (e) {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top  = e.clientY + 'px';
// });

var body = document.body;
var h1 = document.querySelector('h1');

body.addEventListener('keydown', (dets) => {
    h1.innerHTML = `You pressed ${dets.code}`
})

