// HTTP
const http = require('http');

const server = http.createServer((req, res)=>{
    
    if(req.url=== '/'){
    res.end(`<h1>Hello Welcome to our home page</h1>`);
    }
    if(req.url=== '/about'){
    res.end(`<h1>Hello Welcome to our About page</h1>`);
    }
    

});

server.listen(5000)