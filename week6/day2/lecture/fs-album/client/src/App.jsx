import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import DisplayAllAlbums from './components/DisplayAllAlbums'
import AlbumForm from './components/AlbumForm'
import DisplayOneAlbum from './components/DisplayOneAlbum'
import UpdateAlbum from './components/UpdateAlbum'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<DisplayAllAlbums/>}/>
        <Route path='/albumForm' element={<AlbumForm/>}/> 
        <Route path='/album/:id' element={<DisplayOneAlbum/>}/>
        <Route path='/editAlbum/:id' element={<UpdateAlbum/>}/>
      </Routes>
    </>
  )
}

export default App
