const http = require('http')
const fs = require('fs')
const homePage = fs.readFileSync('./public/index.html')
const aboutPage = fs.readFileSync('./public/about.html')
const notFoundPage = fs.readFileSync('./public/notFound.html')

const server = http.createServer((req, res) =>{
   if(req.url === '/'){
    res.end(homePage)
   } else if(req.url === '/about'){
        res.end(aboutPage)
   } else{
       res.end(notFoundPage)
   }
    
})

server.listen(5000, ()=>{
    console.log('NodeJS server started on port 5000...')
})