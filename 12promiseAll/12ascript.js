// let posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             posts.push(post)
//             const error = false;
//             if (!error) {
//                 res();
//             } else {
//                 rej('Error: Something went wrong')
//             }
//         }, 2000)
//     });
// }

let promise1 = Promise.resolve('Hello world')
let promise2 = 10;
let promise3 = new Promise((res, rej) =>
    setTimeout(res, 2000, 'Goodbye')
)
// let promise3 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Goodbye');
//     }, 2000);
// });

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))

// output -> [ 'Hello world', 10, 'Goodbye' ]
