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

server.get('/sobre', function(req, res){
    return res.render('sobre')
})

server.get('/receitas', function(req, res){
    return res.render('receitas', {dados})
})

// porta para o servidor
server.listen(5000)
