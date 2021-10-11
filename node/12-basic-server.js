const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about')
    {
        res.end('Welcome to our about page')
    }
    else{
        res.end('Welcome to something else')
    }
}).listen(5000)