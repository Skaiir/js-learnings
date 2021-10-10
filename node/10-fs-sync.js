const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync(`./node/content/first.txt`, `utf-8`)
const second = readFileSync(`./node/content/second.txt`, `utf-8`)

console.log('first :>> ', first)
console.log('second :>> ', second)

writeFileSync(`./node/content/third.txt`, `Here is there result "${first} + ${second}"`, {flag: `a`})