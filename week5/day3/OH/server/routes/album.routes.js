const AlbumController = require("../controllers/album.controller")


module.exports = (app) => {
    app.get('/api/allAlbums', AlbumController.getAllAlbums)
    app.get('/api/oneAlbum/:id', AlbumController.getOneAlbum)
    app.post('/api/newAlbum', AlbumController.createAlbum)
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum)
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum)

}