import React, {useState} from 'react';
import './form.css'
import styles from './form.module.css'

const Form = (props) => {
    const [album, setAlbum] = useState({
        albumName:'',
        artist:'',
        releaseYear:1930,
        genre:''
    })
    const [error, setError] = useState('')
    const [albumList, setAlbumList] = useState([])

    const handleAlbum = (e) => {
        // console.log('EVENT TARGET NAME: ', e.target.name);
        // console.log('EVENT TARGET VALUE: ', e.target.value);
        setAlbum({...album, [e.target.name]:e.target.value})
    }

    
    const createAlbum = (event) => {
        event.preventDefault();
        if(album.albumName.length < 3 || album.artist.length < 5 || album.releaseYear < 1930 || album.genre.length < 3){
            // alert('Please fill out the form correctly')
            setError('Please fill out the form correctly')
        }
        else{
            setError('')
            // console.log('Album', album);
            setAlbumList([...albumList, album])
    
            setAlbum({
                albumName:'',
                artist:'',
                releaseYear:1930,
                genre:''
            })
        }
        }
    return (
        <div>
            <form onSubmit={createAlbum}>
                {
                    error ?
                    <p className='text-red-500'>{error}</p> :
                    null
                }
                <label htmlFor="albumName">Album Name: </label>
                <input type="text" value={album.albumName} onChange={handleAlbum} name='albumName'/>
                {
                    album.albumName.length < 3 && album.albumName.length > 0 ?
                    <p className='text-red-500'>Album Name must be at least 3 characters</p> :
                    null
                }
                <label htmlFor="releaseYear">Release Year: </label>
                <input type="number" value={album.releaseYear} onChange={handleAlbum} name='releaseYear'/>

                {
                    album.releaseYear < 1930 ?
                    <p className='text-red-500'>Release Year must be at least 1930</p> :
                    null
                }
                <label htmlFor="artist">Artist: </label>
                <input type="text" value={album.artist} onChange={handleAlbum} name='artist'/>
                {
                    album.artist.length < 5 ?
                    <p className='text-red-500'>Artist must be at least 5 characters</p> :
                    null
                }
                <label htmlFor="genre">Genre: </label>
                <input type="text" value={album.genre} onChange={handleAlbum} name='genre'/>
                {
                    album.genre.length < 3 ?
                    <p className='text-red-500'>Genre must be at least 3 characters</p> :
                    null
                }
                <button className='p-4 bg-red-500'>Add Album</button>
            </form>

            {
                albumList && albumList.length > 0 ?
                albumList.map((a) => {
                    return(
                        <div>
                            <p>{a.albumName}</p>
                            <p>{a.artist}</p>
                            <p>{a.genre}</p>
                            <p>{a.releaseYear}</p>
                        </div>
                    )
                }):
                null
            }

        </div>
)}

export default Form;