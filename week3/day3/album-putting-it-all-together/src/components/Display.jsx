import React, { useState } from 'react';

const Display = (props) => {
    console.log(props);
    const {albumList, setAlbumList} = props

    const toggleCheckbox = (album) => {
        // console.log(album);
        const updatedAlbums = albumList.map((al) => {
            if(album === al){
                al.isExplicit = !al.isExplicit
            }
            return al
        })
        setAlbumList(updatedAlbums)
    }

    const deleteAlbum = (album) => {
        const updatedAlbums = albumList.filter((al) => album !== al)
        setAlbumList(updatedAlbums)
    }
    return (
        <div className='album-container'>
            {
                albumList && albumList.length > 0 ?
                    albumList.map((a, idx) => {
                        return (
                            <div className='album' key={idx}>
                                <p>Album Name: {a.albumName}</p>
                                <p>Artist: {a.artist}</p>
                                <p>Genre: {a.genre}</p>
                                <p>Release Year: {a.releaseYear}</p>
                                <input type="checkbox" name='isExplicit' checked={a.isExplicit} onChange={() => toggleCheckbox(a)}/>
                                {
                                    a.isExplicit?
                                    <p className='explicit'>&#127348;</p>:
                                    null
                                }
                                <button onClick={() => deleteAlbum(a)}>Delete Album</button>
                            </div>
                        )
                    }):
                    null
            }
        </div>
    )
}

export default Display;