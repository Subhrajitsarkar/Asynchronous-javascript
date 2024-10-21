// // arrow function

// let calculate = (a, b, operation) => {
//     return operation(a, b)
// }

// //method 1
// let addition = calculate(3, 4, function (num1, num2) {
//     return num1 + num2
// })
// console.log(addition)

// //method 2
// let subtraction = (a, b) => a - b
// let result = calculate(8, 3, subtraction) //passing subtraction function, not calling , for calling it should be like this subtraction()
// console.log(result)

// //method 3
// function multiply(a, b) {
//     return a * b;
// }
// let mul = calculate(3, 2, multiply)
// console.log(mul)



function getCheese(cb) {
    setTimeout(() => {
        // Between 0 and 2 seconds, the function is effectively doing nothing except waiting for the timeout to complete.
        let cheese = "🧀";
        console.log('here is cheese', cheese)
        cb(cheese)
    }, 2000)
}
function makeDough(cheese, cb) {
    setTimeout(() => {
        let dough = cheese + '🍩'
        console.log('here is dough', dough)
        cb(dough)
    }, 2000)
}
function bakePizza(dough, cb) {
    setTimeout(() => {
        let pizza = dough + '🍕'
        console.log('here is pizza', pizza);
        cb(pizza)
    }, 2000)
}
getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);

        })
    })
})



// let ticket = new Promise(function (res, rej) {
//     let isBoarded = false;
//     if (isBoarded) {
//         res('you are not in flight')
//     }
//     else {
//         rej('ypur flight has been cancelled')
//     }
// })

// ticket
//     .then((data) => {
//         console.log('wohoo', data);
//     })
//     .catch((data) => {
//         console.log('ohh noo', data);
//     })
//     .finally(() => {
//         console.log('i will always run');
//     })



function getCheese() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let cheese = "🧀";
            // console.log('here is cheese', cheese);
            res(cheese)
        }, 2000)
    })
}
function makeDough(cheese) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let dough = cheese + "🍩"
            // res(dough)
            rej('bad cheese')
        }, 2000)
    })
}
function bakePizza(dough) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let pizza = dough + '🍕'
            res(pizza)
        }, 2000)
    })
}

// getCheese()
//     .then((cheese) => {
//         console.log('here is cheese', cheese);
//         return makeDough(cheese)
//     })
//     .then((dough) => {
//         console.log('here is dough', dough);
//         return bakePizza(dough)
//     })
//     .then((pizza) => {
//         console.log('here is the pizza', pizza);
//     })
//     .catch((err) => {
//         console.log('error occured', err)
//     })
//     .finally(() => {
//         console.log('i always run');
//     })


async function order() {
    try {
        let cheese = await getCheese()
        console.log('here is cheese', cheese);
        let dough = await makeDough(cheese)
        console.log('here is dough', dough);
        let pizza = await bakePizza(dough)
        console.log('here is pizza', pizza)
    }
    catch (err) {
        console.log('error occured', err);
    }
}
order()