const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// porta para o servidor
server.listen(5000, function(){
    console.log('Servidor funcionando')
})
