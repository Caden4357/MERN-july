import React, {useState} from 'react';

const FormObject = (props) => {
    const [album, setAlbum] = useState({
        albumName:'',
        artist:'',
        releaseYear:1930,
        genre:''
    })

    const handleAlbum = (e) => {
        // console.log('EVENT TARGET NAME: ', e.target.name);
        // console.log('EVENT TARGET VALUE: ', e.target.value);
        setAlbum({...album, [e.target.name]:e.target.value})
    }

    
    const createAlbum = (event) => {
        event.preventDefault();

        console.log('Album', album);

        setAlbum({
            albumName:'',
            artist:'',
            releaseYear:1930,
            genre:''
        })
    }
    return (
        <div>
            <form onSubmit={createAlbum}>
                <label htmlFor="albumName">Album Name: </label>
                <input type="text" value={album.albumName} onChange={handleAlbum} name='albumName'/>
                <label htmlFor="releaseYear">Release Year: </label>
                <input type="number" value={album.releaseYear} onChange={handleAlbum} name='releaseYear'/>
                <label htmlFor="artist">Artist: </label>
                <input type="text" value={album.artist} onChange={handleAlbum} name='artist'/>
                <label htmlFor="genre">Genre: </label>
                <input type="text" value={album.genre} onChange={handleAlbum} name='genre'/>
                <button>Add Album</button>
            </form>

            <p>Album Name: {album.albumName}</p>
            <p>Artist: {album.artist}</p>
            <p>Release Year: {album.releaseYear}</p>
            <p>Genre: {album.genre}</p>

        </div>
)}

export default FormObject;