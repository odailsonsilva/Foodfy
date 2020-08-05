const Chef = require('../models/Chef')

module.exports = {
  index(req, res){
    Chef.all(function(chefs){
      return res.render('admin/chefs/index', { chefs })
    })
  },
  create(req, res){
    return res.render('admin/chefs/create')
  },
  show(req, res){
    
    Chef.find(req.params.id, function(chef){

      if(!chef) return res.send('Chef nao encontrado')

      return res.render('admin/chefs/show', { chef: chef })
      
    })

  },
  edit(req, res){
    
    Chef.find(req.params.id, function(chef){
      if(!chef) return res.send('chef nao encontrado')

      return res.render('admin/chefs/edit', {chef})
    })

    
  },
  post(req, res){
    const keys = Object.keys(req.body)
    for(let key of keys){
      if(req.body[key] == "") return res.send("Preencha todos os dados")
    }

    Chef.create(req.body, function(chef){
      return res.redirect(`chefs/${chef.id}`)
    })

  },
  put(req, res){
    const keys = Object.keys(req.body)
    for(let key in keys){
      if(req.body[key] == "") return res.send('preencha todos os campos')
    }

    Chef.update(req.body, function(){
      return res.redirect(`chefs/${req.body.id}`)
    })
    
  },
  
  delete(req, res){
    Chef.delete(req.body.id, function(){
      return res.redirect(`chefs`)
    })
  }
}