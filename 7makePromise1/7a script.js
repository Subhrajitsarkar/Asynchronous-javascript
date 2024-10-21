// let posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {     //array.forEach(value,key)
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

// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err))


//assignment
const posts = [{ title: 'Post One' }, { title: 'Post Two' }];

function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    });
}

function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'post Three' });
            resolve();
        }, 3000);
    });
}

function create4thPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'post Four' });
            resolve();
        }, 4000);
    });
}

create3rdPost()
    .then(() => {
        return create4thPost();
    }).then(() => {
        printPost()
    })