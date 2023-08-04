import React, { useState, useEffect } from 'react';
import axios from 'axios'
const DisplayAllAlbums = (props) => {
    const [allAlbums, setAllAlbums] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
            .then((response) => {
                setAllAlbums(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <h2 className='text-center'>All Albums</h2>
            <div className='d-flex flex wrap justify-content-between w-75 mx-auto'>
                {
                    allAlbums.map((album) => (
                        <div className='border border-2px-solid-white p-2'>
                            <p>Album Name: {album.albumName}</p>
                            <p>Artist: {album.artist}</p>
                            <p>Genre: {album.genre}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default DisplayAllAlbums;