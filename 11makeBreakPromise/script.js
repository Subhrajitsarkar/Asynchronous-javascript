const blogs = [];

function create1stBlog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push({ title: 'BLOG1' });
            resolve();
        }, 3000);
    });
}

function create2ndBlog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push({ title: 'BLOG2' });
            resolve();
        }, 2000);
    });
}

function deleteBlog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (blogs.length > 0) {
                const deletedBlog = blogs.pop();
                resolve(deletedBlog);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

// Call the functions in the correct way to get the desired output
create1stBlog()
    .then(() => create2ndBlog())
    .then(() => deleteBlog())
    .then((deletedBlog) => {
        console.log(deletedBlog.title); //BLOG2
        return deleteBlog();
    })
    .then((deletedBlog) => {
        console.log(deletedBlog.title); //BLOG1
        return deleteBlog();
    })
    .then((deletedBlog) => {
        console.log(deletedBlog.title); //ERROR: ARRAY IS EMPTY
    })
    .catch((error) => {
        console.log(error);
    });
