import React, {useState} from 'react';

const Form = (props) => {
    const [albumName, setAlbumName] = useState('')
    const [releaseYear, setReleaseYear] = useState('')

    const handleAlbumName = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        setAlbumName(event.target.value)
    }

    const handleReleaseYear = (event) => {
        // console.log(event);
        setReleaseYear(event.target.value)
    }



    const createAlbum = (event) => {
        event.preventDefault();


        const newAlbum = {albumName, releaseYear}
        console.log('Album', newAlbum);

        setAlbumName('')
        setReleaseYear(1930)
    }
    return (
        <div>
            <form onSubmit={createAlbum}>
                <label htmlFor="albumName">Album Name: </label>
                <input type="text" value={albumName} onChange={handleAlbumName}/>
                <label htmlFor="albumName">Release Year: </label>
                <input type="number" value={releaseYear} onChange={handleReleaseYear}/>
                <button>Add Album</button>
            </form>

            <p>Album Name: {albumName}</p>
            <p>Release Year: {releaseYear}</p>
        </div>
)}

export default Form;

