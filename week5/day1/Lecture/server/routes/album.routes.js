const AlbumController = require("../controllers/album.controller")


module.exports = (app) => {
    app.get('/api/allAlbums', AlbumController.getAllAlbums)
}