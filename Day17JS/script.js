// Day 16 JS

// Math.random() and Math.floor()

// var a = Math.random() * 10;
// var b = Math.random() * 100;

// var floor = Math.floor(a);
// var floor1 = Math.floor(b);

// console.log(floor);
// console.log(floor1);

// var c = Math.floor(Math.random() * 100);
// console.log(c);

// var r = Math.floor(Math.random()*100);
// console.log(r);


// Make a colour change div using DOM and Math.random()

// var btn = document.querySelector('button');
// var box = document.querySelector('#box');

// btn.addEventListener('click', () => {
//     var c1 = Math.floor(Math.random()*256); // use 256 because color range is 255 not inclue 255 if we write 255 so that's why we use 256.
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })

// var arr = ['vedant', 'abhi', 'souvik', 'sumit', 'ankit', 'satwik', 'sarthak', 'hritik', 'harsh'];

// var a = Math.floor(Math.random()*arr.length);

// console.log(arr[a]);

var iplTeams2026 = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        fullName: 'Chennai Super Kings',
        trophies: 5,
        captain: 'Rituraj Gaikwad'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        fullName: 'Mumbai Indians',
        trophies: 5,
        captain: 'Hardik Pandya'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        fullName: 'Kolkata Knight Riders',
        trophies: 3,
        captain: 'Shreyas Iyer'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        fullName: 'Royal Challengers Bangalore',
        trophies: 1,
        captain: 'Rajat Patidar'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black',
        fullName: 'Sunrises Hyderabad',
        trophies: 1,
        captain: 'Pat Cummins'
    },
    {
        team: 'DC',
        primary: 'blue',
        secondary: 'red',
        fullName: 'Delhi Capitals',
        trophies: 0,
        captain: 'Rishab Pant'
    },
    {
        team: 'RR',
        primary: 'pink',
        secondary: 'blue',
        fullName: 'Rajasthan Royals',
        trophies: 1,
        captain: 'Sanju Samson'
    },
    {
        team: 'PBKS',
        primary: 'red',
        secondary: 'gold',
        fullName: 'Punjab Kings',
        trophies: 0,
        captain: 'Shreyas Iyer'
    },
    {
        team: 'GT',
        primary: 'blue',
        secondary: 'yellow',
        fullName: 'Gujarat Titans',
        trophies: 1,
        captain: 'Shubman Gill'
    },
    {
        team: 'LSG',
        primary: 'green',
        secondary: 'red',
        fullName: 'Lucknow Super Giants',
        trophies: 0,
        captain: 'KL Rahul'
    },
]
// var b = Math.floor(Math.random() * arr1.length);
// console.log(iplTeams2026[b]);

const btn = document.querySelector('button');
const content = document.querySelector('#box');
const main = document.querySelector('main');

btn.addEventListener('click', () => {
    // Select a random team from the array
    const winner = iplTeams2026[Math.floor(Math.random() * iplTeams2026.length)];

    // Update the content of the #box div with the winner's details
    // Using template literals to create a more descriptive output.
    content.innerHTML = `<h2>${winner.fullName}</h2><p>Captain: ${winner.captain}</p><p>Trophies: ${winner.trophies}</p>`;
    
    // Update the background colors
    // Using a CSS variable allows CSS to handle text color for contrast
    content.style.setProperty('--secondary-bg', winner.secondary);
    main.style.backgroundColor = winner.primary;
});