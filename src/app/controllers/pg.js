const dados = require('../../../data.json')

module.exports = {
  index(req, res){
    return res.render('site/index', {dados: dados})
  },
  
  sobre(req, res){
    return res.render('site/sobre')
  },
  
  receitas(req, res){
      return res.render('site/receitas', {dados: dados})
  },

  chefs(req, res){
    return res.render('site/chefs')
  },

  busca(req, res){
    const {filter} = req.query

    return res.render('site/busca',  {dados: dados, filter})
  },
  
  receita(req, res){
    const {id} = req.params
    const receitaEntrada = dados.recipes.find(function(receita){
      return receita.id == id
    })
  
    if(!receitaEntrada){
      return res.send("receita nao encontrada")
    }
  
    return res.render('site/receita', {receita: receitaEntrada})
  }
}

