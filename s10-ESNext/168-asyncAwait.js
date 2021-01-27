const { fstat } = require("fs");
const { map, forEach } = require("lodash");

const esperarPor = (tempo=4000) => new Promise(resolve => {
    setTimeout(() => resolve(), tempo);
})

// esperarPor()
//     .then(() => console.log('Async/Await 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Async/Await 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Async/Await 3...'));

async function executar(){
    await esperarPor();
    console.log("Async/Await 1");

    await esperarPor();
    console.log("Async/Await 2");

    await esperarPor();
    console.log("Async/Await 3");
}
// async function executar(){
//     esperarPor();
//     console.log("Async/Await 1");

//     esperarPor();
//     console.log("Async/Await 2");

//     esperarPor();
//     console.log("Async/Await 3");
// }
executar();
