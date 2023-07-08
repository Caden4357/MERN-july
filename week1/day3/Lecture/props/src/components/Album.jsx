import React from 'react'

export default function Album(props) {
    return (
        <div>
            <h2>Album: {props.albumName}</h2>
            <h2>Artist: {props.bandName}</h2>
            <h2>Release Year: {props.releaseYear}</h2>
            <h2>Genre: {props.genre}</h2>
        </div>
    )
}
