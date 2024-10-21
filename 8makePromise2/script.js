const posts = [{ title: 'POST1' }, { title: 'POST2' }];

function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    });
}

function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve();
        }, 1000);
    });
}

function create4thPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST4' });
            resolve();
        }, 2000);
    });
}

function create5thPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST5' });
            resolve();
        }, 3000);
    });
}

create3rdPost()
    .then(() => {
        return create4thPost();
    })
    .then(() => {
        return create5thPost();
    })
    .then(() => {
        printPost();
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
