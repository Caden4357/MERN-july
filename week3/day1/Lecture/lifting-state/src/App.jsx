import './App.css'
import Form from './components/Form'
import { useState } from 'react'
import Display from './components/Display'
function App() {
  const [albumList, setAlbumList] = useState([])
  return (
    <>
      <h1>Forms with Validations</h1>
      <Form 
        albumList={albumList}
        setAlbumList={setAlbumList}
      />
      <Display
        albumList={albumList}
      />
    </>
  )
}

export default App
