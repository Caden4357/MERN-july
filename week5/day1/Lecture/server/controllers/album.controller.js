const Album = require('../models/album.model')
module.exports = {
    // key value pairs 
    // keys are the names of the controller function 
    // values are the functions 
    getAllAlbums: (req, res) => {
        // some logic 
        Album.find({})
            .then((allAlbums) => {
                res.json(allAlbums)
            })
            .catch((err) => {
                res.json(err)
            })
    }
}