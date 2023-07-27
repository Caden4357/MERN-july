const express = require("express"); // * this means import express 
const app = express(); // * The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module.
const port = 8000; // * this is the port we are listening to

app.use( express.json() ); // ! this needs to be above the other code blocks. This code block allows us to use json
app.use( express.urlencoded({ extended: true }) ); // ! this needs to be above the other code blocks. This code block allows us to use url encoded data

// * This is just some placeholder data that we will be using for our routes today
// * this is not connected to a database this is just an array of objects I hard coded
// * normally this would be data that is coming from a database. We will learn how to connect to a database tomorrow and next week
const albums = [
    {id: 1, albumName: 'Iowa', artist: 'Slpiknot'},
    {id: 2, albumName: 'The Infamous', artist: 'Mobb Deep'},
    {id: 3, albumName: 'Homework', artist: 'Daft Punk'},
    {id: 4, albumName: 'The Best Of Sade', artist: 'Sade'},
    {id: 5, albumName: 'Flying Microtonal Banana', artist: 'King Gizzard & the Lizard Wizard'}
]
// * /api - this is the route that we are listening to localhost:8000/api
// * the second argument is a callback function that will run when the route is hit
// * request is an object that contains all the information about the request that was made to the server
// * response is an object that contains all the methods for sending a response to the client
// * response.json() will send a json response to the client
// * response.json() can take in an object as an argument and it will send that object as a json response to the client
app.get('/api', (request, response) => {
    response.json(albums)
})

app.get('/api/:id', (request, response) => {
    console.log(request.params.id);
    response.json({message:"You did it"})
})

app.post('/api/newAlbum', (request, response) => {
    console.log(request.body);
    albums.push(request.body)
    response.json({message: "You added a new album"})
})

// ! this needs to be below the other code blocks
// * this is the code that will start the server
app.listen( port, () => console.log(`Listening on port: ${port}`) );
