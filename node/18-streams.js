const {createReadStream} = require('fs')

const readStream = createReadStream(__dirname + '/no de/content/bigfile.txt', 'utf8')

readStream.on('data', () => {
    // console.log('chunk recieved')
})

readStream.on('error', (err) => {
    console.log(err)
})

// Would be good to learn a little more about these
