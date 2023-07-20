import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [starwarsChars, setStarWarsChars] = useState([])

  // useEffect(() => {
  //   axios.get('https://swapi.dev/api/people')
  //     .then(res => setStarWarsChars(res.data.results))
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(() => {

  }, [])



  const getStarWarsChars = () => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => {
        setStarWarsChars(res.data.results)
        console.log(res.data.results);
        console.log('Hi');
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Axios & useEffect</h1>
      <button onClick={getStarWarsChars}>Click to load the top ten Starwars characters</button>
      {
        starwarsChars.map((char, i) => (
          <p key={i}>Name: {char.name}</p>
        ))
      }
    </>
  )
}

export default App
