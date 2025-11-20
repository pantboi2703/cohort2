// var arr = [
//     {
//         user: 'Sarthak',
//         age: 28,
//         city: 'Bhopal'
//     },
//     {
//         user: 'Samay',
//         age: 30,
//         city: 'Kashmir'
//     },
//     {
//         user: 'Samar',
//         age: 29,
//         city: 'Bhutan'
//     },
//     {
//         user: "Karan",
//         age: 35,
//         city: 'Faridabad'
//     } 
// ]

// var sum = 0;
// arr.forEach((elem) => {
//     sum = sum + elem.age;
// })
// console.log(sum/arr.length);

const users = [
  {
    fullName: "sophia_ellis",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UX Designer",
    description: "Passionate about creating intuitive digital experiences. Loves minimalistic design and user psychology.",
    tags: ["design", "ux", "figma", "wireframes"]
  },
  {
    fullName: "marcus_liu",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Software Engineer",
    description: "Full-stack developer specializing in JavaScript, cloud architecture, and performance optimization.",
    tags: ["javascript", "nodejs", "cloud", "devops"]
  },
  {
    fullName: "amelia.reid",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profession: "Marketing Strategist",
    description: "Helps brands grow through smart content strategies and data-driven campaigns.",
    tags: ["marketing", "seo", "branding", "content"]
  },
  {
    fullName: "david_montero",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Data Scientist",
    description: "Obsessed with turning complex data into actionable insights. Loves machine learning and statistics.",
    tags: ["python", "machine learning", "data", "ai"]
  }
];

var sum = '';
users.forEach((elem) => {
    sum = sum + `<div class="card">
                 <img src="${elem.image}" alt="">
                 <h3>${elem.fullName}</h3>
                 <h4>${elem.profession}</h4>
                 <p>${elem.description}</p>
                </div>`;
})
var main = document.querySelector('main');
main.innerHTML = sum;

