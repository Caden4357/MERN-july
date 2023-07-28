const express = require("express"); // * this means import express 
const app = express(); // * The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module.
const port = 8000; // * this is the port we are listening to
const { faker } = require('@faker-js/faker');


app.use( express.json() ); // ! this needs to be above the other code blocks. This code block allows us to use json
app.use( express.urlencoded({ extended: true }) ); // ! this needs to be above the other code blocks. This code block allows us to use url encoded data


const generateSong = () => {
    return {
        songName: faker.music.songName(),
        genre: faker.music.genre()
    }
}

app.get('/api/newSong', (req, res) => {
    const song = generateSong()
    res.json(song)
})


// ! this needs to be below the other code blocks
// * this is the code that will start the server
app.listen( port, () => console.log(`Listening on port: ${port}`) );