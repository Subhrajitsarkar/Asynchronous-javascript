// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }
// createPost({ title: 'Post Three', body: 'This is post three' },getPosts)       or 
// createPost({ title: 'Post Three', body: 'This is post three' }, () => {
//     getPosts();
// });


//assignment
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} - body is: ${post.body} - Created at: ${post.createdAt}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000);
}

function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, () => {
    getPosts();
    create4thPost({ title: 'Post Four', body: 'This is post four' }, getPosts);
});