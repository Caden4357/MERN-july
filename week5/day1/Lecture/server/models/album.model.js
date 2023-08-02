const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    albumName:{
        type:String
    },
    artist:{
        type:String
    },
    releaseYear:{
        type:Number
    },
    genre:{
        type:String
    },
    isExplicit:{
        type:Boolean
    }
}, {timestamps:true})

const Album = mongoose.model('Album', AlbumSchema)
module.exports = Album