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

// Function to handle post creation, activity update, and post deletion using async/await
async function managePosts() {
    try {
        // Wait for both createPost and updateLastUserActivityTime to complete using Promise.all
        const [_, lastActivityTimeResult] = await Promise.all([
            createPost({ title: 'POST5', body: 'This is POST5' }),  // Creating a new post
            updateLastUserActivityTime()                            // Updating last activity time
        ]);

        // Log the posts and the updated lastActivityTime
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTimeResult);

        // Delete the last post
        const deletedPost = await deletePost();

        // Log the remaining posts after deleting the last one
        console.log('Deleted Post:', deletedPost.title);
        console.log('Remaining Posts:', posts);
    } catch (error) {
        console.log(error);
    }
}

// Execute the async function
managePosts();
