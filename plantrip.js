function buycar(cb) {
    setTimeout(() => {
        console.log('buy a car');
        cb()
    }, 2000)
}
function plantrip(cb) {
    setTimeout(() => {
        console.log('planned a trip');
        cb()
    }, 1500)
}
function reach(cb) {
    setTimeout(() => {
        console.log('reach to manali')
        cb()
    }, 1000)
}
function travel() {
    setTimeout(() => {
        console.log('travelling to manali')
    }, 500)
}

buycar(() => {
    plantrip(() => {
        reach(() => {
            travel()
        })
    })
})

// function buycar(cb1, cb2, cb3) {
//     setTimeout(() => {
//         console.log('buy a car');
//         cb1(cb2, cb3)
//     }, 2000)
// }
// function plantrip(cb4, cb5) {
//     setTimeout(() => {
//         console.log('planned a trip');
//         cb4(cb5)
//     }, 1500)
// }
// function reach(cb6) {
//     setTimeout(() => {
//         console.log('reach to manali')
//         cb6()
//     }, 1000)
// }
// function travel() {
//     setTimeout(() => {
//         console.log('travelling to manali')
//     }, 500)
// }
// buycar(plantrip, reach, travel)



function buycar() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('buy a car')
        }, 2000)
    })
}
function plan() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('planned a trip')
        }, 1500)
    })
}
function reach() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('reached to manali')
            // rej('Error in reach function')
        }, 1000)
    })
}
function travel() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('travelling to manali')
        }, 500)
    })
}

// buycar()
//     .then((msg1) => {
//         console.log(msg1)
//         return plan()
//     })
//     .then((msg2) => {
//         console.log(msg2)
//         return reach()
//     })
//     .then((msg3) => {
//         console.log(msg3)
//         return travel()
//     })
//     .then((msg4) => {
//         console.log(msg4)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


async function names() {
    try {
        let msg1 = await buycar()
        console.log(msg1)
        let msg2 = await plan()
        console.log(msg2)
        let msg3 = await reach()
        console.log(msg3)
        let msg4 = await travel()
        console.log(msg4)
    }
    catch (err) {
        console.log(err)
    }
}
names()