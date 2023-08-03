const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    albumName:{
        type:String,
        required: [true, 'You must put an album name'],
        minLength: [2, 'The album name must be at least two characters']
    },
    artist:{
        type:String,
        required: [true, 'You must put an artist name'],
        minLength: [2, 'The artist name must be at least two characters']
    },
    releaseYear:{
        type:Number,
        required: [true, 'You must put a release year'],
        min:[1920, 'No albums before 1920'],
    },
    genre:{
        type:String,
        required: [true, 'You must put a genre'],
        minLength: [3, 'The genre name must be at least four characters']
    },
    isExplicit:{
        type:Boolean,
        required: [true, 'You must fill out this field'],
    }
}, {timestamps:true})

const Album = mongoose.model('Album', AlbumSchema)
module.exports = Album