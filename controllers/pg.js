const dados = require('../data.json')

exports.index = function(req, res){
  return res.render('index', {dados: dados})
}

exports.sobre = function(req, res){
  return res.render('sobre')
}

exports.receitas = function(req, res){
    return res.render('receitas', {dados: dados})
}

exports.receita = function(req, res){
  const {id} = req.params
  const receitaEntrada = dados.recipes.find(function(receita){
    return receita.id == id
  })

  if(!receitaEntrada){
    return res.send("receita nao encontrada")
  }

  return res.render('receita', {receita: receitaEntrada})
}