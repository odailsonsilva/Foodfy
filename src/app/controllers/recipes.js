const Recipe = require('../models/Recipe')

module.exports = {
  index(req, res){

    let {filter, pages, limit} = req.query

    pages = pages || 1
    limit = limit || 2 

    let offset = limit * (pages - 1)

    const params = {
      filter,
      pages,
      limit,
      offset,
      callback(recipes){
        const pagination = {
          total: Math.ceil(recipes[0].total / limit),
          pages
        }

        return res.render('admin/recipes/index', { recipes, pagination, filter })
      }
    }

    Recipe.pagination(params)
  },
  create(req, res){

    Recipe.selectOptionChef(function(option){
      return res.render('admin/recipes/create', {option})
    })

  },
  show(req, res){
    
    Recipe.find(req.params.id, function(recipe){

      if(!recipe) return res.send('Recipe nao encontrado')

      return res.render('admin/recipes/show', { recipe: recipe })
      
    })

  },
  edit(req, res){
    
    Recipe.find(req.params.id, function(receita){
      if(!receita) return res.send('recipe nao encontrado')

      Recipe.selectOptionChef(function(option) {
        return res.render('admin/recipes/edit', {receita, option})
      })
      
    })

    
  },
  post(req, res){
    const keys = Object.keys(req.body)
    for(let key of keys){
      if(req.body[key] == "") return res.send("Preencha todos os dados")
    }

    Recipe.create(req.body, function(recipe){
      return res.redirect(`recipes/${recipe.id}`)
    })

  },
  put(req, res){
    const keys = Object.keys(req.body)
    for(let key in keys){
      if(req.body[key] == "") return res.send('preencha todos os campos')
    }

    Recipe.update(req.body, function(){
      return res.redirect(`recipes/${req.body.id}`)
    })
    
  },
  
  delete(req, res){
    Recipe.delete(req.body.id, function(){
      return res.redirect(`recipes`)
    })
  }
}