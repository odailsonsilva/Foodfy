const db = require('../../config/db')
const {date} = require('../../libs/utils')

module.exports = {
  all(callback){
    db.query(`SELECT * FROM recipes`, function(err, results){
      if(err) `ERRO ALL ${err}`

      callback(results.rows)
    })

  },
  create(data, callback){ //meto ligado ao post
    const query = `
      INSERT INTO recipes(
        image,
        title,
        ingredients,
        preparation,
        information,
        chef_id,
        created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
      ) RETURNING id
    `

    const values = [
      data.imgRecipe,
      "pizza",
      data.ingredientes,
      data.modoPreparo,
      data.infAdd,
      data.chefSelect,
      date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
      if(err) throw `erro no RecipeBD ${err}`

      callback(results.rows[0])
    })
  },
  find(id, callback){
    db.query(`
      SELECT * FROM recipes
      WHERE id = $1
    `, [id], function(err, results){
        if(err) throw `erro no throw ${err}`

        callback(results.rows[0])
    })

  },
  update(data, callback){
    const query = `
      UPDATE recipes SET 
        image = ($1),
        title = ($2),
        ingredients = ($3),
        preparation = ($4),
        information = ($5),
        chef_id  = ($6)
      WHERE id = $7
    `

    const values = [
      data.imgRecipe,
      "pizza",
      data.ingredientes,
      data.modoPreparo,
      data.infAdd,
      data.chefSelect,
      data.id
    ]

    db.query(query, values, function(err, results){
      if(err) throw `ERRO NO UPDATE ${err}`

      callback()
    })
  },
  delete(id, callback){
    db.query(`DELETE FROM recipes WHERE id = $1`, [id], function(err, results){
      if(err) throw `erro no DELETE ${err}`

      callback()
    })
  },
  selectOptionChef(callback){
    db.query(`SELECT name, id FROM chefs ORDER BY chefs.name`, function(err, results){
      if(err) throw `erro no selectOptionChef ${err}`

      callback(results.rows)
    })
  },
  pagination(params){
    let {filter, limit, offset, callback} = params

    let query = "",
    filterQuery = "",
    totalQuery = `(SELECT count(*) FROM recipes) AS total`

    if(filter){
      filterQuery = `WHERE recipes.name ILIKE '%${filter}%'`
      totalQuery = `(SELECT count(*) FROM recipes ${filterQuery}) AS total`
    }

    query = `SELECT recipes.*, ${totalQuery}
    FROM recipes
    ${filterQuery}
    LIMIT $1 OFFSET $2`

    db.query(query, [limit, offset], function(err, results){
      if(err) throw `erro na paginacao ${err}`

      callback(results.rows)
    })
  }
}