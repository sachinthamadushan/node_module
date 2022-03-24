const http = require('http')

const server = http.createServer( (req,res)=>{

if(req.url === '/'){
    res.end('<h1>Welcome to home page</h1>')
    return
}

if(req.url === '/about'){
    res.end('<h1>About page</h1>')
    return
}

res.end('Oops!!!')

}

)

server.listen(5000)