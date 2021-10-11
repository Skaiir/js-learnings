const { readFile } = require('fs')
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        for(let i = 0; i < Math.pow(10, 10); i++){
            continue
        }
        res.end('Home')
    }
    else{
        res.end('Other')
    }
}).listen(5000, () => {
    console.log('Server listening on port 5000')
})