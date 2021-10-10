const { readFile, writeFile } = require('fs')

const first = readFile('./node/content/first.txt', `utf8`, (err, result) => {
    if (err){
        console.log('err :>> ', err)
        return
    }
    console.log('result :>> ', result)

    const first = result
    readFile(`./node/content/second.txt`,`utf-8`, (err, result)=>{
        if (err){
            console.log('err :>> ', err)
            return
        }
        console.log('result :>> ', result)
        const second = result

        writeFile(`./node/content/third.txt`, `Here is the result : ${first} + ${second}`, (err, result) => {
            if (err){
                console.log('err :>>', err)
                return
            }
            console.log('result :>> ', result);
        })
    })
})