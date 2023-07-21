import React, {useState} from 'react';
import axios from 'axios';
const Form = (props) => {
    const [input, setInput] = useState('')
    const [searchResults, setSearchResults] = useState([])

    // const search = (e) => {
    //     e.preventDefault();
    //     // console.log(`https://swapi.dev/api/people/?search=${input}`);
    //     axios.get(`https://swapi.dev/api/people/?search=${input}`)
    //         .then(response => {
    //             // console.log('DATA FROM API --> ', response.data.results);
    //             setSearchResults(response.data.results)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    const searchAsync = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(`https://swapi.dev/api/people/?search=${input}`)
            console.log(response);
            setSearchResults(response.data.results)
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={searchAsync}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={(e) => setInput(e.target.value)}/>
                <button>Search</button>
            </form>
            {
                searchResults.map((char, idx) => (
                    <div key={idx}>
                        <p>Name: {char.name}</p>
                        <p>Birth Year: {char.birth_year}</p>
                    </div>
                ))
            }
        </div>
)}

export default Form;