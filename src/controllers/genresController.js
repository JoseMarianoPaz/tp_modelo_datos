const db = require("../database/models");

module.exports = {
    list : (req,res) =>  {
        db.Genero.findAll()
            .then(genres => {
              return  res.render('genresList', {
                  genres
                })
            })
    },
    detail : (req,res) =>  {
        db.Genero.findByPk(req.params.id)
            .then(genre => {
               return res.render('genresDetail', {genre})
            })
            .catch(error => console.log(error))
    }

}
