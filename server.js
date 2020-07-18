const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

server.use(express.urlencoded({extended: true})) //permite o uso do req.body/params/query
server.use(express.static('public')) //???
server.use(methodOverride('_method'))
server.use(routes)


server.set("view engine", "njk")


nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// porta para o servidor
server.listen(5000)
