const path = require('path')

console.log(path.sep)

const filePath = path.join('/node', 'content', 'test.txt')
console.log('filePath :>> ', filePath)

const base = path.basename(filePath)
console.log('base :>> ', base)

const abs = path.resolve(__dirname, 'node', 'content', 'test.txt')
console.log('abs :>> ', abs)

