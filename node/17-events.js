const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`data recieved`)
})

customEmitter.on('response', () => {
    console.log(`second response`)
})

customEmitter.on('responseArgs', (name, age) => {
    console.log(`args ${name} ${age}`)
})

customEmitter.emit('response')
customEmitter.emit('responseArgs', 'john', 34)