const Album = require('../models/album.model')
module.exports = {
    // ! async/await functions
    getAllAlbums: async (req, res) => {
        try{
            const allAlbums = await Album.find({}) // ! await keyword is like saying STOP here dont move forward until this is completed
            res.status(200).json(allAlbums)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    // ! Getting one album
    // getOneAlbum: (req, res) => {
    //     console.log(req.params.id);
    //     const id = req.params.id
    //     Album.findById(id)
    //         .then((oneAlbum) => {
    //             res.status(200).json(oneAlbum)
    //         })
    //         .catch((err) => {
    //             res.status(500).json(err)
    //         })
    // },
    getOneAlbum: async (req, res) => {
        const id = req.params.id
        try{
            const oneAlbum = await Album.findById(id)
            res.status(200).json(oneAlbum)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    // ! Creating a new album
    // createAlbum: (req, res) => {
    //     console.log(req.body);
    //     Album.create(req.body)
    //         .then((newAlbum) => {
    //             res.status(201).json(newAlbum)
    //         })
    //         .catch((err) => {
    //             res.status(500).json(err)
    //         })
    // },
    createAlbum: async (req, res) => {
        try{
            const newAlbum = await Album.create(req.body) 
            res.status(201).json(newAlbum)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    // ! Updating an album 
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

    // ! Deleting an album
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