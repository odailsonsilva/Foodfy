const fs = require('fs')
const data = require('../data.json')

//index
exports.index = function(req, res){
  return res.render('admin/recipes/index', {dados: data})
}

//create
exports.create = function(req, res){
  return res.render('admin/recipes/create')
}

//show
exports.show =  function(req, res){ //QUERY PARM  
  const { id } = req.params
    

    const encontrouReceita = data.recipes.find(function(receita){
        return receita.id == id;
    })

    if(!encontrouReceita){
        return res.send("receita não encontrado")
    }
    
  return res.render("admin/recipes/show", { receita: encontrouReceita })
}

//edit
exports.edit = function(req, res){
  const {id} = req.params

  const encontrouReceita = data.recipes.find(function(receita){
    if(receita.id == id){
      return receita.id ==id
    }
  })

  if(!encontrouReceita){
    return res.send("receita nao encontrada")
  }

  const receita = {
    ...encontrouReceita
  }
  return res.render('admin/recipes/edit', {receita: receita})
}

//post
exports.post = function(req, res){
  const {imgRecipe, ingredientes, modoPreparo, infAdd} = req.body

  const keys = Object.keys(req.body)
  for(key of keys){
    if(req.body[key] == "") return res.send("Preencha todos os campos")
  }

  let id = 1
  const lastRecipe = data.recipes[data.recipes.length - 1]
  if(lastRecipe){
      id = lastRecipe.id + 1
  }

  data.recipes.push({
    id,
    imgRecipe,
    ingredientes, 
    modoPreparo, 
    infAdd
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send('arquivo nao escrito')

    return res.render("admin/recipes/index")
    
  })
}

//put
exports.put = function(req, res){
  const {id} = req.body
  let index = 0

  const encontrouReceita = data.recipes.find(function(receita, foundIndex){
    if(id == receita.id){
      index = foundIndex
      return true
    }
  })

  if(!encontrouReceita){
    return res.send("receita nao encontrada")
  }

  const receita = {
    ...encontrouReceita,
    ...req.body,
    id: Number(req.body.id)
  }

  data.recipes[index] = receita

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("put nao escrito")

    return res.render(`admin/recipes/show`)
  })
}

//delete
exports.delete = function(req, res){
  const {id} = req.body

  let receitasFiltrada = data.recipes.filter(function(receita){
    return receita.id != id
  })

  data.recipes = receitasFiltrada

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("erros ao escrever para delete")

    return res.render('admin/recipes/index')
  })

}