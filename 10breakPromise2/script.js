const posts = [{ title: 'POST1' }];

function create2ndPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST2' });
            resolve();
        }, 3000);
    });
}

function create3rPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve();
        }, 2000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
                //Resolves the Promise and passes the popped element as the result, so it can be used in a subsequent .then() callback.
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

// Using .then and .catch to handle promises sequentially
//.then(() => deletePost());  // No need for return or curly braces, as it implicitly returns the promise
// create2ndPost()
//     .then(() => {
//         return deletePost();  // Using return is necessary with curly braces
//     });
create2ndPost()
    .then(() => deletePost())
    .then((deletedPost) => {
        console.log(deletedPost.title); // Assume deletedPost is { title: 'POST2' }
        return create3rPost(); // Starts creating POST3
    })
    .then(() => deletePost())
    .then((deletedPost) => {
        console.log(deletedPost.title); // Assume deletedPost is { title: 'POST3' }
        return deletePost(); // Prepare to delete POST1 next
    })
    .then((deletedPost) => {
        console.log(deletedPost.title); // Assume deletedPost is { title: 'POST1' }
        return deletePost(); // Attempt to delete again
    })
    .then((deletedPost) => {
        console.log(deletedPost.title); // Print ERROR: ARRAY IS EMPTY
    })
    .catch((error) => {
        console.log(error);
    });
