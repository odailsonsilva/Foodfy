module.exports = {

  date(timestamp){
    const date = new Date(timestamp)
    const year = date.getUTCFullYear()
    const mes = `0${date.getUTCMonth()}`.slice(-2)
    const dia = `0${date.getUTCDate()}`.slice(-2)
    
    return {
      year,
      mes,
      dia,
      iso: `${year}-${mes}-${dia}`
    }

  }
  
}