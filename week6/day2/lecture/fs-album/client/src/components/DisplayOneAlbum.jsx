import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
const DisplayOneAlbum = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [album, setAlbum] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
            .then((res) => {
                setAlbum(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Album Name: {album.albumName}</h1>
            <h2 className='text-center'>Artist: {album.artist}</h2>
            <h2 className='text-center'>ReleaseYear: {album.releaseYear}</h2>
            <h2 className='text-center'>Genre: {album.genre}</h2>
            {
                album.isExplicit? 
                <p className='text-center'>This is explicit</p>:
                <p className='text-center'>For all ages</p>
            }
            <button onClick={() => deleteHandler(album._id)} className='btn btn-danger'>Delete {album.albumName}</button>
        </div>
)}

export default DisplayOneAlbum;