const calculator = require("./calc");
const path = require("path");
const myOs = require("os");
const fs = require('fs')
const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.on('Alo', user =>  console.log('hello are you fine? ', user.message));
myEvent.emit('Alo', {num: 8754216, message: 'Im a student'})

// const files =fs.readdirSync('./');
// console.log(files);

// const files = fs.readdir('../', (err, files) => {
//     if(err) {
//         console.log('error' , err)
//     } else {
//         console.log(files)
//     }
// })
// console.log(calculator.sub(33, 4))
// console.log(calculator.add(33, 4))
// console.log(calculator.multi(33, 4))
// console.log(calculator.div(33, 4))
// console.log(calculator)

// console.log(path.parse(__filename).dir);
// console.log(__dirname);

// console.log(myOs.cpus());

// let totalMemory = myOs.totalmem();
// let freeMemory = myOs.freemem();

// console.log(
//   `Total Memory is : ${totalMemory}
// - Free Memory is : ${freeMemory}
// `
// );
