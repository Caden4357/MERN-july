const Album = require('../models/album.model')
module.exports = {
    // key value pairs 
    // keys are the names of the controller function 
    // values are the functions 
    // ! Getting all albums
    getAllAlbums: (req, res) => {
        // some logic 
        Album.find({})
            .then((allAlbums) => {
                res.status(200).json(allAlbums)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // ! Gettin one album
    getOneAlbum: (req, res) => {
        console.log(req.params.id);
        const id = req.params.id
        Album.findById(id)
            .then((oneAlbum) => {
                res.status(200).json(oneAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // ! Creating a new album
    createAlbum: (req, res) => {
        console.log(req.body);
        Album.create(req.body)
            .then((newAlbum) => {
                res.status(201).json(newAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // ! Update an album 
    updateAlbum: (req, res) => {
        const id = req.params.id
        Album.findOneAndUpdate(
            {_id: id},
            req.body,
            {new:true, runValidators:true}
        )
            .then((updatedAlbum) => {
                res.status(201).json(updatedAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // ! Delete an album
    deleteAlbum: (req, res) => {
        const id = req.params.id
        Album.deleteOne({_id: id})
            .then((result) => {
                res.status(204).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}