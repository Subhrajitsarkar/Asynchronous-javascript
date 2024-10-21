function create3rdPost(callback) {
    setTimeout(() => {
        console.log('Post Three')
        if (callback) {
            callback();
        }
    }, 3000)
}

function create4thPost(callback) {
    setTimeout(() => {
        console.log('Post Four');
        if (callback) {
            callback();
        }
    }, 2000);
}

function create5thPost() {
    setTimeout(() => {
        console.log('Post Five')
    }, 1000);
}

create3rdPost(() => {
    create4thPost(() => {
        create5thPost();
    });
});
