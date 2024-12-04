const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url == "/profile"){
    res.end("Profile page")
  }
  if(req.url == '/about'){
    res.end('about page')

  }
  if(req.url == '/'){
    res.end('home page')
  }

})

server.listen(3000)
