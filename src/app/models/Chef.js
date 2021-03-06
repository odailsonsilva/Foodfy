const db = require('../../config/db')
const {date} = require('../../libs/utils')

module.exports = {
  all(callback){
    db.query(`SELECT * FROM chefs`, function(err, results){
      if(err) `ERRO ALL ${err}`

      callback(results.rows)
    })

  },
  create(data, callback){ //meto ligado ao post
    const query = `
      INSERT INTO chefs(
        name,
        avatar_url,
        created_at
      ) VALUES (
        $1,
        $2,
        $3
      ) RETURNING id
    `

    const values = [
      data.nameChef,
      data.avatar_url,
      date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
      if(err) throw `erro no ChefBD ${err}`

      callback(results.rows[0])
    })
  },
  find(id, callback){
    db.query(`
      SELECT * FROM chefs
      WHERE id = $1
    `, [id], function(err, results){
        if(err) throw `erro no throw ${err}`

        callback(results.rows[0])
    })

  },
  update(data, callback){
    const query = `
      UPDATE chefs SET 
        name=($1),
        avatar_url=($2)
      WHERE id = $3
    `
    const values = [
      data.nameChef,
      data.avatar_url,
      data.id
    ]

    db.query(query, values, function(err, results){
      if(err) throw `ERRO NO UPDATE ${err}`

      callback()
    })
  },
  delete(id, callback){
    db.query(`DELETE FROM chefs WHERE id = $1`, [id], function(err, results){
      if(err) throw `erro no DELETE ${err}`

      callback()
    })
  }
}