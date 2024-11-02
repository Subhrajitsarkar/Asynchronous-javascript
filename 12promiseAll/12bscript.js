const posts = [{ title: 'POST1' }];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: No posts available to delete");
            }
        }, 1000);
    });
}

Promise.all([createPost({ title: 'POST5', body: 'This is POST5' }), updateLastUserActivityTime()])
    .then(([_, lastActivityTimeResult]) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTimeResult);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log('Deleted Post:', deletedPost.title);
        console.log('Remaining Posts:', posts);
    })
    .catch((error) => {
        console.log(error);
    });

async function managePosts() {
    try {
        const [_, lastActivityTimeResult] = await Promise.all([createPost({ title: 'POST5', body: 'This is POST5' }), updateLastUserActivityTime()]);
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTimeResult);

        const deletedPost = await deletePost();

        console.log('Deleted Post:', deletedPost.title);
        console.log('Remaining Posts:', posts);
    }
    catch (error) {
        console.log(error);
    }
}

managePosts();