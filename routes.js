const express = require('express') //importante para rotas
const routes = express.Router() // importante para 
const recipes = require('./controllers/recipes')
const pg = require('./controllers/pg')

//rotas pg
routes.get('/', pg.index)
routes.get('/sobre', pg.sobre)
routes.get('/receitas', pg.receitas)
routes.get('/receita/:id', pg.receita)


//rotas recipes
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes // tem que exportar para rotas