import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AlbumForm = (props) => {
    const navigate = useNavigate()
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1930,
        genre: '',
        isExplicit: false
    })
    const [errors, setErrors] = useState({})


    const handleAlbum = (e) => {
        if (e.target.type === 'checkbox') {
            setAlbum({ ...album, isExplicit: e.target.checked })
        }
        else {
            setAlbum({ ...album, [e.target.name]: e.target.value })
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/newAlbum', album)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h2>Post your favorite album</h2>
            <form onSubmit={submitHandler} className='w-50 mx-auto'>
                <div>
                    <label htmlFor="albumName">Album Name: </label>
                    <input type="text" value={album.albumName} onChange={handleAlbum} name='albumName' />
                </div>
                {
                    errors.albumName ?
                        <p className='text-danger'>{errors.albumName.message}</p> :
                        null
                }
                <div>
                    <label htmlFor="releaseYear">Release Year: </label>
                    <input type="number" value={album.releaseYear} onChange={handleAlbum} name='releaseYear' />
                </div>
                {
                    errors.releaseYear ?
                        <p className='text-danger'>{errors.releaseYear.message}</p> :
                        null
                }
                <div>
                    <label htmlFor="artist">Artist: </label>
                    <input type="text" value={album.artist} onChange={handleAlbum} name='artist' />
                </div>
                {
                    errors.artist ?
                        <p className='text-danger'>{errors.artist.message}</p> :
                        null
                }
                <div>
                    <label htmlFor="genre">Genre: </label>
                    <input type="text" value={album.genre} onChange={handleAlbum} name='genre' />
                </div>
                {
                    errors.genre ?
                        <p className='text-danger'>{errors.genre.message}</p> :
                        null
                }
                <div>
                    <label htmlFor="explicit">Explicit?</label>
                    <input type="checkbox" name='isExplicit' onChange={handleAlbum} checked={album.isExplicit} />
                    {
                        errors.isExplicit ?
                            <p className='text-danger'>{errors.isExplicit.message}</p> :
                            null
                    }
                </div>
                <button className='btn-form'>Add Album</button>
            </form>
        </div>
    )
}

export default AlbumForm;