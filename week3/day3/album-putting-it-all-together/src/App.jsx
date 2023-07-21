import './App.css'
import Form from './components/Form'
import { useState } from 'react'
import Display from './components/Display'
function App() {
  const [albumList, setAlbumList] = useState([])
  return (
    <>
      <Form 
        albumList={albumList}
        setAlbumList={setAlbumList}
      />
      <Display
        albumList={albumList}
        setAlbumList={setAlbumList}
      />
    </>
  )
}

export default App
