const express = require('express')
const server = express()
const dados = require('./data')

//configuração nunjucks
const nunjucks = require('nunjucks')
server.use(express.static('public')) //???

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


//rotas 
server.get('/', function(req, res){
    return res.render('index', {dados})
})


// porta para o servidor
server.listen(5000)
