const posts = [{ title: 'POST1' }];
let lastActivityTime = null; // This will store the user's last activity time

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); // Adds the new post to the array
            resolve();        // Resolves the promise once the post is added
        }, 2000); // Simulate 2 seconds delay to create a post
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date(); // Set the current time as the last activity time
            resolve(lastActivityTime);     // Resolve with the updated activity time
        }, 1000); // Simulate 1 second delay for updating the activity time
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop(); // Remove the last post from the array
                resolve(poppedElement);            // Resolve the promise with the deleted post
            } else {
                reject("ERROR: No posts available to delete"); // If no posts to delete, reject the promise
            }
        }, 1000); // Simulate 1 second delay for deleting a post
    });
}

// Creating a new post and updating the activity time
Promise.all([
    createPost({ title: 'POST5', body: 'This is POST5' }),  // Creating a new post
    updateLastUserActivityTime()                            // Updating last activity time
])
    .then(([createPostResult, lastActivityTimeResult]) => {
        // Log all posts and the updated lastActivityTime
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTimeResult);
        // lastActivityTimeResult holds the time from when the user's activity was updated (after 1 second). lastActivityTime = lastActivityTimeResult
        // However, lastActivityTimeResult is logged after 2 seconds, when the slower createPost promise also resolves.

        // Now delete the last post
        return deletePost();
    })
    .then((deletedPost) => {
        // Log the remaining posts after deleting the last one
        console.log('Deleted Post:', deletedPost.title);
        console.log('Remaining Posts:', posts);
    })
    .catch((error) => {
        console.log(error);
    });
