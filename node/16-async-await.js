const { readFile, writeFile} = require('fs')

//! To skip promisify you can do this
// const { readFile, writeFile} = require('fs').promises
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// // Promises
// const getText = path => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })      
// }

// getText('../content/first.txt')
//     .then(text => console.log(text))
//     .catch(err => console.log(err))

// Callbacks, pretty ugly
// readFile('./node/content/first.txt', 'utf8', (err, data) => {
//     if (err){
//         return
//     } else {
//         console.log(data)
//     }
// })

const start = async() => {
    try {
        textFirst = readFilePromise('./node/content/first.txt', 'utf8')
        textSecond = readFilePromise('./node/content/second.txt', 'utf8')
        await writeFilePromise('./node/content/third.txt', `Result: ${await textFirst} + ${await textSecond}`, () => {})  
    } catch (error) {
        console.log(error)
    }
}

start()